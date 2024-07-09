let innerWidth = -$('.wrapper').innerWidth()
$('.wrapper').css('left', innerWidth)

$('.close-icon').on('click', function () {
    $('.wrapper').css('left', innerWidth)
    $('.icon').css('left', '10px')
})

$('.icon').on('click', function () {
    if ($('.wrapper').css('left') == '0px') {
        $('.wrapper').css('left', innerWidth)
        $('.icon').css('left', '10px')
    } else {
        $('.wrapper').css('left', '0px')
        $('.icon').css('left', '15%')
    }
})

$('.item h2').on('click', function (e) {
    $('.item div').slideUp(1000)
    $(e.target).next().slideDown(1000)
})

let countDownDate = new Date("Jul 25, 2027 16:37:52").getTime();
let myfunc = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("minutes").innerHTML = minutes + "m "
    document.getElementById("seconds").innerHTML = seconds + "s "

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

}, 1000)


let maxLength = 100;
$('textarea').on('keyup',()=> {
    let length = $('textarea').val().length;
    let charactersLeft = maxLength - length;
    if(charactersLeft <= 0){
        $('#characters').text("your available characters finished 0 charachter remaining")
        $('#remaining').hide()
    }else{
        $('#characters').text(charactersLeft)
        $('#remaining').show()
    }
})

$('.nav-icons a').on('click',function(e){
    let selectedSection = $(e.target).attr('href')
    let secOffset = $(selectedSection).offset().top
    $('html').animate({scrollTop:secOffset},1500)
})
