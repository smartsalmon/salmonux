// --------------------------------------------
//         Mouse Follower 2
// --------------------------------------------

// var imgMove = document.getElementsByClassName("hiddenimg");
// document.onmousemove = function () {
//   var x = (event.clientX * 200) / window.innerWidth + "%";
//   var y = (event.clientY * 150) / window.innerHeight + "%";

//   for (var i = 0; i < 6; i++) {
//     imgMove[i].style.left = x;
//     imgMove[i].style.top = y;
//     imgMove[i].style.transform = "translate(-" + x + ", -" + y + ")";
//   }
// };

// --------------------------------------------
//         Mouse Follower 2
// --------------------------------------------

document
  .getElementsByTagName("body")[0]
  .addEventListener("mousemove", function (n) {
    (t.style.left = n.clientX + "px"),
      (t.style.top = n.clientY + "px"),
      (e.style.left = n.clientX + "px"),
      (e.style.top = n.clientY + "px"),
      (i.style.left = n.clientX + "px"),
      (i.style.top = n.clientY + "px");
  });
var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");
function n(t) {
  e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2");
}
function s(t) {
  e.classList.remove("hover", "hover-2"),
    i.classList.remove("hover", "hover-2");
}
s();
for (
  var r = document.querySelectorAll(".hover-target, .hover-target-2"),
    a = r.length - 1;
  a >= 0;
  a--
) {
  o(r[a]);
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
}
document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".mail");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("mail-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("mail-wrap");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".right-col");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("right-col-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("right-col-wrap");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".more-about");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("more-about-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("more-about-wrap");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".img-2");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("img-2-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("img-2-wrap");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".img-3");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("img-3-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("img-3-wrap");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".img-4");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("img-4-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("img-4-wrap");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".img-5");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("img-5-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("img-5-wrap");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var hoverLink = document.querySelector(".img-6");
  var bodychange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", function (e) {
    bodychange.classList.add("img-6-wrap");
  });
  hoverLink.addEventListener("mouseleave", function () {
    bodychange.classList.remove("img-6-wrap");
  });
});

// --------------------------------------------
//         Copy Mail
// --------------------------------------------

let text = document.getElementById("my-contact").innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    document.getElementById("custom-tooltip").style.display = "block";
    setTimeout(function () {
      document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
