function decoder(code){
    let codeArr = code.split(" ")
    let decoded = [];
    let skip = 0;
    for(i = 0; i < codeArr.length; i++){
        let currentChar = codeArr[i];
        if(currentChar >= '0' && currentChar <= '9'){
            skip = skip * 10 + (+currentChar);}
        else if(skip) i+= skip-1, skip = 0;
        else {decoded.push(currentChar);
        }}
        // for(i = 0; i < codeArr.length; i + codeArr[i]){
        //     decoded.push(codeArr[i])
        // }
    decoded.join
}
console.log(decoder("2bna0p1mp2osl0e"))
