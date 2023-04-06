## spriteGrid.js
This script creates paginated grids of sprites. This is useful for inventory systems or menu items.

### Setup
You need a sprite object named `align` in your Layout. This is used for the coordinates of spawning your grid. It represents the top-left position of your grid.

You will also need all of the sprites you want spawned in the grid to be in a single sprite object and in a single animation. Each individual sprite should be on a seperate frame of that animation.

### initializeSpriteGrid()
This method takes 5 arguments:
- runtime - this stays as it is and it allows the script to connect to Construct 3's runtime object
- object name (string) - this is the name of the grid object
- sprite name (string) - the name of the sprite you want to show in the grid
- columns (number) - the number of columns you want in your grid
- rows (number) - the number of rows you want in your grid
```sh
initializeSpriteGrid(runtime, "foo", "core", 2, 4);
```
This will initialize and scope the grid globally to `runtime.spriteGrids.foo`

### create()
Create the grid.
```sh
runtime.spriteGrids.foo.create();
```

### nextPage()
Move to the next page if there are more objects than can be shown at once given the current grid size
```sh
runtime.spriteGrids.foo.nextPage();
```

### previousPage()
Move to the previous page if there are more objects than can be shown at once given the current grid size
```sh
runtime.spriteGrids.foo.previousPage();
```

### changePage()
Allows the querying of a specific page. Takes one argument:
- page number (int)

This example would take you to page 4 if it exists, if not, it will default to the last page available.
```sh
runtime.spriteGrids.foo.changePage(4);
```