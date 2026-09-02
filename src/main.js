import Background from './components/background';
import Overlay from './components/overlay';
import k from './context';
import { LAYERS } from './globals';
import { loadSprites } from './utilities/loaders';

loadSprites();

k.scene('main', () => {

    let scrollSpeed = 100;

    k.setLayers([
        LAYERS.BACKGROUND, 
        LAYERS.MID, 
        LAYERS.FOREGROUND, 
        LAYERS.UI
    ], LAYERS.MID);

    const [bgOne, bgTwo] = Background({
        scrollSpeed
    });    

    Overlay({
        layer: LAYERS.BACKGROUND,
        color: 'blue',
        opacity: 0.1
    })

});

k.go('main');

