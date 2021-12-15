/*1. Declare an _empty_ array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using _console.log()_
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using _sort()_ method
16. Reverse the array using _reverse()_ method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies*/
const arr=Array();
const arr2= [1,2,3,4,5,6,7]
console.log(`arr_length:${arr.length}, arr2_length:${arr2.length}`);
console.log(`First_item:${arr2[0]}, middle: ${arr2[(arr2.length-1)/2]},last:${arr2[arr2.length-1]} `);
mixedDataTypes=[1,"boy",true,{"height":25,"weight":50},1000, "Under",false];
console.log(mixedDataTypes.length)
const itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle ","Amazon"];
console.log(itCompanies,itCompanies.length);
console.log(itCompanies[0],itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length-1]);
for (word in itCompanies){
    console.log(itCompanies[word]);
}
console.log(`${itCompanies.toString(",")} are big IT companies`)
if (itCompanies.includes("IBM")==true){
    console.log("IBM");
}else{
    console.log(`Company not found`)
}
var newitCompanies=[];
for (word in itCompanies){
    if (itCompanies[word].includes("o","O")==true){
        newitCompanies.push(itCompanies[word]);
    }
}
console.log(newitCompanies);
itCompanies.sort();
itCompanies.reverse();
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
console.log(itCompanies);
console.log(itCompanies.shift());
itCompanies
console.log(itCompanies.pop());