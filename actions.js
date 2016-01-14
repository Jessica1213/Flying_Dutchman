/**
 * Created by jessica on 11/24/15.
 */

var lastundo;
var lastredo;
//var orderlist = [];
var steplist = [];
var step = 0;

function reset(item) {
    item.id="";
    item.pub_price="";
    item.count="";
    item.name="";
}
function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = "copy";

    var data = ev.dataTransfer.getData("text");

    var newitem = document.getElementById(data).cloneNode(true);
    newitem.id = data;
    newitem.draggable = false;
    var len = getBeerdata().length;
    for(var j = 0; j < len; j++) {
        var tmp = allbeer[j];
        if(newitem.id == tmp.beer_id) {
            newitem.name = tmp.namn + " " + tmp.namn2;
            newitem.pub_price = tmp.pub_price;
            newitem.count = 1;
        }
    }
    lastundo = newitem;
    lastredo = newitem;

    var orderlist = [];
    if(step!=0) {
        orderlist = steplist[step-1].slice(0);
    }

    steplist.push(addToOrderlist(newitem, orderlist));

    console.log("step: " + step);
    var len = steplist.length;
    console.log("length: "+len);
    for(var l = 0; l<len; l++) {
        var len2 = steplist[l].length;
        console.log("length"+l+": "+len2);
        for(var k = 0; k<len2; k++) {
            console.log(steplist[l][k].name +" "+steplist[l][k].count);
        }
    }
    showOrderlist(steplist[step-1]);
    displayOrderlist(steplist[step-1]);

    //ev.target.appendChild(newitem); //把東西放過去 看得到圖案


}

function sumTotal(orderlist) { // Get the list of prices from the orders.

    var sum=0;
    var len = orderlist.length;
    for (var i=0; i<len; i++)
    {
        sum += orderlist[i].pub_price *orderlist[i].count;
    }
    console.log(sum);
    $("#totalprice").text(sum + " kr."); // Replace the content of the order with the new sum
}


function addToOrderlist(item, orderlist) {
    var len = orderlist.length;
    var neworderlist;
    if(len == 0) {
        neworderlist = orderlist.concat(item);
    }
    else {
        var k;
        neworderlist = orderlist.slice(0);
        for (k=0; k<len; k++) {
            console.log(neworderlist[k].name);
            if(neworderlist[k].id==item.id) {
                neworderlist[k].count++;
                console.log("same");
                break;
            }

        }
        if(k==len) {
            console.log("push");
            neworderlist = orderlist.concat(item);
        }
    }
    step++;
    return neworderlist;
}

function showOrderlist(orderlist) {

    for(var a = 0; a < orderlist.length; a++) {
        var temp=orderlist[a];
        for(var l = 0; l < temp.length; l++) {
            console.log(temp[l].name);
            console.log(temp[l].count);
        }
    }
}

function displayOrderlist(orderlist) {


    var tmp = "";
    var len = orderlist.length;
    for(var l = 0; l < len; l++) {
        tmp += '<div class="neworder"><img src="resources/beer.png" width="10%">'+ orderlist[l].name + '&nbsp;&nbsp;&nbsp;' + orderlist[l].count + '</div>';
    }
    sumTotal(orderlist);
    $(".neworder").remove();
    $(tmp).appendTo("#cartlist");
}

function undo() {

    step--;
    if(step>0) {
        displayOrderlist(steplist[step-1]);
    }
    else {
        step=0;
        displayOrderlist([]);
    }
    console.log("-------step "+step +"--------");
}

function redo() {

    step++;
    if(step<=steplist.length) {
        displayOrderlist(steplist[step-1]);
    }
    else {
        step = steplist.length;
    }
    console.log("-------step "+step +"--------");
}