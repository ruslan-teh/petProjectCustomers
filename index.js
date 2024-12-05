const customers = [
  { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
  { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
  { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
  { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
  { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
  { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
  { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
  { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
];

function renderTable() {
  const tbody = document.querySelector("#customersTable tbody");
  tbody.innerHTML = customers.map(customer => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.company}</td>
      <td>${customer.phone}</td>
      <td>${customer.email}</td>
      <td>${customer.country}</td>
      <td class="status ${customer.status.toLowerCase()}">${customer.status}</td>
    </tr>
  `).join("");
}
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContent = document.querySelector('.active');
  menuToggle.addEventListener('click', function () {
    if (menuContent.classList.contains('active')) {
      menuContent.classList.remove('active');
    } else {
      menuContent.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", renderTable);
