# Non-Cryptographic Hash

This package contains non-crypographic hash functions worked in both browser and Node.js:

1) SuperFastHash
2) MurmurHash 3

## Installation

    npm install non-crypto-hash

## Usage

    var nch = require('non-crypto-hash');
    // var algo = nch.createHash('superfasthash');
    var algo = nch.createHash('murmurhash3');
    console.log(algo.hash('string'));

## API

### SuperFastHash

#### superfasthash.hash(inputString) {...}

create hash of inputString in 32bits hex string.

### MurmurHash3

### MurmurHash3.hash(inputString[, seed]) {...}

alias for `MurmurHash3.x64Hash128`

### MurmurHash3.x86Hash32(inputString[, seed]) {...}

create hash of inputString in 32bits hex string, seed is default to 0.

### MurmurHash3.x86Hash64(inputString[, seed]) {...}

create hash of inputString in 64bits hex string, seed is default to 0. returning value is the lower 64bits of `MurmurHash3.x86Hash128`

### MurmurHash3.x86Hash128(inputString[, seed]) {...}

create hash of inputString in 128bits hex string, seed is default to 0.

### MurmurHash3.x64Hash64(inputString[, seed]) {...}

create hash of inputString in 64bits hex string, seed is default to 0. returning value is the lower 64bits of `MurmurHash3.x64Hash128`

### MurmurHash3.x64Hash128(inputString[, seed]) {...}

create hash of inputString in 128bits hex string, seed is default to 0.