import k from './context';
import { LAYERS } from './globals';
import { loadMusic, loadScenes, loadSound, loadSprites } from './services/loaders';

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

k.go('main-menu');

