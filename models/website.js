var knex = require('./knex');

module.exports={
    // create:function (input) {
    //     console.log('before insert');
    //     console.log(input)
    //     return knex('websites').insert([
    //         { name: input}
    //       ])
          

    // },
    create:function (user) {
        console.log('before insert');
        console.log(user)
         knex('websites').insert(user,'id').returning('id')
        .then(([id]) => console.log(id))
        
    }
}
   