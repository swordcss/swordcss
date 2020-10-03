## sw-variables
A much simpler way to use CSS variables.

### Usage

#### Input
```css
@sw-variables {
    red: rgb(255, 0, 0);
}
.elem {
    color: red;
}
```

#### Output
```css
:root {
    --red: rgb(255, 0, 0);
}
.elem {
    color: var(--red);
}
```