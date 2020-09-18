## sw-class
Use any valid DOM Query to use the exact styling of the styles attached to that selector.

### Usage

#### Input
```css
#elem {
    width: 100%;
    height: 100%;
}
.elem2 {
    sw-query: #elem;
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