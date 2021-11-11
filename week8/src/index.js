import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
// views 내부의 hbs 사용

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/update', updateRouter);
app.use('/select',selectRouter);
//router를 이용하여 다른 페이지 접속 허가

    app.listen(PORT, () => {
        console.log('Example app listening at http://localhost:${PORT}')
    })
    // 자신의 Port로 접속을 허가 (접속 대기)



