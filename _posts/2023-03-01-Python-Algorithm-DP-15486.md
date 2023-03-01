---
title: "[Python_DP] 퇴사 2"
excerpt: "Algorithm_Python_DP_15486"

categories: 
  - Algorithm
tags:
  - [Python, DP, Algorithm]

permalink: /Python/DP_퇴사2/

toc: true
toc_sticky: true

date: 2023-03-01
last_modified_at: 2023-03-01
---
### ✏️ 문제

![15486.png](/assets/images/posts_img/Algorithm/15486.png)

### ✅ 문제 풀이 핵심

`i`는 1부터 시작한다.1일부터 차례대로 탐색하며 진행한다.

`i`일에 얻을 수 있는 이익은 그 전날 얻을 수 있는 이익보다는 크거나 같을 것이므로 `dp[i] = max(dp[i], dp[i - 1])`를 해준다

`i`일에 해당하는 일이 끝나는 시점인 `fin_date = i + t[i] - 1`를 정의하였고, `fin_date`가 최종일 이하면 `i`일에 일을 할 수 있으므로 `fin_date`일에 영향을 준다.따라서 `dp[fin_date] = max(dp[fin_date], dp[i - 1] + p[i])`

### 💡 문제 풀이 코드

```python
n = int(input())
dp = [0] * (n+1)
t_list = [0] * (n+1)
p_list = [0] * (n+1)

for i in range(1,n+1):
    Ti, Pi = map(int,input().split())
    t_list[i] = Ti
    p_list[i] = Pi

for i in range(1,n+1):
    dp[i] = max(dp[i-1],dp[i])
    last_date = i + t_list[i] -1
    if last_date <= n:
        dp[last_date] = max(dp[last_date], dp[i-1] + p_list[i])
        
print(max(dp))
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)