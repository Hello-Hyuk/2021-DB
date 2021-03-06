# 2021-02-database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:Hello-Hyuk/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/Hello-Hyuk/2021-02-database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석부분)
<pre>
<code>
const pool = mysql.createPool{
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', //본인의 mysql user id
        database: 'tutorial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimitL 0
    }
};
</code>
</pre>

<br>

## <span style="color:cyan">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.
<br><br>

## **3주차 테이블**
### create user table
```sql
create table user(
    StudentNumber int not null,
    Name char(20) not null,
    Grade int not null,
    Major char(30) not null,
    Mail char(30) not null,
    PRIMARY KEY(StudnetNumber)
);
```
### Insert data result

StudentNumber|Name|Grade|Major|Mail|
---|---|---|---|---|
12171111|Hello-Hyuk|3|ICE|jay@inha.edu|
12172222|Hello-Jay|3|ICE|hyuk@inha.edu|
<br>

## **8주차 테이블**
### create department table
```sql
create table department(
    Dname varchar(15) not null UNIQUE,
    Dnumber int not null,
    Mgr_ssn char(9) not null,
    Mgr_start_date date,
    PRIMARY KEY (Dnumber)
);
```
### Insert data result
Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
ICE|1|12171111|2021-11-11|
CS|2|12172222|2021-12-10|
PHY|3|12173333|2021-01-19|
<br>

### create employee table
```sql
create table employee(
    Fname varchar(10) not null,
    Minit char(1),
    Lname varchar(20) not null,
    Ssn char(9) not null,
    Bdate date,
    Address varchar(30),
    Sex char(1),
    Salary char(9),
    Dno int not null,
    PRIMARY KEY(Ssn)
);
```
### Insert data result
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|---|
김|C|이박|12171111|1999-02-02|서울|남|1200|12172222|1|
최|C|이박|12172222|1998-02-02|경기|남|1800||2|
강|C|이박|12173333|1999-02-02|서울|남|1200|12172222|1|
<br>

## **10주차 테이블**
### create department table
```sql
create table department(
    Dname varchar(15) not null UNIQUE,
    Dnumber int not null,
    PRIMARY KEY (Dnumber)
);
```
### Insert data result
Dname|Dnumber|
---|---|
ICE|1|
CS|2|
<br>

### create project table
```sql
create table project(
    Pname varchar(10) not null,
    Pnumber int not null,
    PRIMARY KEY (Pnumber)
);
```
### Insert data result
Pname|Pnumber|
---|---|
VIP|0|
CV|1|
DB|3|
<br>

### create department table
```sql
create table user(
    Id varchar(20) not null,
    Password varchar(20) not null,
    Role varchar(5) not null,
    PRIMARY KEY (Id)
);
```
### Insert data result
Id|Password|Role|
---|---|---|
admin|admin1234|admin
user1|user123|users
<br>
