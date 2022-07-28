function getUrlParameterValue(url,parameter) {
    let params = url.split('?')[1];
    let str = new URLSearchParams(params);
    for(let col of str.entries()) {
        if(col[0] == parameter){
            return col[1]
        }

    }
}

let url ="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url,"utm_medium"));
console.log(getUrlParameterValue(url,"utm_campaign"));