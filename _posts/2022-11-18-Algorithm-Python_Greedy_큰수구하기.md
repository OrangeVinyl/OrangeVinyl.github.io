---
title: "[Python_Greedy] 큰 수 구하기"
excerpt: "이것이 코딩테스트다 with 파이썬 Greedy"

categories:
  - Algorithm
tags:
  - [Python, Greedy, Algorithm]

permalink: /Algorithm/Python_Greedy_큰수구하기/

toc: true
toc_sticky: true

date: 2022-11-18
last_modified_at: 2022-11-18
---

# 📝 큰 수의 법칙
### 내가 쓴 풀이

```python
n,m,k = map(int,input().split())

datas = list(map(int,input().split()))

datas.sort()

first = datas[-1]
second = datas[-2]
result = 0

while True:
    for i in range(k):
        if m == 0:
            break
        result += first
        m -= 1
    if m == 0:
        break
    result += second
    m -= 1

print(result)
```

### 다른 풀이

<aside>
💡 반복되는 수열에 대해서 파악 → 가장 큰 키포인트!

</aside>

반복되는 수열의 길이 = (K+1)

수열이 반복되는 횟수 = M // (K+1)

가장 큰 수가 등장하는 횟수 = **`{M // (K+1)} * K`** , 하지만 M이 (K+1)으로 나눠 떨어지지 않는 경우도 고려해야 함

`‘가장 큰 수가 더해지는 횟수’ = int(M / (K+1)) * K + M % (K+1)`

```python
n, m, k = map(int, input().split())
data = list(map(int, intput().split()))

data.sort()
first = data[n-1]
second = data[n-2] 

count = int(m / (k+1)) * k
count += m % (k + 1)

result = 0
result += (count) * first 
result += (m - count) * second

print(result)

```
