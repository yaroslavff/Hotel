// imput mask date
"use strict";

$(function() {
    
    $(".js-input__content-date").mask("99.99.9999");

});

// dropdown-panel

const inputText = document.querySelectorAll(".js-input__content");
const dropdown = document.querySelectorAll(".js-dropdown-panel");

let toggleDropPanel = (input, item, itemClass) => {

    if(!item.classList.contains(itemClass)) {

        item.classList.remove("hidden-content");
        item.classList.add(itemClass, "drop-show");
        input.classList.add("dropdown-panel-input");
    } else {

        item.classList.add("hidden-content");
        item.classList.remove(itemClass);
        input.classList.remove("dropdown-panel-input");
    }
    

};

inputText.forEach((input, i) => {
    
    input.addEventListener("click", (e) => {

        if(e.target && e.target.classList.contains("arrow")) {

            toggleDropPanel(input, dropdown[i], "dropdown-panel");

        }

    });

});

const dropdownAmenities = document.querySelector(`[data-dropdown="amenities"]`);
const counterAmenities = dropdownAmenities.querySelectorAll(`.js-counter__content`);
const decrAmenities = dropdownAmenities.querySelectorAll(".js-counter__min");
const incrAmenities = dropdownAmenities.querySelectorAll(".js-counter__max");
const counterNumAmenities = dropdownAmenities.querySelectorAll(".js-counter__num");
const inputTextAmenities = dropdownAmenities.querySelector(".dropdown__field span");

const dropdownGuest = document.querySelector(`[data-dropdown="guest"]`);
const counterGuest = dropdownGuest.querySelectorAll(`.js-counter__content`);
const decrGuest = dropdownGuest.querySelectorAll(".js-counter__min");
const incrGuest = dropdownGuest.querySelectorAll(".js-counter__max");
const counterNumGuest = dropdownGuest.querySelectorAll(".js-counter__num");
const inputTextGuest = dropdownGuest.querySelector(".js-dropdown__field span");
const choiceBtnGuest = dropdownGuest.querySelector(".js-choice-button");
const choiceBtnDeclineGuest = choiceBtnGuest.querySelector(".js-choice-button__decline");

let bedroom = 2,
    bed = 2,
    bathroom = 0,
    adults = 2,
    children = 1,
    babys = 0;

showCountOfAmenities();

counterAmenities.forEach((item, i) => {
    
    if(decrAmenities[i].classList.contains("bedroom-min")) {
        counterNumAmenities[i].textContent = bedroom;
    } if(decrAmenities[i].classList.contains("bed-min")) {
        counterNumAmenities[i].textContent = bed;
    } if(decrAmenities[i].classList.contains("bathroom-min")) {
        counterNumAmenities[i].textContent = bathroom;
    }

    item.addEventListener("click", (e) => {

        if(e.target && e.target.nodeName === "BUTTON") {

            if(e.target == decrAmenities[i]) {
                if(e.target.classList.contains("bedroom-min")) {
                    bedroom--;
                    disabledDecrButton(bedroom, 1, decrAmenities[i], incrAmenities[i]);
                    counterNumAmenities[i].textContent = bedroom;
                } if(e.target.classList.contains("bed-min")) {
                    bed--;
                    disabledDecrButton(bed, 1, decrAmenities[i], incrAmenities[i]);
                    counterNumAmenities[i].textContent = bed;
                } if(e.target.classList.contains("bathroom-min")) {
                    bathroom--;
                    disabledDecrButton(bathroom, 0, decrAmenities[i], incrAmenities[i]);
                    counterNumAmenities[i].textContent = bathroom;
                }
                showCountOfAmenities();
            } if(e.target == incrAmenities[i]) {
                if(e.target.classList.contains("bedroom-max")) {
                    bedroom++;
                    disabledIncrButton(bedroom, 4, decrAmenities[i], incrAmenities[i]);
                    counterNumAmenities[i].textContent = bedroom;
                } if(e.target.classList.contains("bed-max")) {
                    bed++;
                    disabledIncrButton(bed, 4, decrAmenities[i], incrAmenities[i]);
                    counterNumAmenities[i].textContent = bed;
                } if(e.target.classList.contains("bathroom-max")) {
                    bathroom++;
                    disabledIncrButton(bathroom, 4, decrAmenities[i], incrAmenities[i]);
                    counterNumAmenities[i].textContent = bathroom;
                }
                showCountOfAmenities();
            }
        }
    });
});

