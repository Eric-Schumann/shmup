import turnAndZoom from '../components/turnAndZoom';
import zigzag from '../components/zigzag';
import k from '../context';
import { ENEMIES } from '../globals';

const enemyData = {
    drone: {
        sprite: ENEMIES.DRONE,
        speed: 100,
        direction: k.vec2(0,1),
        health: 0,
        contactDamage: 0,
        score: 25,
        behavior: undefined
    },
    zigzag: {
        sprite: ENEMIES.ZIGZAG,
        speed: 250,
        direction: k.vec2(0, 1),
        health: 0,
        contactDamage: 0,
        score: 25,
        behavior: zigzag
    },
    kamikaze: {
        sprite: ENEMIES.KAMIKAZE,
        speed: 100,
        direction: k.vec2(0, 1),
        health: 0,
        contactDamage: 0,
        score: 25,
        behavior: turnAndZoom
    }
};

export default enemyData;