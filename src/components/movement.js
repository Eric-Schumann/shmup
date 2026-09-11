
const movement = () => ({
    id: 'movement',
    require: ['pos'],
    update() {
        if(this.direction.len() > 0) {
                this.move(this.direction.unit().scale(this.speed));
        }
    }
});

export default movement;