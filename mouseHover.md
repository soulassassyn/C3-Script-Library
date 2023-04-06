## mouseHover.js
This script allows you to detect when the mouse is hovering over an object. It also allows you to detect when the mouse is no longer hovering over an object.

### Setup
1. This class is exported and needs to be imported into your project's `main.js` file. You can do this by adding the following line to the top of your main.js file:
```sh
import { MouseHover } from "./mouseHover.js";
```

2. After that, you can initialize the class by adding the following line inside of the `OnBeforeProjectStart` function:
```sh
const mouseHover = new MouseHover(runtime, "foo");
```
3. Create a new Sprite object in your layout and name it `foo`. This is the object you want to scale up when the mouse is hovering over it.

4. Add a new `Tween` behavior to the `foo` object. This is used to scale up the object when the mouse is hovering over it.

5. Add a new `Mouse` object to your layout. This is used to detect the mouse position.

6. Run your game and you should see the `foo` object scale up when the mouse is hovering over it.

## Methods

### MouseHover()
This method requires 2 arguments and takes 4 optional argument:
- runtime - this stays as it is and it allows the script to connect to Construct 3's runtime object
- objectName (string) - the name of the sprite you want to have the mouse hover detection on
- [optional] scaleUpFactor (number) - the amount you want to scale up the sprite when the mouse is hovering over it. Defaults to 1.25
- [optional] scaleDownFactor (number) - the amount you want to scale down the sprite when the mouse is no longer hovering over it. Defaults to 1
- [optional] tweenDuration (number) - the duration of the tween when the mouse is hovering over the sprite. Defaults to 0.1
- [optional] mouseObjectName (string) - the name of the mouse object in your layout. Defaults to "Mouse"

### checkMouseHover()
This method checks if the mouse is hovering over the sprite. It takes no arguments and returns a boolean.