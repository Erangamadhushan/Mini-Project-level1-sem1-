let subscribeBtn = document.querySelector('#subscribeBtn');
let closeBtn = document.querySelector('#closeBtn');
subscribeBtn.onclick = () => {
    document.querySelector('.subscribe').classList.add('active');
}
closeBtn.onclick = () => {
    document.querySelector('.subscribe').classList.remove('active');
}

window.addEventListener('scroll',() => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 150){
        document.querySelector('.scrollNavBar').classList.add('activation');
    }
    else {
        document.querySelector('.scrollNavBar').classList.remove('activation');
    }
})