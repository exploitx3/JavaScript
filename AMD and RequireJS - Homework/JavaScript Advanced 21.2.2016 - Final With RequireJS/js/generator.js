/*global define:true*/
define(['course', 'employee', 'event', 'hall', 'lecture', 'party', 'trainer'], function (course, employee, event, hall, lecture, party, trainer) {
    'use strict';
    var eventSystem = {
        course: course,
        employee: employee,
        event: event,
        hall: hall,
        lecture: lecture,
        party: party,
        trainer: trainer
    };

    return (function (eventsSystem) {
        "use strict";

        var openSource, inspiration, mariya, pesho, gosho,
            feedback, feedback2, feedback3, examPractice, advancedJs,
            jsFrameworks, advancedJSExam, courseIntro, saintValParty, trifonParty,
            halls = [];

        openSource = new eventsSystem.hall('Open Source', 110, 1);
        inspiration = new eventsSystem.hall('Inspiration', 220, 2);

        mariya = new eventsSystem.employee('Mariya', 40);
        pesho = new eventsSystem.trainer('Pesho', 20);
        gosho = new eventsSystem.trainer('Gosho', 40);

        feedback = 'I love gosho';
        feedback2 = 'Best lecturer but still has to work on his diction';
        feedback3 = 'Holy moly';
        gosho.addFeedback(feedback);
        gosho.addFeedback(feedback2);
        pesho.addFeedback(feedback3);

        advancedJs = new eventsSystem.course('Advanced JS', 12);
        jsFrameworks = new eventsSystem.course('JS Frameworks', 13);
        pesho.addCourse(advancedJs);
        pesho.addCourse(jsFrameworks);
        gosho.addCourse(jsFrameworks);

        examPractice = new eventsSystem.lecture({
            title: 'Advanced JS Exam Practice',
            type: 'lecture',
            duration: 4,
            date: new Date(2016, 1, 17, 18, 0),
            course: advancedJs,
            trainer: pesho
        });
        //Test lecture
        //var examPracticeTest = new eventsSystem.lecture({
        //    title: 'Advanced JS Exam Practice',
        //    type: 'lecture',
        //    duration: 'sdf',
        //    date: new Date(2016, 1, 17, 18, 0),
        //    course: advancedJs,
        //    trainer: pesho});

        advancedJSExam = new eventsSystem.lecture({
            title: 'Advanced JS Exam',
            type: 'lecture',
            duration: 6,
            date: new Date(2016, 1, 21, 9, 0),
            course: advancedJs,
            trainer: pesho
        });
        courseIntro = new eventsSystem.lecture({
            title: 'Course Introduction',
            type: 'lecture',
            duration: 2,
            date: new Date(2016, 1, 22, 18, 0),
            course: jsFrameworks,
            trainer: gosho
        });
        saintValParty = new eventsSystem.party({
            title: 'Saint Valentines',
            type: 'party',
            duration: 6,
            date: new Date(2016, 1, 14, 19, 0),
            isBirthday: false,
            isCatered: false,
            organiser: mariya
        });
        trifonParty = new eventsSystem.party({
            title: 'Trifon Zarezan',
            type: 'party',
            duration: 4,
            date: new Date(2016, 1, 14, 19, 0),
            isBirthday: false,
            isCatered: true,
            organiser: mariya
        });

        //var test = new eventsSystem.event({});
        //openSource.addEvent(examPracticeTest);
        openSource.addEvent(examPractice);
        openSource.addEvent(courseIntro);
        inspiration.addEvent(advancedJSExam);
        inspiration.addEvent(saintValParty);
        inspiration.addEvent(trifonParty);
        halls.push(openSource);
        halls.push(inspiration);

        return halls;
    }(eventSystem));
});
