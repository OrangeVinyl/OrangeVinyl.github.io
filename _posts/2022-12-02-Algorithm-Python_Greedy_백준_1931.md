---
title: "[Python_Greedy] 백준 - 1931(회의실 배정)"
excerpt: "백준_Greedy_1931"

categories:
  - Algorithm
tags:
  - [Python, Greedy, Algorithm, Baekjoon]

permalink: /Algorithm/Python_Greedy_백준_1931/

toc: true
toc_sticky: true

date: 2022-12-02
last_modified_at: 2022-12-02
---
가장 중요한 포인트는 어떻게 정렬할지 결정하는 것.

회의의 종료시간과 시작시간이 겹쳐도 된다는 부분은 결국 **‘종료시간과 시작시간의 대조’**가 포인트다

또한, 시작시간과 종료시간 중 중요한 것은 **종료시간**이므로 종료시간으로 나열하는 것이 중요.

단, 종료시간이 동일할 경우, 시작시간이 빠른 것이 좋기에 시작시간으로 나열을 한 번 하는 것이 중요하다.

ex) (9,10) 과 (10,10)의 대조 시, (9,10)(10,10)으로 두 번 선택이 가능

```python
n = int(input())
room = []

for i in range(n):
    start, end = map(int,input().split())
    room.append([start,end])

room.sort(key = lambda x : x[0])
room.sort(key = lambda x : x[1])

last = room[0][1] #마지막 회의시간 
cnt = 1 #결과값

for x in range(1,n):
    if room[x][0] >= last:
        cnt += 1
        last = room[x][1]

print(cnt)
```

처음에 cnt = 0 으로 초기화했지만, 그럼 첫 번째 회의가 카운팅이 안되므로, cnt = 1로 초기화.

```python
key = lambda x : x[n]
```