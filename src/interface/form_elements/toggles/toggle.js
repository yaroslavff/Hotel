"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const switchWrappers = document.querySelectorAll(".js-switch__wrapper");
    const switchButtons = document.querySelectorAll(".js-switch__btn");
    const switchDescr = document.querySelectorAll(".js-switch__descr");

    switchWrappers.forEach((item, i) => {

        item.addEventListener("click", (event) => {
            
            if(item == switchWrappers[i] && (event.target == switchDescr[i] || event.target == switchButtons[i])) {
                
                if(switchButtons[i].classList.contains("switch__btn_active")) {
                    switchButtons[i].classList.remove("switch__btn_active");
                } else {
                    switchButtons[i].classList.add("switch__btn_active");
                }

            }

        });

    });
});