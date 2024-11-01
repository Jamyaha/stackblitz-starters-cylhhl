// Sample student data
const students = [
  {
    name: 'Charles Darwin',
    id: 'ABC28491178',
    status: 'None sent',
    matching: 'Matched',
    score: 'N/A',
  },
  {
    name: 'Marie Curie',
    id: 'XYZ123456',
    status: 'Interviewed',
    matching: 'Not Matched',
    score: '85',
  },
  {
    name: 'Ilbert Einstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Plbert Einstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Kolbert Jinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Ylbert Winstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Nibert Kinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Aobert Minstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Unbert Pinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Ant Qinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Hand Binstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Obama Linstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Kamala Sinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Zinele Uinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Maimuna Binstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Jean Vinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Byran Cinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '65',
  },
  {
    name: 'Hrean Xinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Polte Haulson',
    id: 'DEF509534',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
  },
  {
    name: 'Georgia Peach',
    id: 'HUS73755',
    status: 'Interviewed',
    matching: 'Not Matched',
    score: '60',
  },
  // Add more student objects as needed
];

function displayStudents(studentList) {
  const studentListElement = document.getElementById('studentList');
  studentListElement.innerHTML = ''; // Clear previous results

  if (studentList.length === 0) {
    // Create a message when there are no students
    const messageRow = document.createElement('tr');
    const messageCell = document.createElement('td');
    messageCell.colSpan = 5; // Span across all columns
    messageCell.textContent = 'No matching students found.';
    messageCell.style.textAlign = 'center'; // Center the message
    messageRow.appendChild(messageCell);
    studentListElement.appendChild(messageRow);
  } else {
    studentList.forEach((student) => {
      const row = document.createElement('tr');
      row.innerHTML = `  
            <td>${student.name}</td>  
            <td>${student.id}</td>  
            <td>${student.status}</td>  
            <td>${student.matching}</td>  
            <td>${student.score}</td>  
        `;
      studentListElement.appendChild(row);
    });
  }
}

// Function to filter students based on search input
function filterStudents() {
  const searchInput = document
    .getElementById('searchInput')
    .value.toLowerCase();
  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchInput) ||
      student.id.toLowerCase().includes(searchInput)
    );
  });
  displayStudents(filteredStudents);
}

// Event listener for the search button
document
  .getElementById('searchButton')
  .addEventListener('click', filterStudents);

// Initial display of all students
displayStudents(students);
