/**
 * Created by jessica on 12/3/15.
 */


    $(getAllMenu()).appendTo("#beerlist");

function getAllMenu(arr) {

    var temp = "";
    var types = ["starter", "main", "dessert", "drink"];
    //var names = ["Starters","Main Courses", "Desserts", "Beverages"];
    len = types.length;

    for (var i = 0; i < len; i++) {
        temp += '<strong>' + names[i] + '</strong><br><hr>';

        temp += getBeerData(types[i], arr) +"<br>";

    }
    return temp;

}

//function getFoods(type, arr) {
//    var out = "";
//    var i;
//    for (i = 0; i < arr.length; i++) {
//        if (arr[i].type == type) {
//            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">' + arr[i].name + ' <span id="' + "price" + i + '">' + arr[i].price + '</span></div>';
//        }
//    }
//    return out;
//}


function getBeerData() {
    return [
        {
            "namn": "Anchor Steam Beer",
            "namn2": "",
            "sbl_price": "23.90",
            "pub_price": "25",
            "beer_id": "157503",
            "count": "0",
            "price": "20.60"
        },
        {
            "namn": "Beck's",
            "namn2": "",
            "sbl_price": "14.90",
            "pub_price": "20",
            "beer_id": "154903",
            "count": "0",
            "price": "14.10"
        },
        {
            "namn": "Bedarö Bitter",
            "namn2": "",
            "sbl_price": "28.60",
            "pub_price": "30",
            "beer_id": "141001",
            "count": "0",
            "price": "28.20"
        },
        {
            "namn": "BEO",
            "namn2": "Apple Green Tea",
            "sbl_price": "12.90",
            "pub_price": "15",
            "beer_id": "197702",
            "count": "0",
            "price": "12.90"
        },
        {
            "namn": "BEO",
            "namn2": "Blood Orange Hibiscus",
            "sbl_price": "12.90",
            "pub_price": "15",
            "beer_id": "197302",
            "count": "0",
            "price": "12.90"
        },
        {
            "namn": "Bitburger",
            "namn2": "Premium",
            "sbl_price": "12.60",
            "pub_price": "15",
            "beer_id": "156503",
            "count": "0",
            "price": "11.90"
        },
        {
            "namn": "Black Tower",
            "namn2": "Rivaner",
            "sbl_price": "29.00",
            "pub_price": "35",
            "beer_id": "604504",
            "count": "198",
            "price": "29.00"
        },
        {
            "namn": "Blue Nun",
            "namn2": "",
            "sbl_price": "38.00",
            "pub_price": "40",
            "beer_id": "693502",
            "count": "-1",
            "price": "36.00"
        }
    ]
}