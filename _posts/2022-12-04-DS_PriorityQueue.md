---
title: "[Data Structure] 우선순위 큐"
excerpt: "Data Structure Priority Queue"

categories:
  - Data Structure
tags:
  - [Data Structure, Priority Queue, Queue,C]

permalink: /CS/Data_Structure_PriorityQueue/

toc: true
toc_sticky: true

date: 2022-12-04
last_modified_at: 2022-12-04
---
### 우선순위 큐

- 우선순위를 가진 항목들을 저장하는 큐
- FIFO 순서가 아니라 우선순위가 높은 데이터가 먼저 나가게 된다.
- 가장 중요한 연산은 **insert 연산(요소 삽입)**, **delete 연산(요소 삭제)**이다.
- 우선순위 큐는 2가지로 구분
    - 최소 우선순위 큐
    - 최대 우선순위 큐

**우선순위 큐 구현하는 방법**

- 배열을 이용한 우선순위 큐
- 연결리스트를 이용한 우선순위 큐
- 히프(heap)를 이용한 우선순위 큐

**히프(heap)란?**

- 노드의 키들이 다음 식을 만족하는 **완전이진트리**
- key(부모노드) ≥ key(자식노드)

![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_1.png)

- 히프는 완전이진트리이므로 마지막 레벨 h를 제외하고는 각 레벨 i에 2^(i-1)개의 노드 존재
- 트리의 높이 연산 시간 복잡도 O(logn)

**히프의 정의**

- 히프는 1차원 배열로 표현될 수 있기 때문에 아래와 같이 히프의 각 요소들을 구조체 element로 정의하고, element의 1차원 배열을 만들어 히프를 구현한다.
- 여기 heap_size는 현재 히프 안에 저장된 요소의 개수이다.

```c
#define MAX_ELEMENT 200 
typedef struct {
	int key;
}element;

typedef struct {
	element heap[MAX_ELEMENT];
	int heap_size;
}HeapType;

HeapType heap; //정적 메모리 할당 사용
HeapType *heap = create(); // 동적 메모리 할당 사용
```

**히프에서의 삽입**

(1) 히프에 새로운 요소가 들어오면, 일단 새로운 노드를 히프의 마지막 노드에 이어서 삽입

(2) 삽입 후에 새로운 노드를 부모 노드들과 교환해서 히프의 성질을 만족

```c
// 현재 요소의 개수가 heap_size인 히프 h에 item을 삽입한다.
// 삽입함수

void insert_max_heap(HeapType *h, element item)
{
	int i,
	i = ++(h->heap_size);
	
	//트리를 거슬러 올라가면서 부모 노드와 비교하는 과정
	while ((i != 1) && (item.key > h->heap[i/2].key)) {
		h->heap[i] = h->heap[i/2]
		i /= 2;
	}
	h->heap[i] = item; //새로운 노드를 삽입
}
```

**히프에서의 삭제**

- 최대 히프에서의 삭제는 **가장 큰 키값을 가진 노드**를 삭제하는 것을 의미 → 따라서 **루트노드 삭제**

(1) 루트 노드를 삭제한다

(2) 마지막 노드를 루트노드로 이동한다

(3) 루트에서부터 단말 노드까지의 경로에 있는 노드들을 교환하여 히프 성질을 만족시킨다.

![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_2.png)

![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_3.png)

![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_4.png)

![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_5.png)

```c
element delete_max_heap(HeapType *h)
{
	int parent, chlid;
	element item, temp;
	
	item = h->heap[1];
	temp = h->heap[(h->heap_size)--];
	parent = 1;
	chlid = 2;
	
	whlie(chlid <= h->heap_size) {
		//현재 노드의 자식노드 중 더 큰 자식노드를 찾는다.
		if((chlid < h->heap_size) && (h->heap[chlid].key < h->heap[chlid+1].key)
			chlid++;
		if(temp.key >= h->heap[chlid].key)
			break;
		//한 단계 아래로 이동
		h->heap[parent] = h->heap[chlid];
		parent = chlid;
		chlid *= 2;
		}
	h->heap[parent] = temp;
	return item;
}
```

**히프의 복잡도 분석**

- 삽입 연산에서 최악의 경우, 루트노드까지 올라가야 하므로 높이에 해당하는 비교 연산 및 이동 연산이 필요하다 → O(logn)
- 삭제도 최악의 경우, 가장 아래 레벨까지 내려가야 하므로 역시 트리의 높이 만큼의 시간이 걸린다 → O(logn)

**히프 정렬**

- 최대 히프를 이용하면 정렬을 할 수 있다
- 먼저 정렬해야 할 n개의 요소들을 최대 히프에 삽입
- 한번에 하나씩 요소를 **히프에서 삭제하여 저장**하면 된다.
- 삭제되는 요소들은 **값이 증가되는 순서**(최소 히프의 경우)
- 하나의 요소를 히프에 삽입하거나 삭제할 때 시간이 O(logn)만큼 소요되고 요소의 개수가 n개이므로 전체적으로 O(nlogn)시간이 걸린다.(빠른편)
- 히프 정렬이 최대로 유용한 경우는 **전체 자료를 정렬하는 것이 아니라 가장 큰 값 몇 개**만 필요할 때이다
- 이렇게 히프를 사용하는 정렬 알고리즘을 **히프 정렬**이라고 한다.

![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_6.png)
![Queue_](/assets/images/posts_img/DataStructure_PQ/Queue_7.png)
