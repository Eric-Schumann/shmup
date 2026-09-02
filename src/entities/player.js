import k from '../context';

const playerController = () => ({
    id: 'playerController',
    require: ["pos", "sprite"],
    add() {

        this.onUpdate(() => {
            let direction = k.vec2(0,0);
            const halfWidth = this.width / 2;
            const halfHeight = this.height / 2;

            const left = k.isKeyDown(['left', 'a']);
            const right = k.isKeyDown(['right', 'd']);
            const up = k.isKeyDown(['up', 'w']);
            const down = k.isKeyDown(['down', 's']);

            direction = k.vec2(
                Number(right) - Number(left),
                Number(down) - Number(up)
            )

            this.pos.x = k.clamp(this.pos.x, halfWidth, k.width() - halfWidth);
            this.pos.y = k.clamp(this.pos.y, halfHeight, k.height() - halfHeight);
            
            if(direction.len() > 0) {
                this.move(direction.unit().scale(this.speed));
            }
        });

    }
});

const Player = ({
    position=k.vec2(0,0),
    speed=100
}) => {
    k.add([
        k.sprite('player'),
        k.anchor('center'),
        k.pos(position),

        playerController(),

        {
            speed
        }
    ])
}

export default Player;