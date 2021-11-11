import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: 'peng2626002!',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

// async / await 사용
const promisePool = pool.promise();

// select query
// 각 함수별 query문을 통해 table의 저장된 data값을 rows에 저장 후 return
export const selectSql = {
  getUsers : async () => {
    const [rows] = await promisePool.query(`select * from user`);
    console.log(rows)
    return rows
  },
  getDepartment : async () => {
    const [rows] = await promisePool.query(`select * from department`);
    console.log(rows)
    return rows
  },
  getProject : async () => {
    const [rows] = await promisePool.query(`select * from project`);
    console.log(rows)
    return rows
  },
}

// delete query
//data라는 객체 타입의 파라미터에 입력할 정보를 받아서 함수별 query문 생성
export const deleteSql = {
  deleteDepartment : async (data) => { 
    console.log('deleteSql.deleteDepartment:', data.Dnumber);
    const sql = `delete from department where Dnumber>3`;
    await promisePool.query(sql);
  },
  deleteProject : async (data) => { 
    console.log('deleteSql.deleteProject:', data.Pnum);
    const sql = `delete from project where Pnum = ${data.Pnum}`;
    await promisePool.query(sql);
  },
}
