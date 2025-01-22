window.addEventListener("DOMContentLoaded", () => {
    renderScrollNavbar();
});

function renderScrollNavbar() {
    const scrollNavBar = document.querySelector('.scrollNavBar');
    scrollNavBar.innerHTML = `
        <div class="main_logo text-white scrollTopic">
            <h3><span>S</span>tart <span>t</span>o <span>F</span>inish</h3>
            
        </div>
        <div class="scroll_nav_link">
            <ul class="list-unstyled d-flex text-white ">
                <li><a href="index.html" class="btn text-white  ml-4">Home</a></li>
                <li><a href="about.html" class="btn text-white">About</a></li>
                <li><a href="contact.html" class="btn text-white">Contact Us</a></li>
            </ul>
        </div>
    `
}

window.addEventListener('scroll',() => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 150){
        document.querySelector('.scrollNavBar').classList.add('activation');
    }
    else {
        document.querySelector('.scrollNavBar').classList.remove('activation');
    }
});

function fixedButton() {
    let value = window.scrollY;
    if(value > 1200){
        document.getElementById('fixed_btn').style.display = "block";
    }
    else {
        document.getElementById('fixed_btn').style.display = "none";
    }
}