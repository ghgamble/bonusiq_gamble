
import {Reader} from './reader.js';  //import module

let reader = new Reader(document, "calcInputs", "calcOutputs","calcButton", 0.25); //create new reader with parameters
// document - for accesing html elements from module
// calcInputs - for taking info from inputs
// calcOutputs - for setting info (percents)
// for showing/hiding button
// 0.25 - percent
reader.setListeners();  //by default its single, so we set onchange listeners for inputs
let single = true;  //flag what pane it is now, false means multi
window.reader = reader;  // just for accesing from html
window.changePane = changePane;  // accesing changePane - function from html

function changePane(res) {   //res might be true or false
    single = res;
    let singleBtn = document.getElementById("singleOption");
    let multiBtn = document.getElementById("multiOption");  //capture pane changer
    if (single=== true){
        reader.setSingle();   //set single behavior
        multiBtn.classList.remove("active");  //to be multi pane disable
        singleBtn.classList.add("active");  //to be single pane active
    }
    else{
        reader.setMultiple(); //set multiple behavior
        multiBtn.classList.add("active");   //to be multi pane active
        singleBtn.classList.remove("active"); //to be single pane disable
    }
}
