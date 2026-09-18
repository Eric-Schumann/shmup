import k from '../context';
import { SFX, SONGS } from '../globals';
import GameScene from '../scenes/game';
import MainMenu from '../scenes/mainMenu';

const sprites = [
    { name: 'bg', path: 'sprites/stars.png' },
    { name: 'player', path: 'sprites/player.png' },
    { name: 'player-bullet', path: 'sprites/player_bullet.png'},
    { name: 'enemy-bullet', path: 'sprites/enemy_bullet.png'},
];

const atlas = {
    "fire": {
        x: 0,
        y: 69,
        width: 11,
        height: 11,
    },
    "drone": {
        x: 0,
        y: 0,
        width: 22,
        height: 22,
    },
    "zigzag": {
        x: 0,
        y: 23,
        width: 22,
        height: 22
    },
    "kamikaze": {
        x: 0,
        y: 46,
        width: 22,
        height: 22
    },
}

const scenes = [
    { name: 'game', scene: GameScene },
    { name: 'main-menu', scene: MainMenu },
]

const songs = [
    { name: SONGS.BATTLE, path: 'audio/music/battle.wav' },
    { name: SONGS.WRECKAGE, path: 'audio/music/in-the-wreckage.wav' },
    { name: SONGS.LOADING, path: 'audio/music/loading.wav' },
    { name: SONGS.PRINCESS, path: 'audio/music/meet-the-princess.wav' },
    { name: SONGS.MENU, path: 'audio/music/menu.wav' },
    { name: SONGS.TRAVEL, path: 'audio/music/slow-travel.wav' },
]

const effects = [
    { name: SFX.ALIEN_TALK_ONE, path: 'audio/effects/alien-talk-1.wav' },
    { name: SFX.ALIEN_TALK_TWO, path: 'audio/effects/alien-talk-2.wav' },
    { name: SFX.ALIEN_TALK_THREE, path: 'audio/effects/alien-talk-3.wav' },
    { name: SFX.SCREAM, path: 'audio/effects/scream.wav' },
    { name: SFX.START_LEVEL, path: 'audio/effects/start-level.wav' },
    { name: SFX.PLAYER_SHOOT, path: 'audio/effects/alienshoot1.wav' },
    { name: SFX.ENEMY_SHOOT, path: 'audio/effects/alienshoot2.wav' },
    { name: SFX.CRASH, path: 'audio/effects/crash.wav' },
    { name: SFX.PLAYER_EXPLODE, path: 'audio/effects/playerExplode.wav' },
];

k.loadRoot("./"); // A good idea for Itch.io publishing later

const loadSprites = () => {
    sprites.forEach(({ name, path }) => {
        k.loadSprite(name, path);
    })

    k.loadSpriteAtlas('sprites/enemies.png', {
        "drone": atlas["drone"],
        "zigzag": atlas["zigzag"],
        "kamikaze": atlas["kamikaze"],
        "fire": atlas["fire"],
    })
}

const loadScenes = () => {
    scenes.forEach(({ name, scene }) => {
        k.scene(name, scene);
    })
}

const loadMusic = () => {
    songs.forEach(({ name, path }) => {
        k.loadMusic(name, path);
    })
}

const loadSound = () => {
    effects.forEach(({ name, path }) => {
        k.loadSound(name, path);
    })
}

export { loadMusic, loadScenes, loadSound, loadSprites };

