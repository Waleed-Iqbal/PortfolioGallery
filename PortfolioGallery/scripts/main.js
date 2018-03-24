

$(document).ready(function () {
    $("nav a").on("click", function () {
        $("nav li.current").removeClass("current");
        $(this).parent().addClass("current");


        $("h1#heading").text($(this).text());

        var category = $(this).text().toLowerCase().replace(' ', '-');

        if (category === "all-projects") {
            $("ul#gallery li:hidden").fadeIn("slow").removeClass("hidden");
        } else {
            $("ul#gallery li").each(function () {
                if (!$(this).hasClass(category)) {
                    $(this).hide().addClass("hidden");
                } else {
                    $(this).fadeIn("slow").removeClass("hidden");
                }
            });
        }

        // stop link behaviour
        return false;
    });

    $("ul#gallery li").on("mouseenter", function () {

        // Reading data attributes
        $(this).children(".overlay").remove();
        var title = $(this).children().data("title");
        var desc = $(this).children().data("desc");

        if (!title) title = "";
        if (!desc) desc = "click to enlarge";
        // Creating overlay element
        var html = "<div class='overlay'></div>";
        $(this).append(html);

        var overlay = $(this).children(".overlay");

        // Adding elements in the overlay
        html = "";
        html = "<h3>" + title + "</h3><p>" + desc + "</p>";
        overlay.append(html);

        overlay.fadeIn(300);
    });

    $("ul#gallery li").on("mouseleave", function() {
        // var html = "<div class='overlay'></div>";
        // $(this).append(html);

        var overlay = $(this).children(".overlay");
        overlay.fadeOut(500);
    });



});

