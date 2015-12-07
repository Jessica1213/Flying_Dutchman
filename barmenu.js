/**
 * Created by jessica on 12/3/15.
 */


    $(getAllMenu(getBeerData())).appendTo("#beerlist");

function getAllMenu(arr) {

    var temp = "";
    var types = ["starter", "main", "dessert", "drink"];
    var names = ["Starters","Main Courses", "Desserts", "Beverages"];
    len = types.length;

    for (var i = 0; i < len; i++) {
        temp += '<strong>' + names[i] + '</strong><br><hr>';

        temp += getFoods(types[i], arr) +"<br>";

    }
    return temp;

}

function getFoods(type, arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].type == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name + ' <span id="' + "price" + i + '">' + arr[i].price + '</span></div>';
        }
    }
    return out;
}



function getFoodData() {
    return [
        {"name": "Apple Pie", "price": "30", "type":"dessert"},
        {"name": "Pasta Carbonara", "price": "45", "type": "starter"},
        {"name": "Vegetable soup", "price": "45", "type": "starter"},
        {"name": "Filet Mignon", "price": "115", "type": "main"},
        {"name": "Pork Chops", "price": "65", "type": "main"},
        {"name": "Fried Salmon", "price": "115", "type": "main"},
        {"name": "Banana Split", "price": "30", "type": "dessert"},
        {"name": "Heineken Green", "price": "50", "type": "drink"},
        {"name": "Guinness III", "price":"60", "type": "drink"},
        {"name": "Stallhagen Honungsöl", "price": "75", "type": "drink"}
    ]
}