# 1. HTML

 - HTML: HyperText Markup Language
 - HTTP: HyperText Transfer Protocol
  - HTML 전송 

URL(Uniform Resource Locator)
-http://127.0.0.1:5500/20201109/index.html
 - 127.0.0.1 - 주소
 - 5500 - 포트
 - /20201109/index.html - 리소스 경로

http포트 - 기본 80
https포트 - 기본 443

# 2. 주소창에 입력했을 떄 찾아가는 과정

1. 주소를 입력
2. 로컬에 등록된 DNS IP 주소로 해당 도메인을 질의     (query)함.
  1. 해당 DNS에 정보가 캐싱된 경우는 바로 응답 받음
  2. 없는 경우 상위 DNS에게 질의
3. 응답 받은 IP 주소로 접속(브라우저가)
4. 해당 서버에게 리소스 요청
5. 해당 서버가 리소스 응답 (html, js, image, audio, video)
6. 브라우저는 html 문서 받아서 렌더링


# 3. HTML

- 태그 - 문서 기본 요소
  - <와 >로 감싸져있음. (<html>)
  - 권장 : 태그는 소문자로
  - 단일 채그 형태: <태그/>
  - 일반 태그
    - <태그>내용</태그>
    - 여는 태그 : <태그>
    - 닫는 태그 : </태그>
  - 계층 구조로 되어 있다(트리)
    - 포함관계 명확하게
  - 태그는 속성을 갖고 있음
    - <태그 속성=값 속성=값></태그> 

# 4. html 태그

lang 속성
- ko : 한국어
- en : 영어
- ja : 일본어
- zh : 중국어

## 4.1. head 태그

SEO : Search Engine Optimizatin(알아두면 좋음)

- title 태그 - 제목 표시
- meta 태그
  - 문자셋
  - 브라우저 호환성 표시
  - 검색 결과 설명 지정
  - 검색 결과 표시 문구 지정
  - 봇 제어

## 4.2. body 태그

실제로 렌더링 되는 정보들

# 1. 텍스트 - 블록

## 1.1. hn(n값 1~6)

(1이 가장 큼, 6이 가장 작음)
heading, 제목 표시

## 1.2. p 태그

paragraph, 문단

- 스페이스 아무리 많이 입력해도 공백은 하나로 표시됨.
- 줄바꿈 없이 텍스트를 쭉 입력할 수 있음  

## 1.3.  br 태그

break, 줄바꿈

- 단일 태그임에 유의 <br/>

## 1.4. hr 태그 - 수평줄

-horizontal rule, 수평 줄(점선 생김)
-단일 태그 임 <hr/>

## 1.5. blockquote - 인용구

-좌우 위아래 여백이 더 들어간 박스 형태 안에 인용구 써짐.

## 1.6. pre 태그

공백을 그대로 출력
 -p태그는 공백 무조건 하나인데 pre태그는 공백을 그대로 출력

# 2. 텍스트 - 인라인 

## 2.1. strong, b - 굵게(bold) 처리

텍스트 굵게 표시

## 2.2. em, i - 이탤릭

글씨 기울어지게

## 2.3. q - 인라인 인용구 (quote)

" " 생긴다.

## 2.4. mark - 형광펜

노란 형광으로 강조

## 2.5. sapn - 아무것도 안함

## 2.6. ruby 태그 - 동아시아 문자

<ruby>123<rt>숫자</rt></ruby>

사이에 있는 글자에 위에 주석처럼 생김(123위에 숫자 표시)

# 3. 목록

- 순서 없는 목록(unordered list)
- 순서 있는 목록(ordered list)
  
## 3.1. 순서 없는 목록

ul, li

'''html
<ul>
    <li>리스트1</li>
    <ul>
      <li>리스트2</li>
    </ul>
</ul>
'''

## 3.2. 순서 있는 목록

ol

## 3.3. 설명 있는 목록

dl (description list)
dt - 제목
dd - 설명

# 4. 표

- table
- tr(table row)
- td(tag define)
- th(tag header)

# 5. 이미지

img 태그

'''html
<img src = "이미지url(또는 파일의 경로)"/>
'''

src - 이미지 url, 파일 경로
alt - 대체 문구(alternative)
width - 너비
height - 높이

# 6. a 태그(하이퍼링크)

<a href = "링크"> 링크이름 </a>

- href : 주소
- targer : 링크가 표시될 방법
- download : 링크의 리소르를 다운로드



# 용어 정리

퀀텀 타임(quantum time) - 시간 조각
시분할(time sharing)
여러 프로그램을 돌아가면서 실행 -> 스케쥴링

물리적으로 동시에 돌아감 -> 병렬성(parallelism)
실제로 동시에 돌아가는것 처럼 보임 -> 동시성(concurrency)

# 스레드 사용의 문제점

- 동기화(synchronization) 문제
- 임계영역(critical section) 문제

# 스레드의 상태

- NEW : 새로 생성된 경우
- RUNNABLE : 실행 대기
- 실행
- 일시정지
- 종료
