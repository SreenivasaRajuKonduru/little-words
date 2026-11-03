// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Page content for numbers.

function render_numbers(){
[0,1,2,3,4,5].forEach((n,i)=>{const pic=taggedImage('numbers',String(n));tile(String(n),pic||'',String(n),i,pic?'image':'number')});
}
