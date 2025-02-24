var kullaniciAdi = prompt("Lütfen isminizi girin:");

function girisKontrolu(kullaniciAdi) {
  if (kullaniciAdi === null || kullaniciAdi.trim() === "") {
      alert("İsim boş bırakılamaz!!!.");
      return false;
  } else {
      alert("İsminiz: " + kullaniciAdi);
      return true;
  }
}

while (true) {
  if (girisKontrolu(kullaniciAdi)) {
      break;
  }
  kullaniciAdi = prompt("Lütfen isminizi girin:");
}

document.getElementById("myName").textContent = kullaniciAdi;

function guncelleZaman() {
  var tarihDiv = document.getElementById("date");
  var saatDiv = document.getElementById("myClock");
  var tarih = new Date();
  var gun = tarih.toLocaleDateString("tr-TR", { weekday: "long" });
  var ay = tarih.toLocaleDateString("tr-TR", { month: "long" });
  var yil = tarih.getFullYear();
  var saat = tarih.getHours();
  var dakika = tarih.getMinutes();
  var saniye = tarih.getSeconds();

  var zamanMetni = `${saat < 10 ? "0" : ""}${saat}:${dakika < 10 ? "0" : ""}${dakika}:${saniye < 10 ? "0" : ""}${saniye}`;

  var tarihMetni = `${tarih.getDate()} ${ay} ${yil} ${gun}`;

  tarihDiv.textContent = tarihMetni;
  saatDiv.textContent = zamanMetni;
}

// Zamanı başlangıçta güncelle
guncelleZaman();

// Her saniye zamanı güncelle
setInterval(guncelleZaman, 1000);

  