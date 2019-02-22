/*
 * @Author: zFei 
 * @Date: 2019-02-22 22:42:48 
 * @Last Modified by: zFei
 * @Last Modified time: 2019-02-22 22:48:31
 * @function [用户接口]
 */

const Mongo = require('Mongodb-curd'); // 载入增删改查模块
let batabaseName = 'lemon1'; // 数据库
let collcationName = 'user'; // 用户集合
/**
 * [queryUser 查询用户接口]
 * 
 */
function queryUser(req, res, next) {
    Mongo.find(batabaseName, collcationName, {}, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    }, {
        skip: 0,
        limit: 0
    })
}





module.exports = {
    queryUser: queryUser
}