import k from '../context';
import { LAYERS, SCALE, SCROLL_SPEED } from '../globals';

const Background = ({
    scrollSpeed=SCROLL_SPEED
}) => {
    const bgOne = k.add([
        k.sprite('bg'),
        k.pos(0,0),
        k.scale(SCALE),
        k.layer(LAYERS.BACKGROUND),
        {
            scrollSpeed
        }
    ]);

    const bgTwo = k.add([
        k.sprite('bg'),
        k.scale(SCALE),
        k.pos(0, k.height()),
        k.layer(LAYERS.BACKGROUND),
        {
            scrollSpeed
        }
    ]);

    k.onUpdate(() => {
        bgOne.move(0, -bgOne.scrollSpeed);
        bgTwo.move(0, -bgTwo.scrollSpeed);

        if(bgOne.pos.y <= -k.height()) {
            bgOne.pos.y = bgTwo.pos.y + k.height();
        }

        if(bgTwo.pos.y <= -k.height()) {
            bgTwo.pos.y = bgOne.pos.y + k.height();
        }
    });

    return [bgOne, bgTwo];
}

export default Background;
