'use strict';

document.querySelector("#submitButton").addEventListener("click", handleSubmit);
document.querySelectorAll('input, select').forEach(element => {
  element.addEventListener('change', vypoctiCenu);
});
window.onload = calculatePrice;

function handleSubmit(e) {
    e.preventDefault();
    alert("Vaše objednávka byla přijata. Děkujeme.");
    document.getElementById("container").reset();
    document.querySelector("#submitButton").disabled = true;
    document.querySelector('#celkovaCena').value = "";
}

function vypoctiCenu() {
  const krmivoCena = parseFloat(document.getElementById('krmivo').value);
  const mnozstvi = parseFloat(document.getElementById('mnozstvi').value);
  const zakladniCena = krmivoCena * mnozstvi;

  const bio = document.getElementById('bio').checked ? zakladniCena * parseFloat(document.getElementById('bio').value) : 0;
  const premium = document.getElementById('premium').checked ? zakladniCena * parseFloat(document.getElementById('premium').value) : 0;
  const nekvalita = document.getElementById('nekvalita').checked ? zakladniCena * parseFloat(document.getElementById('nekvalita').value) : 0;
  const darek = document.getElementById('darek').checked ? parseFloat(document.getElementById('darek').value) : 0;

  const vlastnostiCena = zakladniCena + bio + premium + nekvalita + darek;
  const doprava = document.querySelector('input[name="doprava"]:checked').value;
  const dopravaCena = (doprava == 0.1) ? vlastnostiCena * parseFloat(doprava) : parseFloat(doprava);

  const celkovaCena = vlastnostiCena + dopravaCena;

  document.getElementById('cena').value = celkovaCena.toFixed(2) + ' Kč';
  document.getElementById('aktualniCena').value = zakladniCena.toFixed(2) + ' Kč';

  return celkovaCena;
}

function zkontrolujCenu() {
  const celkovaCena = vypoctiCenu();
  const castka = parseFloat(document.getElementById('castka').value);
  const vysledekText = castka >= celkovaCena ? 'Do celkové ceny se vejdete.' : 'Do celkové ceny se nevejdete.';
  document.getElementById('vysledek').innerText = vysledekText;
  document.querySelector("#submitButton").disabled = castka < celkovaCena;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9._-]/g, '');
}
