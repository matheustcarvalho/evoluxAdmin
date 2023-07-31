const connection = require('../db');
const service = require('../service/service');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { email, senha } = req.body;

    console.log(req.body);

    try {
        const query = 'SELECT * FROM empresas WHERE email = ?';
        connection.query(query, [email], async (err, results) => {
            if (err) {
                console.error('Erro na consulta:', err);
                res.status(500).render('login', { status: 'error', message: 'Erro ao buscar usuário.' });
                return;
            }

            if (results.length === 0) {
                res.status(404).render('login', { status: 'error', message: 'Email não encontrado.' });
                return;
            }

            const user = results[0];
            const isPasswordValid = await bcrypt.compare(senha, user.senha);

            if (isPasswordValid) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    nome: user.nome,
                };

                res.redirect('/home');
            } else {
                res.status(401).render('login', { status: 'error', message: 'Senha incorreta.' });
            }
        });
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).render('login', { status: 'error', message: 'Erro ao fazer login.' });
    }
};



const register = async (req, res) => {
    const { senha } = req.body;

    try {
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(senha, salt);

        const userData = {
            ...req.body,
            senha: hashedPassword
        };

        const query = 'INSERT INTO empresas SET ?';
        connection.query(query, userData, (err, result) => {
            if (err) {
                console.error('Erro na inserção:', err);
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'Fornecedor adicionado com sucesso!' });
                console.log('Salvo')
            }
        });
    } catch (err) {
        console.error('Erro na criptografia da senha:', err);
        res.status(500).send('Erro ao criptografar a senha.');
    }
};

// Middleware de autenticação
const requireAuthentication = (req, res, next) => {

    if (req.session && req.session.user && req.session.user.id) {
        next();
    } else {
        res.redirect('/');
    }
};

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            res.status(500).send('Erro ao fazer logout.');
        } else {
            res.redirect('/');
        }
    });
};


module.exports = {
    login,
    register,
    requireAuthentication,
    logout

};