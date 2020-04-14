function getCurrentChapterNumber () {
    return $("#chapter option:selected").val();
}

function loadChapter (num) {
    $("#chapterblob").load("./chapters/chapter"+ num +".html");
}

function setChapter (num) {
    $("#chapter").val(num);
}

function loadConsecutiveChapter (last) {
    const chapter = last ? Math.max(parseInt(getCurrentChapterNumber())-1, 1) :  Math.min(parseInt(getCurrentChapterNumber())+1, 126);
    loadChapter(chapter);
    setChapter(chapter);
}

$("#chapter").change(() => loadChapter(getCurrentChapterNumber()));

$("#lastChapter").click(() => loadConsecutiveChapter(true));
$("#nextChapter").click(() => loadConsecutiveChapter(false));

loadChapter(getCurrentChapterNumber());