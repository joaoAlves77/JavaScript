//Um callback é uma função passada como argumento para outra função, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação. Callbacks são frequentemente usados para operações assíncronas, como requisições de rede, onde você deseja que uma função seja executada após a conclusão de uma operação.
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'João', age: 30 };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchData(displayData);
