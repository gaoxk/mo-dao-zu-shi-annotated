function getCurrentChapterNumber () {
    return $("#chapter option:selected").val();
}

function loadChapter (num) {
    $("#chapterblob").load("./chapters/chapter"+ num +".html");
}

function setChapter (num) {
    $("#chapter select").val(num);
}

function loadLastChapter () {
    const chapter = Math.max(parseint(getCurrentChapterNumber())-1, 1);
    loadCorrectChapter(chapter);
    setChapter(chapter);
}

function loadNextChapter () {
    const chapter = Math.min(parseint(getCurrentChapterNumber())+1, 126);
    loadCorrectChapter(chapter);
    setChapter(chapter);
}

$("#chapter").change(loadChapter(getCurrentChapterNumber()));
   
loadChapter(getCurrentChapterNumber());