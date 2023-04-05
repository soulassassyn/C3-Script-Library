# C3-Script-Library
## Introduction
This is a library of custom functions and classes for Construct 3. We create helpful scripts that solve common use-cases. Feel free to browse the documentation and use any of these you might find helpful!

### Installation
Use any of the code in any of the .js files by either copy/pasting directly into a new Script in Construct 3 or,

Right-click on the `Scripts` folder and select `Import scripts` and add them from there.

### Follow Us!
Check us out on itch.io to see what we're up to!

- [ilovepixelart](https://ilovepixelart.itch.io/)
- [Robotpencil](https://robotpencil.itch.io/)

# Documentation
The name of the JS files are used as headers in this readme so you can easily ctrl+F to search for the docs on the exact script you're looking for.

## spriteGrid.js
This script creates paginated grids of sprites. This is useful for inventory systems or menu items.

### Setup
You need a sprite object named `align` in your Layout. This is used for the coordinates of spawning your grid. It represents the top-left position of your grid.

You will also need all of the sprites you want spawned in the grid to be in a single sprite object and in a single animation. Each object should be on a seperate frame of that animation.

### initializeSpriteGrid()
This method takes 4 arguments:
- runtime - this stays as it is and it allows the script to connect to Construct 3's runtime object
- sprite name (string) - the name of the sprite you want to show in the grid
- columns (int)
- rows (int)
```sh
initializeSpriteGrid(runtime, "core", 2, 4);
```
This will initialize and scope the grid globally to `runtime.spriteGrid`

### create()
Create the grid.
```sh
runtime.spriteGrid.create();
```

### nextPage()
Move to the next page if there are more objects than can be shown at once given the current grid size
```sh
runtime.spriteGrid.nextPage();
```

### previousPage()
Move to the previous page if there are more objects than can be shown at once given the current grid size
```sh
runtime.spriteGrid.previousPage();
```

### changePage()
Allows the querying of a specific page. Takes one argument:
- page number (int)

This example would take you to page 4 if it exists, if not, it will default to the last page available.
```sh
runtime.spriteGrid.changePage(4);
```
