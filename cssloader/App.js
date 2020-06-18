import imgSrc from '../img/timg.jpg'
export default {
    template:'<div>' +
        '<img :src="imgSrc" alt="" />' +
        '</div>',
    data(){
        return{
            imgSrc:'../'+imgSrc
        }
    }
}