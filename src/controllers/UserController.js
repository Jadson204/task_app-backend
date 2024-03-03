const UserService = require('../services/UserService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let usuarios = await UserService.buscarTodos();

        for(let i in usuarios) {
            json.result.push({
                email: usuarios[i].email,
                password: usuarios[i].password,
                age: usuarios[i].age,
                username: usuarios[i].username
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let email = req.params.email;
        let usuario = await UserService.buscarUm(email);

        if(usuario) {
            json.result = usuario;
        }

        res.json(json);
    },

    cadastrarUsuario: async(req, res) => {
        let json = {error:'', result:{}};

        let email = req.body.email;
        let password = req.body.password;
        let age = req.body.age;
        let username = req.body.username;


        if(email && password && age && username) {
            let usuario = await UserService.cadastrarUsuario(email, password, age, username);
            json.result = {
                email,
                password,
                username,
                age
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterarUsuario: async(req, res) => {
        let json = {error:'', result:{}};

        let email = req.params.email;
        let password = req.body.password;
        let age = req.body.age;
        let username = req.body.username;


        if(email && password && age && username) {
            await UserService.alterarUsuario(email, password, age, username);
            json.result = {
                email,
                password,
                username,
                age
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluirUsuario: async(req, res) => {
        let json = {error:'', result:{}};
        await UserService.alterarUsuario(req.params.email);
    }
}