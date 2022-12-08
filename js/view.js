
let furnitures = {
    "1": {
        "width": 1,
        "height": 2,
        "image_path": "../static/media/furnitures/bed.png"
    },
	"2": {
		"width": 2,
		"height": 1,
		"image_path": "../static/media/furnitures/table.png"
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

        dom_furniture_index()
    }

    // 家具配置の入力
    if (mouseIsPressed && !action && furniture_view) {
        if ((mouseX > furniture_w/2 && mouseX < canvas_size_w-furniture_w/2) && (mouseY > furniture_h/2 && mouseY < canvas_size_h-furniture_h/2)) {
            furniture_x = mouseX - (furniture_w / 2)
            furniture_y = mouseY - (furniture_h / 2)
        }
    }

    // 家具配置の出力
    if (move_furniture) {
        image(furniture_images[move_furniture], furniture_x, furniture_y, furniture_w, furniture_h)
        
        if (!furniture_view) {
            furniture_view = true
        }
    }

    // cubeの制御
    const angle_dead = 5
    if (action == "move_cube_angle") {
        if (cube_angle >= rel_angle-angle_dead && cube_angle <= rel_angle+angle_dead) {
            move_cube_destination()
        }
    }

    const index_dead = 50
    if (action == "move_cube_destination") {
        if (cube_x >= destination_sensor_x-index_dead && cube_x <= destination_sensor_x+index_dead && cube_y >= destination_sensor_y-index_dead && cube_y <= destination_sensor_y+index_dead) {
            cube.stop()
            action = null
            furniture_view = false
        }
    }
}

function get_furniture_x () {
    let x = null
    if (cube_x) {
        x = cube_x
    }else {
        x = (sessionStorage.getItem("room_width") + 45) / 2
    }

    furniture_x = (x * factor) - (furniture_w / 2) - mat_start_x
}

function get_furniture_y () {
    let y = null
    if (cube_y) {
        y = cube_y
    } else {
        y = (sessionStorage.getItem("room_height") + 45) / 2
    }

    furniture_y = (y * factor) - (furniture_h / 2) - mat_start_y
}

function dom_furniture_index () {
    const furniture_id_elem = document.getElementById("furniture_id")
    const furniture_x_elem = document.getElementById("furniture_x")
    const furniture_y_elem = document.getElementById("furniture_y")

    furniture_id_elem.value = move_furniture
    furniture_x_elem.value = furniture_x
    furniture_y_elem.value = furniture_y
}
