function loadCorretChapter () {
    $("#chapterblob").load("./chapters/"+ $("#chapter option:selected").val() +".html");
}

$("#chapter").change(loadCorretChapter);
   
loadCorretChapter();