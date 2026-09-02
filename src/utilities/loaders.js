import k from '../context';

const sprites = [
    { name: 'bg', path: 'sprites/stars.png' },
];

k.loadRoot("./"); // A good idea for Itch.io publishing later

const loadSprites = () => {
    sprites.forEach(sprite => {
        k.loadSprite(sprite.name, sprite.path);
    })
}

export { loadSprites };

