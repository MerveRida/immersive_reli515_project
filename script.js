/**
 * Given a string, this function returns the updated string, in which 
 *     the numeric numbers [0,1,..,9] have been updated to be superscript in HTML
 * @param stringVal  string to be updated to have numbers as superscript
 */
let numbersToSuperScript = function (stringVal) {
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

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const string = "12 On the first day of Unleavened Bread, when they sacrifice the Passover lamb, his disciples asked him, “Where do you want us to go and prepare the Passover so that you may eat it? ” 13 So he sent two of his disciples and told them, “Go into the city, and a man carrying a jar of water will meet you. Follow him. 14 Wherever he enters, tell the owner of the house, ‘The Teacher says, “Where is my guest room where I may eat the Passover with my disciples? ” ’ 15 He will show you a large room upstairs, furnished and ready. Make the preparations for us there.” 16 So the disciples went out, entered the city, and found it just as he had told them, and they prepared the Passover.";

window.addEventListener("load", console.log(numbersToSuperScript(string)));

