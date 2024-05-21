function suitableDistrict(){
    let province = document.forms["advancedSearch"]["province"];
    let district = document.forms["advancedSearch"]["district"];
    district.innerHTML="";
    
    if(province.value === "southern"){
        var southern = ["District","Galle","Matara","Hambantota"];
    }else{
        var southern = ["District","Not listed yet"];
    }
    for( var i=0;i<southern.length;i++){
        var south = southern[i];
        var elements = document.createElement("option");
        elements.textContent = south;
        elements.value = south;

        if(i==0){
            elements.setAttribute("disabled", "");
            elements.setAttribute("selected", "");
            elements.setAttribute("hidden", "");
        }

        district.appendChild(elements);
    }
}
function suitableCity(){
    let district = document.forms["advancedSearch"]["district"];
    let city = document.forms["advancedSearch"]["city"];
    city.innerHTML ="";

    if (district.value =="Galle"){
        var galle = ["City","Galle", "Hikkaduwa", "Ahangama", "Ambalangoda", "Baddegama", "Balapitiya", "Bentota", "Boossa", "Elpitiya","Habaraduwa", "Imaduwa", "Koggala", "Kosgoda", "Neluwa", "Thawalama", "Unawatuna"];
    }else{
        var galle = ["City", "Not listed yet"];
    }
    for(var i=0;i<galle.length;i++){
        var gal = galle[i];
        var elements = document.createElement("option");
        elements.textContent= gal;
        elements.value = gal;
         
        if (i == 0){
            elements.setAttribute("disabled", "");
            elements.setAttribute("hidden", "");
            elements.setAttribute("selected", "");
        }
        city.appendChild(elements);
    }
}
function advSearch(){
        let province = document.forms["advancedSearch"]["province"];
        let district = document.forms["advancedSearch"]["district"];
        let city = document.forms["advancedSearch"]["city"];
        
        if (province.value == ""){
            window.alert("Please select a Province");
        }else if (district.value == ""){
            window.alert("Please select a District");
        }else if (city.value == ""){
            window.alert("Please select a District and City");
        }else if(province.value != "" && district.value != "" && city.value == "Hikkaduwa"){
            window.location.href = "index4.html"
        }else{
            window.alert("Please select a City");
            }
}

function mnlSearch(){
    let text = document.forms["manualSearch"]["search"].value;
    let textUpper = text.toUpperCase();
    if (textUpper == "HIKKADUWA"){
        window.location.href = "index4.html";
        
    }else{
        window.alert("Invalid Search");
    }  
}  
