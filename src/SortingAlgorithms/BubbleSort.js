export function BubbleSort(array){
    const n = array.length;
    // for(let i=0;i<n;i++){
    //     console.log(array[i]);
    // }
    let i = 0;
    let j = 0;
    for(i=0; i<n-1; i++){
        for(j=i+1; j<n; i++){
            console.log(" i "+ array[i]);
            console.log(" j " + array[j]);
            // if(array[i]>array[j]){
            //     let temp = array[i];
            //     array[i] = array[j];
            //     array[j] = temp;
            // }
        }
    }

    // for(let i=0;i<array.length;i++){
    //     console.log("hello");
    // }
    return array;
}