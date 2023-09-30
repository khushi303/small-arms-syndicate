// navbar
function opennav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hiddden")
    document.getElementById("menubtn-icon").classList.toggle("cross");
}
// team-slider
$('.team_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow:3,
    slidesToScroll:3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow:2.4,
                slidesToScroll:2,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1.10,
                slidesToScroll: 1,
            }
        },
    ]
});