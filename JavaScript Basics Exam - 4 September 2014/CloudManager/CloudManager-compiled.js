function solve(inputArray) {
    var unorderedContainer = {};
    var orderedContainer = {};
    var fileProperties, fileName, fileExtension, fileSize;

    for (var i = 0; i < inputArray.length; i++) {
        fileProperties = inputArray[i].split(' ');
        fileName = fileProperties[0];
        fileExtension = fileProperties[1];
        fileSize = Number(fileProperties[2].substring(0, fileProperties[2].length - 2));

        if (!unorderedContainer[fileExtension]) {
            unorderedContainer[fileExtension] = {};
            unorderedContainer[fileExtension].files = [];
            unorderedContainer[fileExtension].memory = 0;
        }
        unorderedContainer[fileExtension]['files'].push(fileName);
        unorderedContainer[fileExtension]['memory'] = Number(Number(unorderedContainer[fileExtension]['memory']) + fileSize).toFixed(2);

        //console.log(fileName + ' ' + fileExtension + ' ' + fileSize);
    }

    var extensions = Object.keys(unorderedContainer).sort();
    for (var i = 0; i < extensions.length; i++) {
        orderedContainer[extensions[i]] = {};
        orderedContainer[extensions[i]]['files'] = unorderedContainer[extensions[i]]['files'].sort();
        orderedContainer[extensions[i]]['memory'] = unorderedContainer[extensions[i]]['memory'];
    }
    console.log(JSON.stringify(orderedContainer));
}
//
//var inputArray1 = [
//    'sentinel .exe 15MB',
//    'zoomIt .msi 3MB',
//    'skype .exe 45MB',
//    'trojanStopper .bat 23MB',
//    'kindleInstaller .exe 120MB',
//    'setup .msi 33.4MB',
//    'winBlock .bat 1MB'
//];
//
//solve(inputArray1);

//# sourceMappingURL=CloudManager-compiled.js.map