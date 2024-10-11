const totalEC = 60; // Total ECs
const ecValues = [2.5, 5, 5, 12.5, 10, 10, 1.25, 10, 1.25, 2.5]; // ECs per course

// Function to save grades in LocalStorage
function saveGrade(input, index) {
    localStorage.setItem('grade-' + index, input.value);
}

// Function to load grades from LocalStorage
function loadGrades() {
    document.querySelectorAll('.Mygrade').forEach((input, index) => {
        input.value = localStorage.getItem('grade-' + index) || '';
    });
}

// Function to update progress bar
function updateProgressBar() {
    let earnedEC = 0; // Earned ECs

    //  earned ECs for grades >= 5.5
    document.querySelectorAll('.Mygrade').forEach((input, index) => {
        const grade = parseFloat(input.value);
        if (grade >= 5.5) {
            earnedEC += ecValues[index] || 0;
        }
    });

    // Calculate percentage and update progress bar
    const progressPercentage = (earnedEC / totalEC) * 100;
    const progressBarFill = document.querySelector('.progress-bar-fill');
    progressBarFill.style.width = progressPercentage + '%';
    progressBarFill.style.backgroundColor = earnedEC >= 45 ? 'yellow' : '#F0944D';
    document.querySelector('.progress-text').textContent = `${earnedEC} EC van de ${totalEC} EC behaald`;
}

// saves grade
document.querySelectorAll('.Mygrade').forEach((input, index) => {
    input.addEventListener('input', () => {
        saveGrade(input, index);
        updateProgressBar();
    });
});

// Load saved grades and update progress bar 
window.onload = function () {
    loadGrades();
    updateProgressBar();
};
