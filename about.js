const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
},{
    root:null,
    rootMargin: '0px',
    threshold:0.4
})

const boxes = document.querySelectorAll('.box');
boxes.forEach(box=>{
    observer.observe(box);
})
