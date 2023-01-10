---
title: "[Python_Greedy] 전구와 스위치"
excerpt: "백준_Greedy_2138"

categories:
  - Algorithm
tags:
  - [Python, Algorithm, Greedy]

permalink: /Algorithm/Python_Greedy_전구와스위치/

toc: true
toc_sticky: true

date: 2023-01-11
last_modified_at: 2023-01-11
---
![2138.png](/assets/images/posts_img/Python_Greedy_2138/2138.png)

### 💡 문제 풀이 키워드

- 1번 스위치를 눌렀을 경우, 1,2번의 전구의 상태가 바뀌고, N번 스위치를 눌렀을 경우, N-1, N번의 전구의 상태가 바뀐다
    
    → 결국, **첫 번째 스위치는 기존의 법칙과 다르게 [i(1 < i < N)의 범위를 보면 1이 될 수가 없다] 예외적인 상황으로 봐야한다.** 그러므로 첫 번째 스위치의 누름 유무에 따라 구분해야 한다는 것을 도출한다. 
    
- 두 번째 전구부터는 **기준점이 되는 스위치의 왼쪽 전구**를 통해 스위치를 누를 지 결정한다.
    
    → 한 번 지나간 전구는 다시 조정이 불가능하기 때문에 왼쪽 기준으로 하는 것이 맞다.
    
    → **최적의 조건**을 찾는, 혹은 **최소의 조건**을 찾는 방법을 사용하기에 그리디 알고리즘이다.
    

```python
#틀린 풀이
N = int(input())

before = list(map(int,input()))
target = list(map(int,input()))
cnt = 0
temp_before = before[:] #리스트 슬라이싱을 이용한 깊은 복사

#첫 번째를 안 누른 경우
for i in range(1, N):
    if before[i-1] != target[i-1]:
        cnt += 1
        before[i] = 1 - before[i]
        before[i-1] = 1 - before[i]
        # i의 범위는 (1<i<N)
        if i != N-1:
            before[i+1] = 1 - before[i+1]
else:
    if before == target:
        print(cnt)
        exit()

#첫 번째를 누른 경우
cnt = 1
temp_before[0] = 1 - temp_before[0]
temp_before[1] = 1 - temp_before[1]

for i in range(1,N):
    if temp_before[i-1] != target[i-1]:
        cnt += 1
        temp_before[i] = 1 - temp_before[i]
        temp_before[i] = 1 - temp_before[i-1]
        #마찬가지다
        if i != N-1:
            temp_before[i+1] = 1 - temp_before[i+1]           
else:
    if temp_before == target:
        print(cnt)
        exit()

#불가능한 경우            
print(-1)
```

```python
#정답 풀이
N = int(input())

before = list(map(int,input()))
target = list(map(int,input()))

def change(before, target):
    temp_before = before[:]
    cnt = 0
    for i in range(1,N):
        if temp_before[i-1] == target[i-1]:
            continue
        cnt += 1
        for j in range(i-1,i+2):
            if j < N:
                temp_before[j] = 1 - temp_before[j]
    return cnt if temp_before == target else 1e9
    
#첫 번째를 누르지 않은 경우
result = change(before, target)
#첫 번째를 누른 경우
before[0] = 1 - before[0]
before[1] = 1 - before[1]
result = min(result, change(before, target) + 1) #두 가지의 결과값을 비교하여 최솟값 저장
print(result if result != 1e9 else -1) #두 가지 경우 모두 충족 못하는 경우를 고려한 삼항연산자
```

---

### 📝 사용 문법 개념정리

**1) Mutable, Immutable**

| class | 설명 | 구분 |
| --- | --- | --- |
| list | mutable 한 순서가 있는 객체 집합 | mutable |
| set | mutable 한 순서가 없는 고유한 객체 집합 | mutable |
| dict | key와 value가 맵핑된 객체, 순서 없음 | mutable |
| bool | 참,거짓 | immutable |
| int | 정수 | immutable |
| float | 실수 | immutable |
| tuple | immutable 한 순서가 있는 객체 집합 | immutable |
| str | 문자열 | immutable |
| frozenset | immutable한 set | immutable |

