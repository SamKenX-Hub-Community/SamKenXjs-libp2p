'use strict'

const debug = require('debug')
const log = debug('libp2p:envelope')
log.error = debug('libp2p:envelope:error')
const errCode = require('err-code')

const crypto = require('libp2p-crypto')
const multicodec = require('multicodec')
const PeerId = require('peer-id')

const Protobuf = require('./envelope.proto')

/**
 * The Envelope is responsible for keeping arbitrary signed by a libp2p peer.
 */
class Envelope {
  /**
   * @constructor
   * @param {object} params
   * @param {PeerId} params.peerId
   * @param {Buffer} params.payloadType
   * @param {Buffer} params.payload marshaled record
   * @param {Buffer} params.signature signature of the domain string :: type hint :: payload.
   */
  constructor ({ peerId, payloadType, payload, signature }) {
    this.peerId = peerId
    this.payloadType = payloadType
    this.payload = payload
    this.signature = signature

    // Cache
    this._marshal = undefined
  }

  /**
   * Marshal the envelope content.
   * @return {Buffer}
   */
  marshal () {
    if (this._marshal) {
      return this._marshal
    }
    // TODO: type for marshal (default: RSA)
    const publicKey = crypto.keys.marshalPublicKey(this.peerId.pubKey)

    this._marshal = Protobuf.encode({
      public_key: publicKey,
      payload_type: this.payloadType,
      payload: this.payload,
      signature: this.signature
    })

    return this._marshal
  }

  /**
   * Verifies if the other Envelope is identical to this one.
   * @param {Envelope} other
   * @return {boolean}
   */
  isEqual (other) {
    return this.peerId.pubKey.bytes.equals(other.peerId.pubKey.bytes) &&
      this.payloadType.equals(other.payloadType) &&
      this.payload.equals(other.payload) &&
      this.signature.equals(other.signature)
  }

  /**
   * Validate envelope data signature for the given domain.
   * @param {string} domain
   * @return {Promise}
   */
  async validate (domain) {
    const signData = createSignData(domain, this.payloadType, this.payload)

    try {
      await this.peerId.pubKey.verify(signData, this.signature)
    } catch (_) {
      log.error('record signature verification failed')
      // TODO
      throw errCode(new Error('record signature verification failed'), 'ERRORS.ERR_SIGNATURE_VERIFICATION')
    }
  }
}

/**
 * Helper function that prepares a buffer to sign or verify a signature.
 * @param {string} domain
 * @param {number} payloadType
 * @param {Buffer} payload
 * @return {Buffer}
 */
const createSignData = (domain, payloadType, payload) => {
  // TODO: this should be compliant with the spec!
  const domainBuffer = Buffer.from(domain)
  const payloadTypeBuffer = Buffer.from(payloadType.toString())

  return Buffer.concat([domainBuffer, payloadTypeBuffer, payload])
}

/**
 * Unmarshal a serialized Envelope protobuf message.
 * @param {Buffer} data
 * @return {Envelope}
 */
const unmarshalEnvelope = async (data) => {
  const envelopeData = Protobuf.decode(data)
  const peerId = await PeerId.createFromPubKey(envelopeData.public_key)

  return new Envelope({
    peerId,
    payloadType: envelopeData.payload_type,
    payload: envelopeData.payload,
    signature: envelopeData.signature
  })
}

/**
* Seal marshals the given Record, places the marshaled bytes inside an Envelope
* and signs with the given private key.
* @async
* @param {Record} record
* @param {PeerId} peerId
* @return {Envelope}
*/
Envelope.seal = async (record, peerId) => {
  const domain = record.domain
  const payloadType = Buffer.from(`${multicodec.print[record.codec]}${domain}`)
  const payload = record.marshal()

  const signData = createSignData(domain, payloadType, payload)
  const signature = await peerId.privKey.sign(signData)

  return new Envelope({
    peerId,
    payloadType,
    payload,
    signature
  })
}

/**
 * Open and certify a given marshalled envelope.
 * Data is unmarshalled and the siganture validated with the given domain.
 * @param {Buffer} data
 * @param {string} domain
 * @return {Envelope}
 */
Envelope.openAndCertify = async (data, domain) => {
  const envelope = await unmarshalEnvelope(data)
  await envelope.validate(domain)

  return envelope
}

module.exports = Envelope