const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

kata1();
kata2();
kata3();
kata4();
kata5();
kata6();
kata7();
kata8();
kata9();
kata10();
kata11();
kata12();
kata13();
kata14();
kata15();
kata16();
kata17();
kata18();
kata19();
kata20();
kata21();
kata22();
kata23();
kata24();
kata25();
kata26();
kata27();
kata28();
const cityRemovedInKata29 = kata29();
kata30();
const cityRemovedInKata31 = kata31();
kata32();

function kata1() {
    const kataNumber = 1;
    const kataInstructions = "Display an array from the cities in gotCitiesCSV";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function kata2() {
    const kataNumber = 2;
    const kataInstructions = "Display an array of words from the sentence in bestThing";
    publishKata(kataNumber, kataInstructions, JSON.stringify(bestThing.split(" ")));
}

function kata3() {
    const kataNumber = 3;
    const kataInstructions = "Display a string separated by semi-colons instead of commas from gotCitiesCSV";
    publishKata(kataNumber, kataInstructions, gotCitiesCSV.split(",").join("; "));;
}

function kata4() {
    const kataNumber = 4;
    const kataInstructions = "Display a CSV (comma-separated) string from the lotrCitiesArray";
    publishKata(kataNumber, kataInstructions, lotrCitiesArray.join(", "));
}

function kata5() {
    const kataNumber = 5;
    const kataInstructions = "Display the first 5 cities in lotrCitiesArray";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.slice(0, 5)));
}

function kata6() {
    const kataNumber = 6;
    const kataInstructions = "Display the last 5 cities in lotrCitiesArray";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.slice(-5)));
}

function kata7() {
    const kataNumber = 7;
    const kataInstructions = "Display the 3rd to 5th city in lotrCitiesArray";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.slice(2, 5)));
}

