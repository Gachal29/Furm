
// toioを動かす
let speed = 0
let rel_angle = 0
const move_cube_angle = async () => {
  action = "move_cube_angle"

  get_destination_sensor_index()

  const diff_x = destination_sensor_x - cube_x
  const diff_y = destination_sensor_y - cube_y

  rel_angle = Math.atan2(diff_y, diff_x) * 180 / Math.PI
  rel_angle = (rel_angle + 360) % 360

  speed = 10
  if(rel_angle < 180) {
    await cube.move(speed, speed * -1, 0)
  }else{
    await cube.move(speed * -1, speed, 0)
  }
}

const move_cube_destination = async () => {
  action = "move_cube_destination"

  speed = 15
  await cube.move(speed, speed, 0)
}

let destination_sensor_x = null
let destination_sensor_y = null
function get_destination_sensor_index () {
  let furniture_sensor_x = furniture_x + (furniture_w / 2) + mat_start_x
  let furniture_sensor_y = furniture_y + (furniture_h / 2) + mat_start_y

  destination_sensor_x = furniture_sensor_x / factor
  destination_sensor_y = furniture_sensor_y / factor
}
