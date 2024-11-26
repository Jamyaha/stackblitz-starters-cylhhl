fetch('mock.json')
  .then(response => response.json())
  .then(data => {
    students.push(...data);
    displayStudents();
  })
  .catch(error => console.error('Error fetching student data:', error));


function generateRandomGPA() {
  return (Math.random() * (4.0 - 2.6) + 2.6).toFixed(2);  
}

function displayStudents() {
  studentListElement.innerHTML = '';  
  const filteredStudents = students.filter(student =>
    (`${student.first_name} ${student.last_name}`).toLowerCase().includes(query.toLowerCase())
  );
  
  if (filteredStudents.length > 0) {
    filteredStudents.forEach(student => {
      const gpa = generateRandomGPA();  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.first_name} ${student.last_name}</td>
        <td>${student.major}</td>
        <td>${student.college}</td>
        <td>${student.classification}</td>
        <td>${student.first_name.charAt(0).toLowerCase()}${student.last_name.toLowerCase()}@tnstate.edu</td>
        <td>${gpa}</td> <!-- Display generated GPA -->
        <td>${student.employer || 'N/A'}</td>
        <td><button class="preview-btn" data-id="${student.id}" data-gpa="${gpa}">Preview</button></td>
      `;
      studentListElement.appendChild(row);
    });
    prevPageButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
    nextPageButton.style.display = currentPage * resultsPerPage < filteredStudents.length ? 'inline-block' : 'none';
    noResults.style.display = 'none';
  } else {
    noResults.style.display = 'block';
  }
}


const studentModal = document.getElementById('studentModal');
const closeModalButton = document.getElementsByClassName('close')[0];

studentListElement.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('preview-btn')) {
    const studentId = e.target.getAttribute('data-id');
    const studentGPA = e.target.getAttribute('data-gpa');  
    const student = students.find(s => s.id === parseInt(studentId));

    if (student) {
      document.getElementById('modalFullName').textContent = `${student.first_name} ${student.last_name}`;
      document.getElementById('modalMajor').textContent = student.major;
      document.getElementById('modalCollege').textContent = student.college;
      document.getElementById('modalClassification').textContent = student.classification;
      document.getElementById('modalEmail').textContent = `${student.first_name.charAt(0).toLowerCase()}${student.last_name.toLowerCase()}@tnstate.edu`;
      document.getElementById('modalGpa').textContent = studentGPA;  
      document.getElementById('modalEmployer').textContent = student.employer || 'N/A';

      studentModal.style.display = 'block';
    }
  }
});

closeModalButton.addEventListener('click', () => {
  studentModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === studentModal) {
    studentModal.style.display = 'none';
  }
});
