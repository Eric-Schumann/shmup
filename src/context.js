import kaplay from 'kaplay';
import { SCALE } from './globals';

const k = kaplay({
    crisp: true,
    background: 'black',
    width: 480 * SCALE,
    height: 270 * SCALE
});

export default k