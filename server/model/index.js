 // the connection!
 const knex = require('../db')

 module.exports = {
   async select() {
     //return knex('sticker');
     return await knex.select('*').from('contacts');
   },
   insert(data) {
     return knex('contacts').insert(data, '*');
   }
 }