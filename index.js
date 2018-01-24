
// class Multiplier{
// 	constructor(){
// 		this.number = 1;
// 		}
// 	multiply(input){
	
// 		this.number = this.number * input;
// 		return this.number
// 	}
// 	getCurrentValue(){
// 		return this.number + " is the current value"
// 	}
// }
// var test = new Multiplier();
// console.log(test.multiply(prompt("enter starting value ")))

// console.log(test.getCurrentValue())

// part 2  Implement an object model that allows you to store strings that represent a Photo. 
//Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
//Each Photo should store the photo's file name and the location the photo was taken in as strings. 
//Create instances of each object defined to prove that your object model works.        //


// class Album{
// 	constructor(photos){
// 		this.photos = [];
// 		}
// 	addnewphoto(input){
// 		this.photos.push(input)
// 	}
// 	listphotos(){
// 		for (var i = 0; i < this.photos.length; i++) {
// 			console.log("name: " +this.photos[i].name + "	/location taken : " + this.photos[i].location )

// 		}
		
// 	}
// 	acessphoto(number){
// 		return this.photos[number -1]
// 	}

// }

// class Photo{
// 	constructor(name, location){
// 		this.name = name;
// 		this.location = location;
// 	}
// }


// var photo1 = new Photo('ugangan kunckles', 'virtual reality');
// var photo2 = new Photo('Im hungry', 'In class')
// var ThisAlbum = new Album();

// ThisAlbum.addnewphoto(photo1)
// ThisAlbum.addnewphoto(photo2)


//Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
//Each of these objects should have attributes and methods pertinent to what they describe. 
//Also create a School object that should be able to store instances of students and teachers. 
//Make sure to write code afterwards that creates instances of these objects to make sure that what 
//you've written works well and you're able to store the necessary data in each object.

class Person{
	constructor(name, age){
	this.name = name;	
	this.age = age;
	}
}

class Student extends Person{
	constructor(name, age, grade){
	super(name, age)
	this.grade = grade;
}
}
class Teacher extends Person {
	constructor(name, age, major){
		super(name, age)
		this.major = major;
	}

}

class School{
	constructor(students, teachers){
	this.students = [];
	this.teachers = [];
	}
	addstudent(input){
		this.students.push(input)
	}
	addteacher(input){
		this.teachers.push(input)
	}
	listall(){
		for (var i = 0; i < this.students.length; i++) {
			var text = " ";
			for (var x in this.students[i]){
				
				text += this.students[i][x] + " ";	
				
			}console.log('Student: ' + text) 

		}
		for (var i = 0; i < this.teachers.length; i++) {
			var text2 = " ";
			for (var x in this.teachers[i]){
				
				text2 += this.teachers[i][x] + " ";	
				}
			}console.log('teacher: ' + text2)
		}
	}		

var badSchool = new School();

var student1 = new Student('kunckles', 15, '10th grade');
var teacher1 = new Teacher('kunckles', 30, 'english');
var student2 = new Student('sonic', 15, '11th grade');
badSchool.addstudent(student1)
badSchool.addteacher(teacher1)
badSchool.addstudent(student2)

