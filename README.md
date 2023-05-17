# HR Pro

Certainly! Here's a step-by-step instruction for students that includes the creation of the classes:

Step 1: Create the Employee Class

- Define a class named "Employee".
- Inside the class, create a constructor method that takes four parameters: name, position, yearJoined, and salary.
- Inside the constructor method, assign the parameter values to respective properties of the class using the "this" keyword.

Step 2: Create the Manager Class

- Define a class named "Manager" that extends the "Employee" class.
- Inside the class, create a constructor method that takes five parameters: name, position, yearJoined, salary, and bonusPercentage.
- Inside the constructor method, call the super() function to invoke the constructor of the parent class (Employee).
- Assign the bonusPercentage parameter value to a new property called "bonusPercentage" of the Manager class.

Step 3: Create Employee and Manager Instances

- Create instances of the Employee class and the Manager class, providing appropriate values for the constructor parameters.
- Store the instances in variables.

Step 4: Perform Array Operations

- Use array methods like forEach, map, filter, find, reduce, and some to perform the following operations on the provided arrays of employees and managers:
  1. Display the names of all employees using the forEach method.
  2. Create an array of employee positions using the map method.
  3. Filter the employees array to get all developers (position = "Developer") using the filter method.
  4. Find the employee with the highest salary using the reduce method.
  5. Display the names and bonuses of all managers using the forEach method.
  6. Create a new array containing the names of managers whose yearJoined is before 2012 using the filter method.
  7. Calculate the total salary of all employees using the reduce method.
  8. Determine if there is at least one manager with a bonusPercentage of 0.1 using the some method.
  9. Sort the employees array based on their yearJoined in ascending order using the sort method.
  10. Get the first employee with a salary greater than 6000 using the find method.
