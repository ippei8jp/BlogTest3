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


// -------- copy button関連処理 --------
$(function() {
  // すべてのhighlightクラスを持つdiv要素にselect_all_buttonクラスを持つdiv要素を追加する
  // $("div.highlight").prepend('<div class="select_all_button">Copy</div>');
  // すべてのhighlightクラスを持つpre要素の前にselect_all_buttonクラスを持つdiv要素を追加する
  $("pre.highlight").before('<div class="select_all_button">Copy</div>');

  // select_all_buttonクラスのclickイベントを登録
  $(".select_all_button").on("click", function(event) {
    // thisの次の兄弟エレメント(preのはず)
    let elem_pre = this.nextSibling;
    // の子の最初のcodeタグ
    let elem_code = elem_pre.getElementsByTagName('code')[0];
    // の中のテキスト
    let text = elem_code.innerText;

    // コピー用に一時的にテキストエリアを追加(一瞬見えるかもしれないが我慢して)
    // textareaにhidden属性を付けると消せるが、クリップボードへコピーできない
    $('body').append('<textarea id="copyInputArea">' + text + '</textarea>');

    // 作成したテキストエリア
    let copyInput = $('#copyInputArea')[0];

    // を選択
    copyInput.select();

    // したのをコピー
    document.execCommand('copy');

    // 要らなくなったので廃棄
    copyInput.remove();

    // コピーを通知
    // console.log("コピーしました");
    // alert("コピーしました");
  });
});


// -------- 行番号関連処理 --------
$(function() {
  let pre = document.getElementsByTagName('pre');
  let pl = pre.length;
  for (let i = 0; i < pl; i++) {
    pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
    let num = pre[i].innerHTML.split(/\n/).length;
    for (let j = 0; j < (num - 1); j++) {
      let line_num = pre[i].getElementsByTagName('span')[0];
      line_num.innerHTML += '<span>' + (j + 1) + '</span>';
    }
  }
});
