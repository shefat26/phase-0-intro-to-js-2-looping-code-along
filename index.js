// Code your solutions in this file


// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }



function writeCards(names, event){

    const arr = []
   
    for(let i = 0; i<names.length; i++){

        let msg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`

        arr.push(msg)
    }
   
    return arr;

}


function countDown(count){

    while(count>=0){

        console.log(count )

        count--
    }

}
























