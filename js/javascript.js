//header
$(function(){
    $(window).resize(function(){
        var ww = $(window).innerWidth();

        if(ww <= 1400)
        {
            $("header .bottom")
            .addClass("small");
        }
        else
        {
            $("header .bottom")
            .removeClass("small");
        }
    })

    $(document).on("mouseenter","header .bottom.small",function(){
        $("header .rwd")
        .addClass("display")
    })

    $("header .top").mouseenter(function(){
        $("header .rwd")
        .removeClass("display");
    })

    $("header .rwd").mouseleave(function(){
        $("header .rwd")
        .removeClass("display");
    })

    // $(window).scroll(function(){
    //     var scrollVal = $(window).scrollTop();
        
    //     $("header")
    //     .offset({
    //         top : scrollVal,
    //     })
    // })
})

//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper_middle = new Swiper('.swiper-middle', {
        slidesPerView: 'auto',
        spaceBetween: 50,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
})

$(function(){
    $("body").bind("mousewheel",function(e){
        var n = e.originalEvent.wheelDelta;
        var MQ = $(".marqueeBox").offset().top;
        var DL = $(".download").offset().top;
        var BT = $(".bet").offset().top;
        var IT = $(".intro").offset().top;

        headerHidden();

        if($("body").hasClass("scrollTo_Top") && n == -120)
        {
            $("html,body")
            .animate({
                scrollTop : MQ - 180,
            },800);

            $("body")
            .addClass("scrollTo_MQ")
            .removeClass("scrollTo_Top");

            return false;
        }
        else if($("body").hasClass("scrollTo_Top") && n == 120)
        {
            $("header")
            .removeClass("hidden");
        }
        else if($("body").hasClass("scrollTo_MQ") && n == -120)
        {
            $("html,body")
            .animate({
                scrollTop : DL - 50,
            },800);

            $("body")
            .addClass("scrollTo_DL")
            .removeClass("scrollTo_MQ");

            setTimeout(function(){
                $(".download")
                .addClass("action");
            },300);
        }
        else if($("body").hasClass("scrollTo_MQ") && n == 120)
        {
            $("html,body")
            .animate({
                scrollTop : 0,
            },800);

            $("body")
            .addClass("scrollTo_Top")
            .removeClass("scrollTo_MQ");
        }
        else if($("body").hasClass("scrollTo_DL") && n == -120)
        {
            $("html,body")
            .animate({
                scrollTop : BT - 160,
            },800);

            $("body")
            .addClass("scrollTo_BT")
            .removeClass("scrollTo_DL");

            setTimeout(function(){
                $(".bet")
                .addClass("action");
            },300);
        }
        else if($("body").hasClass("scrollTo_DL") && n == 120)
        {
            $("html,body")
            .animate({
                scrollTop : MQ - 180,
            },800);

            $("body")
            .addClass("scrollTo_MQ")
            .removeClass("scrollTo_DL");
        }
        else if($("body").hasClass("scrollTo_BT") && n == -120)
        {
            $("html,body")
            .animate({
                scrollTop : IT - 120,
            },800);

            $("body")
            .addClass("scrollTo_IT")
            .removeClass("scrollTo_BT");
        }
        else if($("body").hasClass("scrollTo_BT") && n == 120)
        {
            $("html,body")
            .animate({
                scrollTop : DL - 50,
            },800);

            $("body")
            .addClass("scrollTo_DL")
            .removeClass("scrollTo_BT");
        }
        else if($("body").hasClass("scrollTo_IT") && n == -120)
        {
            $("html,body")
            .animate({
                scrollTop : $("footer").offset().top,
            },800);

            $("body")
            .addClass("scrollTo_Bottom")
            .removeClass("scrollTo_IT");
        }
        else if($("body").hasClass("scrollTo_IT") && n == 120)
        {
            $("html,body")
            .animate({
                scrollTop : BT - 160,
            },800);

            $("body")
            .addClass("scrollTo_BT")
            .removeClass("scrollTo_IT");
        }
        else if($("body").hasClass("scrollTo_Bottom") && n == -120)
        {
            $("header")
            .removeClass("hidden");
        }
        else if($("body").hasClass("scrollTo_Bottom") && n == 120)
        {
            $("html,body")
            .animate({
                scrollTop : IT - 120,
            },800);

            $("body")
            .addClass("scrollTo_IT")
            .removeClass("scrollTo_Bottom");
        }
    })
})

function headerHidden(){
    $("header")
    .addClass("hidden");

    setTimeout(function(){
        $("header")
        .removeClass("hidden");
    },500)
}