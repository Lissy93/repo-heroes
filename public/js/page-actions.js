(function() {
  $(document).ready(function() {
    var goToUrl, readUrlYo, showLoader, txtRepoUrl;
    goToUrl = function(url) {
      showLoader();
      return window.location = url;
    };
    txtRepoUrl = 'input#repoUrl';
    readUrlYo = function(url) {
      var r;
      r = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (r.test(url)) {
        return goToUrl('/results/' + encodeURIComponent(url));
      } else {
        return $('#invalid-url').slideDown();
      }
    };
    $(txtRepoUrl).bind('enter', function() {
      return readUrlYo($(this).val());
    });
    $(txtRepoUrl).keyup(function(e) {
      if (e.keyCode === 13) {
        return $(this).trigger('enter');
      }
    });
    $('.submit-repo-btn').click(function() {
      return readUrlYo($(txtRepoUrl).val());
    });
    showLoader = function() {
      return console.log('todo');
    };
    return $('#get-started-btn').click(function() {
      return $('html, body').animate({
        scrollTop: $('.getting-started').offset().top
      }, 1000);
    });
  });

}).call(this);
