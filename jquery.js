// hide() start
$(document).ready(function () {
  $(`#show`).click(function () {
    $(`#no-1`).show(1000);
  });

  $(`#hide`).click(function () {
    $(`#no-1`).hide(1000);
  });
});
// hide() end

// toggle() start
$(document).ready(function () {
  $(`#toggle`).click(function () {
    $(`#no-2`).toggle(1000);
  });
});
// toggle() end

// fadeIN()  fadeOut()start
$(document).ready(function () {
  $(`#show-2`).click(function () {
    $(`#no-3`).fadeIn(1000);
  });
  $(`#hide-2`).click(function () {
    $(`#no-3`).fadeOut(1000);
  });
});
// fadeIN()  fadeOut()end


// toggle() start
$(document).ready(function () {
  $(`#toggle-2`).click(function () {
    $(`#no-4`).toggle(1000);
  });
});
// toggle() end