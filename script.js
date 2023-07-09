/* Login and Register */

const companies = [
  { email: "comp1@example.com", password: "pass1" },
  { email: "comp2@example.com", password: "pass2" },
];

function handleLogin(event) {
  const email = document.getElementById("loginEmail").email;
  const password = document.getElementById("loginPassword").password;

  const company = companies.find(
    c => c.email === email && c.password === password
  );

  if (company) {
    alert("Login successful");
  } else {
    alert("Invalid email or password");
  }
}

function handleRegistration(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("registrationEmail").value;
  const password = document.getElementById("registrationPassword").value;

  const existingCompany = companies.find(c => c.email === email);

  if (existingCompany) {
    alert("Email already registered. Please login or use a different email.");
  } else {
    companies.push({ email, password });
    alert("Registration successful. You can now login.");
    document.getElementById("registrationForm").reset();
  }
}


/* Search */

const candidates = [
  { name: "Alan", location: "Delhi", jobRole: "Developer" },
  { name: "Cipher", location: "Bengaluru", jobRole: "Frontend" },
  { name: "Steve", location: "Pune", jobRole: "Backend" },
  { name: "Kevin", location: "Goa", jobRole: "SDE" },
];

function searchCandidates() {
  const location = document.getElementById("locationInput").value.toLowerCase();
  const jobRole = document.getElementById("jobRoleInput").value.toLowerCase();

  const filteredCandidates = candidates.filter(candidate => {
    const candidateLocation = candidate.location.toLowerCase();
    const candidateJobRole = candidate.jobRole.toLowerCase();
    return candidateLocation.includes(location) && candidateJobRole.includes(jobRole);
  });
  displayCandidates(filteredCandidates);
}

function displayCandidates(candidates) {
  const candidateList = document.getElementById("candidateList");

  candidateList.innerHTML = "";

  candidates.forEach(candidate => {
    const listItem = document.createElement("li");
    listItem.innerText = candidate.name;
    candidateList.appendChild(listItem);
  });
}