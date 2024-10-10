function changePhoto() {
    const img = document.getElementById('groenLogoMagEigenlijkNiet');
    if (img.src.includes("/fotos/hzlogo-Photoroom.png")) {
        img.src = "/fotos/logohz.svg";
    } else {
        img.src = "/fotos/hzlogo-Photoroom.png";
    }
}