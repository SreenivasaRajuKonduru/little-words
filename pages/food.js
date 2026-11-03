// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Edit this page’s words and illustrations here.
const food=[['Milk','🥛'],['Juice','🧃'],['Water','💧'],['Candy','🍬'],['Apple','🍎'],['Banana','🍌'],['Cookie','🍪'],['Bread','🍞'],['Ice Cream','🍦'],['Strawberry','🍓'],['Orange','🍊'],['Cheese','🧀']];

function render_food(){
food.forEach(([label,emoji],i)=>{const pic="";tile(label,pic||emoji,label,i,pic?'image':'emoji')});
}
