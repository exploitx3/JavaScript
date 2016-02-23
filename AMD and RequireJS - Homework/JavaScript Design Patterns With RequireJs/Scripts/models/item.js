define([], function(){
    "use strict";

    return (function () {
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
    })();
});
