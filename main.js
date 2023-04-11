function hurdleRace(k, height) {
    // Write your code here
    let totalDoses = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > k) {
            let doses = height[i] - k;
            if (doses > totalDoses) {
                totalDoses = doses;
            }
        }
    }

    if (totalDoses === 0) {
        return 0;
    }
    return totalDoses;

}
