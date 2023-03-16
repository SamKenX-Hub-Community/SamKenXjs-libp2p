## [0.35.8](https://github.com/libp2p/js-libp2p/compare/v0.35.7...v0.35.8) (2021-12-29)


### Bug Fixes

* do not wait for autodial start ([#1089](https://github.com/libp2p/js-libp2p/issues/1089)) ([79b3cfc](https://github.com/libp2p/js-libp2p/commit/79b3cfc6ad02ecc76fe23a3c3ff2d0b32a0ae4a8))
* increase listeners on any-signal ([#1084](https://github.com/libp2p/js-libp2p/issues/1084)) ([f18fc80](https://github.com/libp2p/js-libp2p/commit/f18fc80b70bf7b6b26fffa70b0a8d0502a6c4801))
* look for final peer event instead of peer response ([#1092](https://github.com/libp2p/js-libp2p/issues/1092)) ([d2b7ec0](https://github.com/libp2p/js-libp2p/commit/d2b7ec0f6be0ee80f2c963279a8ec2385059a889))
* record tracked map clears ([#1085](https://github.com/libp2p/js-libp2p/issues/1085)) ([b4b4324](https://github.com/libp2p/js-libp2p/commit/b4b432406ebc08ef2fc3a1922c64cde7c9060cae))



## 0.1.0 (2023-03-16)


### ⚠ BREAKING CHANGES

* requires an instance of `interface-datastore@8.x.x`
* update multiformats (#1535)
* the `FaultTolerance` enum should now be imported from `@libp2p/interface-transport`
* the connection manager and registrar are internal types and as such not part of the libp2p interface, instead use the methods exposed on the root libp2p type for obtaining connections and protocols (see the upgrade guide)
* libp2p.hangUp and libp2p.fetch require PeerId or Multiaddr objects the same as other methods
* the libp2p opts have changed to accept a metrics object factory function instead of a config object
* modules no longer implement `Initializable` instead switching to constructor injection
* the old behaviour was to dial any peer we discover, now we just add them to the peer store instead
* the `loadKeychain` method has been removed as it is no longer necessary
* Streams are now `Duplex<Uint8ArrayList, Uint8ArrayList | Uint8Array>`
* `connectionManager.peerValue` has been removed, use `peerStore.tagPeer` instead
* limit protocol streams per-connection (#1255)
* uses new single-issue libp2p interface modules
* types are no longer hand crafted, this module is now ESM only
* abort-controller dep is gone from dependency tree
* `libp2p.handle`, `libp2p.registrar.register` and the peerstore methods have become async
* requires node 15+
* libp2p-kad-dht has a new event-based API which is exposed as `_dht`
* datastore implementations provided to libp2p must be compliant with interface-datastore@6.0.0
* uses the CID class from the new multiformats module
* dialProtocol does not return connection when no protocols are provided
* pubsub signing policy properties were changed according to libp2p-interfaces changes to a single property. The emitSelf option default value was also modified to match the routers value
* * feat: gossipsub 1.1
* this drops testing support in node 10.
* all API methods with peer-info parameters or return values were changed. You can check the API.md document, in order to check the new values to use
* * chore: deprecate old peer-store api
* switch configuration has changed. 'blacklistTTL' is now 'denyTTL' and 'blackListAttempts' is now 'denyAttempts'
* new configuration for deciding the implementation of pubsub to be used. In this context, the experimental flags were also removed. See the README for the latest usage.
* The ipfs interface specified that options should be provided after the handler, not before. https://github.com/ipfs/interface-js-ipfs-core/blob/v0.109.0/SPEC/PUBSUB.md#pubsubsubscribe
* dht experimental flag was removed and a dht.enabled property was added to the config

### Features

* (BREAKING CHANGE) overhaul libp2p config and constructor ([6905f1b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6905f1ba41fe72a685704ecd15938e197a005230))
* abort all pending dials on stop ([ba02764](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ba02764c5fbd81c3ae8c87d269d0aee9a1145177))
* add autonat support ([#1298](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1298)) ([d6c8601](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d6c86015b537bd853909c43cd2243cc1d3132455)), closes [#1005](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1005)
* add check for protector and enforced pnet ([2b7cc55](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2b7cc55c88e93a34a727d7ae3fc73ebba538230b))
* add ConnectionManager#getAll ([8f680e2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8f680e20e93cdf52296f91ebdf49c5af01b67135))
* add createLibp2p to generate a PeerInfo instance ([#367](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/367)) ([04faf18](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/04faf1806c185d1d381741802c814b0a5ff2ce58))
* add datastore to config ([40e840d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/40e840d5fd1a8cd170fca33e77540a44cfa2bc17))
* add delegated peer and content routing support ([#242](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/242)) ([a95389a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a95389a28e9242a1dd1abc7e4b254aa622665acc))
* add early token recycling in ([a5b54a7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a5b54a7017f2123e8528adf9918c636a5c2d666a))
* add explicit error for case peer id not included in multiaddr ([#155](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/155)) ([bd8a35a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bd8a35aaf9fa7a4355b1c115ddc42fea7451475f))
* add fetch protocol ([#1036](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1036)) ([d8ceb0b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d8ceb0bc66fe225d1335d3f05b9a3a30983c2a57))
* add libp2p.connections getter ([#522](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/522)) ([6445fda](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6445fda050d8fba7495ac14dd0f664ac54d73812))
* add maxNumProviders to findprovs ([#283](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/283)) ([970deec](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/970deec2a4e3ccff8c00d3caedb96b9044c1ef69))
* add ping to the mix ([f8c09db](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f8c09db20f05bbb40af73615b0c088a33354a551))
* add pubsub to libp2p ([0c543b7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0c543b7180ee510f90dcb73bf858c355af940057))
* add the CI stuffs ([e10ec13](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e10ec13c334e133432df4f2416d94630f8499e3f))
* add token based dialer ([e445a17](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e445a17278a0e098366a5a1391fc6cb6a29d15c9))
* add UPnP NAT manager ([#810](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/810)) ([0a6bc0d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0a6bc0d1013dfd80ab600e8f74c1544b433ece29))
* address and proto books ([#590](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/590)) ([e9d225c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e9d225c9dc1a387ab2848184d6ddad540b89e98d))
* address manager ([2a7967c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2a7967c1cc0f4535b805cc4502370da2fbecb717))
* allow configurable validators and selectors to the dht ([#288](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/288)) ([7d12eb9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/7d12eb9e265a273af4602ab5cde52b2c5a369160))
* allow per-component metrics to be collected ([#1061](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1061)) ([2f0b311](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2f0b311df7127aa44512c2008142d4ca30268986))
* allow skipping encryption and custom muxer factory in upgrader ([#1411](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1411)) ([6615efa](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6615efa683f55425f90c70815467ec5ddfed1fcb))
* allow skipping upgrade steps for incoming connections ([#1502](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1502)) ([987c738](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/987c7383a8493e89ccb9f91120940b1383334f1a))
* allow transport options to be passed on creation ([#524](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/524)) ([c339be1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c339be10ee78ea0fd0db5d6946d66a96932dce29))
* append peer id to multiaddr if not there ([59ea9c3](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/59ea9c388fb56b3dc14ccf74343ccc29e053a4a9))
* async peerstore backed by datastores ([#1058](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1058)) ([978eb36](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/978eb3676fad5d5d50ddb28d1a7868f448cbb20b))
* auto dial discovered peers ([#349](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/349)) ([01aa447](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/01aa44724e4525a0a457590fca4d2fe6d4f4b452))
* auto relay ([#723](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/723)) ([caf66ea](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/caf66ea1439f6b75a0c321a16bd5c5d7d6a2bd47))
* auto relay network query for new relays ([0bf0b7c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0bf0b7cf8968d55002ac4c559ffb59985feeb092))
* Bring libp2p-websocket-star to the Transports family! 🌟 ([#122](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/122)) ([95f029e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/95f029eb7a1d26b4b9088e76cbb0866dcaa54234))
* cerified addressbook ([8f2e690](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8f2e69048fb6316ea9321f686db34e0a7277d03a))
* coalescing dial support ([#518](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/518)) ([15f7c2a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/15f7c2a9742483420a7bdd5d4be559e6cb6061b5))
* conditionally emit errors ([f71fdfd](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f71fdfdf353172d1418a1690ae5493c52692d57d))
* configure metrics implementation as a module instead of shipping a built-in version ([#1471](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1471)) ([5e9dcf3](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5e9dcf3d404a975d01ee7171305cc2ab07ea7307))
* connection gater ([#1142](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1142)) ([ff32eba](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ff32eba6a0fa222af1a7a46775d5e0346ad6ebdf))
* convert to typescript ([#1172](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1172)) ([199395d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/199395de4d8139cc77d0b408626f37c9b8520d28))
* create base libp2p.Node class ([5d0b25c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5d0b25cb00f640de3ddaa8b7558c9ffbf1cfdd9c))
* create self peer record in identify ([8a97dde](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8a97dded2695d8423bc92547aa52bfbcd21b165e))
* custom and store self agent version + store self protocol version ([#800](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/800)) ([d0a9fad](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d0a9fada32677ee3b810d5c2fb8d5e2c4f5a9fef))
* custom announce filter ([ef9d3ca](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ef9d3ca2c6f35d692d6079e74088c5146d46eebe))
* custom dialer addr sorter ([#792](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/792)) ([585ad52](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/585ad52b4c71dd7514e99a287e0318b2b837ec48))
* custom protocol name ([#962](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/962)) ([ef24fab](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ef24fabf0269fd079888e92eedb458e23ef1c733))
* deny incoming connections and add allow/deny lists ([#1398](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1398)) ([c185ef5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c185ef549f599510f258d5d67883f7062c1c944b))
* dialProtocol and small refactor ([6651401](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6651401f0bedda96df28d7744bd6bde8d6f12197))
* discover and connect to closest peers ([#798](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/798)) ([baedf3f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/baedf3fe5ab946e938db1415d1662452cdfc0cc1))
* discovery modules ([#486](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/486)) ([18a062e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/18a062ed12ca38ed0205ad4ed5b09abc7c7fd124))
* discovery modules from transports should be added ([#510](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/510)) ([f1eb373](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f1eb3732354714bee40d76f6fd8e686bae1d2e2e))
* enable and test Circuit Relay ([29cc0af](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/29cc0afc645e3ff339bb89f7961c860e3370bdd9))
* enable dht by default ([#313](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/313)) ([c4cab00](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c4cab007af5e7ec170615941230c18c893eece8a))
* enable peer discovery modules by default ([e320854](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e320854db7e82b273d8ed194ab6e957207c25e0c))
* enable relay by default (no hop) ([#254](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/254)) ([686379e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/686379efb0553d5d45fb178ee08212c8ad6e17c3))
* exchange signed peer records in identify ([e50f0ee](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e50f0eeb7b62d8f476d667876d1a2f58cdef23d8))
* export Node class at the top level ([0c87dbc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0c87dbc8f3fcbaf15689b061d835d593b5b6173c))
* gossipsub 1.1 ([#733](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/733)) ([55c9bfa](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/55c9bfac444bf830fb837f4ad7697bf76fa7cf7b))
* implement circuit v2 ([#1533](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1533)) ([d605cbe](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d605cbe318d2b2461011181c36659d9e9108b7f4))
* integrate gossipsub by default ([#365](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/365)) ([791f39a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/791f39a09bbd0204ba8218fce0204f31d8ce5499))
* keybook ([ce38033](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ce38033c10c5f20d084767152bf98f1dec4a84aa))
* keychain rotate passphrase ([#944](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/944)) ([478963a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/478963ad2d195444494c0acc54cb3847a29e117c))
* **keychain:** add support for ed25519 and secp keys ([#725](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/725)) ([51d7ca4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/51d7ca44c1df94e15d5f267291c5923dd0111610))
* limit protocol streams per-connection ([#1255](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1255)) ([de30c2c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/de30c2cec79d1e9d758cbcddc11d315b17843343))
* make libp2p a state machine ([#257](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/257)) ([0b75f99](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0b75f99d752f7960ce4377d54b098be914600200))
* metadata book ([#638](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/638)) ([84b935f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/84b935f682cbcd5bfe1d5c6901439112d7d4227e))
* new discovery interface ([5dd5d37](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5dd5d37f6a1a3b1852ca1948d155fc037e497d2c))
* new super simplified API ([a6623c1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a6623c1ba20e189e769e12f7bf304610a7e38e6c))
* not remove peer from peerBook on disconnect ([a4b41b0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a4b41b0f9a1f243913e11a3243a0a80148393f81))
* p2p addrs situation ([#119](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/119)) ([cad173e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/cad173e3bdb7c0f57f68d89a237e37fe0b988044))
* pass libp2p as option to transport creation ([#363](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/363)) ([b06ca1b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b06ca1b3c739acc8475b39dbfd0a2c16f4175ec8))
* peer store ([#470](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/470)) ([582094a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/582094a834f915aab621c6475dbdca1442ca0819))
* peerStore persistence ([5123a83](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5123a8357b6ecde22137291f28a79f82a99f61b9))
* prepare for new randomWalk config parameters ([91e60d4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/91e60d42539d72e8edfa568b06cf2ce556ac23d6))
* programmatically set agentVersion for use in identify ([#1296](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1296)) ([0bb1b80](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0bb1b802c8fc2f32eaef10efbc88005dce6c6020)), closes [#686](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/686) [#1240](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1240)
* promisify all api methods that accept callbacks ([#381](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/381)) ([df6ef45](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/df6ef45a2d95e27385c4f91d092361c1d6f8fa07))
* registrar ([#471](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/471)) ([9d52b80](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9d52b80c454991e22e2ba03e9def601f20cbe5e4))
* resolve multiaddrs before dial ([#782](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/782)) ([093c0ea](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/093c0ea13f9106de037fdf3b243a4709c5832de7))
* set and hook up libp2p-connection-manager ([#184](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/184)) ([d597204](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d5972045da2d0d502a51aa5ed8b31dedccd4110a))
* sign pubsub messages ([#362](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/362)) ([40978a1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/40978a19409244531b5a9bed7d2efc9e43e85ab1))
* signed peer records record manager ([3e5d450](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3e5d450eca75072065a6c354c90695bf96b6bac7))
* start libp2p nodes by default ([#1500](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1500)) ([61fcc0b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/61fcc0b688214d3f8c84bc68bd6192738ae0fdfd)), closes [#1499](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1499)
* state events and query changes ([#100](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/100)) ([73f2f6d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/73f2f6d050e18e0f4679e423b14b0e347bdceded))
* support custom listener options ([#822](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/822)) ([8691465](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8691465a525b45c2737e2e44dd5651b0211f1348))
* support dial only on transport manager to tolerate errors ([#643](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/643)) ([698c1df](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/698c1df1b4d96729ba1228b8aa37a79bfd75ceef))
* support peer-id instances in peer store operations ([#491](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/491)) ([8da9fc9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8da9fc97d4047155f4fc247acfe8f1a688518aa5))
* support unsubscribe all for pubsub ([#321](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/321)) ([6e76aad](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6e76aade7ff69fc689d948e02fede35070209b19))
* support websockets, even if no listener is added ([40fdc41](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/40fdc4147cb173f8f8a1b12497633c230a21cc04))
* update dht ([#1009](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1009)) ([2f598eb](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2f598eba09cff4301474af08196158065e3602d8))
* update events to conform with [#74](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/74) ([f73c045](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f73c045767bef34977d5a8eb2acf7594f313f9eb))
* update libp2p interfaces ([#1252](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1252)) ([d4dd664](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d4dd664071476e3d22f53e02e7d66099f3265f6c))
* update to the latest switch ([#336](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/336)) ([eee60ed](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/eee60ed37d1e0611964e18cc311f0ee5fea23138))
* updated connection manager and dialer with new interface methods ([#1586](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1586)) ([f6f73a2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f6f73a21ebf15d1811fb95cc3972f950c0f52789))
* use class-is for type checks ([bb0c990](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bb0c9905ed87da5965e3faf33623e242d0bb26da))
* use libp2p-switch ([23e8293](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/23e8293b7509d75e8a33efb1a9e1d2188ada9126))
* use package-table vs custom script ([a63432e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a63432e24b489a14e161e6ceb0854f358658c0f9))
* use tag values to choose which connections to close ([#1276](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1276)) ([b1b2b21](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b1b2b216daf12caccd67503dfd7b296b191c5b83))


### Bug Fixes

* accept two incoming PING streams per peer ([#1617](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1617)) ([afaee4c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/afaee4c3e11c5c66da52afc1c0c40f1d55f02928))
* add after upgrade inbound method ([#1422](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1422)) ([487b942](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/487b94240e244e31ebadb2f8229c1465717454eb))
* add callback to pubsub.unsubscribe and test ([#300](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/300)) ([679d446](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/679d446daa0b43c5a1d77c8f300b34c32c678022))
* add clientMode dht arg and upgrade interface-datastore ([#918](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/918)) ([975e779](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/975e77991e67dd9bff790b83df7bd6fa5ddcfc67))
* add getProtocols method ([#1523](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1523)) ([57a56aa](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/57a56aa9d32f81066667ad6641fda5980df8e1c3))
* add maxtimeout to dht get ([#248](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/248)) ([69f7264](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/69f7264123a3521d28a635b14d77af82ffdf98f6))
* add null check in libp2p.hangUp() ([c940f2d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c940f2d3841e54103cedde55c5e7da32424b7994))
* add null property guards ([80f0b60](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/80f0b6077ad7545f5cd8ff1ea8cfa269f6b5b0e0))
* add pending connection limit ([#1423](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1423)) ([b717beb](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b717bebf6db1483fc52595a2a137685162d29dca))
* add register and unregister methods to root node object ([#1536](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1536)) ([bdf53ae](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bdf53ae0d8fcca93f20e6e3d22669aa725dcac70))
* add successful stream peer to protobook ([#1341](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1341)) ([8880eef](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8880eefa8ffeff1203cdf5053a17dbf45f43cc3d))
* add timeout for circuit relay ([#1294](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1294)) ([ba56c64](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ba56c6466232ad4aa5025e2db084c5c9ccd4e5d0))
* add timeout for incoming connections and build-in protocols ([#1292](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1292)) ([750ed9c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/750ed9c35f095aa6e136a801ccd792f2190f38a1))
* add tracked map ([#1069](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1069)) ([b425fa1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b425fa12304def2a007d43a0aa445c28b766ed02))
* add transport manager to exports map and fix docs ([#1182](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1182)) ([cc60cfd](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/cc60cfde1a0907ca68f658f6de5362a708189222))
* add yamux interop tests ([#1290](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1290)) ([b87632f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b87632f97f44aecf583df06aed865bc4e087391a))
* added missing dep async ([45b0f61](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/45b0f618244ccfc05f71d456498de10a4216d03f))
* addition of ipfs id appendix must come before transport filtering ([291e79f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/291e79fc993f28d3a25271896192c670ab64ba0f))
* address book guarantees no replicated entries are added ([#927](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/927)) ([ac370fc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ac370fc9679b51da8cee3791b6dd268d0695d136))
* address book should not emit peer event if no addresses are known ([b4fb9b7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b4fb9b7bf266ba03c4462c0a41b1c2691e4e88d4))
* address book should not emit peer event if no addresses are known  [#887](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/887) ([44463b9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/44463b914587dddea0ec28cc21c1eae0b0148a53))
* allow certain keychain operations without a password ([#726](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/726)) ([8c56ec0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8c56ec0d23474669c55546975319a7abf5d39e77))
* allow configuring circuit stream limits ([#1542](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1542)) ([f82e6b8](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f82e6b86e375b86e71cd339660a348ecba4bf68d))
* allow dialing multiaddrs without peer ids ([#1548](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1548)) ([398e231](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/398e231337c3db1ccd5b4254fb18ab1903aa68b2))
* allow exporting PeerIds from the keychain ([#1546](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1546)) ([141e072](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/141e0722ee2cd92b2b928767710de7443b5a4c56))
* allow listening on duplicate addresses ([#1472](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1472)) ([030dbc8](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/030dbc81a8743b98bbc0542bd40aece099ed44f6))
* allow reading PeerId from keychain ([#1552](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1552)) ([0831cd9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0831cd960d423545ee60b457d66a6a996888804b))
* allow switch to be configured ([#354](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/354)) ([eb5aa03](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/eb5aa0323215c366382c929b69016414875e9454))
* always emit when a connection is made ([72f37ac](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/72f37acd4a54bf5c3b67647d1723f556a59a43e5))
* avoid deleting nodes from peerBook ([300936f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/300936f2f3d43fd378473e540b6ef83f04918db1))
* avoid using superstruct interface ([aa95ab9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/aa95ab992836159ab8e1b0817aca8594dca1bb71))
* await peer discovery start in libp2p start ([#600](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/600)) ([bd7fd0f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bd7fd0f7554b45c1b06c39de57e9b479b250711f))
* await unhandle of protocols ([#1144](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1144)) ([d44bd90](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d44bd9094fe9545054eb8eff68f81bc52ece03e7))
* bail when discovering self ([#357](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/357)) ([f28dffb](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f28dffb2684abbd4ca84c5502c2f6f8deb2d0713))
* browser example ci ([3b33fb4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3b33fb4b73ba8065e432fb59f758fe138fd23d9e))
* bundle-size ([#298](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/298)) ([d497961](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d49796193866b5b75595572a080cc7b2720f1547))
* cache build artefacts ([#1091](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1091)) ([5043cd5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5043cd56435a264e83db4fb8388d33e9a0442fff))
* callback with error for invalid or non-peer multiaddr ([#232](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/232)) ([c8a86db](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c8a86db3109d8134c3569a5af06da98b71517453))
* catch error in upgrader close call ([e04224a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e04224a1e264295551b73e056db8fbd16bb8e8f2))
* catch errors during identify ([#1138](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1138)) ([12f1bb0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/12f1bb0aeec4b639bd2af05807215f3b4284e379))
* catch errors when reconnecting old peers ([#1352](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1352)) ([886759b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/886759b7fb3c14f243d4e74b1714930424bb7453))
* catch pipe errors ([#678](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/678)) ([a8219e6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a8219e61a0fb45456c040b3690d15a27a052e9cf))
* chat example with new multiaddr ([#946](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/946)) ([d8ba284](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d8ba2848833d9fb8a963d1b7c8d27062c6f829da))
* circle ci, thanks victor! ([4224c1f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4224c1fe61cef7539fe7019d0753a881f92942a9))
* circuit relay v2 follow up items ([#1619](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1619)) ([b085562](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b0855622a760f96c34c12d262d94514834521ffe)), closes [#1608](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1608) [#1610](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1610)
* clean up peer discovery flow ([#494](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/494)) ([12fc069](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/12fc069873026f1122fecc461d44ee1ae0d157d6))
* clean up pending dial targets ([#1059](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1059)) ([bdc9f16](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bdc9f16d0cbe56ccf26822f11068e7795bcef046))
* clean up pending dials abort per feedback ([633b0c2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/633b0c291f44ffe977ff0a24cdc090e2f392d877))
* cleanup open streams on conn close ([#791](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/791)) ([06f26e5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/06f26e586fb2652d2ea1258d3862f3ddd27ab2e0))
* close short-lived connections first when pruning by tag value ([#1517](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1517)) ([40fe372](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/40fe3725c5733fc2cb5072b7ad09858724f8d870)), closes [#1509](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1509)
* close stream after sending identify ([#1424](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1424)) ([a74d22a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a74d22a2cddf9ffdca26447fe21a62b5d13e773d))
* close streams when protocol limits are reached ([#1301](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1301)) ([3c0fb13](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3c0fb13babe295c8e5284345080bd4434f39efa7))
* conn mgr access to moving averages record object ([#897](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/897)) ([5f702f3](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5f702f3481afd4ad4fbc89f0e9b75a6d56b03520))
* conn mngr min/max connection values ([#528](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/528)) ([ba4681b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ba4681b312e9f3a95bb57d4d46d24c0c2dd061d7))
* connection direction should be only inbound or outbound ([9504f19](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9504f1951a3cca55bb7b4e25e4934e4024034ee8))
* connection emits ([#352](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/352)) ([313b1ea](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/313b1eae20d399b9d31857a9a089e25270723ab5))
* connection pruning ([#1235](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1235)) ([f9073ec](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f9073ecd215e119b7a864e2ad31fe7067322c754))
* correct method on peer-book ([031ecb3](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/031ecb3fe7a3dbad5ef3194e2a2db63537c93d01))
* correct release readme ([ce8e60b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ce8e60bb0d4ba87520653cb9412531ca8ef96ba2))
* correct transport config check ([e52ce66](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e52ce66ab7b4e83166d9f4ba2093bbf52ed8816d))
* create dial target for peer with no known addrs ([#715](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/715)) ([7da9ad4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/7da9ad44ab0b946198452f24a4614d5785ee85a2))
* create has optional peer id type ([#875](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/875)) ([eeda056](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/eeda05688330c17b810bf47544ef977386623317))
* decode.fromReader usage ([2afdbb7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2afdbb71b2ad083ba4834f78d0977018afcc8728))
* demand pubsub subclass instead of pubsub instance ([#922](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/922)) ([086b0ec](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/086b0ec0df2fac93845d0a0a6b2e2464e869afcd))
* dht config ([#359](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/359)) ([f3801f0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f3801f0e6c26d88ef59acd3cba6b76e50b8beb25))
* dht configuration selectors and validators ([#919](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/919)) ([cc1f4af](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/cc1f4af879a58e94538591851d0085ff98cd2641))
* dht get options ([4460e82](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4460e8246c76f123fc46fa919287176ea401e4d1))
* dial protocol should throw if no protocol is provided ([#914](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/914)) ([21c9aee](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/21c9aeecb13440238aa6b0fb5a6731d2f87d4938))
* dial self ([#826](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/826)) ([6350a18](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6350a187c7c207086e42436ccbcabd59af6f5e3d))
* dialer leaking resources after stopping ([#947](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/947)) ([b291bc0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b291bc06ec13feeb6e010730edfad754a3b2dc1b))
* dialling duplicated addresses ([#1489](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1489)) ([9fd58c8](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9fd58c84b963ae3ad021e0ec1d864105b1613f46)), closes [#1409](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1409)
* disable dht by default [#338](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/338) ([#339](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/339)) ([e52ce66](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e52ce66ab7b4e83166d9f4ba2093bbf52ed8816d))
* discovery mechanism examples not working ([#1365](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1365)) ([d281a60](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d281a60dac973eeb0c842ffd70cd8bad3ae1156a)), closes [#1229](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1229)
* do not add abort signals to useless addresses ([#913](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/913)) ([06e8f3d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/06e8f3dd42432e4b37ab7904b02abde7d1cadda3))
* do not add observed address received from peers ([#882](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/882)) ([a36b211](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a36b2112aafcee309a02de0cff5440cf69cd53a7))
* do not allow dial to large number of multiaddrs ([#954](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/954)) ([af723b3](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/af723b355e1ddf4aecf439f81c3aa67613d45fa4))
* do not append peer id to path addresses ([#1547](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1547)) ([bd2bdf7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bd2bdf7ca0d87ab63b2e9acf7edf7a5752e0559c))
* do not auto-dial peers ([#1397](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1397)) ([ca30192](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ca3019283497040314603d9ca7c0b65c64d1680c))
* do not let closest peers run forever ([#1047](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1047)) ([91c2ec9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/91c2ec9856a3e972b7b2c9c4d9a4eda1d431c7ef))
* do not mutate the config object ([ac5cacb](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ac5cacba339a94a900367155d5d0317c29f30cf8))
* do not return self on peerstore.peers ([15613cc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/15613ccf19deb0032cc6cc80e7a1bc4677c6c65f))
* do not use assert in async funcs ([#88](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/88)) ([2e326e1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2e326e1619c0337d97612c708e94950dfbd9a6ec))
* do not wait for autodial start ([#1089](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1089)) ([79b3cfc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/79b3cfc6ad02ecc76fe23a3c3ff2d0b32a0ae4a8))
* do upnp hole punch after startup ([#1217](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1217)) ([d5386df](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d5386df68478a71ac269acb2d00d36a7a5c9ebc5))
* dont allow multiaddr dials without a peer id ([#558](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/558)) ([a317a8b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a317a8b0118ea03b76cdc430c9e28e2451b84532))
* dont call callback before it's properly set ([17b5f73](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/17b5f73b3d216465b7bc6c28efe2dfbfe260352f))
* dont override methods of created instance ([#394](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/394)) ([3e95e6f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3e95e6f9e4affc2c89961cdf621624c44865aebd))
* emit peer discovery for dht discovery ([9e7a080](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9e7a080a5c31ff5c86fee1cc83bcdde053d26da3))
* emit peer:connect after all ([#1171](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1171)) ([d16817c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d16817ca443443e88803ee8096d45debb14af91b))
* enable identify service all the time ([#1440](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1440)) ([931e042](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/931e042228d286dfc604f91951316b83fa1734f3))
* encode enums correctly ([#1210](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1210)) ([4837430](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4837430d8bcdbee0865eeba6fe694bc71fc6c9bb))
* ensure identify streams are closed ([#551](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/551)) ([f662fdc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f662fdcf3643f6975e39111e2ffb610de96d7958))
* ensure streams are closed on connection close ([4c6be91](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4c6be9158879161955b178d15e9898fad8592fd7))
* ensure streams are closed when protocol negotiation fails ([#1236](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1236)) ([eee256d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/eee256db8ab65cea7228b1683403417edfdb1367))
* event emitter and interfaces types for discovery and routing ([#934](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/934)) ([302bb90](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/302bb9005891aa06b70a5f354bfac6b2d5a3c3b8))
* event emitter types with local types ([#864](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/864)) ([6c41e30](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6c41e3045608bcae8061d20501be5751dad8157a))
* **example:** rename misleading variable ([#645](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/645)) ([b781911](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b781911ac26bb4f87de39f72eeba6cd31dad2349))
* examples readme typos ([#481](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/481)) ([35ac02d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/35ac02dcb5e67612033879e4bdab28eaa34b163f))
* exclude peers without multiaddrs from auto dial ([#1568](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1568)) ([e12202e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e12202e9236c4cacb10938c1101563f4c7cf580c))
* explicitly close streams when connnections close ([#1221](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1221)) ([b09eb8f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b09eb8fc53ec1d8f6280d681c9ca6a467ec259b5))
* expose getPublicKey ([#1188](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1188)) ([1473044](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/147304449e5f8d3acb8b00bdd9588b56830667c6))
* expose identify service properties ([#1529](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1529)) ([43d0bc6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/43d0bc6c63eedbc72805d29aacb1378e43910dbf))
* expose metrics and registrar, use dht for peer discovery ([#1183](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1183)) ([64bfcee](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/64bfcee5093b368df0b381f78afc2ddff3d339a9))
* expose the muxed stream interface on inbound streams ([52a615f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/52a615f9229080f9c792f1732e4aeafc4d1a5355))
* fix uncaught promise rejection when finding peers ([#1044](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1044)) ([3b683e7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3b683e715686163e229b7b5c3a892327dfd4fc63))
* fix unintended aborts in dialer ([#1185](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1185)) ([35f9c0c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/35f9c0c79387232465848b450a47cafe841405e7))
* flakey identify test firefox ([#774](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/774)) ([60d437f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/60d437f59539e6be8a5f216a63bb134fb912cc6d))
* forward connection manager events on and update types ([#1524](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1524)) ([58cc480](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/58cc4804827cae92a2fff3babb1201099577f671))
* **identify:** make agentversion dynamic and add it to the peerstore ([#724](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/724)) ([726a746](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/726a746479f1623aeb01b721acedad748ced0656))
* import uint8arrays package in example ([#1083](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1083)) ([c3700f5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c3700f55d5a0b62182d683ca37258887b24065b9))
* improve config defaults ([#409](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/409)) ([3eef695](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3eef695bc0f0b4548c4fa10ccd30b54f945df5ab))
* improve get peer info errors ([714b6ec](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/714b6ec2b941d0536248123169c5c9dacfebc371))
* improve pubsub example ([#1549](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1549)) ([ba8527c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ba8527c317b9f1f31f5066b6204fda35d393058f))
* increase listeners on any-signal ([#1084](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1084)) ([f18fc80](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f18fc80b70bf7b6b26fffa70b0a8d0502a6c4801))
* increase maxlisteners on event target ([#1050](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1050)) ([b70fb43](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b70fb43427b47df079b55929ec8956f69cbda966)), closes [#900](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/900)
* increase the maxlisteners for timeout controllers ([#1065](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1065)) ([09a0f94](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/09a0f940df7fdb4ece34604e85693709df5c213e))
* interface-datastore update ([f5c1cd1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f5c1cd1fb07bc73cf9d9da3c2eb4327bed4279a4))
* keychain optional pw and use interfaces for validators and selectors instead ([#924](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/924)) ([88b0415](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/88b04156bf614650c2b14d49b12e969c5eecf04d))
* last touches ([2c23d9a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2c23d9a718158c786bd2a7a61509f1e74dd02812))
* libp2p connections getter ([aaf62a4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/aaf62a40ec629a1f99b2152faa3f3c0b1eed1e0f))
* linting ([6106915](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/610691592307193059f177099906f18df9ac773a))
* load self key into keychain on startup if not present ([#1357](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1357)) ([1f38ab7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/1f38ab7ac8380c9501b252d076bb356662978882)), closes [#1315](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1315)
* lock wrtc to 0.1.1 ([6507379](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/65073792aa93866cfaecd40d84fbe0a0e7f11730))
* look for final peer event instead of peer response ([#1092](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1092)) ([d2b7ec0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d2b7ec0f6be0ee80f2c963279a8ec2385059a889))
* main ci ([#1079](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1079)) ([d1c48dc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d1c48dcbeded828f2dd3044cc9aed3f17f02846d))
* make circuit relay listening addresses more forgiving ([#604](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/604)) ([e192eb6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e192eb6508c04b14eedf0810ea87eae5a8464a37))
* make dialer configurable ([#521](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/521)) ([4ca481b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4ca481b869906bc655a33437227c9422fb143445))
* make error codes consistent ([#1054](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1054)) ([b25e0fe](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b25e0fe5312db58a06c39500ae84c50fed3a93bd))
* make subscribe comply with ipfs interface ([#389](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/389)) ([9554b05](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9554b05c6fd23199390dcc84a06d4782c2cd92d5))
* make tests more reliable ([#1139](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1139)) ([b7e8706](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b7e87066a69970f1adca4ba552c7fdf624916a7e))
* make the config less restrictive ([#329](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/329)) ([5f92acd](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5f92acd5bbbd1cb00f29352ea61eb519f387180d))
* MaxListenersExceeded warning ([#1297](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1297)) ([627b8bf](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/627b8bf87c775762dd6a9de69b77852e48ebcf26))
* metrics stats and moving averages types ([#915](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/915)) ([3d0a79e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3d0a79eff3bc34a5bdc8ffa31e9b09345a02ad9d))
* move abortable-iterator to dependencies ([#992](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/992)) ([122c89d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/122c89dd0df55a59edaae078e3dc7c31b5603715)), closes [#986](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/986)
* moving averages record types ([#935](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/935)) ([b5a9eb2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b5a9eb208763efa027d0b4caae87c515b6f5869b))
* not dial all known peers in parallel on startup ([#698](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/698)) ([9ccab40](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9ccab40fc81f0667cacba461cdeb42edf3e16c98))
* not started yet ([#297](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/297)) ([fdfb7b4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/fdfb7b4e861a417c2abbaecb7ef7bfec953dfd36))
* onConnect should not add addr to the addressBook ([2b45fee](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2b45fee0ed25035796de4c21d477fdbcbe3dbda7))
* only configure the latency monitor if a limit is configured ([#1527](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1527)) ([1147550](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/114755019b6c4d8ffe12ca6822c66fc46d9834e7))
* only use a single export ([#596](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/596)) ([3072875](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/30728753cf64d5a3bdcc5c49d7a3c21d99e6e22e))
* overwrite stream fields after handshake ([#1305](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1305)) ([43b0418](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/43b04189987f11a7729b522d1e1dbdc1caceb874))
* pass libp2p to discovery services ([#597](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/597)) ([9e35fbc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9e35fbc316a0d8e40bf979a64aa9ea06a19839f7))
* pass libp2p to the dht ([#700](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/700)) ([5a84dd5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5a84dd56d0666f5d6d7033fd926695611babe9ba))
* pass whole dht config into DHT constructor ([91e60d4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/91e60d42539d72e8edfa568b06cf2ce556ac23d6))
* peer discovery type in config ([#878](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/878)) ([3e7594f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3e7594f69733bf374b374a6065458fa6cae81c5f))
* peer record interop with go ([#739](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/739)) ([93dda74](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/93dda740859a3f018d28553041d75664d2285c32))
* peer routing for delegate router ([#377](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/377)) ([905c911](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/905c9119466c11f3e68097df68505aa3e7cb247c))
* peerRouting.findPeer() trying to find self ([#941](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/941)) ([a79c6b5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a79c6b50d7fddbcdb1af53efae922cecad4c9a83))
* performance bottleneck in stat.js ([#463](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/463)) ([93a1e42](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/93a1e42ef31ad1b864f6b3268bdfae8198d7f6c9))
* ping multiaddr from peer not previously stored in peerstore ([#719](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/719)) ([2440c87](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2440c872df3c10664e96adfc61b32b2afa3c72b5))
* pipe muxer/connection input/output streams in parallel ([#1491](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1491)) ([fb5fa3d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/fb5fa3d5b84e21c6e26407df7eb323d68038fe5d)), closes [#1342](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1342)
* prepend connection addr to circuit relay address ([#1355](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1355)) ([509e56a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/509e56a60359f98ec435f8519c6a499641cce212))
* prevent "The libp2p node is not started yet" when stopping ([#138](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/138)) ([c88eaf4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c88eaf416c036be6e8a1e73a2fdfa422db7fd89c))
* prevent auto-dialer from dialing self ([#1104](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1104)) ([9b22c6e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9b22c6e2f987a20c6639cd07f31fe9c824e24923))
* private ip ts compile has no call signatures ([#1020](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1020)) ([77d7cb8](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/77d7cb8f0815f2cdd3bfdfa8b641a7a186fe9520))
* promisified methods ([#398](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/398)) ([ff7a6c8](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ff7a6c86a0f236151337a50f57cf57b1afecfb47))
* protect against duplicate token releases ([6ad840c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6ad840c3f303ca789be4ec214cc250eda831b4c3))
* pubsub configuration ([#404](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/404)) ([b0f124b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b0f124b5ffe2e46f90492bd7fa9bb59850bb6e13))
* pubsub default config ([#393](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/393)) ([f4f3f0f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f4f3f0f03aa3735a3a6d4b2baff33a7255fe47cf))
* pubsub promisify ([#456](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/456)) ([ae6af20](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ae6af20e8eca0a029ae953c2f32b5a5f65bc4bb6))
* record tracked map clears ([#1085](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1085)) ([b4b4324](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b4b432406ebc08ef2fc3a1922c64cde7c9060cae))
* reduce identify message size limit ([#1230](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1230)) ([824720f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/824720fb8f21f868ed88e881fbc3ce6b9459600d))
* reference files directly to avoid npm install failures ([#408](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/408)) ([b3deb35](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b3deb356f1910924757c9159f5f1a2ff06f8b80c))
* regenerate protobuf defs ([#1439](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1439)) ([e10eea2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e10eea24d40243c12584429a3b3012488f82bd00))
* registrar is not calling topology on peer reconnect ([#1504](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1504)) ([5a62f4f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5a62f4f22f3d9658ae7356568283d443a76df4ea)), closes [#1496](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1496)
* registrar should filter the disconnected conn ([#532](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/532)) ([bb2e56e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bb2e56e6c71935268eca621bffb47de86a97a927))
* reject connections when not running ([#1146](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1146)) ([902f10d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/902f10d58d1062e812eb27aa0e2256e3fde5d3f6))
* reject rather than throw in get peer info ([#410](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/410)) ([60b0cbc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/60b0cbc1793d121ea7431ac32fa4d0137e86caf6))
* release tokens as soon as they are available ([2570a1b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2570a1ba30b4735c4214541171b4b7ebb25cf6cf))
* remove .only ([be9eafe](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/be9eafe20fb9a97b9b153e2b5efb25ff20c0f6b7))
* remove @libp2p/components ([#1427](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1427)) ([a3847f2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a3847f2d1725b1c92d5e0ef7bcdf840ea8428a75))
* remove abort-controller dep ([#1095](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1095)) ([0a4dc54](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0a4dc54d084c901df47cce1788bd5922090ee037))
* remove inline arg types from function definitions ([#916](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/916)) ([2af692f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2af692fb4de572168524ae684608fc6526de4ef7))
* remove innactive multiaddrs ([#131](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/131)) ([1b7360f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/1b7360fcfa7f4ab2609e66f12eeb17395e2da3af))
* remove ipfs dependency and upgrade multiaddr ([#1387](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1387)) ([633d4a9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/633d4a9740ea02e32c0bb290c0a3958b68f181e9))
* remove mplex prefix from muxer errors ([#1304](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1304)) ([05e8e7e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/05e8e7ead96d494bdd7dfa5d6430155670066767))
* remove node global ([#587](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/587)) ([9b13fe3](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9b13fe321a931a746187e9d236695950243dad1f))
* remove p-settle dependency, use Promise.allSettled instead ([#1593](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1593)) ([6e47308](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/6e47308d89f17ee9a92f486f237aeeb01f309a81))
* remove peer discovery module config checks ([4ad70ef](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4ad70efb000a48f3cad060834f0142b3828aa05c))
* remove strings from fetch and hangUp ([#1495](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1495)) ([bae32ba](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/bae32bafce75a3801a7a96f77a9ccf43b3208f9c))
* remove test/dialing/utils extra file ([689c35e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/689c35ed1c68e514293a9895d496e2e8440454e9))
* remove transport manager from exports map ([#1525](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1525)) ([d77405c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d77405c52f331a85325c0d24ef86874b2f5c4cd4))
* remove unnecessary log ([a01b947](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a01b9479eb1cfe2d1a0157d231d17563c5d88538))
* remove unneeded peerbook puts ([#348](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/348)) ([e5f19e8](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e5f19e860b5ab0c07016eb62f4742382605f3322))
* remove use of assert module ([#561](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/561)) ([a8984c6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a8984c6cd3d33addee0412e55ddd48da0fbb6149))
* replace node buffers with uint8arrays ([#730](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/730)) ([1e86971](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/1e869717ff910c400018cdc84ea6bf0d640a86fc))
* replace peerInfo addresses with listen addresses ([#485](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/485)) ([1999606](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/1999606ecc010b55e0568559fb7e145d589edf1c))
* report dialer metrics ([#1377](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1377)) ([0218acf](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0218acfae26fa69475b2ce0678b1c754c7eda605))
* reset discovery services upon stop ([#618](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/618)) ([ea0621b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ea0621b2f672185fcc5001bd3d9ea67ed92333f1))
* retimer reschedule does not work as interval ([#710](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/710)) ([999c1b7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/999c1b7740691ff5d725a66feeb5f9d33d837e41))
* revert config changes from [#1520](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1520) ([#1522](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1522)) ([2fa2893](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2fa28931025ffb93d985dad1269165f81709c048))
* revert new identify protocol versions ([3158366](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/31583665798fbd58eff3871d9aa1ad21f10faa4d))
* routers should only use dht if enabled ([#885](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/885)) ([a34d2bb](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a34d2bbcc3d69ec3006137a909a7e8c53b9d378e))
* signature compliant with spec ([4ab125e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4ab125e0177bde0be11acd94b97fc6050d19222b))
* simplify pnet exports ([#1213](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1213)) ([3148060](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/31480603f3e17d838d2685573995218a1e678e7a))
* specify max stream args separately ([#1254](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1254)) ([5371729](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/53717296468ef17fdc3e0dda9d5908b15d2772a1))
* specify pbjs root ([#917](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/917)) ([b043bca](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b043bca607565cf534771e6cf975288a8ff3030b))
* start and stop connection manager with libp2p ([6106915](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/610691592307193059f177099906f18df9ac773a))
* start and stop error callback ([#316](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/316)) ([8047fb7](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8047fb76facff77ecfe3553fbf73e320d1e532a3))
* start kad dht random walk ([#251](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/251)) ([dd934b9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/dd934b9690ae8f1498bb9aa586863e8d6f092a62))
* stop dht before connection manager ([#1041](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1041)) ([3a9d5f6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3a9d5f64d96719ebb4d3b083c4f5832db4fa0816))
* stop discoveries ([#530](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/530)) ([4222c49](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/4222c49556cd572cd1621b5b5895ee1937350f17))
* stop stream after first pong received ([#545](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/545)) ([be8fc9d](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/be8fc9daf1e8d2e633c084d92686fd8fe85986bd))
* store multiaddrs during content and peer routing queries ([#865](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/865)) ([45c3367](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/45c33675a7412c66d0fd4e113ef8506077b6f492))
* store remote agent and protocol version during identify ([#943](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/943)) ([818d2b2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/818d2b2a98736f4242694479089396f6070cdad5))
* stub new connection manager accept incoming connection method ([#1404](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1404)) ([5ad175c](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5ad175cb3918da0956f6c1c336f5423a551c78a8))
* **test:** improve flakey random walk discovery test ([#574](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/574)) ([f4ec355](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f4ec35573e2f0c9fd58ee0bb032c5eaa55d4f3e5))
* the API of es6-promisify is not the same as promisify-es6 ([#905](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/905)) ([a7128f0](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a7128f07ec8d4b729145ecfc6ad1d585ffddea46))
* throw if no conn encryption module provided ([#665](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/665)) ([c038550](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c038550fad5b285528d87427fc5fa37ba2b0ba3f))
* time out slow reads ([#1227](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1227)) ([a1220d2](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a1220d22f5affb64e64dec0cd6a92cd8241b26df))
* token release logic ([90ecc57](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/90ecc57dbc02e35d0f21067df9e6690ee8e1bfb9))
* transport manager fault tolerance should include tolerance to transport listen fail ([#893](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/893)) ([3f314d5](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3f314d5e90f74583b721386d0c9c5d8363cd4de7))
* try all peer addresses when dialing a relay ([#1140](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1140)) ([63aa480](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/63aa480800974515f44d3b7e013da9c8ccaae8ad))
* turn compliance tests into devDependency ([#960](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/960)) ([0701de4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/0701de40b1ebdf319959846d8c4fdd30b3cf34a4))
* type definitions for big dialrequest and persistent peerstore ([#1078](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1078)) ([cb0d7d6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/cb0d7d6c99d179498f04e76df76e70e4f7d41c4c))
* types from ipfs integration ([#832](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/832)) ([9ae1b75](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9ae1b758e99e3fc9067e26b4eae4c15ccb1ba303))
* typo in DHT setup ([#151](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/151)) ([61bebd1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/61bebd10fcfd745b6b8be6cb393a1f65f6403966))
* typo in fixture and fail for correct reason ([1af5ba9](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/1af5ba9093bde76171b5fdf0a2a81e43e36ec674))
* uint8arrays is a dep ([#964](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/964)) ([ba2b4d4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ba2b4d4b28f1d9940b457de344aed44537f9eabd))
* unref nat manager retries ([#877](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/877)) ([ce2a624](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ce2a624a09b3107c0b2b4752e666804ecea54fb5))
* update any-signal and timeout-abort-controller ([#1128](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1128)) ([e0354b4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e0354b4c6b95bb90656b868849182eb3efddf096))
* update ci files to publish docs ([a61e401](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a61e40142f1393c53b83a1b11ded6b72c6b76615))
* update deps ([#1181](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1181)) ([8cca8e4](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/8cca8e4bfc6a339e58b5a5efa8a84fd891aa08ee))
* update docs ([#1520](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1520)) ([3e53c19](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3e53c199349ab99deeb745baff92c3aaa7647ca8))
* update insecure connection encrypter ([#1400](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1400)) ([12a2c75](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/12a2c75efc0fc730976652b3ead79f8332476149))
* update interfaces ([#1207](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1207)) ([da3d19b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/da3d19b30977fd2c7e77d92aa8914b13e3179aaa))
* update multiformats ([#1535](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1535)) ([ea8f279](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ea8f279d4f80f1986e53fb83637ac9852d50d8d4))
* update multistream select ([#1136](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1136)) ([00e4959](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/00e49592a356e39b20c889d5f40b9bb37d4bf293))
* update muxer behavior ([#1289](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1289)) ([b1b9139](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b1b91398e27d0b8852a74a87f0d8ccc5f34340b4))
* update node-forge ([#1133](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1133)) ([a4bba35](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a4bba35948e1cd8dbe5147f2c8d6385b1fbb6fae))
* update protector config and tests ([2b7cc55](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2b7cc55c88e93a34a727d7ae3fc73ebba538230b))
* update pubsub interfaces ([#1194](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1194)) ([fab4f13](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/fab4f1385cf61b7b16719b9aacdfe03146a3f260))
* update to new interfaces ([#1206](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1206)) ([a15254f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/a15254fdd478a336edf1e1196b721dc56888b2ea))
* upgrader should not need muxers ([#517](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/517)) ([5d7ee50](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5d7ee50e768daabaf1b2f441f38ec11da9a647d1))
* use @libp2p/keychain module instead of bundling source code ([#1569](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1569)) ([c02e1bd](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c02e1bd4982feb2d69021abc54c1603c01291867))
* use async.setImmediate ([11c21b6](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/11c21b69996157b76c8efaabb8e6cabdc16c7fa6))
* use correct reference to floodSub ([947eaf1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/947eaf166b666a390dd7b0bf76d020fe0f174aa1))
* use keep-alive tag to reconnect to peers on startup ([#1278](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1278)) ([2836acc](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/2836acc90f8eafd2106539a80ac7d3b307c0bd02))
* use libp2p.multiaddrs instead of listen ([7fbd155](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/7fbd1556e8a5897ccbaf5693e572aec214a8fe7f))
* use placeholder dht/pubsub ([#1193](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1193)) ([5397137](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/5397137c654dfdec431e0c9ba4b1ff9dee19abf1))
* use symbol instead of constructor name ([#292](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/292)) ([53ed3bd](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/53ed3bdb9994c5360973765fb1f9d4b43ef7f972))
* use toB58String everywhere to be consistent ([#537](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/537)) ([c1038be](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/c1038bec92fecdb57d04516c3d7096e773481e2b))
* wait for peer stats to be updated during test ([#1238](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1238)) ([b047268](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b0472686d29a4f295360d3f15a50c86c981892f7)), closes [#1219](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1219)
* when creating dial targets, encapsulate PeerIds last ([#1389](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1389)) ([ec02351](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ec02351e65d0627872e6a53894c060a593b9e66e))
* when passed a multiaddr, only dial that multiaddr ([#1498](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1498)) ([d01c37e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/d01c37e80fe18ca7f5752cdddc3a4415a8eb6471))
* yield only final peers from dht getClosestPeers ([#1380](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1380)) ([3f57eda](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/3f57edaf3b472daf8ea6e914f38ff9ad6cf9b49c))


### Reverts

* "fix: throw if no conn encryption module provided ([#665](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/665))" ([b621fbd](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/b621fbdfdc1844343c513ac40d4389e8beee714e))
* reapply "fix: throw if no conn encryption module provided ([#665](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/665))" ([689f90a](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/689f90a698bad62a1eded073411705b871aa8358))


### Miscellaneous Chores

* deprecate old peer store api ([#598](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/598)) ([ed6d5bb](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/ed6d5bb4b4a868dfdc28dd7b302b3504b17727a7))
* remove peer-info usage ([12e48ad](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/12e48adafaf577ecb4225f07f11c0318dbae3cea))
* update datastore ([#990](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/990)) ([83734ef](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/83734ef52061ad61ddb5ca49aae27e3a8b937058))
* update peer id and libp2p crypto ([#1042](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1042)) ([9cbf36f](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/9cbf36fcb54099e6fed35ceccc4a2376f0926c1f))
* update pubsub ([#801](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/801)) ([e50c6ab](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/e50c6abcf2ebc80ebf2dfadd015ab21a20cffadc))
* update switch ([#395](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/395)) ([684f283](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/684f283aec09718df82830b326e564668cc22b12))
* update to new multiformats ([#948](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/948)) ([13cf476](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/13cf4761489d59b22924bb8ec2ec6dbe207b280c))
* update travis to use node lts and stable ([098f3d1](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/098f3d1dd36ae8e069af3e00f366abd8ce44a295))


### deps

* update all deps to support no-copy operations ([#1335](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1335)) ([f439d9b](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/f439d9b589a0a6544b61aca3736e920943ce38b5))
* update interface datastore ([#1625](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/issues/1625)) ([064035e](https://www.github.com/SamKenX-Hub-Community/SamKenXjs-libp2p/commit/064035eb2366f610866644c3be6ffb09db6f5da6))

### [0.42.2](https://www.github.com/libp2p/js-libp2p/compare/v0.42.1...v0.42.2) (2023-01-17)


### Bug Fixes

* allow configuring circuit stream limits ([#1542](https://www.github.com/libp2p/js-libp2p/issues/1542)) ([f82e6b8](https://www.github.com/libp2p/js-libp2p/commit/f82e6b86e375b86e71cd339660a348ecba4bf68d))
* allow dialing multiaddrs without peer ids ([#1548](https://www.github.com/libp2p/js-libp2p/issues/1548)) ([398e231](https://www.github.com/libp2p/js-libp2p/commit/398e231337c3db1ccd5b4254fb18ab1903aa68b2))
* allow exporting PeerIds from the keychain ([#1546](https://www.github.com/libp2p/js-libp2p/issues/1546)) ([141e072](https://www.github.com/libp2p/js-libp2p/commit/141e0722ee2cd92b2b928767710de7443b5a4c56))
* allow reading PeerId from keychain ([#1552](https://www.github.com/libp2p/js-libp2p/issues/1552)) ([0831cd9](https://www.github.com/libp2p/js-libp2p/commit/0831cd960d423545ee60b457d66a6a996888804b))
* do not append peer id to path addresses ([#1547](https://www.github.com/libp2p/js-libp2p/issues/1547)) ([bd2bdf7](https://www.github.com/libp2p/js-libp2p/commit/bd2bdf7ca0d87ab63b2e9acf7edf7a5752e0559c))
* improve pubsub example ([#1549](https://www.github.com/libp2p/js-libp2p/issues/1549)) ([ba8527c](https://www.github.com/libp2p/js-libp2p/commit/ba8527c317b9f1f31f5066b6204fda35d393058f))

### [0.42.1](https://www.github.com/libp2p/js-libp2p/compare/v0.42.0...v0.42.1) (2023-01-11)


### Bug Fixes

* update ci files to publish docs ([a61e401](https://www.github.com/libp2p/js-libp2p/commit/a61e40142f1393c53b83a1b11ded6b72c6b76615))

## [0.42.0](https://www.github.com/libp2p/js-libp2p/compare/v0.41.0...v0.42.0) (2023-01-10)


### ⚠ BREAKING CHANGES

* update multiformats (#1535)
* the `FaultTolerance` enum should now be imported from `@libp2p/interface-transport`
* the connection manager and registrar are internal types and as such not part of the libp2p interface, instead use the methods exposed on the root libp2p type for obtaining connections and protocols (see the upgrade guide)

### Bug Fixes

* add getProtocols method ([#1523](https://www.github.com/libp2p/js-libp2p/issues/1523)) ([57a56aa](https://www.github.com/libp2p/js-libp2p/commit/57a56aa9d32f81066667ad6641fda5980df8e1c3))
* add register and unregister methods to root node object ([#1536](https://www.github.com/libp2p/js-libp2p/issues/1536)) ([bdf53ae](https://www.github.com/libp2p/js-libp2p/commit/bdf53ae0d8fcca93f20e6e3d22669aa725dcac70))
* close short-lived connections first when pruning by tag value ([#1517](https://www.github.com/libp2p/js-libp2p/issues/1517)) ([40fe372](https://www.github.com/libp2p/js-libp2p/commit/40fe3725c5733fc2cb5072b7ad09858724f8d870)), closes [#1509](https://www.github.com/libp2p/js-libp2p/issues/1509)
* expose identify service properties ([#1529](https://www.github.com/libp2p/js-libp2p/issues/1529)) ([43d0bc6](https://www.github.com/libp2p/js-libp2p/commit/43d0bc6c63eedbc72805d29aacb1378e43910dbf))
* forward connection manager events on and update types ([#1524](https://www.github.com/libp2p/js-libp2p/issues/1524)) ([58cc480](https://www.github.com/libp2p/js-libp2p/commit/58cc4804827cae92a2fff3babb1201099577f671))
* only configure the latency monitor if a limit is configured ([#1527](https://www.github.com/libp2p/js-libp2p/issues/1527)) ([1147550](https://www.github.com/libp2p/js-libp2p/commit/114755019b6c4d8ffe12ca6822c66fc46d9834e7))
* remove transport manager from exports map ([#1525](https://www.github.com/libp2p/js-libp2p/issues/1525)) ([d77405c](https://www.github.com/libp2p/js-libp2p/commit/d77405c52f331a85325c0d24ef86874b2f5c4cd4))
* revert config changes from [#1520](https://www.github.com/libp2p/js-libp2p/issues/1520) ([#1522](https://www.github.com/libp2p/js-libp2p/issues/1522)) ([2fa2893](https://www.github.com/libp2p/js-libp2p/commit/2fa28931025ffb93d985dad1269165f81709c048))
* update docs ([#1520](https://www.github.com/libp2p/js-libp2p/issues/1520)) ([3e53c19](https://www.github.com/libp2p/js-libp2p/commit/3e53c199349ab99deeb745baff92c3aaa7647ca8))
* update multiformats ([#1535](https://www.github.com/libp2p/js-libp2p/issues/1535)) ([ea8f279](https://www.github.com/libp2p/js-libp2p/commit/ea8f279d4f80f1986e53fb83637ac9852d50d8d4))

## [0.41.0](https://www.github.com/libp2p/js-libp2p/compare/v0.40.0...v0.41.0) (2022-12-06)


### ⚠ BREAKING CHANGES

* libp2p.hangUp and libp2p.fetch require PeerId or Multiaddr objects the same as other methods
* the libp2p opts have changed to accept a metrics object factory function instead of a config object

### Features

* allow skipping upgrade steps for incoming connections ([#1502](https://www.github.com/libp2p/js-libp2p/issues/1502)) ([987c738](https://www.github.com/libp2p/js-libp2p/commit/987c7383a8493e89ccb9f91120940b1383334f1a))
* configure metrics implementation as a module instead of shipping a built-in version ([#1471](https://www.github.com/libp2p/js-libp2p/issues/1471)) ([5e9dcf3](https://www.github.com/libp2p/js-libp2p/commit/5e9dcf3d404a975d01ee7171305cc2ab07ea7307))
* start libp2p nodes by default ([#1500](https://www.github.com/libp2p/js-libp2p/issues/1500)) ([61fcc0b](https://www.github.com/libp2p/js-libp2p/commit/61fcc0b688214d3f8c84bc68bd6192738ae0fdfd)), closes [#1499](https://www.github.com/libp2p/js-libp2p/issues/1499)


### Bug Fixes

* allow listening on duplicate addresses ([#1472](https://www.github.com/libp2p/js-libp2p/issues/1472)) ([030dbc8](https://www.github.com/libp2p/js-libp2p/commit/030dbc81a8743b98bbc0542bd40aece099ed44f6))
* dialling duplicated addresses ([#1489](https://www.github.com/libp2p/js-libp2p/issues/1489)) ([9fd58c8](https://www.github.com/libp2p/js-libp2p/commit/9fd58c84b963ae3ad021e0ec1d864105b1613f46)), closes [#1409](https://www.github.com/libp2p/js-libp2p/issues/1409)
* pipe muxer/connection input/output streams in parallel ([#1491](https://www.github.com/libp2p/js-libp2p/issues/1491)) ([fb5fa3d](https://www.github.com/libp2p/js-libp2p/commit/fb5fa3d5b84e21c6e26407df7eb323d68038fe5d)), closes [#1342](https://www.github.com/libp2p/js-libp2p/issues/1342)
* registrar is not calling topology on peer reconnect ([#1504](https://www.github.com/libp2p/js-libp2p/issues/1504)) ([5a62f4f](https://www.github.com/libp2p/js-libp2p/commit/5a62f4f22f3d9658ae7356568283d443a76df4ea)), closes [#1496](https://www.github.com/libp2p/js-libp2p/issues/1496)
* remove strings from fetch and hangUp ([#1495](https://www.github.com/libp2p/js-libp2p/issues/1495)) ([bae32ba](https://www.github.com/libp2p/js-libp2p/commit/bae32bafce75a3801a7a96f77a9ccf43b3208f9c))
* when passed a multiaddr, only dial that multiaddr ([#1498](https://www.github.com/libp2p/js-libp2p/issues/1498)) ([d01c37e](https://www.github.com/libp2p/js-libp2p/commit/d01c37e80fe18ca7f5752cdddc3a4415a8eb6471))

## [0.40.0](https://www.github.com/libp2p/js-libp2p/compare/v0.39.5...v0.40.0) (2022-10-17)


### ⚠ BREAKING CHANGES

* modules no longer implement `Initializable` instead switching to constructor injection
* the old behaviour was to dial any peer we discover, now we just add them to the peer store instead

### Features

* allow skipping encryption and custom muxer factory in upgrader ([#1411](https://www.github.com/libp2p/js-libp2p/issues/1411)) ([6615efa](https://www.github.com/libp2p/js-libp2p/commit/6615efa683f55425f90c70815467ec5ddfed1fcb))
* deny incoming connections and add allow/deny lists ([#1398](https://www.github.com/libp2p/js-libp2p/issues/1398)) ([c185ef5](https://www.github.com/libp2p/js-libp2p/commit/c185ef549f599510f258d5d67883f7062c1c944b))


### Bug Fixes

* add after upgrade inbound method ([#1422](https://www.github.com/libp2p/js-libp2p/issues/1422)) ([487b942](https://www.github.com/libp2p/js-libp2p/commit/487b94240e244e31ebadb2f8229c1465717454eb))
* add pending connection limit ([#1423](https://www.github.com/libp2p/js-libp2p/issues/1423)) ([b717beb](https://www.github.com/libp2p/js-libp2p/commit/b717bebf6db1483fc52595a2a137685162d29dca))
* close stream after sending identify ([#1424](https://www.github.com/libp2p/js-libp2p/issues/1424)) ([a74d22a](https://www.github.com/libp2p/js-libp2p/commit/a74d22a2cddf9ffdca26447fe21a62b5d13e773d))
* do not auto-dial peers ([#1397](https://www.github.com/libp2p/js-libp2p/issues/1397)) ([ca30192](https://www.github.com/libp2p/js-libp2p/commit/ca3019283497040314603d9ca7c0b65c64d1680c))
* enable identify service all the time ([#1440](https://www.github.com/libp2p/js-libp2p/issues/1440)) ([931e042](https://www.github.com/libp2p/js-libp2p/commit/931e042228d286dfc604f91951316b83fa1734f3))
* regenerate protobuf defs ([#1439](https://www.github.com/libp2p/js-libp2p/issues/1439)) ([e10eea2](https://www.github.com/libp2p/js-libp2p/commit/e10eea24d40243c12584429a3b3012488f82bd00))
* remove @libp2p/components ([#1427](https://www.github.com/libp2p/js-libp2p/issues/1427)) ([a3847f2](https://www.github.com/libp2p/js-libp2p/commit/a3847f2d1725b1c92d5e0ef7bcdf840ea8428a75))

### [0.39.5](https://www.github.com/libp2p/js-libp2p/compare/v0.39.4...v0.39.5) (2022-10-05)


### Bug Fixes

* stub new connection manager accept incoming connection method ([#1404](https://www.github.com/libp2p/js-libp2p/issues/1404)) ([5ad175c](https://www.github.com/libp2p/js-libp2p/commit/5ad175cb3918da0956f6c1c336f5423a551c78a8))

### [0.39.4](https://www.github.com/libp2p/js-libp2p/compare/v0.39.3...v0.39.4) (2022-10-04)


### Bug Fixes

* update insecure connection encrypter ([#1400](https://www.github.com/libp2p/js-libp2p/issues/1400)) ([12a2c75](https://www.github.com/libp2p/js-libp2p/commit/12a2c75efc0fc730976652b3ead79f8332476149))

### [0.39.3](https://www.github.com/libp2p/js-libp2p/compare/v0.39.2...v0.39.3) (2022-09-28)


### Bug Fixes

* when creating dial targets, encapsulate PeerIds last ([#1389](https://www.github.com/libp2p/js-libp2p/issues/1389)) ([ec02351](https://www.github.com/libp2p/js-libp2p/commit/ec02351e65d0627872e6a53894c060a593b9e66e))
* yield only final peers from dht getClosestPeers ([#1380](https://www.github.com/libp2p/js-libp2p/issues/1380)) ([3f57eda](https://www.github.com/libp2p/js-libp2p/commit/3f57edaf3b472daf8ea6e914f38ff9ad6cf9b49c))

### [0.39.2](https://www.github.com/libp2p/js-libp2p/compare/v0.39.1...v0.39.2) (2022-09-21)


### Bug Fixes

* remove ipfs dependency and upgrade multiaddr ([#1387](https://www.github.com/libp2p/js-libp2p/issues/1387)) ([633d4a9](https://www.github.com/libp2p/js-libp2p/commit/633d4a9740ea02e32c0bb290c0a3958b68f181e9))

### [0.39.1](https://www.github.com/libp2p/js-libp2p/compare/v0.39.0...v0.39.1) (2022-09-09)


### Bug Fixes

* add yamux interop tests ([#1290](https://www.github.com/libp2p/js-libp2p/issues/1290)) ([b87632f](https://www.github.com/libp2p/js-libp2p/commit/b87632f97f44aecf583df06aed865bc4e087391a))
* overwrite stream fields after handshake ([#1305](https://www.github.com/libp2p/js-libp2p/issues/1305)) ([43b0418](https://www.github.com/libp2p/js-libp2p/commit/43b04189987f11a7729b522d1e1dbdc1caceb874))
* report dialer metrics ([#1377](https://www.github.com/libp2p/js-libp2p/issues/1377)) ([0218acf](https://www.github.com/libp2p/js-libp2p/commit/0218acfae26fa69475b2ce0678b1c754c7eda605))

## [0.39.0](https://www.github.com/libp2p/js-libp2p/compare/v0.38.0...v0.39.0) (2022-09-05)


### ⚠ BREAKING CHANGES

* the `loadKeychain` method has been removed as it is no longer necessary

### Bug Fixes

* discovery mechanism examples not working ([#1365](https://www.github.com/libp2p/js-libp2p/issues/1365)) ([d281a60](https://www.github.com/libp2p/js-libp2p/commit/d281a60dac973eeb0c842ffd70cd8bad3ae1156a)), closes [#1229](https://www.github.com/libp2p/js-libp2p/issues/1229)
* load self key into keychain on startup if not present ([#1357](https://www.github.com/libp2p/js-libp2p/issues/1357)) ([1f38ab7](https://www.github.com/libp2p/js-libp2p/commit/1f38ab7ac8380c9501b252d076bb356662978882)), closes [#1315](https://www.github.com/libp2p/js-libp2p/issues/1315)

## [0.38.0](https://www.github.com/libp2p/js-libp2p/compare/v0.37.3...v0.38.0) (2022-08-17)


### ⚠ BREAKING CHANGES

* Streams are now `Duplex<Uint8ArrayList, Uint8ArrayList | Uint8Array>`
* `connectionManager.peerValue` has been removed, use `peerStore.tagPeer` instead
* limit protocol streams per-connection (#1255)
* uses new single-issue libp2p interface modules

### Features

* limit protocol streams per-connection ([#1255](https://www.github.com/libp2p/js-libp2p/issues/1255)) ([de30c2c](https://www.github.com/libp2p/js-libp2p/commit/de30c2cec79d1e9d758cbcddc11d315b17843343))
* programmatically set agentVersion for use in identify ([#1296](https://www.github.com/libp2p/js-libp2p/issues/1296)) ([0bb1b80](https://www.github.com/libp2p/js-libp2p/commit/0bb1b802c8fc2f32eaef10efbc88005dce6c6020)), closes [#686](https://www.github.com/libp2p/js-libp2p/issues/686) [#1240](https://www.github.com/libp2p/js-libp2p/issues/1240)
* update libp2p interfaces ([#1252](https://www.github.com/libp2p/js-libp2p/issues/1252)) ([d4dd664](https://www.github.com/libp2p/js-libp2p/commit/d4dd664071476e3d22f53e02e7d66099f3265f6c))
* use tag values to choose which connections to close ([#1276](https://www.github.com/libp2p/js-libp2p/issues/1276)) ([b1b2b21](https://www.github.com/libp2p/js-libp2p/commit/b1b2b216daf12caccd67503dfd7b296b191c5b83))


### Bug Fixes

* add successful stream peer to protobook ([#1341](https://www.github.com/libp2p/js-libp2p/issues/1341)) ([8880eef](https://www.github.com/libp2p/js-libp2p/commit/8880eefa8ffeff1203cdf5053a17dbf45f43cc3d))
* add timeout for circuit relay ([#1294](https://www.github.com/libp2p/js-libp2p/issues/1294)) ([ba56c64](https://www.github.com/libp2p/js-libp2p/commit/ba56c6466232ad4aa5025e2db084c5c9ccd4e5d0))
* add timeout for incoming connections and build-in protocols ([#1292](https://www.github.com/libp2p/js-libp2p/issues/1292)) ([750ed9c](https://www.github.com/libp2p/js-libp2p/commit/750ed9c35f095aa6e136a801ccd792f2190f38a1))
* catch errors when reconnecting old peers ([#1352](https://www.github.com/libp2p/js-libp2p/issues/1352)) ([886759b](https://www.github.com/libp2p/js-libp2p/commit/886759b7fb3c14f243d4e74b1714930424bb7453))
* close streams when protocol limits are reached ([#1301](https://www.github.com/libp2p/js-libp2p/issues/1301)) ([3c0fb13](https://www.github.com/libp2p/js-libp2p/commit/3c0fb13babe295c8e5284345080bd4434f39efa7))
* MaxListenersExceeded warning ([#1297](https://www.github.com/libp2p/js-libp2p/issues/1297)) ([627b8bf](https://www.github.com/libp2p/js-libp2p/commit/627b8bf87c775762dd6a9de69b77852e48ebcf26))
* prepend connection addr to circuit relay address ([#1355](https://www.github.com/libp2p/js-libp2p/issues/1355)) ([509e56a](https://www.github.com/libp2p/js-libp2p/commit/509e56a60359f98ec435f8519c6a499641cce212))
* remove mplex prefix from muxer errors ([#1304](https://www.github.com/libp2p/js-libp2p/issues/1304)) ([05e8e7e](https://www.github.com/libp2p/js-libp2p/commit/05e8e7ead96d494bdd7dfa5d6430155670066767))
* specify max stream args separately ([#1254](https://www.github.com/libp2p/js-libp2p/issues/1254)) ([5371729](https://www.github.com/libp2p/js-libp2p/commit/53717296468ef17fdc3e0dda9d5908b15d2772a1))
* update muxer behavior ([#1289](https://www.github.com/libp2p/js-libp2p/issues/1289)) ([b1b9139](https://www.github.com/libp2p/js-libp2p/commit/b1b91398e27d0b8852a74a87f0d8ccc5f34340b4))
* use keep-alive tag to reconnect to peers on startup ([#1278](https://www.github.com/libp2p/js-libp2p/issues/1278)) ([2836acc](https://www.github.com/libp2p/js-libp2p/commit/2836acc90f8eafd2106539a80ac7d3b307c0bd02))


### deps

* update all deps to support no-copy operations ([#1335](https://www.github.com/libp2p/js-libp2p/issues/1335)) ([f439d9b](https://www.github.com/libp2p/js-libp2p/commit/f439d9b589a0a6544b61aca3736e920943ce38b5))

### [0.37.3](https://www.github.com/libp2p/js-libp2p/compare/v0.37.2...v0.37.3) (2022-06-08)


### Bug Fixes

* connection pruning ([#1235](https://www.github.com/libp2p/js-libp2p/issues/1235)) ([f9073ec](https://www.github.com/libp2p/js-libp2p/commit/f9073ecd215e119b7a864e2ad31fe7067322c754))
* ensure streams are closed when protocol negotiation fails ([#1236](https://www.github.com/libp2p/js-libp2p/issues/1236)) ([eee256d](https://www.github.com/libp2p/js-libp2p/commit/eee256db8ab65cea7228b1683403417edfdb1367))
* wait for peer stats to be updated during test ([#1238](https://www.github.com/libp2p/js-libp2p/issues/1238)) ([b047268](https://www.github.com/libp2p/js-libp2p/commit/b0472686d29a4f295360d3f15a50c86c981892f7)), closes [#1219](https://www.github.com/libp2p/js-libp2p/issues/1219)

### [0.37.2](https://www.github.com/libp2p/js-libp2p/compare/v0.37.1...v0.37.2) (2022-05-31)


### Bug Fixes

* reduce identify message size limit ([#1230](https://www.github.com/libp2p/js-libp2p/issues/1230)) ([824720f](https://www.github.com/libp2p/js-libp2p/commit/824720fb8f21f868ed88e881fbc3ce6b9459600d))

### [0.37.1](https://www.github.com/libp2p/js-libp2p/compare/v0.37.0...v0.37.1) (2022-05-25)


### Bug Fixes

* do upnp hole punch after startup ([#1217](https://www.github.com/libp2p/js-libp2p/issues/1217)) ([d5386df](https://www.github.com/libp2p/js-libp2p/commit/d5386df68478a71ac269acb2d00d36a7a5c9ebc5))
* explicitly close streams when connnections close ([#1221](https://www.github.com/libp2p/js-libp2p/issues/1221)) ([b09eb8f](https://www.github.com/libp2p/js-libp2p/commit/b09eb8fc53ec1d8f6280d681c9ca6a467ec259b5))
* fix unintended aborts in dialer ([#1185](https://www.github.com/libp2p/js-libp2p/issues/1185)) ([35f9c0c](https://www.github.com/libp2p/js-libp2p/commit/35f9c0c79387232465848b450a47cafe841405e7))
* time out slow reads ([#1227](https://www.github.com/libp2p/js-libp2p/issues/1227)) ([a1220d2](https://www.github.com/libp2p/js-libp2p/commit/a1220d22f5affb64e64dec0cd6a92cd8241b26df))

## [0.37.0](https://www.github.com/libp2p/js-libp2p/compare/v0.36.2...v0.37.0) (2022-05-16)


### ⚠ BREAKING CHANGES

* types are no longer hand crafted, this module is now ESM only

### Features

* convert to typescript ([#1172](https://www.github.com/libp2p/js-libp2p/issues/1172)) ([199395d](https://www.github.com/libp2p/js-libp2p/commit/199395de4d8139cc77d0b408626f37c9b8520d28))


### Bug Fixes

* add transport manager to exports map and fix docs ([#1182](https://www.github.com/libp2p/js-libp2p/issues/1182)) ([cc60cfd](https://www.github.com/libp2p/js-libp2p/commit/cc60cfde1a0907ca68f658f6de5362a708189222))
* emit peer:connect after all ([#1171](https://www.github.com/libp2p/js-libp2p/issues/1171)) ([d16817c](https://www.github.com/libp2p/js-libp2p/commit/d16817ca443443e88803ee8096d45debb14af91b))
* encode enums correctly ([#1210](https://www.github.com/libp2p/js-libp2p/issues/1210)) ([4837430](https://www.github.com/libp2p/js-libp2p/commit/4837430d8bcdbee0865eeba6fe694bc71fc6c9bb))
* expose getPublicKey ([#1188](https://www.github.com/libp2p/js-libp2p/issues/1188)) ([1473044](https://www.github.com/libp2p/js-libp2p/commit/147304449e5f8d3acb8b00bdd9588b56830667c6))
* expose metrics and registrar, use dht for peer discovery ([#1183](https://www.github.com/libp2p/js-libp2p/issues/1183)) ([64bfcee](https://www.github.com/libp2p/js-libp2p/commit/64bfcee5093b368df0b381f78afc2ddff3d339a9))
* simplify pnet exports ([#1213](https://www.github.com/libp2p/js-libp2p/issues/1213)) ([3148060](https://www.github.com/libp2p/js-libp2p/commit/31480603f3e17d838d2685573995218a1e678e7a))
* update deps ([#1181](https://www.github.com/libp2p/js-libp2p/issues/1181)) ([8cca8e4](https://www.github.com/libp2p/js-libp2p/commit/8cca8e4bfc6a339e58b5a5efa8a84fd891aa08ee))
* update interfaces ([#1207](https://www.github.com/libp2p/js-libp2p/issues/1207)) ([da3d19b](https://www.github.com/libp2p/js-libp2p/commit/da3d19b30977fd2c7e77d92aa8914b13e3179aaa))
* update pubsub interfaces ([#1194](https://www.github.com/libp2p/js-libp2p/issues/1194)) ([fab4f13](https://www.github.com/libp2p/js-libp2p/commit/fab4f1385cf61b7b16719b9aacdfe03146a3f260))
* update to new interfaces ([#1206](https://www.github.com/libp2p/js-libp2p/issues/1206)) ([a15254f](https://www.github.com/libp2p/js-libp2p/commit/a15254fdd478a336edf1e1196b721dc56888b2ea))
* use placeholder dht/pubsub ([#1193](https://www.github.com/libp2p/js-libp2p/issues/1193)) ([5397137](https://www.github.com/libp2p/js-libp2p/commit/5397137c654dfdec431e0c9ba4b1ff9dee19abf1))

### [0.36.2](https://www.github.com/libp2p/js-libp2p/compare/v0.36.1...v0.36.2) (2022-01-26)


### Bug Fixes

* reject connections when not running ([#1146](https://www.github.com/libp2p/js-libp2p/issues/1146)) ([902f10d](https://www.github.com/libp2p/js-libp2p/commit/902f10d58d1062e812eb27aa0e2256e3fde5d3f6))

### [0.36.1](https://www.github.com/libp2p/js-libp2p/compare/v0.36.0...v0.36.1) (2022-01-25)


### Bug Fixes

* await unhandle of protocols ([#1144](https://www.github.com/libp2p/js-libp2p/issues/1144)) ([d44bd90](https://www.github.com/libp2p/js-libp2p/commit/d44bd9094fe9545054eb8eff68f81bc52ece03e7))

## [0.36.0](https://www.github.com/libp2p/js-libp2p/compare/v0.35.8...v0.36.0) (2022-01-25)


### ⚠ BREAKING CHANGES

* abort-controller dep is gone from dependency tree
* `libp2p.handle`, `libp2p.registrar.register` and the peerstore methods have become async

### Features

* add fetch protocol ([#1036](https://www.github.com/libp2p/js-libp2p/issues/1036)) ([d8ceb0b](https://www.github.com/libp2p/js-libp2p/commit/d8ceb0bc66fe225d1335d3f05b9a3a30983c2a57))
* async peerstore backed by datastores ([#1058](https://www.github.com/libp2p/js-libp2p/issues/1058)) ([978eb36](https://www.github.com/libp2p/js-libp2p/commit/978eb3676fad5d5d50ddb28d1a7868f448cbb20b))
* connection gater ([#1142](https://www.github.com/libp2p/js-libp2p/issues/1142)) ([ff32eba](https://www.github.com/libp2p/js-libp2p/commit/ff32eba6a0fa222af1a7a46775d5e0346ad6ebdf))


### Bug Fixes

* cache build artefacts ([#1091](https://www.github.com/libp2p/js-libp2p/issues/1091)) ([5043cd5](https://www.github.com/libp2p/js-libp2p/commit/5043cd56435a264e83db4fb8388d33e9a0442fff))
* catch errors during identify ([#1138](https://www.github.com/libp2p/js-libp2p/issues/1138)) ([12f1bb0](https://www.github.com/libp2p/js-libp2p/commit/12f1bb0aeec4b639bd2af05807215f3b4284e379))
* import uint8arrays package in example ([#1083](https://www.github.com/libp2p/js-libp2p/issues/1083)) ([c3700f5](https://www.github.com/libp2p/js-libp2p/commit/c3700f55d5a0b62182d683ca37258887b24065b9))
* make tests more reliable ([#1139](https://www.github.com/libp2p/js-libp2p/issues/1139)) ([b7e8706](https://www.github.com/libp2p/js-libp2p/commit/b7e87066a69970f1adca4ba552c7fdf624916a7e))
* prevent auto-dialer from dialing self ([#1104](https://www.github.com/libp2p/js-libp2p/issues/1104)) ([9b22c6e](https://www.github.com/libp2p/js-libp2p/commit/9b22c6e2f987a20c6639cd07f31fe9c824e24923))
* remove abort-controller dep ([#1095](https://www.github.com/libp2p/js-libp2p/issues/1095)) ([0a4dc54](https://www.github.com/libp2p/js-libp2p/commit/0a4dc54d084c901df47cce1788bd5922090ee037))
* try all peer addresses when dialing a relay ([#1140](https://www.github.com/libp2p/js-libp2p/issues/1140)) ([63aa480](https://www.github.com/libp2p/js-libp2p/commit/63aa480800974515f44d3b7e013da9c8ccaae8ad))
* update any-signal and timeout-abort-controller ([#1128](https://www.github.com/libp2p/js-libp2p/issues/1128)) ([e0354b4](https://www.github.com/libp2p/js-libp2p/commit/e0354b4c6b95bb90656b868849182eb3efddf096))
* update multistream select ([#1136](https://www.github.com/libp2p/js-libp2p/issues/1136)) ([00e4959](https://www.github.com/libp2p/js-libp2p/commit/00e49592a356e39b20c889d5f40b9bb37d4bf293))
* update node-forge ([#1133](https://www.github.com/libp2p/js-libp2p/issues/1133)) ([a4bba35](https://www.github.com/libp2p/js-libp2p/commit/a4bba35948e1cd8dbe5147f2c8d6385b1fbb6fae))

## [0.35.7](https://github.com/libp2p/js-libp2p/compare/v0.35.2...v0.35.7) (2021-12-24)


### Bug Fixes

* add tracked map ([#1069](https://github.com/libp2p/js-libp2p/issues/1069)) ([b425fa1](https://github.com/libp2p/js-libp2p/commit/b425fa12304def2a007d43a0aa445c28b766ed02))
* clean up pending dial targets ([#1059](https://github.com/libp2p/js-libp2p/issues/1059)) ([bdc9f16](https://github.com/libp2p/js-libp2p/commit/bdc9f16d0cbe56ccf26822f11068e7795bcef046))
* fix uncaught promise rejection when finding peers ([#1044](https://github.com/libp2p/js-libp2p/issues/1044)) ([3b683e7](https://github.com/libp2p/js-libp2p/commit/3b683e715686163e229b7b5c3a892327dfd4fc63))
* increase the maxlisteners for timeout controllers ([#1065](https://github.com/libp2p/js-libp2p/issues/1065)) ([09a0f94](https://github.com/libp2p/js-libp2p/commit/09a0f940df7fdb4ece34604e85693709df5c213e))
* main ci ([#1079](https://github.com/libp2p/js-libp2p/issues/1079)) ([d1c48dc](https://github.com/libp2p/js-libp2p/commit/d1c48dcbeded828f2dd3044cc9aed3f17f02846d))
* make error codes consistent ([#1054](https://github.com/libp2p/js-libp2p/issues/1054)) ([b25e0fe](https://github.com/libp2p/js-libp2p/commit/b25e0fe5312db58a06c39500ae84c50fed3a93bd))
* type definitions for big dialrequest and persistent peerstore ([#1078](https://github.com/libp2p/js-libp2p/issues/1078)) ([cb0d7d6](https://github.com/libp2p/js-libp2p/commit/cb0d7d6c99d179498f04e76df76e70e4f7d41c4c))


### Features

* allow per-component metrics to be collected ([#1061](https://github.com/libp2p/js-libp2p/issues/1061)) ([2f0b311](https://github.com/libp2p/js-libp2p/commit/2f0b311df7127aa44512c2008142d4ca30268986)), closes [#1060](https://github.com/libp2p/js-libp2p/issues/1060)



## [0.35.6](https://github.com/libp2p/js-libp2p/compare/v0.35.5...v0.35.6) (2021-12-18)


### Bug Fixes

* increase the maxlisteners for timeout controllers ([#1065](https://github.com/libp2p/js-libp2p/issues/1065)) ([09a0f94](https://github.com/libp2p/js-libp2p/commit/09a0f940df7fdb4ece34604e85693709df5c213e))



## [0.35.5](https://github.com/libp2p/js-libp2p/compare/v0.35.4...v0.35.5) (2021-12-15)



## [0.35.4](https://github.com/libp2p/js-libp2p/compare/v0.35.3...v0.35.4) (2021-12-15)


### Features

* allow per-component metrics to be collected ([#1061](https://github.com/libp2p/js-libp2p/issues/1061)) ([2f0b311](https://github.com/libp2p/js-libp2p/commit/2f0b311df7127aa44512c2008142d4ca30268986)), closes [#1060](https://github.com/libp2p/js-libp2p/issues/1060)



## [0.35.3](https://github.com/libp2p/js-libp2p/compare/v0.35.2...v0.35.3) (2021-12-13)


### Bug Fixes

* clean up pending dial targets ([#1059](https://github.com/libp2p/js-libp2p/issues/1059)) ([bdc9f16](https://github.com/libp2p/js-libp2p/commit/bdc9f16d0cbe56ccf26822f11068e7795bcef046))
* fix uncaught promise rejection when finding peers ([#1044](https://github.com/libp2p/js-libp2p/issues/1044)) ([3b683e7](https://github.com/libp2p/js-libp2p/commit/3b683e715686163e229b7b5c3a892327dfd4fc63))
* make error codes consistent ([#1054](https://github.com/libp2p/js-libp2p/issues/1054)) ([b25e0fe](https://github.com/libp2p/js-libp2p/commit/b25e0fe5312db58a06c39500ae84c50fed3a93bd))



## [0.35.2](https://github.com/libp2p/js-libp2p/compare/v0.33.0...v0.35.2) (2021-12-06)


### Bug Fixes

* do not let closest peers run forever ([#1047](https://github.com/libp2p/js-libp2p/issues/1047)) ([91c2ec9](https://github.com/libp2p/js-libp2p/commit/91c2ec9856a3e972b7b2c9c4d9a4eda1d431c7ef))
* increase maxlisteners on event target ([#1050](https://github.com/libp2p/js-libp2p/issues/1050)) ([b70fb43](https://github.com/libp2p/js-libp2p/commit/b70fb43427b47df079b55929ec8956f69cbda966)), closes [#900](https://github.com/libp2p/js-libp2p/issues/900)
* private ip ts compile has no call signatures ([#1020](https://github.com/libp2p/js-libp2p/issues/1020)) ([77d7cb8](https://github.com/libp2p/js-libp2p/commit/77d7cb8f0815f2cdd3bfdfa8b641a7a186fe9520))
* stop dht before connection manager ([#1041](https://github.com/libp2p/js-libp2p/issues/1041)) ([3a9d5f6](https://github.com/libp2p/js-libp2p/commit/3a9d5f64d96719ebb4d3b083c4f5832db4fa0816)), closes [#1039](https://github.com/libp2p/js-libp2p/issues/1039)


### chore

* update peer id and libp2p crypto ([#1042](https://github.com/libp2p/js-libp2p/issues/1042)) ([9cbf36f](https://github.com/libp2p/js-libp2p/commit/9cbf36fcb54099e6fed35ceccc4a2376f0926c1f))


### Features

* update dht ([#1009](https://github.com/libp2p/js-libp2p/issues/1009)) ([2f598eb](https://github.com/libp2p/js-libp2p/commit/2f598eba09cff4301474af08196158065e3602d8))


### BREAKING CHANGES

* requires node 15+
* libp2p-kad-dht has a new event-based API which is exposed as `_dht`



## [0.35.1](https://github.com/libp2p/js-libp2p/compare/v0.35.0...v0.35.1) (2021-12-03)


### Bug Fixes

* do not let closest peers run forever ([#1047](https://github.com/libp2p/js-libp2p/issues/1047)) ([91c2ec9](https://github.com/libp2p/js-libp2p/commit/91c2ec9856a3e972b7b2c9c4d9a4eda1d431c7ef))



# [0.35.0](https://github.com/libp2p/js-libp2p/compare/v0.34.0...v0.35.0) (2021-12-02)


### Bug Fixes

* stop dht before connection manager ([#1041](https://github.com/libp2p/js-libp2p/issues/1041)) ([3a9d5f6](https://github.com/libp2p/js-libp2p/commit/3a9d5f64d96719ebb4d3b083c4f5832db4fa0816)), closes [#1039](https://github.com/libp2p/js-libp2p/issues/1039)


### chore

* update peer id and libp2p crypto ([#1042](https://github.com/libp2p/js-libp2p/issues/1042)) ([9cbf36f](https://github.com/libp2p/js-libp2p/commit/9cbf36fcb54099e6fed35ceccc4a2376f0926c1f))


### BREAKING CHANGES

* requires node 15+



# [0.34.0](https://github.com/libp2p/js-libp2p/compare/v0.33.0...v0.34.0) (2021-11-25)


### Bug Fixes

* private ip ts compile has no call signatures ([#1020](https://github.com/libp2p/js-libp2p/issues/1020)) ([77d7cb8](https://github.com/libp2p/js-libp2p/commit/77d7cb8f0815f2cdd3bfdfa8b641a7a186fe9520))


### Features

* update dht ([#1009](https://github.com/libp2p/js-libp2p/issues/1009)) ([2f598eb](https://github.com/libp2p/js-libp2p/commit/2f598eba09cff4301474af08196158065e3602d8))


### BREAKING CHANGES

* libp2p-kad-dht has a new event-based API which is exposed as `_dht`



# [0.33.0](https://github.com/libp2p/js-libp2p/compare/v0.32.5...v0.33.0) (2021-09-24)


### chore

* update datastore ([#990](https://github.com/libp2p/js-libp2p/issues/990)) ([83734ef](https://github.com/libp2p/js-libp2p/commit/83734ef52061ad61ddb5ca49aae27e3a8b937058))


### BREAKING CHANGES

* datastore implementations provided to libp2p must be compliant with interface-datastore@6.0.0



## [0.32.5](https://github.com/libp2p/js-libp2p/compare/v0.32.4...v0.32.5) (2021-09-21)


### Bug Fixes

* move abortable-iterator to dependencies ([#992](https://github.com/libp2p/js-libp2p/issues/992)) ([122c89d](https://github.com/libp2p/js-libp2p/commit/122c89dd0df55a59edaae078e3dc7c31b5603715)), closes [#986](https://github.com/libp2p/js-libp2p/issues/986)



## [0.32.4](https://github.com/libp2p/js-libp2p/compare/v0.32.3...v0.32.4) (2021-08-20)



## [0.32.3](https://github.com/libp2p/js-libp2p/compare/v0.32.2...v0.32.3) (2021-08-16)


### Bug Fixes

* uint8arrays is a dep ([#964](https://github.com/libp2p/js-libp2p/issues/964)) ([ba2b4d4](https://github.com/libp2p/js-libp2p/commit/ba2b4d4b28f1d9940b457de344aed44537f9eabd))



## [0.32.2](https://github.com/libp2p/js-libp2p/compare/v0.32.1...v0.32.2) (2021-08-13)


### Bug Fixes

* browser example ci ([3b33fb4](https://github.com/libp2p/js-libp2p/commit/3b33fb4b73ba8065e432fb59f758fe138fd23d9e))


### Features

* custom protocol name ([#962](https://github.com/libp2p/js-libp2p/issues/962)) ([ef24fab](https://github.com/libp2p/js-libp2p/commit/ef24fabf0269fd079888e92eedb458e23ef1c733))



## [0.32.1](https://github.com/libp2p/js-libp2p/compare/v0.32.0...v0.32.1) (2021-07-22)


### Bug Fixes

* turn compliance tests into devDependency ([#960](https://github.com/libp2p/js-libp2p/issues/960)) ([0701de4](https://github.com/libp2p/js-libp2p/commit/0701de40b1ebdf319959846d8c4fdd30b3cf34a4))



# [0.32.0](https://github.com/libp2p/js-libp2p/compare/v0.32.0-rc.0...v0.32.0) (2021-07-15)



# [0.32.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.31.7...v0.32.0-rc.0) (2021-07-09)


### Bug Fixes

* do not allow dial to large number of multiaddrs ([#954](https://github.com/libp2p/js-libp2p/issues/954)) ([af723b3](https://github.com/libp2p/js-libp2p/commit/af723b355e1ddf4aecf439f81c3aa67613d45fa4))


### chore

* update to new multiformats ([#948](https://github.com/libp2p/js-libp2p/issues/948)) ([13cf476](https://github.com/libp2p/js-libp2p/commit/13cf4761489d59b22924bb8ec2ec6dbe207b280c))


### BREAKING CHANGES

* uses the CID class from the new multiformats module

Co-authored-by: Vasco Santos <vasco.santos@moxy.studio>



## [0.31.7](https://github.com/libp2p/js-libp2p/compare/v0.31.6...v0.31.7) (2021-06-14)


### Bug Fixes

* chat example with new multiaddr ([#946](https://github.com/libp2p/js-libp2p/issues/946)) ([d8ba284](https://github.com/libp2p/js-libp2p/commit/d8ba2848833d9fb8a963d1b7c8d27062c6f829da))
* dialer leaking resources after stopping ([#947](https://github.com/libp2p/js-libp2p/issues/947)) ([b291bc0](https://github.com/libp2p/js-libp2p/commit/b291bc06ec13feeb6e010730edfad754a3b2dc1b))



## [0.31.6](https://github.com/libp2p/js-libp2p/compare/v0.31.5...v0.31.6) (2021-05-27)


### Features

* keychain rotate passphrase ([#944](https://github.com/libp2p/js-libp2p/issues/944)) ([478963a](https://github.com/libp2p/js-libp2p/commit/478963ad2d195444494c0acc54cb3847a29e117c))



## [0.31.5](https://github.com/libp2p/js-libp2p/compare/v0.31.4...v0.31.5) (2021-05-12)


### Bug Fixes

* store remote agent and protocol version during identify ([#943](https://github.com/libp2p/js-libp2p/issues/943)) ([818d2b2](https://github.com/libp2p/js-libp2p/commit/818d2b2a98736f4242694479089396f6070cdad5))



## [0.31.4](https://github.com/libp2p/js-libp2p/compare/v0.31.3...v0.31.4) (2021-05-12)


### Bug Fixes

* peerRouting.findPeer() trying to find self ([#941](https://github.com/libp2p/js-libp2p/issues/941)) ([a79c6b5](https://github.com/libp2p/js-libp2p/commit/a79c6b50d7fddbcdb1af53efae922cecad4c9a83))



## [0.31.3](https://github.com/libp2p/js-libp2p/compare/v0.31.2...v0.31.3) (2021-05-04)



## [0.31.2](https://github.com/libp2p/js-libp2p/compare/v0.31.1...v0.31.2) (2021-04-30)


### Bug Fixes

* moving averages record types ([#935](https://github.com/libp2p/js-libp2p/issues/935)) ([b5a9eb2](https://github.com/libp2p/js-libp2p/commit/b5a9eb208763efa027d0b4caae87c515b6f5869b))



## [0.31.1](https://github.com/libp2p/js-libp2p/compare/v0.31.0...v0.31.1) (2021-04-30)


### Bug Fixes

* event emitter and interfaces types for discovery and routing ([#934](https://github.com/libp2p/js-libp2p/issues/934)) ([302bb90](https://github.com/libp2p/js-libp2p/commit/302bb9005891aa06b70a5f354bfac6b2d5a3c3b8))



# [0.31.0](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.7...v0.31.0) (2021-04-28)



# [0.31.0-rc.7](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.6...v0.31.0-rc.7) (2021-04-27)


### Bug Fixes

* address book guarantees no replicated entries are added ([#927](https://github.com/libp2p/js-libp2p/issues/927)) ([ac370fc](https://github.com/libp2p/js-libp2p/commit/ac370fc9679b51da8cee3791b6dd268d0695d136))



# [0.31.0-rc.6](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.5...v0.31.0-rc.6) (2021-04-22)


### Bug Fixes

* keychain optional pw and use interfaces for validators and selectors instead ([#924](https://github.com/libp2p/js-libp2p/issues/924)) ([88b0415](https://github.com/libp2p/js-libp2p/commit/88b04156bf614650c2b14d49b12e969c5eecf04d))



# [0.31.0-rc.5](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.4...v0.31.0-rc.5) (2021-04-21)


### Bug Fixes

* address book should not emit peer event if no addresses are known ([b4fb9b7](https://github.com/libp2p/js-libp2p/commit/b4fb9b7bf266ba03c4462c0a41b1c2691e4e88d4))
* demand pubsub subclass instead of pubsub instance ([#922](https://github.com/libp2p/js-libp2p/issues/922)) ([086b0ec](https://github.com/libp2p/js-libp2p/commit/086b0ec0df2fac93845d0a0a6b2e2464e869afcd))
* dht configuration selectors and validators ([#919](https://github.com/libp2p/js-libp2p/issues/919)) ([cc1f4af](https://github.com/libp2p/js-libp2p/commit/cc1f4af879a58e94538591851d0085ff98cd2641))



# [0.31.0-rc.4](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.3...v0.31.0-rc.4) (2021-04-20)


### Bug Fixes

* add clientMode dht arg and upgrade interface-datastore ([#918](https://github.com/libp2p/js-libp2p/issues/918)) ([975e779](https://github.com/libp2p/js-libp2p/commit/975e77991e67dd9bff790b83df7bd6fa5ddcfc67))
* do not add abort signals to useless addresses ([#913](https://github.com/libp2p/js-libp2p/issues/913)) ([06e8f3d](https://github.com/libp2p/js-libp2p/commit/06e8f3dd42432e4b37ab7904b02abde7d1cadda3))
* specify pbjs root ([#917](https://github.com/libp2p/js-libp2p/issues/917)) ([b043bca](https://github.com/libp2p/js-libp2p/commit/b043bca607565cf534771e6cf975288a8ff3030b))



# [0.31.0-rc.3](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.2...v0.31.0-rc.3) (2021-04-19)


### Bug Fixes

* remove inline arg types from function definitions ([#916](https://github.com/libp2p/js-libp2p/issues/916)) ([2af692f](https://github.com/libp2p/js-libp2p/commit/2af692fb4de572168524ae684608fc6526de4ef7))



# [0.31.0-rc.2](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.1...v0.31.0-rc.2) (2021-04-16)


### Bug Fixes

* metrics stats and moving averages types ([#915](https://github.com/libp2p/js-libp2p/issues/915)) ([3d0a79e](https://github.com/libp2p/js-libp2p/commit/3d0a79eff3bc34a5bdc8ffa31e9b09345a02ad9d))



# [0.31.0-rc.1](https://github.com/libp2p/js-libp2p/compare/v0.31.0-rc.0...v0.31.0-rc.1) (2021-04-16)


### Bug Fixes

* dial protocol should throw if no protocol is provided ([#914](https://github.com/libp2p/js-libp2p/issues/914)) ([21c9aee](https://github.com/libp2p/js-libp2p/commit/21c9aeecb13440238aa6b0fb5a6731d2f87d4938))


### BREAKING CHANGES

* dialProtocol does not return connection when no protocols are provided



# [0.31.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.30.12...v0.31.0-rc.0) (2021-04-15)



## [0.30.12](https://github.com/libp2p/js-libp2p/compare/v0.30.11...v0.30.12) (2021-03-27)


### Bug Fixes

* the API of es6-promisify is not the same as promisify-es6 ([#905](https://github.com/libp2p/js-libp2p/issues/905)) ([a7128f0](https://github.com/libp2p/js-libp2p/commit/a7128f07ec8d4b729145ecfc6ad1d585ffddea46))



## [0.30.11](https://github.com/libp2p/js-libp2p/compare/v0.30.10...v0.30.11) (2021-03-23)


### Bug Fixes

* connection direction should be only inbound or outbound ([9504f19](https://github.com/libp2p/js-libp2p/commit/9504f1951a3cca55bb7b4e25e4934e4024034ee8))
* interface-datastore update ([f5c1cd1](https://github.com/libp2p/js-libp2p/commit/f5c1cd1fb07bc73cf9d9da3c2eb4327bed4279a4))



## [0.30.10](https://github.com/libp2p/js-libp2p/compare/v0.30.9...v0.30.10) (2021-03-09)


### Bug Fixes

* conn mgr access to moving averages record object ([#897](https://github.com/libp2p/js-libp2p/issues/897)) ([5f702f3](https://github.com/libp2p/js-libp2p/commit/5f702f3481afd4ad4fbc89f0e9b75a6d56b03520))



## [0.30.9](https://github.com/libp2p/js-libp2p/compare/v0.30.8...v0.30.9) (2021-02-25)


### Bug Fixes

* transport manager fault tolerance should include tolerance to transport listen fail ([#893](https://github.com/libp2p/js-libp2p/issues/893)) ([3f314d5](https://github.com/libp2p/js-libp2p/commit/3f314d5e90f74583b721386d0c9c5d8363cd4de7))



## [0.30.8](https://github.com/libp2p/js-libp2p/compare/v0.30.7...v0.30.8) (2021-02-11)


### Bug Fixes

* routers should only use dht if enabled ([#885](https://github.com/libp2p/js-libp2p/issues/885)) ([a34d2bb](https://github.com/libp2p/js-libp2p/commit/a34d2bbcc3d69ec3006137a909a7e8c53b9d378e))



## [0.30.7](https://github.com/libp2p/js-libp2p/compare/v0.30.6...v0.30.7) (2021-02-01)


### Bug Fixes

* do not add observed address received from peers ([#882](https://github.com/libp2p/js-libp2p/issues/882)) ([a36b211](https://github.com/libp2p/js-libp2p/commit/a36b2112aafcee309a02de0cff5440cf69cd53a7))



## [0.30.6](https://github.com/libp2p/js-libp2p/compare/v0.30.5...v0.30.6) (2021-01-29)


### Bug Fixes

* peer discovery type in config ([#878](https://github.com/libp2p/js-libp2p/issues/878)) ([3e7594f](https://github.com/libp2p/js-libp2p/commit/3e7594f69733bf374b374a6065458fa6cae81c5f))
* unref nat manager retries ([#877](https://github.com/libp2p/js-libp2p/issues/877)) ([ce2a624](https://github.com/libp2p/js-libp2p/commit/ce2a624a09b3107c0b2b4752e666804ecea54fb5))



## [0.30.5](https://github.com/libp2p/js-libp2p/compare/v0.30.4...v0.30.5) (2021-01-28)


### Bug Fixes

* create has optional peer id type ([#875](https://github.com/libp2p/js-libp2p/issues/875)) ([eeda056](https://github.com/libp2p/js-libp2p/commit/eeda05688330c17b810bf47544ef977386623317))



## [0.30.4](https://github.com/libp2p/js-libp2p/compare/v0.30.3...v0.30.4) (2021-01-27)


### Features

* add UPnP NAT manager ([#810](https://github.com/libp2p/js-libp2p/issues/810)) ([0a6bc0d](https://github.com/libp2p/js-libp2p/commit/0a6bc0d1013dfd80ab600e8f74c1544b433ece29))



## [0.30.3](https://github.com/libp2p/js-libp2p/compare/v0.30.2...v0.30.3) (2021-01-27)



## [0.30.2](https://github.com/libp2p/js-libp2p/compare/v0.30.1...v0.30.2) (2021-01-21)


### Bug Fixes

* store multiaddrs during content and peer routing queries ([#865](https://github.com/libp2p/js-libp2p/issues/865)) ([45c3367](https://github.com/libp2p/js-libp2p/commit/45c33675a7412c66d0fd4e113ef8506077b6f492))



## [0.30.1](https://github.com/libp2p/js-libp2p/compare/v0.30.0...v0.30.1) (2021-01-18)


### Bug Fixes

* event emitter types with local types ([#864](https://github.com/libp2p/js-libp2p/issues/864)) ([6c41e30](https://github.com/libp2p/js-libp2p/commit/6c41e3045608bcae8061d20501be5751dad8157a))



# [0.30.0](https://github.com/libp2p/js-libp2p/compare/v0.29.4...v0.30.0) (2020-12-16)


### Bug Fixes

* remove test/dialing/utils extra file ([689c35e](https://github.com/libp2p/js-libp2p/commit/689c35ed1c68e514293a9895d496e2e8440454e9))
* types from ipfs integration ([#832](https://github.com/libp2p/js-libp2p/issues/832)) ([9ae1b75](https://github.com/libp2p/js-libp2p/commit/9ae1b758e99e3fc9067e26b4eae4c15ccb1ba303))


### chore

* update pubsub ([#801](https://github.com/libp2p/js-libp2p/issues/801)) ([e50c6ab](https://github.com/libp2p/js-libp2p/commit/e50c6abcf2ebc80ebf2dfadd015ab21a20cffadc))


### Features

* auto relay ([#723](https://github.com/libp2p/js-libp2p/issues/723)) ([caf66ea](https://github.com/libp2p/js-libp2p/commit/caf66ea1439f6b75a0c321a16bd5c5d7d6a2bd47))
* auto relay network query for new relays ([0bf0b7c](https://github.com/libp2p/js-libp2p/commit/0bf0b7cf8968d55002ac4c559ffb59985feeb092))
* custom announce filter ([ef9d3ca](https://github.com/libp2p/js-libp2p/commit/ef9d3ca2c6f35d692d6079e74088c5146d46eebe))
* custom dialer addr sorter ([#792](https://github.com/libp2p/js-libp2p/issues/792)) ([585ad52](https://github.com/libp2p/js-libp2p/commit/585ad52b4c71dd7514e99a287e0318b2b837ec48))
* discover and connect to closest peers ([#798](https://github.com/libp2p/js-libp2p/issues/798)) ([baedf3f](https://github.com/libp2p/js-libp2p/commit/baedf3fe5ab946e938db1415d1662452cdfc0cc1))


### BREAKING CHANGES

* pubsub signing policy properties were changed according to libp2p-interfaces changes to a single property. The emitSelf option default value was also modified to match the routers value



# [0.30.0-rc.2](https://github.com/libp2p/js-libp2p/compare/v0.30.0-rc.1...v0.30.0-rc.2) (2020-12-15)



# [0.30.0-rc.1](https://github.com/libp2p/js-libp2p/compare/v0.30.0-rc.0...v0.30.0-rc.1) (2020-12-11)


### Bug Fixes

* types from ipfs integration ([#832](https://github.com/libp2p/js-libp2p/issues/832)) ([216eb97](https://github.com/libp2p/js-libp2p/commit/216eb9730ef473f73a974c3dbaf306ecdc815c8b))



# [0.30.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.29.4...v0.30.0-rc.0) (2020-12-10)


### Bug Fixes

* remove test/dialing/utils extra file ([3f1dc20](https://github.com/libp2p/js-libp2p/commit/3f1dc20caf1c80078f403deb9174cd06d08567ab))


### chore

* update pubsub ([#801](https://github.com/libp2p/js-libp2p/issues/801)) ([9205fce](https://github.com/libp2p/js-libp2p/commit/9205fce34d0cd8dd5d32988be34c110fc0a5b6e2))


### Features

* auto relay ([#723](https://github.com/libp2p/js-libp2p/issues/723)) ([65ec267](https://github.com/libp2p/js-libp2p/commit/65ec267e7f4826caacd042213c3fbacce589ab5b))
* auto relay network query for new relays ([9faf1bf](https://github.com/libp2p/js-libp2p/commit/9faf1bfcf61581acc715b9be78b71dc14501835a))
* custom announce filter ([48476d5](https://github.com/libp2p/js-libp2p/commit/48476d504a98b7b51b3e2dc64eab93670fde0c7b))
* custom dialer addr sorter ([#792](https://github.com/libp2p/js-libp2p/issues/792)) ([91b15b6](https://github.com/libp2p/js-libp2p/commit/91b15b6790952b4db11264961d9c6f2a96d1fe43))
* discover and connect to closest peers ([#798](https://github.com/libp2p/js-libp2p/issues/798)) ([b73106e](https://github.com/libp2p/js-libp2p/commit/b73106eba2d559621f427f7aa788e9b0ef47d135))


### BREAKING CHANGES

* pubsub signing policy properties were changed according to libp2p-interfaces changes to a single property. The emitSelf option default value was also modified to match the routers value



<a name="0.29.4"></a>
## [0.29.4](https://github.com/libp2p/js-libp2p/compare/v0.29.3...v0.29.4) (2020-12-09)


### Bug Fixes

* dial self ([#826](https://github.com/libp2p/js-libp2p/issues/826)) ([6350a18](https://github.com/libp2p/js-libp2p/commit/6350a18))


### Features

* custom and store self agent version + store self protocol version ([#800](https://github.com/libp2p/js-libp2p/issues/800)) ([d0a9fad](https://github.com/libp2p/js-libp2p/commit/d0a9fad))
* support custom listener options ([#822](https://github.com/libp2p/js-libp2p/issues/822)) ([8691465](https://github.com/libp2p/js-libp2p/commit/8691465))



<a name="0.29.3"></a>
## [0.29.3](https://github.com/libp2p/js-libp2p/compare/v0.29.2...v0.29.3) (2020-11-04)


### Features

* resolve multiaddrs before dial ([#782](https://github.com/libp2p/js-libp2p/issues/782)) ([093c0ea](https://github.com/libp2p/js-libp2p/commit/093c0ea))



<a name="0.29.2"></a>
## [0.29.2](https://github.com/libp2p/js-libp2p/compare/v0.29.1...v0.29.2) (2020-10-23)


### Bug Fixes

* cleanup open streams on conn close ([#791](https://github.com/libp2p/js-libp2p/issues/791)) ([06f26e5](https://github.com/libp2p/js-libp2p/commit/06f26e5))



<a name="0.29.1"></a>
## [0.29.1](https://github.com/libp2p/js-libp2p/compare/v0.29.0...v0.29.1) (2020-10-22)


### Bug Fixes

* catch error in upgrader close call ([e04224a](https://github.com/libp2p/js-libp2p/commit/e04224a))
* ensure streams are closed on connection close ([4c6be91](https://github.com/libp2p/js-libp2p/commit/4c6be91))
* flakey identify test firefox ([#774](https://github.com/libp2p/js-libp2p/issues/774)) ([60d437f](https://github.com/libp2p/js-libp2p/commit/60d437f))



<a name="0.29.0"></a>
# [0.29.0](https://github.com/libp2p/js-libp2p/compare/v0.28.10...v0.29.0) (2020-08-27)


### Bug Fixes

* do not return self on peerstore.peers ([15613cc](https://github.com/libp2p/js-libp2p/commit/15613cc))
* peer record interop with go ([#739](https://github.com/libp2p/js-libp2p/issues/739)) ([93dda74](https://github.com/libp2p/js-libp2p/commit/93dda74))
* replace node buffers with uint8arrays ([#730](https://github.com/libp2p/js-libp2p/issues/730)) ([1e86971](https://github.com/libp2p/js-libp2p/commit/1e86971))
* revert new identify protocol versions ([3158366](https://github.com/libp2p/js-libp2p/commit/3158366))
* signature compliant with spec ([4ab125e](https://github.com/libp2p/js-libp2p/commit/4ab125e))


### Chores

* update travis to use node lts and stable ([098f3d1](https://github.com/libp2p/js-libp2p/commit/098f3d1))


### Features

* cerified addressbook ([8f2e690](https://github.com/libp2p/js-libp2p/commit/8f2e690))
* create self peer record in identify ([8a97dde](https://github.com/libp2p/js-libp2p/commit/8a97dde))
* exchange signed peer records in identify ([e50f0ee](https://github.com/libp2p/js-libp2p/commit/e50f0ee))
* gossipsub 1.1 ([#733](https://github.com/libp2p/js-libp2p/issues/733)) ([55c9bfa](https://github.com/libp2p/js-libp2p/commit/55c9bfa))
* signed peer records record manager ([3e5d450](https://github.com/libp2p/js-libp2p/commit/3e5d450))


### Reverts

* reapply "fix: throw if no conn encryption module provided ([#665](https://github.com/libp2p/js-libp2p/issues/665))" ([689f90a](https://github.com/libp2p/js-libp2p/commit/689f90a))


### BREAKING CHANGES

* pubsub implementation is now directly exposed and its API was updated according to the new pubsub interface in js-libp2p-interfaces repo

* chore: use gossipsub branch with src added

* fix: add pubsub handlers adapter

* chore: fix deps

* chore: update pubsub docs and examples

* chore: apply suggestions from code review

Co-authored-by: Jacob Heun <jacobheun@gmail.com>

* chore: use new floodsub

* chore: change validator doc set

Co-authored-by: Jacob Heun <jacobheun@gmail.com>

* chore: add new gossipsub src

Co-authored-by: Jacob Heun <jacobheun@gmail.com>
* - All deps used by this module now use Uint8Arrays in place of node Buffers

* chore: browser fixes

* chore: remove .only

* chore: stringify uint8array before parsing

* chore: update interop suite

* chore: remove ts from build command

* chore: update deps

* fix: update records to use uint8array

* chore: fix lint

* chore: update deps

Co-authored-by: Jacob Heun <jacobheun@gmail.com>
* this drops testing support in node 10.



<a name="0.29.0-rc.1"></a>
# [0.29.0-rc.1](https://github.com/libp2p/js-libp2p/compare/v0.29.0-rc.0...v0.29.0-rc.1) (2020-08-27)


### Bug Fixes

* peer record interop with go ([#739](https://github.com/libp2p/js-libp2p/issues/739)) ([c4c7ef9](https://github.com/libp2p/js-libp2p/commit/c4c7ef9))



<a name="0.29.0-rc.0"></a>
# [0.29.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.28.10...v0.29.0-rc.0) (2020-08-25)


### Bug Fixes

* do not return self on peerstore.peers ([e1b8edc](https://github.com/libp2p/js-libp2p/commit/e1b8edc))
* replace node buffers with uint8arrays ([#730](https://github.com/libp2p/js-libp2p/issues/730)) ([507f8c4](https://github.com/libp2p/js-libp2p/commit/507f8c4))
* revert new identify protocol versions ([a798c65](https://github.com/libp2p/js-libp2p/commit/a798c65))
* signature compliant with spec ([97b5d2a](https://github.com/libp2p/js-libp2p/commit/97b5d2a))


### Chores

* update travis to use node lts and stable ([c272288](https://github.com/libp2p/js-libp2p/commit/c272288))


### Features

* cerified addressbook ([e0ed258](https://github.com/libp2p/js-libp2p/commit/e0ed258))
* create self peer record in identify ([83922a7](https://github.com/libp2p/js-libp2p/commit/83922a7))
* exchange signed peer records in identify ([f835457](https://github.com/libp2p/js-libp2p/commit/f835457))
* gossipsub 1.1 ([#733](https://github.com/libp2p/js-libp2p/issues/733)) ([e14ce40](https://github.com/libp2p/js-libp2p/commit/e14ce40))
* signed peer records record manager ([f95edf1](https://github.com/libp2p/js-libp2p/commit/f95edf1))


### Reverts

* reapply "fix: throw if no conn encryption module provided ([#665](https://github.com/libp2p/js-libp2p/issues/665))" ([ad7f02e](https://github.com/libp2p/js-libp2p/commit/ad7f02e))


### BREAKING CHANGES

* pubsub implementation is now directly exposed and its API was updated according to the new pubsub interface in js-libp2p-interfaces repo

* chore: use gossipsub branch with src added

* fix: add pubsub handlers adapter

* chore: fix deps

* chore: update pubsub docs and examples

* chore: apply suggestions from code review

Co-authored-by: Jacob Heun <jacobheun@gmail.com>

* chore: use new floodsub

* chore: change validator doc set

Co-authored-by: Jacob Heun <jacobheun@gmail.com>

* chore: add new gossipsub src

Co-authored-by: Jacob Heun <jacobheun@gmail.com>
* - All deps used by this module now use Uint8Arrays in place of node Buffers

* chore: browser fixes

* chore: remove .only

* chore: stringify uint8array before parsing

* chore: update interop suite

* chore: remove ts from build command

* chore: update deps

* fix: update records to use uint8array

* chore: fix lint

* chore: update deps

Co-authored-by: Jacob Heun <jacobheun@gmail.com>
* this drops testing support in node 10.



<a name="0.28.10"></a>
## [0.28.10](https://github.com/libp2p/js-libp2p/compare/v0.28.9...v0.28.10) (2020-08-05)


### Bug Fixes

* allow certain keychain operations without a password ([#726](https://github.com/libp2p/js-libp2p/issues/726)) ([8c56ec0](https://github.com/libp2p/js-libp2p/commit/8c56ec0))
* **identify:** make agentversion dynamic and add it to the peerstore ([#724](https://github.com/libp2p/js-libp2p/issues/724)) ([726a746](https://github.com/libp2p/js-libp2p/commit/726a746))


### Features

* **keychain:** add support for ed25519 and secp keys ([#725](https://github.com/libp2p/js-libp2p/issues/725)) ([51d7ca4](https://github.com/libp2p/js-libp2p/commit/51d7ca4))



<a name="0.28.9"></a>
## [0.28.9](https://github.com/libp2p/js-libp2p/compare/v0.28.8...v0.28.9) (2020-07-27)


### Bug Fixes

* ping multiaddr from peer not previously stored in peerstore ([#719](https://github.com/libp2p/js-libp2p/issues/719)) ([2440c87](https://github.com/libp2p/js-libp2p/commit/2440c87))



<a name="0.28.8"></a>
## [0.28.8](https://github.com/libp2p/js-libp2p/compare/v0.28.7...v0.28.8) (2020-07-20)


### Bug Fixes

* create dial target for peer with no known addrs ([#715](https://github.com/libp2p/js-libp2p/issues/715)) ([7da9ad4](https://github.com/libp2p/js-libp2p/commit/7da9ad4))



<a name="0.28.7"></a>
## [0.28.7](https://github.com/libp2p/js-libp2p/compare/v0.28.6...v0.28.7) (2020-07-14)


### Bug Fixes

* retimer reschedule does not work as interval ([#710](https://github.com/libp2p/js-libp2p/issues/710)) ([999c1b7](https://github.com/libp2p/js-libp2p/commit/999c1b7))



<a name="0.28.6"></a>
## [0.28.6](https://github.com/libp2p/js-libp2p/compare/v0.28.5...v0.28.6) (2020-07-14)


### Bug Fixes

* not dial all known peers in parallel on startup ([#698](https://github.com/libp2p/js-libp2p/issues/698)) ([9ccab40](https://github.com/libp2p/js-libp2p/commit/9ccab40))



<a name="0.28.5"></a>
## [0.28.5](https://github.com/libp2p/js-libp2p/compare/v0.28.4...v0.28.5) (2020-07-10)


### Bug Fixes

* pass libp2p to the dht ([#700](https://github.com/libp2p/js-libp2p/issues/700)) ([5a84dd5](https://github.com/libp2p/js-libp2p/commit/5a84dd5))



<a name="0.28.4"></a>
## [0.28.4](https://github.com/libp2p/js-libp2p/compare/v0.28.3...v0.28.4) (2020-07-03)



<a name="0.28.3"></a>
## [0.28.3](https://github.com/libp2p/js-libp2p/compare/v0.28.2...v0.28.3) (2020-06-18)


### Bug Fixes

* catch pipe errors ([#678](https://github.com/libp2p/js-libp2p/issues/678)) ([a8219e6](https://github.com/libp2p/js-libp2p/commit/a8219e6))



<a name="0.28.2"></a>
## [0.28.2](https://github.com/libp2p/js-libp2p/compare/v0.28.1...v0.28.2) (2020-06-15)


### Reverts

* "fix: throw if no conn encryption module provided ([#665](https://github.com/libp2p/js-libp2p/issues/665))" ([b621fbd](https://github.com/libp2p/js-libp2p/commit/b621fbd))



<a name="0.28.1"></a>
## [0.28.1](https://github.com/libp2p/js-libp2p/compare/v0.28.0...v0.28.1) (2020-06-12)


### Bug Fixes

* throw if no conn encryption module provided ([#665](https://github.com/libp2p/js-libp2p/issues/665)) ([c038550](https://github.com/libp2p/js-libp2p/commit/c038550))


### Features

* add ConnectionManager#getAll ([8f680e2](https://github.com/libp2p/js-libp2p/commit/8f680e2))



<a name="0.28.0"></a>
# [0.28.0](https://github.com/libp2p/js-libp2p/compare/v0.28.0-rc.0...v0.28.0) (2020-06-05)



<a name="0.28.0-rc.0"></a>
# [0.28.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.27.8...v0.28.0-rc.0) (2020-05-28)


### Bug Fixes

* always emit when a connection is made ([72f37ac](https://github.com/libp2p/js-libp2p/commit/72f37ac))
* expose the muxed stream interface on inbound streams ([52a615f](https://github.com/libp2p/js-libp2p/commit/52a615f))
* libp2p connections getter ([aaf62a4](https://github.com/libp2p/js-libp2p/commit/aaf62a4))
* onConnect should not add addr to the addressBook ([2b45fee](https://github.com/libp2p/js-libp2p/commit/2b45fee))
* use libp2p.multiaddrs instead of listen ([7fbd155](https://github.com/libp2p/js-libp2p/commit/7fbd155))
* **example:** rename misleading variable ([#645](https://github.com/libp2p/js-libp2p/issues/645)) ([b781911](https://github.com/libp2p/js-libp2p/commit/b781911))


### Chores

* deprecate old peer store api ([#598](https://github.com/libp2p/js-libp2p/issues/598)) ([ed6d5bb](https://github.com/libp2p/js-libp2p/commit/ed6d5bb))
* remove peer-info usage ([12e48ad](https://github.com/libp2p/js-libp2p/commit/12e48ad))


### Features

* address and proto books ([#590](https://github.com/libp2p/js-libp2p/issues/590)) ([e9d225c](https://github.com/libp2p/js-libp2p/commit/e9d225c))
* address manager ([2a7967c](https://github.com/libp2p/js-libp2p/commit/2a7967c))
* keybook ([ce38033](https://github.com/libp2p/js-libp2p/commit/ce38033))
* metadata book ([#638](https://github.com/libp2p/js-libp2p/issues/638)) ([84b935f](https://github.com/libp2p/js-libp2p/commit/84b935f))
* peerStore persistence ([5123a83](https://github.com/libp2p/js-libp2p/commit/5123a83))
* support dial only on transport manager to tolerate errors ([#643](https://github.com/libp2p/js-libp2p/issues/643)) ([698c1df](https://github.com/libp2p/js-libp2p/commit/698c1df))


### BREAKING CHANGES

* all API methods with peer-info parameters or return values were changed. You can check the API.md document, in order to check the new values to use
* the peer-store api changed. Check the API docs for the new specification.

* chore: apply suggestions from code review

Co-Authored-By: Jacob Heun <jacobheun@gmail.com>

* chore: apply suggestions from code review

Co-Authored-By: Jacob Heun <jacobheun@gmail.com>

Co-authored-by: Jacob Heun <jacobheun@gmail.com>



<a name="0.27.8"></a>
## [0.27.8](https://github.com/libp2p/js-libp2p/compare/v0.27.7...v0.27.8) (2020-05-06)


### Bug Fixes

* reset discovery services upon stop ([#618](https://github.com/libp2p/js-libp2p/issues/618)) ([ea0621b](https://github.com/libp2p/js-libp2p/commit/ea0621b))



<a name="0.27.7"></a>
## [0.27.7](https://github.com/libp2p/js-libp2p/compare/v0.27.6...v0.27.7) (2020-04-24)


### Bug Fixes

* remove node global ([#587](https://github.com/libp2p/js-libp2p/issues/587)) ([9b13fe3](https://github.com/libp2p/js-libp2p/commit/9b13fe3))



<a name="0.27.6"></a>
## [0.27.6](https://github.com/libp2p/js-libp2p/compare/v0.27.5...v0.27.6) (2020-04-16)


### Bug Fixes

* add null check in libp2p.hangUp() ([c940f2d](https://github.com/libp2p/js-libp2p/commit/c940f2d))
* make circuit relay listening addresses more forgiving ([#604](https://github.com/libp2p/js-libp2p/issues/604)) ([e192eb6](https://github.com/libp2p/js-libp2p/commit/e192eb6))



<a name="0.27.5"></a>
## [0.27.5](https://github.com/libp2p/js-libp2p/compare/v0.27.4...v0.27.5) (2020-04-06)


### Bug Fixes

* await peer discovery start in libp2p start ([#600](https://github.com/libp2p/js-libp2p/issues/600)) ([bd7fd0f](https://github.com/libp2p/js-libp2p/commit/bd7fd0f))



<a name="0.27.4"></a>
## [0.27.4](https://github.com/libp2p/js-libp2p/compare/v0.27.3...v0.27.4) (2020-03-31)


### Bug Fixes

* only use a single export ([#596](https://github.com/libp2p/js-libp2p/issues/596)) ([3072875](https://github.com/libp2p/js-libp2p/commit/3072875))
* pass libp2p to discovery services ([#597](https://github.com/libp2p/js-libp2p/issues/597)) ([9e35fbc](https://github.com/libp2p/js-libp2p/commit/9e35fbc))
* **test:** improve flakey random walk discovery test ([#574](https://github.com/libp2p/js-libp2p/issues/574)) ([f4ec355](https://github.com/libp2p/js-libp2p/commit/f4ec355))
* remove use of assert module ([#561](https://github.com/libp2p/js-libp2p/issues/561)) ([a8984c6](https://github.com/libp2p/js-libp2p/commit/a8984c6))



<a name="0.27.3"></a>
## [0.27.3](https://github.com/libp2p/js-libp2p/compare/v0.27.2...v0.27.3) (2020-02-11)


### Bug Fixes

* dont allow multiaddr dials without a peer id ([#558](https://github.com/libp2p/js-libp2p/issues/558)) ([a317a8b](https://github.com/libp2p/js-libp2p/commit/a317a8b))



<a name="0.27.2"></a>
## [0.27.2](https://github.com/libp2p/js-libp2p/compare/v0.27.1...v0.27.2) (2020-02-05)


### Bug Fixes

* ensure identify streams are closed ([#551](https://github.com/libp2p/js-libp2p/issues/551)) ([f662fdc](https://github.com/libp2p/js-libp2p/commit/f662fdc))



<a name="0.27.1"></a>
## [0.27.1](https://github.com/libp2p/js-libp2p/compare/v0.27.0...v0.27.1) (2020-02-03)


### Bug Fixes

* stop stream after first pong received ([#545](https://github.com/libp2p/js-libp2p/issues/545)) ([be8fc9d](https://github.com/libp2p/js-libp2p/commit/be8fc9d))



<a name="0.27.0"></a>
# [0.27.0](https://github.com/libp2p/js-libp2p/compare/v0.26.2...v0.27.0) (2020-01-28)


### Bug Fixes

* clean up peer discovery flow ([#494](https://github.com/libp2p/js-libp2p/issues/494)) ([12fc069](https://github.com/libp2p/js-libp2p/commit/12fc069))
* clean up pending dials abort per feedback ([633b0c2](https://github.com/libp2p/js-libp2p/commit/633b0c2))
* conn mngr min/max connection values ([#528](https://github.com/libp2p/js-libp2p/issues/528)) ([ba4681b](https://github.com/libp2p/js-libp2p/commit/ba4681b))
* correct release readme ([ce8e60b](https://github.com/libp2p/js-libp2p/commit/ce8e60b))
* examples readme typos ([#481](https://github.com/libp2p/js-libp2p/issues/481)) ([35ac02d](https://github.com/libp2p/js-libp2p/commit/35ac02d))
* make dialer configurable ([#521](https://github.com/libp2p/js-libp2p/issues/521)) ([4ca481b](https://github.com/libp2p/js-libp2p/commit/4ca481b))
* performance bottleneck in stat.js ([#463](https://github.com/libp2p/js-libp2p/issues/463)) ([93a1e42](https://github.com/libp2p/js-libp2p/commit/93a1e42))
* registrar should filter the disconnected conn ([#532](https://github.com/libp2p/js-libp2p/issues/532)) ([bb2e56e](https://github.com/libp2p/js-libp2p/commit/bb2e56e))
* release tokens as soon as they are available ([2570a1b](https://github.com/libp2p/js-libp2p/commit/2570a1b))
* replace peerInfo addresses with listen addresses ([#485](https://github.com/libp2p/js-libp2p/issues/485)) ([1999606](https://github.com/libp2p/js-libp2p/commit/1999606))
* stop discoveries ([#530](https://github.com/libp2p/js-libp2p/issues/530)) ([4222c49](https://github.com/libp2p/js-libp2p/commit/4222c49))
* token release logic ([90ecc57](https://github.com/libp2p/js-libp2p/commit/90ecc57))
* upgrader should not need muxers ([#517](https://github.com/libp2p/js-libp2p/issues/517)) ([5d7ee50](https://github.com/libp2p/js-libp2p/commit/5d7ee50))
* use toB58String everywhere to be consistent ([#537](https://github.com/libp2p/js-libp2p/issues/537)) ([c1038be](https://github.com/libp2p/js-libp2p/commit/c1038be))


### Features

* abort all pending dials on stop ([ba02764](https://github.com/libp2p/js-libp2p/commit/ba02764))
* add early token recycling in ([a5b54a7](https://github.com/libp2p/js-libp2p/commit/a5b54a7))
* add libp2p.connections getter ([#522](https://github.com/libp2p/js-libp2p/issues/522)) ([6445fda](https://github.com/libp2p/js-libp2p/commit/6445fda))
* add token based dialer ([e445a17](https://github.com/libp2p/js-libp2p/commit/e445a17))
* allow transport options to be passed on creation ([#524](https://github.com/libp2p/js-libp2p/issues/524)) ([c339be1](https://github.com/libp2p/js-libp2p/commit/c339be1))
* coalescing dial support ([#518](https://github.com/libp2p/js-libp2p/issues/518)) ([15f7c2a](https://github.com/libp2p/js-libp2p/commit/15f7c2a))
* discovery modules ([#486](https://github.com/libp2p/js-libp2p/issues/486)) ([18a062e](https://github.com/libp2p/js-libp2p/commit/18a062e))
* discovery modules from transports should be added ([#510](https://github.com/libp2p/js-libp2p/issues/510)) ([f1eb373](https://github.com/libp2p/js-libp2p/commit/f1eb373))
* peer store ([#470](https://github.com/libp2p/js-libp2p/issues/470)) ([582094a](https://github.com/libp2p/js-libp2p/commit/582094a))
* registrar ([#471](https://github.com/libp2p/js-libp2p/issues/471)) ([9d52b80](https://github.com/libp2p/js-libp2p/commit/9d52b80))
* support peer-id instances in peer store operations ([#491](https://github.com/libp2p/js-libp2p/issues/491)) ([8da9fc9](https://github.com/libp2p/js-libp2p/commit/8da9fc9))



<a name="0.27.0-rc.0"></a>
# [0.27.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.27.0-pre.2...v0.27.0-rc.0) (2020-01-24)


### Bug Fixes

* registrar should filter the disconnected conn ([#532](https://github.com/libp2p/js-libp2p/issues/532)) ([83409de](https://github.com/libp2p/js-libp2p/commit/83409de))
* stop discoveries ([#530](https://github.com/libp2p/js-libp2p/issues/530)) ([c44e6e3](https://github.com/libp2p/js-libp2p/commit/c44e6e3))
* use toB58String everywhere to be consistent ([#537](https://github.com/libp2p/js-libp2p/issues/537)) ([31d1b23](https://github.com/libp2p/js-libp2p/commit/31d1b23))



<a name="0.27.0-pre.2"></a>
# [0.27.0-pre.2](https://github.com/libp2p/js-libp2p/compare/v0.27.0-pre.1...v0.27.0-pre.2) (2020-01-07)


### Bug Fixes

* conn mngr min/max connection values ([#528](https://github.com/libp2p/js-libp2p/issues/528)) ([a1717da](https://github.com/libp2p/js-libp2p/commit/a1717da))
* make dialer configurable ([#521](https://github.com/libp2p/js-libp2p/issues/521)) ([24c3ce6](https://github.com/libp2p/js-libp2p/commit/24c3ce6))
* upgrader should not need muxers ([#517](https://github.com/libp2p/js-libp2p/issues/517)) ([56a1825](https://github.com/libp2p/js-libp2p/commit/56a1825))


### Features

* add libp2p.connections getter ([#522](https://github.com/libp2p/js-libp2p/issues/522)) ([6ca19c5](https://github.com/libp2p/js-libp2p/commit/6ca19c5))
* allow transport options to be passed on creation ([#524](https://github.com/libp2p/js-libp2p/issues/524)) ([0d4b2bd](https://github.com/libp2p/js-libp2p/commit/0d4b2bd))



<a name="0.27.0-pre.1"></a>
# [0.27.0-pre.1](https://github.com/libp2p/js-libp2p/compare/v0.27.0-pre.0...v0.27.0-pre.1) (2019-12-15)


### Features

* coalescing dial support ([#518](https://github.com/libp2p/js-libp2p/issues/518)) ([4a871bb](https://github.com/libp2p/js-libp2p/commit/4a871bb))



<a name="0.27.0-pre.0"></a>
# [0.27.0-pre.0](https://github.com/libp2p/js-libp2p/compare/v0.26.2...v0.27.0-pre.0) (2019-12-12)


### Bug Fixes

* clean up peer discovery flow ([#494](https://github.com/libp2p/js-libp2p/issues/494)) ([f3eb1f1](https://github.com/libp2p/js-libp2p/commit/f3eb1f1))
* clean up pending dials abort per feedback ([7c3371b](https://github.com/libp2p/js-libp2p/commit/7c3371b))
* correct release readme ([c4bc00b](https://github.com/libp2p/js-libp2p/commit/c4bc00b))
* examples readme typos ([#481](https://github.com/libp2p/js-libp2p/issues/481)) ([35ac02d](https://github.com/libp2p/js-libp2p/commit/35ac02d))
* performance bottleneck in stat.js ([#463](https://github.com/libp2p/js-libp2p/issues/463)) ([93a1e42](https://github.com/libp2p/js-libp2p/commit/93a1e42))
* release tokens as soon as they are available ([43440aa](https://github.com/libp2p/js-libp2p/commit/43440aa))
* replace peerInfo addresses with listen addresses ([#485](https://github.com/libp2p/js-libp2p/issues/485)) ([acbbc0f](https://github.com/libp2p/js-libp2p/commit/acbbc0f))
* token release logic ([1838a64](https://github.com/libp2p/js-libp2p/commit/1838a64))


### Features

* abort all pending dials on stop ([754fbc2](https://github.com/libp2p/js-libp2p/commit/754fbc2))
* add early token recycling in ([24c6037](https://github.com/libp2p/js-libp2p/commit/24c6037))
* add token based dialer ([f8540fa](https://github.com/libp2p/js-libp2p/commit/f8540fa))
* discovery modules ([#486](https://github.com/libp2p/js-libp2p/issues/486)) ([997ee16](https://github.com/libp2p/js-libp2p/commit/997ee16))
* discovery modules from transports should be added ([#510](https://github.com/libp2p/js-libp2p/issues/510)) ([af96dcc](https://github.com/libp2p/js-libp2p/commit/af96dcc))
* peer store ([#470](https://github.com/libp2p/js-libp2p/issues/470)) ([f3e276e](https://github.com/libp2p/js-libp2p/commit/f3e276e))
* registrar ([#471](https://github.com/libp2p/js-libp2p/issues/471)) ([797d8f0](https://github.com/libp2p/js-libp2p/commit/797d8f0))
* support peer-id instances in peer store operations ([#491](https://github.com/libp2p/js-libp2p/issues/491)) ([11ed6bd](https://github.com/libp2p/js-libp2p/commit/11ed6bd))



<a name="0.26.2"></a>
## [0.26.2](https://github.com/libp2p/js-libp2p/compare/v0.26.1...v0.26.2) (2019-09-24)


### Bug Fixes

* pubsub promisify ([#456](https://github.com/libp2p/js-libp2p/issues/456)) ([ae6af20](https://github.com/libp2p/js-libp2p/commit/ae6af20))



<a name="0.26.1"></a>
## [0.26.1](https://github.com/libp2p/js-libp2p/compare/v0.26.0...v0.26.1) (2019-08-21)


### Bug Fixes

* avoid using superstruct interface ([aa95ab9](https://github.com/libp2p/js-libp2p/commit/aa95ab9))
* improve config defaults ([#409](https://github.com/libp2p/js-libp2p/issues/409)) ([3eef695](https://github.com/libp2p/js-libp2p/commit/3eef695)), closes [#406](https://github.com/libp2p/js-libp2p/issues/406)
* pubsub configuration ([#404](https://github.com/libp2p/js-libp2p/issues/404)) ([b0f124b](https://github.com/libp2p/js-libp2p/commit/b0f124b)), closes [#401](https://github.com/libp2p/js-libp2p/issues/401) [#401](https://github.com/libp2p/js-libp2p/issues/401) [#401](https://github.com/libp2p/js-libp2p/issues/401) [#401](https://github.com/libp2p/js-libp2p/issues/401) [#401](https://github.com/libp2p/js-libp2p/issues/401)
* reference files directly to avoid npm install failures ([#408](https://github.com/libp2p/js-libp2p/issues/408)) ([b3deb35](https://github.com/libp2p/js-libp2p/commit/b3deb35))
* reject rather than throw in get peer info ([#410](https://github.com/libp2p/js-libp2p/issues/410)) ([60b0cbc](https://github.com/libp2p/js-libp2p/commit/60b0cbc)), closes [#400](https://github.com/libp2p/js-libp2p/issues/400)



<a name="0.26.0"></a>
# [0.26.0](https://github.com/libp2p/js-libp2p/compare/v0.26.0-rc.3...v0.26.0) (2019-08-07)



<a name="0.26.0-rc.3"></a>
# [0.26.0-rc.3](https://github.com/libp2p/js-libp2p/compare/v0.26.0-rc.2...v0.26.0-rc.3) (2019-08-06)


### Bug Fixes

* promisified methods ([#398](https://github.com/libp2p/js-libp2p/issues/398)) ([ff7a6c8](https://github.com/libp2p/js-libp2p/commit/ff7a6c8))



<a name="0.26.0-rc.2"></a>
# [0.26.0-rc.2](https://github.com/libp2p/js-libp2p/compare/v0.26.0-rc.1...v0.26.0-rc.2) (2019-08-01)


### Bug Fixes

* dont override methods of created instance ([#394](https://github.com/libp2p/js-libp2p/issues/394)) ([3e95e6f](https://github.com/libp2p/js-libp2p/commit/3e95e6f))
* pubsub default config ([#393](https://github.com/libp2p/js-libp2p/issues/393)) ([f4f3f0f](https://github.com/libp2p/js-libp2p/commit/f4f3f0f))


### Chores

* update switch ([#395](https://github.com/libp2p/js-libp2p/issues/395)) ([684f283](https://github.com/libp2p/js-libp2p/commit/684f283))


### BREAKING CHANGES

* switch configuration has changed.
'blacklistTTL' is now 'denyTTL' and 'blackListAttempts' is now 'denyAttempts'



<a name="0.26.0-rc.1"></a>
# [0.26.0-rc.1](https://github.com/libp2p/js-libp2p/compare/v0.26.0-rc.0...v0.26.0-rc.1) (2019-07-31)



<a name="0.26.0-rc.0"></a>
# [0.26.0-rc.0](https://github.com/libp2p/js-libp2p/compare/v0.25.5...v0.26.0-rc.0) (2019-07-31)


### Bug Fixes

* make subscribe comply with ipfs interface ([#389](https://github.com/libp2p/js-libp2p/issues/389)) ([9554b05](https://github.com/libp2p/js-libp2p/commit/9554b05))


### Features

* integrate gossipsub by default ([#365](https://github.com/libp2p/js-libp2p/issues/365)) ([791f39a](https://github.com/libp2p/js-libp2p/commit/791f39a))
* promisify all api methods that accept callbacks ([#381](https://github.com/libp2p/js-libp2p/issues/381)) ([df6ef45](https://github.com/libp2p/js-libp2p/commit/df6ef45))


### BREAKING CHANGES

* new configuration for deciding the implementation of pubsub to be used.
In this context, the experimental flags were also removed. See the README for the latest usage.
* The ipfs interface specified that options
should be provided after the handler, not before.
https://github.com/ipfs/interface-js-ipfs-core/blob/v0.109.0/SPEC/PUBSUB.md#pubsubsubscribe

This corrects the order of parameters. See the jsdocs examples
for subscribe to see how it should be used.



<a name="0.25.5"></a>
## [0.25.5](https://github.com/libp2p/js-libp2p/compare/v0.25.4...v0.25.5) (2019-07-12)


### Bug Fixes

* peer routing for delegate router ([#377](https://github.com/libp2p/js-libp2p/issues/377)) ([905c911](https://github.com/libp2p/js-libp2p/commit/905c911)), closes [/github.com/libp2p/go-libp2p-core/blob/6e566d10f4a5447317a66d64c7459954b969bdab/routing/query.go#L15-L24](https://github.com//github.com/libp2p/go-libp2p-core/blob/6e566d10f4a5447317a66d64c7459954b969bdab/routing/query.go/issues/L15-L24)



<a name="0.25.4"></a>
## [0.25.4](https://github.com/libp2p/js-libp2p/compare/v0.25.3...v0.25.4) (2019-06-07)


### Features

* add createLibp2p to generate a PeerInfo instance ([#367](https://github.com/libp2p/js-libp2p/issues/367)) ([04faf18](https://github.com/libp2p/js-libp2p/commit/04faf18))
* pass libp2p as option to transport creation ([#363](https://github.com/libp2p/js-libp2p/issues/363)) ([b06ca1b](https://github.com/libp2p/js-libp2p/commit/b06ca1b))



<a name="0.25.3"></a>
## [0.25.3](https://github.com/libp2p/js-libp2p/compare/v0.25.2...v0.25.3) (2019-05-07)


### Features

* sign pubsub messages ([#362](https://github.com/libp2p/js-libp2p/issues/362)) ([40978a1](https://github.com/libp2p/js-libp2p/commit/40978a1))



<a name="0.25.2"></a>
## [0.25.2](https://github.com/libp2p/js-libp2p/compare/v0.25.1...v0.25.2) (2019-04-17)


### Bug Fixes

* dht config ([#359](https://github.com/libp2p/js-libp2p/issues/359)) ([f3801f0](https://github.com/libp2p/js-libp2p/commit/f3801f0))



<a name="0.25.1"></a>
## [0.25.1](https://github.com/libp2p/js-libp2p/compare/v0.25.0...v0.25.1) (2019-04-16)


### Bug Fixes

* bail when discovering self ([#357](https://github.com/libp2p/js-libp2p/issues/357)) ([f28dffb](https://github.com/libp2p/js-libp2p/commit/f28dffb))



<a name="0.25.0"></a>
# [0.25.0](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.6...v0.25.0) (2019-04-12)


### Bug Fixes

* allow switch to be configured ([#354](https://github.com/libp2p/js-libp2p/issues/354)) ([eb5aa03](https://github.com/libp2p/js-libp2p/commit/eb5aa03))



<a name="0.25.0-rc.6"></a>
# [0.25.0-rc.6](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.5...v0.25.0-rc.6) (2019-04-11)


### Bug Fixes

* connection emits ([#352](https://github.com/libp2p/js-libp2p/issues/352)) ([313b1ea](https://github.com/libp2p/js-libp2p/commit/313b1ea))
* remove unneeded peerbook puts ([#348](https://github.com/libp2p/js-libp2p/issues/348)) ([e5f19e8](https://github.com/libp2p/js-libp2p/commit/e5f19e8))


### Features

* auto dial discovered peers ([#349](https://github.com/libp2p/js-libp2p/issues/349)) ([01aa447](https://github.com/libp2p/js-libp2p/commit/01aa447))



<a name="0.25.0-rc.5"></a>
# [0.25.0-rc.5](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.4...v0.25.0-rc.5) (2019-03-21)


### Bug Fixes

* disable dht by default [#338](https://github.com/libp2p/js-libp2p/issues/338) ([#339](https://github.com/libp2p/js-libp2p/issues/339)) ([e52ce66](https://github.com/libp2p/js-libp2p/commit/e52ce66))


### Features

* update to the latest switch ([#336](https://github.com/libp2p/js-libp2p/issues/336)) ([eee60ed](https://github.com/libp2p/js-libp2p/commit/eee60ed))



<a name="0.25.0-rc.4"></a>
# [0.25.0-rc.4](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.3...v0.25.0-rc.4) (2019-03-06)



<a name="0.25.0-rc.3"></a>
# [0.25.0-rc.3](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.2...v0.25.0-rc.3) (2019-02-26)



<a name="0.25.0-rc.2"></a>
# [0.25.0-rc.2](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.1...v0.25.0-rc.2) (2019-02-26)


### Bug Fixes

* make the config less restrictive ([#329](https://github.com/libp2p/js-libp2p/issues/329)) ([5f92acd](https://github.com/libp2p/js-libp2p/commit/5f92acd))



<a name="0.25.0-rc.1"></a>
# [0.25.0-rc.1](https://github.com/libp2p/js-libp2p/compare/v0.25.0-rc.0...v0.25.0-rc.1) (2019-02-21)


### Bug Fixes

* bundle-size ([#298](https://github.com/libp2p/js-libp2p/issues/298)) ([d497961](https://github.com/libp2p/js-libp2p/commit/d497961))
* emit peer discovery for dht discovery ([9e7a080](https://github.com/libp2p/js-libp2p/commit/9e7a080))


### Features

* support unsubscribe all for pubsub ([#321](https://github.com/libp2p/js-libp2p/issues/321)) ([6e76aad](https://github.com/libp2p/js-libp2p/commit/6e76aad))



<a name="0.24.4"></a>
## [0.24.4](https://github.com/libp2p/js-libp2p/compare/v0.24.3...v0.24.4) (2019-01-04)



<a name="0.24.3"></a>
## [0.24.3](https://github.com/libp2p/js-libp2p/compare/v0.24.2...v0.24.3) (2018-12-14)


### Bug Fixes

* not started yet ([#297](https://github.com/libp2p/js-libp2p/issues/297)) ([fdfb7b4](https://github.com/libp2p/js-libp2p/commit/fdfb7b4))



<a name="0.24.2"></a>
## [0.24.2](https://github.com/libp2p/js-libp2p/compare/v0.24.1...v0.24.2) (2018-12-04)


### Bug Fixes

* use symbol instead of constructor name ([#292](https://github.com/libp2p/js-libp2p/issues/292)) ([53ed3bd](https://github.com/libp2p/js-libp2p/commit/53ed3bd))



<a name="0.24.1"></a>
## [0.24.1](https://github.com/libp2p/js-libp2p/compare/v0.24.0...v0.24.1) (2018-12-03)


### Features

* allow configurable validators and selectors to the dht ([#288](https://github.com/libp2p/js-libp2p/issues/288)) ([7d12eb9](https://github.com/libp2p/js-libp2p/commit/7d12eb9))



<a name="0.24.0"></a>
# [0.24.0](https://github.com/libp2p/js-libp2p/compare/v0.24.0-rc.3...v0.24.0) (2018-11-16)

### Bug Fixes

* add maxtimeout to dht get ([#248](https://github.com/libp2p/js-libp2p/issues/248)) ([69f7264](https://github.com/libp2p/js-libp2p/commit/69f7264))
* dht get options ([4460e82](https://github.com/libp2p/js-libp2p/commit/4460e82))
* dont call callback before it's properly set ([17b5f73](https://github.com/libp2p/js-libp2p/commit/17b5f73))
* improve get peer info errors ([714b6ec](https://github.com/libp2p/js-libp2p/commit/714b6ec))
* start kad dht random walk ([#251](https://github.com/libp2p/js-libp2p/issues/251)) ([dd934b9](https://github.com/libp2p/js-libp2p/commit/dd934b9))

### Features

* add datastore to config ([40e840d](https://github.com/libp2p/js-libp2p/commit/40e840d))
* add delegated peer and content routing support ([#242](https://github.com/libp2p/js-libp2p/issues/242)) ([a95389a](https://github.com/libp2p/js-libp2p/commit/a95389a))
* add maxNumProviders to findprovs ([#283](https://github.com/libp2p/js-libp2p/issues/283)) ([970deec](https://github.com/libp2p/js-libp2p/commit/970deec))
* conditionally emit errors ([f71fdfd](https://github.com/libp2p/js-libp2p/commit/f71fdfd))
* enable relay by default (no hop) ([#254](https://github.com/libp2p/js-libp2p/issues/254)) ([686379e](https://github.com/libp2p/js-libp2p/commit/686379e))
* make libp2p a state machine ([#257](https://github.com/libp2p/js-libp2p/issues/257)) ([0b75f99](https://github.com/libp2p/js-libp2p/commit/0b75f99))
* use package-table vs custom script ([a63432e](https://github.com/libp2p/js-libp2p/commit/a63432e))

<a name="0.23.1"></a>
## [0.23.1](https://github.com/libp2p/js-libp2p/compare/v0.23.0...v0.23.1) (2018-08-13)


### Bug Fixes

* callback with error for invalid or non-peer multiaddr ([#232](https://github.com/libp2p/js-libp2p/issues/232)) ([c8a86db](https://github.com/libp2p/js-libp2p/commit/c8a86db))



<a name="0.23.0"></a>
# [0.23.0](https://github.com/libp2p/js-libp2p/compare/v0.22.0...v0.23.0) (2018-07-27)


### Bug Fixes

* start and stop connection manager with libp2p ([6106915](https://github.com/libp2p/js-libp2p/commit/6106915))


### Features

* add check for protector and enforced pnet ([2b7cc55](https://github.com/libp2p/js-libp2p/commit/2b7cc55))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/libp2p/js-libp2p/compare/v0.21.0...v0.22.0) (2018-06-29)


### Bug Fixes

* add null property guards ([80f0b60](https://github.com/libp2p/js-libp2p/commit/80f0b60))
* do not mutate the config object ([ac5cacb](https://github.com/libp2p/js-libp2p/commit/ac5cacb))
* remove .only ([be9eafe](https://github.com/libp2p/js-libp2p/commit/be9eafe))
* remove peer discovery module config checks ([4ad70ef](https://github.com/libp2p/js-libp2p/commit/4ad70ef))
* typo in fixture and fail for correct reason ([1af5ba9](https://github.com/libp2p/js-libp2p/commit/1af5ba9))


### Features

* enable peer discovery modules by default ([e320854](https://github.com/libp2p/js-libp2p/commit/e320854))



<a name="0.21.0"></a>
# [0.21.0](https://github.com/libp2p/js-libp2p/compare/v0.20.4...v0.21.0) (2018-06-28)


### Bug Fixes

* lock wrtc to 0.1.1 ([6507379](https://github.com/libp2p/js-libp2p/commit/6507379))


### Features

* (BREAKING CHANGE) overhaul libp2p config and constructor ([6905f1b](https://github.com/libp2p/js-libp2p/commit/6905f1b))
* set and hook up libp2p-connection-manager ([#184](https://github.com/libp2p/js-libp2p/issues/184)) ([d597204](https://github.com/libp2p/js-libp2p/commit/d597204))



<a name="0.20.4"></a>
## [0.20.4](https://github.com/libp2p/js-libp2p/compare/v0.20.2...v0.20.4) (2018-04-30)



<a name="0.20.3"></a>
## [0.20.3](https://github.com/libp2p/js-libp2p/compare/v0.20.2...v0.20.3) (2018-04-30)



<a name="0.20.2"></a>
## [0.20.2](https://github.com/libp2p/js-libp2p/compare/v0.20.1...v0.20.2) (2018-04-10)



<a name="0.20.1"></a>
## [0.20.1](https://github.com/libp2p/js-libp2p/compare/v0.20.0...v0.20.1) (2018-04-10)



<a name="0.20.0"></a>
# [0.20.0](https://github.com/libp2p/js-libp2p/compare/v0.19.2...v0.20.0) (2018-04-06)


### Features

* use class-is for type checks ([bb0c990](https://github.com/libp2p/js-libp2p/commit/bb0c990))



<a name="0.19.2"></a>
## [0.19.2](https://github.com/libp2p/js-libp2p/compare/v0.19.0...v0.19.2) (2018-03-28)



<a name="0.19.1"></a>
## [0.19.1](https://github.com/libp2p/js-libp2p/compare/v0.19.0...v0.19.1) (2018-03-28)



<a name="0.19.0"></a>
# [0.19.0](https://github.com/libp2p/js-libp2p/compare/v0.18.0...v0.19.0) (2018-03-15)



<a name="0.18.0"></a>
# [0.18.0](https://github.com/libp2p/js-libp2p/compare/v0.17.0...v0.18.0) (2018-02-19)



<a name="0.17.0"></a>
# [0.17.0](https://github.com/libp2p/js-libp2p/compare/v0.16.5...v0.17.0) (2018-02-16)


### Bug Fixes

* use correct reference to floodSub ([947eaf1](https://github.com/libp2p/js-libp2p/commit/947eaf1))


### Features

* add pubsub to libp2p ([0c543b7](https://github.com/libp2p/js-libp2p/commit/0c543b7))



<a name="0.16.5"></a>
## [0.16.5](https://github.com/libp2p/js-libp2p/compare/v0.16.4...v0.16.5) (2018-02-14)



<a name="0.16.4"></a>
## [0.16.4](https://github.com/libp2p/js-libp2p/compare/v0.16.3...v0.16.4) (2018-02-09)



<a name="0.16.3"></a>
## [0.16.3](https://github.com/libp2p/js-libp2p/compare/v0.16.2...v0.16.3) (2018-02-08)



<a name="0.16.2"></a>
## [0.16.2](https://github.com/libp2p/js-libp2p/compare/v0.16.1...v0.16.2) (2018-02-07)



<a name="0.16.1"></a>
## [0.16.1](https://github.com/libp2p/js-libp2p/compare/v0.16.0...v0.16.1) (2018-02-07)



<a name="0.16.0"></a>
# [0.16.0](https://github.com/libp2p/js-libp2p/compare/v0.15.2...v0.16.0) (2018-02-07)


### Features

* add explicit error for case peer id not included in multiaddr ([#155](https://github.com/libp2p/js-libp2p/issues/155)) ([bd8a35a](https://github.com/libp2p/js-libp2p/commit/bd8a35a))
* dialProtocol and small refactor ([6651401](https://github.com/libp2p/js-libp2p/commit/6651401))
* use libp2p-switch ([23e8293](https://github.com/libp2p/js-libp2p/commit/23e8293))



<a name="0.15.2"></a>
## [0.15.2](https://github.com/libp2p/js-libp2p/compare/v0.15.1...v0.15.2) (2018-01-28)



<a name="0.15.1"></a>
## [0.15.1](https://github.com/libp2p/js-libp2p/compare/v0.15.0...v0.15.1) (2018-01-16)


### Bug Fixes

* typo in DHT setup ([#151](https://github.com/libp2p/js-libp2p/issues/151)) ([61bebd1](https://github.com/libp2p/js-libp2p/commit/61bebd1))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/libp2p/js-libp2p/compare/v0.14.3...v0.15.0) (2018-01-07)



<a name="0.14.3"></a>
## [0.14.3](https://github.com/libp2p/js-libp2p/compare/v0.14.2...v0.14.3) (2017-12-15)



<a name="0.14.2"></a>
## [0.14.2](https://github.com/libp2p/js-libp2p/compare/v0.14.1...v0.14.2) (2017-12-15)



<a name="0.14.1"></a>
## [0.14.1](https://github.com/libp2p/js-libp2p/compare/v0.14.0...v0.14.1) (2017-12-15)


### Bug Fixes

* prevent "The libp2p node is not started yet" when stopping ([#138](https://github.com/libp2p/js-libp2p/issues/138)) ([c88eaf4](https://github.com/libp2p/js-libp2p/commit/c88eaf4))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/libp2p/js-libp2p/compare/v0.13.3...v0.14.0) (2017-12-14)


### Bug Fixes

* remove innactive multiaddrs ([#131](https://github.com/libp2p/js-libp2p/issues/131)) ([1b7360f](https://github.com/libp2p/js-libp2p/commit/1b7360f))



<a name="0.13.3"></a>
## [0.13.3](https://github.com/libp2p/js-libp2p/compare/v0.13.2...v0.13.3) (2017-12-01)



<a name="0.13.2"></a>
## [0.13.2](https://github.com/libp2p/js-libp2p/compare/v0.13.1...v0.13.2) (2017-11-27)


### Features

* Bring libp2p-websocket-star to the Transports family! 🌟 ([#122](https://github.com/libp2p/js-libp2p/issues/122)) ([95f029e](https://github.com/libp2p/js-libp2p/commit/95f029e))



<a name="0.13.1"></a>
## [0.13.1](https://github.com/libp2p/js-libp2p/compare/v0.13.0...v0.13.1) (2017-11-12)



<a name="0.13.0"></a>
# [0.13.0](https://github.com/libp2p/js-libp2p/compare/v0.12.4...v0.13.0) (2017-10-26)


### Features

* enable and test Circuit Relay ([29cc0af](https://github.com/libp2p/js-libp2p/commit/29cc0af))



<a name="0.12.4"></a>
## [0.12.4](https://github.com/libp2p/js-libp2p/compare/v0.12.3...v0.12.4) (2017-09-07)



<a name="0.12.3"></a>
## [0.12.3](https://github.com/libp2p/js-libp2p/compare/v0.12.2...v0.12.3) (2017-09-07)



<a name="0.12.2"></a>
## [0.12.2](https://github.com/libp2p/js-libp2p/compare/v0.12.0...v0.12.2) (2017-09-07)



<a name="0.12.1"></a>
## [0.12.1](https://github.com/libp2p/js-libp2p/compare/v0.12.0...v0.12.1) (2017-09-07)



<a name="0.12.0"></a>
# [0.12.0](https://github.com/libp2p/js-libp2p/compare/v0.11.0...v0.12.0) (2017-09-03)


### Features

* p2p addrs situation ([#119](https://github.com/libp2p/js-libp2p/issues/119)) ([cad173e](https://github.com/libp2p/js-libp2p/commit/cad173e))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/libp2p/js-libp2p/compare/v0.10.2...v0.11.0) (2017-07-22)



<a name="0.10.2"></a>
## [0.10.2](https://github.com/libp2p/js-libp2p/compare/v0.10.1...v0.10.2) (2017-07-21)


### Bug Fixes

* circle ci, thanks victor! ([4224c1f](https://github.com/libp2p/js-libp2p/commit/4224c1f))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/libp2p/js-libp2p/compare/v0.10.0...v0.10.1) (2017-07-10)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/libp2p/js-libp2p/compare/v0.9.1...v0.10.0) (2017-07-07)


### Bug Fixes

* added missing dep async ([45b0f61](https://github.com/libp2p/js-libp2p/commit/45b0f61))


### Features

* state events and query changes ([#100](https://github.com/libp2p/js-libp2p/issues/100)) ([73f2f6d](https://github.com/libp2p/js-libp2p/commit/73f2f6d))



<a name="0.9.1"></a>
## [0.9.1](https://github.com/libp2p/js-libp2p/compare/v0.9.0...v0.9.1) (2017-04-16)


### Bug Fixes

* do not use assert in async funcs ([#88](https://github.com/libp2p/js-libp2p/issues/88)) ([2e326e1](https://github.com/libp2p/js-libp2p/commit/2e326e1))



<a name="0.9.0"></a>
# [0.9.0](https://github.com/libp2p/js-libp2p/compare/v0.8.0...v0.9.0) (2017-04-06)



<a name="0.8.0"></a>
# [0.8.0](https://github.com/libp2p/js-libp2p/compare/v0.7.0...v0.8.0) (2017-03-31)


### Bug Fixes

* addition of ipfs id appendix must come before transport filtering ([291e79f](https://github.com/libp2p/js-libp2p/commit/291e79f))
* avoid deleting nodes from peerBook ([300936f](https://github.com/libp2p/js-libp2p/commit/300936f))
* correct method on peer-book ([031ecb3](https://github.com/libp2p/js-libp2p/commit/031ecb3))


### Features

* append peer id to multiaddr if not there ([59ea9c3](https://github.com/libp2p/js-libp2p/commit/59ea9c3))
* not remove peer from peerBook on disconnect ([a4b41b0](https://github.com/libp2p/js-libp2p/commit/a4b41b0))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/libp2p/js-libp2p/compare/v0.6.2...v0.7.0) (2017-03-29)


### Features

* update events to conform with [#74](https://github.com/libp2p/js-libp2p/issues/74) ([f73c045](https://github.com/libp2p/js-libp2p/commit/f73c045))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/libp2p/js-libp2p/compare/v0.6.1...v0.6.2) (2017-03-28)



<a name="0.6.1"></a>
## [0.6.1](https://github.com/libp2p/js-libp2p/compare/v0.6.0...v0.6.1) (2017-03-27)



<a name="0.6.0"></a>
# [0.6.0](https://github.com/libp2p/js-libp2p/compare/v0.5.5...v0.6.0) (2017-03-27)


### Bug Fixes

* last touches ([2c23d9a](https://github.com/libp2p/js-libp2p/commit/2c23d9a))


### Features

* new super simplified API ([a6623c1](https://github.com/libp2p/js-libp2p/commit/a6623c1))



<a name="0.5.5"></a>
## [0.5.5](https://github.com/libp2p/js-libp2p/compare/v0.5.4...v0.5.5) (2017-03-21)
