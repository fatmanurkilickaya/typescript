function selamVer(isim) {
    return "Merhaba" + isim;
}
var mesaj = selamVer("Fatmanur");
console.log(mesaj);
var sayi = 12;
sayi = 10;
sayi = 3.5;
var sehir;
sehir = "Ankara";
sehir = "İstanbul";
var dogruMu;
dogruMu = true;
var sayilar = [1, 2, 3, 4, 5];
var sayilar2 = [8, 9, 6, 4];
var sehirler = ["Ankara", "Kayseri", "istanbul"];
console.log(sehirler);
console.log(dogruMu);
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 1] = "kirmizi";
    Renk[Renk["sari"] = 2] = "sari";
    Renk[Renk["mavi"] = 3] = "mavi";
    Renk[Renk["siyah"] = 4] = "siyah";
})(Renk || (Renk = {}));
var renk = Renk.kirmizi;
var deger = "Ankara";
deger = 2;
deger = null;
deger = true;
var deger2 = undefined;
deger2;
function selamVer2() {
    console.log("merhaba");
}
selamVer2();
function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
var toplam2 = topla2(7);
console.log(toplam2);
function topla3(x) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return x + digerleri.join();
}
console.log(topla3(3));
