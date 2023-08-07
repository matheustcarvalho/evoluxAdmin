const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const loginController = require('./controllers/loginController');
const bodyParser = require('body-parser');
var session = require('express-session');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(session({
  secret: 'Ev0lux!',
  resave: false,
  saveUninitialized: true,
  rolling: true,
    cookie: {
        maxAge: 60000 * 20,
    }
}))

// Rotas GET
//Pages
router.get('/',pagesController.login);
router.post('/', loginController.login); 
router.get('/cadastro',pagesController.cadastro);
router.post('/registrar', loginController.register); 

// Middleware para verificar a validade da sessão
router.use(loginController.requireAuthentication);
// Rotas GET
router.get('/home', pagesController.index);
router.get('/pagar', pagesController.pagar);
router.get('/receber',pagesController.receber);
router.get('/fornecedores',pagesController.fornecedores);
router.get('/clientes',pagesController.clientes);
router.get('/tipo-pagamento',pagesController.tipoPagamento);
router.get('/tipo-recebimento',pagesController.tipoRecebimento);
router.get('/404', (req, res) => {
  res.render('404'); 
});
  //API'S
router.get('/fornecedores-list', pagesController.fornecedoresList);
router.get('/clientes-list', pagesController.clientesList);
router.get('/tipos-pagamento-list', pagesController.tiposPagamengoList);
router.get('/tipos-recebimento-list', pagesController.tiposRecebimentoList);
router.post('/contas-pagar-list', pagesController.contasPagarList);
router.post('/contas-receber-list', pagesController.contasReceberList);
router.get('/valor-pagar-hoje', pagesController.valorPagarHojeList);
router.get('/valor-receber-hoje', pagesController.valorReceberHojeList);
router.get('/faturamento-mes', pagesController.faturamentoMesList);
router.get('/despesa-mes', pagesController.despesaMesList);
router.get('/despesa-grafico', pagesController.despesaGrafico);
router.get('/faturamento-grafico', pagesController.faturamentoGrafico);
router.get('/pagar-CSV', pagesController.contasPagarCSV);
router.get('/receber-CSV', pagesController.contasReceberCSV);
router.get('/download/:filename/:extensao', pagesController.downloadComprovante);

//Rotas POST
router.post('/novo-tipo-pagar', pagesController.adicionarTipoPagamento); 
router.post('/novo-tipo-receber', pagesController.adicionarTipoRecebimento);
router.post('/novo-fornecedor', pagesController.adicionarFornecedor);
router.post('/novo-cliente', pagesController.adicionarCliente);
router.post('/nova-conta-pagar', upload.single('fileInput'), pagesController.adicionarContaPagar);
router.post('/nova-conta-receber', pagesController.adicionarContaReceber);
router.post('/edit-fornecedor', pagesController.editarFornecedor); 
router.post('/delete-fornecedor', pagesController.deleteFornecedor);
router.post('/edit-cliente', pagesController.editarCliente); 
router.post('/delete-cliente', pagesController.deleteCliente); 
router.post('/delete-tipo-pagamento', pagesController.deleteTipoPagamento);
router.post('/delete-tipo-recebimento', pagesController.deleteTipoRecebimento);
router.post('/edit-conta-pagar', pagesController.editarContaPagar);
router.post('/delete-conta-pagar', pagesController.deleteContaPagar); 
router.post('/baixar-conta-pagar', upload.single('fileInput'), pagesController.baixarContaPagar);  
router.post('/edit-conta-receber', pagesController.editarContaReceber);
router.post('/delete-conta-receber', pagesController.deleteContaReceber);  
router.post('/baixar-conta-receber', upload.single('fileInput'), pagesController.baixarContaReceber);  

//LOGIN

router.post('/logout', loginController.logout);

  
module.exports = router;
 