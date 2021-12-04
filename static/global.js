$(function () {
    $(".tabs").on('change', function (event) {
        let $container = $(event.delegateTarget);
        let selected = $(event.target).val();

        $(".tab-content", $container).hide();
        $(`.${selected}`, $container).show();
    });

    $(".tabs").on('click', function (event) {
        if (event.target.nodeName.toLowerCase() != "a") {
            return;
        }

        let $container = $(event.delegateTarget);
        let selected = event.target.href.split("#").pop();

        $(".tab-content", $container).hide();
        $(`.${selected}`, $container).show();

        $("nav a", $container).removeClass("active");
        $(event.target, $container).addClass("active");

        return false;
    });
});

