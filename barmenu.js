/**
 * Created by jessica on 12/3/15.
 */
var allbeer = getBeerdata();
$(function () {
    $("#beerlist").show();
    $(getAllMenu(allbeer)).appendTo("#beerlist");

});

function getAllMenu(beerlist) {

    var temp = "";
 /* len = beerlist.length;
    for (var i = 0; i < len; i++)
    {
        temp += '<div id="' + beerlist[i].beer_id + '" draggable="true" ondragstart="drag(event)"><img src="resources/beer.png" width="10%">' + beerlist[i].namn +' <span class="price">' + beerlist[i].price + '</span></div>';
        temp += "<br>";
    }*/
    beerlist.forEach(function (currentValue) {
        temp += '<div id="' + currentValue.beer_id + '" draggable="true" ondragstart="drag(event)">' +
            '<img src="resources/beer.png" width="10%">' + currentValue.namn + " " + currentValue.namn2 + ", "
            + currentValue.pub_price + " SEK" + '</div>';
        temp += "<br>";
    });
    return temp;

}

function search(searchString) {
    searchString = searchString.toLowerCase();
    //alert(searchString);
    var results = $.map(allbeer, function(entry) {
        var match = (entry.namn.toLowerCase().indexOf(searchString) !== -1) || (entry.namn2.toLowerCase().indexOf(searchString) !== -1);
        //alert(match + " " + entry.namn + " " + entry.namn2 );
        return match ? entry : null;
    });
    //alert(results);
    $("#beerlist").empty();
    $(getAllMenu(results)).appendTo("#beerlist");
}





