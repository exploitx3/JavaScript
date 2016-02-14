var models = models || {};

(function(scope) {
     function Container(title){
         this.title = title;
         this._sections = [];
     }

    Container.prototype.addSection = function addSection(section){
        this._sections.push(section);
    };

    Container.prototype.getSections = function getSections(){
        return this._sections;
    };

    Container.prototype.addToDOM = function addToDOM(selector){
        var wrapper = document.querySelector(selector);
        var container = document.createElement('div');
        container.setAttribute('id', 'container');
        var title = document.createElement('h1');
        title.innerText = this.title;
        container.appendChild(title);

        var divSections = document.createElement('div');
        divSections.setAttribute('id', 'sections');
        container.appendChild(divSections);

        //Add sections
        this._sections.forEach(function (section) {
            section.addToDOM('#sections');
        });

        var footer = document.createElement('footer');
        var sectionInput = document.createElement('input');
        sectionInput.setAttribute('type', 'text');
        sectionInput.setAttribute('id', 'section-input');
        var sectionButton = document.createElement('button');
        sectionButton.innerText = 'Add Section';

        footer.appendChild(sectionInput);
        footer.appendChild(sectionButton);
        container.appendChild(footer);

        wrapper.appendChild(container);
        var _this = this;
        sectionButton.addEventListener('click', function (ev){
            var sectionTitle = document.getElementById('section-input').value;
            var section = new scope.Section(sectionTitle)
            _this.addSection(section);
        })
    };


    scope.Container = Container;
})(models);