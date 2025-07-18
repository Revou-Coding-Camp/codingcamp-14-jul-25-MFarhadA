// Array to store messages
let messages = [];

// Function to show the popup on page load
window.onload = function () {
    document.getElementById("popup").style.display = "flex";
};

// Function to submit the user's name
function submitName() {
    const name = document.getElementById("userNameInput").value.trim();
    if (name) {
        document.getElementById("userName").textContent = name;
        document.getElementById("popup").style.display = "none";
    } else {
        alert("Nama tidak boleh kosong!");
    }
}

// Function to toggle the mobile menu
function copyEmail() {
    const email = 'mfarhadainc@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const button = document.getElementById('copyButton');
        button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
        setTimeout(() => {
            button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>';
        }, 2000);
    });
}

// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    const newMessage = {
        id: Date.now(),
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString()
    };
    
    messages.push(newMessage);
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    updateMessagesDisplay();
    
    alert('Message sent successfully!');
}

// Function to update the messages display
function updateMessagesDisplay() {
    const messagesList = document.getElementById('messagesList');
    
    if (messages.length === 0) {
        messagesList.innerHTML = '<p class="text-gray-500 text-center py-8">No messages yet</p>';
        return;
    }

    messagesList.innerHTML = messages.map(msg => `
        <div class="message-card bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div class="flex justify-between items-start">
                <h4 class="font-bold text-gray-800">${msg.name}</h4>
                <button onclick="deleteMessage(${msg.id})" class="text-red-800 hover:text-red-700 text-sm font-black">
                    ✕
                </button>
            </div>
            <p class="text-sm text-gray-600 mb-2">${msg.email}</p>
            <p class="text-gray-800 mb-2">${msg.message}</p>
            <p class="text-xs text-gray-500">${msg.timestamp}</p>
        </div>
    `).join('');
}

// Function to delete a message
function deleteMessage(messageId) {
    messages = messages.filter(msg => msg.id !== messageId);
    updateMessagesDisplay();
}