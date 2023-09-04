import { Home } from "./home.module.js";

const home = new Home();

let open = 0;
$(".fa-solid").addClass("fa-align-justify");
$(".open-close-icon").on("click", function () {
  open++;

  if (open % 2 != 0) {
    $(".side-nav-menu").animate({ left: "0px" }, 700);
    $("#open-icon").removeClass("fa-align-justify");
    $("#open-icon").addClass("fa-x");

    for (let i = 0; i < 5; i++) {
      $(".links li")
        .eq(i)
        .animate(
          {
            top: 0,
          },
          (i + 5) * 100
        );
    }
  } else {
    $(".side-nav-menu").animate({ left: "-267px" }, 600);
    $("#open-icon").removeClass("fa-x");
    $("#open-icon").addClass("fa-align-justify");

    $(".links li").animate(
      {
        top: 300,
      },
      600
    );
  }
});
