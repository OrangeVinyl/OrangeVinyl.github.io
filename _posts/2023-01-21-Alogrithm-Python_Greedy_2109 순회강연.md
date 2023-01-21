---
title: "[Python_Greedy] 순회 강연"
excerpt: "백준_Greedy_2109"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_순회 강연/

toc: true
toc_sticky: true

date: 2023-01-21
last_modified_at: 2023-01-21
---
### ✏️ 문제

![2109.png](/assets/images/posts_img/2109.png)

### ✅ 문제 풀이 핵심

- 가장 중요하게 생각해야 하는건 **‘하루에 최대 한 곳’ 이라고 생각된다.** 문제 풀이의 키워드는 여기에 있다.
- 가장 먼저 작업해야 할 것은 d값을 기준으로 `오름차순 정렬`을 해야한다.
- `하루에 최대 한 곳`만 선택할 수 있으므로, p값들을 우선순위 큐에 push한 다음, 큐의 길이와 집어넣은  d값을 비교하여 리스트의 길이가 클 경우, pop하여 작은 값을 빼주면 된다.
- 기본적으로 최대의 선택을 고르는 것이기에 **그리디 알고리즘**을 사용하며 **우선순위 큐**를 사용하면 비교가 되는 값들 중, 작은 값은 제외할 수 있다.

### 💡 문제 풀이 코드

```python
import heapq

N = int(input())
pay_list = [list(map(int,input().split())) for _ in range(N)]
pay_list.sort(key = lambda x:x[1])

q_list = []
for i in pay_list:
    heapq.heappush(q_list, i[0])
    if (len(q_list) > i[1]):
        heapq.heappop(q_list)
print(sum(q_list))
```

---
### 🚀 사용 알고리즘 및 기법
바로가기 : [heapq module](https://orangevinyl.github.io/Python/heapq%20module/)