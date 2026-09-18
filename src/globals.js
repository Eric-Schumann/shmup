const SCALE = 2
const SCROLL_SPEED = 200;

const LAYERS = {
    BACKGROUND: 'background',
    BULLET: 'bullet',
    MID: 'mid',
    FOREGROUND: 'foreground',
    UI: 'ui'
}

const SONGS = {
    BATTLE: 'battle',
    WRECKAGE: 'wreckage',
    LOADING: 'loading',
    PRINCESS: 'princess',
    MENU: 'menu',
    TRAVEL: 'travel',
};

const SFX = {
    ALIEN_TALK_ONE: 'alien-talk-1',
    ALIEN_TALK_TWO: 'alien-talk-2',
    ALIEN_TALK_THREE: 'alien-talk-3',
    SCREAM: 'scream',
    START_LEVEL: 'start-level',
    PLAYER_SHOOT: 'player-shoot',
    ENEMY_SHOOT: 'enemy-shoot',
    CRASH: 'crash',
    PLAYER_EXPLODE: 'player-explode',
};

const ENEMIES = {
    DRONE: 'drone',
    ZIGZAG: 'zigzag',
    KAMIKAZE: 'kamikaze'
}

const COLORS = {
    GREEN: { r: 139, g: 195, b: 74},
    YELLOW: { r: 253, g: 216, b: 53},
    RED: { r: 191, g: 54, b: 12}
}

export { COLORS, ENEMIES, LAYERS, SCALE, SCROLL_SPEED, SFX, SONGS };

