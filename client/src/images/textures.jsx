import { TextureLoader } from "three";
import { dirt, glass, grass, log, wood } from "./images.jsx";

const dirtTexture = new TextureLoader().load(dirt);
const logTexture = new TextureLoader().load(log);
const grassTexture = new TextureLoader().load(grass);
const glassTexture = new TextureLoader().load(glass);
const woodTexture = new TextureLoader().load(wood);

export { dirtTexture, logTexture, grassTexture, glassTexture, woodTexture };
