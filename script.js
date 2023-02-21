let OptionOneButton = document.querySelector(".option-one");
let OptionTwoButton = document.querySelector(".option-two");
let OptionOneDiv = document.querySelector(".option-one-screen");
let OptionTwoDiv = document.querySelector(".option-two-screen");
let storyOpening = document.querySelector(".story-opening");
let OptionOneOneButton = document.querySelector(".option-one-one");
let OptionOneTwoButton = document.querySelector(".option-one-two");
let OptionOneOneEndDiv = document.querySelector(".option-one-one-end");
let OptionOneTwoEndDiv = document.querySelector(".option-one-two-end");
let NameInput = document.querySelector(".name-input");
let NameButton = document.querySelector(".name-button");
let openingText = document.querySelector(".opening-text");
let RestartButton = document.querySelector(".restart-button");


NameButton.onclick = function() {
    openingText.innerHTML = `${NameInput.value} Choose!`;
};


OptionOneButton.onclick = function() {
    storyOpening.style.display = "none";
    OptionOneDiv.style.display = "block";
};

OptionTwoButton.onclick = function() {
    storyOpening.style.display = "none";
    OptionTwoDiv.style.display = "block";
};

OptionOneOneButton.onclick = function() {
    OptionOneDiv.style.display = "none";
    OptionOneOneEndDiv.style.display = "block";
};
OptionOneTwoButton.onclick = function() {
    OptionOneDiv.style.display = "none";
    OptionOneTwoEndDiv.style.display = "block";
};

RestartButton.onclick = function() {
    storyOpening.style.display = "block";
    OptionOneDiv.style.display = "none";
    OptionTwoDiv.style.display = "none";
    OptionOneOneEndDiv.style.display = "none";
    OptionOneTwoEndDiv.style.display = "none";
};





