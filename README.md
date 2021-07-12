# Calico grid :3

Something im cookin up.
A react component css grid with opinionated layout structure using css vars.

## Getting started

This project is boostrapped with create react app

To run this project in dev mode go to the root of the project and to install core packages run

```
npm i
```

## Devleopment mode

To run the project in devlopment mode run

```
npm run dev
```

## How To use Calico :3

This grid system is managed via a config called config.js. Conifg is the structure of the css grid

```
{
    name: 'md' // breakpoint name,
    size: 768 //min width of breakpoint in px,
    cols: 8 // the number of visual design columns at breakpoint,
    gutter: {
      outer: '24px' // outer spacing of entire grid,
      inner: '24px' // space between each grid col,
    },
    {ect},
    {ect},
}
```

These are dynamic and are generated via css vars.

---

### Helpful tips

- Don't overlap `size` values in `config.js`. This will lead to weird breakpoint issues!
- the last gutter outer should be `auto` as a value - this will fix the final width to what you'd expect

---

## Roadmap

calico isnt finished, while it is workable i feel like it should be able to do a few more things:

- `push={}` add a push prop for adding cols and colspan
- Currently im using SiteWrapper as a context to allow the config be readily accessed - while this is not a common pattern i think it will have peformance gains when adding the next feature: dynmaic grid name props...
- Allowing dynamic grid name props in every ColSpan and Cell. which would allow you to do something like `<Cell sm={4} md={5} lg={10} xlrg={12}>` rather than the current array system `<Cell mediaQuerySpan={[4,5,10,12]} />` (and allow both styles)
