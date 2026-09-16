import k from '../context';

const turnAndZoom = () => ({
    id: 'turn-and-zoom',
    add() {
        const waitTime = k.choose([2, 3, 4]);
        const rotationAngle = 45;

        const left = this.pos.x <= (k.width() / 2)

        k.wait(waitTime, () => {
            this.direction = k.vec2(0, 0);
            
            if(!this.has('rotate')) {
                this.use(k.rotate())
            }

            k.tween(
                this.angle, 
                left ? -rotationAngle: rotationAngle, 
                0.25,
                (newAngle) => this.angle = newAngle,
                k.easings.linear
            )

        })

        k.wait(waitTime * 1.25, () => {
            this.direction = left ? k.vec2(1, 1) : k.vec2(-1, 1);
            this.speed *= 5;
        });
    }
});

export default turnAndZoom