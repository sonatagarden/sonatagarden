/* 九九の問題をフォームにセットする関数 */
function kukuSet() {
    "use strict";
    document.getElementById('kukuQ1').value = Math.floor(Math.random() * 9) + 1;
    document.getElementById('kukuQ2').value = Math.floor(Math.random() * 9) + 1;
    document.getElementById('kukuA1').value = "";
}

/* 九九の問題の解答を判定する関数 */
function kukuCheck() {
    "use strict";
    var vkukuQ1, vkukuQ2, vkukuA1, answer;
    vkukuQ1 = Number(document.getElementById('kukuQ1').value);
    vkukuQ2 = Number(document.getElementById('kukuQ2').value);
    vkukuA1 = Number(document.getElementById('kukuA1').value);
    answer = vkukuQ1 * vkukuQ2;
    if (answer === vkukuA1) {
        window.alert(' 正解です！ ');
    } else {
        window.alert('　残念！　正解は　' + answer + '　です！　');
    }
    kukuSet();
}

/* スロットマシン関数 */
var imageCnt = 3;
var image = ["images/kuji1.gif", "images/kuji2.gif", "images/kuji3.gif"];
var buffer = [imageCnt];

var i;
for (i = 0; i < imageCnt; i++) {
    buffer[i] = new Image();
    buffer[i].src  = image[i];
}

/* 画像回転関数 */
var rnd;
var startFlg = 0, stopFlg1 = 0, stopFlg2 = 0, stopFlg3 = 0;

function loop() {
    "use strict";
    if (stopFlg1 === -1 || stopFlg2 === -1 || stopFlg3 === -1) {
        if (stopFlg1 === -1) {
            rnd = Math.floor(Math.random() * imageCnt);
            document.getElementById('formImg1').src = buffer[rnd].src;
        }
        if (stopFlg2 === -1) {
            rnd = Math.floor(Math.random() * imageCnt);
            document.getElementById('formImg2').src = buffer[rnd].src;
        }
        if (stopFlg3 === -1) {
            rnd = Math.floor(Math.random() * imageCnt);
            document.getElementById('formImg3').src = buffer[rnd].src;
        }
        setTimeout('loop()', 50);
    } else {
        startFlg = 0;
    }
}

/* スタートボタン押下関数 */
function start() {
    "use strict";
    if (startFlg === 0) {
        startFlg = 1;
        stopFlg1 = -1;
        stopFlg2 = -1;
        stopFlg3 = -1;
        loop();
    }
}

/* ストップボタン押下関数１ */
function stop1() {
    "use strict";
    if (stopFlg1 === -1) {
        rnd = Math.floor(Math.random() * imageCnt);
        document.getElementById('formImg1').src = buffer[rnd].src;
        stopFlg1 = rnd;
    }
}

/* ストップボタン押下関数２ */
function stop2() {
    "use strict";
    if (stopFlg2 === -1) {
        rnd = Math.floor(Math.random() * imageCnt);
        document.getElementById('formImg2').src = buffer[rnd].src;
        stopFlg2 = rnd;
    }
}

/* ストップボタン押下関数３ */
function stop3() {
    "use strict";
    if (stopFlg3 === -1) {
        rnd = Math.floor(Math.random() * imageCnt);
        document.getElementById('formImg3').src = buffer[rnd].src;
        stopFlg3 = rnd;
    }
}

/* 背景変更関数 */
var flg;
function backMaker(n) {
    "use strict";
    var back = document.createElement("div");
    var j;
    if (document.getElementById('backItem').value === '雪') {
        back.textContent = "●";
        back.className = "snow";
    } else if (document.getElementById('backItem').value === '雨') {
        back.textContent = "●";
        back.className = "rain";
    } else if (document.getElementById('backItem').value === '桜') {
        back.className = "flower";
    } else if (document.getElementById('backItem').value === '葉') {
        back.className = "green";
    }
    for (j = 0; j < n; j++) {
        flg = true;
        backSet(back);
    }
    if (n === 0) {
        flg = false;
    }
}

function backSet(clone) {
    var backClone = clone.cloneNode(true);
    var backStyle = backClone.style;

    backStyle.left = 100 * Math.random() + "%";
    backStyle.animationDelay = 8 * Math.random() + "s";
    backStyle.fontSize = ~~(5 * Math.random() + 10) + "px";
    document.body.appendChild(backClone);

    backClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        if (flg === true) {
            var back = document.createElement("div");
            if (document.getElementById('backItem').value === '雪') {
                back.textContent = "●";
                back.className = "snow";
            } else if (document.getElementById('backItem').value === '雨') {
                back.textContent = "●";
                back.className = "rain";
            } else if (document.getElementById('backItem').value === '桜') {
                back.className = "flower";
            } else if (document.getElementById('backItem').value === '葉') {
                back.className = "green";
            }
            backSet(back);
        }
    }, false)
}

function openText(path) {
    window.open('txt/' + path + '.txt');
}
