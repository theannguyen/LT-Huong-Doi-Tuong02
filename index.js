let img = document.createElement("img");
img.src = "https://znews-photo.zingcdn.me/Uploaded/aybjsww/2019_06_26/tenor.gif"
let src = document.getElementById("game");
src.appendChild(img)

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            'height="' + this.size + '"' + 'src="' + this.image + '"' +
            'style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;"/>';
    }

    this.moveRight = function () {
        this.left += 20;
    }
}

let hero = new Hero("https://znews-photo.zingcdn.me/Uploaded/aybjsww/2019_06_26/tenor.gif", 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();