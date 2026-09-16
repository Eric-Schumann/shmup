import k from '../context';

const zigzag = () => ({
    id: 'zigzag',
    add() {
        this.direction = k.vec2(
            k.choose([1, -1]),
            1
        )
        k.loop(1, () => {
            this.direction.x *= -1;
        });
    }
});

export default zigzag;