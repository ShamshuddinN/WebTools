const handleIn = (e) => {
    
    if (e.ctrlKey && e.key == 'Enter') {
        let returnTxt = ``;
        let rawText = e.target.value;

        rawText = rawText.replace("\n", "");
        rawText = rawText.replace("    ", "");

        rawText = rawText.split(";")
        // console.log(rawText);
        // 0: Access modifier, 1: Data type, 2: Variable

        if (!rawText[-1]) {
            console.log("done splicing");
            rawText.splice(-1, 1);
        }

        // console.log(`last ele: ${rawText[-1]}`)

        rawText.forEach(element => {
            let parts = element.split(" ");
            // console.log(`Parts array: ${parts}`)
            returnTxt += 
`
    public ${parts[1]} get${firstCap(parts[2])}() {
        return this.${parts[2]};
    }
            
    public void set${firstCap(parts[2])}(${parts[1]} ${parts[2]}) {
        this.${parts[2]} = ${parts[2]};
    }
            
`
        });


        showOutput(returnTxt);
        document.getElementById('copyBtn').innerText = "Copy";



    }

    
}



function firstCap(word) {
    let inWord = word;
    if (inWord.length > 1) {
        return inWord[0].toUpperCase() + inWord.slice(1, inWord.length);
    }
    return inWord;
}


const showOutput = (text) => {
    let ele = document.getElementById('outContainer');
    let txtBox = document.getElementById('outtxt');
    if (ele.classList.value.includes("d-none")) {
        ele.classList.remove("d-none");
        txtBox.value = text;
    } else {
        txtBox.value = text;
    }

}


const copyClipboard = () => {
    navigator.clipboard.writeText(document.getElementById('outtxt').value);
    document.getElementById('outtxt').value = '';
    document.getElementById('copyBtn').innerText = "Copied!";
}