let arr = [];

let first = function () {
  let a = document.querySelector(".form-name").value;
  return a;
};
let two = function () {
  let a = document.querySelector(".form-price").value;
  return a;
};
let three = function () {
  let a = document.querySelector(".form-amount").value;
  return a;
};

/*клеим строку из полученных выше значений инпутов*/
let get_string = function () {
  return first() + "," + two() + "," + three();
};
/*разбиваем строку на массив и записываем значения в arr*/
let get_arr = function () {
  return (arr = get_string().split(","));
};
