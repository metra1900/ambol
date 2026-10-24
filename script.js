const WHATSAPP_NUMBER = '2348037444741'; // Nigeria country code + number, no leading zero
const prices = { 1: 6000, 2: 11000, 3: 14000, 4: 17000, 5: 20000 };
const naira = amount => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false');
}));
const quantitySelect = document.getElementById('quantity');
const subtotal = document.getElementById('subtotal');
function updateSubtotal() {
  const count = Number(quantitySelect.value || 1);
  subtotal.textContent = naira(prices[count] || prices[1]);
}
quantitySelect?.addEventListener('change', updateSubtotal);
document.querySelectorAll('.choose-pack').forEach(button => button.addEventListener('click', () => {
  quantitySelect.value = button.dataset.pack;
  updateSubtotal();
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  quantitySelect.focus({ preventScroll: true });
}));
document.getElementById('year').textContent = new Date().getFullYear();

const orderForm = document.getElementById('orderForm');
orderForm?.addEventListener('submit', event => {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const note = document.getElementById('note').value.trim();
  const quantity = Number(quantitySelect.value || 1);
  const amount = prices[quantity];
  const messageBox = document.getElementById('formMessage');
  if (!fullName || !phone || !address) {
    messageBox.textContent = 'Please complete your name, phone number, and delivery address.';
    messageBox.className = 'form-error';
    return;
  }
  const lines = [
    'Hello AMBOL, I would like to order FAFORLIFE Toothpaste.',
    '',
    `Name: ${fullName}`,
    `Customer phone: ${phone}`,
    `Promo pack: ${quantity} unit${quantity === 1 ? '' : 's'}`,
    `Promo subtotal: ${naira(amount)}`,
    `Delivery address: ${address}`,
    ...(note ? [`Additional note: ${note}`] : []),
    '',
    'Please confirm availability, delivery fee, and the final total. Thank you.'
  ];
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  messageBox.textContent = 'Opening WhatsApp with your order details. Review the message and tap Send in WhatsApp to complete your order.';
  messageBox.className = '';
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.href = url;
});
updateSubtotal();
