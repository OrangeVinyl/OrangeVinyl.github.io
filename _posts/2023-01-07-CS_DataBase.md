---
title: "[DataBase] 데이터베이스 프로그래밍"
excerpt: "DataBase Programming(C#)"

categories:
  - CS
tags:
  - [CS, Knowledge, Database, C#]

permalink: /CS/Database/

toc: true
toc_sticky: true

date: 2023-01-07
last_modified_at: 2023-01-07
---
## 데이터베이스 구축 과정

1. DB 설계
2. DBMS 결정
3. 사용자 계정 설정과 권한 부여
4. 테이블 생성
5. 레코드 추가
6. 질의어로 업무에 필요한 정보 활용

```sql
conn 관리자/관리자
create user 관리자이름 idetified by 비밀번호;
grant create session to 관리자이름;
grant resource, create view, create to table to 관리자이름;
```

### SQL(Structed Query Language) : 구조화된 질의 언어

1) DQL(Data Query Language)

SELECT

2) DML(Data Mnipulation Language)

단위 : Row 단위(가로줄, 행)

DML만 COMMIT/ROLLBACK 가능

INSERT

UPDATE

DELETE

3) DDL(Data Definition Language)

단위 : Column 단위(세로줄, 열)

CREATE

ALTER : 수정(MODIFY), 삭제(DROP), 추가(ADD), 수정(이름까지)(CHANGE), 테이블 이름 수정(RENAME)

TRUNCATE : 테이블 구조는 남기고 데이터만 삭제

4) DCL(Data Control Language)

GRANT : 권한 부여

REVOKE : 권한 해제

5) TCL(Transaction Control Language)

COMMIT : 저장

ROLLBACK : 취소

## CS와 Oracle연동

---

### 닷넷 프레임워크의 구성요소

- .NET Framework 클래스 라이브러리
    - BCL: 클래스 라이브러리 중 가장 핵심적인 기능을 하는 클래스의 모음
    - **ADO.NET: 데이터베이스를 사용할 때 지원하는 클래스**
        - System.Data 네임스페이스와 하위 네임스페이스에서 제공하는 데이터 접근 기술로 이루어짐
        - System.Data 네임스페이스는 ADO.NET 객체 모델을 구성하는 클래스로 이루어져 있다.
    - 윈도우 UI : 닷넷 언어로 윈도우 프로그램을 만들 때 지원하는 클래스
        - 표준윈도우, MDI 윈도우, 대화상자
    - ASP.NET : 닷넷 언어로 웹 프로그래밍을 할 때 지원하는 클래스
- CLR → 닷넷 실행 엔진, 닷넷 플랫폼

### ADO.NET의 개요

- ADO(Active Data Object) + .NET
- 다양한 방법으로 데이터베이스를 검색, 수정, 업데이트 등의 작업 가능
- ADO.NET은 **XML지원 / 단절된 데이터 구조를 표준으로 사용한다**. ADO와 다르게
    
    

### ADO.NET의 기본구조

- .NET Data Provider : 데이터베이스에 연결하고, SQL문을 실행시키는 역할
- DataSet : 데이터베이스의 데이터를 DataSet으로 쉽게 이식 가능
    
                     **데이터베이스와 분리되어 DataSet만으로도 대부분의 작업가능**
    

### .NET Data Provider의 구성요소



- 연결 지향성
    - 데이터베이스에 연결된 후 데이터베이스와 동적으로 작업을 수행
    - Command 클래스와 관련이 깊음
- 비연결 지향성
    - 메모리 데이터베이스와 관련이 있음
    - 데이터베이스에 연결 설정 후 데이터베이스 형태로 보유하고 있으면서 메모리 데이터베이스만으로 작업을 수행


### ADO.NET의 간략한 구조

- **DataSet**
    - **데이터 원본과 단절**
    - 데이터는 Memory in Cash 형태
    - **XML과의 데이터 교환**
- **.NET Data Provider**
    - Connection : 데이터 원본에 연결
    - Command : 검색, 삽입, 수정, 삭제 등의 명령 수행
    - DataReader: 순방향 읽기전용으로 연결된 결과 집합
    - DataAdapter: 데이터베이스로부터 DataSet에 값을 채우거나 필요로 할 때 데이터베이스로 업데이트 가능

### Connection과 데이터 공급자

SqlClient 공급자

SQL Server 공급자(SqlClient)는 OLE와 ODBC와 같은 중간계층 없이 MS-SQL 전용으로 직접 연결
되기 때문에 간단하며 효율적으로 동작한다.

