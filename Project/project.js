//Kollar om användaren är på mobil
var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")

function platform()
{
    if (is_mobile) {
        img1.href = "/Bilder/TreeJumping.png";
        img2.href = "/Bilder/TheGang.png";
        img3.href = "/Bilder/River.png";
        img4.href = "/Bilder/CovFefe.png";
    }
    else if (!is_mobile) {
        img1.href = "/Bilder/StörreBilder/TreeJumping.png";
        img2.href = "/Bilder/StörreBilder/TheGang.png";
        img3.href = "/Bilder/StörreBilder/River.png";
        img4.href = "/Bilder/StörreBilder/CovFefe.png";
    }
}