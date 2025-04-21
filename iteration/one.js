//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    if (element == 5) {
        console.log("5 is best");
        
    }
}
//
for (let i = 0; i <=10.; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop is ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
}
//break and continue
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is detected"); //it will stop printing if 5 is detected
        break
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is detected"); //here 5 will be skip but other will print after and before that
        continue
    }
    console.log(`value of i is ${i}`);
}