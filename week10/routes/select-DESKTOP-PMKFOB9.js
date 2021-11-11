import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const department = await selectSql.getDepartment(); 
    // selectsql의 get 함수를 이용하여 data를 DB에서 불러오기
    
    res.render('select', {
        title: 'IT 공대',
        department
    });
    // data를 보여줄 page에 보냄    
});

module.exports = router;