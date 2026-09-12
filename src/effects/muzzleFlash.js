import k from '../context';
import { LAYERS } from '../globals';

const muzzleFlash = ({gameObj, xOffset=0, yOffset=0}) => {
    const glow = gameObj.add([
        k.circle(8),
        k.layer(LAYERS.BULLET),
        k.pos(xOffset, yOffset),
        k.color(255, 255, 255),
        k.opacity(1),
        k.anchor('center'),
    ])

    const flash = gameObj.add([
        k.circle(5),
        k.layer(LAYERS.BULLET),
        k.pos(xOffset, yOffset),
        k.color(255, 255, 0),
        k.opacity(1),
        k.anchor('center'),
    ]);

    k.tween(1, 0, 0.06, (value) => {
        flash.opacity = value;
    });

    k.tween(1, 0, 0.1, (value) => {
        glow.opacity = value;
    });

    k.tween(1, 1.8, 0.12, (value) => {
        glow.scale = k.vec2(value);
    });

    k.wait(1, () => {
        glow.destroy();
        flash.destroy();
    })
}


export default muzzleFlash;