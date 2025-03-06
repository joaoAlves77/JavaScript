import requests from 'requests';

// O que é Síncrono e Assíncrono?
// exemplo de sincrono
let nome = 'joao';
let sobrenome = 'santana'
let nomeCompleto = nome + sobrenome;

// exemplo de request e response
// response = requests.get('https://api.github.com/users/joaosantana');

// // if response.status_code == 200:
// //     print('Requisição bem sucedida')
// // else:
//     print('Requisição falhou')


// O que é uma API?
// Requisição: Um cliente (como um navegador ou aplicativo) faz uma requisição HTTP a um servidor. A requisição pode ser de diferentes tipos, como GET, POST, PUT, DELETE, etc.
// Processamento: O servidor recebe a requisição e a processa. Isso pode envolver a consulta a um banco de dados, a execução de alguma lógica de negócios, etc.
// Resposta: Após o processamento, o servidor envia uma resposta de volta ao cliente. A resposta geralmente está no formato JSON ou XML e contém os dados solicitados ou uma mensagem de status.

// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get('/api/data', (req, res) => {
//     res.json({ message: 'GET request received' });
// });

// app.post('/api/data', (req, res) => {
//     const data = req.body;
//     res.json({ message: 'POST request received', data });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

// Fazendo uma requisição na prática
function clicou() {
    fetch('https://api.github.com/users/joaosantana')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
}

// Entendendo Promise
function buscarDados() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(sucesso) {
                resolve('Dados encontrados');
            } else {
                reject('Erro ao buscar dados');
            }
        }, 2000);
    });
}

buscarDados()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Métodos de requisições
// GET - Usado para obter dados de um servidor. É o padrão
fetch('https://api.exemplo.com/dados') // não precisa passar o method, pois o padrão é GET
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

// POST - Usado para enviar dados para um servidor.
fetch('https://api.exemplo.com/dados', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome: 'João', idade: 30 }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

    // fetch('https://api.exemplo.com/usuarios', { ... })
    // fetch: Essa é a função principal usada para fazer requisições HTTP no JavaScript. Ela retorna uma Promise, que será resolvida quando a resposta da requisição estiver disponível.
    // 'https://api.exemplo.com/usuarios': Este é o URL do servidor para o qual a requisição está sendo feita. Neste caso, estamos enviando dados para o recurso /usuarios de um API fictício.
    // O segundo argumento de fetch é um objeto de opções, que especifica os detalhes da requisição, como o método HTTP, cabeçalhos, corpo da requisição, etc.
    // 2. method: 'POST'
    // method: 'POST': Isso indica o método HTTP que será utilizado para a requisição. O método POST é usado quando queremos enviar dados para o servidor (como a criação de um novo recurso).
    // 3. headers: { 'Content-Type': 'application/json' }
    // headers: Aqui você está especificando os cabeçalhos da requisição. Cabeçalhos são informações adicionais que podem ser passadas para o servidor, como tipo de conteúdo ou autenticação.
    // 'Content-Type': 'application/json': Este cabeçalho diz ao servidor que o corpo da requisição está no formato JSON. Isso é importante porque o servidor precisa saber como interpretar os dados enviados.

// PUT - Usado para atualizar dados em um servidor.
fetch('https://api.exemplo.com/usuarios/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome: 'João', idade: 26 })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error)); 
// DELETE - Usado para excluir dados de um servidor.
fetch('https://api.exemplo.com/usuarios/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
  