function kata8() {
    const kataNumber = 8;
    const kataInstructions = "Using splice, remove \"Rohan\" from lotrCitiesArray";
    const rohanIndex = lotrCitiesArray.indexOf("Rohan");
    lotrCitiesArray.splice(rohanIndex, 1);
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function kata9() {
    const kataNumber = 9;
    const kataInstructions = "Using splice, remove all cities after \"Dead Marshes\" in lotrCiiesArray";
    const afterDeadMarshesIndex = lotrCitiesArray.indexOf("Dead Marshes") + 1;
    lotrCitiesArray.splice(afterDeadMarshesIndex, lotrCitiesArray.length - afterDeadMarshesIndex);
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function kata10() {
    const kataNumber = 10;
    const kataInstructions = "Using splice, add \"Rohan\" back to lotrCitiesArray right after \"Gondor\"";
    const gondorIndex = lotrCitiesArray.indexOf("Gondor");
    lotrCitiesArray.splice(gondorIndex + 1, 0, "Rohan");
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function kata11() {
    const kataNumber = 11;
    const kataInstructions = "Using splice, rename \"Dead Marshes\" to \"Deadest Marshes\" in lotrCitiesArray";
    const deadMarshesIndex = lotrCitiesArray.indexOf("Dead Marshes");
    lotrCitiesArray.splice(deadMarshesIndex, 1, "Deadest Marshes");
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function kata12() {
    const kataNumber = 12;
    const kataInstructions = "Using slice, display the first 14 characters from bestThing";
    publishKata(kataNumber, kataInstructions, bestThing.slice(0, 14));
}

function kata13() {
    const kataNumber = 13;
    const kataInstructions = "Using slice, display the last 12 characters from bestThing";
    publishKata(kataNumber, kataInstructions, bestThing.slice(-12));
}

function kata14() {
    const kataNumber = 14;
    const kataInstructions = "Using slice, display characters between the 23rd and 38th position of bestThing (i.e., \"boolean is even\")";
    publishKata(kataNumber, kataInstructions, bestThing.slice(23, 38));
}

function kata15() {
    const kataNumber = 15;
    const kataInstructions = "Repeat #13 using substring instead of slice";
    publishKata(kataNumber, kataInstructions, bestThing.substring(bestThing.length - 12, bestThing.length));
}

function kata16() {
    const kataNumber = 16;
    const kataInstructions = "Repeat #14 using substr instead of slice.";
    publishKata(kataNumber, kataInstructions, bestThing.substr(23, 38 - 23));;
}

function kata17() {
    const kataNumber = 17;
    const kataInstructions = "Find and display the index of \"only\" in bestThing";
    publishKata(kataNumber, kataInstructions, bestThing.indexOf("only"));
}

function kata18() {
    const kataNumber = 18;
    const kataInstructions = "Find and display the index of the last word in bestThing";
    publishKata(kataNumber, kataInstructions, bestThing.indexOf(bestThing.split(" ").slice(-1)));
}

function kata19() {
    const kataNumber = 19;
    const kataInstructions = "Find and display all cities from gotCitiesCSV  that use double vowels (\"aa\",\"ee\", etc.)";
    const doubleVowelCities = gotCitiesCSV.split(",").filter(x => {
        const doubleVowels = ["aa", "ee", "ii", "oo", "uu"];
        for (let doubleVowel of doubleVowels) {
            if (x.includes(doubleVowel)) {
                return true;
            }
        }
        return false;
    });
    publishKata(kataNumber, kataInstructions, JSON.stringify(doubleVowelCities));
}

function kata20() {
    const kataNumber = 20;
    const kataInstructions = "Find and display all cities from lotrCitiesArray that end with \"or\"";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.filter(x => x.endsWith("or"))));
}

function kata21() {
    const kataNumber = 21;
    const kataInstructions = "Find and display all the words in bestThing that start with a \"b\"";
    publishKata(kataNumber, kataInstructions, JSON.stringify(bestThing.split(" ").filter(x => x.startsWith("b"))));
}

function kata22() {
    const kataNumber = 22;
    const kataInstructions = "Display \"Yes\" or \"No\" if lotrCitiesArray includes \"Mirkwood\"";
    publishKata(kataNumber, kataInstructions, lotrCitiesArray.includes("Mirkwood"));
}

function kata23() {
    const kataNumber = 23;
    const kataInstructions = "Display \"Yes\" or \"No\" if lotrCitiesArray includes \"Hollywood\"";
    publishKata(kataNumber, kataInstructions, lotrCitiesArray.includes("Hollywood"));
}

function kata24() {
    const kataNumber = 24;
    const kataInstructions = "Display the index of \"Mirkwood\" in lotrCitiesArray";
    publishKata(kataNumber, kataInstructions, lotrCitiesArray.indexOf("Mirkwood"));
}

function kata25() {
    const kataNumber = 25;
    const kataInstructions = "Find and display the first city in lotrCitiesArray that has more than one word";
    const twoWordCities = lotrCitiesArray.filter(x => x.includes(" "));
    publishKata(kataNumber, kataInstructions, JSON.stringify(twoWordCities));
}

function kata26() {
    const kataNumber = 26;
    const kataInstructions = "Reverse the order in lotrCitiesArray";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.reverse()));
}

function kata27() {
    const kataNumber = 27;
    const kataInstructions = "Sort lotrCitiesArray alphabetically";
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.sort()));
}

function kata28() {
    const kataNumber = 28;
    const kataInstructions = "Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)";
    const sortFunction = function(a, b) {
        return a.length - b.length;
    }
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray.sort(sortFunction)));
}

function kata29() {
    const kataNumber = 29;
    const kataInstructions = "Using pop, remove the last city from lotrCitiesArray";
    const lastCity = lotrCitiesArray.pop();
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
    return lastCity;
}

function kata30() {
    const kataNumber = 30;
    const kataInstructions = "Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array";
    lotrCitiesArray.push(cityRemovedInKata29);
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function kata31() {
    const kataNumber = 31;
    const kataInstructions = "Using shift, remove the first city from lotrCitiesArray";
    const firstCity = lotrCitiesArray.shift();
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
    return firstCity;
}

function kata32() {
    const kataNumber = 32;
    const kataInstructions = "Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array";
    lotrCitiesArray.unshift(cityRemovedInKata31);
    publishKata(kataNumber, kataInstructions, JSON.stringify(lotrCitiesArray));
}

function publishKata(kataNumber, kataInstructions, resultString) {
    const hNode = document.createElement("h2");
    const titleText = document.createTextNode(kataNumber + ".  " + kataInstructions);
    hNode.appendChild(titleText);
    const pNode = document.createElement("p");
    const resultTextNode = document.createTextNode(resultString);
    pNode.appendChild(resultTextNode);
    const docNode = document.getElementById("katas")
    docNode.appendChild(hNode);
    docNode.appendChild(pNode);
}