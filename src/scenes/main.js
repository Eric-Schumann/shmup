import k from '../context';
import Background from '../entities/background';
import Overlay from '../entities/overlay';
import { LAYERS } from '../globals';

const MainScene = () => {

    const music = k.play('battle', {
        volume: 0.25,
        loop: true
    });

    const startLevelSound = k.play('start-level');

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