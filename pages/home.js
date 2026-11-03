// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Illustrations are embedded here, not in a separate images folder.
const HOME_ART = {
  'Table': "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MjAiIGhlaWdodD0iNDIwIiB2aWV3Qm94PSIwIDAgNDIwIDQyMCI+PHJlY3Qgd2lkdGg9IjQyMCIgaGVpZ2h0PSI0MjAiIHJ4PSIzOCIgZmlsbD0iI2ZjZWJkNCIvPjxyZWN0IHg9Ijc1IiB5PSIxNDAiIHdpZHRoPSIyNzAiIGhlaWdodD0iMzciIHJ4PSIxMiIgZmlsbD0iI2I2NmEzNyIvPjxyZWN0IHg9Ijk1IiB5PSIxNzQiIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNTAiIHJ4PSI3IiBmaWxsPSIjOTY1MDJkIi8+PHJlY3QgeD0iMzAwIiB5PSIxNzQiIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNTAiIHJ4PSI3IiBmaWxsPSIjOTY1MDJkIi8+PHJlY3QgeD0iMTA1IiB5PSIxNzYiIHdpZHRoPSIyMTAiIGhlaWdodD0iMTQiIGZpbGw9IiNlNmE1NmQiLz48dGV4dCB4PSIyMTAiIHk9IjM3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjUzZDczIj5UQUJMRTwvdGV4dD48L3N2Zz4=",
};
// Edit this page’s words and illustrations here.
const home=[['Bed','🛏️'],['Chair','🪑'],['Table','🪑'],['Door','🚪'],['Window','🪟'],['Lamp','💡'],['Clock','🕒'],['Sofa','🛋️'],['TV','📺'],['Book','📖'],['Cup','🥤'],['Spoon','🥄']];

function render_home(){
home.forEach(([label,emoji],i)=>{const pic=HOME_ART[label] || "";tile(label,pic||emoji,label,i,pic?'image':'emoji')});
}
