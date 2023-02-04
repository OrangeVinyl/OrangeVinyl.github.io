---
title: "[Python] Sort"
excerpt: "파이썬으로 정렬 알고리즘 재정리"

categories: 
  - Python
tags:
  - [Python, Sort, Algorithm]

permalink: /Python/Sort/

toc: true
toc_sticky: true

date: 2023-01-31
last_modified_at: 2023-01-31
---
### 선택 정렬

데이터가 무작위로 있을 경우, **이중에서 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸고, 그다음 작은 데이터를 선택해 앞에서 두 번째 데이터와 바꾸는 과정을 반복하는 정렬**

```python
array = [7,5,9,0,3,1,6,2,4,8]

for i in range(len(array)):

  min_index = i # 가장 작은 원소의 인덱스
  for j in range(i+1 , len(array)):
    if array[min_index] > array[j]:
      min_index = j

  array[i], array[min_index] = array[min_index], array[i] #스와프

print(array)
```

`스와프`란 특정한 리스트가 주어졌을 때 두 변수의 위치를 변경하는 작업을 의미한다. 파이썬의 경우, 위의 겨우처럼 간단히 리스트 내 두 원소의 위치를 변경할 수 있음.

```python
array = [3,5]
array[0], array[1] = array[1], array[0]

print(array)

[5,3]
```

선택 정렬의 경우, 데이터의 개수가 10,000개 이상이면 정렬 속도가 급격히 느려지는 것을 확인 할 수 있다.(page 161)

> 다른 정렬 알고리즘과 비교했을 경우 매우 비효율적이지만, 특정한 리스트에서 가장 작은 데이터를 찾는 일이 코테에선 잦으므로 소스코드에 익숙해지자.
> 

### 삽입정렬

**데이터를 하나씩 확인하며 각 데이터를 적절한 위치에 삽입하는 정렬**

> 삽입 정렬은 특정한 데이터의 왼쪽에 있는 데이터들은 이미 정렬이 된 상태이므로 자기보다 작은 데이터를 만났다면 더 이상 데이터를 살펴볼 필요 없이 그 자리에 삽입되면 되는 것이다.
> 

```python
array = [7,5,9,0,3,1,6,2,4,8]

for i in range(1, len(array)) :
  for j in range(i, 0, -1): # 인덱스 i부터 1까지 감소하며 반복하는 문법
    if array[j] < array[j -1]:  #한 칸씩 왼쪽으로 이동
        array[j], array[j -1] = array[j -1], array[j]
    else: #  자기보다 작은 데이터를 만나면 그 위치에서 멈춤
      break
print(array)
```

삽입 정렬은 **`정렬이 거의 되어 있는 상황`**에서 유리한 알고리즘이다.

### 퀵 정렬

정렬 알고리즘 중에 가장 많이 사용될 예정이다. ‘병합 정렬’ 알고리즘도 퀵 정렬만큼 빠르다.

> **기준 데이터를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 정렬**
> 

`피벗` : 큰 숫자와 작은 숫자를 교환할 때, 교환하기 위한 ‘**기준**’

**(호어 분할 방식)** - 리스트에서 첫 번째 데이터를 피벗으로 정한다.

왼쪽에서부터는 `피벗보다 큰 숫자`를, 오른쪽에서부터는 `피벗보다 작은 숫자`를 찾는데 찾는 순간 멈추고 둘을 교환한다. 계속 진행하다 **위치가 엇갈리는 경우 '피벗'과'작은 데이터'의 위치를 서로 변경한다**

```python
array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array, start, end):
    if start >= end: # 원소가 1개인 경우 종료
        return
    pivot = start # 피벗은 첫 번째 원소
    left = start + 1
    right = end
    while(left <= right):
        # 피벗보다 큰 데이터를 찾을 때까지 반복 
        while(left <= end and array[left] <= array[pivot]):
            left += 1
        # 피벗보다 작은 데이터를 찾을 때까지 반복
        while(right > start and array[right] >= array[pivot]):
            right -= 1
        if(left > right): # 엇갈렸다면 작은 데이터와 피벗을 교체
            array[right], array[pivot] = array[pivot], array[right]
        else: # 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            array[left], array[right] = array[right], array[left]
    # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
    quick_sort(array, start, right - 1)
    quick_sort(array, right + 1, end)

quick_sort(array, 0, len(array) - 1)
print(array)
```

```python
# 파이썬의 장점을 살린 방식

array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array):
    # 리스트가 하나 이하의 원소만을 담고 있다면 종료
    if len(array) <= 1:
        return array

    pivot = array[0] # 피벗은 첫 번째 원소
    tail = array[1:] # 피벗을 제외한 리스트

    left_side = [x for x in tail if x <= pivot] # 분할된 왼쪽 부분
    right_side = [x for x in tail if x > pivot] # 분할된 오른쪽 부분

    # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬을 수행하고, 전체 리스트를 반환
    return quick_sort(left_side) + [pivot] + quick_sort(right_side)

print(quick_sort(array))
```

> 퀵 정렬은 평균의 경우 ***O(NlogN)*** 의 시간 복잡도를 가진다
> 

> 하지만 최악의 경우 ***O(N²)*** 의 시간 복잡도를 가진다
> 

<aside>
💡 ‘이미 데이터가 정렬되어 있는 경우’에는 매우 느리게 작동한다.

</aside>

### 계수 정렬

**특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠른 정렬 알고리즘**

**‘데이터의 크기 범위가 제한되어 정수 형태로 표현할 수 있을 때’ ⇒ 일반적으로는 데이터 차이가 1,000,000 까지**

**‘동일한 값을 가지는 데이터가 여러 개 등장할 때 적합’**

`비교 기반의 정렬 알고리즘이 아니다`

```python
# 모든 원소의 값이 0보다 크거나 같다고 가정
array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]
# 모든 범위를 포함하는 리스트 선언 (모든 값은 0으로 초기화)
count = [0] * (max(array) + 1)

for i in range(len(array)):
    count[array[i]] += 1 # 각 데이터에 해당하는 인덱스의 값 증가

for i in range(len(count)): # 리스트에 기록된 정렬 정보 확인
    for j in range(count[i]):
        print(i, end=' ') # 띄어쓰기를 구분으로 등장한 횟수만큼 인덱스 출력
```
![정렬 시간복잡도](/assets/images/posts_img/Python_Sort/%EC%A0%95%EB%A0%AC%20%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84.png)

### 정렬 라이브러리

`sorted()` - 퀵 정렬과 동작 방식이 비슷한 병합 정렬을 기반. 항상 최악의 경우에도 시간 복잡도 **O(NlogN)**을 보장한다.

1. 정렬 라이브러리로 풀 수 있는 문제
2. 정렬 알고리즘의 원리에 대해서 물어보는 문제
3. 더 빠른 정렬이 필요한 문제
