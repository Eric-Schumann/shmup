import k from '../context';
import invulnerable from '../effects/invulnerable';
import { SFX } from '../globals';
import sfxService from '../services/sfxService';

export function setupCombatSystem() {
  k.onCollide("player", "enemy", (player, enemy) => {
    if(player.invulnerable) return;
    sfxService.play(SFX.CRASH);
    invulnerable(player, 2);
    player.hp -= enemy.contactDamage;
    const healthText = k.get('ui-health-text')[0];
    healthText.text = `Health ${player.hp}`;

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
