import k from '../context';

let currentSong = null;

const songService = {
    play(
        title,
        {
            volume = 0.5,
            loop = true,
            paused = false,
        } = {}
    ) {
        this.stop();

        currentSong = k.play(title, {
            volume,
            loop,
            paused,
        });

        return currentSong;
    },

    stop() {
        currentSong?.stop();
        currentSong = null;
    },

    pause() {
        currentSong?.pause();
    },

    resume() {
        currentSong?.play();
    },

    setVolume(volume) {
        if (currentSong) {
            currentSong.volume = volume;
        }
    },
};

export default songService;
