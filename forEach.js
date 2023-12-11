const books = [
    {titile:"book1",
    genre:"science",
    publish:1990,
    editoin:2000
},
    {titile:"book2",
    genre:"arts",
    publish:1980,
    editoin:2001
},
    {titile:"book3",
    genre:"science",
    publish:1970,
    editoin:2002
},
    {titile:"book4",
    genre:"science",
    publish:1990,
    editoin:2000
},
    {titile:"book5",
    genre:"science",
    publish:1990,
    editoin:2000
},
    {titile:"book6",
    genre:"science",
    publish:1990,
    editoin:2000
}
]

// const myBooks = [];
// books.forEach((item)=>{
    
//     if (item.genre === "science"){
//         myBooks.push(item.titile)
//     }
// })

// console.log(myBooks)

const userBooks = books.filter((item)=>{
    return item.genre === "science" && item.publish >= 1980
})

console.log(userBooks)