function calculateTime(time){
    let year  = 366;
    let month = 30;
    let week  = 7;

    if(time > year){
        if(time > year * 2) return `${(time/year).toFixed.toFixed()} years`;
        return  `1 year`;
    }
    else if(time > month){
        if(time > month * 2) return `${(time/month).toFixed()} months`;
        return  `1 month`;
    }
    else if(time > week ){
        if(time > week * 2) return `${(time/week).toFixed()} weeks`;
        return  `1 week`;
    }
    else{
        if(time > 1) return `${time} days`;
        return  `1 day`;
    }
}

function convertPorcent(total,amount){
    return (amount * 100 / total).toFixed(1);
}

export {
    calculateTime,
    convertPorcent
}