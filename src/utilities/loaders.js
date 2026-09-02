import k from '../context';
import MainScene from '../scenes/main';

const sprites = [
    { name: 'bg', path: 'sprites/stars.png' },
    { name: 'player', path: 'sprites/player.png' },
];

const scenes = [
    { name: 'main', scene: MainScene },
]

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

export { loadScenes, loadSprites };

