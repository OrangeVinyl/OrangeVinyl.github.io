---
title: "[Python] DFS/BFS"
excerpt: "파이썬으로 DFS/BFS 정리"

categories: 
  - Python
tags:
  - [Python, DFS, BFS, Algorithm]

permalink: /Python/DFS_BFS/

toc: true
toc_sticky: true

date: 2023-02-06
last_modified_at: 2023-02-06
---
## ✅ DFS(Depth-First Search)

- 깊이 우선 탐색. 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘
- 대체로 `스택` 이 동작원리인 경우가 많다
- 파이썬의 경우 재귀함수를 사용하여 동작 구현

### ✅ 동작과정

1. 탐색 시작 노드를 스택에 삽입 후 `방문처리`
2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문처리
3. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼내 쓴다.
4. 2,3번의 과정을 더이상 수행 할 수 없을 때까지 반복

```python
#DFS
visited = [False] * 9

#연결된 노드들에 대한 정보
graph = [
    [],
    [2,3,8], #1번 노드와 연결된 노드
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
    
]

def DFS(graph, v, visited):
    # 노드를 방문처리 해준다
    visited[v] = True
    print(v, end =' ')
    
    for i in graph[v]:
        if not visited[i]:
            DFS(graph,i,visited)
            
DFS(graph,1,visited)
```

## ✅ BFS(Breadth First Search)

- 너비 우선 탐색. 가까운 노드부터 탐색하는 알고리즘
- 가장 가까운 노드부터 우선순위를 가져가야 한다. 그러므로 `큐` 를 이용하여 구현 할 수 있다.
- 파이썬의 경우 `collection` 라이브러리의 `deque`를 통해 큐를 사용할 수 있다.
- DFS보다 수행시간이 좋은 편이다(일반적으로)
- 리스트로 큐를 사용하려는 경우, append()와 pop()으로 구현 시, pop()의 경우 시간 복잡도가 O(n)이므로 매우 비효율적

|  | 리스트 | deque |
| --- | --- | --- |
| 가장 앞쪽에 원소 추가(appendleft(x)) | O(N) | O(1) |
| 가장 뒤쪽에 원소 추가(append(x)) | O(1) | O(1) |
| 가장 앞쪽에 있는 원소 제거(popleft()) | O(N) | O(1) |
| 가장 뒤쪽에 있는 원소 제거(pop()) | O(1) | O(1) |

*****deque로 선언한 리스트에서는 일반적인 리스트에서 사용할 수 있는 인덱싱, 슬라이싱 기능은 사용할 수 없다.* 다만, 리스트의 시작 혹은 끝 부분에 데이터를 삽입하여 삭제할 때는 상당히 효율적이다.**

### ✅ 동작 과정

1. 탐색 시작 노드를 큐에 삽입하고 방문처리
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입 후 방문처리
3. 2번의 과정을 수행할 수 없을 때까지 반복

```python
from collections import deque

visited = [False] * 9

graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

def BFS(graph, start, visited):
    queue = deque([start])
    
    #현재 노드 방문 처리
    visited[start] = True
    
    #큐가 빌 때까지 반복
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

BFS(graph, 1, visited)
```