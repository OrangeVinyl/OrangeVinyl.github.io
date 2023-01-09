---
title: "[Python_Greedy] 숫자 카드 게임"
excerpt: "이것이 코딩테스트다 with 파이썬 Greedy"

categories:
  - Algorithm
tags:
  - [Python, Greedy, Algorithm]

permalink: /Algorithm/Python_Greedy_숫자카드게임/

toc: true
toc_sticky: true

date: 2022-11-24
last_modified_at: 2022-11-24
---

### 내가 쓴 풀이

```python
n,m = map(int,input().split())

result = 0

for i in range(n):
    data = list(map(int,input().split()))
    min_value = min(data)
    result = max(result, min_value)

print(result)
```

**KeyPoint** - ‘각 행마다 가장 작은 수를 찾은 뒤에 그 수 중에서 가장 큰 수’

### 2중 반복문 구조를 이용하는 답안 예시

```python
n,m = map(int,input.split())

result = 0

for i in range(n):
    data = list(map(int,input.split()))
    #각 숫자는 1~10000 이하의 수만 입력 가능
    min_value = 10001 
    for a in data:
        min_value = min(min_value,a)
    result = max(result,min_value)

print(result)
```
