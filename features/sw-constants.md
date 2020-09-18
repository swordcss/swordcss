## sw-constants
Create constants that can be used anywhere in your project.

### Usage

#### Input
```css
@sw-constants {
    red: rgb(255, 0, 0);
}
.elem {
    color: red;
}
```
#### Output
```css
.elem {
    color: rgb(255, 0, 0);
}
```