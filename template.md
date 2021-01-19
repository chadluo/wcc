# Web Components Cheatsheet

## Basic customized built-in elements

1. basic-built-in.html

rendered dom:

```html
<button is="custom-button">yay</button>
```

## Attributes with autonomous custom elements

2. attributes-autonomous.html

rendered dom:

```html
<custom-element data-owner="yukirock">yay yukirock</custom-element>
```

## Basic shadow dom and template

Seems they must work together.

3. shadow-dom-template.html

rendered dom:

![](shadowroot-template.png)
