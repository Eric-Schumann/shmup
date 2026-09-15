import k from '../context';

const enemyData = {
    drone: {
        sprite: 'drone',
        speed: 100,
        direction: k.vec2(0,1),
        health: 0,
        contactDamage: 0,
        score: 25,
    },
    fighter: {
        sprite: 'fighter',
        speed: 250,
        direction: k.vec2(0, 1),
        health: 0,
        contactDamage: 0,
        score: 25,
    },
    raptor: {
        sprite: 'raptor',
        speed: 250,
        direction: k.vec2(0, 1),
        health: 0,
        contactDamage: 0,
        score: 25
    }
};

export default enemyData;