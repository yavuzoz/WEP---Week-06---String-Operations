//string olarak verilen bir isim ve soyismin sadece bas harfleri buyuk yazdirmak icin
function UpperKelimeler(str) {
    let parcalar = str.split(" ");
    for (let i = 0; i < parcalar.length; i++) {
        console.log(parcalar)
        let j = parcalar[i].charAt(0).toUpperCase();
        console.log(j)
        parcalar[i] = j + parcalar[i].substr(1).toLowerCase();
        console.log(parcalar[i])
    }
    return parcalar.join(" ");
}
console.log(UpperKelimeler("saasd sasd fgffg jk"))

//1'den 100'e kadar olan asal sayıları ekrana alt alta yazdıran javascript programını yapınız.
for (let counter = 2; counter <= 100; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(counter);
    }
}

/* 0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde).ic ice for ile de yapilir ama ben farkli olsun istedim*/
let i = 0;

while (i < 100) {
    i++;
    document.write("," + i)
    if (i % 10 == 0) {
        document.write("<br>");
    }
}
document.write("<br><br>")
//ucgen  sekli cizdiriniz?ic ice for ile ucgen sekli yakalariz
for (let j = 1; j <= 6; j++) {
    for (let k = 1; k <= j; k++) {
        document.write("*");
    }
    document.write("<br>")
}




///password--**buyuk harf kucuk harf ve sembollerden 8 ila 16 karakterden olusan random password
const numberPassword = 50;
const passwordMax = 16;
const passwordMin = 8;
const passwordKarakter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
for (index = 0; index < 51; index++) {
    let passwordlength = Math.floor(Math.random() * (passwordMax - passwordMin + 1)) + passwordMin;
    let randPassword = '';
    for (let passwordIndex = 0; passwordIndex < passwordlength; passwordIndex++) {
        let randomNumber = Math.floor(Math.random() * passwordKarakter.length);
        randPassword += passwordKarakter.substring(randomNumber, randomNumber + 1);
    }
    console.log(randPassword)
}










