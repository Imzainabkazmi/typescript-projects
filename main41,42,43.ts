function show_magician(magicians: string[]): void {
    for (let i =0; i<magicians.length ; i++) {
        console.log(magicians[i]);
    }
}

const magician: string[] = ["Criss Angel", "David Copperfield", "David Blaine"];

show_magician(magician);

// Exercise 42: Great Magicians
let greeting:any[];

function make_greet(greet_name:string[]){
     greeting = greet_name.map((value)=>(
        `The Great ${value}`
    ))
return greeting
}



console.log(make_greet(magician))


// Exercise 43: Magicians Array
const greet:string[]=Array(3)
greet.fill("Great ")
const m_names:string[]= ["Criss Angel", "David Copperfield", "David Blaine"]
function show_magiciann(){

   const addtwo= m_names.map((value,index)=>(
        `${value}  ${greet[index]}  `
    ))
    return addtwo
}

console.log(show_magiciann())