

$(document).ready(function () {
    $("nav a").on("click", function () {
        $("nav li.current").removeClass("current");
        $(this).parent().addClass("current");


        $("h1#heading").text($(this).text());

        var category = $(this).text().toLowerCase().replace(' ','-');

        if(category === "all-projects"){
            $("ul#gallery li:hidden").fadeIn("slow").removeClass("hidden");
        } else {
            $("ul#gallery li").each(function(){
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass("hidden");
                } else {
                    $(this).fadeIn("slow").removeClass("hidden");
                }
            });
        }

        // stop link behaviour
        return false;

    });
});

