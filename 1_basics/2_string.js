const name="karan";
const repoCount=10; 
        // String interpolation
console.log(`HEllo my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('Bharaat-Baddie-daddy')
console.log(gameName[0]);
console.log(gameName.toUpperCase());

const newString = gameName.slice(0,4);
console.log(newString);

//trim the extra spaces
const newstringone = '   hello    '
console.log(newstringone);
console.log(newstringone.trim());

//replace string
const url="https://karan.com/karan-nayal"
console.log (url.replace('-','the'));

console.log(url.includes('karan'));
console.log(url.includes('-'));
console.log(gameName.split('-'));

