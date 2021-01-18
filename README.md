# Web Component Cheatsheet

## Basic autonomous custom elements

```html
<!DOCTYPE html>
<html>
  <!-- declaration -->
  <custom-element></custom-element>
  <script>
    customElements.define(
      "custom-element", // mandatory '-'
      // extends base class
      class extends HTMLElement {
        constructor() {
          super(); // mandatory super call
          this.append("yay");
        }
      }
    );
  </script>
</html>
```

rendered dom:

```
<custom-element>yay</custom-element>
```

## Basic customized built-in elements

```html
<!DOCTYPE html>
<html>
  <!-- declaration -->
  <button is="custom-button"></button>
  <script>
    customElements.define(
      "custom-button", // mandatory '-'
      // extends specific element class
      class extends HTMLButtonElement {
        constructor() {
          super(); // mandatory super call
          this.append("yay");
        }
      },
      // mandatory parameter for `customElements.define` method
      { extends: "button" }
    );
  </script>
</html>
```

rendered dom:

```
<button is="custom-button">yay</button>
```
