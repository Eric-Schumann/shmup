import k from '../context';

const waves = [
    {
        id: 1,
        delay: 2,
        enemies: [
            { delay: 2, type: 'drone', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'drone', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'drone', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'drone', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'drone', x: k.rand(10, k.width() - 10) },
        ]
    },
    {
        id: 2,
        delay: 5,
        enemies: [
            { delay: 2, type: 'fighter', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'fighter', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'fighter', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'fighter', x: k.rand(10, k.width() - 10) },
            { delay: 2, type: 'fighter', x: k.rand(10, k.width() - 10) },
        ]
    }
];

export default waves;