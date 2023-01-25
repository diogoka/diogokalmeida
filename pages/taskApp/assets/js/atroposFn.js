let all = document.querySelectorAll('div[class*="screen"]')
console.log('all', all)
all.forEach(el => {
    console.log(el.className);
    const loginFn = Atropos({
        el: `.${el.classList[1]}`,
        activeOffset: 40,
        shadowScale: 1.05,
    rotateXMax: 0,
    rotateYMax: 0,
    shadow: false,
        onEnter() {
            document.querySelector(`.img-${el.classList[1]}`).style.transform = 'scale(1.15) translateY(-40px)'
            
        },
        onLeave() {
            document.querySelector(`.img-${el.classList[1]}`).style.transform = 'scale(1)'
        
    
        },
        onRotate(x, y) {
    
        }
    });
})