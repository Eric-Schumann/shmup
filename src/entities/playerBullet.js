import movement from '../components/movement';
import k from '../context';


const PlayerBullet = ({
    position=k.vec2(k.center()),
    speed=500,
}) => k.add([
        k.sprite('player-bullet'),
        k.pos(position),
        k.anchor('center'),
        k.area(),
        k.scale(2),
        k.z(-1),
        k.offscreen({ destroy: true }),

        movement(),

        "player-bullet",

        {
            direction: k.vec2(0, -1),
            speed,
        }
        
    ]);

export default PlayerBullet