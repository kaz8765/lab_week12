//part2
function element_selector(element) {
    const element_selected = document.querySelector(element)
    console.log(element_selected)
    return
}

element_selector('.one')


//part 3

'use strict';

const students = [
    { name: "Tasha", grades: [80, 67, 75, 62] },
    { name: "Tuvok", grades: [90, 88, 91, 92] },
    { name: "Dax", grades: [88, 90, 89, 85] },
    { name: "Neelix", grades: [60, 54, 48, 50] }
]
const studentsScholarship = []

function add_to_scholarship_list(eligible_student) {
    studentsScholarship.push(eligible_student)

}


function scholarship_list(list_of_students_and_grades, cut_off_score) {
let total_score = 0
let average_score = 0



for (const index in list_of_students_and_grades) {

total_score = 0
for (let num = 0; num < list_of_students_and_grades[index].grades.length; num += 1) {
    total_score += list_of_students_and_grades[index].grades[num]
}

average_score = total_score / list_of_students_and_grades[index].grades.length

if (average_score > cut_off_score) {
    add_to_scholarship_list({ name: list_of_students_and_grades[index].name, gradeAvg: average_score })

}

}

console.log(studentsScholarship)
}

scholarship_list(students, 80)

//part 4

'use strict';

function invoke_the_darkness(target_css) {
    const divone = document.querySelector(target_css)

    divone.classList.add("dark-theme")

}

invoke_the_darkness('.container')