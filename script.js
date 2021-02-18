let create_table = function (row, column) {
    /* Обьявление всех необходимых переменных */
    let prod_name = document.querySelector(".form-name");
    let prod_price = document.querySelector(".form-price");
    let prod_amount = document.querySelector(".form-amount");
    let prod_price_sum = parseInt(prod_price.value) * parseInt(prod_amount.value);
    var table = document.querySelector(".table");
    var new_row = table.insertRow(-1);
   
    /* Ввод данных в таблицу */
    function insert_rows() {
     new_row.insertCell(-1).innerHTML = prod_name.value;
     new_row.insertCell(-1).innerHTML = prod_price.value;
     new_row.insertCell(-1).innerHTML = prod_amount.value;
     new_row.insertCell(-1).innerHTML = prod_price_sum;
    }
   
    /* проверка значений инпутов */
    function check_value() {
     if (
      prod_name.value == "" ||
      prod_price.value == "" ||
      prod_amount.value == ""
     ) {
      alert("пожалуйста, заполни все поля!");
     }
     if (prod_price_sum > 0) {
      insert_rows();
     }
    }
    check_value();
    /* отчистка инпутов после нажатия */
    function clean() {
     prod_name.value = "";
     prod_price.value = "";
     prod_amount.value = "";
     prod_price_sum.value = "";
    }
    clean();
   };
   