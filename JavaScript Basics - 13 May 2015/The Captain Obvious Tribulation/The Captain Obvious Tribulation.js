function solve(inputArray) {
    var repeatedWords = [];
    var wordsText = inputArray[0];
    var sentencesText = inputArray[1];

    var wordPattern = /\b[A-Za-z]{2,}\b/g;
    var repeatedWordsMatcher, currentWord, currentWordMatch;
    while (currentWord = wordPattern.exec(wordsText)) {
        repeatedWordsMatcher = new RegExp('\\b' + currentWord[0] + '\\b', 'gi');
        currentWordMatch = wordsText.match(repeatedWordsMatcher);
        if (currentWordMatch.length >= 3) {
            if (repeatedWords.indexOf(currentWord[0].toLowerCase()) === -1) {
                repeatedWords.push(currentWord[0].toLowerCase());
            }
        }
    }
    if (repeatedWords.length === 0) {
        console.log('No words');
        return;
    }

    var currentSentence, regExString;
    var hasFoundSentence = false;
    var sentencePattern = /[^.!?]+(?:.|!|\?)/g;
    while (currentSentence = sentencePattern.exec(sentencesText)) {
        regExString = '\\b' + repeatedWords.join('\\b|\\b') + '\\b';
        var repeatedWordPattern = new RegExp(regExString , 'gi');
        var matchSentence = currentSentence[0].match(repeatedWordPattern);
        if(matchSentence === null){
            continue;
        }
        if(matchSentence.length>=2){
            console.log(currentSentence[0]);
            hasFoundSentence = true;
        }
    }
    if (!hasFoundSentence) {
        console.log('No sentences');
    }
}

//var inputArray = [
//    "Using motion triggered cameras located in the Yanachaga National Park in Peru, scientists found significant changes in animal behavior more than three weeks before a magnitude 7 earthquake struck the region in 2011. On a typical day the cameras recorded 5 to 15 animal sightings, but within the 23 day period in the run up to the earthquake, they recorded five or fewer sightings. For the five to seven days immediately before the earthquake, no animal movements were recorded at all an unusual phenomenon in a mountainous rainforest region normally teeming with wildlife.",
//    "While science stops short of calling it a sixth sense, wild animals are generally more sensitive than people when it comes to responding to their environment. Humans are generalists, we are not specialized ecologically, she said. We don't live in contact with the soil or the ground. We've insulated ourselves into concrete buildings in cities. While there have been reports of people displaying medical symptoms ahead of earthquakes, I think the effect would be negligible. However, I'm prepared to keep an open mind on that subject."
//];
//solve(inputArray);
//
//console.log();
//var text = 'While science stops short of calling it a sixth sense, wild animals are generally more sensitive than people when it comes to responding to their environment.';
//var patt = /(the|animal|earthquake|day|recorded|for)/gi;
//console.log(text.match(patt).length);

var input1 =[
    'Lorem ipsum dolor sit amet, sale errem nam no, dictas scaevola posidonium id per. Cibo rebum eloquentiam in per, est vide suavitate et? Duo eu nostro dolorum eloquentiam, at mei libris prompta expetendis, ius hinc vero fabulas ad. Duo natum putant voluptatum ei. Vix option offendit erroribus no, his no meis menandri, ne sea cibo choro dicam. Mei agam consul electram at, vel te iisque regione! Brute adversarium consequuntur in ius, ius ex essent meliore. Sea no modus omnesque expetenda, vix ludus ceteros id, per ancillae voluptatum definitionem ea? Id vis tota dicam exerci, mea mollis expetenda ei? Vel no tation partiendo, eu nam dolore pertinax adversarium, ea sea ludus atomorum! Vix option suscipiantur concludaturque id. His elit vitae explicari ne. Duo ut nonumy iisque pertinax, ut meis zril mel?',
        'Lorem ipsum dolor sit amet, ut accumsan adipisci nam! Has oratio docendi vulputate ei, ut vis vidit ceteros. Vel eu dolor oblique, ea quot unum vel. Sint convenire at his, tempor constituam est ex. Cibo epicuri ne est, per no convenire erroribus patrioque, has te utamur oblique scaevola! No euismod senserit concludaturque has? Ei legere commodo appellantur duo, assum ponderum eu sea, nulla graece no duo? Et erant eirmod propriae his, qui invenire scripserit efficiantur ut. Integre referrentur mea at. At amet ocurreret qui, cum libris possim praesent ea, velit legere viderer an his? Vim quis solet eirmod cu. Saperet perfecto cum eu, dicant ornatus vix ne. Discere euismod detraxit has ex, sea cibo legere adolescens cu, pro eu alii elit. Ex probatus signiferumque vel? Id vix audiam delectus necessitatibus, quod ocurreret disputationi eos cu. Mea eu animal fabellas sensibus, ut sit paulo torquatos! Oratio forensibus ut ius, sed scaevola torquatos definitionem an. Everti option atomorum cu quo, vix tempor postea tincidunt ea, eu viderer aliquid democritum mel. Sed dicta abhorreant contentiones ne, sed laoreet invenire democritum cu! Per laudem sententiae ea! Nam numquam commune vulputate ex. Ridens verear disputando qui eu, per in debitis accusamus consetetur, et nec hinc nostrum evertitur? Id est iuvaret mediocrem, fastidii pertinax consectetuer sit ei, has quaeque eruditi an? Liber abhorreant argumentum nam te, eos in inimicus mnesarchum.'
];
solve(input1);