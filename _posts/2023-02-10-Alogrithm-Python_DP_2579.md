---
title: "[Python_DP] 계단 오르기"
excerpt: "백준_DP_2579"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, DP]

permalink: /Algorithm/Python_DP_계단오르기/

toc: true
toc_sticky: true

date: 2023-02-10
last_modified_at: 2023-02-10
---
### ✏️ 문제

![2579_1.png](/assets/images/posts_img/Algorithm/2579_1.png)

![2579_2.png](/assets/images/posts_img/Algorithm/2579_2.png)

### ✅ 문제 풀이 핵심

> 마지막 계단은 무조건 도착해야 하므로 2가지의 경우로 나눌 수 있다.
> 
1. **바로 직전의 계단을 밟는 경우 이전의 계단은 누적값과 마지막 계단의 합을 더하면 된다.**
2. **끝에서 2번째 계단을 밝는 경우 그 앞의 계단은 밟지 못하고 마지막 계단만 밟을 수 있다. 그러므로, 끝에서 2번째 계단의 값 + 마지막 계단 값 + 그 동안의 누적 값의 합으로 구한다.**

**dp[0] ~ dp[2] 까지는 이후의 값들과는 다르게  결정되는 방식이 다르기에 미리 설정한다.**

### 💡 문제 풀이 코드

```python
import sys
n = int(sys.stdin.readline().rstrip())
dp = [0] * (n+1)
arr = [int(sys.stdin.readline()) for _ in range(n)]

dp[0] = arr[0]
dp[1] = arr[1] + arr[0]
dp[2] = max(arr[1] + arr[2], arr[0] + arr[2])
for i in range(3,n):
    dp[i] = max(dp[i-2] + arr[i], dp[i-3] + arr[i-1] + arr[i])

print(dp[n-1])
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)