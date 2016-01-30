function solve(inputArray) {
    var splitPattern = / *\| */g;
    var name, course, grade, visit;
    var inputParams;
    var results = {};

    for (var i = 0; i < inputArray.length; i++) {
        inputParams = inputArray[i].split(splitPattern);
        name = inputParams[0].trim();
        course = inputParams[1].trim();
        grade = Number(inputParams[2]);
        visit = Number(inputParams[3]);

        if (!results[course]) {
            results[course] = {};
            results[course].grades = [];
            results[course].visits = [];
            results[course].students = [];
        }

        if (results[course].students.indexOf(name) !== -1) {
            results[course].grades.push(grade);
            results[course].visits.push(visit);
            continue;
        }
        results[course].grades.push(grade);
        results[course].visits.push(visit);
        results[course].students.push(name);
    }

    var sortedResults = {};

    var coursesKeys = Object.keys(results).sort(function (a, b) {
        return a.localeCompare(b);
    });
    var avgGrade, avgVisits;
    for (var i = 0; i < coursesKeys.length; i++) {
        avgVisits = results[coursesKeys[i]].visits.reduce(function (a, b) {
            return a + b;
        }) / results[coursesKeys[i]].visits.length;

        avgGrade = results[coursesKeys[i]].grades.reduce(function (a, b) {
            return a + b;
        }) / results[coursesKeys[i]].grades.length;

        sortedResults[coursesKeys[i]] = {
            avgGrade: Number(avgGrade.toFixed(2)),
            avgVisits: Number(avgVisits.toFixed(2)),
            students: results[coursesKeys[i]].students.sort(function (a, b) {
                return a.localeCompare(b);
            })
        };
    }

    console.log(JSON.stringify(sortedResults));
}

var inputArray1 = ['Milen Georgiev|PHP|2.02|2', 'Ivan Petrov | C# Basics | 3.20 | 22', 'Peter Nikolov | C# | 5.522 | 18', 'Maria Kirova | C# Basics | 5.40 | 4.5', 'Stanislav Peev | C# | 4.012 | 15', 'Ivan Petrov |    PHP Basics     |     5.120 |6', 'Ivan Goranov | SQL | 5.926 | 12', 'Todor Kirov | Databases | 5.50 |0.0000', 'Maria Ivanova | Java | 5.83 | 37', 'Milena Ivanova |    C# |   1.823 | 4.5', 'Stanislav Peev   |    C#|   4.122    |    15', 'Kiril Petrov |PHP| 5.10 | 6', 'Ivan Petrov|SQL|5.926|3', 'Peter Nikolov   |    Java  |   5.9996    |    9', 'Stefan Nikolov | Java | 4.00 | 9.5', 'Ivan Goranov | SQL | 5.926 | 12.5', 'Todor Kirov | Databases | 5.150 |0.0000', 'Kiril Ivanov | Java | 5.083 | 327', 'Diana Ivanova |    C# |   1.823 | 4', 'Stanislav Peev   |    C#|   4.122    |    15', 'Kiril Petrov |PHP| 5.10 | 6'];

solve(inputArray1);

//# sourceMappingURL=exercise-compiled.js.map