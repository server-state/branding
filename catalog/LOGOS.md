## General logo design
Server State has three main types of logos:

- the brand (Server State) logo described below
- product logos, e.g., for the Web Client etc.
- module logos for individual modules

There are requirements all these logo types need to fulfill:

- they have to work in a square and a circle (and all in-between states)
- they have to work in multiple color environments:
  - Color (light and dark backgrounds)
  - Monochrome (light and dark backgrounds)
  - Stencil, i.e., in two values: "Black" and "White"

### The grid system
To keep sizing consistent throughout logos, we use a grid system when designing them.

Since we create logos as vector files, absolute sizes aren't a good measure for dimensions.

To get around this, we define our arbtoard as having the width and height `x` and define all other units around that.

The basic shape of the logo should get designed with a grid of 12 rows and columns with no margin, i.e., each cell having the width and height `x/12`, to add finer details, it's possible to later subdivide this into 24 sections with a width/height of `x/24`:

```image
plain: true
span: 3
src: "/grid/grid.svg"
description: 'Base grid with 12 rows and columns'
```
```image
plain: true
span: 3
src: "/grid/grid-subdivided.svg"
description: 'Subdivided grid with 24 rows and columns'
```

### Color usage
We want to create a good contrast with our logos. To achieve this, we use the colors *White*, *Light*, *Dark*, and *Black* (cf. [Colors](/colors)). To make the logo recognizable as being part of our brand, a small amount of the *Accent* color has to get added.

### The outline
To add more contrast to the background in transparent logos, we add an outline with a stroke width of `x/24` in the opposing color of the prosumed background color (i.e., *Black* for light backgrounds and *White* for dark backgrounds) to the main shape of the logo. This, e.g., gets used in the main Server State logo, as you can see below.

### Template
To make the logo design process easier, we provide an XD template file for creating Server State logos:

```download
title: 'XD Logo Template (.xd)'
subtitle: Guideline-compliant template for creating logos with Adobe XD
url: '/grid/logo-template.xd'
```

## The Server State logo
Depending on the environment, different variants of the Server State Logo may get used.

Overall, no strict guidelines are provided. However, the logo with the most contrast should get chosen whenever possible.

### On light backgrounds
```image
light: true
span: 3
src: "/logos/color-light.svg"
```

### On dark backgrounds
```image
dark: true
span: 3
src: "/logos/color-dark.svg"
```

### Monochrome environments
```image
light: true
span: 3
description: 'Monochrome logo on light backgrounds'
src: "/logos/monochrome-light.svg"
```
```image
dark: true
description: 'Monochrome logo on dark backgrounds'
span: 3
src: "/logos/monochrome-dark.svg"
```
### Black and White / Stencil environments
In some (rare) cases, a stencil logo (consisting only of two values, "black" and "white") can be required. In this case, the following logo variants should get used:

```image
span: 3
plain: true
description: 'Stencil logo (white on black)'
src: '/logos/stencil-wob.svg'
```
```image
span: 3
plain: true
description: 'Stencil logo (black on transparent)'
src: '/logos/stencil-transparent.svg'
```

Here, black should get considered "base level" and white the accent, e.g., an embossing.

### Downloads

```download
title: Color Logo (.svg)
subtitle: For light backgrounds
url: /logos/color-light.svg
span: 3
```
```download
title: Color Logo (.svg)
subtitle: For dark backgrounds
url: /logos/color-dark.svg
span: 3
```

```download
title: Monochrome Logo (.svg)
subtitle: For light backgrounds
url: /logos/monochrome-light.svg
span: 3
```
```download
title: Monochrome Logo (.svg)
subtitle: For dark backgrounds
url: /logos/monochrome-dark.svg
span: 3
```

```download
title: Stencil Logo (.svg)
subtitle: White on black
url: /logos/stencil-wob.svg
span: 3
```
```download
title: Stencil Logo (.svg)
subtitle: Black on transparent
url: /logos/stencil-transparent.svg
span: 3
```
