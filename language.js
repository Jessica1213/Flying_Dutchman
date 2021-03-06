/**
 * Created by jessica on 12/4/15.
 */
function change_lang(lan_index)
{
    var myLangArray;
    switch(lan_index)
    {
        case 1:
            myLangArray = Lang_tw;
            break;
        case 2:
            myLangArray = Lang_se;
            break;
        default:
            myLangArray = Lang_en;
            break;
    }
    document.getElementById('Title').innerHTML = myLangArray[0];
    document.getElementById('Search').innerHTML = myLangArray[1];
    document.getElementById('Instruction').innerHTML = myLangArray[2];
    document.getElementById('Shoppingcart').innerHTML = myLangArray[3];
    document.getElementById('PriceTotal').innerHTML = myLangArray[4];
    document.getElementById('Pay').innerHTML = myLangArray[5];
    document.getElementById('Undo').innerHTML = myLangArray[6];
    document.getElementById('Redo').innerHTML = myLangArray[7];
}

//Taiwan
Lang_tw = new Array();
Lang_tw[0] = "想喝什麼啤酒？！";
Lang_tw[1] = "搜尋";
Lang_tw[2] = "將想要的啤酒托移到購物車";
Lang_tw[3] = "購物車";
Lang_tw[4] = "總價 : ";
Lang_tw[5] = "現在結帳";
Lang_tw[6] = "undo"
Lang_tw[7] = "redo"

//English
Lang_en = new Array();
Lang_en[0] = "Place your order";
Lang_en[1] = "Search";
Lang_en[2] = "Drag the beer you want to the order list";
Lang_en[3] = "Order List";
Lang_en[4] = "Total Price : ";
Lang_en[5] = "Pay now";
Lang_en[6] = "undo";
Lang_en[7] = "redo";

//Swedish
Lang_se = new Array();
Lang_se[0] = "Gör din beställning här";
Lang_se[1] = "Söka";
Lang_se[2] = "Dra ölen du vill ha till beställningslistan";
Lang_se[3] = "Beställningslista";
Lang_se[4] = "Totalbelopp : ";
Lang_se[5] = "Betala nu";
Lang_se[6] = "undo";
Lang_se[7] = "redo";

