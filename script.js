//добавить сложение в итоговую сумму снизу

let create_table = function (row, column) {

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

        append_tr_name.innerHTML = prod_name.value; // вписываем данные с input в таблицу 
        append_tr_price.innerHTML = prod_price.value; // вписываем данные с input в таблицу 
        append_tr_amount.innerHTML = prod_amount.value; // вписываем данные с input в таблицу 
        append_tr_sum.innerHTML = prod_price_sum; // вписываем данные с input в таблицу 

        /* добавляет классы элементам таблицы */
        function add_class(){
            create_tr.classList.add("foundation");
            create_td_name.classList.add("name");
            create_td_price.classList.add("price");
            create_td_amount.classList.add("amount");
            create_td_sum.classList.add("sum");
        }
        add_class()
    }
    /* вывод итоговой суммы списка в table foot */
    function write_sum_foot(){
        let get_class = document.getElementsByClassName("sum");
        
    }
    write_sum_foot()
    
    /* проверка инпутов на пустоту */
    function check_value() {
        if (prod_price_sum > 1) {
            insert_rows();
        }
        if (
            prod_name.value == "" ||
            prod_price.value == "" ||
            prod_amount.value == ""
        ) {
            alert("пожалуйста, заполните все поля!");
        } else {
            // clean()
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
    add_standart_amount()
};




/* запуск функции "create_table" по нажатию enter */
let run_enter = document.addEventListener('keydown', function(tap){
    if (tap.keyCode === 13) {
        create_table()
      }
})



function add_standart_amount(){
    let standart_amount = document.querySelector(".form-amount")
    standart_amount.value = 1;
}
add_standart_amount()


let aaa = document.querySelectorAll(".sum")
let aa = Array.from([aaa]);