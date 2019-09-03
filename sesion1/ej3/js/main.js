'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false },
  ];

//const welcome = users.map(user => 'Bienvenida ' + user.name);

//const welcome = user => 'Bienvenida ' + user.name;
const newArr = [];

function welcome() {
    for(let i=0; i<users.length; i++){
        if(users[i].isPremium === true){
            console.log('Bienvenida ' + users[i].name + '. Gracias por confiar en nosotros.');
        } else {
            console.log('Bienvenida ' + users[i].name);
        }
    }
}

//welcome();
const wel = users.map(welcome);

//console.log(wel);


