const container = document.querySelector('.container')
const thankYou =document.querySelector('.thank-you')
const submit = document.querySelector('#submit')
const rateAgain = document.querySelector('#rate-again')
const rating = document.getElementById('rating')
const lis = document.querySelectorAll('.btn')


submit.addEventListener('click', function(){
    thankYou.classList.remove('hidden')
    container.style.display = 'none'
})

lis.forEach((li => {
li.addEventListener('click', () => {
    console.log(li.innerHTML);
         rating.innerHTML = li.innerHTML
    });
}))
