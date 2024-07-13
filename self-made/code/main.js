"use strict";
const selfGameLinkDict = {
    '南国2048小游戏': 'https://alittleyoshi.github.io/HSAS-2048-images-ver/',
    '返回': '../',
};
let selfGameDivList = document.querySelectorAll('.game-item');
selfGameDivList.forEach(function (value) {
    if (value instanceof HTMLDivElement) {
        value.addEventListener('click', function () {
            if (this.innerText in selfGameLinkDict) {
                window.location.href = selfGameLinkDict[this.innerText];
            }
        });
    }
});
