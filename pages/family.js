/*
 FAMILY PAGE — EDIT HERE FOR EVERYONE
 1. Upload family photos to images/family/ on GitHub (mommy.jpg etc.).
 2. Set photo below to the exact file path. If a photo isn't ready, use "".
 3. Add a new relative by copying an entry. Give each a UNIQUE id.
 4. say = what the voice speaks; name = label displayed.
 5. Commit changes; refresh after GitHub Pages deploys.
 NOTE: Browser-specific photo/name edits can override these defaults on that device.
*/
const FAMILY_MEMBERS = [
  {id:'mom', name:'Mommy', say:'Mommy', emoji:'👩', photo:'images/family/mommy.jpg'},
  {id:'dad', name:'Daddy', say:'Daddy', emoji:'👨', photo:'images/family/daddy.jpg'},
  {id:'me', name:'Talen', say:'Tay-len', emoji:'🧒', photo:'images/family/talen.jpg'},
  // EXAMPLE — remove the // and edit the details to add Grandma:
  // {id:'grandma', name:'Grandma', say:'Grandma', emoji:'👵', photo:'images/family/grandma.jpg'},
];
function render_family(){
 FAMILY_MEMBERS.forEach((person,i)=>{
   const key=person.id==='mom'?'momName':person.id==='dad'?'dadName':person.id==='me'?'childName':'';
   const name=(key&&saved(key))||person.name;
   const spoken=person.id==='me'?(saved('childSound')||person.say||name):(person.say||name);
   const photo=saved('photo_'+person.id)||person.photo;
   tile(name,photo||person.emoji,spoken,i,photo?'image':'emoji',person.emoji);
 });
}
