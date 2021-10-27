//1 hour = 60 minutes
function hourToMinuter(hours) {
    let result = hours * 60;
    return result;
}

let a = hourToMinuter(10);
console.log(a);


let dayToHours = function(days) {
    return days * 24;
};

let c = dayToHours(1);
console.log(c);

//variables declaration
let balance = 100;
let stock = 50;
let price = 5;

function sellItem(quantity) {
    //1.check if we have stock

    if (quantity <= stock) {
        //2. reduce stock, increase balance
        //stock = stock - quantity;
        stock -= quantity;

        balance += price * quantity;

        console.log('pruchase completed', balance, stock);
    } else {
        console.log('not enough stock');
    }

}
sellItem(10);
