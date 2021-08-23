function yesClick() {
    alert("<3");
}
function noHover() {
    let width = Math.round(Math.random() * innerWidth );
    let height = Math.round(Math.random() * innerHeight);
    document.getElementById("btnNo").style.left = width + "px";
    document.getElementById("btnNo").style.top = height + "px";
}