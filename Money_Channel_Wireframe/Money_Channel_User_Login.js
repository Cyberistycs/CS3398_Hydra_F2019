function displayDate() {

    var date = new Date();

    var mm = date.getMonth()+1;
    var dd = date.getDate();
    var yyyy = date.getFullYear();

    if (mm < 10){
        mm = '0' + mm;
    }

    if (dd < 10){
        dd = '0' + dd;
    }
    var html = "";

    html += "Welcome Back, Jane!<br>";
    html +=  mm + '/' + dd + '/' + yyyy;
    document.getElementById("showDate").innerHTML = html;

    setTimeout(displayDate, 1000);
}
