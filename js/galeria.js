new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});// external js: flickity.pkgd.js


$('.carousel').flickity({
  arrowShape: {
    x0: 10,
    x1: 40, y1: 50,
    x2: 80, y2: 50,
    x3: 50
  }
});

