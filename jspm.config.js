SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "src/"
  },
  transpiler: "plugin-typescript",
  sourceMap: true,
  typescriptOptions: {
    "tsconfig": "tsconfig.es2015.json"
  },
  packages: {
    "app": {
      "main": "main.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "app/main.ts",
        "app/template.html"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@7.0.5",
      "typescript": "npm:typescript@2.2.2",
      "assert": "npm:jspm-nodelibs-assert@0.2.1",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.2",
      "module": "npm:jspm-nodelibs-module@0.2.1",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
      "util": "npm:jspm-nodelibs-util@0.2.2",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
      "os": "npm:jspm-nodelibs-os@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.1",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
      "stream": "npm:jspm-nodelibs-stream@0.2.1",
      "constants": "npm:jspm-nodelibs-constants@0.2.1",
      "events": "npm:jspm-nodelibs-events@0.2.2",
      "net": "npm:jspm-nodelibs-net@0.2.1",
      "text": "github:systemjs/plugin-text@0.0.9"
    },
    "packages": {
      "npm:typescript@2.2.2": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.14"
        }
      },
      "npm:source-map-support@0.4.14": {
        "map": {
          "source-map": "npm:source-map@0.5.6"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.2": {
        "map": {
          "buffer": "npm:buffer@4.9.1"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "ieee754": "npm:ieee754@1.1.8",
          "base64-js": "npm:base64-js@1.2.0"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.1": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:jspm-nodelibs-os@0.2.1": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "create-hash": "npm:create-hash@1.1.2",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "inherits": "npm:inherits@2.0.3",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "create-hmac": "npm:create-hmac@1.1.4",
          "randombytes": "npm:randombytes@2.0.3",
          "browserify-sign": "npm:browserify-sign@4.0.4"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "ripemd160": "npm:ripemd160@1.0.1",
          "sha.js": "npm:sha.js@2.4.8"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.1.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-sign@4.0.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "inherits": "npm:inherits@2.0.3",
          "elliptic": "npm:elliptic@6.4.0",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.1.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "cipher-base": "npm:cipher-base@1.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "elliptic": "npm:elliptic@6.4.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:sha.js@2.4.8": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.1": {
        "map": {
          "string_decoder": "npm:string_decoder@0.10.31"
        }
      },
      "npm:elliptic@6.4.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "brorand": "npm:brorand@1.1.0",
          "hash.js": "npm:hash.js@1.0.3",
          "hmac-drbg": "npm:hmac-drbg@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      },
      "npm:parse-asn1@5.1.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "asn1.js": "npm:asn1.js@4.9.1"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.1": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:asn1.js@4.9.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hmac-drbg@1.0.0": {
        "map": {
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "hash.js": "npm:hash.js@1.0.3",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.2.6"
        }
      },
      "npm:readable-stream@2.2.6": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "string_decoder": "npm:string_decoder@0.10.31",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "core-util-is": "npm:core-util-is@1.0.2"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
