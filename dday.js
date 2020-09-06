function getParam(sname) {

    var params = location.search.substr(location.search.indexOf("?") + 1);

    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {

        temp = params[i].split("=");

        if ([temp[0]] == sname) { sval = temp[1]; }

    }

    return sval;

}
var div = document.querySelector(".main_view");
var name_text = div.querySelector(".name");
var date_text = document.querySelector(".main_text");
str_date = decodeURI(getParam("date"));
arr_date = str_date.split('%2F');
name_text.innerHTML = decodeURI(arr_date[3]);

const date = new Date(Number(arr_date[0]), Number(arr_date[1])-1, Number(arr_date[2]));
var today = new Date();
today = today.getTime();
var dis = date - today;
console.log(dis);
var d = Math.floor(dis / (1000 * 60 * 60 * 24)) + 1;//일
if(d>0){
    date_text.innerHTML = "D-" + String(d);
}
if(d<0){
    date_text.innerHTML = "D+" + String(d*-1);
}
if(d==0){
    date_text.innerHTML = "D-DAY";
}