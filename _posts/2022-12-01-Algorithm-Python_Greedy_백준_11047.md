---
title: "[Python_Greedy] 백준 - 11047(동전 0)"
excerpt: "백준_Greedy_11047"

categories:
  - Algorithm
tags:
  - [Python, Greedy, Algorithm, Baekjoon]

permalink: /Algorithm/Python_Greedy_백준_11047/

toc: true
toc_sticky: true

date: 2022-12-01
last_modified_at: 2022-12-01
---

동전 계산 시 그리디 알고리즘을 사용하는 큰 전제 조건 중 하나

### “큰 동전이, 작은 동전의 배수가 된다!”

ex) 800원을 500원,400원,100원 으로는 최솟값이 겹친다

 

```python
n,k = map(int, input().split())
coin_list = list()

for i in range(n):
    coin_list.append(int(input()))

count = 0 

for i in reversed(range(n)):
    count += k // coin_list[i]
    k = k % coin_list[i]

print(count)
```

역방향으로 루프를 돌릴 때 `reversed()` 내장함수 사용 

파이썬의 기본 내장함수로 **순서가 있는 자료구조**(list, tuple 등)를 받을 수 있다. 

주어진 자료구조에 담긴 원소들을 역순으로 순회할 수 있도록 **iterator**를 리턴한다.
