// Vendor
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

$(document).ready(function() {
    // Portfolio DB
    var portfolios = [
        {
            title: "서울시 보도지원시스템",
            description: "보도 자료 검색 및 활용을 위한 기자용 반응형 웹 서비스 개발",
            image: "news",
            category: "web"
        },
        {
            title: "서울시 BIS 버스정보시스템",
            description: "서울시 BIS 버스정보시스템 유지 보수",
            image: "bis",
            category: "web"
        },
        {
            title: "국방아키텍처(ARMS) 성능 개량",
            description: "국방아키텍처(ARMS 2.0) 시스템 성능 개선",
            image: "arms",
            category: "web"
        },
        {
            title: "서울대중교통",
            description: "서울대중교통 서비스 고도화",
            image: "seoulpublictransportation",
            category: "web"
        },
        {
            title: "서울시 박물관, 미술관",
            description: "서울시 박물관, 미술관 반응형 웹 서비스 개발",
            image: "seoulmuseums",
            category: "web"
        },
        {
            title: "서울미래유산",
            description: "서울미래유산 반응형 웹 서비스 개발",
            image: "seoulfutureheritage",
            category: "web"
        },
        {
            title: "모바일서울",
            description: "모바일 서울 서비스 유지 관리",
            image: "mobileseoul",
            category: "app"
        },
        {
            title: "연합뉴스",
            description: "연합뉴스 관련 모바일 앱 서비스 개발",
            image: "yonhapnews",
            category: "app"
        },
        {
            title: "아주저축은행 대출 앱",
            description: "아주저축은행 대출 앱 서비스 개발",
            image: "ajusavings",
            category: "app"
        },
        {
            title: "아주산업 GPS 관제",
            description: "아주산업 GPS 관제 시스템 개발",
            image: "ajugps",
            category: "app"
        },
        {
            title: "차세대 법무포털 앱",
            description: "법무부 업무 관리 시스템 개발",
            image: "justice",
            category: "app"
        },
        {
            title: "유한킴벌리",
            description: "유한킴벌리 입출고 관리 시스템 개발",
            image: "yuhankimberly",
            category: "app"
        },
        {
            title: "엑소후레쉬",
            description: "엑소후레쉬 입출고 관리 시스템 개발",
            image: "exofresh",
            category: "app"
        },
        {
            title: "성화기업택배",
            description: "성화기업택배 입출고 관리 시스템 개발",
            image: "seonghwalogistics",
            category: "app"
        },
        {
            title: "풀무원",
            description: "풀무원 운송 자원 관리 시스템 개발",
            image: "pulmuone",
            category: "app"
        },
        {
            title: "MindWay",
            description: "자체 노선도 개발 솔루션(M3Maker)을 활용한 오픈형 플랫폼 서비스",
            image: "mindway",
            category: "solution"
        },
        {
            title: "MindTrip",
            description: "딥러닝 기반의 인공지능 영상 분석, 처리 시스템",
            image: "mindtrip",
            category: "solution"
        }
    ];

    // Slider (Bootstrap Carousel)
    $('.carousel').carousel({
        interval: 5000
    });

    // Portfolio filters
    $("#portfolios-filters > ul > li").click(function(event) {
        event.preventDefault();
        var moreButton = $("<a class='see-more' href='views/portfolio/portfolio.html'>더 보기</a>").css({
            color: "inherit",
            display: "block",
            width: "200px",
            textAlign: "center",
            margin: "auto",
            padding: "10px 20px",
            border: "1px solid #333"
        });
        $("#portfolios-filters > ul > li").removeClass("active");
        $(".see-more").remove();
        $(this).addClass("active");
        emptyPortfolios();
        var maxNum = portfolios.length;
        var extended = false;
        var limit = $("#portfolios").hasClass("annexed") ? 9 : 6;
        if(limit === 9) {
            moreButton.on("click", function(event) {
                event.preventDefault();
                if(!extended) {
                    emptyPortfolios();
                    limit = maxNum;
                    getPortfolios("all", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, true));
                    });
                    $(".see-more").hide();
                }
            });
            switch($(this).children("a").text()) {
                case "All":
                    getPortfolios("all", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, true));
                    });
                    $("#portfolios-items > .container").append(moreButton);
                    break;
                case "Web":
                    getPortfolios("web", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, true));
                    });
                    break;
                case "App":
                    getPortfolios("app", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, true));
                    });
                    break;
                case "솔루션":
                    getPortfolios("solution", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, true));
                    });
                    break;
            }
        }
        else if(limit === 6) {
            switch($(this).children("a").text()) {
                case "All":
                    getPortfolios("all", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, false));
                    });
                    $("#portfolios-items > .container").append(moreButton);
                    break;
                case "Web":
                    getPortfolios("web", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, false));
                    });
                    break;
                case "App":
                    getPortfolios("app", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, false));
                    });
                    $("#portfolios-items > .container").append(moreButton);
                    break;
                case "솔루션":
                    getPortfolios("solution", limit).forEach(function(item) {
                        $("#portfolios-items > .container > .row").append(getPortfolio(item, false));
                    });
                    break;
            }
        }
        else {

        }
    });
    $("#portfolios-filters > ul > li.default").click(); // Initial set-up

    // Portfolio-slider filters
    $("#portfolios-slider-category > ul > li > a").click(function(event) {
        event.preventDefault();
        $("#portfolios-slider-category > ul > li").removeClass("active");
        $(this).parent().addClass("active");
        $("#portfolios-slider-carousel > div").css({
            display: "none"
        });
        switch($(this).text()) {
            case "All":
                $("#portfolios-all").css({
                    display: "block"
                });
                break;
            case "Web":
                $("#portfolios-web").css({
                    display: "block"
                });
                break;
            case "App":
                $("#portfolios-app").css({
                    display: "block"
                });
                break;
            case "솔루션":
                $("#portfolios-solution").css({
                    display: "block"
                });
                break;
        }
    });

    // Portfolio helper functions
    function getPortfolio(item, isAnnexed) {
        var cell = $("<div class='col-12 col-lg-6 col-xl-4'></div>").append();
        var title = $("<p class='portfolio-title'>" + item.title + "</p>");
        var description = $("<p class='portfolio-description'>" + item.description + "</p>");
        var hoverPanel = $("<div class='hovered'></div>").append(title).append(description);
        var img = $("<div class='" + item.image + "' alt='" + item.title + "'/>");
        var subtitle = $("<p class='subtitle'>" + item.title + "</p>");
        var item;
        if(isAnnexed) {
            var subDescription = $("<p class='subdescription'>" + item.description + "</p>");
            item = $("<a class='portfolio' data-fancybox data-src='#" + item.image + "' href='javascript:;'></a>").append(img).append(subtitle).append(subDescription);
        }
        else {
            item = $("<div class='portfolio'></div>").append(img).append(subtitle);
        }
        $(item).hover(function() {
            $(this).append(hoverPanel);
            $(".hovered").animate({
                opacity: 1
            }, "fast");
        }, function() {
            $(".hovered").animate({
                opacity: 0
            }, "fast", function() {
                $(this).remove();
            });
        });
        return cell.append(item);
    }

    function getPortfolios(category, limit) {
        if(category === "all") {
            return portfolios.slice(0, limit);
        }
        return portfolios.filter(function(portfolio) {
            return portfolio.category === category;
        }).slice(0, limit);
    }

    function emptyPortfolios() {
        $("#portfolios-items > .container > .row").empty();
    }

    // Hamburger menu
    $("#gnb-hamburger > a").click(function(event) {
        event.preventDefault();
        $("#gnb-hamburger > ul").slideToggle();
    });

    $("#technologies-left-arrow").click(function() {
        moveTechnology("left");
    });

    $("#technologies-right-arrow").click(function() {
        moveTechnology("right");
    });

    // LNB (Local Navigation Bar)
    $("#lnb > .container > ul > li > a").click(function(event) {
        $("#lnb > .container > ul > li").removeClass("active");
        $(this).parent().addClass("active");
        var category = $(this).text();
    });

    // GNB (Global Navigation Bar)
    var navigationBarColor = "#333";
    var upperNavigationBarColor = "rgba(0, 0, 0, .5)";
    $("#lnb, #sectors, #checkpoint").waypoint({
        handler: function(direction) {
            if(direction === "down") {
                $("nav#gnb").css({
                    backgroundColor: navigationBarColor
                });
            }
            else {
                $("nav#gnb").css({
                    backgroundColor: upperNavigationBarColor
                });
            }
        }
    });

    // Parallax effect
    var offset = 800;
    var speed = "slow";
    var hiddenHeight = 80;
    var waypointed = $("section").not("#contact").not("#clients").not("#banner");
    waypointed.css({
        opacity: 0,
        position: "relative",
        bottom: "-" + hiddenHeight + "px"
    });
    waypointed.waypoint({
        handler: function(direction) {
            if(direction === "down") {
                $(this.element).animate({
                    opacity: 1,
                    bottom: "0"
                }, speed);
            }
            else {
                $(this.element).animate({
                    opacity: 0,
                    bottom: "-" + hiddenHeight + "px"
                }, speed);
            }
        },
        offset: offset
    });
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: false,
    });
});
