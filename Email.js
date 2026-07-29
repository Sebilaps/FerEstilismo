(function () {
    const publicKey = '2mkHBxTG3iMt3bK6v';
    const serviceId = 'service_4vt5y6b';
    const templateId = 'template_28x3f1g';

    emailjs.init({
        publicKey: publicKey
    });

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        status.textContent = 'Enviando mensaje...';

        const templateParams = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                status.textContent = 'Mensaje enviado correctamente.';
                form.reset();
            })
            .catch((error) => {
                console.error('Error al enviar:', error);
                status.textContent = 'No se pudo enviar el mensaje. Inténtalo de nuevo.';
            });
    });
})();
