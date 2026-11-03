// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Page content for colors.

function render_colors(){
[['Blue','#2879f7'],['Red','#f33b4b'],['Green','#20bd68'],['Yellow','#ffe000'],['White','#ffffff'],['Black','#171717']].forEach(([name,hex],i)=>{const pic="";tile(name,pic||hex,name,i,pic?'image':'swatch')});
}
