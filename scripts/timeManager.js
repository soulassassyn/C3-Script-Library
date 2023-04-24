// Construct r338 or later
export class TimeManager {
  constructor(runtime) {
    this.realTimeStart = Date.now();
    this.gameTimeStart = Date.now();
    this.gameTimePaused = false;
    this.gameTimeScale = 1;
    this.lastFrameTime = Date.now();
    this.runtime = runtime;
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
    this.gameTimeScale = scale;
	this.runtime.timeScale = scale;
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

  setObjectTimeScale(instance, scale) {
    instance.timeScale = scale;
  }

  getObjectTimeScale(instance) {
    return instance.timeScale;
  }

  restoreObjectTimeScale(instance) {
    instance.restoreTimeScale();
  }

  getDeltaTime() {
    const currentTime = Date.now();
    const deltaTime = currentTime - this.lastFrameTime;
    this.lastFrameTime = currentTime;
    return deltaTime;
  }
}
