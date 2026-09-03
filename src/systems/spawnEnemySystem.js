import k from '../context';
import Enemy from '../entities/enemy';

const spawnEnemySystem = (waves) => {
    let waveStartTime = 0;

    waves.forEach((wave) => {
        waveStartTime += wave.delay;

        let enemyTime = waveStartTime;

        wave.enemies.forEach((enemy) => {
            enemyTime += enemy.delay;

            k.wait(enemyTime, () => {
                Enemy({
                    type: enemy.type,
                    position: k.vec2(enemy.x, -100),
                });
            });
        });

        waveStartTime = enemyTime;
    });
};


export default spawnEnemySystem;