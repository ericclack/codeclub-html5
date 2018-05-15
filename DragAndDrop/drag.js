function makeDraggable(className) {
    var elts = document.getElementsByClassName(className);
    for (i = 0; i < elts.length; i++) {
        elts[i].draggable = true;
        elts[i].ondragstart = dragging;
    }
}
    
function allowDrop(event) {
    event.preventDefault();
}

function dragging(event) {
    event.dataTransfer.setData("text", event.target.id)
}

function dropped(event) {
    var id = event.dataTransfer.getData("text");
    var elt = document.getElementById(id);
    event.target.appendChild(elt);
    elt.style.position = "absolute";
    elt.style.left = event.offsetX;
    elt.style.top = event.offsetY;

    // Take a look in the cosole for the details:
    console.log(event);
    console.log(elt);
}
