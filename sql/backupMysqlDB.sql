mysqldump --routines=true -u root -p inventory
>d:/backup.sql


------------------------------------------------------------
1.on Machine A(generate the dump without the data)

mysqldump -uuser -ppass --no-data --databases db1 db2 db3 > database_structure.sql
using mysqldump with --no-data will generate the dump without the data.

if you want only data dump do as(It will not contain the create statements)

mysqldump -uuser -ppass --no-create-info --databases db1 db2 db3 > database_data.sql
2.copy the database_structure.sql on Machine B

Then you want to restore its structure on Machine B do

3.mysql -uuser -ppass < database_structure.sql

Then you have database structure available on the Machine B.