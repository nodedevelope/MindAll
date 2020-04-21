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
            title: "MindTrip",
            description: "AI 분석 이미지 IOT",
            image: "mindtrip",
            category: "solution"
        },
        {
            title: "모바일서울",
            description: "버스/지하철 지도 기반 교통정보",
            image: "mobileseoul",
            category: "app"
        },
        {
            title: "서울대중교통",
            description: "웹 기반 실시간 버스 관제 서비스",
            image: "seoulpublictransportation",
            category: "app"
        },
        {
            title: "서울미래유산",
            description: "미래 유산 DB 구축",
            image: "seoulfutureheritage",
            category: "web"
        },
        {
            title: "서울시 박물관, 미술관",
            description: "박물관 미술관 DB 구축 및 관리 페이지 개발",
            image: "seoulmuseums",
            category: "web"
        },
        {
            title: "차세대 법무포털 앱",
            description: "법무부 내부 업무용 업무 관리 시스템",
            image: "justice",
            category: "app"
        },
        {
            title: "유한킴벌리",
            description: "바코드 리더기를 활용한 입고/출고 관리 시스템 개발",
            image: "yuhankimberly",
            category: "app"
        },
        {
            title: "풀무원",
            description: "바코드 리더기를 활용한 입고/출고 관리 시스템 개발",
            image: "pulmuone",
            category: "app"
        },
        {
            title: "엑소후레쉬",
            description: "바코드 리더기를 활용한 입고/출고 관리 시스템 개발",
            image: "exofresh",
            category: "app"
        },
        {
            title: "성화기업택배",
            description: "바코드 리더기를 활용한 입고/출고 관리 시스템 개발",
            image: "seonghwalogistics",
            category: "app"
        },
        {
            title: "아주저축은행 대출 앱",
            description: "모바일 대출 신청 및 확인",
            image: "ajusavings",
            category: "app"
        },
        {
            title: "아주산업 GPS 관제",
            description: "지도 기반 레미콘 차량 위치 관제 시스템 개발",
            image: "ajugps",
            category: "app"
        },
        {
            title: "서울시 보도지원시스템",
            description: "시정 관련 보도 자료 검색 및 활용을 위한 반응형 웹사이트 구축",
            image: "news",
            category: "web"
        },
        {
            title: "국방아키텍처(ARMS) 성능 개량",
            description: "ARMS 성능 개선을 통해, 업무에 직접 활용할 수 있는 아키텍처 정보를 제공하여 상호운용성 업무의 효율성 향상",
            image: "arms",
            category: "web"
        },
        {
            title: "서울시 BIS 버스정보시스템",
            description: "서울시 버스정보시스템의 안정적인 유지 관리",
            image: "bis",
            category: "web"
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
        var maxNum = 15;
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
    var waypointed = $("section").not("#contact").not("#clients");
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
