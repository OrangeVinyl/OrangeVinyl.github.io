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
      }]
