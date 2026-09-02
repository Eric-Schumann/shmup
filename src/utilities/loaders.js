import k from '../context';
import MainScene from '../scenes/main';

const sprites = [
    { name: 'bg', path: 'sprites/stars.png' },
    { name: 'player', path: 'sprites/player.png' },
];

const scenes = [
    { name: 'main', scene: MainScene },
]

const music = [
    { name: 'battle', path: 'audio/music/battle.wav' },
    { name: 'wreckage', path: 'audio/music/in-the-wreckage.wav' },
    { name: 'loading', path: 'audio/music/loading.wav' },
    { name: 'princess', path: 'audio/music/meet-the-princess.wav' },
    { name: 'menu', path: 'audio/music/menu.wav' },
    { name: 'travel', path: 'audio/music/slow-travel.wav' },
]

const effects = [
    { name: 'alien-talk-1', path: 'audio/effects/alien-talk-1.wav' },
    { name: 'alien-talk-2', path: 'audio/effects/alien-talk-2.wav' },
    { name: 'alien-talk-3', path: 'audio/effects/alien-talk-3.wav' },
    { name: 'scream', path: 'audio/effects/scream.wav' },
    { name: 'start-level', path: 'audio/effects/start-level.wav' },
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
    music.forEach(({ name, path }) => {
        k.loadMusic(name, path);
    })
}

const loadSound = () => {
    effects.forEach(({ name, path }) => {
        k.loadSound(name, path);
    })
}

export { loadMusic, loadScenes, loadSound, loadSprites };

