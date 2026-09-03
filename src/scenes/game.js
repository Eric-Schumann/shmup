import k from '../context';
import waves from '../data/enemyWaves';
import { fadeIn } from '../effects/sceneTransitions';
import { StarsBackground } from '../entities/backgrounds';
import Overlay from '../entities/overlay';
import Player from '../entities/player';
import { LAYERS, SFX, SONGS } from '../globals';
import sfxService from '../services/sfxService';
import songService from '../services/songService';
import spawnEnemySystem from '../systems/spawnEnemySystem';

const GameScene = () => {

    fadeIn(2);

    spawnEnemySystem(waves);

    const text = k.add([
        k.text('[W, A, S, D]'),
        k.pos(k.center()),
        k.layer(LAYERS.UI)
    ]);

    text.pos = k.vec2(
        (k.width() / 2) - (text.width / 2),
        k.height() - 40
    )

    songService.play(SONGS.BATTLE, {
        volume: 0.25
    });


    sfxService.play(SFX.START_LEVEL)

    let scrollSpeed = 200;

    Player({
        position: k.center(),
        speed: 400
    });

    StarsBackground({
        scrollSpeed,
        layer: LAYERS.BACKGROUND
    })
    

    Overlay({
        layer: LAYERS.BACKGROUND,
        color: 'blue',
        opacity: 0.1
    })

    k.onSceneLeave(() => {
        songService.stop();
    });
}

export default GameScene