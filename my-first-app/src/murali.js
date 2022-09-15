import React from "react";
//rules for writing html elements in jsx
//1)write single element inside jsx
//with jsx 
// function Loki(){
//  return <h1>by uisng jsx we can create html elements easily</h1>
// }
//1)write single element inside jsx
//without of jsx we write html in reat here we get error
// function Loki(){
//  return <h1>by uisng jsx we can create html elements easily</h1>
//  <h1>by uisng jsx we can create html elements easily</h1>
// }
//to avoid this we use paresent element and write a elemnts inside this
// function Loki(){
//     return <div>
//         <h1>by uisng jsx we can create html elements easily</h1>
//     <h1>by uisng jsx we can create html elements easily</h1>
//     </div>
//    }
//we want to write html element beside return element here we did not get output we get error
// function Loki(){
//         return
//             <h1>by uisng jsx we can create html elements easily</h1>
//        }

//we can write after the retun when it consist paranthities
// function Loki(){
//         return (
//             <h1>it consist paranthities</h1>
//         ) ;
//        }
//arrow functions here we did not use component name as like function component here use use component name as variable.
// const Loki=()=> {
//     return (
//         <h1>arrow function</h1>
//     ) ;
// }
//writing of class name in jsx we use className and also the class name follow camel case conversion here the class name writing is simple compare to creareElement concept
// const Loki=()=> {
//     return (
//         <h1 className="loki">className</h1>
//     ) ;

// }
// here we want to follow self closing tag concept or else we grt error
/* <img src="" alt=""/> //this is selef closing tag */
/* <p></p> //if we cant to disaplay any content on that time we for non self closing tag concept */
//in jsx we can write java script code also. in flower braces on html element
//in html it is not possible to write js in html element
 const name="jegini lokesh" 
 const Loki=()=> {
    return (
        <h1 className="loki">here we can write java script code by using flower braces on in between open and close tag { name}</h1>
    ) ;

}
// function Loki(){
//     // return React.createElement('h1',{className:'welcome'},"welcome to learn java script"); // dont use "=" equal symbol nearer call name use ":" colen symbol(when we try to create manually we pass three parametes first one is tag name ,second one is class name ,third one is out put text)//this is gor display single element 
//     return React.createElement('div',{className:"weclocme"},React.createElement('h1',{className:"second"},"wecome to learn parent concept"));// before i write elemrnt spelling wrong it shos compiled sucessfull but out not shown in ui screeen
// }
export default Loki;