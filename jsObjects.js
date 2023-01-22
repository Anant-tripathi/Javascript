let person = {
	firstName : "Anant",
	lastName : "Tripathi",
	EnrollmentNo : "A7304820026",
	fullName : function() {
		return this.firstName + " " + this.lastName;
	}
};

console.log("Full Name : " + person.fullName() );


//in the above fullName attribute, the function stored as a property is called a method.
//this keyword refers to an object
//which object depends on how this is being invoked(used or called)
//the this keyword refers to different objects depending on how it is used:
//In an object method, this refers to the object
//Alone, this refers to global object
//In a function, this refers to the global object.
//in an event, this refers to the elemtn that received the event
//methods like call(), apply(), and bind() can refer this to any object.
