/**
 * 📮 Dak Ghar Parcel Service - JSON & Type Conversion
 *
 * Dak Ghar (Post Office) mein parcels ka data manage karna hai.
 * Kabhi JSON mein convert karna padta hai, kabhi JSON se wapas laana
 * padta hai, kabhi ek type se doosre mein. Type conversion ka journey!
 *
 * Methods to explore: JSON.stringify(), JSON.parse(),
 *   String(), Number(), Array.from()
 *
 * Functions:
 *
 *   1. parcelToJSON(parcel)
 *      - JSON.stringify() se parcel object ko JSON string mein convert karo
 *      - try-catch use karo (circular references ke liye)
 *      - Agar parcel undefined hai ya error aaye, return ""
 *      - Example: parcelToJSON({id:"P001", weight:2.5})
 *                 => '{"id":"P001","weight":2.5}'
 *
 *   2. jsonToParcel(jsonString)
 *      - JSON.parse() se JSON string ko wapas object mein convert karo
 *      - try-catch use karo (invalid JSON ke liye)
 *      - Agar jsonString string nahi hai ya invalid JSON hai, return null
 *      - Example: jsonToParcel('{"id":"P001","weight":2.5}')
 *                 => {id:"P001", weight:2.5}
 *
 *   3. convertToString(value)
 *      - String() se kisi bhi value ko string mein convert karo
 *      - Example: convertToString(42) => "42"
 *      - Example: convertToString(true) => "true"
 *      - Example: convertToString(null) => "null"
 *      - Example: convertToString(undefined) => "undefined"
 *
 *   4. convertToNumber(value)
 *      - Number() se value ko number mein convert karo
 *      - Agar result NaN hai, toh NaN hi return karo (caller handle karega)
 *      - Example: convertToNumber("42.5") => 42.5
 *      - Example: convertToNumber(true) => 1
 *      - Example: convertToNumber("hello") => NaN
 *      - Example: convertToNumber("") => 0
 *
 *   5. stringToChars(str)
 *      - Array.from() se string ko characters ki array mein convert karo
 *      - Agar str string nahi hai, return []
 *      - Example: stringToChars("Dak") => ["D", "a", "k"]
 *      - Example: stringToChars("") => []
 *
 * @example
 *   parcelToJSON({id:"P001"})            // => '{"id":"P001"}'
 *   jsonToParcel('{"id":"P001"}')        // => {id:"P001"}
 *   convertToString(42)                   // => "42"
 *   stringToChars("Dak")                  // => ["D", "a", "k"]
 */
//  *   1. parcelToJSON(parcel)
//  *      - JSON.stringify() se parcel object ko JSON string mein convert karo
//  *      - try-catch use karo (circular references ke liye)
//  *      - Agar parcel undefined hai ya error aaye, return ""
//  *      - Example: parcelToJSON({id:"P001", weight:2.5})
//  *                 => '{"id":"P001","weight":2.5}'
export function parcelToJSON(parcel) {
  if( typeof parcel === "undefined" ) return ""
  try { 
  const jsonString = JSON.stringify(parcel)
  return jsonString
  }
  catch(error) {return ""}
}
//  2. jsonToParcel(jsonString)
//  *      - JSON.parse() se JSON string ko wapas object mein convert karo
//  *      - try-catch use karo (invalid JSON ke liye)
//  *      - Agar jsonString string nahi hai ya invalid JSON hai, return null
//  *      - Example: jsonToParcel('{"id":"P001","weight":2.5}')
//  *                 => {id:"P001", weight:2.5}
//  *
export function jsonToParcel(jsonString) {
    if(typeof  jsonString !=="string" ) return null 
    try {
      const obj = JSON.parse(jsonString)
      return obj 
    }
    catch ( invalid )
    {return null }
 }
//  3. convertToString(value)
//  *      - String() se kisi bhi value ko string mein convert karo
//  *      - Example: convertToString(42) => "42"
//  *      - Example: convertToString(true) => "true"
//  *      - Example: convertToString(null) => "null"
//  *      - Example: convertToString(undefined) => "undefined"
export function convertToString(value) {
  const tostirng = String(value)
  return tostirng
}
//   4. convertToNumber(value)
//  *      - Number() se value ko number mein convert karo
//  *      - Agar result NaN hai, toh NaN hi return karo (caller handle karega)
//  *      - Example: convertToNumber("42.5") => 42.5
//  *      - Example: convertToNumber(true) => 1
//  *      - Example: convertToNumber("hello") => NaN
//  *      - Example: convertToNumber("") => 0
export function convertToNumber(value) {
  const ans = Number(value)
  return ans;
}
//  5. stringToChars(str)
//  *      - Array.from() se string ko characters ki array mein convert karo
//  *      - Agar str string nahi hai, return []
//  *      - Example: stringToChars("Dak") => ["D", "a", "k"]
//  *      - Example: stringToChars("") => []
export function stringToChars(str) {
    if( typeof str !== "string") return []
    const arrayofchar = Array.from(str)
    return arrayofchar
}
