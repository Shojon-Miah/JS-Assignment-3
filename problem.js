

/**

Assignment 3:
Problem-01: New Price for Eid Sale
Function Name Must be newPrice()
আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউণ্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

Input :  
প্রথম ইনপুট:  একটি সংখ্যা যা মূল দাম। currentPrice  হবে Number 
দ্বিতীয় ইনপুট: একটি সংখ্যা যা ডিসকাউন্ট। discount হবে Number in  %

Output :   ফাংশনটি ডিসকাউন্ট করে নতুন দাম (Number) return করবে।  Output দশমিক সংখ্যা ও হতে পারে।  দশমিক এর পর ৩ ঘর  দেখাতে হবে।

 
Challenge 📢 : যদি কোনো ইনপুট সংখ্যা না হয় , অথবা discount এর পরিমান যদি 0  এর থেকে কম এবং 100 এর চেয়ে বেশি হয় তাহলে  Invalid স্ট্রিং  রিটার্ন করবে। 



Hints 💡:  যদি একটি প্রোডাক্টের currentPrice = 1500 টাকা এবং discount = 20% হয়, তাহলে:
ডিসকাউন্টের পরিমাণ বের করো, ডিসকাউন্ট পরিমাণ = (1500 * 20) / 100 = 300 টাকা


SAMPLE INPUT
SAMPLE OUTPUT
1500, 20
1200.000
2000, 15
1700.000
1200, 7
1116.000
"1000", 10
Invalid
2000, 17.17
1656.600
500, "5"
Invalid


// /*function signature/sample */
// function newPrice(currentPrice , discount ) {
//           // You have to write your code here
// }



// Problem-02: OTP Validation for Zapshift
// Function Name Must be validOtp()

// Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে। 
// ফাংশনটি একটি Boolean (true/false) রিটার্ন করবে। যদি ইনপুটটি সঠিক ফরম্যাটে না থাকে তবে Invalid  রিটার্ন করবে। 

// Input :  ইনপুট হবে একটি string.


// 🚀 Output: 
// Boolean true বা false রিটার্ন করবে


// 🚩 Challenge:
// যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে   Invalid রিটার্ন করতে হবে।

  
// 💡 Validation Rules: 
// ১. OTP অবশ্যই ৮ অক্ষরের (length) হতে হবে। 
// ২. OTP অবশ্যই "ph-" দিয়ে শুরু হতে হবে।


// Hints 💡: startsWith() মেথড ব্যবহার করতে পারো। 


// SAMPLE INPUT
// SAMPLE OUTPUT
// "ph-10985"
// true
// "ph-1234"
// false
// "abc-12345"
// false
// ["ph-10985"]
// Invalid
// 12345678
// Invalid



// /*function signature/sample */
// function validOtp(otp) {
//           // You have to write your code here
// }


// Problem-03: BCS Final Score Calculator
// ⚠️ Function Name Must be finalScore()
// BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Object নেবে এবং নিচের শর্ত ও নিয়ম অনুযায়ী ফলাফল প্রদান করবে।
// 📥 Input:
// একটি Object যার প্রপার্টিগুলো হবে: { right: Number, wrong: Number, skip: Number }



// Output :  ফাইনাল স্কোর হবে নাম্বার এবং রাউন্ডেড। (Number, Rounded)  


// 🎯 BCS পরীক্ষার নিয়ম:
// মোট প্রশ্ন সংখ্যা = ১০০টি।
// সুতরাং, ইনপুটে থাকা right + wrong + skip এর যোগফল অবশ্যই ১০০ হতে হবে।


// 🚩 Challenge:
// যদি right + wrong + skip এর যোগফল ১০০ না হয়, তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।


// 💡 Scoring Rules:
// প্রতিটি সঠিক উত্তরের জন্য: +১ পয়েন্ট।
// প্রতিটি ভুল উত্তরের জন্য: -০.৫ পয়েন্ট (০.৫ নম্বর কাটা যাবে)।
// বাদ দেওয়া (skip) প্রশ্নের জন্য: ০ পয়েন্ট।

// 💡Hints: Rounded ভ্যালু বের করার জন্য  Math.round() function ব্যবহার করতে পারো।





// SAMPLE INPUT
// SAMPLE OUTPUT 
// { right: 67, wrong: 23, skip: 10 }
// 56
// { right: 80, wrong: 25, skip: 0 }
// Invalid
// { right: 50, wrong: 10, skip: 40 }
// 45
// { right: 30, wrong: 30, skip: 40 }
// 15
// !@#
// Invalid
// ["Raj"]
// Invalid


// /*function signature/sample */
// function finalScore (omr) {
//           //write your code here
// }



// Problem-04: Upcoming Gono Vote
// ⚠️ Function Name Must be gonoVote()
// আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ (Majority) কি না।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) অথবা equal (string) রিটার্ন করবে।
// 📥 Input:
// ইনপুট হবে একটি Array। যেমন: ["ha", "na", "ha"]


// 🚀 Output:
// যদি "ha" সংখ্যা "na" এর বেশি → true
// যদি "ha" সংখ্যা "na" এর সমান → “equal”
// অন্যথায় → false


// 🚩 Challenge:
// যদি ইনপুটটি একটি Array না হয় (যেমন: String, Number বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।



// SAMPLE INPUT
// SAMPLE OUTPUT
// ["ha", "na", "ha", "na"]
// equal
// ["ha", "na", "na"]
// false
// ["ha", "ha", "ha", "na"]
// true                    
// "ha, na"
// Invalid          
// 12345
// Invalid



// /*function signature/sample */
// function gonoVote(array) {
//           //write your code here
// }






// Problem-05: Text Analyzer for an AI Company
// ⚠️ Function Name Must be analyzeText()
// জিহাদ একটি AI কোম্পানিতে কাজ করে।
//  অনেক সময় ইউজাররা অনেক বড় লেখা (text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে।
// তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।
// তোমাকে একটি ফাংশন লিখতে হবে, যা—
// 1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
//  2️⃣ ওই text থেকে  সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
//  3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
//   ➡️ স্পেস (space) গণনায় ধরা হবে না
// এই তথ্যগুলো ব্যবহার করে জিহাদ একটি ছোট summary তৈরি করতে পারবে।
// 👉 তোমার কাজ হলো এই লজিক ব্যবহার করে একটি ফাংশন তৈরি করা।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি String নেবে এবং একটি Object রিটার্ন করবে যেখানে সবচেয়ে বড় শব্দ এবং মোট ক্যারেক্টার সংখ্যা থাকবে।

// 📥 Input:
// ইনপুট হবে একটি String (একটি পূর্ণ বাক্য/ Sentence)। 


// 🚀 Output:
// Object: { longwords:String, token: Number }
// longwords → সবচেয়ে বড় শব্দের একটা string  (highest সাইজ এর ওয়ার্ড multiple হলে প্রথম টা)
// token → Sentence এর total length without স্পেস 




// Challenge 📢 : যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।


// Hints 💡:  split(), join() মেথড ব্যবহার করতে পারো। 


// SAMPLE INPUT
// SAMPLE OUTPUT
// "I am a little honest person"
// { longwords: "little", token: 22 }
// "Hello world"
// { longwords: "Hello", token: 10 }
// "Keep coding keep shining"
// { longwords: "shining", token: 21 }
// 12345
// Invalid
// "Programming is fun"
// { longwords: "Programming", token: 16 }
// "A quick brown fox"
// { longwords: "quick", token: 14 }
// " "
// Invalid


// /*function signature/sample */
// function  analyzeText(str) {
//           // You have to write your code here
// }




*/