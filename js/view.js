
let canvas
let device_size = window.outerWidth
function setup() {
    const mat_canvas = document.getElementById("mat_canvas")

    canvas = createCanvas(device_size-64, device_size-64)
    canvas.id("mat")
    canvas.parent(mat_canvas)
    background("#FFFFFF")
}

let furniture_img_path = "http://127.0.0.1:8000/static/media/furnitures/bed.png"
let furniture_img = null
const write_furniture = () => {
    console.log("test")
    furniture_img = loadImage(furniture_img_path)
    image(furniture_img, 0, 0)
}
