import movement from '../components/movement';
import k from '../context';
import enemyData from '../data/enemyData';

const Enemy = ({type, position=k.vec2(0,0)}) => {

    const config = enemyData[type];

    return k.add([
        //k.sprite(config.sprite),
        k.circle(10, {
            fill: true,
        }),
        k.color(config.sprite),
        k.pos(position),
        k.offscreen({ destroy: true }),
        area(),
        //k.health(config.health),

        movement(),

        "enemy",
        type,
        {
            enemyType: type,
            speed: config.speed,
            contactDamage: config.contactDamage,
            scoreValue: config.score,
            direction: config.direction
        }
    ]);
};

export default Enemy;