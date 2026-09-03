import k from '../context';

let enabled = true;
let masterVolume = 1;

const sfxService = {
    play(name, {
        volume = 1,
        ...options
    } = {}) {
        if (!enabled) return null;

        return k.play(name, {
            ...options,
            volume: volume * masterVolume,
        });
    },

    setEnabled(value) {
        enabled = value;
    },

    setMasterVolume(volume) {
        masterVolume = Math.max(0, Math.min(1, volume));
    },
};

export default sfxService;
