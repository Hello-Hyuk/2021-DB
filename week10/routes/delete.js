import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    // selectsql의 get 함수를 이용하여 data를 DB에서 불러오기
    //const department = await selectSql.getDepartment(); 
    const project = await selectSql.getProject();
    
    
    res.render('delete', {
        title: '삭제 기능',
        //department
        project
    });
    // data를 보여줄 page에 보냄    
});

router.post('/', async (req,res)=>{
    console.log('delete router:', req.body.delBtn);
    const data = {
        //Dnumber: req.body.delBtn,
        Pnum: req.body.delBtn,
    };
    
    // deleteSql의 deleteProject 함수를 이용하여 data 삭제
    //await deleteSql.deleteDepartment(data);
    await deleteSql.deleteProject(data);
    
    res.redirect('/delete');
    // /delete 화면 다시 연결 (갱신)
});

module.exports = router;