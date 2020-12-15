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

/* Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. */
var el_down = document.getElementById("geeks");

/* Function to generate combination of password */

function random_password_generate(max, min) {
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}
document.getElementById("generatePassword").addEventListener("click", function () {
    random_password = random_password_generate(16, 8);
    document.getElementById("randomPassword").value = random_password;
});


///password--**buyuk harf kucuk harf ve sembollerden 8 ila 16 karakterden olusan random password

let max = 16
let min = 8
let passwordKarakter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
let randUzunluk = Math.floor(Math.random() * (max - min + 1)) + min;
let randPassword = Array(randUzunluk).fill(passwordKarakter).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');

console.log(randPassword)








