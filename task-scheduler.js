/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // build frequencies and cooldown objects
    const freq = {};
    const cooldowns = {};
    for(const task of tasks) {
        if(!freq[task]) {
            freq[task] = 0;
            cooldowns[task] = 0;
            }
        freq[task]++;
    }
    // console.log(JSON.stringify(freq));
    // loop until freq is empty
        // do the task with the highest freq that is not blocked by cooldown,
        // or do nothing if every task is blocked
        // decrement all cooldowns
        // increment the time counter 
    // return the time counter
    let time = 0;
    let keys = Object.keys(freq).length;
    while(keys > 0) {
        // console.log('freq: ', JSON.stringify(freq));
        // console.log('cooldowns: ', JSON.stringify(cooldowns));
        let highFreq = 0;
        let highTask = '';
        for(const task in freq) {
            if(freq[task] > highFreq && cooldowns[task] <= 0) {
                highTask = task;
                highFreq = freq[task];
            }
            cooldowns[task]--;
        }
        if(highFreq > 0) {
            if(highFreq === 1) {
                delete freq[highTask];
                keys--;
            }
            else freq[highTask]--;
            cooldowns[highTask] = n;
        }
        time++;
    }
    return time;
};