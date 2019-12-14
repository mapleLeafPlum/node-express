let mysql = require("mysql");

function connect() {
    let connection = mysql.createConnection({
        host: '192.168.1.12',
        user: 'uhome',
        password: 'uhome110',
        database: 'uhome'
    });
    connection.connect(function () {
        console.log('connect successful')
    });
    return connection;
}

function get(param,callback) {
    connect().query('SELECT * from tb_uhome_admin_user where USER_ID=?',[param.userId], function (error, result, fields) {
        console.log(fields);
        if (error) throw error;
        callback(result);
    });
}

function list(param,callback) {
    connect().query('SELECT * from tb_uhome_admin_user limit ?',[param.limit], function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

function update(param,callback) {
    connect().query('update tb_uhome_admin_user set name=? where user_id=?',[param.name,param.userId], function (error, result, fields) {
        console.log(fields);
        if (error) throw error;
        callback(result);
    });
}

function insert(param,callback) {
    connect().query('insert into tb_uhome_admin_user(user_id,pwd,type,status,job_number,syn_time) values(?,?,?,?,?,?)', [param.user_id,param.pwd,param.type,param.status,param.job_number,param.syn_time],function (error, result, fields) {
        console.log(fields);
        if (error) throw error;
        callback(result);
    });
}

function save(param,callback) {
    connect().query('insert into tb_uhome_admin_user set ?', param,function (error, result, fields) {
        console.log(fields);
        if (error) throw error;
        callback(result);
    });
}

function deleteUser(param,callback) {
    connect().query('delete from tb_uhome_admin_user where user_id=?', [param.userId],function (error, result, fields) {
        console.log(fields);
        if (error) throw error;
        callback(result);
    });
}

exports.get = get;
exports.list = list;
exports.update = update;
exports.insert = insert;
exports.delete = deleteUser;
exports.save = save;