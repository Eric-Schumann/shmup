
const movement = () => ({
    id: 'enemyMovement',
    require: ['pos'],
    add() {
        this.onUpdate(() => {
            if(this.direction.len() > 0) {
                this.move(this.direction.unit().scale(this.speed));
            }
        });
    },
});

export default movement;