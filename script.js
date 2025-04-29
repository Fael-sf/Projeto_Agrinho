document.addEventListener('DOMContentLoaded', () => {
    const listaPesquisas = document.getElementById('lista-pesquisas');
    const mensagensDiv = document.getElementById('mensagens');
    const textoMensagemInput = document.getElementById('texto-mensagem');
    const enviarMensagemBotao = document.getElementById('enviar-mensagem');

    // Dados de exemplo para as pesquisas (simulação)
    const pesquisas = [
        { id: 1, titulo: 'Satisfação com o Produto X' },
        { id: 2, titulo: 'Preferências de Lazer na Cidade' },
        { id: 3, titulo: 'Opinião sobre a Nova Política' }
    ];

    // Renderizar a lista de pesquisas
    function renderizarPesquisas() {
        listaPesquisas.innerHTML = '';
        pesquisas.forEach(pesquisa => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#'; // Aqui você adicionaria a lógica para abrir a pesquisa
            link.textContent = pesquisa.titulo;
            listItem.appendChild(link);
            listaPesquisas.appendChild(listItem);
        });
    }

    renderizarPesquisas();

    // Simulação de envio de mensagem (apenas no lado do cliente)
    enviarMensagemBotao.addEventListener('click', () => {
        const mensagem = textoMensagemInput.value.trim();
        if (mensagem) {
            adicionarMensagem('Você', mensagem);
            textoMensagemInput.value = '';
            // Em uma aplicação real, aqui você enviaria a mensagem para o servidor
        }
    });

    textoMensagemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            enviarMensagemBotao.click();
        }
    });

    // Função para adicionar uma mensagem à interface do chat
    function adicionarMensagem(usuario, texto) {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.classList.add('mensagem');
        mensagemDiv.textContent = `${usuario}: ${texto}`;
        mensagensDiv.appendChild(mensagemDiv);
        mensagensDiv.scrollTop = mensagensDiv.scrollHeight; // Manter a última mensagem visível
    }

    // Simulação de recebimento de mensagens (apenas no lado do cliente)
    // Em uma aplicação real, isso viria do servidor em tempo real
    setTimeout(() => {
        adicionarMensagem('Usuário 1', 'Olá a todos!');
    }, 1000);

    setTimeout(() => {
        adicionarMensagem('Usuário 2', 'Alguém já respondeu a pesquisa sobre lazer?');
    }, 3000);
});
