import k from '../context';
import { SFX, SONGS } from '../globals';
import GameScene from '../scenes/game';
import MainMenu from '../scenes/mainMenu';

const sprites = [
    { name: 'bg', path: 'sprites/stars.png' },
    { name: 'player', path: 'sprites/player.png' },
];

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
];

k.loadRoot("./"); // A good idea for Itch.io publishing later

const loadSprites = () => {
    sprites.forEach(sprite => {
        k.loadSprite(sprite.name, sprite.path);
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

