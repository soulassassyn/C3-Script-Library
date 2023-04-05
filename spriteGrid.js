export class SpriteGrid {
    constructor(runtime, spriteName, numberOfRows, numberOfColumns) {
        this.runtime = runtime;
        this.spriteName = spriteName;
        this.numberOfRows = numberOfRows;
        this.numberOfColumns = numberOfColumns;
        this.currentPage = 0;
		this.gridUIDs = [];
    }
	
    create() {
        this.createGrid(this.currentPage);
    }

    createGrid(page) {
        const spriteObject = this.runtime.objects[this.spriteName];
        const tempInstance = spriteObject.createInstance(0, 0, 0);
        const totalFrames = tempInstance.animation.frameCount;
        const gap = 0;
        tempInstance.destroy();

        const alignObject = this.runtime.objects.align;
        const positionAlign = alignObject.getFirstPickedInstance();
        const ogPAX = positionAlign.x;
        const ogPAY = positionAlign.y;

        const framesPerPage = this.numberOfRows * this.numberOfColumns;
        let frameIndex = framesPerPage * page;
        for (let row = 0; row < this.numberOfRows; row++) {
            for (let col = 0; col < this.numberOfColumns; col++) {
                if (frameIndex < totalFrames) {
                    const newInstance = spriteObject.createInstance("partSelectUI", 0, 0);
					// Fills gridUIDs array with UID of created instance
					// Used for clearGrid()
					this.gridUIDs.push(newInstance.uid);
                    newInstance.setAnimation(this.spriteName);
                    newInstance.animationFrame = frameIndex;
                    newInstance.x = positionAlign.x;
                    newInstance.y = positionAlign.y;

                    positionAlign.x = positionAlign.width + (positionAlign.x + gap);
                    frameIndex++;
                } else {
                    positionAlign.x = ogPAX;
                    positionAlign.y = ogPAY;
                    break;
                }
            }
            positionAlign.x = ogPAX;
            positionAlign.y = positionAlign.height + (positionAlign.y + gap);
        }
        positionAlign.x = ogPAX;
        positionAlign.y = ogPAY;
		console.log(this.gridUIDs);
    }

    changePage(newPage) {
		console.log("changePage() called");
        this.currentPage = newPage;
        this.clearGrid();
        this.createGrid(newPage);
    }

	nextPage() {
		console.log("nextPage() called");
		const spriteObject = this.runtime.objects[this.spriteName];
		const tempInstance = spriteObject.createInstance(0, 0, 0);
		const totalFrames = tempInstance.animation.frameCount;
		tempInstance.destroy();

		const totalPages = Math.ceil(totalFrames / (this.numberOfRows * this.numberOfColumns));
		if (this.currentPage + 1 < totalPages) {
			this.changePage(this.currentPage + 1);
		}
	}

	previousPage() {
		console.log("previousPage() called");
		if (this.currentPage - 1 >= 0) {
			this.changePage(this.currentPage - 1);
		}
	}

    clearGrid() {
		console.log("clearGrid() called");
		for (let i = 0; i < this.gridUIDs.length; i++)
		{
			const forDestroy = this.runtime.getInstanceByUid(this.gridUIDs[i]);
			forDestroy.destroy();
		}
		this.gridUIDs = [];
    }
}

// Needed to initialize the spriteGrid object and attach it to the runtime object so that it's scoped Globally
function initializeSpriteGrid(runtime, spriteName, numberOfRows, numberOfColumns) {
    const spriteGrid = new SpriteGrid(runtime, spriteName, numberOfRows, numberOfColumns);
    runtime.spriteGrid = spriteGrid;
}
