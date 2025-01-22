import { allContent } from './allContent.js';

const searchResult = JSON.parse(sessionStorage.getItem("directSearchValue"));
console.log(searchResult);
window.addEventListener("DOMContentLoaded", () => {
    renderSearchResult(allContent);
});

function renderSearchResult(allContent) {
    const searchResultContainer = document.getElementById('root');
    let searchResultContent = `<div class="row ">`;
    allContent.forEach((content) => {
        console.log(content.title);
        if(content.title == searchResult) {
            console.log(content.title);
            searchResultContent += `
                <div class="row py-5 justify-content-center gap-2 shadow shadow-lg">
                    <div class="col-md-5 justify-content-center">
                        <iframe src="${content.map}" style="border:0;margin-inline:2.5%;width:95%;max-width:600px;height:450px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-md-5">
                        <h1>${content.subTitle} ${content.title}</h1>
                        <p>${content.desc}</p>
                        <img src="${content.img}" alt="${content.title}" class="img-fluid">
                    </div>
                </div>
                <div class="row gap-3 py-5 bg-white justify-content-center align-item-center">
            `
            content.content.forEach((ele) => {
                searchResultContent += `
                    <div class="col-md-3 py-5 shadow shadow-md">
                        <h2 class="text-center">${ele.title}</h2>
                        <ul class="list-unstyled justify-content-center">
                        
                `;
                ele.content.forEach((content) => {
                    searchResultContent += `<li class="text-center">${content}</li>`;
                });
                searchResultContent += `</ul></div>`;

            });
            
            
            searchResultContent += `</div>`;
        }
    });
    searchResultContent += `</div>`;
    searchResultContainer.innerHTML = searchResultContent;
}