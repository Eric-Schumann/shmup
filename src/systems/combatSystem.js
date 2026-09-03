import k from '../context';

export function setupCombatSystem() {
  k.onCollide("player", "enemy", (player, enemy) => {
    // TODO
    // if (!player.invulnerable) {
    //   player.hurt(enemy.contactDamage);
    //   applyKnockback(player, enemy);
    // }
  });

  k.onCollide("projectile", "enemy", (projectile, enemy) => {
    // TODO
    // enemy.hurt(projectile.damage);
    // k.destroy(projectile);
  });

  k.on("death", "enemy", (enemy) => {
    //TODO: addScore(enemy.scoreValue);
    //TODO: spawnDeathEffect(enemy.pos);
    k.destroy(enemy);
  });
}
