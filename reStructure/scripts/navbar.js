import { navbarContent } from './contents/navbarContent.js';
window.addEventListener('DOMContentLoaded', () => {
    navbarContent(navbarContent);
});


function navbarContent() {
    document.querySelector('.navbar').innerHTML = `
        <div class="">
        </div>
    `
}