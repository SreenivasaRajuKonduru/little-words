// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Page content for shapes.

function render_shapes(){
[['Circle','circle'],['Square','square'],['Triangle','triangle'],['Rectangle','rectangle']].forEach(([name,shape],i)=>{const pic="";tile(name,pic||shape,name,i,pic?'image':'shape')});
}
