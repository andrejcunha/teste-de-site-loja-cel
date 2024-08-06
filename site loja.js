document.addEventListener('DOMContentLoaded', () => {
    const phoneList = document.getElementById('phoneList');
    const phoneDetails = document.getElementById('phoneDetails');

  
    const phones = [
        { id: 1, name: 'Moto G9 Play 64GB', Preço: 'R$450,00', image: 'images/motog9play.jpg' },
        { id: 2, name: 'Samsung Galaxy A52', Preço: 'R$600,00', image: 'images/A52.jpg' },
        { id: 3, name: 'Iphone 12', Preço: 'R$2100,00', image: 'images/iphone12.jpg' },
        { id: 4, name: 'Xiaomi Mi9T', Preço: 'R$650,00', image: 'images/mi9t.png' },
    ];

    function renderPhoneList() {
        const listTitle = document.createElement('h2');
        listTitle.textContent = 'LISTA DE APARELHOS';
        phoneList.innerHTML = '';  
        phoneList.appendChild(listTitle);

        phones.forEach(phone => {
            const phoneItem = document.createElement('div');
            phoneItem.className = 'phone-item';
            phoneItem.textContent = phone.name;
            phoneItem.addEventListener('click', () => showPhoneDetails(phone));
            phoneList.appendChild(phoneItem);
        });
    }

    function showPhoneDetails(phone) {
        const siteName = "Conserta Tecnologia";
        const imageUrl = `${window.location.origin}/${phone.image}`;
        const message = `Olá, gostaria de saber mais sobre o ${phone.name} do site ${siteName}. Veja a foto: ${imageUrl}`;
        const whatsappLink = `https://wa.me/5518996795332?text=${encodeURIComponent(message)}`;
        
        phoneDetails.innerHTML = `
            <h2>${phone.name} - ${phone.Preço}</h2>
            <img src="${phone.image}" alt="${phone.name}">
            <a href="${whatsappLink}" target="_blank">Contato via WhatsApp</a>
        `;
    }

    // Renderizar a lista de celulares inicialmente
    renderPhoneList();
});