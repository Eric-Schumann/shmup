import k from '../context';

const screenbound = () => ({
    id: 'screenbound',
    require: ["pos", "sprite"],
    add() {
        this.onUpdate(() => {

            const scaleX = this.scale?.x || 1;
            const scaleY = this.scale?.y || 1;

            const halfWidth = (this.width / 2) * scaleX;
            const halfHeight = (this.height / 2) * scaleY;


            this.pos.x = k.clamp(this.pos.x, halfWidth, k.width() - halfWidth);
            this.pos.y = k.clamp(this.pos.y, halfHeight, k.height() - halfHeight);
        });
    }
});

export default screenbound;