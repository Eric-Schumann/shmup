import k from './context';
import { LAYERS } from './globals';
import { loadMusic, loadScenes, loadSound, loadSprites } from './services/loadServices';

k.setLayers([
    LAYERS.BACKGROUND,
    LAYERS.MID,
    LAYERS.FOREGROUND,
    LAYERS.UI
], LAYERS.MID)


loadSprites();
loadMusic();
loadSound();
loadScenes(); 

let debugMode = false;

k.onKeyPress('f1', () => {
    debugMode = !debugMode;
});

k.debug.inspect = debugMode;

k.go('main-menu');

