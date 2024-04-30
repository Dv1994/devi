function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.class === "rightNav") {
        x.class += " responsive";
    } else {
        x.class = "rightNav";
    }
}