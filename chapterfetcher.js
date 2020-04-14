function setChineseTextDiv (chapterNumber) {
    document.getElementById("chinesetext").innerHTML = "<object type=\"text/html\" data=./chapters/chapter" + chapterNumber + ".html\"></object>";
}

//setChineseTextDiv(1);
$("#chinesetext").load("./chapters/chapter1.html");