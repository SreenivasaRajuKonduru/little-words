// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Edit this page’s words and illustrations here.
const clothes=[['Shirt','👕'],['Pants','👖'],['Socks','🧦'],['Shoes','👟'],['Hat','🧢'],['Shorts','🩳'],['Glasses','👓']];

function render_clothes(){
clothes.forEach(([label,emoji],i)=>{const pic="";tile(label,pic||emoji,label,i,pic?'image':'emoji')});
}
