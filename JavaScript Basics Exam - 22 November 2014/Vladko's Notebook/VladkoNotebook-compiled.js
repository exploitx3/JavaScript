function solve(inputArray) {
    var resultContainer = {};
    var currentString, color, dataType, age, name;
    for (var i = 0; i < inputArray.length; i++) {
        currentString = inputArray[i].split('|');
        color = currentString[0];
        if (!resultContainer.hasOwnProperty(color)) {
            resultContainer[color] = {
                age: null,
                name: null,
                opponents: [],
                wins: 0,
                losses: 0,
                rank: function () {
                    return ((this.wins + 1) / (this.losses + 1)).toFixed(2);
                },
                shouldExist: function () {
                    if (this.age === null || this.name === null) {
                        return false;
                    } else {
                        return true;
                    }
                }
            };
        }

        dataType = currentString[1];
        switch (dataType) {
            case 'win':
                name = currentString[2];
                resultContainer[color].opponents.push(name);
                resultContainer[color].wins++;
                break;
            case 'loss':
                name = currentString[2];
                resultContainer[color].opponents.push(name);
                resultContainer[color].losses++;
                break;
            case 'name':
                name = currentString[2];
                resultContainer[color].name = name;
                break;
            case 'age':
                age = currentString[2];
                resultContainer[color].age = age;
                break;
        }
    }

    var finalContainer = {};
    var resultContainerKeys = Object.keys(resultContainer).sort();
    var currentSheet;
    for (var i = 0; i < resultContainerKeys.length; i++) {
        currentSheet = resultContainer[resultContainerKeys[i]];

        if (currentSheet.shouldExist()) {
            finalContainer[resultContainerKeys[i]] = {
                age: currentSheet.age,
                name: currentSheet.name,
                opponents: currentSheet.opponents.sort(),
                rank: currentSheet.rank()
            };
        }
    }

    console.log(JSON.stringify(finalContainer));
}

var inputArray = ['Sky Blue|name|yasen', 'Sky Blue|age|21', 'Sky Blue|win|yasen', 'Sky Blue|loss|pesho Dobrev', 'Sky Blue|loss|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Dark Blue|win|ico', 'Dark Blue|loss|mitko', 'Dark Blue|loss|gosho', 'Sky Blue|win|yasen', 'Sky Blue|loss|pesho Dobrev', 'Sky Blue|loss|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Dark Blue|win|ico', 'Dark Blue|loss|mitko', 'Dark Blue|loss|gosho', 'Sky Blue|win|yasen', 'Sky Blue|loss|pesho Dobrev', 'Sky Blue|loss|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Sky Blue|win|ivan Ivanov', 'Dark Blue|win|ico', 'Dark Blue|loss|mitko', 'Dark Blue|loss|gosho', 'Dark Blue|age|21', 'Dark Blue|name|yasen'];

var inputArray2 = ['red|name|kiko', 'red|win|Vladko', 'blue|age|12', 'green|age|13', 'green|win|gosho', 'red|age|12', 'green|name|Pesho', 'green|win|ico', 'green|win|Gosho', 'green|win|qfkata', 'green|win|stamat', 'green|win|petko', 'green|win|'];
solve(inputArray2);

//# sourceMappingURL=VladkoNotebook-compiled.js.map