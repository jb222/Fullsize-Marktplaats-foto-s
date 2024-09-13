// ==UserScript==
// @name           Fullsize Marktplaats foto's
// @version        1.3.0
// @namespace      Marktplaats
// @description    Klik door naar maximaal formaat
// @match          https://www.marktplaats.nl/*
// @license        MIT License
// @grant          GM_addStyle
// @run-at         document-end
// ==/UserScript==

(function() {
    'use strict';
    const z = function(){
        let t = document.querySelector('.ReactModalPortal')
        t.addEventListener('click',function(e){
            if(e.target.classList.contains('Carousel-dialogImage')) {
                t.classList.toggle('oo')
            }
        })
    },
          testForClass = function (target,c) {
              const config = { attributes:true, childList:true, subtree: true},
                    observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                                let hasClass = [].some.call(mutation.addedNodes, function(el) {
                                    return( el.classList ? el.classList.contains(c) : false);
                                });
                                if (hasClass) z()
                            }
                        })
                    })
              observer.observe(target, config);
          }
    testForClass(document,'ReactModalPortal')

    GM_addStyle('.oo .Gallery-dialogContent{padding:0;}.oo .Carousel-dialogCarousel{display:flex;text-align:center;overflow:visible;;}.oo .Carousel-dialogContainer{display:block;width:100%;height:100%;overflow:auto}.oo .Carousel-dialogContainer>img{z-index:5;object-fit:none;user-select:none}.oo .Carousel-navigationContainer{position:absolute;display:block;z-index:5;margin:0 50px}.oo .Carousel-navigationContainer:first-child{left:0}.oo .Carousel-navigationContainer:last-child{right:0}.oo .Carousel-image{max-width:none;max-height:none}.Carousel-dialogContainer img{pointer-events:auto;user-select:none;cursor:zoom-in}.oo .Carousel-dialogContainer img{cursor:zoom-out}');
})();
