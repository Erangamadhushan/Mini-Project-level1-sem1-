import { filterDestinations } from "./destinations.js";

//======================================================
let province = [];
filterDestinations.forEach((ele) => {
    let prov = ele.province;
    let distr = [];
    ele.district.forEach((distri) => {
        distr.push(distri.district);
        
    });
    let provinceElement = [prov, distr];
    province.push(provinceElement);
});
province = JSON.stringify(province);
localStorage.setItem("province",province);

//======================================================
let district = [];
filterDestinations.forEach((destinations) => {
    destinations.district.forEach((dist) => {
        district.push(dist);
    })
});
district = JSON.stringify(district);
localStorage.setItem("district",district);


//=======================================================
let places = [];
filterDestinations.forEach((destinations) => {
    destinations.district.forEach((dist) => {
        dist.places.forEach((place) => {
            places.push(place);
        })
    })
});
places = JSON.stringify(places);
localStorage.setItem("places", places);
