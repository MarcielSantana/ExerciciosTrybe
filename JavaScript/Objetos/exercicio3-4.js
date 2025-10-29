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

function alteraCurso(objeto, nomeCurso, novoTurno){
     const arrayCursos = objeto.lessons

     let cursoEncontrado = false

     for (let curso of arrayCursos){
        if (curso.course === nomeCurso){
            curso.shift = novoTurno
            cursoEncontrado = true
            break
        } 
    }
    if (!cursoEncontrado){
        console.log('Não tem esse curso');
    }
}

alteraCurso(school, 'Python', 'Noite')

console.log(school);




