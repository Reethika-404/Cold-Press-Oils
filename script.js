let cart = document.getElementById('list');
let total = 0;

function go() {
  let ele = document.createElement('li');
  cart.append(ele);
  ele.textContent = 'Groundnut Oil-₹350'
  total = total + 350;
  let tot = document.getElementById('total');
  tot.innerText = 'Total: ₹' + total;
}

function mo() {
  let ele = document.createElement('li');
  cart.append(ele);
  ele.innerText = 'Mustard Oil-₹550';
  total = total + 550;
  let tot = document.getElementById('total');
  tot.innerText = 'Total: ₹' + total;
}

function co() {
  let ele = document.createElement('li');
  cart.append(ele);
  ele.innerText = 'Coconut Oil-₹800';
  total = total + 800;
  let tot = document.getElementById('total');
  tot.innerText = 'Total: ₹' + total;
}
function checkout() {
  // Collect cart items
  let items = [];
  document.querySelectorAll('#list li').forEach(li => {
    items.push(li.textContent);
  });

  // Collect buyer details
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let address = document.getElementById('address').value;

  // Build message
  let message = `
Order Details:
${items.join('\n')}
Total: ₹${total}

Buyer Info:
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}
  `;

  // For now, just show it as an alert
  alert(message);

  // Later: send to backend/email/WhatsApp
  // Example: window.open(`https://wa.me/<your-number>?text=${encodeURIComponent(message)}`);
}
function checkout() {
  // Collect cart items
  let items = [];
  document.querySelectorAll('#list li').forEach(li => {
    items.push(li.textContent);
  });

  // Collect buyer details
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let address = document.getElementById('address').value;

  // Build message
  let message = `🛒 Order Details:\n${items.join('\n')}\n\n💰 Total: ₹${total}\n\n👤 Buyer Info:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`;

  // Replace with YOUR WhatsApp number (with country code)
  let yourNumber = "918008248845"; // e.g., 91 for India
  let url = `https://wa.me/${yourNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp chat with pre-filled message
  window.open(url, "_blank");
}
