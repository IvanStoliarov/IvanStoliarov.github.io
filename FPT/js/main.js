var textTypeIcons=document.getElementsByClassName("text__type");if(textTypeIcons)for(var i=0;i<textTypeIcons.length;i++)textTypeIcons[i].addEventListener("click",function(){for(var e=0;e<textTypeIcons.length;e++)textTypeIcons[e].classList.remove("text__type-active");this.classList.toggle("text__type-active")});var btnUp=document.getElementById("number_of_texts__button-up"),btnDowm=document.getElementById("number_of_texts__button-down"),numOfText=document.getElementById("number_of_texts");btnUp.addEventListener("click",function(){numOfText.value=+numOfText.value+1}),btnDowm.addEventListener("click",function(){numOfText.value>0&&(numOfText.value=+numOfText.value-1)});var prevBtn=document.getElementById("portfolio__btn-prev"),nextwBtn=document.getElementById("portfolio__btn-next");nextwBtn.addEventListener("click",function(){var e=document.querySelector(".work-active"),t=e.nextElementSibling;t&&(e.classList.remove("work-active"),t.classList.add("work-active"))}),prevBtn.addEventListener("click",function(){var e=document.querySelector(".work-active"),t=e.previousElementSibling;t&&(e.classList.remove("work-active"),t.classList.add("work-active"))});var collapse=document.getElementById("navbarTogglerDemo01"),menuBtn=document.querySelector(".navbar-toggler"),menuIcon=document.querySelector(".navbar-toggler-icon");menuBtn.addEventListener("click",function(){menuIcon.classList.toggle("navbar-toggler-icon_opened")});