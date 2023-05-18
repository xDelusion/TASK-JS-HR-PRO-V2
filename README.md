# HR Pro

Certainly! Here's a step-by-step instruction for students that includes the creation of the classes:

## Step 1: Create the Employee Class

1. Define a class named "Employee".
2. Inside the class, create a constructor method that takes four parameters: `name`, `position`, `yearJoined`, and `salary`.
3. Inside the constructor method, assign the parameter values to respective properties of the class using the "this" keyword.
4. Create a method called `idBadge` that returns the Employee's position and first name in the following format:

```shell
<position>: <First Name>
```

## Step 2: Create the Manager Class

1. Define a class named "Manager" that extends the "Employee" class.
2. Inside the class, create a constructor method that takes five parameters: `name`, `position`, `yearJoined`, `salary`, and `bonusPercentage`.
3. Inside the constructor method, call the super() function to invoke the constructor of the parent class (Employee).
4. Assign the bonusPercentage parameter value to a new property called "bonusPercentage" of the Manager class.
5. Create a method called `salaryIncrease` that will receive a parameter called `increaseAmount` that will increase the salary of the manager.

## Step 3: Create Employee and Manager Instances

1. Create instances of the Employee class using `map` and store them into a variable called `employees` using `employeesJSON`.
2. Create instances of the Manager class using `map` and store them into a variable called `managers` using `managersJSON`.
3. Create a method called `logManagerInfo`. It should follow this format:
   ```shell
   <name>
   since <workingYears>
   Bonus % <bonusPercentage>
   ```
4. Create a method called `getWorkingYears` which will return the total numbers of years the managers has been working.

## Step 4: Perform Array Operations

Use array methods to perform the following operations on the provided arrays of employees and managers:

1. Log the names of all employees using the forEach method using `idBadge` method.
2. Create a variable called `superHeroes` which will have ony employees who are developers.
3. Loop through all the managers and increase their salaries by 1000 using the `increaseAmount` method if they have been working for more than 11 years.
4. Display iterate over all the managers and invoke the `logManagerInfo` method.
5. Create a new array containing the names of managers whose yearJoined is before 2012 and store in into a variable called `seniorExecutives`.
6. Return one manager with a bonusPercentage of 0.1 and save it to a variable called `lowestBonus`.
7. Get the first employee with a salary greater than 8000 using the find method into a variable called `promotionCandidate`.

## Bonus

1. Find the employee with the highest salary and save it in a variable called `mostPaidEmployee`.
2. Calculate the total salary of all employees and store it into a variable called `totalSalaries`.
3. Sort the employees array based on their yearJoined in ascending order into a variable called `employeesSorted`.
