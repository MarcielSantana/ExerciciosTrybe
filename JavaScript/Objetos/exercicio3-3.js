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

function procuraPalavra(objeto, palavraChave){

  const arrayObjetos = objeto.lessons

    for (let objetoLesson of arrayObjetos ){

      if (palavraChave in objetoLesson){
        return true
      } else{
        return false
        
      }

    }
}


console.log(procuraPalavra(school, 'professor'));

