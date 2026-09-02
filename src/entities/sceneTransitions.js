import k from '../context';
import { LAYERS } from '../globals';
import Overlay from './overlay';

const fadeIn = (duration = 0.5) => {
    
    const overlay = Overlay({
        layer: LAYERS.UI,
        color: 'black',
        opacity: 1
    })

    k.tween(
        1,
        0,
        duration,
        (value) => {
            overlay.opacity = value;
        },
        k.easings.easeOutQuad,
    ).then(() => {
        k.destroy(overlay);
    });
}

export {
    fadeIn
};
