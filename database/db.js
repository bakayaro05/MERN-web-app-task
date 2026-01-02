import {DatabaseSync} from 'node:sqlite'
const db= new DatabaseSync(':memory:')

db.exec(`
    
      CREATE TABLE contacts (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT ,
           email TEXT ,
           
           phone INTEGER,
           message TEXT

    )
    
    `)

export default db