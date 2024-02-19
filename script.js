// "use strict"


// function navcontent(contentId) {
//     var contents = document.querySelectorAll('.content');
//     contents.forEach(function(content) {
//         content.style.display = 'none';
//     });

//     var selectedContent = document.getElementById(contentId);
//     selectedContent.style.display = 'block';
// }

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}