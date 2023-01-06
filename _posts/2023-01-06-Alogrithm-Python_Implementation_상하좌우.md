---
title: "[Python_Implementation] 상하좌우"
excerpt: "이것이 코딩테스트다 with Python Implementation"


categories:
  - Algorithm
tags:
  - [Python, Algorithm, Implementation]

permalink: /Algorithm/Python_Implementation/

toc: true
toc_sticky: true

date: 2023-01-06
last_modified_at: 2023-01-06
---
### ✅ 문제

```
여행가 A는 N × N 크기의 정사각형 공간 위에 서 있다. 이 공간은 1 × 1 크기의 정사각형으로 나누어져 있다.
가장 왼쪽 위 좌표는 (1, 1)이며, 가장 오른쪽 아래 좌표는 (N, N)에 해당한다.
여행가 A는 상, 하, 좌, 우 방향으로 이동할 수 있으며, 시작 좌표는 항상 (1, 1)이다. 우리 앞에는 여행가 A가
이동할 계획이 적힌 계획서가 놓여 있다

계획서에는 하나의 줄에 띄어쓰기를 기준으로 L, R, U, D 중 하나의 문자가 반복적으로 적혀있다.
각 문자의 의미는 다음과 같다

L: 왼쪽으로 한 칸 이동
R: 오른쪽으로 한 칸 이동
U: 위로 한 칸 이동
D: 아래로 한 칸 이동

이때 여행가 A가 N × N 크기의 정사각형 공간을 벗어나는 움직임은 무시된다
예를 들어 (1, 1)의 위치에서 L 혹은 U를 만나면 무시된다
다음은 N = 5인 지도와 계획이다

<입력>
첫째 줄에 공간의 크기를 나타내는 N이 주어집니다. (1<=N<=100)
둘째 줄에 여행가 A가 이동할 계획서 내용이 주어집니다. (1<=이동 횟수<=100)

<출력>
첫째 줄에 게임의 룰에 맞게 선택한 카드에 적힌 숫자를 출력
```

---

### 💡문제 풀이

핵심은 ‘**공간 밖을 벗어나는 경우는 무시한다’** 이다.

```python
<나의 풀이>
N = int(input())
move = list(map(str,input().split()))

x,y = (1,1)

for i in move:
    if x == 1 and i == "U":
        continue
    elif y == 1 and i == "L":
        continue
    elif x == N and i == "D":
        continue
    elif y == N and i == "R":
        continue
    
    if i == "L":
        y -= 1
    elif i == "R":
        y += 1
    elif i == "U":
        x -= 1
    else:
        x += 1

print(x,y)

<모범 답안>
n = int(input())
roots = list(input().split())
x,y = 1,1

#L,R,U,D
dx = [0,0,-1,1]
dy = [-1,1,0,0]
move = ['L','R','U','D']

for root in roots: #이동 계획 하나씩 확인
    for i in range(len(move)): #이동 후 좌표 구하기
        if root == move[i]:
            nx = x + dx[i]
            ny = y + dy[i]
            
    if nx<1 or ny<1 or nx>n+1 or ny>n+1:
        continue #무시
    
    x,y = nx,ny #이동  
        
print(x,y)
```