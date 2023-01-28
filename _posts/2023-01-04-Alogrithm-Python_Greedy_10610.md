---
title: "[Python_Greedy] 30"
excerpt: "백준_Greedy_10610"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_30/

toc: true
toc_sticky: true

date: 2023-01-04
last_modified_at: 2023-01-04
---
### ✏️ 문제

![10610.png](/assets/images/posts_img/10610.png)

### ✅ 문제 풀이 핵심

- 문제를 바라볼때 키워드는 결국 ‘30’이다. 30의 `배수 판정법`을 알고 있으면 수월하게 해결 가능하다.
- `10의 배수의 경우는 마지막 자리가 필수적으로 ‘0’이된다.`
- `3의 배수는 각 자리의 합이 3의 배수이다.`
- 결국, 해당 하는 숫자들 중 가장 높은 숫자를 출력하기 위해서는 입력값을 리스트에 삽입 후, `내림차순`으로 반환하면 된다.

### 💡 문제 풀이 코드

```python
n = list(input())
n.sort(reverse = True)
sum = 0

for i in n:
    sum += int(i)
    
if '0' in n and sum % 3 ==0:
    print(''.join(n))
else:
    print()
```

---

### 🚀 동작원리 및 구현기법(알고리즘 및 기법)