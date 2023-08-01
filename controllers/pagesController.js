const connection = require('../db');
const service = require('../service/service');
const bcrypt = require('bcrypt');

//GET
const index = (req, res) => {
  let nome = req.session.user.nome
  res.render('index', {nome}); 
};

const pagar = (req, res) => {
  let nome = req.session.user.nome
  res.render('pagar', {nome});
};

const receber = (req, res) => {
  let nome = req.session.user.nome
  res.render('receber', {nome});
};

const fornecedores = (req, res) => {
  let nome = req.session.user.nome
  res.render('fornecedores', {nome});
};

const clientes = (req, res) => {
  let nome = req.session.user.nome
  res.render('clientes', {nome});
};

const tipoPagamento = (req, res) => {
  let nome = req.session.user.nome
  res.render('tipoPagamento', {nome});
};

const tipoRecebimento = (req, res) => {
  let nome = req.session.user.nome
  res.render('tipoRecebimento', {nome});
};

const login = (req, res) => {
  res.render('login');
  console.log(req.session)
};

const cadastro = (req, res) => {
  res.render('cadastro');
};

const fornecedoresList = (req, res) => {
  let id = req.session.user.id;
  service.getFornecedores(id, (err, users) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(users)
    }
  });
};

const clientesList = (req, res) => {
  let id = req.session.user.id;
  try {
    service.getClientes(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const tiposPagamengoList = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getTiposPagamento(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const tiposRecebimentoList = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getTiposRecebimento(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const contasPagarList = (req, res) => {
  try {
    let vencimentoIni = req.body.vencimentoIni;
    let vencimentoFim = req.body.vencimentoFim;
    let tipo = req.body.tipo;
    let valorMin = req.body.valorMin;
    let valorMax = req.body.valorMax;
    let status = req.body.status;
    let id = req.session.user.id;

    service.getContasPagar(id, vencimentoIni, vencimentoFim, tipo, valorMin, valorMax, status, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const contasReceberList = (req, res) => {
  try {
    let vencimentoIni = req.body.vencimentoIni;
    let vencimentoFim = req.body.vencimentoFim;
    let tipo = req.body.tipo;
    let valorMin = req.body.valorMin;
    let valorMax = req.body.valorMax;
    let status = req.body.status;
    let id = req.session.user.id;

    service.getContasReceber(id, vencimentoIni, vencimentoFim, tipo, valorMin, valorMax, status, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const valorPagarHojeList = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getValorPagarHoje(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const valorReceberHojeList = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getValorReceberHoje(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const faturamentoMesList = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getFaturamentoMes(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const despesaMesList = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getDespesaMes(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const despesaGrafico = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getDespesaGrafico(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


const faturamentoGrafico = (req, res) => {
  try {
    let id = req.session.user.id;
    service.getFaturamentoGrafico(id, (err, users) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(users);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro inesperado." });
  }
};


//POST

const adicionarTipoPagamento = (req, res) => {
  try {
    const userData = req.body;
    const dataAtual = new Date();
    const id = req.session.user.id;
    userData.idEmpresa = id;
    userData.registro = dataAtual;
    userData.status = 'A';
    console.log(userData);

    service.adicionarTipoPagamento(userData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: 'Pagamento adicionado com sucesso!' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
};


const adicionarTipoRecebimento = (req, res) => {
  try {
    const userData = req.body;
    const dataAtual = new Date();
    const id = req.session.user.id;
    userData.idEmpresa = id;
    userData.registro = dataAtual;
    userData.status = 'A';
    console.log(userData);

    service.adicionarTipoRecebimento(userData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: 'Tipo de Recebimento adicionado com sucesso!' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
};


const adicionarFornecedor = (req, res) => {
  try {
    const userData = req.body;
    const id = req.session.user.id;
    userData.idEmpresa = id;
    userData.status = "A";
    console.log(userData);

    service.adicionarFornecedor(userData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: 'Fornecedor adicionado com sucesso!' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
};


const adicionarCliente = (req, res) => {
  try {
    const userData = req.body;
    const id = req.session.user.id;
    userData.idEmpresa = id;
    userData.status = 'A';
    console.log(userData);

    service.adicionarCliente(userData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: 'Cliente adicionado com sucesso!' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
};


const adicionarContaPagar = (req, res) => {
  try {
    const userData = req.body;
    const dataAtual = new Date();
    const id = req.session.user.id;
    userData.idEmpresa = id;
    userData.registro = dataAtual;
    if (userData.status === 'P') {
      userData.baixa = dataAtual;
    }
    console.log(userData);

    service.adicionarContaPagar(userData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: 'Conta adicionada com sucesso!' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
};


const adicionarContaReceber = (req, res) => {
  try {
    const userData = req.body;
    const dataAtual = new Date();
    const id = req.session.user.id;
    userData.idEmpresa = id;
    userData.registro = dataAtual;
    if (userData.status === 'R') {
      userData.baixa = dataAtual;
    }
    console.log(userData);

    service.adicionarContaReceber(userData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: 'Conta adicionada com sucesso!' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
};


const editarFornecedor = (req, res) => {
  try {
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
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a atualização do fornecedor' });
  }
};


const deleteFornecedor = (req, res) => {
  try {
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
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a exclusão do fornecedor' });
  }
};


const editarCliente = (req, res) => {
  try {
    const userData = req.body;
    const idCliente = req.body.id;
    userData.status = 'A';
    console.log(userData);

    service.editarCliente(idCliente, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao atualizar Cliente' });
      } else {
        console.log('Cliente atualizado com sucesso:', result);
        res.status(200).json({ message: 'Cliente atualizado com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a atualização do cliente' });
  }
};


const deleteCliente = (req, res) => {
  try {
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
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a exclusão do cliente' });
  }
};


const deleteTipoPagamento = (req, res) => {
  try {
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
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a exclusão do tipo' });
  }
};


const deleteTipoRecebimento = (req, res) => {
  try {
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
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a exclusão do tipo' });
  }
};


const editarContaPagar = (req, res) => {
  try {
    const userData = req.body;
    const idConta = req.body.id;
    if (req.body.status === 'A') {
      userData.baixa = null;
    }
    console.log(userData);

    service.editarContaPagar(idConta, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao atualizar Conta' });
      } else {
        console.log('Conta atualizada com sucesso:', result);
        res.status(200).json({ message: 'Conta atualizada com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a atualização da conta' });
  }
};


const deleteContaPagar = (req, res) => {
  try {
    const userData = req.body;
    const idConta = req.body.id;
    const dataAtual = new Date();
    userData.baixa = dataAtual;
    userData.status = 'D';
    console.log(userData);

    service.deleteContaPagar(idConta, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao atualizar conta' });
      } else {
        console.log('Tipo atualizado com sucesso:', result);
        res.status(200).json({ message: 'Conta deletada!' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a exclusão da conta' });
  }
};


const baixarContaPagar = (req, res) => {
  try {
    const userData = req.body;
    const idConta = req.body.id;
    const dataAtual = new Date();
    userData.baixa = dataAtual;
    userData.status = 'P';
    console.log(userData);

    service.baixarContaPagar(idConta, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao baixar conta' });
      } else {
        console.log('Tipo atualizado com sucesso:', result);
        res.status(200).json({ message: 'Conta baixada!' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a baixa da conta' });
  }
};


const editarContaReceber = (req, res) => {
  try {
    const userData = req.body;
    const idConta = req.body.id;
    if (req.body.status === 'A') {
      userData.baixa = null;
    }
    console.log(userData);

    service.editarContaReceber(idConta, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao atualizar Conta' });
      } else {
        console.log('Conta atualizada com sucesso:', result);
        res.status(200).json({ message: 'Conta atualizada com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a atualização da conta' });
  }
};


const deleteContaReceber = (req, res) => {
  try {
    const userData = req.body;
    const idConta = req.body.id;
    const dataAtual = new Date();
    userData.baixa = dataAtual;
    userData.status = 'D';
    console.log(userData);

    service.deleteContaReceber(idConta, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao deletar conta' });
      } else {
        console.log('Atualizado com sucesso:', result);
        res.status(200).json({ message: 'Conta deletada!' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a exclusão da conta' });
  }
};


const baixarContaReceber = (req, res) => {
  try {
    const userData = req.body;
    const idConta = req.body.id;
    const dataAtual = new Date();
    userData.baixa = dataAtual;
    userData.status = 'R';
    console.log(userData);

    service.baixarContaReceber(idConta, userData, (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).json({ error: 'Erro ao baixar conta' });
      } else {
        console.log('Tipo atualizado com sucesso:', result);
        res.status(200).json({ message: 'Conta baixada!' });
      }
    });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Ocorreu um erro inesperado durante a baixa da conta' });
  }
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
  contasPagarList,
  editarContaPagar,
  deleteContaPagar,
  baixarContaPagar,
  contasReceberList,
  editarContaReceber,
  deleteContaReceber,
  baixarContaReceber,
  valorPagarHojeList,
  valorReceberHojeList,
  faturamentoMesList,
  despesaMesList,
  despesaGrafico,
  faturamentoGrafico

};