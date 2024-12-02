document.getElementById('color-scheme-btn').addEventListener('click', () => {
    
    let pickedColor = document.getElementById('color-scheme-selector').value
    const themeColor = document.getElementById('theme-color-input').value

    // Color Containers
    const firstColorContainerEl = document.getElementById('first-color-container')
    const secondColorContainerEl = document.getElementById('second-color-container')
    const thirdColorContainerEl = document.getElementById('third-color-container')
    const fourthColorContainerEl = document.getElementById('fourth-color-container')
    const fifthColorContainerEl = document.getElementById('fifth-color-container')

    // Color Codes
    const firstColorCodeEl = document.getElementById('first-color-code')
    const secondColorCodeEl = document.getElementById('second-color-code')
    const thirdColorCodeEl = document.getElementById('third-color-code')
    const fourthColorCodeEl = document.getElementById('fourth-color-code')
    const fifthColorCodeEl = document.getElementById('fifth-color-code')


    console.log(themeColor.slice(1))
    fetch(`https://www.thecolorapi.com/scheme?mode=${pickedColor}&hex=${themeColor.slice(1)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            firstColorContainerEl.value = data.colors[0].hex.value
            secondColorContainerEl.value = data.colors[1].hex.value
            thirdColorContainerEl.value = data.colors[2].hex.value
            fourthColorContainerEl.value = data.colors[3].hex.value
            fifthColorContainerEl.value = data.colors[4].hex.value

            firstColorCodeEl.textContent = data.colors[0].hex.value
            secondColorCodeEl.textContent = data.colors[1].hex.value
            thirdColorCodeEl.textContent = data.colors[2].hex.value
            fourthColorCodeEl.textContent = data.colors[3].hex.value
            fifthColorCodeEl.textContent = data.colors[4].hex.value
        })
})

document.querySelectorAll('.color-code').forEach(item => {
    item.addEventListener('click', (e) => {
        const textToCopy = item.textContent
        navigator.clipboard.writeText(textToCopy)
            .then(() => { alert(`Text "${textToCopy}" copied to clipboard!`); })
    })
})