import movement from '../components/movement';
import k from '../context';
import { LAYERS, SCALE } from '../globals';


const PlayerBullet = ({
    position=k.vec2(k.center()),
    speed=700,
}) => k.add([
        k.sprite('player-bullet'),
        k.pos(position),
        k.anchor('center'),
        k.area(),
        k.scale(SCALE),
        k.layer(LAYERS.BULLET),
        k.offscreen({ destroy: true }),

        movement(),

        "player-bullet",

        {
            direction: k.vec2(0, -1),
            speed,
        }
        
    ]);

export default PlayerBullet