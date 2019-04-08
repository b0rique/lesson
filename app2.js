"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-04-06");

let appData = {
   budget: money, 
   timeData: time,
   expenses: {}, 
   optionalExpenses: {},
   income:   [],
   savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }

};

appData.moneyPerDay = appData.budget/30;

alert("Бюджет на один день составляет:  " + appData.moneyPerDay + "₽" );

if(appData.moneyPerDay < 10000) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 10000 && appData.moneyPerDay < 50000)  {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 50000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


console.log(appData);
