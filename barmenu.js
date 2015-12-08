/**
 * Created by jessica on 12/3/15.
 */
$(function () {

    $("#beerlist").show();

    //$(getFoods("starter", getFoodData())).appendTo("#starter");
    //$(getFoods("main", getFoodData())).appendTo("#main");
    //$(getFoods("dessert", getFoodData())).appendTo("#dessert");
    //$(getFoods("drink", getFoodData())).appendTo("#drink");
    $(getAllMenu(getFoodData())).appendTo("#beerlist");

});


function getAllMenu(arr) {

    var temp = "";
    var types = ["starter", "main", "dessert", "drink"];
    var names = ["Starters","Main Courses", "Desserts", "Beverages"];
    len = types.length;

    for (var i = 0; i < len; i++) {
        //temp += '<strong>' + names[i] + '</strong><br><hr>';
        temp += getFoods(types[i], arr) +"<br>";

    }
    return temp;

}

function getFoods(type, arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].type == type) {
            out += '<div id="' + arr[i].id + '" draggable="true" ondragstart="drag(event)"><img src="beer.png" width="15%">' + arr[i].namn + ' <span id="' + "price" + i + '">' + arr[i].price + '</span></div>';
        }
    }
    return out;
}

function getFoodData() {
    return [
        {"namn": "Apple Pie", "price": "30", "type":"dessert", "id":"1"},
        {"namn": "Pasta Carbonara", "price": "45", "type": "starter", "id":"2"},
        {"namn": "Vegetable soup", "price": "45", "type": "starter", "id":"3"},
        {"namn": "Filet Mignon", "price": "115", "type": "main", "id":"4"},
        {"namn": "Pork Chops", "price": "65", "type": "main", "id":"5"},
        {"namn": "Fried Salmon", "price": "115", "type": "main", "id":"6"},
        {"namn": "Banana Split", "price": "30", "type": "dessert", "id":"7"},
        {"namn": "Heineken Green", "price": "50", "type": "drink", "id":"8"},
        {"namn": "Guinness III", "price":"60", "type": "drink", "id":"9"},
        {"namn": "Stallhagen Honungsöl", "price": "75", "type": "drink", "id":"10"}
    ]
}
