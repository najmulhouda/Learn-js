let a = 10
const b= 20
// var c = 30
// console.log(a, b, c)

// {} carlebraces mostly called scopes when it comes to js


if (true) {
    // let a = 100
    // const b = 200
    var c = 300
    // console.log(a, b, c)
}

// console.log( a)
// console.log( b)
// console.log( c)

function one(){
    const name = 'najmul'
    function two(){
        // console.log(name)
        const newName = 'najmul houda'
        //  console.log(newName)
    }
   
    two()
}

one()