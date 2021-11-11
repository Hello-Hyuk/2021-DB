import mysql from "mysql2";

// database connection
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'peng2626002!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async/awiat 사용
const promisePool = pool.promise();

//select query 부분
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query('select * from employee');
        // Update page에서 employee의 목록들을 보이게한다.
        console.log(rows)
        // query문 입력
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query('select * from department');
        return rows
    },
}

//insert query 부분
export const insertSql = {
    // data를 인자로 받아 query에 저장
    // employee insert
    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
            
            await promisePool.query(sql);
    },

    //department insert
    setDepartment : async (data) => {
        const sql = `insert into department values ("${data.Dname}", "${data.Dnumber}",  "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;
            
            await promisePool.query(sql);
    },
}

// update query 부분
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건을 통해 update 
        const sql = `update employee set salary = "${data.Salary}" where Fname = "최"`;
        await promisePool.query(sql);
    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = "${data.Dnumber}"`;
        await promisePool.query(sql);
    },
}




