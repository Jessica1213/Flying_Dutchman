/**
 * Created by Jesper on 2015-12-24.
 */

function signIn(user, pw) {
    var currentuser;
    userList().forEach(function (currentValue) {
        if ((currentValue.username === user) && (currentValue.username === pw)) {
            currentuser = currentValue;
        };
    })
};

function userList() {
    return [
        {
            "username": "ankov",
            "first_name": "�ngela",
            "last_name": "Kov�?",
            "assets": "-1340"
        },
        {
            "username": "",
            "first_name": "",
            "last_name": "",
            "assets": "-1248"
        },
        {
            "username": "jovsit",
            "first_name": "Jove",
            "last_name": "Sitz",
            "assets": "-977"
        },
        {
            "username": "svetor",
            "first_name": "Svetlana",
            "last_name": "Torres",
            "assets": "-774"
        },
        {
            "username": "liatra",
            "first_name": "Liam",
            "last_name": "Traverso",
            "assets": "-645"
        },
        {
            "username": "livzha",
            "first_name": "Livianus",
            "last_name": "Zhao",
            "assets": "-260"
        },
        {
            "username": "lasnic",
            "first_name": "Lasse",
            "last_name": "Nicholson",
            "assets": "-250"
        },
        {
            "username": "kenolg",
            "first_name": "Kenan",
            "last_name": "Olguin",
            "assets": "-187"
        },
        {
            "username": "dansch",
            "first_name": "Danna",
            "last_name": "Schermer",
            "assets": "-185"
        },
        {
            "username": "elepic",
            "first_name": "Elektra",
            "last_name": "Pickle",
            "assets": "-185"
        },
        {
            "username": "aqulyn",
            "first_name": "Aquilina",
            "last_name": "Lyndon",
            "assets": "-175"
        },
        {
            "username": "gollan",
            "first_name": "Golnar",
            "last_name": "Langley",
            "assets": "-150"
        },
        {
            "username": "felbar",
            "first_name": "Felix",
            "last_name": "Barto�",
            "assets": "-125"
        },
        {
            "username": "einyam",
            "first_name": "Einarr",
            "last_name": "Yamauchi",
            "assets": "-115"
        },
        {
            "username": "hyrlap",
            "first_name": "Hyram",
            "last_name": "Lapointe",
            "assets": "-105"
        },
        {
            "username": "hirchr",
            "first_name": "Hiram",
            "last_name": "Christopherson",
            "assets": "-105"
        },
        {
            "username": "anddar",
            "first_name": "Andrea",
            "last_name": "Darzi",
            "assets": "-85"
        },
        {
            "username": "sulpen",
            "first_name": "Sulis?aw",
            "last_name": "Pender",
            "assets": "-60"
        },
        {
            "username": "jorass",
            "first_name": "Jory",
            "last_name": "Assies",
            "assets": "-55"
        },
        {
            "username": "giamik",
            "first_name": "Giacinta",
            "last_name": "Mikkelsen",
            "assets": "-50"
        },
        {
            "username": "steber",
            "first_name": "Stefan",
            "last_name": "Bernard",
            "assets": "-50"
        },
        {
            "username": "sulstr",
            "first_name": "Sulayman",
            "last_name": "Street",
            "assets": "-40"
        },
        {
            "username": "karbly",
            "first_name": "Karme",
            "last_name": "Blythe",
            "assets": "-40"
        },
        {
            "username": "valpag",
            "first_name": "Valeria",
            "last_name": "Pagani",
            "assets": "-35"
        },
        {
            "username": "bratam",
            "first_name": "Branko",
            "last_name": "Tam�s",
            "assets": "-30"
        },
        {
            "username": "shapet",
            "first_name": "Sharma",
            "last_name": "Pet?fi",
            "assets": "-30"
        },
        {
            "username": "marsti",
            "first_name": "Marin",
            "last_name": "Stieber",
            "assets": "-30"
        },
        {
            "username": "edraug",
            "first_name": "Edric",
            "last_name": "Augustin",
            "assets": "-25"
        },
        {
            "username": "symzim",
            "first_name": "Symeonu",
            "last_name": "Zimmermann",
            "assets": "-25"
        },
        {
            "username": "domolh",
            "first_name": "Domen",
            "last_name": "Olhouser",
            "assets": "-20"
        },
        {
            "username": "tohei",
            "first_name": "T�fa",
            "last_name": "Heinrich",
            "assets": "-20"
        },
        {
            "username": "nikpro",
            "first_name": "Nika",
            "last_name": "Proulx",
            "assets": "-20"
        },
        {
            "username": "fercrn",
            "first_name": "Ferdin�nd",
            "last_name": "Crncevic",
            "assets": "-15"
        },
        {
            "username": "pomgra",
            "first_name": "Pompeius",
            "last_name": "Graner",
            "assets": "0"
        },
        {
            "username": "krysan",
            "first_name": "Krystyna",
            "last_name": "Santiago",
            "assets": "0"
        },
        {
            "username": "yevowe",
            "first_name": "Yevpraksiya",
            "last_name": "Owens",
            "assets": "0"
        },
        {
            "username": "benfau",
            "first_name": "Bento",
            "last_name": "Faucher",
            "assets": "0"
        },
        {
            "username": "orapan",
            "first_name": "Orabela",
            "last_name": "Panders",
            "assets": "0"
        },
        {
            "username": "teojen",
            "first_name": "Teodora",
            "last_name": "Jensen",
            "assets": "0"
        },
        {
            "username": "oludra",
            "first_name": "Oluwatoyin",
            "last_name": "Drake",
            "assets": "0"
        },
        {
            "username": "ceznew",
            "first_name": "Cezar",
            "last_name": "Newman",
            "assets": "0"
        },
        {
            "username": "maihon",
            "first_name": "Maiken",
            "last_name": "Honda",
            "assets": "0"
        },
        {
            "username": "jershi",
            "first_name": "Jerry",
            "last_name": "Shizuka",
            "assets": "0"
        },
        {
            "username": "jeaats",
            "first_name": "Jeanne",
            "last_name": "Atses",
            "assets": "0"
        },
        {
            "username": "larsch",
            "first_name": "Lara",
            "last_name": "Schenck",
            "assets": "5"
        },
        {
            "username": "molbab",
            "first_name": "Molle",
            "last_name": "Babi?",
            "assets": "5"
        },
        {
            "username": "schjou",
            "first_name": "Schwanhild",
            "last_name": "Joubert",
            "assets": "10"
        },
        {
            "username": "janhei",
            "first_name": "Jancsi",
            "last_name": "Heiman",
            "assets": "15"
        },
        {
            "username": "marpug",
            "first_name": "Mariana",
            "last_name": "Pugliese",
            "assets": "20"
        },
        {
            "username": "olislu",
            "first_name": "Oliver",
            "last_name": "Slusarski",
            "assets": "20"
        },
        {
            "username": "kaywan",
            "first_name": "Kaye",
            "last_name": "Wang",
            "assets": "25"
        },
        {
            "username": "jacabb",
            "first_name": "Jacob",
            "last_name": "Abbatelli",
            "assets": "25"
        },
        {
            "username": "rewes",
            "first_name": "R�gulo",
            "last_name": "Westerberg",
            "assets": "25"
        },
        {
            "username": "eusgor",
            "first_name": "Eustachius",
            "last_name": "Gorski",
            "assets": "45"
        },
        {
            "username": "katfab",
            "first_name": "Katrien",
            "last_name": "Fabre",
            "assets": "50"
        },
        {
            "username": "muhtof",
            "first_name": "Muhammed",
            "last_name": "Toft",
            "assets": "95"
        },
        {
            "username": "aubbla",
            "first_name": "Aubrey",
            "last_name": "Blackwood",
            "assets": "110"
        },
        {
            "username": "zulgor",
            "first_name": "Zuleika",
            "last_name": "Gorecki",
            "assets": "120"
        },
        {
            "username": "prabar",
            "first_name": "Prabhakar",
            "last_name": "Bartos",
            "assets": "170"
        },
        {
            "username": "pauaaf",
            "first_name": "Paula",
            "last_name": "Aafjes",
            "assets": "175"
        },
        {
            "username": "sivan",
            "first_name": "S?d?ka",
            "last_name": "Van",
            "assets": "235"
        },
        {
            "username": "ervtod",
            "first_name": "Ervin",
            "last_name": "Todd",
            "assets": "255"
        },
        {
            "username": "saskru",
            "first_name": "Sa�a",
            "last_name": "Kr�ger",
            "assets": "290"
        },
        {
            "username": "didwat",
            "first_name": "Dido",
            "last_name": "Waters",
            "assets": "395"
        },
        {
            "username": "felfra",
            "first_name": "Felicia",
            "last_name": "Franklin",
            "assets": "510"
        },
        {
            "username": "aamsta",
            "first_name": "Aamu",
            "last_name": "Stankic",
            "assets": "1105"
        },
        {
            "username": "olubra",
            "first_name": "Oluwakanyinsola",
            "last_name": "Braun",
            "assets": "999995"
        }
    ]
}