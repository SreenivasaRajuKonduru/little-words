// SUPERVISOR: Edit this page here. Keep brackets, commas and quotes intact.
// The displayed label is spoken automatically unless you supply a different speech value.
// Edit this page’s words and illustrations here.
const alphaIcons=['🍎','🐻','🐱','🐶','🐘','🐟','🍇','🏠','🍦','🪼','🪁','🦁','🌙','👃','🐙','🐼','👑','🌈','☀️','🚚','☂️','🎻','🐳','🎄','🪀','🦓'];
const alphaWords=['Apple','Bear','Cat','Dog','Elephant','Fish','Grapes','House','Ice Cream','Jellyfish','Kite','Lion','Moon','Nose','Octopus','Panda','Queen','Rainbow','Sun','Truck','Umbrella','Violin','Whale','Xmas Tree','Yo-yo','Zebra'];

function render_alphabet(){
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((letter,i)=>{const pic="";tile(letter,pic||alphaIcons[i],letterSounds[letter],i,pic?'image':'letter')});
}
