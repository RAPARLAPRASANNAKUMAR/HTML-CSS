document.getElementById("loanForm").addEventListener("submit", function(event) {

    let valid = true;

    // Age validation
    const age = document.getElementById("age").value;
    if (age === "" || age > 100) {
        document.getElementById("ageError").innerText = "Age must be less than 100";
        valid = false;
    } else {
        document.getElementById("ageError").innerText = "";
    }

    // CIBIL validation
    const cibil = document.getElementById("cibil").value;
    if (cibil === "" || cibil <= 750) {
        document.getElementById("cibilError").innerText = "CIBIL score must be greater than 750";
        valid = false;
    } else {
        document.getElementById("cibilError").innerText = "";
    }

    // Aadhar validation
    const aadhar = document.getElementById("aadhar").value;
    const aadharRegex = /^\d{12}$/;

    if (!aadharRegex.test(aadhar)) {
        document.getElementById("aadharError").innerText = "Aadhar must be 12 digits numeric";
        valid = false;
    } else {
        document.getElementById("aadharError").innerText = "";
    }

    // PAN validation
    const pan = document.getElementById("pan").value;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!panRegex.test(pan)) {
        document.getElementById("panError").innerText = "PAN format must be 5 letters, 4 digits, 1 letter";
        valid = false;
    } else {
        document.getElementById("panError").innerText = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});