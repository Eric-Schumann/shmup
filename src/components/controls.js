import k from '../context';
import CONTROLS from '../controls';
import PlayerBullet from '../entities/playerBullet';
import { SFX } from '../globals';
import sfxService from '../services/sfxService';

const controls = () => ({
    id: 'controls',
    add() {

        this.onKeyPress('space', () => {
            this.shoot();
        });

        this.onUpdate(() => {

            const left = k.isKeyDown(CONTROLS.MOVE_LEFT);
            const right = k.isKeyDown(CONTROLS.MOVE_RIGHT);
            const up = k.isKeyDown(CONTROLS.MOVE_UP);
            const down = k.isKeyDown(CONTROLS.MOVE_DOWN);

            this.direction = k.vec2(
                Number(right) - Number(left),
                Number(down) - Number(up)
            )


        });

    },
    shoot() {
        PlayerBullet({
            position: k.vec2(this.pos.x, this.pos.y),
        });
        sfxService.play(SFX.PLAYER_SHOOT)
    }
});

export default controls;