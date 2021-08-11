import SceGame from "./Scenes/SceGame";

const Phaser = require("../phaser2");

const config = {
    type: Phaser.AUTO,
    width:400,
    height:400,
    parent: "Bellatrix",
    scene: [SceGame]
}

const jogo = new Phaser.Game(config);