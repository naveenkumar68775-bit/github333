
let contacts = [];

const form = document.getElementById("contactForm");
const tableBody = document.getElementById("contactTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || department === "" || phone === "") {
    alert("All fields are required");
    return;
  }

  const contact = {
    name: name,
    email: email,
    department: department,
    phone: phone
  };

  contacts.push(contact);

  form.reset();


  displayContacts();
});

function displayContacts() {
  tableBody.innerHTML = "";

  contacts.forEach((contact, index) => {
    tableBody.innerHTML += `
        <tr>
          <td>${contact.name}</td>
          <td>${contact.email}</td>
           <td>${contact.department}</td>
          <td>${contact.phone}</td>
          <td>
            <button onclick="deleteContact(${index})">Delete</button>
            <button onclick="editContact(${index})">Edit</button>
          </td>
        </tr>
      `;
  });
}

function deleteContact(index) {
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
    displayContacts();
  }
}

function editContact(index) {
  const contact = contacts[index];

  document.getElementById("name").value = contact.name;
  document.getElementById("email").value = contact.email;
  document.getElementById("department").value = contact.department;
  document.getElementById("phone").value = contact.phone;
  contacts.splice(index, 1);

  displayContacts();
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowercase();

  const filtered = [...contacts].filter(({ name, department }) =>
    name.toLowercase().includes(query) ||
    department.toLowercase().includes(query)
  );

  renderContacts(filtered);
});