function getBeerdata() {
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
        },
        {
            "namn": "Bombardier",
            "namn2": "",
            "sbl_price": "20.90",
            "pub_price": "25",
            "beer_id": "152901",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Brewdog",
            "namn2": "5 A.M. Saint",
            "sbl_price": "20.10",
            "pub_price": "25",
            "beer_id": "150103",
            "count": "0",
            "price": "20.10"
        },
        {
            "namn": "BrewDog Dead Pony Club",
            "namn2": "",
            "sbl_price": "18.40",
            "pub_price": "20",
            "beer_id": "1191303",
            "count": "-1",
            "price": "18.10"
        },
        {
            "namn": "Brewdog Hardcore IPA",
            "namn2": "",
            "sbl_price": "28.90",
            "pub_price": "30",
            "beer_id": "159103",
            "count": "0",
            "price": "36.00"
        },
        {
            "namn": "Brewdog Punk IPA",
            "namn2": "",
            "sbl_price": "21.40",
            "pub_price": "25",
            "beer_id": "151503",
            "count": "6",
            "price": "19.90"
        },
        {
            "namn": "BrewDog Rip Tide",
            "namn2": "",
            "sbl_price": "27.90",
            "pub_price": "30",
            "beer_id": "162003",
            "count": "0",
            "price": "26.90"
        },
        {
            "namn": "BrewDog Trashy Blonde",
            "namn2": "",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "1158103",
            "count": "0",
            "price": "18.90"
        },
        {
            "namn": "Briccotondo",
            "namn2": "Barbera",
            "sbl_price": "79.00",
            "pub_price": "85",
            "beer_id": "277301",
            "count": "0",
            "price": "79.00"
        },
        {
            "namn": "Brooklyn",
            "namn2": "East India Pale Ale",
            "sbl_price": "23.90",
            "pub_price": "25",
            "beer_id": "168803",
            "count": "0",
            "price": "22.90"
        },
        {
            "namn": "Brooklyn Lager",
            "namn2": "",
            "sbl_price": "17.90",
            "pub_price": "20",
            "beer_id": "154803",
            "count": "2",
            "price": "16.90"
        },
        {
            "namn": "Cameleon",
            "namn2": "Selection Malbec",
            "sbl_price": "43.00",
            "pub_price": "45",
            "beer_id": "658102",
            "count": "0",
            "price": "43.00"
        },
        {
            "namn": "Campos Góticos",
            "namn2": "Tempranillo",
            "sbl_price": "49.00",
            "pub_price": "55",
            "beer_id": "209702",
            "count": "0",
            "price": "49.00"
        },
        {
            "namn": "Casillero del Diablo",
            "namn2": "Chardonnay",
            "sbl_price": "29.00",
            "pub_price": "35",
            "beer_id": "207504",
            "count": "0",
            "price": "30.00"
        },
        {
            "namn": "Ch Malavieille Alliance",
            "namn2": "",
            "sbl_price": "119.00",
            "pub_price": "125",
            "beer_id": "266201",
            "count": "0",
            "price": "119.00"
        },
        {
            "namn": "Château Pech-Latt",
            "namn2": "",
            "sbl_price": "99.00",
            "pub_price": "105",
            "beer_id": "223301",
            "count": "0",
            "price": "99.00"
        },
        {
            "namn": "Chilcas",
            "namn2": "Sauvignon Blanc",
            "sbl_price": "46.00",
            "pub_price": "50",
            "beer_id": "669702",
            "count": "196",
            "price": "45.00"
        },
        {
            "namn": "Chill Out Mountains",
            "namn2": "Malbec",
            "sbl_price": "69.00",
            "pub_price": "75",
            "beer_id": "614601",
            "count": "0",
            "price": "69.00"
        },
        {
            "namn": "Chimay blå",
            "namn2": "",
            "sbl_price": "29.90",
            "pub_price": "35",
            "beer_id": "165103",
            "count": "0",
            "price": "28.90"
        },
        {
            "namn": "Cidraie Pear",
            "namn2": "",
            "sbl_price": "20.00",
            "pub_price": "25",
            "beer_id": "180202",
            "count": "0",
            "price": "20.00"
        },
        {
            "namn": "Citra Pale Ale",
            "namn2": "",
            "sbl_price": "20.90",
            "pub_price": "25",
            "beer_id": "155103",
            "count": "0",
            "price": "20.90"
        },
        {
            "namn": "Coopers Best",
            "namn2": "Extra Stout",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "1127103",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Dr L",
            "namn2": "Riesling",
            "sbl_price": "81.00",
            "pub_price": "85",
            "beer_id": "721801",
            "count": "0",
            "price": "81.00"
        },
        {
            "namn": "Duvel",
            "namn2": "",
            "sbl_price": "25.50",
            "pub_price": "30",
            "beer_id": "165403",
            "count": "0",
            "price": "24.90"
        },
        {
            "namn": "Ecologica",
            "namn2": "Shiraz Malbec",
            "sbl_price": "69.00",
            "pub_price": "75",
            "beer_id": "651201",
            "count": "1",
            "price": "69.00"
        },
        {
            "namn": "Einbecker Brauherren Alkoholfrei",
            "namn2": "",
            "sbl_price": "9.90",
            "pub_price": "15",
            "beer_id": "191402",
            "count": "1",
            "price": "9.90"
        },
        {
            "namn": "El Cortejo",
            "namn2": "Sauvignon Blanc",
            "sbl_price": "34.00",
            "pub_price": "40",
            "beer_id": "601202",
            "count": "0",
            "price": "33.00"
        },
        {
            "namn": "El Coto",
            "namn2": "Blanco",
            "sbl_price": "37.00",
            "pub_price": "40",
            "beer_id": "278002",
            "count": "0",
            "price": "37.00"
        },
        {
            "namn": "Electric Nurse",
            "namn2": "Imperial Stout",
            "sbl_price": "34.90",
            "pub_price": "40",
            "beer_id": "8953903",
            "count": "1",
            "price": "34.90"
        },
        {
            "namn": "Erdinger",
            "namn2": "Weissbier Hefe",
            "sbl_price": "21.90",
            "pub_price": "25",
            "beer_id": "1120801",
            "count": "0",
            "price": "21.90"
        },
        {
            "namn": "Fentimans",
            "namn2": "Ginger Beer",
            "sbl_price": "22.50",
            "pub_price": "25",
            "beer_id": "196303",
            "count": "0",
            "price": "22.50"
        },
        {
            "namn": "Flying Dog",
            "namn2": "Dogtoberfest Märzen",
            "sbl_price": "25.90",
            "pub_price": "30",
            "beer_id": "1163903",
            "count": "0",
            "price": "25.90"
        },
        {
            "namn": "Flying Dog",
            "namn2": "Gonzo Imperial Porter",
            "sbl_price": "29.90",
            "pub_price": "35",
            "beer_id": "168303",
            "count": "0",
            "price": "29.90"
        },
        {
            "namn": "Franziskaner",
            "namn2": "Hefe-Weissbier",
            "sbl_price": "21.90",
            "pub_price": "25",
            "beer_id": "168701",
            "count": "0",
            "price": "20.50"
        },
        {
            "namn": "Freedom IPA",
            "namn2": "",
            "sbl_price": "27.40",
            "pub_price": "30",
            "beer_id": "8968701",
            "count": "0",
            "price": "27.00"
        },
        {
            "namn": "Fuller's ESB",
            "namn2": "",
            "sbl_price": "25.90",
            "pub_price": "30",
            "beer_id": "1140501",
            "count": "0",
            "price": "25.40"
        },
        {
            "namn": "Gambrinus",
            "namn2": "",
            "sbl_price": "16.50",
            "pub_price": "20",
            "beer_id": "1148901",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Guinness",
            "namn2": "Extra Stout",
            "sbl_price": "17.90",
            "pub_price": "20",
            "beer_id": "156103",
            "count": "1",
            "price": "16.90"
        },
        {
            "namn": "Hell",
            "namn2": "",
            "sbl_price": "25.90",
            "pub_price": "30",
            "beer_id": "1146001",
            "count": "0",
            "price": "23.80"
        },
        {
            "namn": "Hoegaarden",
            "namn2": "Wit-Blanche",
            "sbl_price": "17.40",
            "pub_price": "20",
            "beer_id": "156303",
            "count": "0",
            "price": "16.10"
        },
        {
            "namn": "Hofbräu München Oktoberfest",
            "namn2": "",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "1129801",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Hubert Beck",
            "namn2": "Réserve du Chevalier Pinot Gris",
            "sbl_price": "49.00",
            "pub_price": "55",
            "beer_id": "1210502",
            "count": "0",
            "price": "49.00"
        },
        {
            "namn": "il Conte",
            "namn2": "Montepulciano d'Abruzzo",
            "sbl_price": "38.00",
            "pub_price": "40",
            "beer_id": "232202",
            "count": "0",
            "price": "36.00"
        },
        {
            "namn": "il Nostro",
            "namn2": "Grecanico",
            "sbl_price": "57.00",
            "pub_price": "60",
            "beer_id": "2280301",
            "count": "0",
            "price": "57.00"
        },
        {
            "namn": "Innis & Gunn",
            "namn2": "Oak Aged Beer",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "1144703",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Innis & Gunn",
            "namn2": "Rum Finish Oak Aged Beer",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "1159803",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Jever Pilsener",
            "namn2": "",
            "sbl_price": "16.90",
            "pub_price": "20",
            "beer_id": "150601",
            "count": "-1",
            "price": "15.90"
        },
        {
            "namn": "Jever Pilsener",
            "namn2": "",
            "sbl_price": "12.90",
            "pub_price": "15",
            "beer_id": "150603",
            "count": "7",
            "price": "12.90"
        },
        {
            "namn": "Karlovacko",
            "namn2": "",
            "sbl_price": "17.80",
            "pub_price": "20",
            "beer_id": "151001",
            "count": "0",
            "price": "16.90"
        },
        {
            "namn": "Kasteel Triple",
            "namn2": "",
            "sbl_price": "40.80",
            "pub_price": "45",
            "beer_id": "8910403",
            "count": "0",
            "price": "27.50"
        },
        {
            "namn": "Königsmosel",
            "namn2": "Riesling",
            "sbl_price": "39.00",
            "pub_price": "45",
            "beer_id": "746902",
            "count": "0",
            "price": "39.00"
        },
        {
            "namn": "King Goblin",
            "namn2": "",
            "sbl_price": "26.90",
            "pub_price": "30",
            "beer_id": "150401",
            "count": "0",
            "price": "25.90"
        },
        {
            "namn": "Kiviks Astrakan Fläderblom",
            "namn2": "Äppelcider Halvtorr",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "187702",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Kiviks Astrakan",
            "namn2": "Torr Cider",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "181803",
            "count": "2",
            "price": "18.90"
        },
        {
            "namn": "Kiviks Williams",
            "namn2": "Päroncider Halvtorr",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "183203",
            "count": "0",
            "price": "18.90"
        },
        {
            "namn": "Kloster",
            "namn2": "",
            "sbl_price": "32.30",
            "pub_price": "35",
            "beer_id": "8967303",
            "count": "0",
            "price": "32.30"
        },
        {
            "namn": "Kung",
            "namn2": "",
            "sbl_price": "10.40",
            "pub_price": "15",
            "beer_id": "144612",
            "count": "0",
            "price": "10.60"
        },
        {
            "namn": "Kwak",
            "namn2": "",
            "sbl_price": "23.90",
            "pub_price": "25",
            "beer_id": "166403",
            "count": "0",
            "price": "23.90"
        },
        {
            "namn": "Lapin Kulta",
            "namn2": "",
            "sbl_price": "13.40",
            "pub_price": "15",
            "beer_id": "159412",
            "count": "0",
            "price": "13.10"
        },
        {
            "namn": "Leffe",
            "namn2": "Blonde",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "165903",
            "count": "0",
            "price": "18.90"
        },
        {
            "namn": "Leffe",
            "namn2": "Brune",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "133603",
            "count": "0",
            "price": "19.60"
        },
        {
            "namn": "Leitz Eins Zwei Dry",
            "namn2": "Riesling",
            "sbl_price": "99.00",
            "pub_price": "105",
            "beer_id": "582201",
            "count": "0",
            "price": "99.00"
        },
        {
            "namn": "Lindemans Bin 65",
            "namn2": "Chardonnay",
            "sbl_price": "45.00",
            "pub_price": "50",
            "beer_id": "210602",
            "count": "0",
            "price": "43.00"
        },
        {
            "namn": "Mahou Negra",
            "namn2": "",
            "sbl_price": "14.90",
            "pub_price": "20",
            "beer_id": "172303",
            "count": "0",
            "price": "15.20"
        },
        {
            "namn": "Mariestads",
            "namn2": "Alkoholfri",
            "sbl_price": "10.90",
            "pub_price": "15",
            "beer_id": "195202",
            "count": "1",
            "price": "10.90"
        },
        {
            "namn": "Mariestads Export",
            "namn2": "",
            "sbl_price": "13.90",
            "pub_price": "15",
            "beer_id": "120003",
            "count": "0",
            "price": "13.90"
        },
        {
            "namn": "Mariestads Export",
            "namn2": "",
            "sbl_price": "15.90",
            "pub_price": "20",
            "beer_id": "120301",
            "count": "0",
            "price": "15.40"
        },
        {
            "namn": "Mariestads Old Ox",
            "namn2": "",
            "sbl_price": "17.50",
            "pub_price": "20",
            "beer_id": "137901",
            "count": "2",
            "price": "17.50"
        },
        {
            "namn": "Mikkeller",
            "namn2": "American Dream",
            "sbl_price": "24.20",
            "pub_price": "30",
            "beer_id": "8966103",
            "count": "0",
            "price": "28.90"
        },
        {
            "namn": "Mikkeller",
            "namn2": "Drink'in The Sun",
            "sbl_price": "16.90",
            "pub_price": "20",
            "beer_id": "1199403",
            "count": "2",
            "price": "16.90"
        },
        {
            "namn": "Miller",
            "namn2": "Genuine Draft",
            "sbl_price": "14.90",
            "pub_price": "20",
            "beer_id": "157903",
            "count": "0",
            "price": "14.90"
        },
        {
            "namn": "Modus Hoperandi",
            "namn2": "India Pale Ale",
            "sbl_price": "22.90",
            "pub_price": "25",
            "beer_id": "153915",
            "count": "0",
            "price": "22.90"
        },
        {
            "namn": "Mountain Livin'",
            "namn2": "Pale Ale",
            "sbl_price": "24.90",
            "pub_price": "30",
            "beer_id": "8916315",
            "count": "0",
            "price": "25.20"
        },
        {
            "namn": "Nanny State",
            "namn2": "",
            "sbl_price": "12.90",
            "pub_price": "15",
            "beer_id": "194703",
            "count": "3",
            "price": "12.40"
        },
        {
            "namn": "Napa Smith",
            "namn2": "West Coast IPA",
            "sbl_price": "23.90",
            "pub_price": "25",
            "beer_id": "168103",
            "count": "0",
            "price": "23.90"
        },
        {
            "namn": "Newcastle Brown Ale",
            "namn2": "",
            "sbl_price": "15.70",
            "pub_price": "20",
            "beer_id": "153803",
            "count": "0",
            "price": "15.20"
        },
        {
            "namn": "Nils Oscar",
            "namn2": "India Ale",
            "sbl_price": "19.20",
            "pub_price": "25",
            "beer_id": "146403",
            "count": "0",
            "price": "18.90"
        },
        {
            "namn": "Old Speckled Hen",
            "namn2": "",
            "sbl_price": "14.90",
            "pub_price": "20",
            "beer_id": "135603",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Old Speckled Hen",
            "namn2": "",
            "sbl_price": "22.80",
            "pub_price": "25",
            "beer_id": "135601",
            "count": "0",
            "price": "22.80"
        },
        {
            "namn": "Omnipollo Leon",
            "namn2": "",
            "sbl_price": "49.90",
            "pub_price": "55",
            "beer_id": "169301",
            "count": "0",
            "price": "49.90"
        },
        {
            "namn": "Omnipollo",
            "namn2": "Nebuchadnezzar",
            "sbl_price": "29.90",
            "pub_price": "35",
            "beer_id": "123103",
            "count": "0",
            "price": "29.90"
        },
        {
            "namn": "Oppigårds Amarillo",
            "namn2": "",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "144203",
            "count": "0",
            "price": "19.70"
        },
        {
            "namn": "Oppigårds",
            "namn2": "Golden Ale",
            "sbl_price": "17.90",
            "pub_price": "20",
            "beer_id": "149003",
            "count": "2",
            "price": "17.90"
        },
        {
            "namn": "Oppigårds",
            "namn2": "Indian Tribute",
            "sbl_price": "22.50",
            "pub_price": "25",
            "beer_id": "141503",
            "count": "0",
            "price": "20.90"
        },
        {
            "namn": "Oppigårds",
            "namn2": "Thurbo Double IPA",
            "sbl_price": "26.30",
            "pub_price": "30",
            "beer_id": "8962903",
            "count": "1",
            "price": "26.30"
        },
        {
            "namn": "Paulaner",
            "namn2": "Hefe-Weissbier",
            "sbl_price": "20.90",
            "pub_price": "25",
            "beer_id": "155701",
            "count": "0",
            "price": "20.40"
        },
        {
            "namn": "Paulaner Oktoberfest",
            "namn2": "",
            "sbl_price": "21.90",
            "pub_price": "25",
            "beer_id": "1125001",
            "count": "0",
            "price": "21.90"
        },
        {
            "namn": "Paulaner",
            "namn2": "Weissbier Kristall",
            "sbl_price": "20.90",
            "pub_price": "25",
            "beer_id": "153001",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "Pilsner Urquell",
            "namn2": "",
            "sbl_price": "14.90",
            "pub_price": "20",
            "beer_id": "156603",
            "count": "2",
            "price": "14.90"
        },
        {
            "namn": "Pistonhead",
            "namn2": "Kustom Lager",
            "sbl_price": "9.90",
            "pub_price": "15",
            "beer_id": "145414",
            "count": "0",
            "price": "9.90"
        },
        {
            "namn": "Pistonhead",
            "namn2": "Plastic Fantastic",
            "sbl_price": "10.90",
            "pub_price": "15",
            "beer_id": "148803",
            "count": "0",
            "price": "11.90"
        },
        {
            "namn": "Poliziano Vino Nobile di Montepulciano",
            "namn2": "Viti Nuove",
            "sbl_price": "154.00",
            "pub_price": "160",
            "beer_id": "214401",
            "count": "0",
            "price": "149.00"
        },
        {
            "namn": "Primator",
            "namn2": "Premium Lager",
            "sbl_price": "10.90",
            "pub_price": "15",
            "beer_id": "1151503",
            "count": "0",
            "price": "9.90"
        },
        {
            "namn": "Primátor",
            "namn2": "Premium Dark",
            "sbl_price": "14.20",
            "pub_price": "20",
            "beer_id": "161503",
            "count": "0",
            "price": "13.90"
        },
        {
            "namn": "Rabarbernektar",
            "namn2": "",
            "sbl_price": "39.00",
            "pub_price": "45",
            "beer_id": "194203",
            "count": "0",
            "price": "39.00"
        },
        {
            "namn": "Rochefort 10",
            "namn2": "",
            "sbl_price": "39.90",
            "pub_price": "45",
            "beer_id": "162703",
            "count": "-1",
            "price": "39.90"
        },
        {
            "namn": "Running Duck",
            "namn2": "Sauvignon Blanc Semillon",
            "sbl_price": "75.00",
            "pub_price": "80",
            "beer_id": "202801",
            "count": "1",
            "price": "75.00"
        },
        {
            "namn": "Ruppertsberger Hofstück",
            "namn2": "Riesling",
            "sbl_price": "65.00",
            "pub_price": "70",
            "beer_id": "591401",
            "count": "2",
            "price": "65.00"
        },
        {
            "namn": "S:t Eriks",
            "namn2": "Oktoberfest",
            "sbl_price": "16.90",
            "pub_price": "20",
            "beer_id": "1125303",
            "count": "0",
            "price": "16.90"
        },
        {
            "namn": "S:t Eriks",
            "namn2": "Organic Ale",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "1162503",
            "count": "0",
            "price": "19.90"
        },
        {
            "namn": "S:t Eriks Pale Ale",
            "namn2": "",
            "sbl_price": "17.90",
            "pub_price": "20",
            "beer_id": "142003",
            "count": "0",
            "price": "17.90"
        },
        {
            "namn": "Samuel Adams",
            "namn2": "Black Lager",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "153503",
            "count": "0",
            "price": "16.60"
        },
        {
            "namn": "Samuel Adams",
            "namn2": "Boston Ale",
            "sbl_price": "19.90",
            "pub_price": "25",
            "beer_id": "164903",
            "count": "0",
            "price": "17.90"
        },
        {
            "namn": "Samuel Adams",
            "namn2": "Boston Lager",
            "sbl_price": "17.90",
            "pub_price": "20",
            "beer_id": "154603",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Sankt Anna",
            "namn2": "Riesling",
            "sbl_price": "49.00",
            "pub_price": "55",
            "beer_id": "212002",
            "count": "0",
            "price": "49.00"
        },
        {
            "namn": "Saxhyttegubbens Blåbär 100%",
            "namn2": "",
            "sbl_price": "69.90",
            "pub_price": "75",
            "beer_id": "196403",
            "count": "0",
            "price": "69.90"
        },
        {
            "namn": "Scarecrow",
            "namn2": "",
            "sbl_price": "24.90",
            "pub_price": "30",
            "beer_id": "1124601",
            "count": "0",
            "price": "24.50"
        },
        {
            "namn": "Shatler's",
            "namn2": "San Fransisco",
            "sbl_price": "20.00",
            "pub_price": "25",
            "beer_id": "192804",
            "count": "1",
            "price": "20.00"
        },
        {
            "namn": "Sierra Nevada",
            "namn2": "Pale Ale",
            "sbl_price": "23.50",
            "pub_price": "25",
            "beer_id": "152503",
            "count": "0",
            "price": "23.90"
        },
        {
            "namn": "Sierra Nevada",
            "namn2": "Torpedo Extra IPA",
            "sbl_price": "24.90",
            "pub_price": "30",
            "beer_id": "1152803",
            "count": "0",
            "price": "26.90"
        },
        {
            "namn": "Sigtuna East Coast Pale Ale",
            "namn2": "",
            "sbl_price": "18.90",
            "pub_price": "20",
            "beer_id": "149803",
            "count": "0",
            "price": "18.90"
        },
        {
            "namn": "Sleepy Bulldog",
            "namn2": "Summer Pale Ale",
            "sbl_price": "19.80",
            "pub_price": "25",
            "beer_id": "8817303",
            "count": "0",
            "price": "19.80"
        },
        {
            "namn": "Slottskällans",
            "namn2": "Barrel Aged Imperial Stout",
            "sbl_price": "40.30",
            "pub_price": "45",
            "beer_id": "8915103",
            "count": "0",
            "price": "39.80"
        },
        {
            "namn": "Slottskällans Imperial Stout",
            "namn2": "",
            "sbl_price": "28.70",
            "pub_price": "30",
            "beer_id": "135503",
            "count": "0",
            "price": "28.70"
        },
        {
            "namn": "Slottskällans Princess",
            "namn2": "",
            "sbl_price": "19.80",
            "pub_price": "25",
            "beer_id": "164103",
            "count": "0",
            "price": "24.90"
        },
        {
            "namn": "Slottskällans Red Ale",
            "namn2": "",
            "sbl_price": "20.70",
            "pub_price": "25",
            "beer_id": "8875603",
            "count": "1",
            "price": "20.70"
        },
        {
            "namn": "Sofiero Original",
            "namn2": "",
            "sbl_price": "9.50",
            "pub_price": "15",
            "beer_id": "122203",
            "count": "0",
            "price": "9.90"
        },
        {
            "namn": "Somersby",
            "namn2": "Apple Cider Organic",
            "sbl_price": "17.20",
            "pub_price": "20",
            "beer_id": "183502",
            "count": "0",
            "price": "16.90"
        },
        {
            "namn": "Somersby",
            "namn2": "Pear Cider",
            "sbl_price": "17.20",
            "pub_price": "20",
            "beer_id": "182402",
            "count": "0",
            "price": "16.90"
        },
        {
            "namn": "Spaten München",
            "namn2": "",
            "sbl_price": "17.90",
            "pub_price": "20",
            "beer_id": "1133301",
            "count": "0",
            "price": "16.40"
        },
        {
            "namn": "Spaten Oktoberfestbier",
            "namn2": "",
            "sbl_price": "20.60",
            "pub_price": "25",
            "beer_id": "1128101",
            "count": "0",
            "price": "20.60"
        },
        {
            "namn": "St Peter's Cream Stout",
            "namn2": "",
            "sbl_price": "29.90",
            "pub_price": "35",
            "beer_id": "167101",
            "count": "0",
            "price": "29.40"
        },
        {
            "namn": "St Peter's",
            "namn2": "G-Free Ale",
            "sbl_price": "36.30",
            "pub_price": "40",
            "beer_id": "157701",
            "count": "0",
            "price": "36.30"
        },
        {
            "namn": "Starobrno Premium",
            "namn2": "",
            "sbl_price": "13.50",
            "pub_price": "15",
            "beer_id": "1134103",
            "count": "2",
            "price": "12.90"
        },
        {
            "namn": "Staropramen",
            "namn2": "",
            "sbl_price": "16.40",
            "pub_price": "20",
            "beer_id": "167903",
            "count": "1",
            "price": "15.90"
        },
        {
            "namn": "Staropramen Dark",
            "namn2": "",
            "sbl_price": "16.40",
            "pub_price": "20",
            "beer_id": "163203",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Staropramen Granat",
            "namn2": "",
            "sbl_price": "16.40",
            "pub_price": "20",
            "beer_id": "160903",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Staropramen",
            "namn2": "Non-Alcoholic",
            "sbl_price": "12.40",
            "pub_price": "15",
            "beer_id": "193002",
            "count": "2",
            "price": "12.40"
        },
        {
            "namn": "Störtebeker 1402",
            "namn2": "",
            "sbl_price": "11.90",
            "pub_price": "15",
            "beer_id": "190002",
            "count": "0",
            "price": "10.90"
        },
        {
            "namn": "Störtebeker",
            "namn2": "Bock-Bier",
            "sbl_price": "16.90",
            "pub_price": "20",
            "beer_id": "1159903",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Stella Artois",
            "namn2": "",
            "sbl_price": "14.90",
            "pub_price": "20",
            "beer_id": "1137903",
            "count": "0",
            "price": "14.40"
        },
        {
            "namn": "Stoneleigh",
            "namn2": "Riesling",
            "sbl_price": "99.00",
            "pub_price": "105",
            "beer_id": "649801",
            "count": "192",
            "price": "104.00"
        },
        {
            "namn": "Stowford Press",
            "namn2": "",
            "sbl_price": "12.40",
            "pub_price": "15",
            "beer_id": "198902",
            "count": "5",
            "price": "12.90"
        },
        {
            "namn": "Strongbow",
            "namn2": "",
            "sbl_price": "18.50",
            "pub_price": "20",
            "beer_id": "181903",
            "count": "0",
            "price": "17.90"
        },
        {
            "namn": "Strongbow",
            "namn2": "",
            "sbl_price": "15.50",
            "pub_price": "20",
            "beer_id": "181902",
            "count": "0",
            "price": "15.50"
        },
        {
            "namn": "Svart",
            "namn2": "",
            "sbl_price": "20.70",
            "pub_price": "25",
            "beer_id": "1134803",
            "count": "0",
            "price": "20.70"
        },
        {
            "namn": "Thornbridge",
            "namn2": "Jaipur India Pale Ale",
            "sbl_price": "27.90",
            "pub_price": "30",
            "beer_id": "162601",
            "count": "0",
            "price": "27.90"
        },
        {
            "namn": "Troppo",
            "namn2": "Merlot Cabernet",
            "sbl_price": "44.00",
            "pub_price": "50",
            "beer_id": "218002",
            "count": "0",
            "price": "39.00"
        },
        {
            "namn": "Via del Campo",
            "namn2": "Blanco",
            "sbl_price": "64.00",
            "pub_price": "70",
            "beer_id": "645901",
            "count": "0",
            "price": "64.00"
        },
        {
            "namn": "Viña Maipo",
            "namn2": "Chardonnay",
            "sbl_price": "33.00",
            "pub_price": "35",
            "beer_id": "667102",
            "count": "0",
            "price": "33.00"
        },
        {
            "namn": "Weihenstephaner",
            "namn2": "Hefe Weissbier",
            "sbl_price": "20.90",
            "pub_price": "25",
            "beer_id": "152601",
            "count": "-1",
            "price": "19.90"
        },
        {
            "namn": "Weihenstephaner",
            "namn2": "Hefeweissbier Alkoholfrei",
            "sbl_price": "12.90",
            "pub_price": "15",
            "beer_id": "192201",
            "count": "2",
            "price": "12.90"
        },
        {
            "namn": "Wisby",
            "namn2": "Klosteröl",
            "sbl_price": "17.80",
            "pub_price": "20",
            "beer_id": "140003",
            "count": "0",
            "price": "16.90"
        },
        {
            "namn": "Wyld Wood",
            "namn2": "Organic",
            "sbl_price": "27.90",
            "pub_price": "30",
            "beer_id": "186602",
            "count": "0",
            "price": "27.90"
        },
        {
            "namn": "Xide Jungle",
            "namn2": "Passionfruit Habanero",
            "sbl_price": "15.90",
            "pub_price": "20",
            "beer_id": "171903",
            "count": "1",
            "price": "15.90"
        },
        {
            "namn": "Xide Non Alco",
            "namn2": "Lemon Dragonfruit",
            "sbl_price": "13.90",
            "pub_price": "15",
            "beer_id": "192003",
            "count": "0",
            "price": "13.90"
        },
        {
            "namn": "Xide Pine Citrus",
            "namn2": "",
            "sbl_price": "15.90",
            "pub_price": "20",
            "beer_id": "178503",
            "count": "1",
            "price": "15.90"
        },
        {
            "namn": "Xide Wasabi Lemon",
            "namn2": "",
            "sbl_price": "15.90",
            "pub_price": "20",
            "beer_id": "182603",
            "count": "1",
            "price": "15.90"
        },
        {
            "namn": "Yeti",
            "namn2": "Imperial Stout",
            "sbl_price": "33.90",
            "pub_price": "35",
            "beer_id": "166703",
            "count": "0",
            "price": "31.90"
        },
        {
            "namn": "Young's Double Chocolate Stout",
            "namn2": "",
            "sbl_price": "26.90",
            "pub_price": "30",
            "beer_id": "160601",
            "count": "0",
            "price": "25.90"
        },
        {
            "namn": "Zeitgeist",
            "namn2": "Black Lager",
            "sbl_price": "18.50",
            "pub_price": "20",
            "beer_id": "157803",
            "count": "0",
            "price": "15.90"
        },
        {
            "namn": "Zeunerts",
            "namn2": "Höga Kusten",
            "sbl_price": "15.40",
            "pub_price": "20",
            "beer_id": "148001",
            "count": "1",
            "price": "15.40"
        },
        {
            "namn": "Zlatopramen",
            "namn2": " Premium",
            "sbl_price": "16.90",
            "pub_price": "20",
            "beer_id": "158201",
            "count": "0",
            "price": "16.90"
        }
    ]

}