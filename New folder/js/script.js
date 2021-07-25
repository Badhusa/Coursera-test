$(function (){

	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});

});

(function (global){

	var vsm ={};
	var homeHtml = "snippet/home-snippet.html";

	var insertHtml = function (selector, html){
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading  =function (selector){
		var html ="<div class = 'text-center'>";
		html +="<img src='image/ajax-loader.gif'></div>";
		insertHtml(selector, html);
	};

	var switchMenuToActive = function() {

		var classes =document.querySelector("#navHomeButton").className;
		classes = classes.replace(new RegExp("active","g"),"");

		classes =document.querySelector("#navMenuButton").className;
		if (classes.indexOf("active") == -1){
			classes += " active";
			document.querySelector("#navMenuButton").className = classes;
		}
	};

	document.addEventListener("DOMContentLoaded", function (event){
		showLoading("#main-content");
		$ajaxUtils
		.sendGetRequest(
			homeHtml,
			function (responseText) {
				document.querySelector("#main-content")
				.innerHTML= responseText;
			},
			false);
	});


global.$vsm = vsm;

})(window);


