import { textContent, img } from "./welcome.js";
import { foreign, local } from "./whoyouare.js";


window.addEventListener("DOMContentLoaded", () => {
    renderPageWelcomeSection(textContent, img);
    //renderSubcribeSection();
    renderRelativeSectionContent(foreign, local);
    renderMainDescription();
    renderFoodStyles();
});

function renderMainDescription() {
    const mainDesc = document.querySelector('.mainDescription');
    mainDesc.innerHTML = `
        <div class="row justify-content-center align-items-center">
            <div class="col-md-7 grid place-items-center img_row" >
                <div class="text_row box1 p-5" onload="myFunction1()" >
                    <h1 class="text-white mainName"><span>S</span>tart <span>t</span>o <span>F</span>inish</h1>
                    <p class="text-white">Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait.</p>
                </div>
            </div>
        </div>
    `;
};

function renderFoodStyles() {
    const foodStylesContainer = document.querySelector('.foodStylesContainer');
    foodStylesContainer.innerHTML = `
        <div class="row py-4">
            <h2 class="text-center text-success">Sri Lankan Food Styles</h2>
            <p class="text-center text-success">Sri Lankan cuisine is characterized by its distinctive blend of herbs, spices, fish, vegetables, rice, and fruits. The culinary experience offers a complex interplay of flavors, featuring sweet caramelized onion relishes, bitter melon, spicy coconut, and carefully balanced curry heat.</p>
        </div>
        <div class="row py-1 d-flex justify-content-center gap-3">
            <div class="col-md-3">
                <img src="./assets/images/Home/foodStyle1.jpg" alt=""/>
            </div>
            <div class="col-md-3">
                <img src="./assets/images/Home/foodStyle2.jpg" alt=""/>
            </div>
            <div class="col-md-3">
                <img src="./assets/images/Home/foodStyle3.jpg" alt=""/>
            </div>
        </div>
        <div class="row py-4 justify-content-center">
            <div class"d-grid place-items-center">
                <a href="./food_styles.html" class="btn btn-outline-success">Explorer More ..</a>
            </div>
        </div>
    `
}

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

// function renderSubcribeSection() {
//     const subscribeContainer = document.querySelector('.subscribeSection');
//     subscribeContainer.innerHTML = `
//         <div class="subscribe">
//             <button type="button" id="closeBtn">&times;</button>
//             <div>
//                 <form action="subscribe.php" method="post">
//                     <div class="mt-3">
//                         <label for="userName" class="form-label text-white">User Name:</label>
//                         <input type="text" id="userName" name="userName" class="form-control"/>
//                     </div>
//                     <div class="mt-3">
//                         <label for="email" class="form-label text-white">Email :</label>
//                         <input type="email" id="email" name="email" class="form-control"/>
//                     </div>
//                     <div class="d-grid mt-4">
//                         <button type="submit" class="btn btn-warning">Subscribe</button>
//                     </div>
//                 </form>
//             </div>      
//         </div>
//     `
// }

function renderRelativeSectionContent(foreign, local) {
    console.log(foreign[0].desc[0]);
    const relativeContainer = document.querySelector('.p_relative');
    relativeContainer.innerHTML = `
        <div class="container py-2 topic">
            <h1 class="text-success text-center">Welcome to Our Tourism Portal!</h1>
            <p class="text-center">We recognize that visitors have different needs and preferences, so we've customized our content for both local and international travelers.</p>
        </div>
        <div class="container-fluid py-2 ">
    `;
    relativeContainer.innerHTML += `
            <div class="row py-5 justify-content-center gap-3 py-2">
                <div class="col-md-5 p-3 sectionborder">
                    <h2 class="text-center py-3">${foreign[0].topic}</h2>
                    <div class="row">
                        <div class="col-md-4">
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
                <div class="col-md-5 p-3 sectionborder">
                    <h2 class="text-center py-3">${local[0].topic}</h2>
                    <div class="row">
                        <div class="col-md-4">
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
    
    //console.log(relativeContainer);

    
}

/*
*/ 
