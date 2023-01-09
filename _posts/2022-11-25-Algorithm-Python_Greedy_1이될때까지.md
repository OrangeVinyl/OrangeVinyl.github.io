---
title: "[Python_Greedy] 1이 될 때까지"
excerpt: "백준"

categories:
  - Algorithm
tags:
  - [Python, Greedy, Algorithm]

permalink: /Algorithm/Python_Greedy_1이될때까지/

toc: true
toc_sticky: true

date: 2022-11-25
last_modified_at: 2022-11-25
---

### 내가 쓴 풀이

```python
n,k = map(int,input().split())
result = 0

while n >= k:
    while n % k != 0:
        n -= 1
        result += 1
    n //= k
    result += 1

while n>1:
    n -= 1
    result += 1

print(result)
```

<aside>
💡 ‘최대한 많이 나누기’가 KEY POINT

</aside>

**N이 100억 이상의 큰 수**가 되는 경우를 가정했을 때에도 빠르게 동작하려면, N이 K의 배수가 되도록 효율적으로 한 번에 빼는 방식으로 소스코드를 작성하는 것이 유리하다.

### 다른 풀이(N을 K가 한번에 나누는 경우)

```python
while True:
    # (N == K로 나누어 떨어지는 수)가 될 때까지 1씩 빼기
    target = (n // k) * k
    result += ( n - target)
    n = target
    # N이 K보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
        break
    result += 1
    n //= k

result += (n-1)

print(result)
```
