
var kullaniciAdi = prompt("Lütfen isminizi girin:");
document.getElementById("myName").textContent = kullaniciAdi;

function guncelleZaman() {
    var saatDiv = document.getElementById("myClock");
    var tarih = new Date();
    var gun = tarih.toLocaleDateString("tr-TR", { weekday: "long" });
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
  
    var zamanMetni = saat + ":" + (dakika < 10 ? "0" : "") + dakika + ":" + (saniye < 10 ? "0" : "") + saniye + " " + gun;
  
    saatDiv.textContent = zamanMetni;
  }
  
  // Zamanı başlangıçta güncelle
  guncelleZaman();
  
  // Her saniye zamanı güncelle
  setInterval(guncelleZaman, 1000);
  