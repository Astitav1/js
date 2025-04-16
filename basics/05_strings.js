const name = "Astitav"
const repoCount = 50

console.log(name + repoCount + "value"); // not too efficient

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//most efficient manner to write
//we use .trim 
console.log(name.toUpperCase())

const job = "    WEb Developer  "
console.log(job);
console.log(job.trim());
console.log(job.trimEnd());
//lets do find and replace in string

const url = "https://www.linkedin.com/in/astitavgoswami/"
console.log(url.replace('in','hello'))