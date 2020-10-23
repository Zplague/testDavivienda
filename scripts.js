function tooltip() {
    var tooltip = document.getElementById('tooltip')

    if (tooltip.style.display === "none") {
        tooltip.style.display = "flex";
    } else {
        tooltip.style.display = "none";
    }
}

function offers() {
    var overlay = document.getElementById('overlay')
    var modal = document.getElementById('modal')

    overlay.style.display = "flex"
    modal.style.display = "flex"
}
    
function view() {
    var unfold = document.getElementById('unfold')
    var icon = document.getElementById('icon')

    if (unfold.classList.contains('payout__cover-unfold--reveal')) {
        unfold.classList.remove("payout__cover-unfold--reveal")
        icon.style.transform = "rotate(180deg)"

    } else {
        unfold.classList.add("payout__cover-unfold--reveal")
        icon.style.transform = "rotate(0deg)"
    }
}