Microsoft SQL Server 버전 7.0 이상에 연결한다.

OleDb 공급자

OLE DB 공급자는 OLE DB를 사용해서 노출된 데이터 소스 및 Microsoft SQL Server 버전 6.x 또는
그 이전 버전에 SQLOLEDB 즉 SQL Server용 OLE DB 공급자를 통해 연결한다.

ODBC 공급자(.NET Framework 2.0에 추가된 공급자)
ODBC를 사용해서 노출된 데이터 소스에서 사용한다.
System.Data.Odbc

Oracle 공급자(.NET Framework 2.0에 추가된 공급자)
오라클 데이터 소스에서 사용한다.(오라클 클라이언트 소프트웨어 버전 8.1.7 이상에서 지원)
System.Data.OracleClient

**Oracle 공급자(.NET Framework 2.0에 추가된 공급자)=> ODP.Net(Oracle Data Provider for .NET)
오라클 데이터 소스에서 사용한다.(오라클 클라이언트 소프트웨어 버전 8.1.7 이상에서 지원)
Oracle.DataAccess.Client → 이거는 꼭 외우자 그냥**

### OracleCommand 클래스

- Connection 객체를 이용해 데이터베이스와 연결한 후, DB에 필요한 명령을 전달하거나 결과를 받아올 때 사용
- OracleCommand 클래스를 이용하여 수행할 수 있는 명령들  DML, DDL, DCL 전부
- 명령에 관련된 여러 가지 정보를 관리 가능

**OracleCommand의 주요 속성들**

- CommandText
    - 데이터 소스에서 실행할 SQL문이나 저장 프로시저를 가져오거나 설정
- CommandType
    - CommandText 속성이 해석될 방법을 나타내는값을 가져오거나 설정
- Connection
    - OracleCommand의 인스턴스에서 사용하는 Connection을 가져오거나 설정
- Parameters
    - OracleParameterCollection 을 가져옴
- Transaction
    - OracleCommand가 실행하는 트랜잭션을 가져오거나 설정

### OraCommand의 주요 메서드

- **ExecuteNonQuery()**
    - **Connection에 대한 SQL 문을 실행하고 영향을 받은 행의 갯수를 반환**
    - OracleCommand를 이용하여 데이터베이스에 명령을 전달하고 이를 수행
    - **Select 명령을 제외한 대부분의 명령(DML)을 ExecuteNonQuery()를 이용하여 처리 가능**
- **ExecuteReader()**
    - **CommandText를 Connection에 보내고, OracleDataReader를 생성**
    - **Select문장을 사용할 때 이용되는 메서드**
- ExecuteScalar()
    - 쿼리를 실행하고 쿼리에서 반환된 결과 집합의 첫 번째 행의 첫 번째 열 반환
- ExecuteXmlReader()
    - CommandText를 Connection에 보내고, XmlReader 객체를 생성

### DatatSet과 DataAdapter의 관계

- 웹 프로그래밍의 작업에 가장 큰 문제가 되는 데이터베이스의 과부하 문제의 해결책으로 제시되는 .NET의 새로운 architectur


### DataSet 구성 요소의 정리

DataSet

- 전체 DataSet을 담을 수 있으며, 하나 이상의 테이블 또는 전체 데이터베이스를 담을 수 있음

DataTable

- 하나의 테이블 정보를 담을 수 있음

DataRow

- 테이블에서 하나의 행에 해당하는 값을 담고 있음

DataColumn

- 테이블에서 하나의 열에 대한 정보를 담고 있음

DataRelation

- 두 테이블 사이에 관계 설정을 담고 있음

Constraint

- 테이블에서 값을 제어하는 규약을 담고 있음

DataSet으로 작업하기 방법1(Adapter에 SelectCommad 할당)

```csharp
string query = "select * from emp";
Console.WriteLine("1. Connenction 생성과 Open");
OracleConnection conn = new OracleConnection(conStr); 
conn.Open();
Console.WriteLine("2. OracleDataAdapter 생성");

OracleDataAdapter adapter = new OracleDataAdapter();
Console.WriteLine("3. Adapter에 SelectCommand 할당");

adapter.SelectCommand = new OracleCommand(query, conn);

Console.WriteLine("4. DataSet 생성");
DataSet ds = new DataSet();
Console.WriteLine("5. Adapter를 통해서 DataSet 채우기");
adapter.Fill(ds);
Console.WriteLine("6. Connection 닫기");
conn.Close();

```

DataSet으로 작업하기 방법2(CommandBuilder 생성)