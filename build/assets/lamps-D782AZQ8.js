import{V as h,E as P,b as B,S as x,P as I,W as S,c as A,T as D,f as R,g as C,D as F,d as W,M as _,k as M,R as T,a as H,l as G,m as y}from"./GLTFLoader-CyRSfVPs.js";var U=Object.defineProperty,O=(e,o,n)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,a=(e,o,n)=>(O(e,typeof o!="symbol"?o+"":o,n),n);const u=new B(0,0,0,"YXZ"),m=new h,q={type:"change"},z={type:"lock"},V={type:"unlock"},k=Math.PI/2;class X extends P{constructor(o,n){super(),a(this,"camera"),a(this,"domElement"),a(this,"isLocked"),a(this,"minPolarAngle"),a(this,"maxPolarAngle"),a(this,"pointerSpeed"),a(this,"onMouseMove",t=>{if(!this.domElement||this.isLocked===!1)return;const s=t.movementX||t.mozMovementX||t.webkitMovementX||0,i=t.movementY||t.mozMovementY||t.webkitMovementY||0;u.setFromQuaternion(this.camera.quaternion),u.y-=s*.002*this.pointerSpeed,u.x-=i*.002*this.pointerSpeed,u.x=Math.max(k-this.maxPolarAngle,Math.min(k-this.minPolarAngle,u.x)),this.camera.quaternion.setFromEuler(u),this.dispatchEvent(q)}),a(this,"onPointerlockChange",()=>{this.domElement&&(this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(z),this.isLocked=!0):(this.dispatchEvent(V),this.isLocked=!1))}),a(this,"onPointerlockError",()=>{console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}),a(this,"connect",t=>{this.domElement=t||this.domElement,this.domElement&&(this.domElement.ownerDocument.addEventListener("mousemove",this.onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError))}),a(this,"disconnect",()=>{this.domElement&&(this.domElement.ownerDocument.removeEventListener("mousemove",this.onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this.onPointerlockError))}),a(this,"dispose",()=>{this.disconnect()}),a(this,"getObject",()=>this.camera),a(this,"direction",new h(0,0,-1)),a(this,"getDirection",t=>t.copy(this.direction).applyQuaternion(this.camera.quaternion)),a(this,"moveForward",t=>{m.setFromMatrixColumn(this.camera.matrix,0),m.crossVectors(this.camera.up,m),this.camera.position.addScaledVector(m,t)}),a(this,"moveRight",t=>{m.setFromMatrixColumn(this.camera.matrix,0),this.camera.position.addScaledVector(m,t)}),a(this,"lock",()=>{this.domElement&&this.domElement.requestPointerLock()}),a(this,"unlock",()=>{this.domElement&&this.domElement.ownerDocument.exitPointerLock()}),this.camera=o,this.domElement=n,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,n&&this.connect(n)}}const b=new x;let l,f,c;const oe=()=>{l=new I(60,window.innerWidth/window.innerHeight,.1,1e3),b.add(l),l.position.set(0,4,0),c=new S({antialias:!1}),c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(16777215,1),document.body.appendChild(c.domElement),c.shadowMap.enabled=!0,c.shadowMap.type=A,f=new X(l,c.domElement),b.add(f.getObject()),window.addEventListener("resize",e,!1);function e(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}return{camera:l,controls:f,renderer:c}},ne=e=>{const n=new D().load("../../public/textures/blackfloor.jpg",g=>{g.wrapS=g.wrapT=R,g.repeat.set(1,2)}),t=new C({map:n,side:F,roughness:.4,metalness:1}),s=new W(40,45),i=new _(s,t);i.rotation.x=Math.PI/2,i.position.y=-Math.PI,i.position.z=-8,e.add(i)},se=e=>{Array.isArray(e)||(e=e.children),e.forEach(o=>{o.BoundingBox=new M,o.BoundingBox.setFromObject(o)})},ie=()=>{let e="en";localStorage.setItem("currentLanguage",e),console.log(e,"HERE LANGUAGE"),document.getElementById("show-eng").classList.add("active-button"),document.getElementById("show-fr").classList.remove("active-button"),document.getElementById("info-content").innerHTML="  <p><b>W/A/S/D:</b> Move around</p>  <p><b>Mouse:</b> Look around</p>  <p><b>Space:</b> Deblock/block cursor</p>   <p><b>M:</b> Show Menu</p>  <p><b>G:</b> Start music</p>   <p><b>P:</b> Stop music</p>"},ae=()=>{let e="fr";localStorage.setItem("currentLanguage",e),console.log(e,"HERE LANGUAGE"),document.getElementById("show-eng").classList.remove("active-button"),document.getElementById("show-fr").classList.add("active-button"),document.getElementById("info-content").innerHTML=" <p><b>W/A/S/D :</b> Se déplacer</p> <p><b>Souris :</b> Regarder autour</p> <p><b>Espace :</b> Débloquer/bloquer le curseur</p> <p><b>M :</b> Afficher le menu</p> <p><b>G :</b> Démarrer la musique</p> <p><b>P :</b> Arrêter la musique</p>  "},re=()=>{const e=document.getElementById("fr"),o=document.getElementById("eng");localStorage.getItem("currentLanguage")==="fr"?(e.style.display="block",o.style.display="none"):(e.style.display="none",o.style.display="block")},r={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,w:!1,a:!1,s:!1,d:!1},ce=(e,o,n,t)=>{const s=5*e,i=n.position.clone();(r.ArrowRight||r.d)&&o.moveRight(s),(r.ArrowLeft||r.a)&&o.moveRight(-s),(r.ArrowUp||r.w)&&o.moveForward(s),(r.ArrowDown||r.s)&&o.moveForward(-s),Y(n,t)&&n.position.copy(i)},Y=(e,o)=>{const n=new M,t=new h;e.getWorldPosition(t),n.setFromCenterAndSize(t,new h(1,1,1));for(let s=0;s<o.children.length;s++){const i=o.children[s];if(n.intersectsBox(i.BoundingBox))return!0}return!1},v=()=>{const e=document.getElementById("menu");e.style.display="none"},E=()=>{const e=document.getElementById("menu");e.style.display="block"},j=e=>{e.lock(),v()},le=e=>{document.getElementById("play_button").addEventListener("click",()=>j(e))};function N(){document.getElementById("backgroundMusic").play()}function K(){document.getElementById("backgroundMusic").pause()}let d=!0,p=!1;const Q=document.getElementById("backgroundMusic");console.log(Q,"BACKGROUND MUSIC");const de=(e,o,n)=>{document.addEventListener("keydown",t=>Z(t,e),!1),document.addEventListener("keyup",t=>$(t),!1),e.addEventListener("unlock",()=>{p&&E(),p=!1})};function J(e){d?e.lock():(p=!1,e.unlock()),d=!d}function Z(e,o){e.key in r&&(r[e.key]=!0),e.key==="Escape"&&(E(),p=!0,o.unlock(),d=!1),e.key==="p"&&(o.unlock(),d=!1),(e.key==="Enter"||e.key==="Return")&&(v(),o.lock(),d=!0),e.key===" "&&J(o),e.key==="g"&&N(),e.key==="p"&&K(),e.key==="m"&&(E(),p=!0,o.unlock(),d=!1),e.key==="r"&&location.reload()}function $(e,o){e.key in r&&(r[e.key]=!1)}document.getElementById("toggle-info").addEventListener("click",()=>{document.getElementById("info-panel").classList.toggle("collapsed"),document.getElementById("toggle-info").innerText=document.getElementById("info-panel").classList.contains("collapsed")?"+":"x"});document.getElementById("about_button").addEventListener("click",function(){document.getElementById("about-overlay").classList.add("show")});document.getElementById("close-about").addEventListener("click",function(){document.getElementById("about-overlay").classList.remove("show")});const ue=(e,o)=>{o.forEach(n=>{e.add(n)})},w=new H,L=new T;function me(e,o,n){e.domElement.addEventListener("click",t=>{w.x=t.clientX/window.innerWidth*2-1,w.y=-(t.clientY/window.innerHeight)*2+1,ee(o,n)},!1)}function ee(e,o){L.setFromCamera(w,e);const n=L.intersectObjects(o);if(n.length>0){let t=n[0].object;for(;t&&!t.userData.id;)t=t.parent;if(t&&t.userData&&(console.log(t,"OBJECT WITH USER DATA"),t.userData.name=="door")){window.location.href="./../index.html";return}}}const pe=e=>{e.xr.enabled=!0,e.xr.addEventListener("sessionstart",()=>{console.log("WebXR session started")}),e.xr.addEventListener("sessionend",()=>{console.log("WebXR session ended")}),document.body.appendChild(G.createButton(e))},he=(e,o)=>{new y().load("../models/door.glb",function(t){const s=t.scene;s.userData={id:1,name:"door",interactive:!0},console.log("Door",t),s.position.set(0,-2.5,4),s.rotation.y=-Math.PI/2;const i=4;s.scale.set(i,i,i),e.add(s),document.getElementById("loader").style.display="none",o&&typeof o=="function"&&o(s)},function(t){console.log(t.loaded/t.total*100+"% loaded")},function(t){console.log("Error loading door model",t)})},ge=(e,o)=>{new y().load("../public/models/exit.glb",function(t){const s=t.scene;s.userData={id:100,name:"exit",interactive:!1},console.log("exit",t),s.position.set(0,12,5.1),s.rotation.y=Math.PI/2;const i=5;s.scale.set(i,i,i),e.add(s),o&&typeof o=="function"&&o(s)},function(t){console.log(t.loaded/t.total*100+"% loaded")},function(t){console.log("Error loading exit model",t)})},fe=e=>{new y().load("../public/models/lamp.glb",function(n){const t=n.scene;t.userData={id:101,name:"lamp",interactive:!1},console.log("lamp",n),t.position.set(6,6,4),t.rotation.x=Math.PI,t.rotation.y=Math.PI;const s=5;t.scale.set(s,s,s);const i=t.clone();i.position.set(-6,6,4),e.add(t),e.add(i)},function(n){console.log(n.loaded/n.total*100+"% loaded")},function(n){console.log("Error loading lamp model",n)})};export{ce as a,ne as b,se as c,ue as d,le as e,de as f,me as g,ge as h,fe as i,ie as j,ae as k,he as l,pe as m,b as n,oe as s,re as u};