
function save_settings () {
    const width = document.getElementById("id_width")
    const height = document.getElementById("id_height")
    const mat_num = document.getElementById("id_mat_num")

    window.sessionStorage.setItem("room_width", width.value)
    window.sessionStorage.setItem("room_height", height.value)
    window.sessionStorage.setItem("room_mat_num", mat_num.value)
}
