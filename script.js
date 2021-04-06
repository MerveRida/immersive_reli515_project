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



const string = "53 When they had crossed over, they came to shore at Gennesaret and anchored there. 54 As they got out of the boat, people immediately recognized him. 55 They hurried throughout that region and began to carry the sick on mats to wherever they heard he was. 56 Wherever he went, into villages, towns, or the country, they laid the sick in the marketplaces and begged him that they might touch just the end of his robe. And everyone who touched it was healed.";

window.addEventListener("load", alert(numbersToSuperScript(string)));

