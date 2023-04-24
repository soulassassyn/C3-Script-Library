// Construct r338 or later
export class TimeManager {
  constructor(runtime) {
    this.realTimeStart = Date.now();
    this.gameTimeStart = Date.now();
    this.gameTimePaused = false;
    this.gameTimeScale = 1;
    this.lastFrameTime = Date.now();
    this.runtime = runtime;
    this.objectTimeScales = new Map();
  }

  registerObject(instance) {
    this.objectTimeScales.set(instance, 1);
	console.log(instance & " registered.");
  }

  unregisterObject(instance) {
    this.objectTimeScales.delete(instance);
  }

  setObjectTimeScale(instance, scale) {
    this.objectTimeScales.set(instance, scale);
  }

  getObjectTimeScale(instance) {
    return this.objectTimeScales.get(instance) || 1;
  }

  restoreObjectTimeScale(instance) {
    this.objectTimeScales.set(instance, 1);
  }

  getRealTime() {
    return Date.now() - this.realTimeStart; // Return time in milliseconds
  }

  getGameTime() {
    if (this.gameTimePaused) {
      return this.gameTimePausedAt - this.gameTimeStart; // Return time in milliseconds
    }
    return (Date.now() - this.gameTimeStart) * this.gameTimeScale; // Return time in milliseconds
  }

  setGameTimeScale(scale) {
    if (!this.gameTimePaused) {
      this.gameTimeStart = Date.now() - this.getGameTime() / scale;
    }
    this.gameTimeScale = scale;
  }

  pauseGameTime() {
    if (!this.gameTimePaused) {
      this.gameTimePaused = true;
      this.gameTimePausedAt = Date.now();
    }
  }

  resumeGameTime() {
    if (this.gameTimePaused) {
      this.gameTimeStart += Date.now() - this.gameTimePausedAt;
      this.gameTimePaused = false;
    }
  }

  getDeltaTime(instance) {
    const currentTime = Date.now();
    const deltaTime = currentTime - this.lastFrameTime;
    this.lastFrameTime = currentTime;
    return deltaTime * this.getObjectTimeScale(instance);
  }
}
