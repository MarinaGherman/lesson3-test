'use strict';


let money = +prompt ("Ваш бюджет на этот месяц?", ""),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько это обойдется?", "");

    if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }

};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
    console.log ("Минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Высокий уровень достатка");
} else {
    console.log ("Произошла ошибка");
}

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);

    }
}
checkSavings();