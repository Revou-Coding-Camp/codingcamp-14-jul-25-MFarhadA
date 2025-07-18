function showPopup() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    document.getElementById("popupName").innerText = name;
    document.getElementById("popupEmail").innerText = email;
    document.getElementById("popupMessage").innerText = message;

    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

function submitForm() {
    // Proses submit (misalnya kirim ke server, alert, dll)
    alert("Message sent!");
    closePopup();

    // Reset form jika diperlukan
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}