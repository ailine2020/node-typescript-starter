  
import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

import { typeORMConfig } from './app/database/typeorm'

console.log(typeORMConfig);

createConnection(typeORMConfig).then(_conn => {
    createServer();
})

// createConnection({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: process.env.PASSWORD_MYSQL,
//   database: "skill_tree_dev",
//   synchronize: true,
//   logging: true,
//   entities: [User,Skill,Category],
// }).then((_conn) => {
//   console.log("connection established");
// });