```python
#immutable
a = 1
b = a
print(a, b) # 1 1
b = 2
print(a, b) # 1 2

#mutable
a = [1, 2, 3, 4]
b = a
print(a, b) # [1, 2, 3, 4] [1, 2, 3, 4]
b[1] = 0 # 배열 b의 두번째 값을 0으로 바꿔준다.
print(a, b) # [1, 0, 3, 4] [1, 0, 3, 4]
```

![2138_1.png](/assets/images/posts_img/Python_Greedy_2138/2138_1.png) | ![2138_2.png](/assets/images/posts_img/Python_Greedy_2138/2138_2.png)

![2138_3.png](/assets/images/posts_img/Python_Greedy_2138/2138_3.png) | ![2138_4.png](/assets/images/posts_img/Python_Greedy_2138/2138_4.png)

**2) copy, deepcopy(얉은 복사, 깊은 복사)**

알고리즘 공부를 하다보면 **원본 배열의 보존**을 위해 배열을 ‘깊은 복사’한다.

파이썬에서는 다양한 방법으로 깊은 복사를 할 수 있다.

1. copy 모듈의 deepcopy 이용
    
    파이썬의 내장 모듈 copy를 import하여 deepcopy()를 사용하는 방법
    
    ```python
    import copy
    
    a = [1, 2, 3, 4]
    b = copy.deepcopy(a)
    b[1] = 0
    print(a, b) # [1, 2, 3, 4] [1, 0, 3, 4]
    ```
    
2. 클래스가 가지고 있는 copy() 함수 사용
    
    파이썬의 기본적인 클래스들이 가지고 있는 copy()함수를 사용하는 것으로, list클래스도 내장하고 있다.
    
    ```python
    a = [1, 2, 3, 4]
    b = a.copy()
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    ```
    
3. 리스트 슬라이싱
    
    ```python
    a = [1, 2, 3, 4]
    b = a[:]
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    ```
    
4. 리스트 생성 시, 매개변수에 원본을 전달 혹은 생성 후 원본리스트 확장
    
    ```python
    #리스트 생성 후 매개변수 원본 전달
    a = [1, 2, 3, 4]
    b = list(a)
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    
    #extend 사용
    a = [1, 2, 3, 4]
    b = []
    b.extend(a)
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    ```
    
5. 배열요소 접근을 통한 복사
    
    ```python
    a = [1, 2, 3, 4]
    b = [i for i in a]
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    
    a = [1, 2, 3, 4]
    b = []
    for i in range(len(a)):
        b.append(a[i])
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    
    a = [1, 2, 3, 4]
    b = []
    for item in a:
        b.append(item)
    b[1] = 0
    print(a,b) # [1, 2, 3, 4] [1, 0, 3, 4]
    ```
    

**3) 리스트 슬라이싱**

콜론 왼쪽 숫자 = 우리가 추출하기 원하는 시작 인덱스

콜론 오른쪽에 써주는 숫자 = 우리가 추출하기 원하는 끝 인덱스 + 1

**4) 파이썬 삼항 연산자**

```python
[condition] ? [true_value] : [false_value] // 파이썬 미지원

//파이썬에서 위 형태를 지원하지 않고 아래 형태를 지원한다.

[true_value] if [condition] else [false_value] // 파이썬 지원
```

**5) 1e9 , 2e9**

가능한 최대값이 10억 미만이라면, 무한(INF)의 값으로 1e9를 사용할 수 있다.

**1e9 = 1*10^9**

**2e9 = 2*10^9**

     특히, 2e9는 int 범위내에서 무한대 값을 나타내기 위해 사용하는 경우가 많다.

**6) for ~ else 문**

파이썬에서는 for문과 else문을 함께 사용가능하다. 혹은 try ~ except문과 이용되기도 한다.