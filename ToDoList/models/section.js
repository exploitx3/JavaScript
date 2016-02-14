var models = models || {};

(function(scope) {
     function Section(title){
         this.id = 0;
         this.title = title;
         this._items = [];
     }

    Section.prototype.addItem = function addItem(item){
        this._items.push(item);
    };

    Section.prototype.getItems = function getItems(){
        return this._items;
    };

    Section.prototype.addToDOM = function addToDOM(selector){
        var sectionsWrapper = document.querySelector(selector);
        var section = document.createElement('section');
        var sectionTitle = document.createElement('h2');
        sectionTitle.innerText = this.title;
        section.appendChild(sectionTitle);

        // Add items
        var ul = document.createElement('ul');
        ul.setAttribute('id', '');

        var itemInput = document.createElement('input');
        itemInput.setAttribute('type', 'text');
        itemInput.setAttribute('id', 'item-input');

        var itemButton = document.createElement('button');
        itemInput.setAttribute('id', 'item-button');
        itemButton.innerText = 'Add Item';

        section.appendChild(itemInput);
        section.appendChild(itemButton);
        sectionsWrapper.appendChild(section);

    };

    scope.Section = Section;
})(models);