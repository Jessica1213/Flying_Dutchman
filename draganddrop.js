/**
 * Created by jessica on 11/24/15.
 */

// A standard function. If you don't want any "extras", just use this
// as it is. It will prevent the default behaviour, which is not to accept
// any drops.
//
function allowDrop(ev) {
    ev.preventDefault();
}

// A standard function. I packages the ID of the source into the data
// transfer package.
//
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

// The drop function determines what happens when you drop the source item
// on the target. You can define any kind of action that you want to
// incorporate.
//
function drop(ev) {
    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    //
    ev.dataTransfer.dropEffect="copy";

    var data = ev.dataTransfer.getData("text");

    // If we use .cloneNode(true) the dragging results in a copy, rather than
    // a move of the source.
    //
    var nodeCopy = document.getElementById(data).cloneNode(true);

    nodeCopy.id = "newId";                 /* We cannot use the same ID */

    nodeCopy.draggable = "false";

    ev.target.appendChild(nodeCopy);

    // Get the ID of the target (the order).
    //
    var tempid = "#" + ev.target.id;

    // Get the HTML content of the order.
    //
    cartlist = $(tempid).html();

    // Get the prices from the order.
    //
    prices = getPrices(cartlist);

    // Make a some of the prices.
    //
    sum = sumTotal(prices);

    // Replace the content of the order with the new sum
    //
    $("#totalprice").text(sum + " kr.");
}

// Get the list of prices from the orders.
//
function getPrices (htmlString) {

    // We create a new jQuery object and put the HTML string into it.
    //
    var el = $( '<div></div>' );
    el.html(htmlString);

    // Then we can use jQuery to find all elements in this string.
    //
    return $('.price', el); // All the price elements
}


function sumTotal(data) {

    // reset the total sum;
    //
    var sum = 0;

    // Go through the elements and collect the internal texts.
    // Each string is parsed to an integer.
    //
    for (i = 0; i < data.length; i++) {
        sum += parseFloat(data[i].innerText);
    }
    return sum;
}

// Two support functions that connect a table with its order table.
//
function orderTable (orderId) {
    temp = orderId.split("");
    return "#t"+ temp[2];
}

function tableOrder (tableId) {
    temp = tableId.split("");
    return "#o"+ temp[2];
}




