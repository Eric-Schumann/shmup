import k from '../context';
import Background from '../entities/background';
import Overlay from '../entities/overlay';
import Player from '../entities/player';
import { fadeIn } from '../entities/sceneTransitions';
import { LAYERS } from '../globals';

const MainScene = () => {

    fadeIn(2);

    const text = k.add([
        k.text('[W, A, S, D]'),
        k.pos(k.center()),
        k.layer(LAYERS.UI)
    ]);

    text.pos = k.vec2(
        (k.width() / 2) - (text.width / 2),
        k.height() - 40
    )

    const music = k.play('battle', {
        volume: 0.25,
        loop: true
    });

    const startLevelSound = k.play('start-level');

    let scrollSpeed = 200;

    Player({
        position: k.center(),
        speed: 400
    });

    Background({
        scrollSpeed,
        layer: LAYERS.BACKGROUND
    })
    

    Overlay({
        layer: LAYERS.BACKGROUND,
        color: 'blue',
        opacity: 0.1
    })

    k.onSceneLeave(() => {
        music.stop();
    });
}

export default MainScene