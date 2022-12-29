var shape = ["triangle", "sqare", "circle"];
var colr = ["yel", "blu", "grn"];
var conten = document.getElementById("inner-div");
var big_contener = document.getElementById("container");

// button for change shape
var change_shape = document.getElementById("btn-shape");
change_shape.addEventListener("click", () => {
  var ran_shap = shape[Math.floor(Math.random() * 3)];
  conten.setAttribute("class", ran_shap);
  console.log(ran_shap);
});

// change for colour
var change_clr = document.getElementById("btn-color");
change_clr.addEventListener("click", () => {
  var ran_colr = colr[Math.floor(Math.random() * 3)];
  big_contener.setAttribute("class", ran_colr);
  console.log(ran_colr);
});
