import k from '../context';
import Overlay from '../entities/overlay';
import { SONGS } from '../globals';
import songService from '../services/songService';

const MainMenu = () => {

    let songStarted = false;

    k.onMousePress(["left", "right", "forward", "back", "middle"], () => {
        if(!songStarted) {
            songService.play(SONGS.MENU, {
                volume: 0.5
            });
            songStarted = true;
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
        k.go('game');
    })

    k.onSceneLeave(() => {
        songService.stop();
    });
}

export default MainMenu;