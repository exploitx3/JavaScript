"use strict";

var todoModule = function () {

    var Container = function () {

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
                    var newSection = new todoModule.Section(inputText.value);
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
    }();

    var Section = function () {
        function Section(sectionName) {
            this._sectionName = sectionName;
            this._ulListElement = document.createElement('ul');
            this._currentItemIndex = 1;
        }

        Section.prototype.addItemToSection = function (item) {
            this._ulListElement.appendChild(item.createDomElement(this._currentItemIndex));
            this._currentItemIndex++;
        };

        Section.prototype.addToDOM = function (domParent) {
            domParent.appendChild(this.createDomElement());
        };

        Section.prototype.createDomElement = function () {
            var domFragment = document.createDocumentFragment();
            var article = document.createElement('article');
            var h2tag = document.createElement('h2');
            var text = document.createTextNode(this._sectionName);
            h2tag.appendChild(text);
            article.appendChild(h2tag);
            var ul = this._ulListElement;
            ul.setAttribute('type', 'none');
            article.appendChild(ul);

            var nav = document.createElement('nav');
            nav.setAttribute('class', 'list');
            var inputText = document.createElement('input');
            inputText.setAttribute('placeholder', "Add Item...");
            var button = document.createElement('button');
            var self = this;
            button.onclick = function () {
                var newItem = new todoModule.Item(inputText.value);
                if (inputText.value) {
                    self.addItemToSection(newItem);
                }
            };
            button.appendChild(document.createTextNode('+'));
            nav.appendChild(inputText);
            nav.appendChild(button);
            article.appendChild(nav);
            domFragment.appendChild(article);

            return domFragment;
        };
        return Section;
    }();

    var Item = function () {
        function Item(itemText) {
            this._itemText = itemText;
        }

        Item.prototype.createDomElement = function (itemIndex) {
            var liElement = document.createElement('li');
            var inputElement = document.createElement('input');
            inputElement.setAttribute('type', 'checkbox');
            inputElement.setAttribute('id', 'checkbox' + itemIndex);
            liElement.appendChild(inputElement);
            var labelElement = document.createElement('label');
            labelElement.setAttribute('for', 'checkbox' + itemIndex);
            labelElement.appendChild(document.createTextNode(this._itemText));
            liElement.appendChild(labelElement);
            return liElement;
        };

        return Item;
    }();

    return {
        Container: Container,
        Section: Section,
        Item: Item
    };
}();

var bodyElem = document.getElementById('wrapper');
var newContainer = new todoModule.Container("Tuesday TODO List");
bodyElem.appendChild(newContainer.createDomElement());

//# sourceMappingURL=script-compiled.js.map