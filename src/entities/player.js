import controls from '../components/controls';
import movement from '../components/movement';
import screenbound from '../components/screenbound';
import k from '../context';
import { SCALE } from '../globals';


const Player = ({
    position=k.vec2(0,0),
    speed=100
}) => k.add([
        k.sprite('player'),
        k.anchor('center'),
        k.pos(position),

        k.area({ isSensor: true }),
        k.health(10, 10),

        k.scale(SCALE),

        "player",

        controls(),
        movement(),
        screenbound(),

        {
            speed,
            direction: k.vec2(0,0),
            shotCooldown: 0.5,
            invulnerable: false,
        }
    ])

export default Player;