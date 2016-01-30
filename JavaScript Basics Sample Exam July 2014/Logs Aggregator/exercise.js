function solve(inputArray){
    var logsContainer = {};

    var count = Number(inputArray[0]);
    var currentLine, user, ipString, name, duration;
    for (var i = 1; i < count+1; i++) {
        currentLine = inputArray[i].split(' ');
        ipString = currentLine[0];
        name = currentLine[1];
        duration = Number(currentLine[2]);
        if(!logsContainer[name]){
            logsContainer[name] = {
                duration: duration,
                ipAddresses: [ipString]
            };
        }else {
            logsContainer[name].duration += duration;
            if(logsContainer[name].ipAddresses.indexOf(ipString) === -1){
                logsContainer[name].ipAddresses.push(ipString);
            }
        }
    }

    var orderedLogsContainer = {};
    var logKeys = Object.keys(logsContainer).sort(function (a, b) {
        return a.localeCompare(b);
    });
    for (var i = 0; i < logKeys.length; i++) {
        orderedLogsContainer[logKeys[i]] = {
            duration: logsContainer[logKeys[i]].duration,
            ipAddresses: logsContainer[logKeys[i]].ipAddresses.sort(function (a, b) {
                return a.localeCompare(b);
            })
        };
        console.log(logKeys[i] + ': ' + orderedLogsContainer[logKeys[i]].duration + ' ' + '[' +(orderedLogsContainer[logKeys[i]].ipAddresses).join(', ') + ']');
    }
}

var inputArray = [
    '7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4'
];

solve(inputArray);