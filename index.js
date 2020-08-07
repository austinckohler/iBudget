console.log("hello world");

//create several modules to keep each item seperated

//budgetController
//userInterfaceController
//controller that can use both of the other modules

let budgetController = (function () {})();
let controlAddItem = function () {};

var UIController = (function () {})();
let controller = (function (budgetControl, UIControl) {
  document.querySelector(".add__btn").addEventListener("click", controlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      controlAddItem();
    }
  });
})(budgetController, UIController);
