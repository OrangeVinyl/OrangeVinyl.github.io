---
title: "[Python_Greedy] 행렬"
excerpt: "백준_Greedy_1080"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_행렬/

toc: true
toc_sticky: true

date: 2023-01-08
last_modified_at: 2023-01-08
---
![1080](/assets/images/posts_img/Python_Greedy_행렬/1080.png)
문제의 **핵심**을 기억해야 한다.

> **‘행렬을 변환하는 연산은 어떤 3X3 크기의  부분 행렬에 있는 모든 원소를 뒤집는 것이다.(0 → 1, 1→0)’**
> 

쉽게 말해 N,M이 둘 다 4로 지정 되어 있는경우 3X3의 박스가 움직일 수 있는 경우는 총 4가지의 방법 밖에 없다.

`풀이에서 기억해야 하는 부분은 3X3 중 1열,1행에 해당하는 A,B의 값이 일치하지 않을 시 A의 값들을 뒤집어 주면 된다.`

### 💡 전체 코드

```python
n,m = map(int,input().split())
A = [list(map(int,input().strip())) for _ in range(n)] 
B = [list(map(int,input().strip())) for _ in range(n)]
count = 0

def flip(i,j):
    for x in range(i,i+3):
        for y in range(j,j+3):
            A[x][y] = 1 - A[x][y]
    
def check():
    for i in range(n):
        for j in range(m):
            if A[i][j] != B[i][j]:
                return False
    return True
        

for i in range(n-2):
    for j in range(m-2):
        if A[i][j] != B[i][j]:
            flip(i,j)
            count += 1

if check():
    print(count)
else:
    print(-1)
```

### 새로운 개념

- List Comprehension
- strip()
    - 문자열에서 특정 문자를 제거하는 기능
    - `strip([chars])` : 인자로 전달된 문자를 String의 왼쪽과 오른쪽에서 제거합니다.
    - `lstrip([chars])` : 인자로 전달된 문자를 String의 왼쪽에서 제거합니다.
    - `rstrip([chars])` : 인자로 전달된 문자를 String의 오른쪽에서 제거합니다. 