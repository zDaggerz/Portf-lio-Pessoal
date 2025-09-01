// A palavra 'const' é usada para declarar uma constante
const botaoEnviar = document.getElementById('btn-enviar');

// Adiciona um "ouvinte de evento" que espera por um clique no botão
botaoEnviar.addEventListener('click', function() {
    // O método alert() exibe uma caixa de diálogo de alerta para o usuário
    alert('Mensagem enviada com sucesso! (Esta é uma simulação)');
});