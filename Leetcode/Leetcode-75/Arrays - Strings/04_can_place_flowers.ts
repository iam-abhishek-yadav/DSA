function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for(let i=0;i<flowerbed.length && n>0;i++){
        if(flowerbed[i]){
            i++;
            continue;
        }
        else{
            if(!flowerbed[i+1] && !flowerbed[i-1]){
                n--;
                i++;
                continue;
            }
        }
    
    }
    return n===0;
};