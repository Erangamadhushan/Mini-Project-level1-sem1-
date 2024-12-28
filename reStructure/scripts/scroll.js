function fixedButton() {
    let value = window.scrollY;
    if(value > 1200){
        document.getElementById('fixed_btn').style.display = "block";
    }
    else {
        document.getElementById('fixed_btn').style.display = "none";
    }
}
fixedButton();