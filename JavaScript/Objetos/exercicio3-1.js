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


function buscarCurso(objeto, array, posicao){
    let message = `Na posição ${objeto, array, posicao} temos as informações do curso de ${objeto[array][posicao].course}, tem ${objeto[array][posicao].students} inscritos, o professor será o ${objeto[array][posicao].professor} e acontecerá no turno: ${objeto[array][posicao].shift}`
    console.log(message);
}

buscarCurso(school, 'lessons', 1)