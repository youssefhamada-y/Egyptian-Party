let x = $(".hidewidth").outerWidth(true);
$(".button").click(function () {
    if ($(".hidewidth").css("translate") == "0px") {
        $(".hidewidth").animate({ translate: -x }, 500)
        $(".translateleft").animate({ translate: "-220" }, 500)
    } else {
        $(".hidewidth").animate({ translate: "0" }, 500)
        $(".translateleft").animate({ translate: "0" }, 500)
    }
});
$(".close").click(function () {
    $(".hidewidth").animate({ translate: -x }, 500)
    $(".translateleft").animate({ translate: "-220" }, 500)
})
$(".artist").click(function(){
 $(this).next().slideToggle(500);
})
$("textarea").keyup(function(){
    let lenght=$(this).val().length
    $(".minus").html(lenght)
})
let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
let updatecountdown=setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
   $(".days").html(days +"D");
   $(".hours").html(hours +"h");
   $(".minutes").html(minutes +"m");
   $(".seconds").html(seconds +"s")
},1000)
