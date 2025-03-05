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