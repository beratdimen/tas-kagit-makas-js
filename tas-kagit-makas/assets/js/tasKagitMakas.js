let hareketler = ["Taş", "Kağıt", "Makas"];
alert(
  "Taş Kağıt Makas oyunumuza hoşgeldiniz..." +
    "\n" +
    "oyuna başlamak için lütfen tamam a basıp sonra seçim yapınız"
);
let secim = prompt(hareketler);
let rastgeleSayi = Math.round(Math.random() * 2);
let bigisayarHamlesi = hareketler[rastgeleSayi];

if (secim.toLowerCase() == "taş") {
  if (bigisayarHamlesi.toLowerCase() == "kağıt")
    alert("Kazanamadınız. " + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  else if (bigisayarHamlesi.toLowerCase() == "makas") {
    alert("kazandınız " + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  } else if (bigisayarHamlesi.toLowerCase() == "taş") {
    alert("Berabere " +"karşı tarafın hamlesi: " +bigisayarHamlesi);
  }
}
else if (secim.toLowerCase() == "kağıt") {
  if (bigisayarHamlesi.toLowerCase() == "kağıt")
    alert("Berabere. " + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  else if (bigisayarHamlesi.toLowerCase() == "makas") {
    alert("Kaybettiniz. " + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  } else if (bigisayarHamlesi.toLowerCase() == "taş") {
    alert("Kazandınız." + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  }
}

else if (secim.toLowerCase() == "makas") {
  if (bigisayarHamlesi.toLowerCase() == "kağıt")
    alert("kazandınız. " + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  else if (bigisayarHamlesi.toLowerCase() == "makas") {
    alert("berabere. " + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  } else if (bigisayarHamlesi.toLowerCase() == "taş") {
    alert("kaybettiniz." + "karşı tarafın hamlesi: " + bigisayarHamlesi);
  }
}
else {
  alert("Lütfen doğru seçim yapınız!!");
}


