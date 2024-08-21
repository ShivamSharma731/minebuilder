import { NearestFilter, TextureLoader } from "three";
import { dirt, glass, grass, log, wood } from "./images.jsx";

const dirtTexture = new TextureLoader().load(dirt);
const logTexture = new TextureLoader().load(log);
const grassTexture = new TextureLoader().load(grass);
const glassTexture = new TextureLoader().load(glass);
const woodTexture = new TextureLoader().load(wood);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

export { dirtTexture, logTexture, grassTexture, glassTexture, woodTexture };
