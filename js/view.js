
let move_furniture = ""
let furnitures = {
    "1": {
        "width": 1,
        "height": 2,
        "image_path": "http://127.0.0.1:8000/static/media/furnitures/bed.png"
    }
}

let furniture_images = {}
function preload () {
    let furniture_keys = Object.keys(furnitures)
    furniture_keys.forEach(key => {
        furniture_images[key] = loadImage(furnitures[key]["image_path"])
    })
}

const one_meter = 60

const factor = (window.outerWidth - 64) / window.sessionStorage.getItem("room_width")
const canvas_size_w = factor * window.sessionStorage.getItem("room_width")
const canvas_size_h = factor * window.sessionStorage.getItem("room_height")
function setup () {
    const mat_canvas = document.getElementById("mat_canvas")

    const canvas = createCanvas(canvas_size_w, canvas_size_h)
    canvas.id("mat")
    canvas.parent(mat_canvas)
}

let furniture_w = 0
let furniture_h = 0
let init_furniture_x = 0
let init_furniture_y = 0
let furniture_x = 0
let furniture_y = 0
function draw () {
    background("#ffffff")

    // 家具の初期位置の表示
    if (move_furniture && !init_furniture_x && !init_furniture_y) {
        init_furniture_x = furniture_x = 18
        init_furniture_y = furniture_y = 20
    }

    // 家具の配置を指定
    if (mouseIsPressed) {
        furniture_x = mouseX - furniture_w / 2
        furniture_y = mouseY - furniture_h / 2
    }

    // 家具を表示する
    if (move_furniture) {
        image(furniture_images[move_furniture], furniture_x, furniture_y, furniture_w, furniture_h)
    }
}
