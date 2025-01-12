let subscribeBtn = document.querySelector('#subscribeBtn');
let closeBtn = document.querySelector('#closeBtn');
subscribeBtn.onclick = () => {
    document.querySelector('.subscribe').classList.add('active');
}
closeBtn.onclick = () => {
    document.querySelector('.subscribe').classList.remove('active');
}

