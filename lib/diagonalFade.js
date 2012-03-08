(function() {

  (function($) {
    return $.fn.diagonalFade = function(options) {
      var delay, duration, exclude;
      if (options == null) options = {};
      delay = options.delay || 0;
      duration = options.duration || 2000;
      exclude = options.exclude ? options.exclude : false;
      return this.each(function() {
        var child, children, dist, el, elements, i, left, mult, sorted, top, _i, _j, _len, _len2, _results;
        el = $(this);
        elements = [];
        if (exclude) {
          children = el.children('div:not(' + exclude + ')');
        } else {
          children = el.children();
        }
        for (_i = 0, _len = children.length; _i < _len; _i++) {
          i = children[_i];
          el = $(i);
          el.css('opacity', 0);
          top = parseInt(el.css('top'));
          left = parseInt(el.css('left'));
          dist = Math.sqrt((top * top) + (left * left));
          elements.push({
            el: el,
            dist: dist
          });
        }
        sorted = _.sortBy(elements, function(i) {
          return i.dist;
        });
        mult = duration / (sorted[sorted.length - 1].dist - sorted[0].dist);
        _results = [];
        for (_j = 0, _len2 = sorted.length; _j < _len2; _j++) {
          child = sorted[_j];
          _results.push((function(child) {
            return setTimeout((function() {
              return child.el.animate({
                opacity: 100
              }, 2000);
            }), (mult * child.dist) + delay);
          })(child));
        }
        return _results;
      });
    };
  })(window.Zepto || window.jQuery);

}).call(this);
