/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS", "React", "Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
    {
      company: "Google",
      position: "Senior developer",
      city: "Barcelona"
    }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
    {
      company: "FC Barcelona",
      position: "Player",
      city: "Barcelona"
    }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React", "Angular", "Python", "Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
    {
      company: "Facebook",
      position: "Software Manager",
      city: "Chicago"
    }
  },
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML", "JS", "React"],
    class: "Mar2",
    studentLikes: 0,
    job:
    {
      company: "Amazon",
      position: "Senior developer",
      city: "Barcelona"
    }
  },

];

//YOUR CODE HERE
// Muestra por consola los mentores que viven en Barcelona y tienen React como una de sus skills.
mentors.forEach(
  function (mentor) {
    if (mentor.job.city === "Barcelona" && mentor.skills.includes("React"))
      console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`)
  })

//Configura Jun1 como class y agrega SQL como nuevo skill a los mentores que viven en Barcelona.
mentors.forEach(
  function (mentor) {
    if (mentor.job.city === "Barcelona") {
      mentor.class = "Jun1";
      mentor.skills.push("SQL")
    }
  }
)

//Crea el metodo addSkills a todos los objetos.
mentors.forEach(function (mentor) {
  mentor.addSkills =
    function (newSkill) {
      this.skills.push(newSkill)
    }
})
//Agrega un skill a todos los mentores.
function addSkilltoAll(mentors, newSkill) {
  mentors.forEach(mentor => mentor.addSkills(newSkill))
}
addSkilltoAll(mentors, "Kotlin") //Prueba de la funcion addSkilltoAll

//Elimina un skill a todos los mentores.
function removeSkill(mentors, newSkill) {
  return mentors.map(
    function (mentor) {
      mentor.skills = mentor.skills.filter(skill => skill !== newSkill)
    }
  )
}
removeSkill(mentors, "React")//Prueba de la funcion removeSkill. 

//Muestra por consola el mentor con mas skills o varios en caso de estar igualados.
function mentorWithMoreSkills(mentors) {
  let orderedMentor = mentors.sort((a, b) =>
    b.skills.length - a.skills.length);

  let numbreMaxOfSkills = orderedMentor[0].skills.length; //Determina el mayor numero de skills

  return mentors.filter(mentor => mentor.skills.length === numbreMaxOfSkills).map(
    mentor => mentor.firstName) //Retorna los nombres de todos los mentores igualados al mayor numero de skills
}
console.log(mentorWithMoreSkills(mentors)) // prueba de mentorWithMoreSkills

//Crea el metodo addStudentLikes() que incrementa en 1 la propiedad studentsLikes.
mentors.forEach(function (mentor) {
  mentor.addStudentLikes = 
  function () {
   return this.studentLikes++  
  }
})

//Agrega un like a todos los mentores.
function addLikesToAll(mentors) {
  mentors.forEach(mentor => mentor.addStudentLikes())
}
addLikesToAll(mentors)
addLikesToAll(mentors) //Prueba de addLikesToAll dos veces.

console.log(mentors)
