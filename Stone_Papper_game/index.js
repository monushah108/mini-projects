const computer = document.querySelector('.player-1')
const user  = document.querySelector('.player-2')
const options = document.querySelector('.option')
const scissors = document.querySelector('.scissor-op')
const Textshown = document.querySelector('.text-show')
const compValu = ['fist','paper','scissors']
Array.from(options.children).forEach((e)=>{
    e.addEventListener('click', (event)=>{
        Textshown.innerText = 'Wait!!'
        computer.src = './img/fist.jpg'
        user.src = './img/fist.jpg'
        setTimeout(()=>{
            if(event.target.parentNode.classList.contains('fist')){
                getRound('fist')
            }
            else if(event.target.parentNode.classList.contains('paper')){
                getRound('paper')
            }
            else if(event.target.parentNode.classList.contains('scissors')){
                getRound('scissors')
            }
            else{
                Textshown.innerText = 'Plz choose an to play'
            }
            computer.classList.remove('rotate-img')
            user.classList.remove('rotate-img')
        },1000)
        computer.classList.add('rotate-img')
        user.classList.add('rotate-img')

    });
});


function getRound(arg){
    const random = Math.floor(Math.random() * compValu.length) 
    if(compValu[random] == 'fist' &&  arg == 'paper'){
        console.log('win com rock')
        Textshown.innerText = 'You Win!!'
        computer.src = './img/fist.jpg'
        user.src = './img/paper.jpg'
        return true
    }
    else if(compValu[random] == 'paper' && arg == 'scissors'){
        console.log('you winn paper comp')
        Textshown.innerText = 'You Win!!'
        computer.src = './img/paper.jpg'
        user.src = './img/scissors.jpg'
        return true
    }
    else if(compValu[random] == 'scissors' && arg == 'fist'){
        console.log('you win comp choose scissors')
        Textshown.innerText = 'You Win!!'
        computer.src = './img/scissors.jpg'
        user.src = './img/fist.jpg'
        return true
    }
    else if(compValu[random] == arg){
        console.log('both ties')
        Textshown.innerText = 'Both ties!!'
        computer.src = `./img/${compValu[random]}.jpg`
        user.src = `./img/${arg}.jpg`
        return false
    }
    else {
        console.log('you Loose')
        Textshown.innerText = 'You Loose!!'
        computer.src = `./img/${compValu[random]}.jpg`
        user.src = `./img/${arg}.jpg`
        return false
    }

    
}
