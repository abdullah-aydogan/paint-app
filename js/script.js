const canvas = document.querySelector("canvas");
const toolButtons = document.querySelectorAll(".tool");
const context = canvas.getContext("2d");

let isDrawing = false;
let brushWidth = 5; // Fırça genişliği

window.addEventListener("load", () => { // Genişlik, yükseklik ayarı
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDraw = () => {

    isDrawing = true; // Çizim yapılırken çizim durumunu true yap

    context.beginPath();
    context.lineWidth = brushWidth;
}

const drawing = (e) => {

    if(!isDrawing) {
        return;
    }

    context.lineTo(e.offsetX, e.offsetY); // Mouse ile çizgi oluşturma
    context.stroke();
}

toolButtons.forEach(btn => {
    
    btn.addEventListener("click", () => {

        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        console.log(btn.id);
    });
});

canvas.addEventListener("mousedown", startDraw); // Mouse basılı tutulunca çizime başla.
canvas.addEventListener("mousemove", drawing); // Mouse sürükleyerek çizim yap.
canvas.addEventListener("mouseup", () => isDrawing = false); // Mouse basılmadıkça çizim durumu false