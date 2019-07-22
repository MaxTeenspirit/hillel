// var answer = prompt('Answer!');

// if (answer) {
// 	console.log('Thanx');
// }



// var READY = 'yes',
// 	READY_SHORT = 'y',
// 	NOT_READY = 'no',
// 	NOT_READY_SHORT = 'n',
// 	DECLINED = null;

// var answer = prompt('Are you ready?');

// console.log(answer);

// switch(answer) {
// 	case READY:
// 	case READY_SHORT:
// 		console.log('Hello!');
// 		break;
// 	case NOT_READY:
// 	case NOT_READY_SHORT:
// 		console.log('NOT HELLO!');
// 		break;
// 	default:
// 		console.log('T_T'); 
// }

// if (answer === READY || answer === READY_SHORT){
// 	console.log('Cool!');
// } else if (answer === NOT_READY || answer === NOT_READY_SHORT){
// 	console.log('Sad situation...');
// } else {
// 	console.log("GET READY!!!");
// }

 // var foo = answer === 'yes' ? true : false;
 // if(answer === 'yes'){
 // 	foo = true;
 // } else {
 // 	foo = false;
 // }

var answer = +prompt('Сколько тебе лет?');
// if(answer >= 18){
// 	console.log('БОБРО ПОЖАЛОВАТЬ');
// } else if (answer <= 11) {
// 	console.log('Смотри Спанч-Боба');
// } else {
// 	console.log('Ввёл совсем не возраст');
// }

var foo = ((answer >= 18) && (answer !== NaN)) ? console.log('БОБРО ПОЖАЛОВАТЬ') : ((answer <= 11) && (answer !==NaN)) ? console.log('Смотри Спанч-Боба') : ((answer === 0) && (answer !== NaN)) ? console.log('Родись сначала!') : console.log('Ты ввел не число');









