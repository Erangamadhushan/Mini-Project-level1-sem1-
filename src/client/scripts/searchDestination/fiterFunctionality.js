//import { filterDestinations } from "./filterDestinations";
const province = JSON.parse(localStorage.getItem("province"));
console.log(province);
const district = JSON.parse(localStorage.getItem("district"));
//console.log(district);
const places = JSON.parse(localStorage.getItem("places"));
//console.log(places);
const directSearch = JSON.parse(localStorage.getItem("directSearch"));
window.addEventListener("DOMContentLoaded", () => {
    renderFilterForm(province);
    //provinceValue();
});

function directFilterContent() {
    let directSearchValue = document.getElementById('directSearch').value;
    sessionStorage.setItem("directSearchValue", JSON.stringify(directSearchValue));
    window.location.replace("./searchResult.html");
}

function reRenderForm() {
    renderFilterForm(province);
}


function renderFilterForm(currentprovince,district) {
    const filterContainer = document.getElementById('filterForm');
    console.log(currentprovince);
let filterFormContent = `
    <div class="row">
        <h1 class="text-center py-2">Search Destinations</h1>
    </div>
    <div class="row shadow-lg py-3">
        <div class="col-md-6 relative">
            <img src="./assets/images/searchDestination/visitor.png" alt="visitorImg"/>
            <div class="py-1">
                <h4 class="text-center">Discover Sri Lanka: A Tropical Paradise of Ancient Wonders</h4>
                <p class="text-center">Welcome to Sri Lanka, the pearl of the Indian Ocean – a mesmerizing island where ancient cities meet pristine beaches, where lush rainforests hide centuries-old temples, and where warm smiles greet you at every turn. From the golden shores of its coastal towns to the misty heights of its hill country, Sri Lanka offers an incredible diversity of experiences in a compact tropical paradise.</p>
            </div>
        </div>
        <div class="col-md-6 flex flex-col py-5">
            <div>
                <div class="row w-100">
                    <div class="d-flex justify-content-center" >
                        <select class="form-select" id="directSearch" style="width:75%;">`;

    directSearch.forEach((ele) => {
        filterFormContent += `
            <option value="${ele}">${ele}</option>
        `;
    })
    
    filterFormContent += `</select>
                    </div>
                    <div class="d-flex justify-content-center py-2">
                        <button type="button" id="directSubmitButton" onclick="directFilterContent()" class="p-3 bg-success px-5 rounded border border-none text-white">Search</button>
                    </div>
                </div>
            </div>
            <div class="advanceSearchOption container py-4">
                <h2 class="text-center">Advanced Search Option</h2>
            </div>
            <div class="container">
                <form id="searchfiltering" >
                    <div class="py-3 d-flex justify-content-center">
                        <select class="form-select" id="province" onchange="provinceValue()" style="width:75%;">
                        
`;
    currentprovince.forEach((province) => {
       
           filterFormContent += `
                <option value="${province[0]}">${province[0]}</option>
           `;
        console.log(province[0]);
    });
    filterFormContent += `
                    </select>
                        </div>
                        <div class="py-3 d-flex justify-content-center">
                            <select class="form-select disable" id="district" onchange="districtValue()" style="width:75%;">
                            `;

    currentprovince.forEach((ele) => {
        ele[1].forEach((dist) => {
            filterFormContent += `
                <option value="${dist}">${dist}</option>
            `;
        });
    });
    filterFormContent += `                        
                            </select>
                        </div>
                        
                        
    `;
    
    filterFormContent += `
                        <div class="py-3 d-flex justify-content-center gap-3">
                            <input type="button" class="btn btn-outline-success" value="Search" onclick="searchFiltering()"/>
                            <input type="reset" class="btn btn-outline-danger" onclick="reRenderForm()" value="Reset"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    filterContainer.innerHTML = filterFormContent;

    
}
function districtPlaces() {
    const filterContainer = document.getElementById('filterForm');
    let filterFormContent = `
    <div class="row">
        <h1 class="text-center py-2">Search Destinations</h1>
    </div>
    `;
    filterContainer.innerHTML += filterFormContent;
}
districtPlaces();

function provinceValue() {
    district.forEach((ele) => {
        console.log(ele);
    });
    const currentProvince = document.getElementById('province').value;
    console.log(currentProvince);
    let provinceAndDistrictContent = [];
    let provinceAndDistrict = []
    let districtValues = [];
    let place = [];
    province.forEach((ele) => {
        if (ele[0] === currentProvince) {
            provinceAndDistrict.push(ele[0]);
            ele[1].forEach((dist) => {
                districtValues.push(dist);
                console.log(dist);
                
            });
        }
    })
    provinceAndDistrict.push(districtValues);
    provinceAndDistrictContent.push(provinceAndDistrict);
    console.log(provinceAndDistrict);
    renderFilterForm(provinceAndDistrictContent, district);
}

function searchFiltering() {
    let currentProvinceValue = document.getElementById('province').value;
    let currentDistrictValue = document.getElementById('district').value;
    console.log(currentProvinceValue);
    console.log(currentDistrictValue);

    let serarchResult = [];
    const searchResultContainer = document.getElementById('filterResult');
    searchResultContainer.innerHTML = '';
    province.forEach((province) => {
        if (province[0] == currentProvinceValue) {
            district.forEach((dist) => {
                if (dist.district == currentDistrictValue) {
                    let districtValue = dist.district;
                    dist.places.forEach((place) => {
                        let placeDetails = [];
                        let placeTitle = place.place;
                        let placeDetailsContent = [];
                        place.example.forEach((example) => {
                            placeDetailsContent.push(example);
                            //console.log(example);
                        });
                        let content = [placeTitle, placeDetailsContent];
                        placeDetails.push(content);
                        //console.log(placeDetailsContent);
                        serarchResult.push(placeDetails);
                    });

                }
            });
        }
    });
    //console.log(serarchResult);
    let searchResultContent = `<div class="row d-flex flex-wrap"> `;
    serarchResult.forEach((result) => {
        console.log(result);
        result.forEach((resultEle) => {
            searchResultContent += `
                <div>
                    <div class=" my-4 shadow-md">
                        <h2 class="text-success">${resultEle[0]}</h2>
                    </div>
                </div>
                <div class="row gap-3  py-3 my-2">
            `;
            resultEle[1].forEach((place) => {
                searchResultContent += `
                
                    <div class="col-md-3 shadow shadow-md py-3 my-2">
                        <p>${place}</p>
                        <button type="button" class="btn btn-outline-success">Find More</button>
                    </div>
                
                `;
            
            })
            searchResultContent += `</div>`;
            
        })
    });
    searchResultContent += `
        </div>
    `;
    console.log(searchResultContent);
    searchResultContainer.innerHTML += searchResultContent;
}