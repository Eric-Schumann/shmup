import k from '../context';
import { ENEMIES } from '../globals';

const waves = [
    {
        id: 1,
        delay: 2,
        enemies: [
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.DRONE, x: k.rand(10, k.width() - 10) },
        ]
    },
    {
        id: 2,
        delay: 5,
        enemies: [
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.ZIGZAG, x: k.rand(10, k.width() - 10) },
        ]
    },
    {
        id: 3,
        delay: 5,
        enemies: [
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
            { delay: 1, type: ENEMIES.KAMIKAZE, x: k.rand(10, k.width() - 10) },
        ]
    }
];

export default waves;