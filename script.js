/**
 * Given a string, this function returns the updated string, in which 
 *     the numeric numbers [0,1,..,9] have been updated to be superscript in HTML
 * @param stringVal  string to be updated to have numbers as superscript
 */
let numbersToSuperScript = function (stringVal) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let value = stringVal.split('').map((element) => {
        if (numbers.includes(element)) {
            return `<sup>${element}</sup>`;
        } else {
            return element;
        }
    });
    return value.join("");
}

let updateInnerOf = function (loadElement, value) {
    loadElement.innerHTML = value;
}



const string = "45 Immediately he made his disciples get into the boat and go ahead of him to the other side, to Bethsaida, while he dismissed the crowd. 46 After he said good-bye to them, he went away to the mountain to pray. 47 Well into the night, the boat was in the middle of the sea, and he was alone on the land. 48 He saw them straining at the oars, because the wind was against them. Very early in the morning he came toward them walking on the sea and wanted to pass by them. 49 When they saw him walking on the sea, they thought it was a ghost and cried out, 50 because they all saw him and were terrified. Immediately he spoke with them and said, “Have courage! It is I. Don’t be afraid.” 51 Then he got into the boat with them, and the wind ceased. They were completely astounded, 52 because they had not understood about the loaves. Instead, their hearts were hardened.";

window.addEventListener("load", console.log(numbersToSuperScript(string)));

