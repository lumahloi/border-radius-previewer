let tleft = document.getElementById('tleft')
let dleft = document.getElementById('dleft')
let tright = document.getElementById('tright')
let dright = document.getElementById('dright')
let box = document.getElementById('box').style
let log = document.getElementById('log')


tleft.addEventListener("input", ()=>{
    let tleftValue = parseInt(tleft.value)
    box.borderTopLeftRadius = `${tleftValue}px`
    log.innerHTML = `Top Left: adicionado ${tleftValue} pixels <br>`
})

dleft.addEventListener("input", ()=>{
    let dleftValue = parseInt(dleft.value)
    box.borderBottomLeftRadius = `${dleftValue}px`
    log.innerHTML = `Bottom Left: adicionado ${dleftValue} pixels <br>`
})

tright.addEventListener("input", ()=>{
    let trightValue = parseInt(tright.value)
    box.borderTopRightRadius = `${trightValue}px`
    log.innerHTML = `Top Right: adicionado ${trightValue} pixels <br>`
})

dright.addEventListener("input", ()=>{
    let drightValue = parseInt(dright.value)
    box.borderBottomRightRadius = `${drightValue}px`
    log.innerHTML = `Bottom Right: adicionado ${drightValue} pixels <br>`
})