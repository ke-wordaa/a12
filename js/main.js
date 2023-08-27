$(document).ready(function () 
{
    let day_time = new Date('5/4/2024')
    let  da = new Date()
    let A= Math.abs(day_time-da)
    day = A/(1000 * 3600 * 24)
    
    days = Math.round(day)
    // days = 
    console.log(days)
    if (days >0)
    {
        $("#day").html(days+"天");
    }
    else
    {
        $(h1).html('');
        $(h3_text).html('考完了!');
    }
  
    if (days<=10) 
    {
        $("#day").css('font-size', '23vh');
        $("#day").css('color', 'red');
        $('.public').css('top', '-5%');
    }
    }
);