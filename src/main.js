import k from './context';
import { loadMusic, loadScenes, loadSound, loadSprites } from './utilities/loaders';

loadSprites();
loadMusic();
loadSound();
loadScenes(); 

k.go('main');

