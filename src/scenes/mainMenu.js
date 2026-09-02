import k from '../context';
import Overlay from '../entities/overlay';

const MainMenu = () => {

    let musicStarted = false;

    const music = k.play('menu', {
        volume: 0.5,
        loop: true,
        paused: true,
    })

    k.onMouseMove(() => {
        if(!musicStarted) {
            music.play();
            musicStarted = true;
        }
    });

    k.onMousePress(["left", "right", "forward", "back", "middle"], () => {
        if(!musicStarted) {
            music.play()
            musicStarted = true;
        }
    });

    const title = k.add([
        k.text('Main Menu: Press <ENTER> To Play'),
        k.pos(k.center()),
    ])

    Overlay({
        color: 'blue',
        opacity: 0.1
    })

    title.pos.x = (k.width() / 2) - (title.width / 2);
    title.pos.y = k.height() / 2;

    k.onKeyPress('enter', () => {
        k.go('main');
    })

    k.onSceneLeave(() => {
        music.stop();
    });
}

export default MainMenu;