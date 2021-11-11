import express from "express";
import {selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res){
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
    // selectsql의 get 함수를 이용하여 data를 DB에서 불러오기
    
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
    // data를 보여줄 page에 보냄
});

module.exports = router;
