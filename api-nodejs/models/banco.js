/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: '104.236.59.135',
    //host: '127.0.0.1',
    user: 'chucrute-testes',
    password: 'chucrute-testes',
    database: 'TESTES-HORTAPP',
    charset: 'utf8',
	timezone: 'utc'  //<-here this line was missing
  },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: 20
  }
});
