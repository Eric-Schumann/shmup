import movement from '../components/movement';
import k from '../context';
import enemyData from '../data/enemyData';
import { SCALE } from '../globals';

const Enemy = ({type, position=k.vec2(0,0)}) => {

    const config = enemyData[type];

    const ship = k.add([
        k.sprite(config.sprite),
        k.pos(position),
        k.offscreen({ destroy: true }),
        k.scale(SCALE),
        k.anchor('center'),
        k.area({ isSensor: true }),
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

    if(config.behavior) {
        ship.use(config.behavior());
    }

    const fire = ship.add([
        k.sprite('fire'),
        k.anchor('center'),
        k.pos(2, -11),
    ]);

    fire.flipY = true;
    ship.flipY = true;

    return ship;
};

export default Enemy;