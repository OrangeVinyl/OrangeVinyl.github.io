---
title: "[Python_BF] 영화감독 슘"
excerpt: "Algorithm_Python_BF_1436"

categories: 
  - Algorithm
tags:
  - [Python, BF, Algorithm]

permalink: /Python/BF_영화감독슘/

toc: true
toc_sticky: true

date: 2023-02-16
last_modified_at: 2023-02-16
---
### ✏️ 문제

![1436.png](/assets/images/posts_img/Algorithm/1436.png)

### ✅ 문제 풀이 핵심

> 완전 탐색 중 `순차 탐색`을 사용하여 문제를 풀어야 한다. 너무 꼬아서 생각 할 필요 없이 666부터 +1 씩 증가하면서 증가하는 숫자에 ‘666’이 들어간다면 카운팅을 진행하고 카운팅 하는 변수가 입력값과 같을 때 증가하는 수를 출력하면 된다.
> 

### 💡 문제 풀이 코드

```python
n = int(input())
cnt = 0
target = 666

while True:
    if '666' in str(target):
        cnt += 1
    if cnt == n:
        print(target)
        break
    target += 1
```