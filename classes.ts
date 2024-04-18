class Ev{
    private _odaSayisi:number;
    _percereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,
        kat:number){
            this._odaSayisi = odaSayisi,
            this._kat = kat,
            this._percereSayisi = pencereSayisi

        }
    zilCal(){
        console.log("kapı çalındı");
    }
}
let ev = new Ev(3,5,8);
ev._kat = 4;
console.log(ev._odaSayisi);
ev.zilCal();

//Inheritence (Kalıtım)
//Encapsulation (Kapsülleme)
//Abstraction (Soyutlama)
//Polymorphism (Çok Biçimlilik)



//Inheritence (Kalıtım)
class Kisi{
    kisiselBilgiler(){
        console.log("kişi bilgileri kaydedildi.")
    }

}

class Personel extends Kisi{
    maasAl(){
        console.log("maaş alındı")
    }

}

let kisi = new Kisi();
kisi.kisiselBilgiler();

let personel = new Personel();
personel.kisiselBilgiler();