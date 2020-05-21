// Intro to Linked Lists
/* Linked list is a data structure in which elements are linked using pointers. 
A node represents an element in linked list which have some data and a pointer pointing to next node.
*/
// Advantages and Disadvantages of linked lists
/* Advantages - 
Dynamic Data Structure

Linked list is a dynamic data structure so it can grow and shrink at runtime by allocating and deallocating memeory. So there is no need to give initial size of linked list.

Insertion and Deletion

Insertion and deletion of nodes are really easier. Unlike array here we don’t have to shift elements after insertion or deletion of an element. In linked list we just have to update the address present in next pointer of a node.

No Memory Wastage

As size of linked list can increase or decrease at run time so there is no memory wastage. In case of array there is lot of memory wastage, like if we declare an array of size 10 and store only 6 elements in it then space of 4 elements are wasted. There is no such problem in linked list as memory is allocated only when required.

Implementation

Data structures such as stack and queues can be easily implemented using linked list.
*/
/* Disadvantages - 
Memory Usage

More memory is required to store elements in linked list as compared to array. This is due to the fact that in linked list each node contains a pointer and it requires extra memory for itself.

Traversal

Elements or nodes traversal is difficult in linked list. We can not randomly access any element as we do in array by index. For example if we want to access a node at position n then we have to traverse all the nodes before it. So, time required to access a node is large.

Reverse Traversing

In linked list reverse traversing is really difficult. In case of doubly linked list its easier but extra memory is required for back pointer hence wastage of memory.
*/

// Real World Examples
/* There are plenty of examples of linked lists in the real world, such as waiting in a line, a conga line, and plate dispensers. These all operate on a FIFO principle and are reliant on what happens to the nodes infront for traversal. 
*/
// Pseudocode
/*

*/ 