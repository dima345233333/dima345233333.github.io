"use strict"

let delay = 1000;
let finalCost = 0;

let varType = 0;
let varDesign = 0;
let varAdapt = 0;

let calculator = {
    type: [1, 10, 100, 1000],
    design: [1, 10, 100, 1000],
    adapt: [1, 100],
    sumCost: function (var1, var2, var3) {
        let var4 = var1 + var2 + var3;
        alert("Итоговая стоимость сайта - " + var4 + " руб.");
    }
};



while (true) {
    varType = calculator.type[prompt("Какой сайт вы хотите?(0- Сайт-визитка, 1- Корпоративный сайт, 2- Лендинг, 3-Интернет-магазин) ")];
    if ((varType == calculator.type[0]) || (varType == calculator.type[1]) || (varType == calculator.type[2]) || (varType == calculator.type[3])) {
        break;
    }
}



while (true) {
    varDesign = calculator.design[prompt("Какой дизайн вы хотите?(0- не норм, 1- норм, 2- гуд, 3-крутой) ")]
    if ((varDesign == calculator.design[0]) || (varDesign == calculator.design[1]) || (varDesign == calculator.design[2]) || (varDesign == calculator.design[3])) {
        break;
    }
}



while (true) {
    varAdapt = calculator.adapt[prompt("Нужна ли адаптивность для сайта?(0- нет,1-да)")];

    if ((varAdapt == calculator.adapt[0]) || (varAdapt == calculator.adapt[1])) {
        break;
    }
}

calculator.sumCost(varType,varDesign,varAdapt);


