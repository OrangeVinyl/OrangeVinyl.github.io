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
        "title": "[Data Structure] 우선순위 큐",
        "excerpt":"우선순위 큐 우선순위를 가진 항목들을 저장하는 큐 FIFO 순서가 아니라 우선순위가 높은 데이터가 먼저 나가게 된다. 가장 중요한 연산은 insert 연산(요소 삽입), delete 연산(요소 삭제)이다. 우선순위 큐는 2가지로 구분 최소 우선순위 큐 최대 우선순위 큐 우선순위 큐 구현하는 방법 배열을 이용한 우선순위 큐 연결리스트를 이용한 우선순위 큐 히프(heap)를 이용한 우선순위...","categories": ["Data Structure"],
        "tags": ["Data Structure","Priority Queue","Queue","C"],
        "url": "/CS/Data_Structure_PriorityQueue/",
        "teaser": null
      },{
        "title": "[Scope] 스코프",
        "excerpt":"스코프는 자바스크립트를 이용하는 데에 있어 필수적인 개념입니다. 이 포스팅 뒤로 클로저에 대해 알아볼 건데, 그전에 앞서 스코프의 정의가 먼저 필요하기 때문에 스코프 정의를 먼저 정리해보겠습니다. 스코프(Scope)의 정의 함수를 작성할 때 아래와 같이 중괄호 ‘{ }’를 이용하여 함수의 범위를 작성합니다. function hello(){ alert('함수 작성'); } 즉, [변수가 영향을 미치는 범위], [변수의 유효 범위],  [코드가...","categories": ["CS"],
        "tags": ["CS","Knowledge","Scope","JS"],
        "url": "/CS/Scope/",
        "teaser": null
      },{
        "title": "[Data Structure] Graph",
        "excerpt":"그래프의 정의 그래프 G 는 (V,E)로 표시 정점(vertices) 여러가지 특성을 가질 수 있는 객체 의미 V(G): 그래프 G의 정점들의 집합 노드라고도 불린다 간선(edge) 정점들 간의 관계 의미 E(G): 그래프 G의 간선들의 집합 링크라고도 불림 네트워크 가중치 그래프는 네트워크라고도 함 간선에 비용이나 가중치가 할당된 그래프 부분 그래프(Subgraph) 정점 집합 V(G)와 간선...","categories": ["Data Structure"],
        "tags": ["Data Structure","Graph","C"],
        "url": "/CS/Data_Structure_Graph/",
        "teaser": null
      },{
        "title": "[Data Structure] 리스트",
        "excerpt":"✅ 원형 연결 리스트 하나의 노드에서 다른 모든 노드로의 접근이 가능하다는 장점이 존재한다. 삭제나 삽입 시에는 항상 선행 노드를 가리키는 **포인터**가 필요하다 원형 리스트의 헤드 포인터인 head가 마지막 노드를 가리키는 것을 명심 원형리스트의 처음에 삽입 ListNode* insert_first(ListNode* head, element data) { ListNode* node = (ListNode *)malloc(sizeof(ListNode)); node -&gt; data = data;...","categories": ["Data Structure"],
        "tags": ["Data Structure","List","C"],
        "url": "/CS/Data_Structure_List/",
        "teaser": null
      },{
        "title": "[Data Structure] 트리",
        "excerpt":"✅ 트리에 대한 기본 성질 루트 : 부모가 없는 노드 단말노드 → 자식이 없는 노드, 같은 말로 차수 = 0 비단말 노드 → 적어도 하나의 자식을 가진 노드 이진트리 모든 노드가 2개의 서브 트리를 가지고 있는 트리 이진트리의 노드에는 최대 2개까지의 자식 노드가 존재 모든 노드의 차수가 2 이하 → 구현하기가...","categories": ["Data Structure"],
        "tags": ["Data Structure","Tree","C"],
        "url": "/CS/Data_Structure_Tree/",
        "teaser": null
      },{
        "title": "[Data Structure] 정렬",
        "excerpt":"정렬 물건을 크기 순으로 오름차순이나 내림차순으로 나열하는 것 단순하지만 비효율적인 방법 삽입정렬, 선택정렬, 버블정렬 복잡하지만 효율적인 방법 퀵정렬, 히프정렬, 합병정렬, 기수정렬 내부 정렬(internal sorting) 모든 데이터가 주기억장치에 저장되어진 상태에서 정렬 외부 정렬(external sorting) 외부기억장치에 대부분의 데이터가 있고 일부만 주기억장치에 저장된 상태에서 정렬 정렬 알고리즘의 안정성(stability) 동일한 키 값을 갖는 레코드들의...","categories": ["Data Structure"],
        "tags": ["Data Structure","Sort","C"],
        "url": "/CS/Data_Structure_Sort/",
        "teaser": null
      },{
        "title": "[Data Structure] 탐색",
        "excerpt":"탐색 탐색키(search key) 항목과 항목을 구별해주는 키 탐색을 위하여 사용되는 자료구조 배열, 연결리스트, 트리, 그래프 등 순차 탐색(sequential search) 탐색 방법 중에서 가장 간단하고 직접적인 탐색 방법 정렬되지 않은 배열을 처음부터 마지막까지 하나씩 검사하는 방법 평균 비교 횟수 탐색 성공 : (n+1)/2 번 비교 탐색 실패 : n 번 비교...","categories": ["Data Structure"],
        "tags": ["Data Structure","Search","C"],
        "url": "/CS/Data_Structure_Search/",
        "teaser": null
      },{
        "title": "[Software Engineering] 설계",
        "excerpt":"설계 좋은 설계가 되기 위한 조건 설계서는 요구분석명세서의 내용을 모두 포함해야 한다 유지보수가 용이하도록 추적이 가능해야 한다 변화에 쉽게 적응할 수 있어야 한다 시스템 변경으로 인한 영향이 최소화되도록 국지적이어야 한다 설계서는 읽기 쉽고 이해하기 쉽게 작성해야 한다 설계의 원리 분할과 정복 분할 : 큰 소프트웨어 하나를 개발할 때 여러개의 서브시스템으로...","categories": ["Software Engineering"],
        "tags": ["Software Engineering","Design"],
        "url": "/Software_Enginnering/Design/",
        "teaser": null
      },{
        "title": "[Software Engineering] 요구분석",
        "excerpt":"01) 요구사항 요구사항의 정의 이용자가 어떤 문제를 풀거나 목표를 달성하는 데 필요한 조건이나 능력 시스템이 제공하는 기능요구와 품질과 같은 비기능 요구로 나뉨 02) 요구분석의 이해 요구분석의 정의 시스템이나 소프트웨어의 요구사항을 정의하기 위해 사용자 요구사항을 조사하고 확인하는 과정 요구분석은 소프트웨어 개발 성패의 열쇠 요구분석의 목적 사용자에게서 필요한 요구사항을 추출해 목표하는 시스템의...","categories": ["Software Engineering"],
        "tags": ["Software Engineering","Requirement Analysis"],
        "url": "/Software_Enginnering/RequirementAnalysis/",
        "teaser": null
      },{
        "title": "[Software Engineering] 구현",
        "excerpt":"프로그래밍 언어의 역사 포트란(FORTRAN , FORmula TRANslation) 사람이 이해하기 쉬운 형태로 만들어진 초창기 고급언어 IBM이 우주항공 분야 베이직(BASIC, Beginner’s All-purpose Symbolic Instruction Code) 쉬운 문법을 사용하여 교육용으로 만든 언어 개발 환경이 시각적이고 베이직 언어 계열이라 초보자가 익히기 쉬움 코볼(COBOL, COmmon Business Oriented Language) 사무처리용 프로그램 언어 자바 - 선 마이크로시스템즈...","categories": ["Software Engineering"],
        "tags": ["Software Engineering","Implementation"],
        "url": "/Software_Enginnering/Implementation/",
        "teaser": null
      },{
        "title": "[Software Engineering] 테스트",
        "excerpt":"테스트의 이해 소프트웨어 테스트의 정의 소프트웨어 내에 존재하지만 드러나지 않고 숨어 있는 오류를 발견할 목적 작은 의미 원시 코드 속에 남아 있는 오류를 발견하는 것 결함이 생기지 않도록 예방하는 것 큰 의미 개발된 소프트웨어가 고객의 요구를 만족시키는지 확인시켜주는 것 개발자와 고객에게 사용하기에 충분한 소프트웨어임을 보여주는 것 결과적으로 테스트의 목표는 ‘개발된...","categories": ["Software Engineering"],
        "tags": ["Software Engineering","TEST"],
        "url": "/Software_Enginnering/Test/",
        "teaser": null
      },{
        "title": "[Python] 비트 마스킹",
        "excerpt":"비트 마스크란? 컴퓨터는 내부적으로 모든 자료를 이진수로 표현한다. 이와 같은 특성을 이용해 정수의 이진수 표현을 자료구조로 쓰는 기법을 비트 마스크라고 한다. 비트 마스크의 개념 컴퓨터의 최소 연산 단위는 bit다. bit는 이진수를 나타내기 위해 0과 1로만 이루어져있는데, 우리는 비트 연산을 통해 약간 ‘꼼수(?)’를 써서 문제를 해결할 수 있다.. 예를 들어, 많은...","categories": ["Python"],
        "tags": ["Python","BitMasking","Bit"],
        "url": "/Python/Bit%20Masking/",
        "teaser": null
      },{
        "title": "[Python] heapq module",
        "excerpt":"힙 자료구조 heapq 모듈은 이진 트리 기반의 최소 힙 자료구조를 제공한다. 최소 힙을 사용 시, 원소들은 항상 정렬된 상태에서 이용되며 최솟값은 언제나 인덱스가 0, 즉 이진트리의 루트에 위치한다. (위 개념은 DataStructure_PriorityQueue 에서 확인 가능하다.) 내부적으로는 index[0]에서 시작해 index[k]번째 원소가 항상 자식 원소들(index[2k+1], index[2k+2])보다 작거나 같은 형태이다. 모듈 import heapq 모듈은...","categories": ["Python"],
        "tags": ["Python","heapq","module","PriorityQueue"],
        "url": "/Python/heapq%20module/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 30",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 문제를 바라볼때 키워드는 결국 ‘30’이다. 30의 배수 판정법을 알고 있으면 수월하게 해결 가능하다. 10의 배수의 경우는 마지막 자리가 필수적으로 ‘0’이된다. 3의 배수는 각 자리의 합이 3의 배수이다. 결국, 해당 하는 숫자들 중 가장 높은 숫자를 출력하기 위해서는 입력값을 리스트에 삽입 후, 내림차순으로 반환하면 된다. 💡 문제 풀이...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_30/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 병든 나이트",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 문제 풀이의 핵심은 경우의 수를 나눠서 생각해야 한다는 거다 N=1일 경우, N=2일 경우, 그리고 M의 길이에 따라 자세히 나눠야 한다. 코드의 구현은 어렵지 않으나, 문제해석의 어려움이 있을 수 있다. 참고 : https://afterdawncoding.tistory.com/202 💡 문제 풀이 코드 n,m = map(int,input().split()) if n == 1: print(1) elif n ==...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_%EB%B3%91%EB%93%A0%20%EB%82%98%EC%9D%B4%ED%8A%B8/",
        "teaser": null
      },{
        "title": "[Python_Implementation] 상하좌우",
        "excerpt":"✅ 문제 여행가 A는 N × N 크기의 정사각형 공간 위에 서 있다. 이 공간은 1 × 1 크기의 정사각형으로 나누어져 있다. 가장 왼쪽 위 좌표는 (1, 1)이며, 가장 오른쪽 아래 좌표는 (N, N)에 해당한다. 여행가 A는 상, 하, 좌, 우 방향으로 이동할 수 있으며, 시작 좌표는 항상 (1, 1)이다. 우리...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Implementation"],
        "url": "/Algorithm/Python_Implementation/",
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
      },{
        "title": "[Python_Greedy] 전구와 스위치",
        "excerpt":"💡 문제 풀이 키워드 1번 스위치를 눌렀을 경우, 1,2번의 전구의 상태가 바뀌고, N번 스위치를 눌렀을 경우, N-1, N번의 전구의 상태가 바뀐다 → 결국, 첫 번째 스위치는 기존의 법칙과 다르게 [i(1 &lt; i &lt; N)의 범위를 보면 1이 될 수가 없다] 예외적인 상황으로 봐야한다. 그러므로 첫 번째 스위치의 누름 유무에 따라 구분해야...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_%EC%A0%84%EA%B5%AC%EC%99%80%EC%8A%A4%EC%9C%84%EC%B9%98/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 잃어버린 괄호",
        "excerpt":"✅ 문제풀이 핵심 식의 값을 ‘최소’로 만들려고 한다에 집중해야한다. 식을 최소로 만들기 위해서는 최대한 큰 값을 빼야 하므로 중요하게 볼 것은 ‘-’ 연산자이다. 1) ‘-’ 연산자로 식을 구분하면 더해야 할 부분들이 나온다. 2) 이후, 나눠진 부분들 중 ‘+’ 연산자가 포함되어 있는 경우 해당하는 문자열을 정수화 시켜 값들을 더한다. 3) 최종적으로 얻은...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_%EC%9E%83%EC%96%B4%EB%B2%84%EB%A6%B0%EA%B4%84%ED%98%B8/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 동전 뒤집기",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 행 또는 열을 기준으로 선택하여 뒤집는 모든 경우의 수를 구해 최솟값을 출력한다. 행 또는 열을 뒤집는 연산을 실행할 시, 비트마스킹을 적용하여 구한다. 행 또는 열을 뒤집은 후, 나머지 기준점으로 뒤집기 실행 (행을 기준으로 뒤집는 연산을 실행했으면, 열을 기준으로 뒤집을지 그대로 둘 지 결정한다.) 세번째의 경우, 뒤집을지...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_%EB%8F%99%EC%A0%84%20%EB%92%A4%EC%A7%91%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 보석 도둑",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 문제의 개념은 그리 어렵지 않으나 확실하게 자료구조를 알고 있어야 한다. 각 가방에 담을 수 있는 최대 가치의 보석을 담는데, 용량이 작은 가방부터 담아야 한다. (예외적인 상황이 발생할 가능성이 있다) 우선순위 큐 및 heapq 모듈을 사용하여 푼다. 최대값을 구하라고 했으니 최대 힙을 사용한다. 우선순위 큐와 heapq 정렬에...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy","PriorityQueue"],
        "url": "/Algorithm/Python_Greedy_%EB%B3%B4%EC%84%9D%EB%8F%84%EB%91%91/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 순회 강연",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 가장 중요하게 생각해야 하는건 ‘하루에 최대 한 곳’ 이라고 생각된다. 문제 풀이의 키워드는 여기에 있다. 가장 먼저 작업해야 할 것은 d값을 기준으로 오름차순 정렬을 해야한다. 하루에 최대 한 곳만 선택할 수 있으므로, p값들을 우선순위 큐에 push한 다음, 큐의 길이와 집어넣은 d값을 비교하여 리스트의 길이가 클 경우,...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","Greedy"],
        "url": "/Algorithm/Python_Greedy_%EC%88%9C%ED%9A%8C%20%EA%B0%95%EC%97%B0/",
        "teaser": null
      },{
        "title": "[Python] Sort",
        "excerpt":"선택 정렬 데이터가 무작위로 있을 경우, 이중에서 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸고, 그다음 작은 데이터를 선택해 앞에서 두 번째 데이터와 바꾸는 과정을 반복하는 정렬 array = [7,5,9,0,3,1,6,2,4,8] for i in range(len(array)): min_index = i # 가장 작은 원소의 인덱스 for j in range(i+1 , len(array)): if...","categories": ["Python"],
        "tags": ["Python","Sort","Algorithm"],
        "url": "/Python/Sort/",
        "teaser": null
      },{
        "title": "[Python] 이분탐색",
        "excerpt":"순차 탐색 데이터의 개수가 N개일때 최대 N번의 비교 연산이 필요하므로 순차 탐색의 최악의 경우 시간 복잡도는 O(N)이다. 이진 탐색 배열 내부의 데이터가 정렬되어 있어야만 사용이 가능하다. 한 번 확인시, 확인하는 원소의 개수가 절반씩 줄어든다는 점에서 시간복잡도는 O(logN)이다. 재귀함수로 구현한 이진 탐색 소스코드(외우는게 좋다) def binary_search(array, target, start, end): if start...","categories": ["Python"],
        "tags": ["Python","Binary Search","Algorithm"],
        "url": "/Python/Binary_Search/",
        "teaser": null
      },{
        "title": "[Python] DFS/BFS",
        "excerpt":"✅ DFS(Depth-First Search) 깊이 우선 탐색. 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘 대체로 스택 이 동작원리인 경우가 많다 파이썬의 경우 재귀함수를 사용하여 동작 구현 ✅ 동작과정 탐색 시작 노드를 스택에 삽입 후 방문처리 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문처리 방문하지 않은 인접 노드가 없으면...","categories": ["Python"],
        "tags": ["Python","DFS","BFS","Algorithm"],
        "url": "/Python/DFS_BFS/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 2n타일링",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 이번 문제 풀이의 핵심은 ‘점화식’을 구해야한다. 문제의 규칙을 찾아보면 피보나치 수열이랑 동일한 것을 알 수 있다. F(n) = F(n-1) + F(n-2) 💡 문제 풀이 코드 n = int(input()) dp = [0] * (1001) dp[1] = 1 dp[2] = 2 for i in range(3,n+1): dp[i] = dp[i-1] +...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","DP"],
        "url": "/Algorithm/Python_DP_2n%ED%83%80%EC%9D%BC%EB%A7%81/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 계단 오르기",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 마지막 계단은 무조건 도착해야 하므로 2가지의 경우로 나눌 수 있다. 바로 직전의 계단을 밟는 경우 이전의 계단은 누적값과 마지막 계단의 합을 더하면 된다. 끝에서 2번째 계단을 밝는 경우 그 앞의 계단은 밟지 못하고 마지막 계단만 밟을 수 있다. 그러므로, 끝에서 2번째 계단의 값 + 마지막 계단...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","DP"],
        "url": "/Algorithm/Python_DP_%EA%B3%84%EB%8B%A8%EC%98%A4%EB%A5%B4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Python_Greedy] 가장 긴 감소하는 부분수열",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 한 번에 문제풀이가 떠오르기 힘든 까다로운 문제이다. 제일 중요한 점은 DP배열에 어떤 값을 저장하냐에 따라 달라진다. DP배열에는 인덱스의 값까지 ‘가장 긴 감소하는 부분 수열의 **크기’를 집어넣는다.** 감소하는 부분 수열이므로 주어진 수열을 하나씩 돌면서 앞의 값들을 비교하여 앞의 값이 큰 경우 각 값의 인덱스와 일치하는 DP배열의 값...","categories": ["Algorithm"],
        "tags": ["Python","Algorithm","DP"],
        "url": "/Algorithm/Python_DP_%EA%B0%80%EC%9E%A5%EA%B8%B4%EA%B0%90%EC%86%8C%ED%95%98%EB%8A%94%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B4/",
        "teaser": null
      },{
        "title": "[Algorithm] 체스판 다시 칠하기",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 8X8 로 잘라야 한다면 NXM크기의 보드는 N-8+1, M-8+1 개의 비교를 할 수 있다. 가장 상단의 좌측 타일이 B 혹은 W로 시작하는 2가지의 경우가 있다. → Case를 2개로 나눠 생각한다. 판의 좌표 합이 짝수인 경우와 홀수인 경우로 나눈다. N-7 , M-7 내의 8X8에서 하나씩 돌면서 비교하는 총...","categories": ["Algorithm"],
        "tags": ["Python","BF","Algorithm"],
        "url": "/Python/BF_%EC%B2%B4%EC%8A%A4%ED%8C%90%EB%8B%A4%EC%8B%9C%EC%B9%A0%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Algorithm] 영화감독 슘",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 완전 탐색 중 순차 탐색을 사용하여 문제를 풀어야 한다. 너무 꼬아서 생각 할 필요 없이 666부터 +1 씩 증가하면서 증가하는 숫자에 ‘666’이 들어간다면 카운팅을 진행하고 카운팅 하는 변수가 입력값과 같을 때 증가하는 수를 출력하면 된다. 💡 문제 풀이 코드 n = int(input()) cnt = 0 target =...","categories": ["Algorithm"],
        "tags": ["Python","BF","Algorithm"],
        "url": "/Python/BF_%EC%98%81%ED%99%94%EA%B0%90%EB%8F%85%EC%8A%98/",
        "teaser": null
      },{
        "title": "[Algorithm] 분해 합",
        "excerpt":"✏️ 문제 ✅ 문제 풀이 핵심 N과 M을 헷갈리지 않는 것이 문제의 핵심이다. 결국 구하는 것은 문제 예시의 생성자 M 이므로, 예시의 과정을 반대로 생각해야 한다. 자연수 1 부터 입력값 N까지 다 돌면서 경우의 수를 구해 N과 동일한 결과가 나오면 정답이다. → 가장 작은 생성자를 구하는 문제이므로 1부터 돌기 때문에 굳이 신경...","categories": ["Algorithm"],
        "tags": ["Python","BF","Algorithm"],
        "url": "/Python/BF_%EB%B6%84%ED%95%B4%ED%95%A9/",
        "teaser": null
      },{
        "title": "[Python] DP",
        "excerpt":"DP 하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용하는 것 특정한 알고리즘 보다는 하나의 문제해결 패러다임으로 볼 수 있다. DP의 사용 조건 1) Overlapping Subproblems, 겹치는 부분 문제 / 큰 문제를 작은 문제로 나눌 수 있다. 2) Optimal Substructure, 최적 부분...","categories": ["Python"],
        "tags": ["Python","DP","Algorithm"],
        "url": "/Python/DP/",
        "teaser": null
      }]
