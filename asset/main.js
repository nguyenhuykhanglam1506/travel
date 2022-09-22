const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".slider-item");
const panes = $$(".tab-pane");

const tabActive = $(".slider-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".slider-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

jQuery(document).ready(function($) {
        $(window).load(function() {
        if ($('.navigation').length > 0) {
            var _top = $('.navigation').offset().top - parseFloat($('.navigation').css('marginTop').replace(/auto/, 0));
            $(window).scroll(function(evt) {
            var _y = $(this).scrollTop();
            if (_y > _top) {
            $('.navigation').addClass('fixed');
            $('.main-1').css("margin-top", "30px")
            } else {
            $('.navigation').removeClass('fixed');
            $('.main-1').css("margin-top", "0")
            }
            })
        }
        });
        });

                $(window).scroll(function() {
        if($(window).scrollTop()) {
            $(".navigation").addClass(".black");
        }
        else {
            $(".navigation").removeClass("black")
        }
        })

