//
// This implementation is completely based on code:
// https://code.google.com/p/smhasher/source/browse/trunk/SuperFastHash.cpp
// Except:
// 1) Original project assumes that key is ascii string, this project
//    fix this problem by applying util.toU8IntArray to fix this.
//
// Input:
// string inputString
// output:
// 32bit hash in hex string

"use strict";

var util = require('./util');

function getU16Int(u8IntArray, index) {
    return u8IntArray[index] << 8 | u8IntArray[index + 1];
}

function hash(inputString) {
    var u8IntArray = util.toU8IntArray(inputString + "");

    var hash = 0;
    var tmp;
    var rem;

    if (!inputString) {
        return hash.toString(16);
    }

    var len = u8IntArray.length;
    var pointer = 0;
    rem = len & 3;
    // len /= 4;
    len >>>= 2;

    // the main loop
    for (var i = 0; i < len; i++) {
        // for every 32 bits
        hash += getU16Int(u8IntArray, pointer);
        tmp = (getU16Int(u8IntArray, pointer + 2) << 11) ^ hash;
        hash = (hash << 16) ^ tmp;
        pointer += 4;
        hash += hash >> 11;
    }

    // Handle end cases
    switch(rem) {
        case 3:
            hash += getU16Int(u8IntArray, pointer);
            hash ^= hash << 16;
            hash ^= u8IntArray[pointer + 2] << 18
            hash += hash >> 11;
            break;
        case 2:
            hash += getU16Int(u8IntArray, pointer);
            hash ^= hash << 11;
            hash += hash >> 17;
            break;
        case 1:
            hash += u8IntArray[pointer];
            hash ^= hash << 10;
            hash += hash >> 1;
            break;
    }

    // Force "avalanching" of final 127 bits
    hash ^= hash << 3;
    hash += hash >> 5;
    hash ^= hash << 4;
    hash += hash >> 17;
    hash ^= hash << 25;
    hash += hash >> 6;

    return util.intToUnsignedHex(hash);
}

module.exports = {
    hash: hash
};