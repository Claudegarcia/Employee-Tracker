-- seed is used to prepopulate the table
use employee_db;

-- populate departments
INSERT INTO departments (department_name)
VALUES ("Human Resource Management"), ("Accounting"), ("Marketing"), ("IT"), ("Operations Management");

-- populate employee_roles
INSERT INTO employee_roles (title, salary, department_id)
VALUE ("Supervisor", 70000, 1), ("Accountant", 60000, 2), ("Director of Marketing", 100000, 3), ("Hardware Technician", 65000, 4), ("Manager", 50000, 5);

-- populate employees
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE ("Robert", "Beck", 1, NULL), ("Bruce", "Wills", 2, 1), ("Tayla", "Skinner", 3, 2), ("Duncan", "Burns", 3, 2), ("Max", "Rose", 4, 3), ("Magnus", "Warren", 4, 3), ("Maci", "Hermin", 5, 4), ("Harrison", "Davis", 5, 4);