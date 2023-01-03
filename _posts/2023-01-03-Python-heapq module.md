---
title: "[Python] heapq module"
excerpt: "heapq 모듈은 이진 트리 기반의 최소 힙 자료구조를 제공한다."

categories: 
  - Python
tags:
  - [Python, heapq, module, PriorityQueue]

permalink: /Python/heapq module/

toc: true
toc_sticky: true

date: 2023-01-03
last_modified_at: 2023-01-03
---
### 힙 자료구조

> heapq 모듈은 이진 트리 기반의 `최소 힙` 자료구조를 제공한다. 최소 힙을 사용 시, 원소들은 항상 정렬된 상태에서 이용되며 최솟값은 언제나 인덱스가 0, 즉 이진트리의 루트에 위치한다. (위 개념은 DataStructure_PriorityQueue 에서 확인 가능하다.)
> 

내부적으로는 index[0]에서 시작해 index[k]번째 원소가 항상 자식 원소들(index[2k+1], index[2k+2])보다 작거나 같은 형태이다.

### 모듈 import

`heapq` 모듈은 내장 모듈이기 때문에 파이썬만 설치되어 있으면 사용하기 쉽다.

```python
from heapq import heappush, heappop ...// 등등
```

### Min heap 생성, 삽입, 삭제

`heapq 모듈`은 보통의 리스트를 **최소 힙처럼** 다룰 수 있도록 도와 준다. 그러므로 빈 리스트를 생성해 heapq 모듈의 함수를 호출해 인자를 삽입하거나 삭제하면 된다.

> 내부적으로 이진 트리에 원소를 추가하는 `heappush()` 함수는 `O(log(n))`의 시간복잡도를 가진다.
> 

> heapq모듈의 `heappop()` 함수를 이용하여 힙에서 원소를 삭제할 수 있다. **원소를 삭제할 대상 리스트를 인자**로 넘기면, 가장 작은 원소를 삭제 후에 **그 값을 리턴**.
> 

```python
heap = []

heappush(heap,4)
heappush(heap,5)
heappush(heap,1)
heappush(heap,2)
print(heap)

================
[1,2,4,5] ------> 힙정렬에서 삽입 시, 마지막 노드에 추가하고 비교!

print(heappop(heap))
print(heap)

================
1 ------> 가장 작은 값이었던 1이 리턴 됨.
[2,4,5] ------> 1이 삭제됨.
```

### 최소값 삭제하지 않고 읽기

삭제를 하지 않고 단순히 읽기만 하고 싶다면 인덱스를 통해 접근하면 된다.

> 여기서 주의사항은 인덱스 0에 가장 작은 원소가 있다고 해서, 인덱스 1에 두번째 작은 원소, 인덱스 2에 세번째 작은 원소가 있다는 보장은 없다. 왜냐하면 힙은 `heappop()` 함수를 호출하여 원소를 삭제할 때마다 이진 트리의 재배치를 통해 매번 새로운 최솟값을 선정.
> 
> 
> 따라서 두번째로 작은 원소를 얻으려면 바로 `heap[1]`으로 접근하면 안되고, 반드시 `heappop()`을 통해 가장 작은 원소를 삭제 후에 `heap[0]`를 통해 새로운 최소값에 접근해야 한다.
> 

```python
print(heap[2])
=================
5
```

### 기존 리스트를 힙으로

이미 원소가 들어있는 리스트 힙으로 만들려면 `heapq` 모듈의 `heapify()`라는 함수에 사용.

```python
from heapq import heapify

heap = [4, 1, 7, 3, 8, 5]
heapify(heap)
print(heap)

[1, 3, 5, 4, 8, 7]
```

> `heapify()` 함수를 사용할 때 주의할 점은 새로운 리스트를 반환하는 것이 아니라 인자로 넘긴 리스트에 직접 변경한다는 것이다. 따라서 원본 리스트의 형태를 보존해야되는 경우에는 반드시 해당 리스트를 복제한 후에 인자로 넘겨야 한다.
> 

```python
nums = [4, 1, 7, 3, 8, 5]

heap = nums[:]
heapify(heap)

print(nums)
print(heap)`

[4, 1, 7, 3, 8, 5]
[1, 3, 5, 4, 8, 7]
```

### 최대 힙

heapq에서는 최대 힙을 제공하지 않는다. 따라서 다음과 같이 `부호를 변경하는 방법`을 사용해서 최대 힙을 구현한다. 부호를 바꿔서 최소 힙에 넣어준 뒤에 최솟값부터 pop을 해줄 때 다시 부호를 바꿔주면 최대 힙과 동일하다.

```python
import heapq

heap = []
values = [1,5,3,2,4]

# 아래 for문을 실행시키고 나면 heap은 [-5,-4,-3,-1,-2]가 된다.
for value in values:
	heapq.heappush(heap, -value)

# 아래 for문을 실행시키면 5,4,3,2,1이 출력된다. 즉, 큰 숫자부터 출력이 된다.
for i in range(5):
	print(-heapq.heappop(heap))
```

### n번째 최소값/최대값

최소 힙이나 최대 힙을 사용하면 `n` 번째로 작은 값이나 `n` 번째로 큰 값을 효과적으로 구할 수 있다.

`n` 번째 최소값을 구하기 위해서는 주어진 배열로 힙을 만든 후, `heappop()` 함수를 `n` 번 호출하면 된다.

```python
from heapq import heapify, heappop

def nth_smallest(nums, n):
    heapify(nums)

    nth_min = None
    for _ in range(n):
        nth_min = heappop(nums)

    return nth_min
print(nth_smallest([4, 1, 7, 3, 8, 5], 3))
===========================
4
```

### nsmallest(), nlargest()

```python
from heapq import nsmallest

nsmallest(3, [4, 1, 7, 3, 8, 5])[-1] // 뒤에[-1]은 값 하나만 구하려고
=========================

from heapq import nlargest

nlargest(3, [4, 1, 7, 3, 8, 5])[-1]
==========================
```