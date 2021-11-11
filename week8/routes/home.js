import express from "express";
import {insertSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length;
    // Data 길이가 4보다 크면 Employee, 아니면 Department

    if (var_lenth > 4){
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        // home.hbs에서 받은 변수들을 data로 저장
        insertSql.setEmployee(data);   
        // 저장한 data를 insertSql의 employee set 함수를 통해 DB에 저장

    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        // home.hbs에서 받은 변수들을 data로 저장
        insertSql.setDepartment(data);
        // 저장한 data를 insertSql의 employee set 함수를 통해 DB에 저장
    }
    
    res.redirect('/');
})

module.exports = router;