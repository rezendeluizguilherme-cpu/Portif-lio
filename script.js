// Envia alerta quando o formulário é enviado
document.getElementById('formContato').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
    this.reset();
});
