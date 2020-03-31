const comment = document.querySelector(".new-comment");
const commentInput = comment.querySelector("input");
const commentSubmit = comment.querySelector("button");
const commentBox = document.querySelector(".comment-box");

const myName = "wecode_bootcamp";

function writeComment(text) {
    const p = document.createElement("p");
    const span = document.createElement("span");

    span.innerText = myName;
    p.innerText = text;
    
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


function init() {
    commentInput.addEventListener("submit", handleSubmit);
    commentSubmit.addEventListener("click", handleSubmit);
}
init();