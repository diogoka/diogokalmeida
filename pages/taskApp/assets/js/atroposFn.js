let all = document.querySelectorAll('div[class*="screen"]')
all.forEach(el => {
    const loginFn = Atropos({
        el: `.${el.classList[1]}`,
        activeOffset: 0,
        shadowScale: 0,
        rotateXMax: 0,
        rotateYMax: 0,
        shadow: false,
        onEnter() {
            document.querySelector(`.img-${el.classList[1]}`).style.transform = 'scale(1.15) translateY(-40px)'

        },
        onLeave() {
            document.querySelector(`.img-${el.classList[1]}`).style.transform = 'scale(1)'
        }
    });
})