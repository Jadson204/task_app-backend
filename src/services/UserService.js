const { cadastrarUsuario, alterarUsuario } = require('../controllers/UserController');
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM users', (error, results)=>{
                if(error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarUm: (email) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM users WHERE email = ?', [email], (error, results)=>{
                if(error) {
                    rejeitado(error);
                    return;
                } if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    cadastrarUsuario: (email, password, age, username) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO users (email, password, age, username) VALUES (?, ?, ?, ?)', 
            [email, password, age, username], 
            (error, results)=>{
                if(error) {
                    rejeitado(error);
                    return;
                } else {
                    aceito(results);
                    return;
                }
            });
        });
    },

    alterarUsuario: (email, password, age, username) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE users SET password = ?, age = ?, username = ? WHERE email = ?', 
            [password, age, username, email], 
            (error, results)=>{
                if(error) {
                    rejeitado(error);
                    return;
                } else {
                    aceito(results);
                    return;
                }
            });
        });
    },

    excluirUsuario: (email) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM users WHERE email = ?', [email], (error, results)=>{
                if(error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};