const linkDict: {[key: string]: {url: string, target: string}} = {
    '自制游戏': {url: './self-made', target: '_self'},
    '其他游戏': {url: './other-made', target: '_self'},
    '资源': {url: './resources', target: '_self'},
    '南国首页': {url: 'https://www.sustech.edu.cn/', target: '_blank'},
};
let gameDivList = document.querySelectorAll('.game-item');
gameDivList.forEach(function(value: Element) {
    if (value instanceof HTMLDivElement) {
        value.addEventListener('click', function() {
            if (this.innerText in linkDict) {
                window.open(linkDict[this.innerText].url, linkDict[this.innerText].target);
            }
        });
    }
});