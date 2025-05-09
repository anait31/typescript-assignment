# **Interfaces vs. Types in TypeScript: Key Differences**
## In this blog post, we’ll explore the differences between Interfaces vs Types and when to use each.

## Interfaces
Interfaces are declared using the interface keyword and are primarily used to define object shapes.
## Syntax
interface User {
  name: string;
  age: number;
}
## Types
Types are declared using the type keyword and can represent not just objects but also primitives, unions, tuples, and more.
## Syntax
type User = {
  name: string;
  age: number;
};

**Key Difference:**
# Interfaces are strictly for object shapes.
# Types are more flexible and can define unions, intersections, and literal types.

# When to Use Interfaces vs. Types?
Use Interfaces When ||	Use Types When
Defining object shapes ||	Defining unions, intersections, or tuples
Extending existing types with extends ||	Using advanced type transformations (mapped/conditional types)
Declaration merging is needed ||	Working with primitives (string, number, etc.)
Implementing classes ||	Needing a shorthand for complex type expressions

# Conclusion
* Interfaces are best for object shapes, class implementations, and declaration merging.
* Types are more flexible and better for unions, intersections, and complex type logic.
In most cases, prefer interfaces for objects (especially in OOP) and types for everything else. However, consistency within a project matters more than strict rules.


# **Union and Intersection Types in TypeScript: Practical Examples**
TypeScript enhances JavaScript by adding a powerful type system. Two of its most useful features are union types (|) and intersection types (&). These help in defining flexible and precise type constraints. In this blog, we’ll explore how they work with real-world examples.

##. **Union Types (|)**
A union type allows a variable to be one of several types. Suppose we have a function that accepts either a string or a number:
function formatId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toFixed(2);
  }
}

console.log(formatId("abc123"));
console.log(formatId(3.14159));
##Key Use Case:
* Handling API responses that could be string or number.
* Supporting multiple input types in a function

## **Intersection Types (&)**
An intersection type combines multiple types into one. Suppose we have a User and Permissions type, and we want a type that has both:
type User = {
  name: string;
  email: string;
};
type Permissions = {
  canEdit: boolean;
  canDelete: boolean;
};
type AdminUser = User & Permissions;
const admin: AdminUser = {
  name: "Alice",
  email: "test@example.com",
  canEdit: true,
  canDelete: false,
};
##Key Use Case:
* Extending existing types without modifying them.
* Combining multiple interfaces into a single type.

# **Conclusion**
* Union types (|) help in scenarios where a value can be one of several types.
* Intersection types (&) are useful for combining multiple types into a single, more complex type.
