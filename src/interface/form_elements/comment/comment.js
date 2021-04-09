"use strict";

let testComment = document.querySelector(".interface-comment");

class CommentCards {
    constructor(name, src, lastSeen, likeActive, likeCounter, parent, commentText) {
        this.name = name;
        this.src = src;
        this.lastSeen = lastSeen;
        this.likeActive = likeActive;
        this.likeCounter = likeCounter;
        this.commentText = commentText;
        this.parent = parent;
        this.likeClass = "like js-like";
        this.likeBtnClass = "like__btn js-like__btn";
        if(this.likeActive === true) {
            this.likeClass = "like js-like like_active";
            this.likeBtnClass = "like__btn js-like__btn like__btn_active";
        }
    }

    // injectContentInParent(content) {
    //     this.parent.appendChild(content);
    // }

    render() {
        let comment = document.createElement("div");
        comment.classList.add("comment");
        this.parent.appendChild(comment);

        comment.innerHTML = `
            <div class="comment-person">
                <div class="comment-person__icon">
                    <img src="${this.src}" alt="фотография пользователя">
                </div>
                <div class="comment-person__info">
                    <div class="comment-person__name">
                        <span>${this.name}</span>
                    </div>
                    <div class="comment-person__date">
                        <span>${this.lastSeen}</span>
                    </div>
                </div>
            </div>
            <div class="comment-panel">
                <div class="comment-panel__like">
                    <div class="${this.likeClass}">
                        <div class="${this.likeBtnClass}">
                            <img src="img/favorite.svg" alt="сердце">
                        </div>
                        <span class="like__counter js-like__counter">${this.likeCounter}</span>
                    </div>
                </div>
                <div class="comment-panel__text">
                    <p>${this.commentText}</p>
                </div>
            </div>
        `;
    }
}

new CommentCards("Мурад Сарафанов", "./img/murad.png", "5 дней назад", true, 12, testComment, "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.").render();
