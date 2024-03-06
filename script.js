
// Question 1-------------------------

// const numbers = [11, 12, 13, 14, 15];

// const mapResult = numbers.map((number) => {
  
//   return number * number; 
// });

// console.log(mapResult); 


// Question 2-------------------
// function calculateGrade(score) {
    
//     const grade = score >= 90 ? 'A' : 
//                   score >= 80 ? 'B' : 
//                   score >= 70 ? 'C' : 
//                   score >= 60 ? 'D' : 'F';
  
//     return grade;
//   }
  

//   const studentScore = 85;
//   const studentGrade = calculateGrade(studentScore);
//   console.log(`Student Score: ${studentScore}, Grade: ${studentGrade}`);



// Question 3-------------------------------

// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2022
//   };
  
//   function changeCarYear(carObject, newYear) {
//     carObject.year = newYear;
//   }
//   changeCarYear(car, 2023);
  
//   const { model, year } = car;
//   console.log(`Car Model: ${model}, Year: ${year}`);
  
// Question 4----------------------------

// const number = [12,11,13,6,10,25]

// function isprime(num) {
//      if(num<=1){
//         return false
//      }

//    for(let i = 2; i<=Math.sqrt(num);i++){

//     if(num%i==0){
//         return false
//     }
//    }

//    return true


// }

//  const filter = number.filter((numbers)=>{
//    return isprime(numbers)  
          

//  })

//  console.log(filter)


// Question 5--------------------------------------------------

// Map function uses============>

// const numbers = [3, 2, 9, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers)


// Filter function uses=============>
// const array = [11,12,13,13,14,14]

// const filter = array.filter((value , index ,array)=> array.indexOf(value) === index            )

// console.log(filter)

// Reduce function uses=================>

// const array = [10,20,30,40]
// const average = array.reduce((sum,num)=> sum + num,0  )/array.length
// console.log(average)

// Question 6----------------------------------------------------

// async function fetchData() {
//     const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  
//     try {
//       const response = await fetch(apiUrl);
  
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data. Status: ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       console.log('Fetched data:', data);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   }
  
//   fetchData();
  


// Question 7--------------------------------------------------------------------------


const person = {
    name: "RAJ",
    address: {
      city: "PATNA ",
      zipCode: "80008540"
    },
    contact: null

  };
  

  const phoneNumber = person?.contact?.phone;
  
  console.log("Phone Number:", phoneNumber);
  


