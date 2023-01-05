
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
}
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
}
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
on('click', '.mobile-nav-toggle', function (e) {
    var navmenu = select('.nav-menu')
    var btn = select('.mobile-nav-toggle i');
    if (hasClass(navmenu, 'navbar-mobile')) {
        navmenu.classList.remove('navbar-mobile')
        btn.classList.add('bi-list')
        btn.classList.remove('bi-x')
    } else {
        navmenu.classList.add('navbar-mobile')
        btn.classList.remove('bi-list')
        btn.classList.add('bi-x')
    }
//this.classList.toggle('bi-list')
//this.classList.toggle('bi-x')
})

let loopChange;
var newimg;
var atual;
var hero = select("#hero");
var testIndex = select("#testIndex");
if (hero !== null) {
    var imgs = JSON.parse(hero.dataset.imgbh);
    hero.style.backgroundImage = 'url(\'/agaerreImg.php?img=' + imgs[0] + '\')';

    loopChange = setInterval(function () {

        heroChange('next');
    }, 5000);
}
on('click', '#prev', function (e) {
    clearInterval(loopChange);
    heroChange('prev');
    loopHero();
});
on('click', '#next', function (e) {
    clearInterval(loopChange);
    heroChange('next');
    loopHero();
});
function loopHero() {
    loopChange = setInterval(function () {

        heroChange('next');
    }, 5000);
}
function heroChange(dir) {
    var imgs = JSON.parse(hero.dataset.imgbh);
    var items = (imgs.length - 1);

    atual = parseInt(hero.dataset.index);
    console.log(atual);
    if (dir == 'next') {
        // alert("next");

        if (atual == items) {
            newimg = 0;
            console.log('=');
        } else {
            //console.log(atual++);
            newimg = atual + 1;

            // alert(newimg);
        }
    } else {
        if (atual == 0) {
            newimg = items;
        } else {
            newimg = atual - 1;
        }
    }
    hero.dataset.index = newimg;
    console.log(newimg);
    testIndex.innerHTML = newimg;
    hero.style.backgroundImage = 'url(\'/agaerreImg.php?img=' + imgs[newimg] + '\')';
}

var imgsLoad = select("img", true);
setTimeout(function () {
    imgsLoad.forEach(function (lazyImage) {
        var original = lazyImage.src;
         var newsrc = lazyImage.dataset.lazysrc;
        console.log(lazyImage.dataset.lazysrc);
        if (original == 'https://terraturismo.agaerre.com.br/previous.jpg') {
           lazyImage.src = lazyImage.dataset.lazysrc
            lazyImage.src = newsrc;
            // alert("aqui");
        }
        //if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
        //var check = lazyImage.dataset.src;
        //lazyImage.srcset = lazyImage.dataset.srcset;
        //lazyImage.classList.remove("lazy");

        //lazyImages = lazyImages.filter(function(image) {
        //  return image !== lazyImage;
        //});

        //if (lazyImages.length === 0) {
        //  document.removeEventListener("scroll", lazyLoad);
        // window.removeEventListener("resize", lazyLoad);
        // window.removeEventListener("orientationchange", lazyLoad);
        //}
        //   }
    });

    //active = false;
}, 200);