$(document).ready(function () 
{
    $('body').css('font-family', 'seto_font');
    let day_time = new Date('4/29/2023')
    let  da = new Date()
    let A= Math.abs(day_time-da)
    day = A/(1000 * 3600 * 24)
    days = Math.round(day)
    // days = 5 
    console.log(days)
    $("#day").html(days+"天");
    if (days<=10) 
    {
        $("#day").css('font-size', '23vh');
        $("#day").css('color', 'red');
        $('.public').css('top', '-5%');
    }
    switch (days) 
    {
        case 90:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 80:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 70:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 60:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 50:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 40:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 30:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 20:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 10:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 9:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 8:
            $(".p_public_text").html("倒數"+days+"天喔");
            break;
        case 7:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 6:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 5:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 4:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 3:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 2:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 1:
            $(".p_public_text").html("倒數"+days+"天喔<br>調整心情");
            break;
        case 0:
            $(".p_public_text").html("祝你考試加油!");
            break;
        default:
            $(".p_public_text").html("弟弟想你呦~❤️");
            break;
        }
    }
);