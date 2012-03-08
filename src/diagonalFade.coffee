#--------------
# diagonalFade
#--------------

(($) ->
  $.fn.diagonalFade = (options = {}) ->
    delay = options.delay or 0
    duration = options.duration or 2000
    exclude = if options.exclude then options.exclude else false
    @each ->
      el = $(@)
      elements = []
      if exclude then children = el.children('div:not(' + exclude + ')')
      else children = el.children()
      for i in children
        el = $(i)
        el.css('opacity', 0)
        top = parseInt(el.css('top'))
        left = parseInt(el.css('left'))
        dist = Math.sqrt((top * top) + (left * left))
        elements.push {el: el, dist: dist}
      sorted = _.sortBy elements, (i) -> i.dist
      mult = duration / (sorted[sorted.length - 1].dist - sorted[0].dist)
      for child in sorted
        do (child) ->
          setTimeout (->
            child.el.animate({opacity: 100}, 2000)
          ), (mult * child.dist) + delay

) window.Zepto || window.jQuery
