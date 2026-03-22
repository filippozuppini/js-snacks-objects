// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0
// 
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// >


const teams = [

    {
        nome: 'Hellas Verona',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0
    },

]


let newTeams = []


for (i = 0; i < teams.length; i++ ){

    
    teams[i].falli_subiti = Math.floor((Math.random() * 30) + 1);
    teams[i].punti_fatti = Math.floor((Math.random() * 30) + 1);
    newTeams.push({
        nome: teams[i].nome, 
        falli_subiti: teams[i].falli_subiti
    });
    

}

console.log(teams);

console.log(newTeams);

