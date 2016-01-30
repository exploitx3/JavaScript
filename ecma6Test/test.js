/**
 * Created by Leet on 1/12/2016.
 */
"use strict";
var masiv = new Array(10);
for (var i = 0; i < masiv.length; i++) {
    masiv[i] = 1;
}
masiv = masiv.map((a) => {
    return 5;
})
console.log(masiv);