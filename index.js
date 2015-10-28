var path = require('path');

var algorithms = {
    superfasthash: require('./libs/superfasthash'),
    murmurhash3: require('./libs/murmurhash3')
}

module.exports = {
    createHash: function createHash(algorithm) {
        algorithm = algorithm.replace(/![a-zA-z0-9]/g, "").toLowerCase();
        try {
            return algorithms[algorithm];
        } catch (e) {
            throw new Error(e);
        }
    }
}