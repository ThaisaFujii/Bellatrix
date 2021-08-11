const Phaser = require("../../phaser2");

export default class SceGame extends Phaser.Scene {
    constructor() {
        super({key:"SceGame"});
    }
    preloader() {
        this.load.image("backmoon","Images/Background/moon.jpg")
    }
    create() {
        const backm = this.add.image(0,0, "backmoon")
        backm.setOrigin(0, 0);
    }
    update() {}
}