
// Remove duplicates from an array.?

let str="pavan is is is a good boy"
function duplicate (arr){
    let n =arr.split(" ")
   let never =[]
   for (let word of n){
    if (!never.includes(word)){
        never.push(word)
    }
   }
   return never.join(" ")
}
console.log(duplicate(str))
