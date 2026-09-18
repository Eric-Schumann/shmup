import k from '../context';

const invulnerable = (gameObj, duration) => {
    if(!gameObj.exists()) return;
    gameObj.invulnerable = true;

    const loopController = k.loop(0.1, () => {
        gameObj.opacity = gameObj.opacity === 1 ? 0.35 : 1;
    });

    k.wait(duration, () => {
        gameObj.invulnerable = false;
        gameObj.opacity = 1;
        loopController.cancel();
    });
};

export default invulnerable;