import k from '../context';
import { LAYERS, SCALE } from '../globals';

const Overlay = ({
    layer=LAYERS.BACKGROUND,
    color='blue',
    opacity=1
}) => k.add([
        k.rect(k.width(), k.height()),
        k.color(color),
        k.pos(0,0),
        k.scale(SCALE),
        k.layer(layer),
        k.opacity(opacity)
    ]);

export default Overlay