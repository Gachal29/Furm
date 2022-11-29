
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

const factor = (window.outerWidth - 64) / window.sessionStorage.getItem("room_width")
const canvas_size_w = factor * window.sessionStorage.getItem("room_width")
const canvas_size_h = factor * window.sessionStorage.getItem("room_height")

const one_meter = factor * 60
const mat_start_x = factor * 45
const mat_start_y = factor * 45

function setup () {
    const mat_canvas = document.getElementById("mat_canvas")

    const canvas = createCanvas(canvas_size_w, canvas_size_h)
    canvas.id("mat")
    canvas.parent(mat_canvas)
}

let action = null

let move_furniture = null
let furniture_w = null
let furniture_h = null

let furniture_x = null
let furniture_y = null

let furniture_view = false

function draw () {
    background("#ffffff")

    // 家具の初期配置を取得
    if (move_furniture && !furniture_view) {
        get_furniture_x()
        get_furniture_y()
        furniture_view = true
    }

    // 家具配置の入力
    if (mouseIsPressed && !action) {
        if ((mouseX > furniture_w/2 && mouseX < canvas_size_w-furniture_w/2) && (mouseY > furniture_h/2 && mouseY < canvas_size_h-furniture_h/2)) {
            furniture_x = mouseX - (furniture_w / 2)
            furniture_y = mouseY - (furniture_h / 2)
        }
    }

    // 家具配置の出力
    if (move_furniture) {
        image(furniture_images[move_furniture], furniture_x, furniture_y, furniture_w, furniture_h)
    }

    // cubeの制御
    const angle_err = 5
    if (action == "move_cube_angle") {
        if (cube_angle >= rel_angle-angle_err && cube_angle <= rel_angle+angle_err) {
            move_cube_destination()
        }
    }

    const coordinate_err = 30
    if (action == "move_cube_destination") {
        if (cube_x >= destination_sensor_x-coordinate_err && cube_x <= destination_sensor_x+coordinate_err && cube_y >= destination_sensor_y-coordinate_err && cube_y <= destination_sensor_y+coordinate_err) {
            cube.stop()
            action = null
            furniture_view = false
        }
    }
}

function get_furniture_x () {
    let x = mat_start_x + (furniture_w / 2)
    if (cube_x) {
        x = cube_x
    }

    furniture_x = (x * factor) - (furniture_w / 2) - mat_start_x
}

function get_furniture_y () {
    let y = mat_start_y + (furniture_h / 2)
    if (cube_y) {
        y = cube_y
    }

    furniture_y = (y * factor) - (furniture_h / 2) - mat_start_y
}
