define(['item'], function(Item){
    "use strict";

    return (function () {
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
                var newItem = new Item(inputText.value);
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
    })();
});
