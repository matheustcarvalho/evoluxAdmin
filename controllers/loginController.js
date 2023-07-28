const connection = require('../db');
const service = require('../service/service');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const login = async (req, res) => {

    const { username, password } = req.body;

    try {
        // Aqui você obteria a senha criptografada armazenada no banco de dados para o usuário com o nome de usuário fornecido
        // (Lembre-se de que em uma aplicação real, você precisaria buscar essas informações no banco de dados)

        // Para fins de demonstração, estou usando uma senha criptografada hardcoded
        const hashedPasswordFromDB = '$2b$10$Xv4czxK9OkKGo0Ltzp6adOQD18LJJQhm0pKwT0mu6nwtbb2S64HzO';

        // Verificar a senha fornecida pelo usuário com a senha criptografada do banco de dados
        const isPasswordValid = await bcrypt.compare(password, hashedPasswordFromDB);

        if (isPasswordValid) {
            // A senha está correta, portanto, você pode permitir o login do usuário
            req.session.username = username;
            res.redirect('/dashboard');
        } else {
            // A senha está incorreta
            res.send('Credenciais inválidas. Tente novamente.');
        }
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).send('Erro ao fazer login.');
    }

};


const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Gerar um salt (uma sequência aleatória para adicionar à senha)
        const salt = await bcrypt.genSalt(saltRounds);

        // Criptografar a senha usando o salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Salvar o nome de usuário e a senha criptografada no banco de dados
        // (Lembre-se de que em uma aplicação real, você precisaria armazenar essas informações em um banco de dados)
        console.log('Nome de usuário:', username);
        console.log('Senha criptografada:', hashedPassword);

        res.send('Usuário registrado com sucesso!');
    } catch (err) {
        console.error('Erro no registro:', err);
        res.status(500).send('Erro ao registrar o usuário.');
    }

};

module.exports = {
    login,
    register
  
  };