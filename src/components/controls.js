import k from '../context';
import CONTROLS from '../controls';

const controls = () => ({
    id: 'controls',
    add() {

        this.onUpdate(() => {

            const left = k.isKeyDown(CONTROLS.MOVE_LEFT);
            const right = k.isKeyDown(CONTROLS.MOVE_RIGHT);
            const up = k.isKeyDown(CONTROLS.MOVE_UP);
            const down = k.isKeyDown(CONTROLS.MOVE_DOWN);

            this.direction = k.vec2(
                Number(right) - Number(left),
                Number(down) - Number(up)
            )

        });

    }
});

export default controls;