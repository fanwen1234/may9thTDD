function letter(str){
    var result = []
    if(!str)
        return result;
    else if(str.length === 1){
        return [str];
    }
    else{
        // aba
        for(i=0;i<str.length;i++){
            var str1=str[i];
            console.log(str1)
            var str2=str;
            for(j=i;j<str2.length;j++)
                str2[j]=str2[j+1];
            str2.length-=1;
            console.log(str2)
            // console.log(11);
            result.push(letter(str1)+letter(str2)[i]);
        }
    }
   
    return result
}



module.exports = letter