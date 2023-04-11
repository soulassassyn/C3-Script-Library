export class EnemySpawner {
    constructor(runtime) {
        this.runtime = runtime;
		this.layer = "arenaObjects";
    }

    spawnEnemy(enemyObjectName, x, y, frame = 0, template = "enemy", type = "basic") {
        const enemyObjectClass = this.runtime.objects[enemyObjectName];

        // Spawn the enemy instance
        const enemyInstance = enemyObjectClass.createInstance(this.layer, x, y, "", template);
		enemyInstance.isVisible = true;
		enemyInstance.animationFrame = frame;
		enemyInstance.instVars.State = template;
		enemyInstance.instVars.Type = type;
		enemyInstance.instVars.enemyHP = 10;
		
		const enemyWeapon = this.spawnWeapon(x, y, frame);
		const enemyEngine = this.spawnEngine(x, y, frame);
        return { enemyInstance, enemyWeapon, enemyEngine };
    }
	
	spawnEnemyPart(x, y, frame = 0, template = "enemy") {
		const enemyWeaponClass = this.runtime.objects["weapon"];
		
		const enemyWeapon = enemyWeaponClass.createInstance(this.layer, x, y, "", template);
		enemyWeapon.isVisible = true;
		enemyWeapon.animationFrame = frame;
		return enemyWeapon;
	}
		
	updateAttachments(enemyInstance, enemyWeapon, enemyEngine) {
		enemyWeapon.x = enemyInstance.x;
		enemyWeapon.y = enemyInstance.y;
		enemyWeapon.angle = enemyInstance.angle;

		enemyEngine.x = enemyInstance.x;
		enemyEngine.y = enemyInstance.y;
		enemyEngine.angle = enemyInstance.angle;
	}

}