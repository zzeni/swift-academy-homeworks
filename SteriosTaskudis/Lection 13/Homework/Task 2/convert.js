function convert(a,b,c) {
    let arr = [];
        for(let i = 0; i<arguments.length;i++){
            let item = arguments[i].toString(16);
            arr.push(item);
        }
    var result = arr.join("");
     console.log("#" + result);
}
convert(255,192,253);