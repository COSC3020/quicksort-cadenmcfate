function quicksort(array) {
    if (array.length < 2) return array;
    pArray = [qsort(array, 0, array.length-1)];
    while (pArray.length > 0) {
        p = pArray[pArray.length - 1];
        pArray.pop();
        if (p == undefined) continue;
        pArray.push(qsort(array, p[0], p[1]-1));
        pArray.push(qsort(array, p[1]+1, p[2]));
    }
    return array;
}

function qsort(x, lo, hi) {
    var i, p;
    if (lo >= hi) return;
    p = lo;
    for (i = lo + 1; i <= hi; i++) {
        if (x[i] < x[lo]) {
            tmp = x[++p];
            x[p] = x[i];
            x[i] = tmp;
        }
    }
    tmp = x[lo];
    x[lo] = x[p];
    x[p] = tmp;
    return [lo,p,hi];
}

