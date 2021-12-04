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

  $(".accordion h5").on('click', function (event) {
    let $target = $(event.target);
    let $accordion = $target.closest('.accordion');

    let wasOpen = $target.hasClass("open");

    $("h5", $accordion).removeClass('open');
    $(".content", $accordion).addClass('hidden');

    if (!wasOpen) {
      $target.addClass('open');
      $target.next().removeClass('hidden');
    }
  });
});

