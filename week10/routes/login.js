import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

// login page에 rendering
router.get('/', async (req, res) => {
    res.render('login');
});

// 입력 받은 값과 db의 값을 비교하여 처리
router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;
    
    //user가 page에 입력한 값과 db의 값을 각각 비교하여 일치여부 확인
    users.map((user)=> {
        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password){
            console.log('login success!');
            checkLogin = true;
            if(vars.id === 'admin'){
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })
    // 일치여부에 따른 처리
    if(checkLogin && whoAmI === 'admin'){
        // /delete page로 이동
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'user'){
        // /select page로 이동
        res.redirect('/select');
    } else {
        // 불일치로 alert창 전시 후 login창으로 이동
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패하였습니다.'); location.href='/';</script>");
    }
    res.redirect('/select');
});

module.exports = router;