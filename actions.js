/**
 * Created by jessica on 11/24/15.
 */

var lastundo;
var lastredo;
var orderlist = [];
var step = 0;

function reset(item) {
    item.id="";
    item.price="";
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
                newitem.name = tmp.namn;
                newitem.price = tmp.price;
                newitem.count = 1;
            }
        }
        lastundo = newitem;
        lastredo = newitem;
        addToOrderlist(newitem);
        showOrderlist();
        displayOrderlist();

        //ev.target.appendChild(newitem); //把東西放過去 看得到圖案


}

function sumTotal() { // Get the list of prices from the orders.

    var sum=0;
    var len = orderlist.length;
    for (var i=0; i<len; i++)
    {
        var price =orderlist[i].price *orderlist[i].count;
        sum+=price;
    }
    console.log(sum);
    $("#totalprice").text(sum + " kr."); // Replace the content of the order with the new sum
}


function addToOrderlist(item) {
    var len = orderlist.length;
    if(len == 0) {
        orderlist.push(item);
    }
    else {

        var k;
        for (k=0; k<len; k++) {
            if(orderlist[k].id==item.id) {
                orderlist[k].count++;
                console.log("same");
                break;
            }

        }
        if(k==len) {
            console.log("push");
            orderlist.push(item);
        }
    }
    step+=1;

}

function showOrderlist() {

    for(var a = 0; a < orderlist.length; a++) {
        var temp=orderlist[a];
        for(var l = 0; l < temp.length; l++) {
            console.log(temp[l].name);
            console.log(temp[l].count);
        }
    }
}

function displayOrderlist() {


    var tmp = "";
    var len = orderlist.length;
    for(var l = 0; l < len; l++) {
            tmp += '<div class="neworder"><img src="beer.png" width="10%">'+ orderlist[l].name + '&nbsp;&nbsp;&nbsp;' + orderlist[l].count + '</div>';
            //tmp += + orderlist[l].name + orderlist[l].count;
    }
    sumTotal();
    //tmp += '<span id="PriceTotal"></span>'+total;

    $(".neworder").remove();
    $(tmp).appendTo("#cartlist");
}

function undo() {
    var len = orderlist.length;
    for(var i =0; i < len; i++)
    {
        if(lastundo.id==orderlist[i].id) {
            if(orderlist[i].count>1) orderlist[i].count-=1;
            else {
                orderlist.pop();
            }

        }

    }
    displayOrderlist();
    //lastredo=lastundo;
    //reset(lastundo);
}

function redo() {
    var len = orderlist.length;
    var i;
    for(i =0; i < len; i++)
    {
        if(lastredo.id==orderlist[i].id) {
            orderlist[i].count+=1;
            break;
        }
    }
    if(i==len) orderlist.push(lastredo);
    displayOrderlist();
    //reset(lastredo);
}