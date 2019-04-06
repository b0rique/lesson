 "use strict";

var money = prompt("Ваш бюджет на месяц?", ""); 
var time =  prompt("Введите дату в формате YYYY-MM-DD?", "2019-04-06"); 
var expenses  = prompt("Введите обязательную статью расходов в этом месяце"); 
var howMuch  = prompt("Во сколько обойдется?", " "); 
 

var appData = {
   moneyData: money, 
   timeData: time,
   expenses: expenses, 
   howMuch: howMuch,
   optionalExpenses: " ",
   income:   [],
   savings: false
};

alert('Бюджет на один день составляет:  ' + money/30 + "₽" );


console.log(appData);
