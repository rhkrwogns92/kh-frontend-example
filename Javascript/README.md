# 1. 숫자

- Math.pow(3,2);       // 9,   3의 2승 
- Math.round(10.6);    // 11,  10.6을 반올림
- Math.ceil(10.2);     // 11,  10.2를 올림
- Math.floor(10.6);    // 10,  10.6을 내림
- Math.sqrt(9);        // 3,   3의 제곱근
- Math.random();       // 0부터 1.0 사이의 랜덤한 숫자

# 2. 문자

\ 기호는 특별한 약속
- 바로뒤에 오는 것은 정보로서의 역할 이라는 약속이다.
- alert('coding\" everybody") 가능해진다

typeof 숫자 또는 "문자" 
- 해당 내용의 타입을 알려준다

문자와 문자를 더할 때
```javascript
alert("coding"+" everybody");
결과 : coding everybody
```

여러줄 표시 하고 싶다면
```javascript
alert("coding\neverybody");
결과 : coding
       everybody
```

문자의 길이를 구할 때는 문자 뒤에 .length를 붙인다.
```javascript
alert("coding everybody".length)
결과 : 16
```

# 3. 변수

자바스크립트 에서의 변수 선언
- var (Variable) , let, const

## 3.1. var

var는 굉장히 유동적이다. 변수 내용을 다른 값으로 해줄 때마다 해당 값으로 변경된다(덮어씌워짐)
덮어씌워지기 전의 값은 사용 불가

```javascript
var name = 'Hi'
console.log(name)
-> Hi

var name = 'Hello'
console.log(name)
-> Hello
```

## 3.2. let

let은 재 선언은 불가능 하지만 재 할당은 가능하다.

```javascript
let name = 'Hi'
console.log(name)
-> Hi

let name = 'Hello'
console.log(name)
-> // Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'Hello'
console.log(name)
-> Hello
```

## 3.3. const

const는 재 선언, 재 할당 모두 불가능하다.

```javascript
const name = 'Hi'
console.log(name)
-> Hi

const name = 'Hello'
console.log(name)
-> // Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'Hello'
console.log(name)
-> // Uncaught TypeError: Assignment to constant variable
```

결론
- var는 재 선언과 재 할당이 모두 가능하다. (쉽게 변경 가능)
- let은 재 선언은 불가능하고 재 할당은 가능하다. (보통 사용)
- const는 재 선언, 재 할당 모두 불가능하다. (확실한 값)

# 4. 주석 

// 표시를 하면 주석 처리 된다.

# 5. 줄바꿈과 여백(세미콜론)

; 세미콜론(semicolon)
- 명령이 끝났다는 표현
- 한줄에 여러 명령이 있을때, 구분하는 역할
- 자바스크립트는 엔터를쳐 줄바꿈을 해도 알아듣지만, 쓰는 것이 좋은 습관

<br/>
- 줄바꿈이 된다.

# 6. 비교

- 비교연산자, null과 undefined, 부정과 부등호

# 6.1. 비교연산자

==(동등연산자 equal opertator) 
- 좌항과 우항 비교해서 값이 같다면 true 다르다면 false표시

=== (strict equal opertator 엄격한 동등 연산자) 
- 좌항과 우항의 값이 정확하게 같으냐 묻는것(데이터값과 데이터타입)

```javascript
alert(1=="1") //true 타입이 다르더라도 값이 같으면 true
alert(1==="1")  //false   좌항과 우항의 값과 데이터타입까지 정확하게 일치해야한다.
```

아주 거대한 프로그램 일 경우 ===를 쓰는게 좋지만 아무때나 꼭 === 를 쓰도록 하자.

# 6.2. null 과 undefined

- null 은 값이 없다는 뜻이라는 특수한 형식의 데이터다. 
- undefined 는 값이 정의 되지 않았다라는 뜻 

- 똑같이 값이 없는 상태인데 null은 프로그래머가 의도적으로 지정한 상황이고
- undefined는 의도하지 않은 상황 이다.

- true, false는 데이터이고 이걸 묶어서 Boolean 데이터 타입이라고 한다.
- -1,0,1,2,3 은 Number
- null 과 undefined는 각각이 데이터 타입이다

- 동등연산자는 숫자 1을 true로 간주한다. 그 외는 다르다(false)라고 간주한다.
- NaN 계산할 수 없음이다.

```javascript
alert(null == undefined);       //true
alert(null === undefined);      //false
alert(true == 1);               //true
alert(true === 1);              //false
alert(true == '1');             //true
alert(true === '1');            //false
 
alert(0 === -0);                //true
alert(NaN === NaN);             //false
```

# 6.3. 부정과 부등호

부정
- != 를 쓰면 ==의 답이 반대로 나온다
- !== 를 쓰면 ===의 답이 반대로 나온다.   

부등호
- >  ,  >=  ,  <=  
 - alert(1!=2);            //true
 - alert(1!=1);            //false
 - alert("one"!="two");    //true
 - alert("one"!="one");    //false

# 7. 조건문

- if, else if , else
- 조건문의 응용(prompt)
- &&(and)
- ||(or)
- 기타 false로 간주되는 데이터 형
  
## 7.1. if, else if , else

```javascript
if(false){
    alert(1);
} else if(true){
    alert(2);
} else if(true){
    alert(3);
} else {
    alert(4);
}
//답은 2 이다.

if(false){
    alert(1);
} else if(false){
    alert(2);
} else if(false){
    alert(3);
} else {
    alert(4);
}
//답은 4 이다.
```

## 7.2. 조건문의 응용(prompt)

promp() 는 질문을 하면 사용자에게 답을 받을 수 있는 명령어 이다.

```javascript
var id = prompt('아이디를 입력해 주세요')      
  if(id== 'rhkrwogns92') {
    alert('아이디가 일치 합니다.');
 
  var password= prompt('비밀번호를 입력해 주세요')
   if(password==1111) {
     alert('비밀번호가 일치 합니다. 로그입 하셨습니다.');
     alert(id+'님 반갑습니다.'); 
     } 
   else{
       alert('비밀번호가 다릅니다.');
       } 
    } 
  else{
      alert('아이디가 일치하지 않습니다');
      }
```

## 7.3. &&(and)

&&은 and라는 의미이다.                   
     
```javascript
var id = prompt('아이디를 입력해 주세요');
var password = prompt('비밀번호를 입력해 주세요.')
 if( id== 'rhkrwogns92' && password === '1111') {
   alert('로그인 하셨습니다.'+id+'님 반갑습니다.');  
   } 
 else{
     alert('아이디가 일치하지 않습니다');
     }
```

## 7.4. ||(or)

||은 or의 뜻으로써 하나라도 참이면 true가 된다.        

```javascript
id= prompt("아이디를 입력해 주세요");
password= prompt('비밀번호를 입력해 주세요');
 if((id==='rhkrwogns92' || id==='rhkrwogns'||id==='rhkrwogns00') && password==='1111' ){
   alert(id+'의 아이디와 비밀번호가 인증 되었습니다.');
   }
 else{
     alert('아이디 비밀번호 인증에 실패 했습니다');
     }
```
- !은 역전의 의미를 말한다.
- !true 은  false의 뜻,  !false 은 true의 뜻


## 7.5. 기타 false로 간주되는 데이터 형

```javascript
if(!''){  alert('빈 문자열')  }

if(!undefined){  alert('undefined');  }

var a;
if(!a){  alert('값이 할당되지 않은 변수');   }

if(!null){  alert('null');  }

if(!NaN){  alert('NaN');  }
```
- ! 역으로 되서 출력된다.
- ! 없으면 출력 안된다.


# 8. 반복문(영어로 loop, iterate)

- 기본문법
- while
- for
- 반복문의 제어(continue, break)
- 반복문의 중첩
  
## 8.1. 기본문법

- document.write 은 html에 입력해서 출력하는 것 처럼 자바스크립트에서 웹페이지에 출력할때 쓰는 코드이다.

 - <script type="text/javascript">
 - document.write('coding <br> everybody');

## 8.2. while

```javascript
공식
while (조건){
  반복해서 실행할 코드
}
```

```javascript
<script type="text/javascript">
var i=0;
while(i<10) {
  document.write('coding everybody<br>'+i+'<br>' ); 
  i++
}
```

## 8.3. for

- i++ 는 코드가 돌고나서 증가한다.
- ++i 는 코드가 돌기전 증가한 상태로 코드가 돈다.

```javascript
<script type="text/javascript">
for(var i=0;i<10;i++) {
document.write('coding everybody'+i+'<br>')
}
</script>
```

## 8.4. 반복문의 제어(continue, break)

```javascript
for(i=0;i<10;i++) {
   if(i===4) {        
     continue; 
     }
  document.write('coding everybody'+i+'<br>');
   if(i===8) {
     break;   
     }
   }
```

- continue는 코드 앞에 써야한다.
- break는 다 가능하다.

## 8.5. 반복문의 중첩

- 00,01,02...98,99 반복 하게 하기

```javascript        
for(i=0;i<10;i++) {
  for(var j=0;j<10;j++) {
   document.write('coding everybody'+i+j+'<br>');
     }
   }
```

# 9. 함수(function)

- 코드의 재사용성을 높여준다.
- 유지보수의 용이
- 가독성이 좋다

```javascript
function 함수명( [인자...[,인자]] ){
   //코드
   return 반환값 
}

//인자는 입력값이고
//return은 출력 값이다.
```

```javascript
function numbering(){
  i = 0;
   while(i < 10){
      document.write(i);
      i += 1;
   }   
}
numbering();
//numbering() 으로 함수를 호출 하는 것이다.
```

## 9.1. 입력과 출력 매개변수와 인자

```javascript
function member(i) { 
   return i  
}

alert (member(1)); // 1 출력
alert (member(9)); // 9 출력
```

## 9.2. 함수를 정의하는 여러가지 방법

- 다 같은 함수 의 뜻이다.
 - [첫번째]

 ```javascript
 var numbering = function () {
    i = 0;
    while(i < 10) {
      document.write(i);
      i += 1;    
    }
 }
 numbering();  //함수 호출
 ```

 - [두번째]
 
 ```javascript 
 function numbering() {
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
 }
 numbering();  //함수 호출
 ```

 - [세번째]
   - 이름이 없는 익명함수라 한다
   - 함수 자체를 감싸서 출력 하는 것이다. 흔히 1회성으로 쓸 경우 쓴다.
 ```javascript
 `(` function (){
    i = 0;
    while(i < 10){
      document.write(i);
      i += 1;
    }
   }
 `)`
 ();  //함수 호출
 ```


# 10. 배열

- 배열(array)이란 연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입이다
- 대괄호 [  ] 는 배열을 만드는 기호다. 대괄호 안에 데이터를 콤마(,)로 구분해서 나열하면 배열이 된다.
- 각각의 데이터를 원소(Element)이라고 부른다.
- 안에 있는 데이터를 꺼낼 때는 배열에 담겨있는 값을 가져올 때는 대괄호 안에 숫자를 넣는다.
  이 숫자를 색인(index)라고 부르고 0부터 시작한다.

```javascript
function banana() {
   return ["eoging", "jahoon", "hobang", "jasy", "pizza"];        
}
var members= banana();
```

- 개인적으로 호출하기,

 - .toUpperCase()는 소문자를 대문자로 바꿔준다.
 ```javascript
 document.write(members[0].toUpperCase()+"<br>");
 document.write(members[1].toUpperCase()+"<br>");
 ```
 답은: EOGING
      JAHOON

 - .length 는 배열안의 총 개수를 알려준다.
 ```javascript
 document.write(members.length+"<br>");        
 ``` 
 답은: 5

- 반복문 조합

 ```javascript
 for(var i=0; i<4; i++) {
  document.write(members[i].toUpperCase()+"<br>");
 }
 ``` 
 답은: EOGING
       JAEHOON
       HOBANG
       JASY

 - .length를 활용한 배열과 반복문
 ```javascript
 for(var i=0; i < members.length; i++) {
   document.write(members[i].toUpperCase()+"<br>");
 }
 ```
 답은: EOGING
       JAEHOON
       HOBANG
       JASY
       PIZZA

- 다양한 기능
 - .toUpperCase()는 소문자를 대문자로 바꿔준다.
 ```javascript
 변수.toUpperCase()
 ```
 - .length는 배열안의 총 개수를 알려준다. 
 ```javascript
 변수.length
 ```
 - .push()는 배열의 끝에 단일의 원소를 추가하는 방법이다. 
 ```javascript
 변수.push();
 ```
 - .concat()은 복수의 원소를 배열에 추가하는 방법이다. 
 ```javascript
 변수= 변수.concat([ '인자1', '인자2' ])
 ```
 - .unshift()는 배열의 시작점에 원소를 추가하는 방법이다. 인자로 전달한 값을 배열의 첫번째
   원소로 추가하고 배열의 기존 값들의 색인을 1씩 증가시킨다.
 ```javascript
 number.unshift( '변수' )
 ```
 - .splice()는 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을
   배열로부터 제거한 후에 리턴한다. 그리고 세번째 인자부터 전달된 인자들을 첫번째 인자의 원소 앞에 추가한다.
 ```javascript
 변수. splice()
 var li = ['a', 'b', 'c', 'd', 'e'];
 li.splice(2, 0, 'B');
 alert(li);// 답은 li= ['a', 'b', 'B', 'c', 'd', 'e'] 가 된다.
 ```
 - .shift()는 배열의 첫번째 원소를 제거하는 방법이다. 
 ```javascript
 변수.shift()
 ```
 - .pop() 는 배열 끝점의 원소를 배열 li에서 제거한다.  
 ```javascript
 변수.pop()
 ```
 
 - 정렬하는 방법이다.
  - .sort를 사용한다. 
 ```javascript
 변수.sort()
 ```
  - .reverse 는 역순으로 정렬
 ```javascript
 변수.reverse()
 ```

## 10.1. 데이터 추가

- .push()는 배열의 끝에 단일의 원소를 추가하는 방법이다.
 ```javascript
 변수.push();
 var li = ['a', 'b', 'c', 'd', 'e'];
 li.push('f');
 alert(li);
 답: li= ['a', 'b', 'c', 'd', 'e', 'f'];
 ```

- .concat()은 복수의 원소를 배열에 추가하는 방법이다.
 ```javascript
 변수= 변수.concat([ '인자1', '인자2' ]) 
 var li = ['a', 'b', 'c', 'd', 'e'];
 li = li.concat(['f', 'g']);
 alert(li); 
 답: li=  ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 ```

- .unshift()는 배열의 시작점에 원소를 추가하는 방법이다. 
  인자로 전달한 값을 배열의 첫번째 원소로 추가하고 배열의 기존 값들의 색인을 1씩 증가시킨다.
 ```javascript
 number.unshift( '변수' )
 var li = ['a', 'b', 'c', 'd', 'e'];
 li.unshift('z');
 alert(li);
 답:  li = ['z', 'a', 'b', 'c', 'd', 'e'];
 ```

- .splice()는 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을
   배열로부터 제거한 후에 리턴한다. 그리고 세번째 인자부터 전달된 인자들을 첫번째 인자의 원소 앞에 추가한다.
 ```javascript
 변수. splice()
 var li = ['a', 'b', 'c', 'd', 'e'];
 li.splice(2, 0, 'B');
 alert(li);
 답: li = ['a', 'b', 'B', 'c', 'd', 'e'];
 ```

## 10.2. 데이터 삭제

- 배열의 첫번째 원소를 제거하는 방법이다. shift를 사용하면 된다. 
 ```javascript
 var li = ['a', 'b', 'c', 'd', 'e'];
 li.shift();
 alert(li);
 답:  li = ['b', 'c', 'd', 'e']
 ```

- 배열 끝점의 원소를 배열 li에서 제거한다. 이때는 pop를 사용한다. 
 ```javascript
 var li = ['a', 'b', 'c', 'd', 'e'];
 li.pop();
 alert(li);
 답:  li = ['a', 'b', 'c', 'd']
 ```

 - 정렬
  - 정렬하는 방법이다. sort를 사용한다.
  ```javascript
  var li = ['c', 'e', 'a', 'b', 'd'];
  li.sort();
  alert(li);
  답: li = ['a', 'b', 'c', 'd', 'e']
  ```

   - 역순으로 정렬. reverse를 사용한다.
  ```javascript
  var li = ['c', 'e', 'a', 'b', 'd'];
  li.reverse();
  alert(li);
  답: li = ['e', 'd', 'c', 'b', 'a'];
  ```