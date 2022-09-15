const Zodiac= document.getElementById("zodiac");
const body= document.body;
const getcolor=()=>{
    switch (Zodiac.value) {
        case "Capricorn":
            body.style.backgroundColor="#45102e";
            break;
        case "Aquarius":
            body.style.backgroundColor="#2228e1";
            break;
        case "Pisces":
            body.style.backgroundColor="#0e8b0a";
            break;
        case "Aries":
            body.style.backgroundColor="#ff5722";
            break;
        case "Taurus":
            body.style.backgroundColor="#127d2b";
            break;
        case "Gemini":
            body.style.backgroundColor="#dbc115";
            break;
        case "Cancer":
            body.style.backgroundColor="#c1babc";
            break;
        case "Leo":
            body.style.backgroundColor="#dc9f10";
            break;
        case "Virgo":
            body.style.backgroundColor="#591127";
            break;
        case "Libra":
            body.style.backgroundColor="#80148e";
            break;
        case "Scorpio":
            body.style.backgroundColor="#2a1235";
            break;
        case "Sagittarius":
            body.style.backgroundColor="#8b2db3";
            break;
    
        default:
            body.style.backgroundColor="#d7f1e4";
            break;
    }
};

