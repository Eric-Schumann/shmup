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

            const xOffsetBullet = 34;
            const yOffsetBullet = 10;

            const xOffsetMuzzleFlash = 18;
            const yOffsetMuzzleFlash = 8;

            const bulletOnePos = k.vec2(this.pos.x - xOffsetBullet, this.pos.y + yOffsetBullet);
            const bulletTwoPos = k.vec2(this.pos.x + xOffsetBullet, this.pos.y + yOffsetBullet);

            if(shotTimer <= 0) {
                PlayerBullet({
                    position: bulletOnePos
                });

                PlayerBullet({
                    position: bulletTwoPos
                })

                muzzleFlash({
                    gameObj: this,
                    xOffset: -xOffsetMuzzleFlash,
                    yOffset: -yOffsetMuzzleFlash
                });

                muzzleFlash({
                    gameObj: this,
                    xOffset: xOffsetMuzzleFlash,
                    yOffset: -yOffsetMuzzleFlash
                });

                sfxService.play(SFX.PLAYER_SHOOT);
                shotTimer = this.shotCooldown;
            }
        }
    };
}

export default controls;