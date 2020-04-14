const BASE_URL = "https://www.luoxia.com/modaozushi/";
$(document).ready(function(){
    $.get(BASE_URL + 72220 +".htm", setChineseTextDiv)
});
function chapterParser (websiteHtml) {
    return websiteHtml.split("<div id=\"nr1\">")[1].split("</div>")[0];
}

function setChineseTextDiv (text) {
    document.getElementById("chinesetext").innerHTML = chapterParser(text);
}