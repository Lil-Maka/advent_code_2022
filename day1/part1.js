/** USAGE */ 
// Data is not hardcoded, so you need to go to the provided data website: https://adventofcode.com/2022/day/1/input and then 
// inspect element to the parent of all the data, so then you need to add an id = "test", to this parent, and paste the code
// in the console, and you will get your final result. 

// We need to do this, because the data is not an array nor a JSON format, so it's a bit tricky...
// https://prnt.sc/33oVtqqU76WV

// Data sample in case needed
//const dataSample = '6529\n8085\n4534\n1503\n2983\n5030\n2135\n5866\n5092\n5059\n1232\n\n15219\n7137\n2691\n2898\n1798'

const data = document.getElementById("test").innerHTML;
let highestCalorieCount = (input) => {
    const inputValueList = input.split("\n");
    let highestCalorie = 0;
    let groupCalorieCount = 0;
    for(let i = 0; i < inputValueList.length; i++){
        let value = inputValueList[i];
        if(value) {
            groupCalorieCount += parseInt(value);
        } else {
            highestCalorie = highestCalorie < groupCalorieCount ? groupCalorieCount : highestCalorie;
            groupCalorieCount = 0;
        }
    }

    return highestCalorie;
}
let highestCalorie = highestCalorieCount (data);



