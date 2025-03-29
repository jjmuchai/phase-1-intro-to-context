// Your code here
// Function to create an employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create multiple employee records from an array
function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

// Function to add a Time In event to an employee record
function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10)
    });
    return employee;
}

// Function to add a Time Out event to an employee record
function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
    employee.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)
    });
    return employee;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

// Function to calculate total wages for an employee
function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
}

// Function to calculate total payroll for multiple employees
function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
        return totalPayroll + allWagesFor(employee);
    }, 0);
}
