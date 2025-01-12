import { textContent, img } from "./welcome.js";
import { foreign, local } from "./whoyouare.js";

window.addEventListener("DOMContentLoaded", () => {
    renderPageWelcomeSection(textContent, img);
    renderSubcribeSection();
    renderRelativeSectionContent(foreign, local);
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
            <div class="col-sm-4 py-2 welcomeImg ">
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

function renderRelativeSectionContent(foreign, local) {
    console.log(foreign[0].desc[0]);
    const relativeContainer = document.querySelector('.p_relative');
    relativeContainer.innerHTML = `
        <div class="container py-2 topic">
            <h1 class="text-success">Welcome to Our Tourism Portal!</h1>
            <p class="text-center">We recognize that visitors have different needs and preferences, so we've customized our content for both local and international travelers.</p>
        </div>
        <div class="container-fluid py-2 ">
    `;
    relativeContainer.innerHTML += `
            <div class="row py-5 justify-content-center gap-3 py-2">
                <div class="col-md-5 p-5 sectionborder">
                    <h3>${foreign[0].topic}</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${foreign[0].img}" alt="${foreign.topic}"/>
                            <a href="#" class="btn btn-lg mt-5 btn-outline-success">${foreign[0].buttonText}</a>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>${foreign[0].desc[0]}</li>
                                <li>${foreign[0].desc[1]}</li>
                                <li>${foreign[0].desc[2]}</li>
                            </u>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 p-5 sectionborder">
                    <h3>${local[0].topic}</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${local[0].img}" alt="${local[0].topic}"/>
                            <a href="#" class="btn btn-lg mt-5 btn-outline-success ">${local[0].buttonText}</a>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>${local[0].desc[0]}</li>
                                <li>${local[0].desc[1]}</li>
                                <li>${local[0].desc[2]}</li>
                            </u>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    console.log(relativeContainer);

    
}

/*
*/ 
