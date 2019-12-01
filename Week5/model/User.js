const aU = require('../module/utils/authUtil');
const sC = require('../module/utils/statusCode');
const rM = require('../module/utils/responseMessage');

const db = require('../module/db/pool');
const userData = require('../module/data/userData');


module.exports = {
    signin: (userId, userPwd) => {
        return new Promise(async (resolve, reject) => {
            // 유저가 존재하는지 체크
            /*
            const user = userData.find(it => it.id == id);
            console.log(user);

            if(!user) {
                resolve({
                    code: sC.BAD_REQUEST,
                    json: aU.successFalse(rM.NO_USER)
                });
                return;
            }
            */
            const getUserQuery = 'SELECT * FROM user WHERE userId = ? AND userPwd = ?';
            const getUserResult = await db.queryParam_Parse(getUserQuery, [userId, userPwd]);
            
            if(!getUserResult || getUserResult.length == 0) {
                const getUserIdQuery = 'SELECT * FROM user WHERE userId = ?';
                const getUserIdResult = await db.queryParam_Parse(getUserIdQuery, [userId]);
                const getUserPwdQuery = 'SELECT * FROM user WHERE userPwd = ?';
                const getUserPwdResult = await db.queryParam_Parse(getUserPwdQuery, [userPwd]);

                // 로그인 실패 1. 존재하지 않는 유저인 경우
                if(!getUserIdResult || getUserIdResult.length == 0)
                {
                    resolve({
                        code: sC.NOT_FOUND,
                        json: aU.successFalse(rM.NO_USER)
                    })
                    return;
                }

                else if(!getUserPwdResult || getUserPwdResult.length == 0)
                {
                    resolve({
                        code: sC.NOT_FOUND,
                        json: aU.successFalse(rM.MISS_MATCH_PW)
                    })
                    return;
                }

                else
                {
                    resolve({
                        code: sC.NOT_FOUND,
                        json: aU.successFalse(rM.SIGN_IN_FAIL)
                    });
                    return;
                }
            }

            // 로그인 성공
            resolve({
                code: sC.OK,
                json: aU.successTrue(rM.SIGN_IN_SUCCESS)
            });
        })
    },

    signup: (userId, userPwd) => {
        return new Promise(async (resolve, reject) => {
            // 아이디 중복 체크
            /*
            if(userData.filter(it => it.id == id).length > 0) {
                resolve({
                    code: sC.BAD_REQUEST,
                    json: aU.successFalse(rM.ALREADY_ID)
                });     
                return;
            }
            */
            const signupUserQuery = 'INSERT INTO user(userId, userPwd) VALUES(?, ?)';
            const signupUserResult = await db.queryParam_Parse(signupUserQuery, [userId, userPwd]);

            if(!signupUserResult || signupUserResult.length == 0) {
                resolve({
                    code: sC.NOT_FOUND,
                    json: aU.successFalse(rM.SIGN_UP_FAIL)
                });
                return;
            }

            resolve({
                code: sC.OK,
                json: aU.successTrue(rM.SIGN_UP_SUCCESS)
            });
        })
    }
}