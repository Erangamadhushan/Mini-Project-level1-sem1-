import { textContent, img } from "./welcome.js";

window.addEventListener("DOMContentLoaded", () => {
    renderPageWelcomeSection(textContent, img);
    renderSubcribeSection();
});

function renderPageWelcomeSection(textContent, img) {
    const welcometextContainer = document.querySelector('.welcometextContainer');
    welcometextContainer.innerHTML = " ";
    let  welcomeTextContent = `
        <div class="row d-flex p-2 flex-column">
            <div class="py-5">
                <h2 class="text-success font-bold text-center">${textContent[0]}</h2>
                <p class="text-center text-xl">${textContent[1]}</p>
            </div>
            <div class="row ">

    `
    img.forEach((ele) => {
        welcomeTextContent += `
            <div class="col-sm-4 py-2 welcomeImg">
                <img src="${ele.src}" alt="${ele.alt}"/>
            </div>
        `
    });
    welcomeTextContent += `
            </div>
        </div>

    `;
    welcometextContainer.innerHTML = welcomeTextContent;
    console.log(welcomeTextContent);

}

//render subscribtion section

function renderSubcribeSection() {
    const subscribeContainer = document.querySelector('.subscribeSection');
    subscribeContainer.innerHTML = `
        <div class="subscribe">
            <button type="button" id="closeBtn">&times;</button>
            <div>
                <form action="subscribe.php" method="post">
                    <div class="mt-3">
                        <label for="userName" class="form-label text-white">User Name:</label>
                        <input type="text" id="userName" name="userName" class="form-control"/>
                    </div>
                    <div class="mt-3">
                        <label for="email" class="form-label text-white">Email :</label>
                        <input type="email" id="email" name="email" class="form-control"/>
                    </div>
                    <div class="d-grid mt-4">
                        <button type="submit" class="btn btn-warning">Subscribe</button>
                    </div>
                </form>
            </div>      
        </div>
    `
}

/*
*/