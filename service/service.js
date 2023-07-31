const connection = require('../db');
const mysql = require('mysql2');



const adicionarTipoPagamento = (userData, callback) => {
  const query = 'INSERT INTO tipoPagamento SET ' +
                '`descricao`=' + mysql.escape(userData.descricao) + ',' +
                '`idEmpresa`=' + mysql.escape(userData.idEmpresa) + ',' +
                '`registro`=' + mysql.escape(userData.registro.toISOString()) + ',' +
                '`status`=' + mysql.escape(userData.status);

  connection.query(query, (err, result) => {
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

const getContasPagar = (vencimentoIni, vencimentoFim, tipo, valorMin, valorMax, status, callback) => {

  let query = `SELECT c.id, f.nome as fornecedor, f.id as idFornecedor, f.cnpj, c.vencimento, c.valor ,
   c.status, c.descricao, c.idTipo, t.descricao as nomeTipo
    FROM evolux.contasPagar as c
      JOIN fornecedores as f on f.id = c.idFornecedor
      JOIN tipoPagamento as t on t.id = c.idTipo
    WHERE c.status not in ('D')`;

  if (tipo) {
    query += ` AND c.idTipo = ${parseInt(tipo)}`;
  }

  if (status) {
    query += ` AND c.status = '${status}'`;
  }

  if (vencimentoIni) {
    query += ` AND c.vencimento >= '${vencimentoIni}'`;
  }

  if (vencimentoFim) {
    query += ` AND c.vencimento <= '${vencimentoFim}'`;
  }

  if (valorMin) {
    query += ` AND c.valor >= ${parseInt(valorMin)}`;
  }

  if (valorMax) {
    query += ` AND c.valor <= ${parseInt(valorMax)}`;
  }

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const getContasReceber = (vencimentoIni, vencimentoFim, tipo, valorMin, valorMax, status, callback) => {

  let query = `SELECT c.id, f.nome as cliente, f.id as idCliente, f.cpfcnpj, c.vencimento, c.valor ,
   c.status, c.descricao, c.idTipo, t.descricao as nomeTipo
    FROM evolux.contasReceber as c
      JOIN clientes as f on f.id = c.idCliente
      JOIN tipoPagamento as t on t.id = c.idTipo
    WHERE c.status not in ('D')`;

  if (tipo) {
    query += ` AND c.idTipo = ${parseInt(tipo)}`;
  }

  if (status) {
    query += ` AND c.status = '${status}'`;
  }

  if (vencimentoIni) {
    query += ` AND c.vencimento >= '${vencimentoIni}'`;
  }

  if (vencimentoFim) {
    query += ` AND c.vencimento <= '${vencimentoFim}'`;
  }

  if (valorMin) {
    query += ` AND c.valor >= ${parseInt(valorMin)}`;
  }

  if (valorMax) {
    query += ` AND c.valor <= ${parseInt(valorMax)}`;
  }

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const editarContaPagar = (idConta, userData, callback) => {
  const query = 'UPDATE contasPagar SET ? WHERE id = ?';
  connection.query(query, [userData, idConta], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const deleteContaPagar = (idConta, userData, callback) => {
  const query = 'UPDATE contasPagar SET ? WHERE id = ?';
  connection.query(query, [userData, idConta], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const baixarContaPagar = (idConta, userData, callback) => {
  const query = 'UPDATE contasPagar SET ? WHERE id = ?';
  connection.query(query, [userData, idConta], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const editarContaReceber = (idConta, userData, callback) => {
  const query = 'UPDATE contasReceber SET ? WHERE id = ?';
  connection.query(query, [userData, idConta], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const deleteContaReceber = (idConta, userData, callback) => {
  const query = 'UPDATE contasReceber SET ? WHERE id = ?';
  connection.query(query, [userData, idConta], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const baixarContaReceber = (idConta, userData, callback) => {
  const query = 'UPDATE contasReceber SET ? WHERE id = ?';
  connection.query(query, [userData, idConta], (err, result) => {
    if (err) {
      console.error('Erro na atualização:', err);
      callback('Erro ao atualizar', null);
    } else {
      callback(null, result);
      console.log('atualizado com sucesso');
    }
  });
};

const getValorPagarHoje = (callback) => {
  //STATUS A = ATIVO, I = INATIVO
  const query = `SELECT SUM(valor) as valor FROM evolux.contasPagar
  where vencimento = curdate()
  and status = 'A';`;
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const getValorReceberHoje = (callback) => {
  const query = `SELECT SUM(valor) as valor FROM evolux.contasReceber
  where vencimento = curdate()
  and status = 'A';`;
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const getFaturamentoMes = (callback) => {
  const query = `SELECT sum(valor) as valor
  FROM contasReceber
  WHERE MONTH(vencimento) = MONTH(CURRENT_DATE)
    AND YEAR(vencimento) = YEAR(CURRENT_DATE)
    AND status = 'R'`;
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const getDespesaMes = (callback) => {
  const query = `SELECT sum(valor) as valor
  FROM contasPagar
  WHERE MONTH(vencimento) = MONTH(CURRENT_DATE)
    AND YEAR(vencimento) = YEAR(CURRENT_DATE)
    AND status = 'P'`;
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const getDespesaGrafico = (callback) => {
  const query = `SELECT
    SUM(CASE WHEN status = 'A' THEN valor ELSE 0 END) AS aberto,
    SUM(CASE WHEN status = 'D' THEN valor ELSE 0 END) AS cancelado,
    SUM(CASE WHEN status = 'P' THEN valor ELSE 0 END) AS pago
    FROM evolux.contasPagar
    WHERE MONTH(vencimento) = MONTH(CURRENT_DATE()) AND YEAR(vencimento) = YEAR(CURRENT_DATE())`;
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err);
      callback('Erro ao buscar', null);
    } else {
      callback(null, rows);
    }
  });
};

const getFaturamentoGrafico = (callback) => {
  const query = `SELECT
      CONCAT(
          CASE EXTRACT(MONTH FROM baixa)
              WHEN 1 THEN 'Jan'
              WHEN 2 THEN 'Fev'
              WHEN 3 THEN 'Mar'
              WHEN 4 THEN 'Abr'
              WHEN 5 THEN 'Mai'
              WHEN 6 THEN 'Jun'
              WHEN 7 THEN 'Jul'
              WHEN 8 THEN 'Ago'
              WHEN 9 THEN 'Set'
              WHEN 10 THEN 'Out'
              WHEN 11 THEN 'Nov'
              WHEN 12 THEN 'Dez'
          END,
          '/',
          RIGHT(YEAR(baixa), 2)
      ) AS mes_ano,
      SUM(valor) AS valorTotal
    FROM
      contasReceber
    WHERE
      status = 'R' AND
      baixa BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND LAST_DAY(CURDATE())
    GROUP BY
      EXTRACT(MONTH FROM baixa),
      EXTRACT(YEAR FROM baixa)
    ORDER BY
      EXTRACT(YEAR FROM baixa),
      EXTRACT(MONTH FROM baixa);

`;
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
  getContasPagar,
  editarContaPagar,
  deleteContaPagar,
  baixarContaPagar,
  getContasReceber,
  editarContaReceber,
  deleteContaReceber,
  baixarContaReceber,
  getValorPagarHoje,
  getValorReceberHoje,
  getFaturamentoMes,
  getDespesaMes,
  getDespesaGrafico,
  getFaturamentoGrafico
};
