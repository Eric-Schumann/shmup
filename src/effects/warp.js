import k from '../context';
import { SCALE } from '../globals';

const warp = (gameObject) => {
    const inistialYScale = gameObject.scale.y;
    k.tween(
        inistialYScale,
        SCALE * 4,
        0.15,
        value => gameObject.scale = k.vec2(SCALE, value),
        k.easings.easeOutQuad
    );

    k.wait(0.15, () => {
        k.tween(
            gameObject.scale.y,
            inistialYScale,
            0.3,
            value => gameObject.scale = k.vec2(SCALE, value),
            k.easings.easeInOutQuad
        )
    });
};

export default warp;