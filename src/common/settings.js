export var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1300,
            settings: {
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 4,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 5,
                dots:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 6,
                dots:false
            }
        }
    ]
};