function fibonicca(n){
    if(n==2){
        return 1;
    }
    else if(n==1){
        return 1;
    }
    else
        return fibonicca(n-1)+fibonicca(n-2);
}

module.exports = fibonicca