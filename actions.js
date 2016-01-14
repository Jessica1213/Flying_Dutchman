/**
 * Created by jessica on 11/24/15.
 */

var steplist = [];
var step = 0;

var a = [ 'apple', 'orange', 'grape' ];
b = a.slice(0);
b[0] = 'cola';
console.log("a: " +a);
console.log("b: " +b);

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

    steplist.push(addToOrderlist(newitem));

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


function addToOrderlist(item) {

    var orderlist = [];
    if(step!=0) {
        orderlist = steplist[step-1].slice(0);
    }
    var k;
    var neworderlist = JSON.parse(JSON.stringify(orderlist));
    var len = neworderlist.length;
    for (k=0; k<len; k++) {
        if(neworderlist[k].name==item.name) {
            neworderlist[k].count++;
            console.log("same");
            break;
        }
    }
    if(k==len) {
        console.log("push");
        neworderlist = orderlist.concat(item);
    }

    //for(var a = 0; a<len; a++) {
    //    console.log("****** old: "+orderlist[a].name + orderlist[a].count+"******");
    //}
    //var len2 = neworderlist.length;
    //for(var b = 0; b<len2; b++) {
    //    console.log("****** new: "+neworderlist[b].name + neworderlist[b].count+"******");
    //}

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

Array.prototype.clone = function() {
    return this.slice(0);
}

function deepCopy(obj) {
    if (typeof obj == 'object') {
        if (isArray(obj)) {
            var l = obj.length;
            var r = new Array(l);
            for (var i = 0; i < l; i++) {
                r[i] = deepCopy(obj[i]);
            }
            return r;
        } else {
            var r = {};
            r.prototype = obj.prototype;
            for (var k in obj) {
                r[k] = deepCopy(obj[k]);
            }
            return r;
        }
    }
    return obj;
}

var ARRAY_PROPS = {
    length: 'number',
    sort: 'function',
    slice: 'function',
    splice: 'function'
};

/**
 * Determining if something is an array in JavaScript
 * is error-prone at best.
 */
function isArray(obj) {
    if (obj instanceof Array)
        return true;
    // Otherwise, guess:
    for (var k in ARRAY_PROPS) {
        if (!(k in obj && typeof obj[k] == ARRAY_PROPS[k]))
            return false;
    }
    return true;
}