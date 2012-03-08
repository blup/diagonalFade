# diagonalFade

A diagonal fader for absolutely positioned elements. Short and simple.

HTML:

```html
<div id="container">
  <div class="box top left"></div>
  <div class="box top right"></div>
  <div class="box bottom left"></div>
  <div class="box bottom right"></div>
</div>
```

CSS:

```css
#container {
  position: relative;
}
.box {
  width: 100px;
  height: 100px;
  position: absolute;
}
.top {
  top: 0;
}
.left {
  left: 0;
}
.right {
  left: 100px;
}
.bottom {
  top: 100px;
}
```

JS:

```js
$('#container').diagonalFade()
```
