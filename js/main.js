(function() {
  var $ = function(selector) {return document.querySelectorAll(selector);};
  var _ = function(nodeList, fn) {return Array.prototype.slice.call(nodeList);};
  var navbar = $('.site-header')[0];

  _($('a[href^="#"]')).forEach(function(link) {
    return link.addEventListener('click', function(e) {
      var fixbarOffset, target;
      if (e.target.href) {
        e.preventDefault();
        fixbarOffset = navbar.getBoundingClientRect().height;
        if (!(target = e.target.attributes.href.nodeValue.toString())) return;
        return scrollToTarget(target);
      }
    });
  });

  function scrollToTarget(target) {
    var scrollTarget, targetElement;
    targetElement = $(target)[0] || $('a[name=' + target.replace(/#/, '') + ']')[0];
    scrollTarget = targetElement.offsetTop;
    return scrollToY(scrollTarget - 20, 500, 'easeInOutQuint', function() {return false;});
  };

  // document.body.addEventListener('touchstart', function(){}); /* Bug do Safari no menu: ativando eventos de toque na tela */

  window.scrollToTarget = scrollToTarget;

}).call(this);
