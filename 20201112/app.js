// ctrl alt N (시작)
console.log('test');

// 자바스크립트에서 변수 선언
console.log(name);
var name = '안녕';
console.log(name);

// ES6 변수, 상수 선언
var name = 'abc'; // 함수 레벨 스코프
let name1 = 'abc'; // 변수 선언방법
const name2 = 'abc'; // final (변경 불가능 - 상수)

// 선언 - 식별자를 등록
// 초기화 단계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화 하지 않았다면 undefined.


console.log(name1);
console.log(name2);


// 변수타입설정의 문제
// 동적타이핑
// 1. 값을 보고 타입 추론
// 2. 언제든 식별자의 값이 변경될 수 있음
var name3 = 'abc';
console.log(name);

name3 = 11244;
console.log(name);

// 식별자(identifier)
// 변수
// 함수
// 클래스
// 식별자 - 실행 컨텍스트에 등록됨
/*
  - 특수문자 제외한 숫자, 문자, 언더스코어(_), 달러($) 기호 가능
  - 숫자로 식별자 이름 시작은 불가능
  - 예약어(keyword, reserved word) 사용 불가능
*/

// 템플릿 리터럴
const n = 10;
const message = 'test';

console.log(`상수 n의 값: ${n}. 상수 message의 값: ${message}`);

//객체
const obj = {
    abc: 'abc'
}
// 멤버 접근 연산자(.) member access operator
console.log(obj.abc)
// 계산된 멤버 접근 연산자([]) computed member access operator
console.log(obj['abc'])
obj['alpha'] = 'a'
obj['beta'] = 'b'
console.log(obj);

const obj1 = {
    abc : 'abc'
}

const obj2 = {
    abc: 'abc'
}
// === 은 타입이 일치하는지 값이 일치하는지 확인
console.log(obj1 === obj2);


// if 문
const a = 10
if(a > 5){
    console.log('a가 5보다 큽니다.')
}

// for
for (var i = 0; i < 10; i++){
    console.log(`${i+1}번째 출력.`)
}

// 배열
const obj6 = ['감자', 10, [1,2,3]]

// p 는 변수 아무거나 쓰면 전체 순회, 배열 이름입력하면 그 배열만 순회
for (value of obj6){
    console.log(value)
    }


// 이름이 있는 함수
function test(a,b) {
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}
// 1번째
const resultMessage1 = test(1,2)
console.log(resultMessage1);

// // 2번째
// const a = test
// const resultMessage2 = a(1,2)
// console.log(resultMessage2);

// 이름이 없는 함수
// const test = (a, b) => `${a}와 ${b}의 합은 ${a+b}입니다.`
// const resultMessage2 = test(1,2)
// console.log(resultMessage2)

//메소드
const obj ={
    name: 'chwon',
    say: function(){
        console.log('몬가 말함');
    }
}

obj.say();

//메소드의 this
const obj ={
    name: 'chwon',
    say: function(){
        console.log(`my name is ${this.name}`);
    }
}

obj.say();