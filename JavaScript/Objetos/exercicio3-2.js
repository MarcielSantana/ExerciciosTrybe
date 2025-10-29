const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

function quantidadeEstudantes(objeto, array){
    let totalEstudantes = 0
    for (let index = 0; index < objeto[array].length; index += 1){
        totalEstudantes += objeto[array][index].students
    }



    let message = `A quantidade total de estudantes dos cursos é de ${totalEstudantes} estudantes`
    console.log(message);
    
}

quantidadeEstudantes(school, 'lessons')