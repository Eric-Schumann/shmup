import k from './context';
import { loadScenes, loadSprites } from './utilities/loaders';

loadSprites();
loadScenes(); 

k.go('main');

