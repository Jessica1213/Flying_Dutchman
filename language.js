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
    document.getElementById('L0').innerHTML = myLangArray[0];
    document.getElementById('L1').innerHTML = myLangArray[1];
    document.getElementById('L2').innerHTML = myLangArray[2];
    document.getElementById('L3').innerHTML = myLangArray[3];
    document.getElementById('L4').innerHTML = myLangArray[4];
    document.getElementById('L5').innerHTML = myLangArray[5];
}

//Taiwan
Lang_tw = new Array();
Lang_tw[0] = "想喝什麼啤酒？！";
Lang_tw[1] = "搜尋";
Lang_tw[2] = "將想要的啤酒托移到購物車";
Lang_tw[3] = "購物車";
Lang_tw[4] = "總價";
Lang_tw[5] = "現在結帳";

//English
Lang_en = new Array();
Lang_en[0] = "Place your order here";
Lang_en[1] = "Search";
Lang_en[2] = "Drag the beer you want to the order list";
Lang_en[3] = "Order List";
Lang_en[4] = "Total Price";
Lang_en[5] = "Pay now";

//Swedish
Lang_se = new Array();
Lang_se[0] = "Gör din beställning här";
Lang_se[1] = "Söka";
Lang_se[2] = "Dra öl du vill beställningslistan";
Lang_se[3] = "beställningslista";
Lang_se[4] = "Totalbelopp";
Lang_se[5] = "Betala nu";


