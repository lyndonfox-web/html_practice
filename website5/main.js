// $(function () {
//     var pagePath = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
//     console.log(pagePath);
//     $('#header ul li a[href^="' + pagePath + '"]').addClass('selected');

// })

//? menu with var

// var minimenu = document.getElementById('minimenu');
// var navbar = document.getElementById('navbar');

// minimenu.onclick = function () {
//     navbar.style.display = (navbar.style.display == 'none') ? 'block' : 'none';
// }

//? menu shorten

// document.getElementById('minimenu').onclick = function () {
//     document.getElementById('navbar').style.display = (navbar.style.display == 'none') ? 'block' : 'none';
// }

//? menu with classes

var navbar = document.getElementById('navbar');
var btnmenu = document.getElementById('minimenu')

btnmenu.onclick = function () {

    navbar.className = (navbar.className === 'second') ? 'sm-screen second' : 'second';
}

