
function solve(inputArray){
    var swordsArray = inputArray.filter(function (a) {
        return Number(a) <= 10? false : true;
    });

    swordsArray = swordsArray.map(function (a) {
        return Math.floor(a);
    });
    console.log('<table border="1">' + '\n'+
        '\<thead\>' + '\n' +
        '\<tr\>\<th colspan="3">Blades\<\/th\>\<\/tr\>' + '\n' +
        '\<tr\>\<th>Length [cm]\<\/th\>\<th\>Type\<\/th\>\<th\>Application\<\/th\>\<\/tr\>' + '\n' +
        '\<\/thead\>' + '\n' +
        '\<tbody\>')
    for (var i = 0; i < swordsArray.length; i++) {
        console.log('\<tr\>\<td\>' + swordsArray[i] +'\<\/td\>\<td\>' + (swordsArray[i]>40?'sword':'dagger') + '\<\/td\>\<td\>' + bladeApplicationFinder(swordsArray[i]) + '\<\/td\>\<\/tr\>');
    }

    console.log('\<\/tbody\>' + '\n' + '\<\/table\>');


    function bladeApplicationFinder(bladeLength) {
        switch (bladeLength % 5) {
            case 1:
                return 'blade';
            case 2:
                return 'quite a blade';
            case 3:
                return 'pants-scraper';
            case 4:
                return 'frog-butcher';
            case 0:
                return '*rap-poker';
            default:
                return 'none';
        }
    }


}

var inputArray = [
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
];

solve(inputArray);