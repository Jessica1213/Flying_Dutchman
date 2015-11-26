/**
 * Created by jessica on 11/24/15.
 */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    //ev.dataCopy.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //var data = ev.dataCopy.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


