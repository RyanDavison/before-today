module.exports = (offset = 0, zero = false) => {
    const date = new Date().setHours(0,0,0,0);
    const msd = 1000*60*60*24;
    if(zero){
        return date - offset*msd;
    }
    return new Date(date - offset*msd);
}
