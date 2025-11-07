
// // Remove duplicates from an array.?

// let str="pavan is is is a good boy"
// function duplicate (arr){
//     let n =arr.split(" ")
//    let never =[]
//    for (let word of n){
//     if (!never.includes(word)){
//         never.push(word)
//     }
//    }
//    return never.join(" ")
// }
// console.log(duplicate(str))

// // Sort an array in ascending order without using sort()..?

// let arr =[1,2,3,4,5,6,7,8]
// let n=arr.length
// function secondLarge(arr)
// {
//     for (i=0;i<n;i++){
//         for (j=0;j<n;j++){
//             if (arr[j]>arr[j+1]){
//                 let tem=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=tem
//             }
//         }
//     }
//     return arr;
// }
// console.log(secondLarge(arr[ n-2]))



// // Swap two variables without using a third variable...?


// function swap(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("After Swap:a=", a,"b=", b)
// }
// swap(40,70)


// // Implement a function like Array.prototype.map()...?



// function myMap(arr,callback){
//     let result =[];
//     for (let i=0;i<arr.length;i++)
//     {
//         result.push(callback(arr[i],i,arr);)
//         // Remove duplicates from an array.?
        
//         let str="pavan is is is a good boy"
//         function duplicate (arr){
//             let n =arr.split(" ")
//            let never =[]
//            for (let word of n){
//             if (!never.includes(word)){
//                 never.push(word)
//             }
//            }
//            return never.join(" ")
//         }
//         console.log(duplicate(str))
        
//         // Sort an array in ascending order without using sort()..?
        
//         let arr =[1,2,3,4,5,6,7,8]
//         let n=arr.length
//         function secondLarge(arr)
//         {
//             for (i=0;i<n;i++){
//                 for (j=0;j<n;j++){
//                     if (arr[j]>arr[j+1]){
//                         let tem=arr[j]
//                         arr[j]=arr[j+1]
//                         arr[j+1]=tem
//                     }
//                 }
//             }
//             return arr;
//         }
//         console.log(secondLarge(arr[ n-2]))
        
        
        
//         // Swap two variables without using a third variable...?
        
        
//         function swap(a,b){
//             a=a+b;
//             b=a-b;
//             a=a-b;
//             console.log("After Swap:a=", a,"b=", b)
//         }
//         swap(40,70)
        
        
//         // Implement a function like Array.prototype.map()...?
        
        
        
//         function myMap(arr,callback){
//             let result =[];
//             for (let i=0;i<arr.length;i++)
//             {
//                 result.push(callback(arr[i],i,arr);)
//             }
//             return result;
//         }
//     }
//     return result;
// }







// function findDuplicateWords(text) {
//     const words = text.toLowerCase().match(/\b\w+\b/g); // Split into words
//     const counts = {};       // To store word frequencies
//     const duplicates = [];   // To store duplicate words
  
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
  
//       if (counts[word] === undefined) {
//         counts[word] = 1;
//       } else {
//         counts[word]++;
//         // Add to duplicates only the first time we find it's more than 1
//         if (counts[word] === 2) {
//           duplicates.push(word);
//         }
//       }
//     }
  
//     return duplicates;
//   }
  
//   // Example usage:
//   const data = "This is a test. This test is only a test.";
//   console.log(findDuplicateWords(data)); 
//   // Output: ['this', 'is', 'a', 'test']
  



//   function newFn(){
//     a=10;
//     console.log()
//   }