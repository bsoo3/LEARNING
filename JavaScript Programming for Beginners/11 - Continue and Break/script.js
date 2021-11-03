let fuel = 1000;
let distance = 0;

while (fule > 0) {
    distance++;

    if (distance >= 100 && distance <= 200) {
        continue;
    }

    fuel--;

    if (distance == 500) {
        break;
    }
}

console.log(distance, fuel);
