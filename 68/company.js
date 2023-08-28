'use strict';
function CompanyCreator(coName, coAddress, employeeArray) {
    return {
        coName,
        coAddress,
        employeeArray,

        addEmployee(EmpName, empDept) {
            const newEmp = employeesCreator(EmpName, empDept)
            this.employeeArray.push(newEmp);
        },

        print: function () {
            console.log(`company Name: ${this.coName}\tCompany Address ${this.coAddress}`)
            for (var i = 0; i < employeeArray.length; i++) {
                console.log(`employee: ${employeeArray[i].name}, ${employeeArray[i].department}`);
            }
        }
    }
}
function employeesCreator(name, department) {
    return {
        name,
        department,

        printEmp() {
            console.log(`employee Name: ${this.name} employee department: ${this.department}`)
        }
    };
}

const emp1 = employeesCreator('John Doe', 'Accounting');
const emp2 = employeesCreator('Sarah Yak', 'Accounting');
const emp3 = employeesCreator('Mike Kalas', 'Pending');
const emp4 = employeesCreator('Moe Jack', 'Pending');
const employees1 = [];
employees1.push(emp1);
employees1.push(emp2);
employees1.push(emp3);
employees1.push(emp4);

const company = CompanyCreator('Signet', '150 Oberlin', employees1);
company.addEmployee('Alice Smith', 'HR');
company.addEmployee('Bobby Johnson', 'Accounting');

company.print();
