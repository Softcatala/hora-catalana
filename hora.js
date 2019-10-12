

// Sistema campanar
function get_time(hour, minute) {

    if (minute > 10)
        hour = hour + 1;

    if (minute == 0) return get_article(hour) + " " + get_hour(hour) + " en punt";
    if (minute == 1) return get_article(hour) + " " + get_hour(hour) + " i un minut";
    if (minute == 2) return get_article(hour) + " " + get_hour(hour) + " i dos minuts";
    if (minute == 3) return get_article(hour) + " " + get_hour(hour) + " i tres minuts";
    if (minute == 4) return get_article(hour) + " " + get_hour(hour) + " i quatre minuts";
    if (minute == 5) return get_article(hour) + " " + get_hour(hour) + " i cinc minuts";
    if (minute == 6) return get_article(hour) + " " + get_hour(hour) + " i sis minuts";
    if (minute == 7) return "Mig quart " + get_de(hour) + " " + get_hour(hour);
    if (minute == 8) return get_article(hour) + " " + get_hour(hour) + " i vuit minuts";
    if (minute == 9) return  get_article(hour) + " " + get_hour(hour) + " i nou minuts";
    if (minute == 10) return "Cinc minuts per a un quart " + get_de(hour) + " " + get_hour(hour);
    if (minute == 11) return "Quatre minuts per a un quart " + get_de(hour) + " " + get_hour(hour);
    if (minute == 12) return "Tres minuts per a un quart " + get_de(hour) + " " + get_hour(hour);
    if (minute == 13) return "Dos minuts per a un quart " + get_de(hour) + " " + get_hour(hour);
    if (minute == 14) return "Un minut per a un quart " + get_de(hour) + " " + get_hour(hour);
    if (minute == 15) return "Un quart " + get_de(hour) + " " + get_hour(hour);

    if (minute == 16) return "Un quart i un " + get_de(hour) + " " + get_hour(hour);
    if (minute == 17) return "Un quart i dos " + get_de(hour) + " " + get_hour(hour);
    if (minute == 18) return "Un quart i tres " + get_de(hour) + " " + get_hour(hour);
    if (minute == 19) return "Un quart i quatre " + get_de(hour) + " " + get_hour(hour);
    if (minute == 20) return "Un quart i cinc " + get_de(hour) + " " + get_hour(hour);
    if (minute == 21) return "Un quart i sis " + get_de(hour) + " " + get_hour(hour);
    if (minute == 22) return "Un quart i mig " + get_de(hour) + " " + get_hour(hour);
    if (minute == 23) return "Dos minuts per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 24) return "Tres minuts per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 25) return "Cinc minuts per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 26) return "Quatre minuts per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 27) return "Tres minuts per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 28) return "Dos minuts per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 29) return "Un minut per a dos quarts " + get_de(hour)  + " " + get_hour(hour);
    if (minute == 30) return "Dos quarts " + get_de(hour) + " " + get_hour(hour);

    if (minute == 31) return "Dos quarts i un minut " + get_de(hour) + " " + get_hour(hour);
    if (minute == 32) return "Dos quarts i dos minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 33) return "Dos quarts i tres minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 34) return "Dos quarts i quatre minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 35) return "Dos quarts i cinc minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 36) return "Dos quarts i sis minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 37) return "Dos quarts i mig " + get_de(hour) + " " + get_hour(hour);
    if (minute == 38) return "Set minuts per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 39) return "Sis minuts per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 40) return "Cinc minuts per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 41) return "Quatre minuts per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 42) return "Tres minuts per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 43) return "Dos minuts per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 44) return "Un minut per a tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 45) return "Tres quarts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 46) return "Tres quarts i un minut " + get_de(hour) + " " + get_hour(hour);
    if (minute == 47) return "Tres quarts i dos minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 48) return "Tres quarts i tres minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 49) return "Tres quarts i quatre minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 50) return "Tres quarts i cinc minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 51) return "Tres quarts i sis minuts " + get_de(hour) + " " + get_hour(hour);
    if (minute == 52) return "Tres quarts i mig " + get_de(hour) + " " + get_hour(hour);
    if (minute == 53) return "Set minuts per a " + get_article_lower(hour) + " " + get_hour(hour);
    if (minute == 54) return "Sis minuts per a " + get_article_lower(hour) + " " + get_hour(hour);
    if (minute == 55) return "Cinc minuts per a " + get_article_lower(hour) + " " + get_hour(hour);
    if (minute == 56) return "Quatre minuts per a " + get_article_lower(hour) + " " + get_hour(hour);
    if (minute == 57) return "Tres minuts per a " + get_article_lower(hour) + " " + get_hour(hour);
    if (minute == 58) return "Dos minuts per a " + get_article_lower(hour) + " " + get_hour(hour);
    if (minute == 59) return "Un minut per a " + get_article_lower(hour) + " " + get_hour(hour);


    return "i molt de temps";
}

function get_de(hour) {

    if (hour == 1 || hour == 13)
        return "d'";

    return "de";
}


function get_article(hour) {

    if (hour == 1 || hour == 13)
        return "La";

    return "Les";
}

function get_article_lower(hour) {

    var s = get_article(hour);
    return s.charAt(0).toLowerCase() + s.slice(1)
}


function get_hour(hour) {

    if (hour == 1 || hour == 13) return "una";
    if (hour == 2 || hour == 14) return "dues";
    if (hour == 3 || hour == 15) return "tres";
    if (hour == 4 || hour == 16) return "quatre";
    if (hour == 5 || hour == 17) return "cinc";
    if (hour == 6 || hour == 18) return "sis";
    if (hour == 7 || hour == 19) return "set";
    if (hour == 8 || hour == 20) return "vuit";
    if (hour == 9 || hour == 21) return "nou";
    if (hour == 10 || hour == 22) return "deu";
    if (hour == 11 || hour == 23) return "onze";
    if (hour == 12 || hour == 0) return "dotze"

    return "no sé noi"
}

function get_text_hora(hours, minutes, seconds) {
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
}


function start_timer() {
    
    const interval = setInterval(function() {

            var today = new Date();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            var seconds = today.getSeconds();
    
            var text = get_time(hours, minutes) + (" (sistema campanar)");

            var element = document.getElementById("hora");
            element.innerHTML = get_text_hora(hours, minutes, seconds);

            element = document.getElementById("text");
            element.innerHTML = text;
/**
  
            var list = "";
            for (min = 0; min <= 60; min++) {
                if (min < 10) {
                    var m = "0" + min;
                }
                else {
                    var m = min;
                }

                list += hours + ":" + m + " > " + get_time(hours, min) + "<br>";
            }
            element.innerHTML = list;
**/

         }, 1000);
}

