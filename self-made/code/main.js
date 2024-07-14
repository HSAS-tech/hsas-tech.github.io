"use strict";
const selfGameLinkDict = {
    '南国2048小游戏': { url: 'https://alittleyoshi.github.io/HSAS-2048-images-ver/', target: '_blank' },
    '返回': { url: '../', target: '_self' },
};
let selfGameDivList = document.querySelectorAll('.game-item');
selfGameDivList.forEach(function (value) {
    if (value instanceof HTMLDivElement) {
        value.addEventListener('click', function () {
            if (this.innerText in selfGameLinkDict) {
                window.open(selfGameLinkDict[this.innerText].url, selfGameLinkDict[this.innerText].target);
            }
        });
    }
});
