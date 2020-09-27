let v0_1_0$1_15_2 = "downloads/1.15.2/leopardcraft/leopardcraft-0.1.0.zip";
let v0_2_0$1_15_2 = "downloads/1.15.2/leopardcraft/leopardcraft-0.2.0.zip";

let mcversions = document.getElementById("mcversions");
let lcversions1_15_2 = document.getElementById("1.15.2v");

let urlbegin = "https://robotleopard86.github.io/ModdingHub/"

function download(){
    if(confirm("Are you sure you want to download LeopardCraft?")){
        var version = lcversions1_15_2.options[lcversions1_15_2.selectedIndex].value;
        switch(version){
            case "0.1.0/1.15.2":
                download(urlbegin + v0_1_0$1_15_2);
                break;
            case "0.2.0/1.15.2":
                download(urlbegin + v0_2_0$1_15_2);
                break;
            default:
                break;
        }
    }
}

function find(){
    var version = mcversions.options[mcversions.selectedIndex].value;
    if(version == "1.15.2"){
        lcversions1_15_2.style.visibility = true;
    }
}