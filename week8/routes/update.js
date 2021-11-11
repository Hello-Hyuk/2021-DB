import express from "express";
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

// updateDepartment와 updateEmployee를 위한 js


// 기존의 입력 값 불러오기
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    });
    /////////////////////////////////
});



// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => {
    const vars = req.body;
// salary를 원하는 값으로 수정하기 위해 input으로 data에 넣고 그 data를 
// updateEmployee 함수에 넣어준다.    
    console.log(vars.salary);
    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);
    res.redirect('/select');
// 변화된 모습을 보기 위해 /select으로 이동
});


router.post('/department', async (req, res) => {
    const vars = req.body;
    console.log(vars.dname);
    console.log(vars.dnumber);
    const data = {
        Dname: vars.dname,
        Dnumber: vars.dnumber
    }
    await updateSql.updateDepartment(data);
// 마찬가지로 학과의 이름을 원하는 값으로 수정하기 위해 data의 값을 넘겨준다.
// where을 만족시키기 위해 dnumber도 함께 넘겨주는 모습이다.    
    res.redirect('/select');
});

module.exports = router;











