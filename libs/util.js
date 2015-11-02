function toU8IntArray(inputString) {
    var array = [];
    var tempArrayOfChar = [];
    for (var i = 0; i < inputString.length; i++) {
        var charCode = inputString.charCodeAt(i);
        var temp;
        tempArrayOfChar.length  = 0;
        while ((temp = charCode & 0xff) || charCode) {
            // pushing one byte
            tempArrayOfChar.push(temp);
            // shifting 8 bit right
            charCode >>>= 8;
        }
        array = array.concat(tempArrayOfChar.reverse());
    }
    return array;
}

function intToUnsignedHex(number) {
    var temp;
    var hexArray = [];
    while ((temp = number & 0xffff) || number) {
        temp = temp.toString(16);
        temp = '0000'.slice(temp.length) + temp;
        hexArray.push(temp);
        number >>>= 16;
    }
    return hexArray.reverse().join('');
}

module.exports = {
    toU8IntArray: toU8IntArray,
    intToUnsignedHex: intToUnsignedHex
};