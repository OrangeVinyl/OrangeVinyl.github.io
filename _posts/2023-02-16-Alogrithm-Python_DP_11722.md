---
title: "[Python_Greedy] 가장 긴 감소하는 부분수열"
excerpt: "백준_DP_11722"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, DP]

permalink: /Algorithm/Python_DP_가장긴감소하는부분수열/

toc: true
toc_sticky: true

date: 2023-02-16
last_modified_at: 2023-02-16
---
### ✏️ 문제

![2579_1.png](/assets/images/posts_img/Algorithm/11722.png)

### ✅ 문제 풀이 핵심

한 번에 문제풀이가 떠오르기 힘든 까다로운 문제이다.

> 제일 중요한 점은 DP배열에 어떤 값을 저장하냐에 따라 달라진다.
> 

> DP배열에는 인덱스의 값까지 ‘`가장 긴 감소하는 부분 수열의 **크기`’를 집어넣는다.**
> 

감소하는 부분 수열이므로 주어진 수열을 **하나씩 돌면서** 앞의 값들을 비교하여 `앞의 값이 큰 경우` 각 값의 인덱스와 일치하는 `DP배열의 값 중` 큰 값만 해당 DP배열에 삽입

최종적으로 DP배열의 최댓값만 출력한다.

### 💡 문제 풀이 코드

```python
n = int(input())
A = list(map(int,input().split()))

dp = [1] * n

for i in range(1,n):
    for j in range(i):
        if A[j] > A[i]:
            dp[i] = max(dp[i], dp[j]+1)
            
print(max(dp))
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)