# icons

Canonical repo for the DIY icon set.

Currently these icons should be used in cases where they support text since
there is no PNG fallback.

# Usage

## HTML

Copy the contents from `dist/diy-icons.svg` in to the top of your HTML document.

Then reference the `symbol` `id` with the `use` element.

```html
<symbol id="diy-icn-bookmark" viewBox="0 0 83.7 83.7">
  <path d="M17.6 22.9h48.6c7.2 0 11 8.1 5.8 12.8L47.6 58.5c-3.1 3.1-8.5 3.1-11.7 0L11.5 35.6c-4.9-4.7-1.3-12.7 6.1-12.7z"/>
</symbol>

...

<svg>
    <use xlink:href="#diy-icn-bookmark"></use>
</svg>
```

More info here: http://css-tricks.com/svg-sprites-use-better-icon-fonts/

Then use css to style the `svg` element.

# Contributing

Run `make` before committing so we include `dist/diy-icons.svg`.

# Todo

* Build CSS styles for drop in usage.
* Interface for easily injecting `diy-icons.svg` in to a project.
* PNG fallbacks (when necessary)
* Generate icon font for iOS (and other cases)
* Define spec for creating source `svg` files
* Automate building of `diy-icons.svg` on pre-commit
* Automatically add `display:none` to top level svg element in `diy-icons.svg`


# Must Read

https://docs.google.com/a/diy.org/presentation/d/1CNQLbqC0krocy_fZrM5fZ-YmQ2JgEADRh3qR6RbOOGk/preview?sle=true#slide=id.p
