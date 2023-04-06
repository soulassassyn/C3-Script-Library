export class MouseHoverEffect {
    constructor(runtime, objectName, mouseObjectName = 'Mouse', scaleUpFactor = 1.25, tweenDuration = 0.1) {
        this.runtime = runtime;
        this.objectName = objectName;
        this.mouseObjectName = mouseObjectName;
        this.scaleUpFactor = scaleUpFactor;
        this.tweenDuration = tweenDuration;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.runtime.addEventListener("tick", () => this.checkMouseHover());
    }

	checkMouseHover() {
		const object = this.runtime.objects[this.objectName];
		const mouse = this.runtime.objects.Mouse;

		// Get the mouse position using getMousePosition()
		const [mouseX, mouseY] = mouse.getMousePosition();

		// Use a for loop to iterate over the instances
		const instances = object.getAllInstances();
		for (let i = 0; i < instances.length; i++) {
			const instance = instances[i];

			console.log(instance.width);
			console.log(this.scaleUpFactor);
			if (instance.containsPoint(mouseX, mouseY)) {
				if (!instance.hovered) {
					instance.hovered = true;
					const scaleAmountX = this.scaleUpFactor;
					const scaleAmountY = this.scaleUpFactor;
					instance.behaviors.Tween.startTween("scale", [scaleAmountX, scaleAmountY], this.tweenDuration, "linear");
				}
			} else {
				if (instance.hovered) {
					instance.hovered = false;
					const scaleAmountX = 1
					const scaleAmountY = 1
					instance.behaviors.Tween.startTween("scale", [scaleAmountX, scaleAmountY], this.tweenDuration, "linear");
				}
			}
		}
	}
}