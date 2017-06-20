---
---

$ = (selector) ->
	document.querySelectorAll(selector)
_ = (nodeList, fn) ->
	if fn
		Array.prototype.map.call(nodeList, fn)
	else
		Array.prototype.slice.call(nodeList)
# Element.prototype.prependChild = (child) ->
# 	this.insertBefore child, this.firstChild

scrollToTarget = (target) ->
	targetElement = $(target)[0] or $('a[name=' + target.replace(/#/, '') + ']')[0]
	scrollTarget = targetElement.offsetTop
	scrollToY scrollTarget - 20, 500, 'easeInOutQuint', () -> false

window.scrollToTarget = scrollToTarget

navbar = $('.site-header')[0]
navigate = (e) ->
	if e.target.href
		e.preventDefault()
		fixbarOffset = navbar.getBoundingClientRect().height
		return unless target = e.target.attributes.href.nodeValue.toString()
		scrollToTarget(target)

_( $('a[href^="#"]') ).forEach (link) ->
	link.addEventListener 'click', navigate
