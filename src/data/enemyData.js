import k from '../context';

const enemyData = {
    drone: {
        sprite: 'red',
        speed: 100,
        direction: k.vec2(0,1),
        health: 0,
        contactDamage: 0,
        score: 25,
    },
    fighter: {
        sprite: 'yellow',
        speed: 250,
        direction: k.vec2(0, 1),
        health: 0,
        contactDamage: 0,
        score: 25,
    },
};

export default enemyData;