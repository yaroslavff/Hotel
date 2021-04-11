// checkboxDropdawn

const checkDropdawnList = document.querySelector(`[data-checkbox-panel="open"]`);
const checkboxPanel = checkDropdawnList.querySelector(".checkbox__wrapper");
const checkArrowBox = checkDropdawnList.querySelector(".arrow");
const checkArrow = checkArrowBox.querySelector(".arrow__list");

checkArrowBox.addEventListener("click", () => {
    
    checkboxPanel.classList.toggle("hidden-content");
    checkArrow.classList.toggle("arrow__list_open");
});