// let elements = ["happy", "angry", "sad", "scared"].map((id) =>
//   document.getElementById(id)
// );
let happy = document.getElementById("happy");
let angry = document.getElementById("angry");
let sad = document.getElementById("sad");
let scared = document.getElementById("scared");
let beforeTxt = document.getElementById("beforeTxt");

let happyTxt = document.getElementById("happyTxt");
let angryTxt = document.getElementById("angryTxt");
let sadTxt = document.getElementById("sadTxt");
let scaredTxt = document.getElementById("scaredTxt");

// elements.forEach((element) => {
//   element.addEventListener("click", () => {
//     elements.forEach((el) => el.classList.add("drop"));
//   });
// });

function ballDrop() {
  happy.classList.add("drop");
  angry.classList.add("drop");
  sad.classList.add("drop");
  scared.classList.add("drop");
}

function handleTransitionEnd(event) {
  if (event.target === happy) {
    beforeTxt.style.display = "none";
    happyTxt.style.display = "block";
    happy.removeEventListener("transitionend", handleTransitionEnd);
  } else if (event.target === angry) {
    beforeTxt.style.display = "none";
    angryTxt.style.display = "block";
    angry.removeEventListener("transitionend", handleTransitionEnd);
  } else if (event.target === sad) {
    beforeTxt.style.display = "none";
    sadTxt.style.display = "block";
    sad.removeEventListener("transitionend", handleTransitionEnd);
  } else if (event.target === scared) {
    beforeTxt.style.display = "none";
    scaredTxt.style.display = "block";
    scared.removeEventListener("transitionend", handleTransitionEnd);
  }
}

happy.addEventListener("click", () => {
  happy.addEventListener("transitionend", handleTransitionEnd);
  ballDrop();
});
angry.addEventListener("click", () => {
  angry.addEventListener("transitionend", handleTransitionEnd);
  ballDrop();
});
sad.addEventListener("click", () => {
  sad.addEventListener("transitionend", handleTransitionEnd);
  ballDrop();
});
scared.addEventListener("click", () => {
  scared.addEventListener("transitionend", handleTransitionEnd);
  ballDrop();
});
