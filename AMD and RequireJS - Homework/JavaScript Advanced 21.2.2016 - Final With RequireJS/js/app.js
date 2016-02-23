require.config({
    paths:{
        'constants': 'helpers/constants',
        'customExceptions': 'helpers/customExceptions',
        'extensions': 'helpers/extensions',
        'polyfiller': 'helpers/polyfiller',
        'course': 'models/course',
        'employee': 'models/employee',
        'event': 'models/event',
        'hall': 'models/hall',
        'lecture': 'models/lecture',
        'party': 'models/party',
        'trainer': 'models/trainer',
        'generator': 'generator'
    }
});

require(['generator'], function (halls) {
    "use strict";
    //TODO: Dynamicaly add options to select HTML tag
    var select, sectionsFragment, optionElement;

    select = document.getElementById('halls');
    sectionsFragment = document.createDocumentFragment();

    halls.forEach(function (hall) {
        optionElement = document.createElement('option');
        optionElement.setAttribute('value', hall.getName());
        optionElement.textContent = hall.getName();
        sectionsFragment.appendChild(optionElement);
    });
    select.appendChild(sectionsFragment);

    select.addEventListener('change', function (ev) {
        if ($('#halls option:first-child').val() === 'Choose Hall') {
            $('#halls option:first-child').remove();
        }

        var _this = this;
        if (this.value !== 'Choose Hall') {
            var lectures, parties, heading, grid;
            var hall = halls.filter(function (hall) {
                return hall.getName() === _this.value;
            })[0];
            lectures = parseArray(hall.lectures, true);
            parties = parseArray(hall.parties);

            heading = $('<h4>').text('Lectures:');
            grid = $('#jsGridLectures');

            if (grid.prev()[0].tagName === 'H4') {
                $(grid.prev()[0]).remove();
            }
            grid.before(heading);
            grid.jsGrid({
                height: "20em",
                width: "100%",

                sorting: true,
                paging: true,

                data: lectures,

                fields: [
                    {name: "title", title: 'Title', type: "text", width: 80},
                    {name: "duration", title: 'Duration', type: "number", width: 30},
                    {name: "date", title: 'Date', type: "date", width: 80},
                    {name: "course", title: 'Course', type: 'text', width: 130},
                    {name: "trainer", title: 'Trainer', type: 'text', width: 130},
                    {type: 'control', editButton: false}
                ]
            });

            heading = $('<h4>').text('Parties:');
            grid = $('#jsGridParties');
            if (grid.prev()[0].tagName === 'H4') {
                $(grid.prev()[0]).remove();
            }
            grid.before(heading);
            grid.jsGrid({
                height: '20em',
                width: "100%",

                sorting: true,
                paging: true,

                data: parties,

                fields: [
                    {name: "title", title: 'Title', type: "text", width: 80},
                    {name: "duration", title: 'Duration', type: "number", width: 30},
                    {name: "date", title: 'Date', type: "date", width: 80},
                    {name: "organiser", title: 'Organiser', type: 'text', width: 130},
                    {name: "isCatered", title: 'Is it catered?', type: 'checkbox'},
                    {name: "isBirthday", title: 'Is a birthday party?', type: 'checkbox'},
                    {type: 'control', editButton: false}
                ]
            })
        }
    });

    function parseArray(array, lecture) {
        var result = [];

        array.forEach(function (el) {
            var obj = {
                title: el.getTitle(),
                duration: el.getDuration(),
                date: el.getDate().toLocaleString()
            };
            if (lecture) {
                obj.course = el.getCourse().getName() + ' [Numbers of Lectures: ' + el.getCourse().getNumberOfLectures() + ']';
                obj.trainer = el.getTrainer().getName() + ' [Workhours: ' + el.getTrainer().getWorkhours() +
                    ', Feedbacks: ' + el.getTrainer().feedbacks.join(', ') + ']'
            } else {
                obj.isBirthday = el.checkIsBirthday();
                obj.isCatered = el.checkIsCatered();
                obj.organiser = el.getOrganiser().getName() + ' [Workhours: ' + el.getOrganiser().getWorkhours() + ']';
            }
            result.push(obj);
        });


        return result;
    }
});