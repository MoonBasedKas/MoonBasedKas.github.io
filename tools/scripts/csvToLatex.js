alignment = " c "

function parseTable(){
    text = document.getElementById("csvInput").value

    lines = text.split("\n")
    lines = splitLines(lines)
    width = findTableWidth(lines)
    console.log(lines)

    text = latexify(lines)

    document.getElementById("latexOutput").innerHTML = text
}

function splitLines(lines){
    for(i = 0; i < lines.length; i++){
        lines[i] = lines[i].split(",");
    }
    return lines
}

function findTableWidth(lines){
    max = 0
    for(i = 0; i < lines.length; i++){
        if(lines[i].length > max){
            max = lines[i].length
        }
    }
    return max
}


function latexify(lines, width){
    text = "\\begin{tabular}{"
    for(i = 0; i < width; i++){
        text += alignment
    }
    text += "}<br>"

    for(i = 0; i < lines.length; i++){
        for(j = 0; j < lines[i].length; j++){

            text += lines[i][j]

            if (j != lines[i].length - 1){
                text += "&"
            }    
            
        }
        
        if (i != lines[i].length - 1){
            text += "\\\\<br>"
        }
    }

    text += "\\end{tabular}"

    return text
}