// imput mask date
"use strict";

$(function() {
    
    $(".js-input__content-date").mask("99.99.9999");

});

// dropdawn-panel

const dropInput = document.querySelectorAll(".js-input__content");
const dropdawn = document.querySelectorAll(".js-dropdawn-panel");

let toggleDropPanel = (input, item, itemClass) => {

    if(!item.classList.contains(itemClass)) {

        item.classList.remove("hidden-content");
        item.classList.add(itemClass, "drop-show");
        input.classList.add("dropdawn-panel-input");
    } else {

        item.classList.add("hidden-content");
        item.classList.remove(itemClass);
        input.classList.remove("dropdawn-panel-input");
    }
    

};

dropInput.forEach((input, i) => {
    
    input.addEventListener("click", (e) => {

        if(e.target && e.target.classList.contains("arrow")) {

            toggleDropPanel(input, dropdawn[i], "dropdawn-panel");

        }

    });

});


const counter = document.querySelectorAll(".js-counter__content");
const counterDecr = document.querySelectorAll(".js-counter__min");
const counterIncr = document.querySelectorAll(".js-counter__max");
const counterNum = document.querySelectorAll(".js-counter__num");
const dropText = document.querySelectorAll(".dropdawn__field span");

let bedroom = 2,
    bed = 2,
    bathroom = 0;

showCountOfAmenities();

counter.forEach((item, i) => {

    item.addEventListener("click", (e) => {

        if(e.target && e.target.nodeName === "BUTTON") {

            if(e.target == counterDecr[i]) {
                if(e.target.classList.contains("bedroom-min")) {
                    bedroom--;
                    counterNum[i].textContent = bedroom;
                    disabledThisButton(bedroom, 1, counterDecr[i], counterIncr[i]);
                } if(e.target.classList.contains("bed-min")) {
                    bed--;
                    counterNum[i].textContent = bed;
                    disabledThisButton(bed, 1, counterDecr[i], counterIncr[i]);
                } if(e.target.classList.contains("bathroom-min")) {
                    bathroom--;
                    counterNum[i].textContent = bathroom;
                    disabledThisButton(bathroom, 0, counterDecr[i], counterIncr[i]);
                }
                showCountOfAmenities();
            } else {
                if(e.target.classList.contains("bedroom-max")) {
                    bedroom++;
                    counterNum[i].textContent = bedroom;
                    disabledThisButton(bedroom, 4, counterDecr[i], counterIncr[i]);
                } if(e.target.classList.contains("bed-max")) {
                    bed++;
                    counterNum[i].textContent = bed;
                    disabledThisButton(bed, 4, counterDecr[i], counterIncr[i]);
                } if(e.target.classList.contains("bathroom-max")) {
                    bathroom++;
                    counterNum[i].textContent = bathroom;
                    disabledThisButton(bathroom, 4, counterDecr[i], counterIncr[i]);
                }
                showCountOfAmenities();
            }
        }
    });
});

function showCountOfAmenities() {

    dropText.forEach((item) => {

        item.textContent = `${bedroom} спальни, ${bed} кровати, ${bathroom} ванные комнаты`;

        if(bedroom === 1) {
            item.textContent = `${bedroom} спальня, ${bed} кровати, ${bathroom} ванные комнаты`;
        } if(bed === 1) {
            item.textContent = `${bedroom} спальни, ${bed} кровать, ${bathroom} ванные комнаты`;
        } if (bedroom === 1 && bed === 1) {
            item.textContent = `${bedroom} спальня, ${bed} кровать, ${bathroom} ванные комнаты`;
        }

        let sliced = item.textContent.slice(0, 20);
    
        if(sliced.length < item.textContent.length) {
            sliced += "...";
            item.textContent = sliced;
        }
    
    });
}

function disabledThisButton(item, num, decrButton, incrButton) {
    if(num == 1 || 0) {
        if(item <= num) {
            item = num;
            decrButton.disabled = true;
            incrButton.disabled = false;
        } if(item > num) {
            decrButton.disabled = false;
            incrButton.disabled = false;
        }
    } 
    else {
        if(item >= num) {
            item = num;
            incrButton.disabled = true;
            decrButton.disabled = false;
        } else {
            incrButton.disabled = false;
            decrButton.disabled = false;
        }
    }
}

// if()