const province = JSON.parse(localStorage.getItem("province"));
console.log(province);
const district = JSON.parse(localStorage.getItem("district"));
//console.log(district);
const places = JSON.parse(localStorage.getItem("places"));
//console.log(places);
window.addEventListener("DOMContentLoaded", () => {
    renderFilterForm(province);
    provinceValue();
})
function directFilterContent() {
    console.log(filterDestinations);
}



function renderFilterForm(currentprovince) {
    const filterContainer = document.getElementById('filterForm');
    
    let currentProvinceDistrict = JSON.parse(sessionStorage.getItem("currentProvinceDistrict"));
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
                        <input type="text" class="rounded" id="directInputField" placeholder="Seeach Destination" style="width:75%;padding:10px;"/>
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
                <form id="searchfiltering">
                    <div class="py-3 d-flex justify-content-center">
                        <select class="form-select" id="province" onchange="provinceValue()" style="width:75%;">
                        
`;
    currentprovince.forEach((province1) => {
        filterFormContent += `
            <option value="${province1[0]}">${province1[0]}</option>
        `
        console.log(province1[0]);
    });
    filterFormContent += `
                    </select>
                        </div>
                        <div class="py-3 d-flex justify-content-center">
                            <select class="form-select disable" id="district" onchange="districtValue()" style="width:75%;">
                            `;

    currentProvinceDistrict.forEach((ele) => {
        filterFormContent += `
            <option value="${ele}">${ele}</option>
        `
    });

    filterFormContent += `                        
                            </select>
                        </div>
                        <div class="py-3 d-flex justify-content-center">
                            <select class="form-select disable" style="width:75%;">
    `;
    filterFormContent += `
                            </select>
                        </div>
                        <div class="py-3 d-flex justify-content-center">
                            <input type="text" id="city" class="form-control p-2" style="width:75%;"/>
                        </div>
                        <div class="py-3 d-flex justify-content-center">
                            <input type="submit" class="btn btn-outline-success" value="Search"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    filterContainer.innerHTML = filterFormContent;

    
}

function provinceValue() {
    let currentProvinceValue = document.querySelector("#province").value;
    let currentProvince = [];
    console.log(currentProvinceValue);
    let comfirmProvince = [];
    province.forEach((prov) => {
        if(prov[0] == currentProvinceValue) {
            let currentDistricts = []
            comfirmProvince.push(prov[0]);
            prov[1].forEach((district) => {
                currentDistricts.push(district);
                
            });
            console.log(currentDistricts);
            sessionStorage.setItem("currentProvinceDistrict",JSON.stringify(currentDistricts))
            
        };
        currentProvince.push(comfirmProvince)
    });
    renderFilterForm();
}