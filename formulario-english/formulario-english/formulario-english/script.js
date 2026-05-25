const form = document.getElementById('englishForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validação básica
    if (!validateForm()) {
        return;
    }

    // Preparar dados
    const formData = new FormData(form);
    const data = prepareFormData(formData);

    // Desabilitar botão
    const submitButton = form.querySelector('.submit-button');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
        // Usar Formspree para enviar
        const response = await fetch('https://formspree.io/f/FORM_ID_AQUI', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Sucesso
            formMessage.textContent = '✓ Formulário enviado com sucesso! Obrigado pelas informações.';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            form.reset();
            submitButton.textContent = 'Enviar Formulário';
            submitButton.disabled = false;
        } else {
            throw new Error('Erro ao enviar');
        }
    } catch (error) {
        // Erro
        formMessage.textContent = '✗ Erro ao enviar o formulário. Tente novamente.';
        formMessage.classList.add('error');
        formMessage.classList.remove('success');
        submitButton.textContent = 'Enviar Formulário';
        submitButton.disabled = false;
    }
});

function validateForm() {
    let isValid = true;

    // Validar nome
    const nome = document.getElementById('nome');
    const nomeError = document.getElementById('nomeError');
    if (nome.value.trim().length < 2) {
        nomeError.textContent = 'Por favor, insira um nome válido';
        isValid = false;
    } else {
        nomeError.textContent = '';
    }

    // Validar email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Por favor, insira um email válido';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validar nível selecionado
    const nivelSelecionado = document.querySelector('input[name="nivel"]:checked');
    if (!nivelSelecionado) {
        alert('Por favor, selecione seu nível de inglês');
        isValid = false;
    }

    return isValid;
}

function prepareFormData(formData) {
    // Agrupar checkboxes
    const formasAprender = [];
    const assuntos = [];
    const objetivos = [];

    for (let [key, value] of formData.entries()) {
        if (key === 'forma_aprender') {
            formasAprender.push(value);
        }
        if (key === 'assuntos') {
            assuntos.push(value);
        }
        if (key === 'objetivos') {
            objetivos.push(value);
        }
    }

    return {
        nome: formData.get('nome'),
        email: formData.get('email'),
        nivel: formData.get('nivel'),
        forma_aprender: formasAprender.join(', ') || 'Não informado',
        assuntos: assuntos.join(', ') || 'Não informado',
        livros: formData.get('livros') || 'Não informado',
        filmes: formData.get('filmes') || 'Não informado',
        artistas: formData.get('artistas') || 'Não informado',
        series: formData.get('series') || 'Não informado',
        objetivos: objetivos.join(', ') || 'Não informado',
        viagens: formData.get('viagens') || 'Não informado',
        outra_coisa: formData.get('outra_coisa') || 'Não informado',
        paises: formData.get('paises') || 'Não informado'
    };
}
