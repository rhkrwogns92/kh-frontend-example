// 배열 리터럴 []
const arr = [1, 2, '문자열', {}]
let [a, b] = arr
console.log(a)
console.log(b)




// 객체 리터럴 {}
const user = {
    id: 'abcdefg',
    name: 'Chiho Won',
    data: [1, 2, 3, 4,],
}

const {id, name, data} = user
console.log(id)
console.log(name)
console.log(data)

//
function f(x){
    console.log('호출됨')
}
f(1)
f(1,2,3)

// 블록 스코프
console.log('블록 이전에 호출')
{
     console.log('블록 내부에서 호출됨')
     const x = 1
     console.log(x)
     {
         console.log('블록 내부 2에서 호출됨')
         const x = 5
         console.log(x)
     }
    
}


//
function sayHelloTo(name){
    const message = `Hello ${name}!`
    return function(){
        console.log(message)
    }
}

const hello = sayHelloTo('Chiho Won')
hello()

//테스트
function func(){
    var variable1 = 'I am in a block';
    let variable2 = 'I am in a block';
    const variable3 = 'I am in a block';
    console.log(variable1); console.log(variable2); console.log(variable3);
  }
func()

//렉시컬 스코핑 정리
function outer() {
    const name = '바깥임'
    function showName(){
        const n = '안쪽데이터'
        console.log(`바깥: ${NAME}, 안: ${n}`)
    }

}
outer()


// 문제 감소함수 만들기
// const counter = countdown(시작할 값)
// counter()   //10
// counter()   //9
// counter()   //8
// //....
// counter()   //0

function countdown(x) {
    let data = x
    function counter() {
        console.log(data--)
    }
    return counter
}

const counter = countdown(10)
counter()
counter()
counter()
counter()

const c1 = countdown(10)
const c2 = countdown(10)
c1()
c1()
c2()

///증가함수만들기
function countdown1() {
    let a = 0
    function counter1() {
        console.log(`${++a} 회 호출됨`)
    }
    return counter1
}

const coun = countdown1()
coun()
coun()
coun()

//
