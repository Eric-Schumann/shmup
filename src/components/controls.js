import k from '../context';
import CONTROLS from '../controls';
import PlayerBullet from '../entities/playerBullet';
import { SFX } from '../globals';
import sfxService from '../services/sfxService';

const controls = () => {

    let shotTimer = 0;

    return {
        id: 'controls',
        add() {
            shotTimer = this.shotCooldown;
            this.onKeyDown('space', () => {
                this.shoot();
            });

        },
        update() {

            shotTimer -= k.dt();

            const left = k.isKeyDown(CONTROLS.MOVE_LEFT);
            const right = k.isKeyDown(CONTROLS.MOVE_RIGHT);
            const up = k.isKeyDown(CONTROLS.MOVE_UP);
            const down = k.isKeyDown(CONTROLS.MOVE_DOWN);

            this.direction = k.vec2(
                Number(right) - Number(left),
                Number(down) - Number(up)
            )
        },
        shoot() {
            if(shotTimer <= 0) {
                PlayerBullet({
                    position: k.vec2(this.pos.x, this.pos.y),
                });
                sfxService.play(SFX.PLAYER_SHOOT);
                shotTimer = this.shotCooldown;
            }
        }
    };
}

export default controls;