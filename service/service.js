const connection = require('../db');


const adicionarTipoPagamento = (userData, callback) => {
    const query = 'INSERT INTO tipoPagamento SET ?';
    connection.query(query, userData, (err, result) => {
      if (err) {
        console.error('Erro na inserção:', err);
        callback('Erro ao adicionar', null);
      } else {
        callback(null, result);
        console.log('salvo com sucesso')
      }
    });
  }; 

const adicionarTipoRecebimento = (userData, callback) => {
  const query = 'INSERT INTO tipoRecebimento SET ?';
  connection.query(query, userData, (err, result) => {
      if (err) {
        console.error('Erro na inserção:', err);
        callback('Erro ao adicionar', null);
      } else {
        callback(null, result);
        console.log('salvo com sucesso')
      }
    });
  };
  
const adicionarFornecedor = (userData, callback) => {
    const query = 'INSERT INTO fornecedores SET ?';
    connection.query(query, userData, (err, result) => {
      if (err) {
        console.error('Erro na inserção:', err);
        callback('Erro ao adicionar', null);
      } else {
        callback(null, result);
        console.log('salvo com sucesso')
      }
    });
  };
  
  const adicionarCliente = (userData, callback) => {
    const query = 'INSERT INTO clientes SET ?';
    connection.query(query, userData, (err, result) => {
      if (err) {
        console.error('Erro na inserção:', err);
        callback('Erro ao adicionar', null);
      } else {
        callback(null, result);
        console.log('salvo com sucesso')
      }
    });
  };
  
const adicionarContaPagar = (userData, callback) => {
  //STATUS A = ABERTO, P = PAGO, D = DELETADO
  const query = 'INSERT INTO contasPagar SET ?';
    connection.query(query, userData, (err, result) => {
      if (err) {
        console.error('Erro na inserção:', err);
        callback('Erro ao adicionar', null);
      } else {
        callback(null, result);
        console.log('salvo com sucesso')
      }
    });
  };

  const adicionarContaReceber = (userData, callback) => {
    //STATUS A = ABERTO, R = RECEBIDO, D = DELETADO
      const query = 'INSERT INTO contasReceber SET ?';
      connection.query(query, userData, (err, result) => {
        if (err) {
          console.error('Erro na inserção:', err);
          callback('Erro ao adicionar', null);
        } else {
          callback(null, result);
          console.log('salvo com sucesso')
        }
      });
    };
    
  const getFornecedores = (callback) => {
    //STATUS A = ATIVO, I = INATIVO
      const query = 'SELECT * FROM fornecedores WHERE status = "A" ';
      connection.query(query, (err, rows) => {
        if (err) {
          console.error('Erro na consulta:', err);
          callback('Erro ao buscar', null);
        } else {
          callback(null, rows);
        }
      });
    };

  const editarFornecedor = (idFornecedor, userData, callback) => {
      const query = 'UPDATE fornecedores SET ? WHERE id = ?';
      connection.query(query, [userData, idFornecedor], (err, result) => {
        if (err) {
          console.error('Erro na atualização:', err);
          callback('Erro ao atualizar', null);
        } else {
          callback(null, result);
          console.log('atualizado com sucesso');
        }
      });
  };

  const deleteFornecedor = (idFornecedor, userData, callback) => {
    const query = 'UPDATE fornecedores SET ? WHERE id = ?';
    connection.query(query, [userData, idFornecedor], (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        callback('Erro ao atualizar', null);
      } else {
        callback(null, result);
        console.log('atualizado com sucesso');
      }
    });
};

const getClientes = (callback) => {
  //STATUS A = ATIVO, I = INATIVO
    const query = 'SELECT * FROM clientes WHERE status = "A" ';
    connection.query(query, (err, rows) => {
      if (err) {
        console.error('Erro na consulta:', err);
        callback('Erro ao buscar', null);
      } else {
        callback(null, rows);
      }
    });
  };

const editarCliente = (idCliente, userData, callback) => {
    const query = 'UPDATE clientes SET ? WHERE id = ?';
    connection.query(query, [userData, idCliente], (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        callback('Erro ao atualizar', null);
      } else {
        callback(null, result);
        console.log('atualizado com sucesso');
      }
    });
};

const deleteCliente = (idCliente, userData, callback) => {
  const query = 'UPDATE clientes SET ? WHERE id = ?';
  connection.query(query, [userData, idCliente], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const getTiposPagamento = (callback) => {
  //STATUS A = ATIVO, I = INATIVO
    const query = 'SELECT * FROM tipoPagamento WHERE status = "A" ';
    connection.query(query, (err, rows) => {
      if (err) {
        console.error('Erro na consulta:', err);
        callback('Erro ao buscar', null);
      } else {
        callback(null, rows);
      }
    });
  };

const deleteTipoPagamento = (idTipo, userData, callback) => {
    const query = 'UPDATE tipoPagamento SET ? WHERE id = ?';
    connection.query(query, [userData, idTipo], (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        callback('Erro ao atualizar', null);
      } else {
        callback(null, result);
        console.log('Tipo inativado');
      }
    });
};

const getTiposRecebimento = (callback) => {
  //STATUS A = ATIVO, I = INATIVO
    const query = 'SELECT * FROM tipoRecebimento WHERE status = "A" ';
    connection.query(query, (err, rows) => {
      if (err) {
        console.error('Erro na consulta:', err);
        callback('Erro ao buscar', null);
      } else {
        callback(null, rows);
      }
    });
  };

const deleteTipoRecebimento = (idTipo, userData, callback) => {
    const query = 'UPDATE tipoRecebimento SET ? WHERE id = ?';
    connection.query(query, [userData, idTipo], (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        callback('Erro ao atualizar', null);
      } else {
        callback(null, result);
        console.log('Tipo inativado');
      }
    });
};

const getContasPagar = (callback) => {
    const query = `SELECT f.nome as fornecedor, f.cnpj, c.vencimento, c.valor , c.status FROM evolux.contasPagar as c
    JOIN fornecedores as f on f.id = c.idFornecedor where c.status in ('A', 'P')`;
    connection.query(query, (err, rows) => {
      if (err) {
        console.error('Erro na consulta:', err);
        callback('Erro ao buscar', null);
      } else {
        callback(null, rows);
      }
    });
  };

    

    
module.exports = {
  getFornecedores,
  adicionarTipoPagamento,
  adicionarTipoRecebimento,
  adicionarFornecedor,
  adicionarCliente,
  adicionarContaPagar,
  adicionarContaReceber,
  editarFornecedor,
  deleteFornecedor,
  getClientes,
  editarCliente,
  deleteCliente,
  getTiposPagamento,
  deleteTipoPagamento,
  getTiposRecebimento,
  deleteTipoRecebimento,
  getContasPagar
};
