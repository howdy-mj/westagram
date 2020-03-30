const comment = document.querySelector(".new-comment");
const commentInput = comment.querySelector("input");
const commentSubmit = comment.querySelector("button");
const commentBox = document.querySelector(".comment-box");

const myName = "wecode_bootcamp";

function writeComment(text) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    const a = document.createElement("a");

    a.innerText = myName;
    span.innerText = text;
    
    p.appendChild(a);
    p.appendChild(span);

    commentBox.appendChild(p);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = commentInput.value;
    // console.log(currentValue);
    writeComment(currentValue);
    commentInput.value = "";
}

comment.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        // console.log('13');
        handleSubmit(event);
    }
});

function init() {
    commentSubmit.addEventListener("click", handleSubmit);
}
init();