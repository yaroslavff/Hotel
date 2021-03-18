"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // switch button

    const switchWrappers = document.querySelectorAll(".js-switch__wrapper");
    const switchButtons = document.querySelectorAll(".js-switch__btn");
    const switchDescr = document.querySelectorAll(".js-switch__descr");

    switchWrappers.forEach((item, i) => {

        item.addEventListener("click", (event) => {
            
            if(event.target == switchDescr[i] || event.target == switchButtons[i]) {
                
                if(switchButtons[i].classList.contains("switch__btn_active")) {
                    switchButtons[i].classList.remove("switch__btn_active");
                } else {
                    switchButtons[i].classList.add("switch__btn_active");
                }

            }

        });

    });

    // like button

    const likeBtns = document.querySelectorAll(".js-like");
    const hearts = document.querySelectorAll(".js-like__btn");
    const counters = document.querySelectorAll(".js-like__counter");

    likeBtns.forEach((btn, i) => {

        let counterNumber;
        
        if(hearts[i].classList.contains("like__btn_active")) {
            hearts[i].innerHTML = "<img src = 'img/favorite.svg' alt = 'сердце'>";
            
            counterNumber = 12;
            counters[i].textContent = counterNumber;
        } else {
            hearts[i].innerHTML = "<img src = 'img/favorite_border.svg' alt = 'Пустое сердце'>";

            counterNumber = 2;
            counters[i].textContent = counterNumber;
        }

        btn.addEventListener("click", (event) => {
            

            if(hearts[i].classList.contains("like__btn_active")) {
                hearts[i].classList.remove("like__btn_active", "pulse-on");
                hearts[i].classList.add("pulse-off");
                hearts[i].innerHTML = "<img src = 'img/favorite_border.svg' alt = 'Пустое сердце'>";

                counterNumber--;
                counters[i].classList.remove("like__counter_active");
                counters[i].textContent = counterNumber;

                btn.classList.remove("like_active");
            } else {
                hearts[i].classList.add("like__btn_active", "pulse-on");
                hearts[i].classList.remove("pulse-off");
                hearts[i].innerHTML = "<img src = 'img/favorite.svg' alt = 'сердце'>";

                counterNumber++;
                counters[i].classList.add("like__counter_active");
                counters[i].textContent = counterNumber;

                btn.classList.add("like_active");
            }

        });
    });

});