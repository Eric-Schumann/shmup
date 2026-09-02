import Background from '../components/background';
import Overlay from '../components/overlay';
import k from '../context';
import { LAYERS } from '../globals';

const MainScene = () => {

    let scrollSpeed = 200;

    k.setLayers([
        LAYERS.BACKGROUND,
        LAYERS.MID,
        LAYERS.FOREGROUND,
        LAYERS.UI
    ], LAYERS.MID);

    k.add([
        k.sprite('player'),
        k.pos(k.center()),
        k.anchor('center'),
    ])

    Background({
        scrollSpeed,
        layer: LAYERS.BACKGROUND
    })
    

    Overlay({
        layer: LAYERS.BACKGROUND,
        color: 'blue',
        opacity: 0.1
    })
}

export default MainScene