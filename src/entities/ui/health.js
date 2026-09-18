import k from '../../context';
import { COLORS, LAYERS, SCALE } from '../../globals';

const Health = () => {

    const player = k.get('player')[0];
    const green = k.rgb(COLORS.GREEN.r, COLORS.GREEN.g, COLORS.GREEN.b);
    const red = k.rgb(COLORS.RED.r, COLORS.RED.g, COLORS.RED.b);

    const hp = k.add([
        k.sprite('ui-health'),
        k.pos(10, 10),
        k.scale(SCALE),
        k.layer(LAYERS.UI),
        'ui-health',
    ]);

    const bars = [];

    for(let i = 0; i< player.maxHP; i++) {
        const bar = hp.add([
            k.rect(2, 10, {
                fill: true,
            }),
            k.pos((i * 3), 15
            ),
            k.color(0, 0, 0),
            `bar-${i+1}`
        ]);

        bars.push(bar);
    }

    let previousHP = null;

    hp.onUpdate(() => {

        if(player.hp === previousHP) return;

        previousHP = player.hp;

        bars.forEach((bar, i) => {
            bar.color = i >= player.hp
            ? red
            : green;
        });
    });


    return hp;
}

export default Health;