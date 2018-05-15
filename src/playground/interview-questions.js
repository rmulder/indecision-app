// 1
/*
const evt1 = new Event('first');
const evt2 = new Event('second');

document.addEventListener('first', () => setTimeout(() => {
    console.log('first');
}, 500));

document.addEventListener('second', () => setTimeout(() => {
    console.log('second');
}, 100));

document.dispatchEvent(evt1);
document.dispatchEvent(evt2);
// 2
const evt3 = new Event('third');
const evt4 = new Event('fourth');

document.addEventListener('third', () => {
    for (let i = 0; i < 1000000000; i++) { // ~500ms
        null;
    }

    console.log('third');
});

document.addEventListener('fourth', () => {
    console.log('fourth');
});

setTimeout(() => {
    console.log('baboon');
}, 0);

document.dispatchEvent(evt3);
document.dispatchEvent(evt4);
*/

class Bear {
    constructor(fangs = undefined) {
        //this.fangs = fangs;
    }

    getFangs() {
        return  `Number of Fangs: ${this.fangs}`;
    }
    setFangs(numFangs) {
        this.fangs = numFangs;
    }
}

const bear = new Bear();
console.log(bear.fangs);
bear.setFangs(2);
console.log(bear.fangs);

console.log(bear.getFangs());

const Bear = () => {
    let fangs;
    return (() => {
        return {
            getFangs: () => fangs,
            setFangs: (newFangs) => { fangs = newFangs; }
        };
    })();
};

const bear = Bear();
console.log(bear.fangs);
bear.setFangs(2);
console.log(bear.fangs);
console.log(bear.getFangs());
