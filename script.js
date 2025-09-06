
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  });
}

let slideIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function moveSlide(direction) {
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  if (slider) slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

if (slider && slides.length > 0) {
  setInterval(() => {
  moveSlide(1);
  }, 4000);
}

function addToOrder(packageId) {
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  if (!orders.includes(packageId)) {
    orders.push(packageId);
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  updateOrderCount();
}

function removeFromOrder(packageId) {
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders = orders.filter(id => id !== packageId);
  localStorage.setItem('orders', JSON.stringify(orders));
  updateOrderCount();
  renderMyOrder();
}

function updateOrderCount() {
  const count = (JSON.parse(localStorage.getItem('orders') || '[]')).length;
  const orderCountEl = document.getElementById('order-count');
  if (orderCountEl) {
    orderCountEl.textContent = count;
  }
}

function renderMyOrder() {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const orderList = document.getElementById('myorder-list');
  if (orderList) {
    orderList.innerHTML = '';
    if (orders.length === 0) {
      orderList.innerHTML = '<li>No orders yet.</li>';
    } else {
      orders.forEach(id => {
        const li = document.createElement('li');
        li.textContent = `Package: ${id}`;
        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.onclick = () => removeFromOrder(id);
        li.appendChild(btn);
        orderList.appendChild(li);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('order-count')) {
    updateOrderCount();
  }
  if (document.getElementById('myorder-list')) {
    renderMyOrder();
  }
});

function submitContactForm() {
  const name = document.getElementById('contact-name')?.value;
  const email = document.getElementById('contact-email')?.value;
  const message = document.getElementById('contact-message')?.value;
  if (name && email && message) {
    alert('Thank you for contacting us!');
    document.getElementById('contact-form').reset();
  }
  return false;
}
