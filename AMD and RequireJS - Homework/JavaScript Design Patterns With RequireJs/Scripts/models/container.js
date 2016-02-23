define(['section'], function (Section) {
    "use strict";

    return (function (Section) {

        function Container(todoListName) {
            this._todoListName = todoListName;
            this._sectionElement = document.createElement('section');
        }

        Container.prototype.addToDOM = function (domParent) {
            domParent.appendChild(this.createDomElement());
        };
        Container.prototype.addSectionToContainer = function (section) {
            this._sectionElement.appendChild(section);
        };

        Container.prototype.createDomElement = function () {
            var domFragment = document.createDocumentFragment();
            var main = document.createElement('main');
            var h1Tag = document.createElement('h1');
            var text = document.createTextNode(this._todoListName);
            h1Tag.appendChild(text);
            main.appendChild(h1Tag);
            var section = this._sectionElement;
            main.appendChild(section);
            var nav = document.createElement('nav');
            var inputText = document.createElement('input');
            inputText.setAttribute('placeholder', "Title...");
            var button = document.createElement('button');
            var self = this;
            button.onclick = function () {

                var newSectionName = inputText.value;
                if (newSectionName) {
                    var newSection = new Section(inputText.value);
                    self.addSectionToContainer(newSection.createDomElement());
                }
            };
            button.appendChild(document.createTextNode('New Section'));
            nav.appendChild(inputText);
            nav.appendChild(button);
            main.appendChild(nav);
            domFragment.appendChild(main);

            return domFragment;
        };
        return Container;
    })(Section);
});
