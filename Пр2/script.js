let fotoNumber = 1;

function checkFoto () {
    let fotoImg = document.getElementById ("foto");
    fotoImg.src=`assets/foto${fotoNumber}.jpg`;
}

function next () {
    if (fotoNumber < 7) {
        fotoNumber++;
        checkFoto ();
        let Btn = document.getElementById ("previousButton");
        Btn.style.backgroundColor = "bisque";
        if (fotoNumber === 7) {
            let nextBtn = document.getElementById ("nextButton");
            nextBtn.style.backgroundColor = "gray";
        }
    }    
}

function previous () {
    if (fotoNumber > 1) {
        fotoNumber--;
        checkFoto ();
        let Btn = document.getElementById ("nextButton");
        Btn.style.backgroundColor = "bisque";
        if (fotoNumber === 1) {
            let previousBtn = document.getElementById ("previousButton");
            previousBtn.style.backgroundColor = "gray";
        }
    }
}
