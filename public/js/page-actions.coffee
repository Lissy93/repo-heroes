
$(document).ready ->
  goToUrl = (url) -> showLoader();  window.location = url # Navigate to a URL
  txtRepoUrl = 'input#repoUrl' # Selector for the input box

  readUrlYo = (url) ->
    r = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    if r.test(url) then goToUrl('/results/'+ encodeURIComponent(url))
    else $('#invalid-url').slideDown()

  # Submit search term, when the user presses enter
  $(txtRepoUrl).bind 'enter', () -> readUrlYo($(this).val())
  $(txtRepoUrl).keyup (e) -> if e.keyCode == 13 then $(this).trigger 'enter'
  $('.submit-repo-btn').click () -> readUrlYo($(txtRepoUrl).val())

  showLoader = () ->
    console.log 'todo'
    # TODO: Implement a loading graphic

