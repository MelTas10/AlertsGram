document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const phoneInput = document.getElementById('phoneInput');
    const codeContainer = document.getElementById('codeContainer');
    const codeInput = document.getElementById('codeInput');
    const chatContainer = document.getElementById('chatContainer');
    const authContainer = document.getElementById('authContainer');

    // Обработка отправки номера телефона
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const phone = phoneInput.value;
        
        try {
            // Здесь будет запрос к Telegram API для отправки кода
            console.log('Отправка кода на номер:', phone);
            authForm.style.display = 'none';
            codeContainer.classList.remove('hidden');
        } catch (error) {
            console.error('Ошибка при отправке кода:', error);
        }
    });

    // Функция проверки кода
    window.verifyCode = async () => {
        const code = codeInput.value;
        
        try {
            // Здесь будет проверка кода через Telegram API
            console.log('Проверка кода:', code);
            authContainer.classList.add('hidden');
            chatContainer.classList.remove('hidden');
            initChat();
        } catch (error) {
            console.error('Ошибка при проверке кода:', error);
        }
    };

    // Инициализация чата
    function initChat() {
        // Здесь будет код для загрузки чатов и подключения к Telegram API
        const chatList = document.querySelector('.chat-list');
        const messages = document.getElementById('messages');
        
        // Пример добавления тестового чата
        chatList.innerHTML = `
            <div class="chat-item">
                <h3>Тестовый чат</h3>
                <p>Последнее сообщение...</p>
            </div>
        `;
    }
});
