---
title: "[Algorithm] 분해 합"
excerpt: "Algorithm_Python_BF_2231"

categories: 
  - Algorithm
tags:
  - [Python, BF, Algorithm]

permalink: /Python/BF_분해합/

toc: true
toc_sticky: true

date: 2023-02-16
last_modified_at: 2023-02-16
---
### ✏️ 문제

![스크린샷 2023-02-16 오후 1.53.19.png](/assets/images/posts_img/Algorithm/2231.png)

### ✅ 문제 풀이 핵심

> N과 M을 헷갈리지 않는 것이 문제의 핵심이다.
> 

결국 구하는 것은 문제 예시의 생성자 M 이므로, 예시의 과정을 반대로 생각해야 한다.

**자연수** 1 부터 입력값 N까지 다 돌면서 경우의 수를 구해 N과 동일한 결과가 나오면 정답이다. → `가장 작은 생성자를 구하는 문제이므로 1부터 돌기 때문에 굳이 신경 쓰지 않아도 된다.`

### 💡 문제 풀이 코드

```python
n = int(input())
result = 0

for i in range(1,n+1):
    num_list = list(map(int,str(i)))
    result = sum(num_list) + i
    if result == n:
        print(i)
        break
    if i == n:
        print(0)
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)