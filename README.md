# Fade out an element as you scroll down the page

jQuery script which watches the window scroll position and fades out the
specified element(s), using CSS opacity, as you scroll down the page. Scrolling
back up will fade the element back in again.

## Usage

* Include this script in your build process using `import "@sayhellogmbh/js-scrollfade"`.
* Add the following code to your `document.ready` block. (In the example, all elements with the CSS class `.js-scrollfade` will be affected.

```javascript
if ($.fn.sht_scrollfade) {
	$('.js-scrollfade').sht_scrollfade();
}
```

## Changelog

### 1.0.0 2019-07-05

* Initial @sayhellogmbh version.
