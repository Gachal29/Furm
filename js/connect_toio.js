const cube_w = 31.8
const cube_h = 31.8

let cube = null
let cube_x = null
let cube_y = null
let cube_angle = null

const connect_toio = async () => {
    console.log("connecting...")
    cube = await new toio.scanner.NearestScanner().start()

    // toioと接続する
    try {
        await cube.connect()
        select_furniture()
        console.log("connected!")
    }catch(error) {
        console.log("connecting error:", error)
    }

    // toioの座標を取得する
    cube.on("id:position-id", info => {
        cube_x = info.x
        cube_y = info.y
        cube_angle = info.angle
    })

    // toioの座標が取れない時
    cube.on('id:position-id-missed', () => {
        cube_x = null
        cube_y = null
    })
}


function select_furniture () {
    const select_furniture_elem = document.getElementById("select_furniture")
    move_furniture = select_furniture_elem.value
    console.log(move_furniture)

    furniture_w = factor * one_meter * furnitures[move_furniture]["width"]
    furniture_h = factor * one_meter * furnitures[move_furniture]["height"]
}
