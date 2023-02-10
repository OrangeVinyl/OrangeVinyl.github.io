---
title: "[Python_Greedy] 2n타일링"
excerpt: "백준_DP_11726"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, DP]

permalink: /Algorithm/Python_DP_2n타일링/

toc: true
toc_sticky: true

date: 2023-02-09
last_modified_at: 2023-02-09
---
### ✏️ 문제

![11726.png](/assets/images/posts_img/Algorithm/11726.png)

### ✅ 문제 풀이 핵심

> 이번 문제 풀이의 핵심은 ‘점화식’을 구해야한다. 문제의 규칙을 찾아보면 `피보나치 수열`이랑 동일한 것을 알 수 있다.
> 

> **F(n) = F(n-1) + F(n-2)**
> 

### 💡 문제 풀이 코드

```python
n = int(input())
dp = [0] * (1001)

dp[1] = 1
dp[2] = 2

for i in range(3,n+1):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n] % 10007)
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)