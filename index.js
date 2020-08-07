console.log("hello world");

//create several modules to keep each item seperated

//budgetController
//userInterfaceController
//controller that can use both of the other modules

let budgetController = (function () {})();

var UIController = (function () {})();
let controller = (function (budgetControl, UIControl) {
  document.querySelector(".add__btn").addEventListener("click", function () {
    // get input, add item to budget controller, add to ui, calc budget, and display
    console.log("yo");
  });
})(budgetController, UIController);
