var models = models || {};

(function(scope) {
    function Item(content){
        this.content = content;
        this.isCompleted = false;
    }

    Item.prototype.changeStatus = function changeStatus(){
        this.isCompleted = !this.isCompleted;
    };

    scope.Item = Item;
})(models);