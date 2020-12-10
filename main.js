

function pageLoad() {

    let aNumber = 1; //Itt egy számot adtunk meg a változó értékének.

    let aText = "This is a text."; //Itt egy szöveget adtunk meg a változó értékének.

    let aMultilineText = `
    This 
    is 
    a 
    multiline 
    text.
    `; //Itt egy többsoros szöveget adtunk meg a változó értékének.

    let theRoot = document.getElementById("root"); //Itt egy HTML elemet mentettünk el a változóba.

    let aFunction = function () {


    } //Itt egy függvényt adtunk meg a változó értékének

    console.log(aNumber);
    console.log(aNumber + aText);

    if (aNumber === 1) {
        console.log("The aNumber variable's value is: " + aNumber + " and I'm happy with it.");

        let anotherNumber = 1000;

        console.log(`
            the aNumber variable's value is: ${anotherNumber},
            and I'm happy with it. 
        `);

        console.log(anotherNumber);
    }
    //console.log(anotherNumber);

for (let index = 0; index < 100; index++) {
 /*    console.log(index); */
        
        theRoot.insertAdjacentHTML("beforebegin", `
        <div class="mondayClass">
        I love Mondays.
        Especially when monday is ${index}
        </div>/
        `);
}
let allTheMondayDivs = theRoot.querySelectorAll('.mondayClass')

console.log(allTheMondayDivs[0]);

/* console.log(index); */

}



window.addEventListener("load", pageLoad);