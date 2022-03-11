$(() => {
  var sliderContainers = $(".cd-slider-wrapper");

  if (sliderContainers.length > 0) initBlockSlider(sliderContainers);

  function initBlockSlider(sliderContainers) {
    sliderContainers.each(function () {
      var sliderContainer = $(this),
        slides = sliderContainer.children(".cd-slider").children("li"),
        sliderPagination = createSliderPagination(sliderContainer);

      sliderPagination.on("click", function (event) {
        event.preventDefault();
        var selected = $(this),
          index = selected.index();
        updateSlider(index, sliderPagination, slides);
      });

      sliderContainer.on("swipeleft", function () {
        var bool = enableSwipe(sliderContainer),
          visibleSlide = sliderContainer.find(".is-visible").last(),
          visibleSlideIndex = visibleSlide.index();
        if (!visibleSlide.is(":last-child") && bool) {
          updateSlider(visibleSlideIndex + 1, sliderPagination, slides);
        }
      });

      sliderContainer.on("swiperight", function () {
        var bool = enableSwipe(sliderContainer),
          visibleSlide = sliderContainer.find(".is-visible").last(),
          visibleSlideIndex = visibleSlide.index();
        if (!visibleSlide.is(":first-child") && bool) {
          updateSlider(visibleSlideIndex - 1, sliderPagination, slides);
        }
      });
    });
  }

  function createSliderPagination(container) {
    var wrapper = $('<ol class="cd-slider-navigation"></ol>');
    container
      .children(".cd-slider")
      .find("li")
      .each(function (index) {
        var dotWrapper =
            index == 0 ? $('<li class="selected "></li>') : $("<li></li>"),
          dot = $("<a href=#" + index + "></a>").appendTo(dotWrapper);
        dotWrapper.appendTo(wrapper);
        var dotText = index + 1 < 10 ? "0" + (index + 1) : index + 1;

        dot.text(
          dotText === "01"
            ? "หน้าแรก"
            : dotText === "02"
            ? "เป้าหมาย"
            : dotText === "03"
            ? "แนวคิด"
            : dotText === "04"
            ? "ผู้จัดทํา"
            : dotText
        );
      });
    wrapper.appendTo(container);
    return wrapper.children("li");
  }

  function updateSlider(n, navigation, slides) {
    navigation.removeClass("selected").eq(n).addClass("selected");
    slides
      .eq(n)
      .addClass("is-visible")
      .removeClass("covered")
      .prevAll("li")
      .addClass("is-visible covered")
      .end()
      .nextAll("li")
      .removeClass("is-visible covered");

    //fixes a bug on Firefox with ul.cd-slider-navigation z-index
    navigation
      .parent("ul")
      .addClass("slider-animating")
      .on(
        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function () {
          $(this).removeClass("slider-animating");
        }
      );
  }

  function enableSwipe(container) {
    return container.parents(".touch").length > 0;
  }

  // new kursor({
  //   type: 1,
  //   speed: 0.5,
  //   delay: 0.5,
  //   color: "#F44336",
  //   removeDefaultCursor: true,
  // });

  $("#pof").click(() => {
    $("#pof").css("display", "none");
    $("#pof2").css("display", "inline");
    setTimeout(() => {
      $("#toastify-1").removeClass("slide-out-right");

      $("#toastify-1").addClass("slide-in-right");
    }, 200);

    setTimeout(() => {
      $("#toastify-2").removeClass("slide-out-right");

      $("#toastify-2").addClass("slide-in-right");
    }, 300);

    setTimeout(() => {
      $("#toastify-3").removeClass("slide-out-right");

      $("#toastify-3").addClass("slide-in-right");
    }, 400);
  });

  $("#pof2").click(() => {
    $("#pof2").css("display", "none");
    $("#pof").css("display", "inline");

    $("#toastify-1").addClass("slide-out-right");
    $("#toastify-2").addClass("slide-out-right");
    $("#toastify-3").addClass("slide-out-right");
  });

  let settoastify3 = false;
  $("#Toastify__close-1").click(() => {
    settoastify3 = true;
    $("#toastify-1").removeClass("slide-in-right").addClass("slide-out-right");
    $("#toastify-2").animate({ top: 0 }, 300, () => {
      $("#toastify-3").animate({ top: 70 }, 300);
    });
  });

  $("#Toastify__close-2").click(() => {
    $("#toastify-2").removeClass("slide-in-right").addClass("slide-out-right");
    $("#toastify-1").animate({ top: 0 }, 300, () => {
      if (settoastify3 == true) {
        $("#toastify-3").animate({ top: 0 }, 300);
      } else {
        $("#toastify-3").animate({ top: 70 }, 300);
      }
    });
  });

  $("#Toastify__close-3").click(() => {
    $("#toastify-3").removeClass("slide-in-right").addClass("slide-out-right");
    $("#toastify-1").animate({ top: 0 }, 300, () => {
      $("#toastify-2").animate({ top: 70 }, 300);
    });
  });

  var btn = $("button");

  /* Demo purposes only */
  $(".hover").mouseleave(() => {
    $(this).removeClass("hover");
  });

  btn.hover(() => {
    $(this).css("cursor", "pointer");
  });

  $("#start").click(() => {
    $("#startClass").css("display", "block");
  });

  $(".swal2-close").click(() => {
    $("#startClass").animate(
      {
        opacity: 0,
      },
      500,
      () => {
        $("#startClass").css({
          display: "none",
          opacity: 1,
        });
      }
    );
  });

  let num = 40;

  for (let i = 1; i <= num; i++) {
    $(`#${i}`).click(() => {
    
        window.open(
          i == 1
            ? "https://www.w3schools.com/html/default.asp"
            : i == 2
            ? "https://www.w3schools.com/css/css_intro.asp"
            : i == 3
            ? "https://www.w3schools.com/js/js_intro.asp"
            : i == 4
            ? "https://www.w3schools.com/python/default.asp"
            : i == 5
            ? "https://www.w3schools.com/sql/default.asp"
            : i == 6
            ? "https://www.w3schools.com/php/default.asp"
            : i == 7
            ? "https://www.w3schools.com/jquery/default.asp"
            : i == 8
            ? "https://www.w3schools.com/java/default.asp"
            : i == 9
            ? "https://www.w3schools.com/cpp/default.asp"
            : i == 10
            ? "https://www.w3schools.com/bootstrap/bootstrap_ver.asp"
            : i == 11
            ? "https://www.w3schools.com/c/index.php"
            : i == 12
            ? "https://www.w3schools.com/cs/index.php"
            : i == 13
            ? "https://www.w3schools.com/r/default.asp"
            : i == 14
            ? "https://www.w3schools.com/kotlin/index.php"
            : i == 15
            ? "https://www.w3schools.com/nodejs/default.asp"
            : i == 16
            ? "https://www.w3schools.com/react/default.asp"
            : i == 17
            ? "https://www.w3schools.com/js/js_json.asp"
            : i == 18
            ? "https://www.w3schools.com/angular/default.asp"
            : i == 19
            ? "https://www.w3schools.com/mysql/default.asp"
            : i == 20
            ? "https://www.w3schools.com/xml/default.asp"
            : i == 21
            ? "https://www.w3schools.com/sass/default.php"
            : i == 22
            ? "https://www.w3schools.com/icons/default.asp"
            : i == 23
            ? "https://www.w3schools.com/css/css_rwd_intro.asp"
            : i == 24
            ? "https://www.w3schools.com/graphics/default.asp"
            : i == 25
            ? "https://www.w3schools.com/graphics/svg_intro.asp"
            : i == 26
            ? "https://www.w3schools.com/graphics/canvas_intro.asp"
            : i == 27
            ? "https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp"
            : i == 28
            ? "https://www.w3schools.com/cybersecurity/index.php"
            : i == 29
            ? "https://www.w3schools.com/colors/default.asp"
            : i == 30
            ? "https://www.w3schools.com/git/default.asp"
            : i == 31
            ? "https://www.w3schools.com/python/matplotlib_intro.asp"
            : i == 32
            ? "https://www.w3schools.com/python/numpy/default.asp"
            : i == 33
            ? "https://www.w3schools.com/python/pandas/default.asp"
            : i == 34
            ? "https://www.w3schools.com/python/scipy/index.php"
            : i == 35
            ? "https://www.w3schools.com/asp/default.asp"
            : i == 36
            ? "https://www.w3schools.com/accessibility/index.php"
            : i == 37
            ? "https://www.w3schools.com/appml/default.asp"
            : i == 38
            ? "https://www.w3schools.com/go/index.php"
            : i == 39
            ? "https://www.w3schools.com/python/python_ml_getting_started.asp"
            : i == 40
            ? "https://www.w3schools.com/ai/default.asp"
            : "https://sharp-witted.com/",
          "_blank"
        );
      }
    
    );
  }
});

  
