function selamVer(isim:string){
    return "Merhaba" + isim;

}

let mesaj = selamVer("Fatmanur");
console.log(mesaj);

let sayi:number = 12;
sayi= 10;
sayi = 3.5;

let sehir: string;
sehir = "Ankara";
sehir = "İstanbul";

let dogruMu:boolean;
dogruMu=true;

let sayilar: number[] = [1,2,3,4,5];
let sayilar2: Array<number> = [8,9,6,4];
let sehirler: Array<string> = ["Ankara", "Kayseri", "istanbul"];

console.log(sehirler);
console.log(dogruMu);

enum Renk {
    kirmizi = 1,
     sari,
     mavi,
     siyah
}
let renk : Renk = Renk.kirmizi
let deger: any ="Ankara"
deger = 2
deger = null
deger = true

let deger2: void = undefined
deger2

function selamVer2(): void{
    console.log("merhaba")

}
selamVer2();

function topla(x,y){
    return x+y;
}

function topla2(x:number, y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}
let toplam2 = topla2(7);
console.log(toplam2);

function topla3 (x:number,...digerleri:number[]):string{
    return x+ digerleri.join()
}
console.log(topla3(3))


