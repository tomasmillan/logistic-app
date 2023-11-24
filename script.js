function generateInvoice() {
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const street = document.getElementById('street').value;
    const postalCode = document.getElementById('postal-code').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    const checkbox = document.getElementById('checkbox').checked;
    const recipientNotes = document.getElementById('recipient-notes').value;
    const digitalSignature = document.getElementById('digital-signature').value;
    const date = document.getElementById('date').value;

    // Generar la factura
    const invoiceContent = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Calle:</strong> ${street}</p>
        <p><strong>Código Postal:</strong> ${postalCode}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>País:</strong> ${country}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Casilla Tildada:</strong> ${checkbox ? 'Sí' : 'No'}</p>
        <p><strong>Notas para el Destinatario:</strong> ${recipientNotes}</p>
        <!-- Agregar aquí las secciones para regulaciones y referencias -->
        <div class="regulaciones">
        <p>1. Regulacion sobre uco e informacion detalla</p>
        <p>2. Regulacion sobre uco e informacion detalla</p>
        <p>3. Regulacion sobre uco e informacion detalla</p>
        <p>4. Regulacion sobre uco e informacion detalla</p>
        </div>
        <div class='fechayfirma'>
        <p><strong>Fecha: ${date}</strong></p>
        <p><strong>Firma Digital:</strong> ${digitalSignature}</p>
        </div>
    `;

    // Mostrar la factura generada en el área de vista previa
    document.getElementById('invoiceContent').innerHTML = invoiceContent;
}

const productsDatabase = {
    '12345': {
        name: 'Producto 1',
        description: 'Descripción del Producto 1',
        history: 'Historia del Producto 1...',
    },
    '67890': {
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        history: 'Historia del Producto 2...',
    },
    // Agrega más productos según sea necesario
};

function searchProduct() {
    const productCode = document.getElementById('product-code').value;
    const productInfoContainer = document.getElementById('product-info');

    // Verifica si el código del producto está en la base de datos
    if (productsDatabase.hasOwnProperty(productCode)) {
        const productInfo = productsDatabase[productCode];
        // Muestra la información del producto en la página
        productInfoContainer.innerHTML = `
            <h3>${productInfo.name}</h3>
            <p>${productInfo.description}</p>
            <p>${productInfo.history}</p>
        `;
    } else {
        // Si el código no está en la base de datos, muestra un mensaje de error
        productInfoContainer.innerHTML = '<p>Producto no encontrado.</p>';
    }
}

