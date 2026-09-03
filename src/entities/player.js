import k from '../context';
import CONTROLS from '../controls';


const playerController = () => ({
    id: 'playerController',
    require: ["pos", "sprite"],
    add() {

        this.onUpdate(() => {

            const scaleX = this.scale?.x || 1;
            const scaleY = this.scale?.y || 1;

            const halfWidth = (this.width / 2) * scaleX;
            const halfHeight = (this.height / 2) * scaleY;

            const left = k.isKeyDown(CONTROLS.MOVE_LEFT);
            const right = k.isKeyDown(CONTROLS.MOVE_RIGHT);
            const up = k.isKeyDown(CONTROLS.MOVE_UP);
            const down = k.isKeyDown(CONTROLS.MOVE_DOWN);

            const direction = k.vec2(
                Number(right) - Number(left),
                Number(down) - Number(up)
            )

            if(direction.len() > 0) {
                this.move(direction.unit().scale(this.speed));
            }

            this.pos.x = k.clamp(this.pos.x, halfWidth, k.width() - halfWidth);
            this.pos.y = k.clamp(this.pos.y, halfHeight, k.height() - halfHeight);
            
        });

    }
});

const Player = ({
    position=k.vec2(0,0),
    speed=100
}) => k.add([
        k.sprite('player'),
        k.anchor('center'),
        k.pos(position),

        k.scale(0.6),

        playerController(),

        {
            speed
        }
    ])

export default Player;