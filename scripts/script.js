$(function () {
    var collection = $("span code").get()
    for (let elem of collection) {
        hljs.highlightElement(elem);
    };
    collection = $("pre code").get()
    for (let elem of collection) {
        hljs.highlightElement(elem);
    };
});