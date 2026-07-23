
// Task 1: Welcome Message

console.log("Welcome to the Hospital Patient System");

// Task 2: Declare and Update Variables

let systemName = "Hospital Patient System";
let totalPatients = 4;

console.log("System Name:", systemName);
console.log("Total Patients:", totalPatients);

// Task 3: Identify Datatypes

let patientAge = 25;           
let patientName = "John";     
let isAdmitted = true;         
console.log(typeof patientAge);
console.log(typeof patientName);
console.log(typeof isAdmitted);

// Task 4: Perform a Calculation

let age1 = 45;
let age2 = 30;
let ageDifference = age1 - age2;
console.log("Age Difference:", ageDifference);

// Task 5: Classify a Record (if-else)

let age = 65;
if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Adult Patient");
}

// Task 6: Iterate Over Records

let patients = [
    { id: 1, name: "John", age: 25, disease: "Fever" },
    { id: 2, name: "Alice", age: 45, disease: "Diabetes" },
    { id: 3, name: "Bob", age: 60, disease: "Heart Disease" },
    { id: 4, name: "Emma", age: 35, disease: "Cold" }
];

console.log("\nPatient Details:");
for (let i = 0; i < patients.length; i++) {
    console.log(patients[i]);
}

// Task 7: Skip or Stop Early
// Skip patients whose age is below 30

console.log("\nPatients Age 30 and Above:");
for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < 30) {
        continue;
    }
    console.log(patients[i]);
}

// Task 8: Add & Find
// Add new patient

patients.push({
    id: 5,
    name: "David",
    age: 70,
    disease: "Asthma"
});
console.log("\nAfter Adding New Patient:");
console.log(patients);

// Find patient with highest age

let oldestPatient = patients[0];
for (let i = 1; i < patients.length; i++) {
    if (patients[i].age > oldestPatient.age) {
        oldestPatient = patients[i];
    }
}
console.log("Oldest Patient:", oldestPatient);

// Task 9: Remove & Sort
// Remove last patient

patients.pop();
console.log("\nAfter Removing Last Patient:");
console.log(patients);
// Sort by age
patients.sort(function(a, b) {
    return a.age - b.age;
});
console.log("\nSorted by Age:");
console.log(patients);

// Task 10: Create and Print an Object

let patient = {
    id: 101,
    name: "Michael",
    age: 40,
    gender: "Male",
    disease: "Malaria"
};
console.log("\nPatient Object:");
console.log("ID:", patient.id);
console.log("Name:", patient.name);
console.log("Age:", patient.age);
console.log("Gender:", patient.gender);
console.log("Disease:", patient.disease);