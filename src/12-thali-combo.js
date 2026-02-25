/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
//  1. createThaliDescription(thali)
//  *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
//  *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
//  *      - name ko UPPERCASE karo, price ko 2 decimal places tak
//  *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
//  *      - Agar thali object nahi hai ya required fields missing hain, return ""
//  *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
//  *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
//  *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
export function createThaliDescription(thali) {
      if( typeof thali !== "object" || thali === null || typeof thali.name !== "string" ||
         !Array.isArray(thali.items) || typeof thali.price !== "number" ||  typeof thali.isVeg !== "boolean"
      ) return ""
      
      const nametoup = thali.name.toUpperCase();
      const item = thali.items.join(", ");
      const fprice = thali.price.toFixed(2);
      const isveg = thali.isVeg
      const ans = thali.isVeg ? "Veg" : "Non-Veg";
      return `${nametoup} (${ans}) - Items: ${item} - Rs.${fprice}`
}
// 2. getThaliStats(thalis)
//  *      - Array of thali objects ka stats nikalo
//  *      - .filter() se veg/non-veg count
//  *      - .reduce() se average price 
//  *      - Math.min/Math.max se cheapest/costliest
//  *      - .map() se saare names
//  *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
//  *                  cheapest (number), costliest (number), names (array) }
//  *      - Agar thalis array nahi hai ya empty hai, return null
//  Data format: thali = {
//  *   name: "Rajasthani Thali",
//  *   items: ["dal baati", "churma", "papad"],
//  *   price: 250,
//  *   isVeg: true
//  * }
export function getThaliStats(thalis) {
  if( !Array.isArray(thalis)  || thalis.length===0) return null 
const vegCount = thalis.filter(it => it.isVeg).length;
const nonVegCount = thalis.filter(it => !it.isVeg).length;
 let avgPrice= thalis.reduce((sum , it)=> {
   return sum=sum+it.price
 },0);
 const totalThalis= thalis.length;
 avgPrice = avgPrice/totalThalis;
  const prices = thalis.map( it=> it.price)
  const costliest = Math.max(...prices);
  const cheapest = Math.min(...prices);
  const names = thalis.map( it => it.name); 
 return {
  totalThalis,
  vegCount,
  nonVegCount,
  avgPrice: avgPrice.toFixed(2),
  cheapest,
  costliest,
  names
}};
//  *   3. searchThaliMenu(thalis, query)
//  *      - .filter() + .includes() se search karo (case-insensitive)
//  *      - Thali match karti hai agar name ya koi bhi item query include kare
//  *      - Agar thalis array nahi hai ya query string nahi hai, return []
//  *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
export function searchThaliMenu(thalis, query) {
  if(! Array.isArray(thalis) || typeof query!=="string") return []
  return  thalis.filter( it =>{  const itemm= it.name.toUpperCase().includes(query.toUpperCase())
                                  const    namem= it.items.some( it => it.toUpperCase().includes(query.toUpperCase()))
                                     return itemm || namem
  });

}
//    4. generateThaliReceipt(customerName, thalis)
//  *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
//  *      - Format:
//  *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
//  *      - Line item: "- {thali name} x Rs.{price}"
//  *      - customerName UPPERCASE mein
//  *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
export function generateThaliReceipt(customerName, thalis) {
  if (
    typeof customerName !== "string" ||
    !Array.isArray(thalis) ||
    thalis.length === 0
  ) {
    return "";
  }

  const upperName = customerName.toUpperCase();

  // Create line items
  const lineItems = thalis
    .map(it => `- ${it.name} x Rs.${it.price}`)
    .join("\n");

  // Calculate total price
  const total = thalis.reduce((sum, it) => sum + it.price, 0);

  const count = thalis.length;

  return `THALI RECEIPT
---
Customer: ${upperName}
${lineItems}
---
Total: Rs.${total}
Items: ${count}`;
}
