export class Reader {
    constructor(document, classInput, classOutput, calcButton, percent) {
        let self = this;        //for accessing inside some functions
        this.doc = document;  //save documents inside class
        this.inputs = this.doc.getElementsByClassName(classInput);  //gets all inputs
        this.outputs = this.doc.getElementsByClassName(classOutput); //get all outputs
        this.calcButton = this.doc.getElementById(calcButton);  //capture button (calc all)
        this.percent = percent;   //save percent
        this.calcButton.onclick = function () {
            self.readLines();   //what would be called once we press calc button
        }
    }
    
    setSingle(){
        this.clearInputs();   //clear all inputs and outputs
        this.setListeners();   //inputs now calc on change
        this.calcButton.style.display = "none";  //hide calc button
    }

    setMultiple(){
        this.clearInputs(); //clear all inputs and outputs
        this.removeListener();  //inputs disable calc on change
        this.calcButton.style.display = "block"; //make calc button visible
    }

    clearInputs(){
        for (let i = 0; i < this.inputs.length; i++) {
            this.inputs[i].value="";
            this.outputs[i].value="";
        }
    }

    setListeners() {
        let self = this; //now self is pointer to itsself, mean class Reader
        for (let i = 0; i < this.inputs.length; i++) {      //go through all iputs
            this.inputs[i].onchange = function () {   //and make them do calc every time we change value in them
                self.readLine(i);  //i is for undestanding on which line to calc (i = 0-4)
            }
        }
    }

    removeListener(){
        for (let i = 0; i < this.inputs.length; i++) {
            this.inputs[i].onchange = null;     //remove onchange calculing
        }
    }

    readLine(i) {   //this function calculate percent for i line
        let num = parseFloat(this.inputs[i].value);   //try to get value from input and make it number
        if (isNaN(num))   //if its now a number
            this.outputs[i].value = "0";  //then make percent 0
        else {
            let per = num * this.percent;  //otherwise calc percent, where this.percent =0.25
            this.outputs[i].value = per;  //put in i line(output)
        }
    }

    readLines() {  //we use this method when its multi pane, and we need to calc every line
        let length = this.outputs.length;
        for (let i = 0; i < length; i++) {
            this.readLine(i);   //go through all inputs and do calculating for them
        }
    }


}
