// Shared navigation, audio, page controls, image library and browser preferences.

'use strict';
const sections=[['family','👨‍👩‍👧 Family','Family','Tap Mommy, Daddy, or Talen to hear their names.'],['food','🥛 Food & Drinks','Food & Drinks','Yummy words to learn!'],['alphabet','🔤 ABCs','Alphabets A–Z','Tap each big letter to hear its name.'],['numbers','🔢 Numbers','Numbers 0–5','Count and say each number!'],['colors','🎨 Colors','Colors','Look at each color and say its name!'],['shapes','🔺 Shapes','Shapes','Circle, Square, Triangle, and Rectangle!'],['clothes','👕 Clothes','Clothes','What do we wear?'],['home','🏠 At Home','Inside the House','Things we see at home!'],['daily','💬 Everyday Words','Everyday Words','Useful words to say every day!']];





const palettes=[['#ff4663','#ffe3e9'],['#346aff','#e1ebff'],['#19b96d','#dcfff0'],['#ff9d17','#fff0cf'],['#9655ed','#f1e5ff'],['#e747b0','#ffe4f7']];
function saved(k){try{return localStorage.getItem('fyv6_'+k)||''}catch(e){return ''}}function store(k,v){try{localStorage.setItem('fyv6_'+k,v);return true}catch(e){alert('This browser could not save that change. Try a smaller photo.');return false}}
// Explicit spoken letter names; avoids browsers saying 'capital A'.
const letterSounds={A:'ay',B:'bee',C:'see',D:'dee',E:'ee',F:'eff',G:'gee',H:'aych',I:'eye',J:'jay',K:'kay',L:'ell',M:'em',N:'en',O:'oh',P:'pee',Q:'queue',R:'are',S:'ess',T:'tee',U:'you',V:'vee',W:'double you',X:'ex',Y:'why',Z:'zee'};
function voice(text){if(!('speechSynthesis' in window))return;const s=window.speechSynthesis;s.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.78;u.pitch=1.05;const v=s.getVoices().filter(x=>x.lang.toLowerCase().startsWith('en'));if(v.length)u.voice=v.find(x=>/samantha|google us english|zira|aria|jenny/i.test(x.name))||v[0];s.speak(u)}
function node(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el}
const pageIds=['family','food','alphabet','numbers','colors','shapes','clothes','home','daily'];
const published=(typeof SITE_SETTINGS!=='undefined'&&SITE_SETTINGS&&SITE_SETTINGS.pages)||{};
function defaultEnabled(id){return published[id]!==false}
function pageEnabled(id){const local=saved('visible_'+id);return local==='on'?true:local==='off'?false:defaultEnabled(id)}
let active='family';const tabs=document.getElementById('tabs'),grid=document.getElementById('grid');
function tile(label,visual,say,i,kind,fallback='🖼️'){const cell=node('div','cell'),b=node('button','tile');b.type='button';b.setAttribute('aria-label','Hear '+label);const pair=palettes[i%palettes.length];b.style.setProperty('--edge',pair[0]);b.style.setProperty('--tint',pair[1]);if(kind==='image'){const img=node('img');img.src=visual;img.alt=label;img.onerror=()=>{img.remove();b.append(node('div','art',fallback))};b.append(img)}else if(kind==='letter'){b.append(node('div','letter',label),node('div','art',visual))}else if(kind==='number'){b.append(node('div','num',label));const dots=node('div','count-dots');const count=Number(label);if(count===0){dots.append(node('span','zero-note','Zero'))}else{for(let d=0;d<count;d++)dots.append(node('span','count-dot'))}b.append(dots)}else if(kind==='swatch'){const sw=node('div','color-swatch');sw.style.background=visual;b.append(sw)}else if(kind==='shape'){b.append(node('div','shape '+visual))}else{b.append(node('div','art',visual))}b.addEventListener('click',()=>voice(say||label));cell.append(b,node('div','caption',label));grid.append(cell)}
function render(){if(!pageEnabled(active)){active=pageIds.find(pageEnabled)||'family'};grid.replaceChildren();grid.classList.toggle('numbers-grid',active==='numbers');const section=sections.find(x=>x[0]===active);document.getElementById('heading').textContent=section[2];document.getElementById('intro').textContent=section[3];document.getElementById('familyEditor').classList.toggle('hidden',active!=='family');tabs.querySelectorAll('button').forEach(b=>{b.classList.toggle('hidden',!pageEnabled(b.dataset.page));b.setAttribute('aria-selected',String(b.dataset.page===active))});
if(active==='family')render_family();
if(active==='food')render_food();
if(active==='alphabet')render_alphabet();
if(active==='numbers')render_numbers();
if(active==='colors')render_colors();
if(active==='clothes')render_clothes();
if(active==='home')render_home();
if(active==='daily')render_daily();

if(active==='shapes')render_shapes();
}
sections.forEach(([id,label])=>{const b=node('button','navbtn',label);b.dataset.page=id;b.type='button';b.setAttribute('role','tab');b.addEventListener('click',()=>{active=id;render();window.scrollTo({top:0,behavior:'smooth'})});tabs.append(b)});
const settingsPanel=document.getElementById('settingsPanel'),settingsGrid=document.getElementById('settingsGrid');
document.getElementById('settingsButton').onclick=()=>{const open=settingsPanel.classList.toggle('hidden')===false;document.getElementById('settingsButton').setAttribute('aria-expanded',String(open));if(open)renderSettings()};
function renderSettings(){settingsGrid.replaceChildren();sections.forEach(([id,label])=>{const row=node('label','switchline'),name=node('span','',label),toggle=node('input');toggle.type='checkbox';toggle.checked=pageEnabled(id);toggle.setAttribute('aria-label','Show '+label);toggle.onchange=()=>{if(pageIds.filter(pageEnabled).length===1&&!toggle.checked){toggle.checked=true;alert('Keep at least one page visible.');return}store('visible_'+id,toggle.checked?'on':'off');render()};row.append(name,toggle);settingsGrid.append(row)})}
document.getElementById('resetSettings').onclick=()=>{pageIds.forEach(id=>{try{localStorage.removeItem('fyv6_visible_'+id)}catch(e){}});renderSettings();render()};
document.getElementById('downloadSettings').onclick=()=>{const settings=Object.fromEntries(pageIds.map(id=>[id,pageEnabled(id)]));const content='// Published page defaults for Find Your Voice.\n// Edit true/false here or download from Grown-up controls.\nconst SITE_SETTINGS = '+JSON.stringify({pages:settings},null,2)+';\n';const url=URL.createObjectURL(new Blob([content],{type:'text/javascript'}));const a=document.createElement('a');a.href=url;a.download='site-settings.js';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
['childName','childSound','momName','dadName'].forEach(k=>document.getElementById(k).value=saved(k));document.getElementById('save').onclick=()=>{['childName','childSound','momName','dadName'].forEach(k=>store(k,document.getElementById(k).value.trim()));render()};document.getElementById('test').onclick=()=>voice(document.getElementById('childSound').value.trim()||document.getElementById('childName').value.trim()||'Talen');
document.querySelectorAll('[data-photo]').forEach(inp=>inp.addEventListener('change',()=>{const file=inp.files&&inp.files[0];if(!file)return;if(!file.type.startsWith('image/'))return alert('Please choose an image.');const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=c.height=360;const ctx=c.getContext('2d');const scale=Math.max(360/im.width,360/im.height);ctx.drawImage(im,(360-im.width*scale)/2,(360-im.height*scale)/2,im.width*scale,im.height*scale);if(store('photo_'+inp.dataset.photo,c.toDataURL('image/jpeg',.72)))render()};im.src=r.result};r.readAsDataURL(file)}));render();

