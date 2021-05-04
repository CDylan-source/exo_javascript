


function Valider(){

var name_entered = document.getElementById("name");
var date_entered = document.getElementById("date");
var re = new RegExp("^[a-zA-ZéèàêëÉÈÀçÇÊË]*(?:[-])?(?:[a-zA-ZéèàêëÉÈÀçÇÊË])*$");
var red = new RegExp("^[0-9]*$");

    if (re.test(name_entered.value)&&red.test(date_entered.value)){
        var age = 2021 - date_entered.value;
        if(age > 18){
        alert("Bonjour " + name_entered.value + ", tu as " +  age + " ans")}
        else{
            var maj = 18 - age;
           alert("Bonjour " + name_entered.value + ", tu as " +  age + " ans" + ". Courage, encore " + maj + " années avant la majorité !")

        }
    }
    else{
        document.getElementById('wrong').innerHTML = "Respectez le format !"
    }
    


}