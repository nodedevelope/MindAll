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
        }
    ];

    // Slider (Bootstrap Carousel)
    $('.carousel').carousel({
        interval: 5000
    });

    // Portfolio filters
    $("#portfolios-filters > ul > li").click(function(event) {
        event.preventDefault();
        $("#portfolios-filters > ul > li").removeClass("active");
        $(this).addClass("active");
        emptyPortfolios();
        switch($(this).children("a").text()) {
            case "All":
                getPortfolios("all").forEach(function(item) {
                    $("#portfolios-items > .container > .row").append(getPortfolio(item));
                });
                break;
            case "Web":
                getPortfolios("web").forEach(function(item) {
                    $("#portfolios-items > .container > .row").append(getPortfolio(item));
                });
                break;
            case "App":
                getPortfolios("app").forEach(function(item) {
                    $("#portfolios-items > .container > .row").append(getPortfolio(item));
                });
                break;
            case "솔루션":
                getPortfolios("solution").forEach(function(item) {
                    $("#portfolios-items > .container > .row").append(getPortfolio(item));
                });
                break;
        }
    });
    $("#portfolios-filters > ul > li.default").click(); // Initial set-up

    // Portfolio helper functions
    function getPortfolio(item) {
        var cell = $("<div class='col-12 col-lg-6 col-xl-4'></div>").append();
        var title = $("<p class='portfolio-title'>" + item.title + "</p>");
        var description = $("<p class='portfolio-description'>" + item.description + "</p>");
        var hoverPanel = $("<div class='hovered'></div>").append(title).append(description);
        var img = $("<img src='./images/portfolios/" + item.image + ".jpg' alt='" + item.title + "'/>");
        var item = $("<div class='portfolio'></div>").append(img);
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

    function getPortfolios(category) {
        if(category === "all") {
            return portfolios;
        }
        return portfolios.filter(function(portfolio) {
            return portfolio.category === category;
        });
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
    $("#lnb > ul > li > a").click(function(event) {
        event.preventDefault();
        $("#lnb > ul > li").removeClass("active");
        $(this).parent().addClass("active");
        var category = $(this).text();
    });

    // GNB (Global Navigation Bar)
    var navigationBarColor = "#333";
    var upperNavigationBarColor = "rgba(0, 0, 0, .5)";
    $("#sectors").waypoint({
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
});