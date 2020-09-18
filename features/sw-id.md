## sw-class
Use the exact same styling as the id specified.

### Usage

#### Input
```css
#elem {
    width: 100%;
    height: 100%;
}
.elem2 {
    sw-id: elem;
}
```
#### Output
```css
#elem {
    width: 100%;
    height: 100%;
}
.elem2 {
    width: 100%;
    height: 100%;
}
```