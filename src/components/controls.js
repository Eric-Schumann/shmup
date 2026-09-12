import k from '../context';
import CONTROLS from '../controls';
import muzzleFlash from '../effects/muzzleFlash';
import PlayerBullet from '../entities/playerBullet';
import { SFX } from '../globals';
import sfxService from '../services/sfxService';

const controls = () => {

    let shotTimer = 0;

    return {
        id: 'controls',
        add() {
            shotTimer = this.shotCooldown;
            this.onKeyDown(CONTROLS.SHOOT, () => {
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
            const bulletPosition = k.vec2(this.pos.x + 31, this.pos.y);

            if(shotTimer <= 0) {
                PlayerBullet({
                    position: bulletPosition
                });

                muzzleFlash({
                    gameObj: this,
                    yOffset: -20
                });

                sfxService.play(SFX.PLAYER_SHOOT);
                shotTimer = this.shotCooldown;
            }
        }
    };
}

export default controls;