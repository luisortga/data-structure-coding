// root - midu

function doom(fn) {
    if (fn.length > 16) {
        return true
    }
    else {
        return false
    }
}

console.log(doom('Hey dude is word with more 16 letter'))

console.log(doom('less'))

let year = '42 redes'

try {
    const yearNum = parseInt(year)
    console.log(`${yearNum + 16}`)
    } catch (e) {
        console.error(e)
}

function solo(greet) {
    if (greet === 'luis') {
        return // undefined
    } else if (greet === 'ortega') {
        return // undefined
    } else {
        console.log('Iniciando proceso...')
    }
}

console.log(solo('luis'))