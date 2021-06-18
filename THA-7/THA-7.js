//1. Write a JavaScript program to list the properties of a JavaScript object.

var student={
    name:"David Ray",
    sclass:"VI",
    rollno:12,
};

console.log(Object.keys(student));
document.write(Object.keys(student)+"<br>");

document.write("<br>");



//2. 2. Write a JavaScript program to delete the rollno property from the following object.

console.log("The value before deleting rollno property:");
document.write("The value before deleting rollno property:" +"<br>");

console.log(student);
document.write(student +"<br>");

console.log(delete(student.rollno));
document.write(delete(student.rollno) +"<br>");

console.log("The value of object after deleting the rollno property:");
document.write("The value of object after deleting the rollno property:" +"<br>");

console.log(student);
document.write(student +"<br>");

document.write( "<br>");



//3. Write a JavaScript program to get the length of a JavaScript object.

var student={
    name:"David Ray",
    sclass:"VI",
    rollno:12,
}

console.log("Length of object is :" + Object.keys(student).length);
document.write("Length of object is :" + Object.keys(student).length +"<br>");

document.write( "<br>");



//4. Write a JavaScript program to display the reading status (i.e. display book name,author name and reading status) of the following books. 

var library = [
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead',
         readingStatus: true
     }, 

    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true
    },

    { 
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false ,
    }
]; 

 for(var i=0 ; i<library.length ; i++)
 {
     console.log(library[i].title);
     document.write(library[i].title +"<br>");
     console.log(library[i].author);
     document.write(library[i].author +"<br>");
     console.log(library[i].readingStatus);
     document.write(library[i].readingStatus +"<br>");
 }

 document.write( "<br>");



 //5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

 var vol={

    r:20.78,
    h:10.22,

   }

   var volume= 2*3.14* vol.r * vol.h;

   console.log( "Volume of cylinder:" + volume.toFixed(4));
   document.write( "Volume of cylinder:" +volume.toFixed(4) +"<br>");

   document.write( "<br>");



   //6. Write a JavaScript program to sort an array of JavaScript objects.

   var library = [
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates',
        libraryID: 1254 
    }, 

    {
       title: 'Walter Isaacson', 
       author: 'Steve Jobs', 
       libraryID: 4264,
    },

    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245,
   }

  ]



console.log(Object.entries(library).sort((a,b)=>a[0]-b[0]));
document.write(Object.entries(library).sort((a,b)=>a[0]-b[0])+"<br>");  