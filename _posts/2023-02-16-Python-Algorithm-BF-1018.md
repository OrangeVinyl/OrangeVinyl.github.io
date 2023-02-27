---
title: "[Python_BF] 체스판 다시 칠하기"
excerpt: "Algorithm_Python_BF_1018"

categories: 
  - Algorithm
tags:
  - [Python, BF, Algorithm]

permalink: /Python/BF_체스판다시칠하기/

toc: true
toc_sticky: true

date: 2023-02-16
last_modified_at: 2023-02-16
---
### ✏️ 문제

![1018.png](/assets/images/posts_img/Algorithm/1018.png)

### ✅ 문제 풀이 핵심

8X8 로 잘라야 한다면 NXM크기의 보드는 `N-8+1, M-8+1` 개의 비교를 할 수 있다.

가장 상단의 좌측 타일이 `B 혹은 W로 시작하는 2가지의 경우`가 있다. → `Case를 2개`로 나눠 생각한다.

`판의 좌표 합`이 `짝수`인 경우와 `홀수`인 경우로 나눈다.

N-7 , M-7 내의 8X8에서 하나씩 돌면서 비교하는 총 `4중 for문`을 완성시킨다.

전형적인 `브루트 포스` 문제이다.

### 💡 문제 풀이 코드

```python
n,m = map(int,input().split())
board = [input() for _ in range(n)]

count_list = []

for i in range(n-7):
    for j in range(m-7):
        aCase = 0
        bCase = 0
        for a in range(i,i+8):
            for b in range(j,j+8):
                if (a+b) % 2 == 0:
                    if board[a][b] != 'W':
                        aCase += 1
                    if board[a][b] != 'B':
                        bCase += 1
                else:
                    if board[a][b] != 'B':
                        aCase += 1
                    if board[a][b] != 'W':
                        bCase += 1
        count_list.append(min(aCase,bCase))

print(min(count_list))
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)