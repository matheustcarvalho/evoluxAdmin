const connection = require('../db');
const service = require('../service/service');

//GET
const index = (req, res) => {
      res.render('index'); 
};

const pagar = (req, res) => {
  res.render('pagar');
};

const receber = (req, res) => {
  res.render('receber');
};

const fornecedores = (req, res) => {
  res.render('fornecedores');
};

const clientes = (req, res) => {
  res.render('clientes');
};

const tipoPagamento = (req, res) => {
  res.render('tipoPagamento');
};

const tipoRecebimento = (req, res) => {
  res.render('tipoRecebimento');
};

const login = (req, res) => {
  res.render('login');
};

const cadastro = (req, res) => {
  res.render('cadastro');
};

const fornecedoresList = (req, res) => {
  service.getFornecedores((err, users) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      console.log(users);
      res.json(users)
    }
  });
};

const clientesList = (req, res) => {
  service.getClientes((err, users) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      console.log(users);
      res.json(users)
    }
  });
};

const tiposPagamengoList = (req, res) => {
  service.getTiposPagamento((err, users) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      console.log(users);
      res.json(users)
    }
  });
};

const tiposRecebimentoList = (req, res) => {
  service.getTiposRecebimento((err, users) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      console.log(users);
      res.json(users)
    }
  });
};

const contasPagarList = (req, res) => {
  service.getContasPagar((err, users) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      console.log(users);
      res.json(users)
    }
  });
};


//POST

const adicionarTipoPagamento = (req, res) => {
  const userData = req.body;
  const dataAtual = new Date();
  userData.registro = dataAtual;
  userData.status = 'A';
  console.log(userData)

  service.adicionarTipoPagamento(userData, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: 'Pagamento adicionado com sucesso!' });
    }
  });
};


const adicionarTipoRecebimento = (req, res) => {
  const userData = req.body;
  const dataAtual = new Date();
  userData.registro = dataAtual;
  userData.status = 'A';
  console.log(userData)

  service.adicionarTipoRecebimento(userData, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: 'Tipo de Recebimento adicionado com sucesso!' });
    }
  });
};

const adicionarFornecedor = (req, res) => {
  const userData = req.body;
  console.log(userData)

  service.adicionarFornecedor(userData, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: 'Fornecedor adicionado com sucesso!' });
    }
  });
};

const adicionarCliente = (req, res) => {
  const userData = req.body;
  console.log(userData)

  service.adicionarCliente(userData, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: 'Cliente adicionado com sucesso!' });
    }
  });
};

const adicionarContaPagar = (req, res) => {
  const userData = req.body;
  const dataAtual = new Date();
  userData.registro = dataAtual;
  console.log(userData)

  service.adicionarContaPagar(userData, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: 'Conta adicionada com sucesso!' });
    }
  });
};

const adicionarContaReceber = (req, res) => {
  const userData = req.body;
  const dataAtual = new Date();
  userData.registro = dataAtual;
  userData.status = 'A';
  console.log(userData)

  service.adicionarContaReceber(userData, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: 'Conta adicionada com sucesso!' });
    }
  });
};

const editarFornecedor = (req, res) => {
  const userData = req.body;
  const idFornecedor = req.body.id;
  userData.status = 'A';
  service.editarFornecedor(idFornecedor, userData, (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
    } else {
      console.log('Fornecedor atualizado com sucesso:', result);
      res.status(200).json({ message: 'Fornecedor atualizado com sucesso' });
    }
  });
};

const deleteFornecedor = (req, res) => {
  const userData = req.body;
  const idFornecedor = req.body.id;
  userData.status = 'I';
  service.deleteFornecedor(idFornecedor, userData, (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
    } else {
      console.log('Fornecedor atualizado com sucesso:', result);
      res.status(200).json({ message: 'Fornecedor deletado!' });
    }
  });
};

const editarCliente = (req, res) => {
  const userData = req.body;
  const idCliente = req.body.id;
  userData.status = 'A';
  console.log(userData)
  service.editarCliente(idCliente, userData, (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      res.status(500).json({ error: 'Erro ao atualizar CidCliente' });
    } else {
      console.log('Cliente atualizado com sucesso:', result);
      res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    }
  });
};

const deleteCliente = (req, res) => {
  const userData = req.body;
  const idCliente = req.body.id;
  userData.status = 'I';
  service.deleteCliente(idCliente, userData, (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      res.status(500).json({ error: 'Erro ao atualizar Cliente' });
    } else {
      console.log('Cliente atualizado com sucesso:', result);
      res.status(200).json({ message: 'Cliente deletado!' });
    }
  });
};

const deleteTipoPagamento = (req, res) => {
  const userData = req.body;
  const idTipo = req.body.id;
  userData.status = 'I';
  service.deleteTipoPagamento(idTipo, userData, (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      res.status(500).json({ error: 'Erro ao atualizar Tipo' });
    } else {
      console.log('Tipo atualizado com sucesso:', result);
      res.status(200).json({ message: 'Tipo deletado!' });
    }
  });
};

const deleteTipoRecebimento = (req, res) => {
  const userData = req.body;
  const idTipo = req.body.id;
  userData.status = 'I';
  service.deleteTipoRecebimento(idTipo, userData, (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      res.status(500).json({ error: 'Erro ao atualizar Tipo' });
    } else {
      console.log('Tipo atualizado com sucesso:', result);
      res.status(200).json({ message: 'Tipo deletado!' });
    }
  });
};


module.exports = {
  index,
  pagar,
  receber,
  fornecedores,
  clientes,
  tipoPagamento,
  tipoRecebimento,
  login,
  cadastro,
  adicionarTipoPagamento,
  adicionarTipoRecebimento,
  adicionarFornecedor,
  adicionarCliente,
  adicionarContaPagar,
  adicionarContaReceber,
  fornecedoresList,
  editarFornecedor,
  deleteFornecedor,
  clientesList,
  editarCliente,
  deleteCliente,
  tiposPagamengoList,
  deleteTipoPagamento,
  tiposRecebimentoList,
  deleteTipoRecebimento,
  contasPagarList

};