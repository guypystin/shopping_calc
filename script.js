let create_table = function () {

  /* Обьявление инпутов */
  let prod_name = document.querySelector(".form-name");
  let prod_price = document.querySelector(".form-price");
  let prod_amount = document.querySelector(".form-amount");
  let prod_price_sum = parseInt(prod_price.value) * parseInt(prod_amount.value);
  let table = document.querySelector(".table");
  let table_body = document.querySelector(".tbody");

  /* Ввод данных в таблицу */
  function insert_rows() {
    let create_tr = document.createElement("tr"); //Создаем tr для таблицы
    let table_append = table_body.appendChild(create_tr); // добавляем tr в таблицу как дочерний элемент
    let create_td_name = document.createElement("td"); // создаем ячейку для имени товара
    let create_td_price = document.createElement("td"); // создаем ячейку для цены товара
    let create_td_amount = document.createElement("td"); // создаем ячейку для количества товара
    let create_td_sum = document.createElement("td"); // создаем ячейку для умножения цены на кол-во товара

    let append_tr_name = create_tr.appendChild(create_td_name); // добавляем td имя товара в tr как дочерний элемент
    let append_tr_price = create_tr.appendChild(create_td_price); // добавляем td цены товара в tr как дочерний элемент
    let append_tr_amount = create_tr.appendChild(create_td_amount); // добавляем td колиичества товара в tr как дочерний элемент
    let append_tr_sum = create_tr.appendChild(create_td_sum); // добавляем td для умножения цены на кол-во товара в tr как дочерний элемент


    /* Перенос данных с input в tbody */
    [
      [append_tr_name, prod_name.value],
      [append_tr_price, prod_price.value],
      [append_tr_amount, prod_amount.value],
      [append_tr_sum, prod_price_sum],
    ].forEach((key, value) => set_val_into_field(key, value));

    /* добавляет классы элементам таблицы */
    function add_class() {
      create_tr.classList.add("foundation");
      create_td_name.classList.add("name");
      create_td_price.classList.add("price");
      create_td_amount.classList.add("amount");
      create_td_sum.classList.add("sum");
    }
    add_class();
  }
  /* вывод итоговой суммы списка в table foot */

  /* проверка инпутов на пустоту */
  function check_value() {
    if (prod_price_sum > 0.5) {
      insert_rows();
    }

    [prod_name, prod_amount, prod_price].forEach((name) => {
      name.style = name.value
        ? "border: 1px solid black"
        : "border: 2px solid red";
    });

    if (prod_name.value || prod_price.value) {
      clean();
    }
  }

  check_value();

  /* Записывает итоговую сумму в футер */
  function calcFootSum() {
    let calc = 0; //сюда будет складываться итоговая сумма
    let numbers = document.getElementsByClassName("sum");

    for (var i = 0; i < numbers.length; i++) {
      calc += parseInt(numbers[i].innerHTML);
    }
    let newCalc = calc.toLocaleString('ru-RU') + ' ₽'
    document.querySelector(".tfoot_sum").innerHTML = newCalc;
  }


  //Удаление продуктов из списка
  function deleteItems() {
    let item = document.querySelectorAll(".foundation")
    let arr = [...item]
    arr.forEach(function (el) {
      el.addEventListener('mousemove', function () {
        el.classList.add('red');
      })
      el.addEventListener('mouseout', function () {
        el.classList.remove('red');
      })
      el.addEventListener('click', function () {
        let acces = confirm('Вы точно хотите удалить ' + `${el.firstElementChild.innerHTML}` + ' ?');
        if (acces) {
          el.remove()
        }

        calcFootSum();


      })
    })
  }



  calcFootSum();
  add_standart_amount();
  deleteItems()
  // focus()
};

/* запуск функции "create_table" по нажатию enter */
let run_enter = document.addEventListener("keydown", function (tap) {
  if (tap.keyCode === 13) {
    create_table();
  }
});

/* добавляет стандартное значение в третий инпут */
function add_standart_amount() {
  let standart_amount = document.querySelector(".form-amount");
  standart_amount.value = 1;
}

add_standart_amount();

let set_val_into_field = (field, value) => (field[0].innerHTML = field[1]);

//добавляет аттрибут к элементам кнопок
function addAttribute() {
  let buttons = document.querySelectorAll(".number");
  let arr = [...buttons];
  arr.forEach(function (i) {
    i.setAttribute("onclick", `typeText(${i.textContent})`);
  });
}
addAttribute();

//active для формы по клику
function addActiveClass() {
  let nameForm = document.querySelector(".form-name")
  let priceForm = document.querySelector(".form-price")
  let amountForm = document.querySelector(".form-amount")
  priceForm.onclick = function () {
    priceForm.classList.add("active")
    amountForm.classList.remove("active");
    nameForm.classList.remove("active");
  }

  amountForm.onclick = function () {
    amountForm.classList.add("active");
    priceForm.classList.remove("active");
    nameForm.classList.remove("active");

    if (amountForm.value == 1) {
      amountForm.value == '';
    }
  }
  nameForm.onclick = function () {
    nameForm.classList.add("active");
    priceForm.classList.remove("active");
    amountForm.classList.remove("active");
  }

}
addActiveClass()

/* Набирает текст с экранной клавиатуры
  В input с классом .active */
function typeText(t) {
  let ab = document.querySelector(".active")
  ab.value += t;
  checkValue()
};

//отчищает поля
function clean() {
  let prod_name = document.querySelector(".form-name").value = "";
  let prod_price = document.querySelector(".form-price").value = "";
  let prod_amount = document.querySelector(".form-amount").value = 1;
}
function deleteOne() {
  let act = document.querySelector('.active')
  act.value = act.value.substring(0, act.value.length - 1);
}
function checkValue() {
  let inp = document.querySelectorAll("input");
  let inpArr = inp.forEach(function (el) {
    if (el.value.length > 5) {
      el.value = el.value.slice(0, 9);
    }
  })
}
