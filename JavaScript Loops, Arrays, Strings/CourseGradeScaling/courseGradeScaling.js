/**
 * Created by Leet on 1/10/2016.
 */
function gradeScaling(students) {
    students.map(function(s){
        s['score'] = Math.round((s['score'] * 1.1*10))/10;
        if(s['score'] >= 100){
            s['hasPassed'] = true;
        }else {
            s['hasPassed'] = false;
        }
    });
    students = students.filter(function(student){
        return student.hasPassed;
    })
    students.sort(function(a, b){
        return a['name'] > b['name'];
    });
    console.log(students);
}

var input = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];
gradeScaling(input);
