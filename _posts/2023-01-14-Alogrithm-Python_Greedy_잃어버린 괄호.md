---
title: "[Python_Greedy] 잃어버린 괄호"
excerpt: "백준_Greedy_1541"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_잃어버린괄호/

toc: true
toc_sticky: true

date: 2023-01-14
last_modified_at: 2023-01-14
---
![1541.png](/assets/images/posts_img/Python_Greedy_1541/1541.png)


### ✅ 문제풀이 핵심

> 식의 값을 **‘최소’**로 만들려고 한다에 집중해야한다. 식을 최소로 만들기 위해서는 최대한 큰 값을 빼야 하므로 중요하게 볼 것은 **‘-’ 연산자**이다.



1) ‘-’ 연산자로 식을 구분하면 더해야 할 부분들이 나온다.  
2) 이후, 나눠진 부분들 중 ‘+’ 연산자가 포함되어 있는 경우 해당하는 문자열을 정수화 시켜 값들을 더한다.  
3) 최종적으로 얻은 값 중, 첫번째 인자에서 하나씩 빼준다.

### 💡 문제 풀이 코드

```python
exp = input().split('-')
num = []

for i in exp:
    cnt = 0
    addition = i.split('+')
    for j in addition:
        cnt += int(j)
    num.append(cnt)

sum = num[0]
for s in range(1,len(num)):
    sum -= num[s]

print(sum)
```