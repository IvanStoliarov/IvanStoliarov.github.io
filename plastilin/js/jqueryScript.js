var title=$(".title__link"),switchBtns=$(".switch__svg");title.on("click",function(){if(title.removeClass("title-active"),$(this).toggleClass("title-active"),$(this).hasClass("title__simple")){var s=$(".description-simple"),t=$(".description-smart");s.removeClass("hidden"),t.addClass("hidden")}else{s=$(".description-simple"),t=$(".description-smart");s.addClass("hidden"),t.removeClass("hidden")}}),switchBtns.on("click",function(){switchBtns.removeClass("switch__svg-active"),$(this).toggleClass("switch__svg-active"),$(this).hasClass("switch__svg-phone")?($(".phone").addClass("product-active"),$(".laptop").removeClass("product-active")):($(".laptop").addClass("product-active"),$(".phone").removeClass("product-active"))});