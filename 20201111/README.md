<!--한번에 수정할 때 ctr+f 누르기-->

# 1. 색상 표현 방법

## 1.1. 16진수

RGB
R: 0~255(0~FF)
G: 0~255(0~FF)
B: 0~255(0~FF)

ex) #D23232
R: D2h - 210
G: 32h - 50
B: 32h - 50

## 1.2. rgb 함수

rgb(r값, g값, b값)
rgba(r값, g값, b값, a값)
 -a(alpha, 투명도): 0 ~ 1 사이의 값

## 1.3. HSL

Hue(색도) : 0 ~ 360도
Saturation(채도) : 0 ~ 100%
Lightness(명도): 0~ 100%

hsl(360, 100, 100);
hsla(360, 100, 100);
  

# 2. gradient

linear-gradient([각도 혹은 방향], 정지점)

# 3. 박스를 구성하는 4가지

 - margin: border(테두리) 바깥의 여백
 - border: 테두리
 - padding: 테두리와 컨텐트 사이의 여백
 - content: 내용이 표시되는 공간

## 3.1. 박스에 필요한 속성

 - width(너비), height(높이)

## 3.2. box-sizing
 - border-box: 사각형 전체의 값
   - ex)
     - width : 100px; 
     - height: 100px;
     - padding 20px;
     - border: 3px solid #red;
     - box-sizing: border-box; 
   - border-box로 할경우 전체 사격형의 크기가 100px이 되고 거기서 나뉜다.
   - border-box 아닐 경우 박스 크기는 146px이 된다.  
 - content-box : width, height
   -  좌우 padding + 좌우 border +  컨텐트

# 4. layout 실습

모든 div는 다음과 같은 속성을 지님
 - 실선(solid) 테우디
 - 실선 두께 1px
 - 테두리와 컨텐츠 사이 여백 20px
 - 다른 박스와의 간격 20px

본문(article)
 - 폭이 전체의 68%

사이드바(sidebar)
 - 폭이 전체의 30%

# 5. position 속성

-  top
-  bottom
-  left
-  right

position

- static: 기본값
- relative: 다른 블록의 배치에 따라 결정됨
- absolute: 절대값 (가장 가까운 부모나 조상 요소 중 속성이 relative인
  요소를 기준으로)
  (container를 기준으로 고정)
- fixed: absolute와 비슷해보이지만 기준이 브라우저
  (웹브라우저를 기준으로 고정)

# 6. flex

flex container에서 사용할 수 있는 속성
 - flex-direction: 플렉스 방향 지정
    - row: 주축을 가로로, 교차로 세로로(left to right)
    - row-reverse: (right to left)
    - column: 주축을 세로로ㅡ 교차축 가로로 (top to bottom)
    - column-reverse: bottom to top
 - flex-wrap: 배치 방식 지정
 - justify-content: '주축'을 기준으로 배치 방식 지정
 - align-items: '교차축'을 기준으로 배치 방식 지정
 - align-content: 여러줄 일 때 배치 방식

flex item에서 사용할 수 있는 속성
 - 플렉스 항목 크기 조정
   -  flex-grow: 플렉스 항목의 너비 얼마나 늘릴지 결정
   -  flex-shrink: 플렉스 항목의 너비 얼마나 줄일지 결정
   -  flex-basis; 항목의 기본 크기 지정

```html
flex: flex-grow flex-shrink flex-basic
```
