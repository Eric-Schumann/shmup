import k from '../context';
import waves from '../data/enemyWaves';
import { fadeIn } from '../effects/sceneTransitions';
import { StarsBackground } from '../entities/backgrounds';
import Overlay from '../entities/overlay';
import Player from '../entities/player';
import Health from '../entities/ui/health';
import { LAYERS, SFX, SONGS } from '../globals';
import sfxService from '../services/sfxService';
import songService from '../services/songService';
import { setupCombatSystem } from '../systems/combatSystem';
import spawnEnemySystem from '../systems/spawnEnemySystem';


const GameScene = () => {

    fadeIn(2);

    spawnEnemySystem(waves);
    setupCombatSystem();

    songService.play(SONGS.BATTLE, {
        volume: 0.25
    });


    sfxService.play(SFX.START_LEVEL)

    let scrollSpeed = 300;

    const player = Player({
        position: k.center(),
        speed: 400
    });

    player.onDeath(() => {
        player.destroy();
        sfxService.play(SFX.PLAYER_EXPLODE);
        k.wait(2, () => {
            k.go('main-menu');
        });
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

    Health();

    k.onSceneLeave(() => {
        songService.stop();
    });
}

export default GameScene