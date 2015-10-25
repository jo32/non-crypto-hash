var path = require('path');

module.exports = {
    createHash: function createHash(algorithm) {
        algorithm = algorithm.replace(/![a-zA-z0-9]/g, "");
        try {
            return require(path.join(__dirname, 'libs', algorithm));
        } catch (e) {
            throw new Error(e);
        }
    }
}