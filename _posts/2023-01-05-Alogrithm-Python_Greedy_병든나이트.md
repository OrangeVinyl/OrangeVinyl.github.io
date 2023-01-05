---
title: "[Python_Greedy] 병든 나이트"
excerpt: "백준_Greedy_1783"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_병든 나이트/

toc: true
toc_sticky: true

date: 2023-01-05
last_modified_at: 2023-01-05
---
### ✏️ 문제

![1783.png](/assets/images/posts_img/1783.png)

### ✅ 문제 풀이 핵심

- 문제 풀이의 핵심은 경우의 수를 나눠서 생각해야 한다는 거다
- N=1일 경우, N=2일 경우, 그리고 M의 길이에 따라 자세히 나눠야 한다.
- 코드의 구현은 어렵지 않으나, 문제해석의 어려움이 있을 수 있다.
- 참고 : [https://afterdawncoding.tistory.com/202](https://afterdawncoding.tistory.com/202)

### 💡 문제 풀이 코드

```python
n,m = map(int,input().split())

if n == 1:
    print(1)
elif n == 2:
    print(min(4,(m+1)//2)) 
else:
    if m <=6:
        print(min(4,m))
    else:
        print(m-2)
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)