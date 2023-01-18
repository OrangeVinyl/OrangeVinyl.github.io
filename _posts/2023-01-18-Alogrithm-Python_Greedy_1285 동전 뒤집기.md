---
title: "[Python_Greedy] 동전 뒤집기"
excerpt: "백준_Greedy_1285"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_동전 뒤집기/

toc: true
toc_sticky: true

date: 2023-01-18
last_modified_at: 2023-01-18
---
### ✏️ 문제
![1541_1.png](/assets/images/posts_img/Python_Greedy_1285/1285_1.png)

![1541_2.png](/assets/images/posts_img/Python_Greedy_1285/1285_2.png)

### ✅ 문제 풀이 핵심

> 행 또는 열을 기준으로 선택하여 뒤집는 모든 경우의 수를 구해 최솟값을 출력한다.
> 

> 행 또는 열을 뒤집는 연산을 실행할 시, **비트마스킹**을 적용하여 구한다.
> 

> 행 또는 열을 뒤집은 후, 나머지 기준점으로 뒤집기 실행 (행을 기준으로 뒤집는 연산을 실행했으면, 열을 기준으로 뒤집을지 그대로 둘 지 결정한다.)
> 

> 세번째의 경우, 뒤집을지 그대로 둘 지의 판단은 T가 H보다 많을 경우에 뒤집는다.
> 

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| - | 1 | 2 | 1,2 | 3 | 1,3 | 2,3 | 1,2,3 |

### 💡 문제 풀이 코드

```python
N = int(input())
coin = [list(input()) for _ in range(N)]
result = N*N + 1

for bit in range(1 << N):
    #리스트 복사
    tmp_lst = [coin[i][:] for i in range(N)]
    for i in range(N):
        if bit & (1 << i): #비트 마스킹에 해당하면
            for j in range(N):
                if tmp_lst[i][j] == 'H':
                    tmp_lst[i][j] = 'T'
                else:
                    tmp_lst[i][j] = 'H'
    tcnt = 0
    for i in range(N):
        cnt = 0
        for j in range(N):
            if tmp_lst[j][i] == 'T':
                cnt += 1
        tcnt += min(cnt, N-cnt)
    result = min(result, tcnt)
    
print(result)
```

---

### 🚀 사용 알고리즘 및 기법
