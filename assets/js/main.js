var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {
  $("section h1, section h2, section h3").each(function(){
    // IDに日本語も使いたいので、「英数とアンダーバー(\w)、マイナス(-)以外」削除の処理を
    // 削除すべき文字コード指定に変更
    // $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    // $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    let tmpStr = $(this).text().toLowerCase().replace(/ /g, '-').replace(/[\x20-\x2c\x2e\x2f\x3a-\x40\x5b-\x5f\x7b-\x7f]+/g,'');
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + tmpStr + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id", tmpStr);
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});
