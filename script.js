window.addEventListener('load', function() {
    var elementsToFade = document.querySelectorAll('.fade-in');
    for (var i = 0; i < elementsToFade.length; i++) {
      var element = elementsToFade[i];
      var distanceToTop = element.getBoundingClientRect().top;
      if (distanceToTop < window.innerHeight) {
        element.classList.add('is-visible');
      }
    }
  });