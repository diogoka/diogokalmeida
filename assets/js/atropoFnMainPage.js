let title = document.querySelector('.profile')

const profile = Atropos({
    el: '.profile-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
        title.style.transform = 'scale(1.15)'
        
        
    },
    onLeave() {
        title.style.transform = 'scale(1)'
        
    },
    onRotate(x, y) {
        
    }
});

let icons = document.querySelector('.icons')
const footer = Atropos({
    el: '.foooter-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    rotateXMax: 0,
    rotateYMax: 0,
    shadow: false,

    onEnter() {
        icons.style.transform = 'scale(1.15)'
    },
    onLeave() {
        icons.style.transform = 'scale(1)'

    },
    onRotate(x, y) {

    }
});