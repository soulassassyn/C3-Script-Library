## spriteGrid.js
This script creates paginated grids of sprites. This is useful for inventory systems or menu items.

### Setup
1. This class is exported and needs to be imported into your project's `main.js` file. You can do this by adding the following line to the top of your main.js file:
```sh
import { SpriteGrid } from "./spriteGrid.js";
```

2. After that, you can initialize the class by adding the following line inside of the `OnBeforeProjectStart` function:
```sh
initalizeSpriteGrid(runtime, "foo");
```

3. Add a sprite object to your layout and name it `foo`. This is the object that will be spawned.

4. Creat an animation inside the new object also named `foo`. This is the animation that will be used. If you want to use multiple frames, the grid will be populated with each frame of the animation. Otherwise, the grid will be populated with the single frame of the animation.

5. Add a sprite object to your layout and name it `align`. This is the object that will be used to align the grid. It represents the top-left position of the grid.

6. In your `Event Sheet`, create a new `On start of layout` event and add the following code:
```sh
runtime.spriteGrids.foo.create();
```

7. Now run your game and you should see a grid of the `foo` sprites.

## Methods

### initializeSpriteGrid()
This method takes 2 arguments and takes 3 optional arguments:
- runtime - this stays as it is and it allows the script to connect to Construct 3's runtime object
- spriteName (string) - the name of the sprite you want to show in the grid
- [optional] columns (number) - the number of columns you want in your grid. Defaults to 3
- [optional] rows (number) - the number of rows you want in your grid. Defaults to 3
- [optional] gap (number) - the gap between each sprite in the grid. Defaults to 0

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
- page number (number) - the page number you want to go to

This example would take you to page 4 if it exists, if not, it will default to the last page available.
```sh
runtime.spriteGrids.foo.changePage(4);
```