const api_url = "https://mcapi.us/server/status?ip=60.52.121.178"
var element = document.querySelector('#server-status')

window.onload = async function getstatus() {
    const response = await fetch(api_url)
    const data = await response.json()

    if (data["status"] == "success") {
        element.innerHTML = `<i class="fas fa-check-circle"></i> Server status: online`
    }
    else if (data["status"] == "error") {
        element.innerHTML = `<i class="fas fa-times-circle"></i> Server status: offline`
    }
}
