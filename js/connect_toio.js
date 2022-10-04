// toioと接続する
let cube = null
let cube_x = null
let cube_y = null
let cube_angle = null
const connect_toio = async () => {
    console.log("connecting...")
    cube = await new toio.scanner.NearestScanner().start()

    try {
        await cube.connect()
        console.log("connected!")

        write_furniture()
    }catch(error) {
        console.log("connecting error:", error)
    }

    cube.on("id:position-id", info => {
        cube_x = info.x
        cube_y = info.y
        cube_angle = info.angle
    })

    cube.on('id:position-id-missed', () => {
        cube_x = null
        cube_y = null
    })
}