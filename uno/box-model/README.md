# 박스모델

브라우저가 요소를 렌더링할 때, 각각의 요소는 기본적으로 사각형 형태로 영역을 차지하게 된다. 이 영역을 '박스'라 표현하며,
css는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정할 수 있다.

### 하나의 박스에는 다음 네 개의 영역으로 구성된다.

- 콘텐츠영역(width, height)
- 안쪽여백(padding)
- 경계선(테두리)(margin)
- 바깥쪽여백(border-width)

### margin && padding

속성 1개 - 모든 방향
속성 2개 - 1.상하 2.좌우
속성 3개 - 1.위 2.좌우 3.하
속성 4개 - 1.상 2.우 3.하 4.좌

### box-sizing

box-sizing 속성은 요소의 너비(width)와 높이(height)를 계산하는 방법을 지정한다.

<div>content-box : 기본값. 너비와 높이가 콘텐츠 영역만을 포함한다.</div>
<div>border-box : 너비와 높이가 안쪽 여백과 테두리까지 포함한다.</div>
-> 너비와 높이가 같더라도, box-sizing 속성값에 따라 크기가 달라질 수 있다!

### background

background-color : 배경색
background-image : 배경 이미지
background-position : 배경이미지 초기위치
background-size : 배경이미지 크기
background-repeat : 베경이미지 반복방법