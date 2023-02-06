---
title: "[Python] 이분탐색"
excerpt: "파이썬으로 이분탐색 정리"

categories: 
  - Python
tags:
  - [Python, Binary Search, Algorithm]

permalink: /Python/Binary_Search/

toc: true
toc_sticky: true

date: 2023-02-05
last_modified_at: 2023-02-05
---
![binary-and-linear-search-animations.gif](/assets/images/posts_img/%EC%9D%B4%EC%A7%84%ED%83%90%EC%83%89.gif)
### 순차 탐색

데이터의 개수가 N개일때 최대 N번의 비교 연산이 필요하므로 순차 탐색의 최악의 경우 시간 복잡도는 O(N)이다.

### 이진 탐색

배열 내부의 데이터가 `정렬`되어 있어야만 사용이 가능하다.

한 번 확인시, 확인하는 원소의 개수가 절반씩 줄어든다는 점에서 시간복잡도는 O(logN)이다.

**재귀함수로 구현한 이진 탐색 소스코드(외우는게 좋다)**

```python
def binary_search(array, target, start, end):
	if start > end:
		return None
	mid = (start + end) // 2
	# 찾은 경우 중간점 인덱스 반환

	if array[mid] == target:
		return mid
	elif array[mid] > target:
		return(binary_search(array, target, start, mid - 1))
	else:
		return(binary_search(array, target, mid + 1, end))

n, target = list(map(int,input().split())
array = list(map(int,input().split()))

result = binary_search(array,target,0,n-1)
if result == None:
	print('fail')
else:
	print(result + 1)
```

**반복문으로 구현한 이진 탐색 소스코드**의 경우, 함수 내부를 while문을 사용하고 리턴 값만 조절하면 된다. 나머지는 동일하다

> 코딩 테스트의 이진 탐색 문제는 탐색 범위가 큰 상황에서의 탐색을 가정하는 문제가 많다. 따라서 `탐색 범위가 2,000만`을 넘어가면 이진 탐색으로 문제에 접근해보길 권한다. `처리해야 할 데이터의 개수나 값이 1,000만 단위 이상으로 넘어가면` 이진 탐색과 같이 O(logN)의 속도를 내야 하는 알고리즘을 떠올리자!
> 

<aside>
💡 데이터가 정렬되어 있는 경우 중 하나로 `이진 탐색 트리`가 있다. 이진 탐색 트리는 이진 탐색이 동작할 수 있도록 고안된, 효율적인 탐색이 가능한 자료구조이다.

</aside>