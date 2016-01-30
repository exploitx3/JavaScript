/**
 * Created by Leet on 1/10/2016.
 */
function replaceATag(str) {
    var pattern = /([A-Za-z])(>)([A-Za-z])/g;
    str = str.replace(pattern, '$1]$3');
    str = str.replace(/<a/g, '[URL');
    str = str.replace(/<\/a>/g, '[/URL]');
    console.log(str);

}
replaceATag('<ul>\n<li>\n<a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>');