// Function to calculate grade based on marks
function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A";
  } else if (marks >= 80 && marks < 90) {
    return "B";
  } else if (marks >= 70 && marks < 80) {
    return "C";
  } else if (marks >= 60 && marks < 70) {
    return "D";
  } else if (marks >= 0 && marks < 60) {
    return "F";
  } else {
    return "Invalid";
  }
}

// Main function to prompt user and display grade
function main() {
  let input = prompt("Enter your marks (out of 100):");
  let marks = parseFloat(input);

  if (isNaN(marks)) {
    console.error("Error: Please enter a valid number.");
  } else if (marks < 0 || marks > 100) {
    console.error("Error: Marks should be between 0 and 100.");
  } else {
    let grade = calculateGrade(marks);
    if (grade === "Invalid") {
      console.error("Error: Invalid marks entered.");
    } else {
      console.log(`Your grade is ${grade}`);
    }
  }
}

// Run the main function
main();
