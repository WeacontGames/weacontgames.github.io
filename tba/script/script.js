// Popup'ı açma
function openPopup() {
    var popup = document.getElementById("video-popup");
    popup.classList.add("active");
}

// Popup'ı kapatma
function closePopup() {
    var popup = document.getElementById("video-popup");
    popup.classList.remove("active");
}

// Fragmanı izle butonuna tıklandığında popup'ı aç
document.getElementById("watch-trailer").addEventListener("click", function(event) {
    event.preventDefault();
    openPopup();
});

// Kapatma butonuna tıklandığında popup'ı kapat
document.getElementById("close-btn").addEventListener("click", function() {
    closePopup();
});


//

// Kapatma butonuna tıklandığında popup'ı kapat
document.getElementById("close-btn").addEventListener("click", function() {
    closePopup();
    var videoPlayer = document.getElementById("video-player");
    videoPlayer.src = ""; // Videoyu durdurmak için src özelliğini temizle
});


//


// Popup'ı açma
function openPopup() {
    var popup = document.getElementById("video-popup");
    popup.classList.add("active");
}

// Popup'ı kapatma
function closePopup() {
    var popup = document.getElementById("video-popup");
    popup.classList.remove("active");
    var videoPlayer = document.getElementById("video-player");
    videoPlayer.src = ""; // Videoyu durdurmak için src özelliğini temizle
}

// Fragmanı izle butonuna tıklandığında popup'ı aç
document.getElementById("watch-trailer").addEventListener("click", function(event) {
    event.preventDefault();
    openPopup();
    var videoPlayer = document.getElementById("video-player");
    videoPlayer.src = "https://www.youtube.com/embed/qAn1tWMIN6A?autoplay=1"; // Videoyu yükle
});

// Kapatma butonuna tıklandığında popup'ı kapat
document.getElementById("close-btn").addEventListener("click", function() {
    closePopup();
});
