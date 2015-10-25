function toU8IntArray(inputString) {
    var array = [];
    for (var i = 0; i < inputString.length; i++) {
        var charCode = inputString.charCodeAt(i);
        var temp;
        while (temp = charCode & 0xff) {
            // pushing one byte
            array.push(temp);
            // shifting 8 bit right
            charCode >>>= 8;
        }
    }
    return array;
}

function intToUnsignedHex(number) {
    var temp;
    var hexArray = [];
    while (temp = number & 0xff) {
        hexArray.push(temp.toString(16));
        number >>>= 8;
    }
    return hexArray.join('');
}

module.exports = {
    toU8IntArray: toU8IntArray,
    intToUnsignedHex: intToUnsignedHex
};