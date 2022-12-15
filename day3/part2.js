const upperCaseCharCodeList = Array.from(Array(26)).map((value, idx) => idx + 65);
const lowerCaseCharCodeList = Array.from(Array(26)).map((value, idx) => idx + 97);
let fullAlphabet = {};

const alphabetValuesSetter = (list, code) => {
    let currentLetter = String.fromCharCode(code)
    let letterValue = Object.keys(fullAlphabet).length + 1;

    list[currentLetter] = letterValue;
    return list;
};

const chunkArray = (list, groupValue) => {
    let chunkedList = [];
    while (list.length > 0) {
        chunkedList.push(list.splice(0, groupValue));
    }
    return chunkedList;
}

// void methods, at the end of this void methods, we have already pushed our dictionary {fullAlphabet}
lowerCaseCharCodeList.reduce((list, code) => alphabetValuesSetter(list, code), fullAlphabet);
upperCaseCharCodeList.reduce((list, code) => alphabetValuesSetter(list, code), fullAlphabet);

// input data
const idElementSetter = document.getElementsByTagName("pre")[0].setAttribute("id", "test");
const inputValues = document.getElementById("test").innerHTML.split("\n");
// const inputSample = 'gvNbShZZgQfWdQhdPQmggLTFLwmwjFqjVVgM\nCsJnHllcsnnnnJrGRnRwPPLVmFLHLBjFFVHmPT\nJlnCtctJnJDcJlDCRpPrSSQWfphzWZfbZSvfNfbS'.split("\n");
const chunkedList = chunkArray(inputValues, 3);

// check if a letter is repeated    
const getEqualLetterInThreeLists = (firstSplittedString, secondSplittedString, thirdSplittedString) => {
    let repeatedLetter;
    for(let idx = 0; idx < firstSplittedString.length; idx++) {
        let letter = firstSplittedString[idx];
        for(let compareIdx = 0; compareIdx < secondSplittedString.length; compareIdx++) {
            let comparedLetter = secondSplittedString[compareIdx];
            if(letter == comparedLetter) {
                for(let i = 0; i < thirdSplittedString.length; i++) {
                    thirdCompareLetter = thirdSplittedString[i];
                    if(thirdCompareLetter == comparedLetter) {
                        repeatedLetter = letter;
                    }
                }
            }
        }
    }

    return repeatedLetter
};

let totalEncryptedSum = chunkedList.reduce((encryptedSum, groupedList) => {
    // used to iterate all chunked values
    let repeatedLetter = getEqualLetterInThreeLists(groupedList[0], groupedList[1], groupedList[2]);

    encryptedValue = repeatedLetter && fullAlphabet[repeatedLetter];

    return encryptedSum += encryptedValue  || 0;
}, 0);