---
title: "[Python_Greedy] 보석 도둑"
excerpt: "백준_Greedy_1202"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy, PriorityQueue]

permalink: /Algorithm/Python_Greedy_보석도둑/

toc: true
toc_sticky: true

date: 2023-01-19
last_modified_at: 2023-01-19
---
### ✏️ 문제

![1202.png](/assets/images/posts_img/Python_Greedy_1202/1202.png)

### ✅ 문제 풀이 핵심

- 문제의 개념은 그리 어렵지 않으나 확실하게 자료구조를 알고 있어야 한다.
- 각 가방에 담을 수 있는 최대 가치의 보석을 담는데, 용량이 작은 가방부터 담아야 한다. (예외적인 상황이 발생할 가능성이 있다)
- 우선순위 큐 및 `heapq` 모듈을 사용하여 푼다. 최대값을 구하라고 했으니 `최대 힙`을 사용한다.
- **우선순위 큐와 heapq 정렬**에 대해 다시한번 공부하고 복습한다. 이 항목에 대한 기본지식이 없으면 문제 자체를 풀지 못한다.

### 💡 문제 풀이 코드

```python
import heapq

N,K = map(int,input().split())
gem = sorted([list(map(int,input().split())) for _ in range(N)])
bags_weight = sorted([int(input()) for _ in range(K)])
tmp = []
result = 0

for bag in bags_weight:
    while gem and bag >= gem[0][0]:
        heapq.heappush(tmp, -gem[0][1]) # tmp에 보석 가격 입력
        heapq.heappop(gem) #입력값 제거
    
    #tmp에 요소가 있으면
    if tmp:
        result -= heapq.heappop(tmp)

print(result)
```

---

### 🚀 사용 알고리즘 및 기법

바로가기 : [자료구조_우선순위 큐, 힙 정렬](https://orangevinyl.github.io/CS/Data_Structure_PriorityQueue/)

바로가기 : [Python_heapq 모듈](https://orangevinyl.github.io/Python/heapq%20module/)