counterGuest.forEach((item, i) => {
    
    if(decrGuest[i].classList.contains("bedroom-min")) {
        decrGuest[i].classList.remove("bedroom-min");
        incrGuest[i].classList.remove("bedroom-max");
        decrGuest[i].classList.add("adults-min");
        incrGuest[i].classList.add("adults-max");
        
        counterNumGuest[i].textContent = adults;
        counterNumGuest[i].classList.add("adults-num");
    } if(decrGuest[i].classList.contains("bed-min")) {
        decrGuest[i].classList.remove("bed-min");
        incrGuest[i].classList.remove("bed-max");
        decrGuest[i].classList.add("children-min");
        incrGuest[i].classList.add("children-max");

        counterNumGuest[i].textContent = children;
        counterNumGuest[i].classList.add("children-num");
    } if(decrGuest[i].classList.contains("bathroom-min")) {
        decrGuest[i].classList.remove("bathroom-min");
        incrGuest[i].classList.remove("bathroom-max");
        decrGuest[i].classList.add("babys-min");
        incrGuest[i].classList.add("babys-max");

        counterNumGuest[i].textContent = babys;
        counterNumGuest[i].classList.add("babys-num");
    }

    item.addEventListener("click", (e) => {

        if(e.target && e.target.nodeName === "BUTTON") {

            if(e.target == decrGuest[i]) {
                if(e.target.classList.contains("adults-min")) {
                    adults--;
                    disabledDecrButton(adults, 0, decrGuest[i], incrGuest[i]);
                    counterNumGuest[i].textContent = adults;
                } if(e.target.classList.contains("children-min")) {
                    children--;
                    disabledDecrButton(children, 0, decrGuest[i], incrGuest[i]);
                    counterNumGuest[i].textContent = children;
                } if(e.target.classList.contains("babys-min")) {
                    babys--;
                    disabledDecrButton(babys, 0, decrGuest[i], incrGuest[i]);
                    counterNumGuest[i].textContent = babys;
                }
                showCountOfGuest();
                hiddenDeclineBtn(choiceBtnDeclineGuest, adults, children, babys);
            } if(e.target == incrGuest[i]) {
                if(e.target.classList.contains("adults-max")) {
                    adults++;
                    disabledIncrButton(adults, 4, decrGuest[i], incrGuest[i]);
                    counterNumGuest[i].textContent = adults;
                } if(e.target.classList.contains("children-max")) {
                    children++;
                    disabledIncrButton(children, 4, decrGuest[i], incrGuest[i]);
                    counterNumGuest[i].textContent = children;
                } if(e.target.classList.contains("babys-max")) {
                    babys++;
                    disabledIncrButton(babys, 4, decrGuest[i], incrGuest[i]);
                    counterNumGuest[i].textContent = babys;
                }
                showCountOfGuest();
                hiddenDeclineBtn(choiceBtnDeclineGuest, adults, children, babys);
            }
        }
    });
});

hiddenDeclineBtn(choiceBtnDeclineGuest, adults, children, babys);

choiceBtnGuest.addEventListener("click", (e) => {
    if(e.target && e.target.nodeName === "BUTTON") {
        if(e.target.classList.contains("choice-button__decline")) {
            adults = 0;
            children = 0;
            babys = 0;
            document.querySelector(".adults-num").textContent = adults;
            document.querySelector(".children-num").textContent = children;
            document.querySelector(".babys-num").textContent = babys;
            counterGuest.forEach((item, i) => {
                disabledDecrButton(adults, 0, decrGuest[i], incrGuest[i]);
                disabledDecrButton(children, 0, decrGuest[i], incrGuest[i]);
                disabledDecrButton(babys, 0, decrGuest[i], incrGuest[i]);
            });
            showCountOfGuest();
            hiddenDeclineBtn(choiceBtnDeclineGuest, adults, children, babys);
        } if(e.target.classList.contains("choice-button__accept")) {
            if((adults + children + babys) > 0) {
                dropdownGuest.querySelector(".js-input__content").classList.remove("dropdown-panel-input");
                dropdownGuest.querySelector(".js-dropdown-panel").classList.remove("dropdown-panel");
                dropdownGuest.querySelector(".js-dropdown-panel").classList.add("hidden-content");
            }
        }
    }
});

function hiddenDeclineBtn(btn, ...arg) {
    function arrSum(arr) {
        let n = 0;
        for (let i = 0; i < arr.length; i++) {
            n += arr[i];
        }
        return n;
    }

    if(arrSum(arg) === 0 && inputTextGuest.textContent === "Сколько гостей") {
        btn.classList.add("hidden-content");
    } else {
        btn.classList.remove("hidden-content");
    }
}

function showCountOfAmenities() {

    inputTextAmenities.textContent = `${bedroom} спальни, ${bed} кровати, ${bathroom} ванные комнаты`;

    if(bedroom === 1) {
        inputTextAmenities.textContent = `${bedroom} спальня, ${bed} кровати, ${bathroom} ванные комнаты`;
    } if(bed === 1) {
        inputTextAmenities.textContent = `${bedroom} спальни, ${bed} кровать, ${bathroom} ванные комнаты`;
    } if (bedroom === 1 && bed === 1) {
        inputTextAmenities.textContent = `${bedroom} спальня, ${bed} кровать, ${bathroom} ванные комнаты`;
    }

    let sliced = inputTextAmenities.textContent.slice(0, 20);

    if(sliced.length < inputTextAmenities.textContent.length) {
        sliced += "...";
        inputTextAmenities.textContent = sliced;
    }

}

function showCountOfGuest() {
    let number = adults + children + babys;
    
    inputTextGuest.textContent = `Сколько гостей`;

    if (number === 1) {
        inputTextGuest.textContent = `${number} гость`;
    } if(number > 1 && number < 5) {
        inputTextGuest.textContent = `${number} гостя`;
    } if(number >= 5) {
        inputTextGuest.textContent = `${number} гостей`;
    }
}

function disabledDecrButton(item, num, decrButton, incrButton) {

    if(item <= num) {
        item = num;
        decrButton.disabled = true;
        incrButton.disabled = false;
    } else {
        decrButton.disabled = false;
        incrButton.disabled = false;
    }
}

function disabledIncrButton(item, num, decrButton, incrButton) {

    if(item >= num) {
        item = num;
        incrButton.disabled = true;
        decrButton.disabled = false;
    } else {
        incrButton.disabled = false;
        decrButton.disabled = false;
    }
}