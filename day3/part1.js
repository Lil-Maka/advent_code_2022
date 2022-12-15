const upperCaseCharCodeList = Array.from(Array(26)).map((value, idx) => idx + 65);
const lowerCaseCharCodeList = Array.from(Array(26)).map((value, idx) => idx + 97);
let fullAlphabet = {};

const alphabetValuesSetter = (list, code) => {
    let currentLetter = String.fromCharCode(code)
    let letterValue = Object.keys(fullAlphabet).length + 1;

    list[currentLetter] = letterValue;
    return list;
};

// void methods, at the end of this void methods, we have already pushed our dictionary {fullAlphabet}
lowerCaseCharCodeList.reduce((list, code) => alphabetValuesSetter(list, code), fullAlphabet);
upperCaseCharCodeList.reduce((list, code) => alphabetValuesSetter(list, code), fullAlphabet);

// input data
const idElementSetter = document.getElementsByTagName("pre")[0].setAttribute("id", "test");
const inputValues = document.getElementById("test").innerHTML;
// const inputSample = 'gvNbShZZgQfWdQhdPQmggLTFLwmwjFqjVVgM\nCsJnHllcsnnnnJrGRnRwPPLVmFLHLBjFFVHmPT\nJlnCtctJnJDcJlDCRpPrSSQWfphzWZfbZSvfNfbS\nWjvRSdSQjvpjWzNlnZlNZqCCMzZZ';


const formattedInputSample = inputValues.split("\n");


// check if a letter is repeated    
const getEqualLetterInTwoLists = (firstSplittedString, secondSplittedString) => {
    for(let idx = 0; idx < firstSplittedString.length; idx++) {
        let letter = firstSplittedString[idx];
        for(let compareIdx = 0; compareIdx < secondSplittedString.length; compareIdx++) {
            let comparedLetter = secondSplittedString[compareIdx];
            if(letter === comparedLetter) {
                repeatedLetter = letter;
            }
        }
    }

    return repeatedLetter
};

let totalEncryptedSum = formattedInputSample.reduce((encryptedSum, value) => {
    if(value) {
        let splitLength = value.length / 2;

        let firstSplittedString = value.slice(0, splitLength);
        let secondSplittedString = value.slice(splitLength, value.length);
        let repeatedLetter = getEqualLetterInTwoLists(firstSplittedString, secondSplittedString);
        
    
        var encryptedValue = fullAlphabet[repeatedLetter];
    }
    

    return encryptedSum += encryptedValue || 0;
}, 0);