/*TASK 1
let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Город проживания?'),
    phone = prompt('Ваш телефон?'),
    email = prompt('Ваш email?'),
    company = prompt('Компания,где работаете?');
    document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + 
    	'.');

 TASK 2
let year = 2020 - age;
document.write("/n/r name + ' родился в ' + year + ' году."); 

 TASK 4
let a = 1;
(a > 0) ? console.log('Верно') : console.log ('Неверно');
a = 0;
(a > 0) ? console.log('Верно') : console.log ('Неверно');
a = -3;
(a > 0) ? console.log('Верно') : console.log ('Неверно');
	
 TASK 5 + 6 
let a = 10,
	b = 15;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a - b);
if (a + b > 1) console.log(Math.pow(a + b, 2));
((a > 2 & a < 11) || (b >= 6 & b < 14)) ? console.log('Верно')  : console.log('Неверно');

TASK 7

let n = 58;
	if (n >= 0 & n < 15) console.log('Число в первой половине часа');
	else if (n >= 15 & n < 30) console.log('Число во второй половине');
	else if (n >= 30 & n < 45) console.log('Число в третьей половине');
	else console.log('Число в четвертой половине');

TASK 8 

let day = 5;
	if (day > 0 & day < 10) console.log('Число в первой декаде');
	else if (day >= 10 & day < 20) console.log('Число во второй декаде');
	else console.log('Число в третьей декаде');

TASK 9
let day = 30,
	year = 365,
	month = 31,
	week = 7,
	hours = day / 24,
	minutes = hours * 60,
	seconds = minutes * 60;
if(day > week & day > month & day < year) console.log('Меньше года');
	else if (day < month & day < year) console.log('Меньше месяца');
	else console.log ('Меньше недели'); 

TASK 10 
let day = 32,
	month = '';
if(day > 0 & day <= 30) month = 'Январь';
	else if (day > 30 & day <= 60) month = 'Февраль';
	else if (day > 60 & day <= 90) month = 'Март';
	else if (day > 90 & day <= 120) month = 'Апрель';
	else if (day > 120 & day <= 150) month = 'Май';
	else if (day > 150 & day <= 180) month = 'Июнь';
	else if (day > 180 & day <= 210) month = 'Июль';
	else if (day > 210 & day <= 240) month = 'Август';
	else if (day > 240 & day <= 270) month = 'Сентябрь';
	else if (day > 270 & day <= 300) month = 'Октябрь';
	else if (day > 300 & day <= 330) month = 'Ноябрь';
	else if (day > 330 & day <= 365) month = 'Декабрь';
	else console.log('Данное число не подходит!');
console.log(month);*/





