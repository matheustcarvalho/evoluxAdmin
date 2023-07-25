const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const bodyParser = require('body-parser');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Rotas GET
  //Pages
router.get('/', pagesController.index);
router.get('/pagar', pagesController.pagar);
router.get('/receber',pagesController.receber);
router.get('/fornecedores',pagesController.fornecedores);
router.get('/clientes',pagesController.clientes);
router.get('/tipo-pagamento',pagesController.tipoPagamento);
router.get('/tipo-recebimento',pagesController.tipoRecebimento);
router.get('/login',pagesController.login);
router.get('/cadastro',pagesController.cadastro);
router.get('/404', (req, res) => {
  res.render('404'); 
});
  //API'S
router.get('/fornecedores-list', pagesController.fornecedoresList);
router.get('/clientes-list', pagesController.clientesList);
router.get('/tipos-pagamento-list', pagesController.tiposPagamengoList);
router.get('/tipos-recebimento-list', pagesController.tiposRecebimentoList);
router.get('/contas-pagar-list', pagesController.contasPagarList);

//Rotas POST
router.post('/novo-tipo-pagar', pagesController.adicionarTipoPagamento); 
router.post('/novo-tipo-receber', pagesController.adicionarTipoRecebimento);
router.post('/novo-fornecedor', pagesController.adicionarFornecedor);
router.post('/novo-cliente', pagesController.adicionarCliente);
router.post('/nova-conta-pagar', pagesController.adicionarContaPagar);
router.post('/nova-conta-receber', pagesController.adicionarContaReceber);
router.post('/edit-fornecedor', pagesController.editarFornecedor); 
router.post('/delete-fornecedor', pagesController.deleteFornecedor);
router.post('/edit-cliente', pagesController.editarCliente); 
router.post('/delete-cliente', pagesController.deleteCliente); 
router.post('/delete-tipo-pagamento', pagesController.deleteTipoPagamento);
router.post('/delete-tipo-recebimento', pagesController.deleteTipoRecebimento);   
  
module.exports = router;
 