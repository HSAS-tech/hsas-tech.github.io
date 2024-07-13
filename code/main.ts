const linkDict: {[key: string]: string} = {
    '自制游戏': './self-made',
    '其他游戏': './other-made',
    '资源': './resources',
    '南国首页': 'https://www.sustech.edu.cn/',
};
let gameDivList = document.querySelectorAll('.game-item');
gameDivList.forEach(function(value: Element) {
    if (value instanceof HTMLDivElement) {
        value.addEventListener('click', function() {
            if (this.innerText in linkDict) {
                window.location.href = linkDict[this.innerText];
            }
        });
    }
});