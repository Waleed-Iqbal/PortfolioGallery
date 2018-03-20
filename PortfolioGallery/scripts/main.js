

$(document).ready(function () {
    $("nav a").on("click", function () {
        $("nav li.current").removeClass("current");
        $(this).parent().addClass("current");


        $("h1#heading").text($(this).text());

        var category = $(this).text().toLowerCase().replace(' ','-');

    });
});

