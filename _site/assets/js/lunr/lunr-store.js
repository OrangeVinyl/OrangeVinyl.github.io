var store = [{
        "title": "[Python_Greedy] 큰 수 구하기",
        "excerpt":"📝 큰 수의 법칙 내가 쓴 풀이 n,m,k = map(int,input().split()) datas = list(map(int,input().split())) datas.sort() first = datas[-1] second = datas[-2] result = 0 while True: for i in range(k): if m == 0: break result += first m -= 1 if m == 0: break result += second m -=...","categories": ["Algorithm"],
        "tags": ["Python","Greedy","Algorithm"],
        "url": "/Algorithm/Python_Greedy_%ED%81%B0%EC%88%98%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 숫자 카드 게임",
        "excerpt":"내가 쓴 풀이 n,m = map(int,input().split()) result = 0 for i in range(n): data = list(map(int,input().split())) min_value = min(data) result = max(result, min_value) print(result) KeyPoint - ‘각 행마다 가장 작은 수를 찾은 뒤에 그 수 중에서 가장 큰 수’ 2중 반복문 구조를 이용하는 답안 예시 n,m = map(int,input.split()) result =...","categories": ["Algorithm"],
        "tags": ["Python","Greedy","Algorithm"],
        "url": "/Algorithm/Python_Greedy_%EC%88%AB%EC%9E%90%EC%B9%B4%EB%93%9C%EA%B2%8C%EC%9E%84/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 1이 될 때까지",
        "excerpt":"내가 쓴 풀이 n,k = map(int,input().split()) result = 0 while n &gt;= k: while n % k != 0: n -= 1 result += 1 n //= k result += 1 while n&gt;1: n -= 1 result += 1 print(result) 💡 ‘최대한 많이 나누기’가 KEY POINT N이 100억 이상의 큰...","categories": ["Algorithm"],
        "tags": ["Python","Greedy","Algorithm"],
        "url": "/Algorithm/Python_Greedy_1%EC%9D%B4%EB%90%A0%EB%95%8C%EA%B9%8C%EC%A7%80/",
        "teaser": null
      },{
        "title": "[Synchronous, Asynchronous] 동기와 비동기",
        "excerpt":"데이터 처리 모델 💡 동기 (synchronous) 데이터의 요청과 결과가 한 자리에서 동시에 일어나는 것. 요청 시, 시간이 얼마나 걸리던 요청한 자리에서 결과가 주어져야 한다. 사용자가 데이터를 서버에게 요청한다면 그 서버가 데이터 요청에 따른 응답을 사용자에게 다시 리턴해주기 전까지 사용자는 다른 활동을 할 수 없으며 기다려야만 한다. 설계가 매우 간단하고 직관적이다....","categories": ["CS"],
        "tags": ["CS","Knowledge","Data Model"],
        "url": "/CS/Synchronous_Asynchronous/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 백준 - 11047(동전 0)",
        "excerpt":"동전 계산 시 그리디 알고리즘을 사용하는 큰 전제 조건 중 하나 “큰 동전이, 작은 동전의 배수가 된다!” ex) 800원을 500원,400원,100원 으로는 최솟값이 겹친다 n,k = map(int, input().split()) coin_list = list() for i in range(n): coin_list.append(int(input())) count = 0 for i in reversed(range(n)): count += k // coin_list[i] k = k...","categories": ["Algorithm"],
        "tags": ["Python","Greedy","Algorithm","Baekjoon"],
        "url": "/Algorithm/Python_Greedy_%EB%B0%B1%EC%A4%80_11047/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 백준 - 1931(회의실 배정)",
        "excerpt":"가장 중요한 포인트는 어떻게 정렬할지 결정하는 것. 회의의 종료시간과 시작시간이 겹쳐도 된다는 부분은 결국 ‘종료시간과 시작시간의 대조’가 포인트다 또한, 시작시간과 종료시간 중 중요한 것은 종료시간이므로 종료시간으로 나열하는 것이 중요. 단, 종료시간이 동일할 경우, 시작시간이 빠른 것이 좋기에 시작시간으로 나열을 한 번 하는 것이 중요하다. ex) (9,10) 과 (10,10)의 대조 시,...","categories": ["Algorithm"],
        "tags": ["Python","Greedy","Algorithm","Baekjoon"],
        "url": "/Algorithm/Python_Greedy_%EB%B0%B1%EC%A4%80_1931/",
        "teaser": null
      },{
        "title": "[Module] 모듈",
        "excerpt":"Module 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.이렇게 분리한 코드조각을 각각의 모듈(module)이라고 부른다. 라이브러리도 모듈의 일부이며 내가 작성한 함수도 하나의 모듈이 될 수 있다. 자바스크립트는 파일마다 독립적인 파일 스코프를 가지고 있지 않고 하나의 전역객체를 공유하여 사용한다. 이렇게 되면 전역변수가 중복되는 등의 문제가 발생할 수 있다. 즉 여러개의 파일로 분리하여 여러개의 script 태그를...","categories": ["CS"],
        "tags": ["CS","Knowledge","Module"],
        "url": "/CS/Module/",
        "teaser": null
      },{
        "title": "[Scope] 스코프",
        "excerpt":"스코프는 자바스크립트를 이용하는 데에 있어 필수적인 개념입니다. 이 포스팅 뒤로 클로저에 대해 알아볼 건데, 그전에 앞서 스코프의 정의가 먼저 필요하기 때문에 스코프 정의를 먼저 정리해보겠습니다. 스코프(Scope)의 정의 함수를 작성할 때 아래와 같이 중괄호 ‘{ }’를 이용하여 함수의 범위를 작성합니다. function hello(){ alert('함수 작성'); } 즉, [변수가 영향을 미치는 범위], [변수의 유효 범위],  [코드가...","categories": ["CS"],
        "tags": ["CS","Knowledge","Scope","JS"],
        "url": "/CS/Scope/",
        "teaser": null
      },{
        "title": "[DataBase] 데이터베이스 프로그래밍",
        "excerpt":"데이터베이스 구축 과정 DB 설계 DBMS 결정 사용자 계정 설정과 권한 부여 테이블 생성 레코드 추가 질의어로 업무에 필요한 정보 활용 conn 관리자/관리자 create user 관리자이름 idetified by 비밀번호; grant create session to 관리자이름; grant resource, create view, create to table to 관리자이름; SQL(Structed Query Language) : 구조화된 질의 언어...","categories": ["CS"],
        "tags": ["CS","Knowledge","Database","C#"],
        "url": "/CS/Database/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 행렬",
        "excerpt":"문제의 핵심을 기억해야 한다. ‘행렬을 변환하는 연산은 어떤 3X3 크기의 부분 행렬에 있는 모든 원소를 뒤집는 것이다.(0 → 1, 1→0)’ 쉽게 말해 N,M이 둘 다 4로 지정 되어 있는경우 3X3의 박스가 움직일 수 있는 경우는 총 4가지의 방법 밖에 없다. 풀이에서 기억해야 하는 부분은 3X3 중 1열,1행에 해당하는 A,B의 값이...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_%ED%96%89%EB%A0%AC/",
        "teaser": null
      }]
