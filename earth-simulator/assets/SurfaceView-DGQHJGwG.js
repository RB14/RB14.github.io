import{$ as e,A as t,At as n,B as r,C as i,Ct as a,D as o,Dt as s,E as c,Et as l,F as u,Ft as d,G as f,H as p,I as m,It as h,J as g,K as _,L as v,Lt as y,M as b,Mt as x,N as S,Nt as C,O as w,Ot as T,P as E,Pt as D,Q as ee,R as te,Rt as ne,S as re,St as ie,T as ae,Tt as oe,U as se,V as ce,W as le,X as O,Y as ue,Z as k,_ as de,_t as fe,a as pe,at as A,b as me,bt as he,c as ge,ct as j,d as _e,dt as ve,et as ye,f as be,ft as xe,g as Se,gt as Ce,h as we,ht as Te,i as Ee,it as De,j as Oe,jt as ke,k as Ae,kt as je,l as Me,lt as Ne,m as Pe,mt as Fe,n as M,nt as N,o as Ie,ot as Le,p as Re,pt as ze,q as Be,r as Ve,rt as He,s as P,st as F,t as Ue,tt as I,u as We,ut as Ge,v as Ke,vt as L,w as qe,wt as R,x as Je,xt as z,y as Ye,yt as Xe,z as Ze,zt as Qe}from"./index-BQssv8Zq.js";var $e=o(`crosshair`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]),et=o(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),tt=o(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),nt=o(`spline`,[[`circle`,{cx:`19`,cy:`5`,r:`2`,key:`mhkx31`}],[`circle`,{cx:`5`,cy:`19`,r:`2`,key:`v8kfzx`}],[`path`,{d:`M5 17A12 12 0 0 1 17 5`,key:`1okkup`}]]),rt=o(`zoom-in`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),it=o(`zoom-out`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),B=Qe(ne(),1),at=100;function ot(){let e=b(e=>e.surfaceLocation),t=b(e=>e._publishTime),n=(0,B.useRef)(0);return O(()=>{if(!e)return;let r=S.skyDate();pe(e.lat,e.lon,r);let i=r.getTime();Math.abs(i-n.current)>=at&&(n.current=i,t(i))}),null}var st=.07,ct=.1,lt=Ie-ct,ut=45*_,dt=25*_,ft=-25*_,pt=-80*_;function mt(e,t,n){let r=Math.cos(n),i=Math.sin(n);return[e*r-t*i,e*i+t*r]}function ht(e,t={lean:0,eyeUp:0,eyeAhead:0}){let n=Math.min(1,Math.max(0,(e-ft)/(pt-ft))),r=dt*n*n*(3-2*n),i=Math.min(ut,Math.max(0,-e)),[a,o]=mt(lt-1,0,r),[s,c]=mt(ct,st,r+i);return t.lean=r,t.eyeUp=1+a+s,t.eyeAhead=o+c,t}var gt=new R(-Math.SQRT1_2,0,0,Math.SQRT1_2),_t=new d(0,0,1),vt=new F,yt=new R,bt=new d,xt=Math.PI*2;function St(e){return Math.atan2(Math.sin(e),Math.cos(e))}function Ct(e){return(e%xt+xt)%xt}function wt(e,t,n,r,i,a){return vt.set(n,t+a,-r,`YXZ`),e.setFromEuler(vt),e.multiply(gt),e.multiply(yt.setFromAxisAngle(_t,-i)),e}function Tt(e,t=bt){return t.set(0,0,-1).applyQuaternion(e)}function Et(e){let t=Tt(e);return Ct(Math.atan2(t.x,-t.z))}function Dt(e,t,n){return St(e+St(Et(t)-n))}var V={status:`idle`,active:!1,hasCompass:!1,quat:new R},Ot=Math.PI/180,kt=0,At=!1,jt=!1,H={alpha:0,beta:0,gamma:0,screen:0,compass:null};function Mt(e){if(e.alpha==null||e.beta==null||e.gamma==null)return;if(e.type===`deviceorientationabsolute`||e.absolute)!jt&&!At&&(kt=0,At=!0),jt=!0;else if(jt)return;H.alpha=e.alpha*Ot,H.beta=e.beta*Ot,H.gamma=e.gamma*Ot,H.screen=(screen.orientation?.angle??0)*Ot;let t=e.webkitCompassHeading;typeof t==`number`&&!Number.isNaN(t)&&(H.compass=t*Ot,V.hasCompass=!0),!At&&H.compass!=null&&(wt(V.quat,H.alpha,H.beta,H.gamma,H.screen,0),kt=Dt(0,V.quat,H.compass),At=!0),wt(V.quat,H.alpha,H.beta,H.gamma,H.screen,kt),V.status=`active`}async function Nt(){if(!window.isSecureContext||typeof DeviceOrientationEvent>`u`)return V.status=`unsupported`,!1;try{let e=DeviceOrientationEvent;if(typeof e.requestPermission==`function`&&(V.status=`requesting`,await e.requestPermission()!==`granted`))return V.status=`denied`,!1}catch{return V.status=`denied`,!1}return At=!1,jt=!1,V.hasCompass=!1,window.addEventListener(`deviceorientationabsolute`,Mt,!0),window.addEventListener(`deviceorientation`,Mt,!0),V.active=!0,V.status=`requesting`,!0}function Pt(){window.removeEventListener(`deviceorientationabsolute`,Mt,!0),window.removeEventListener(`deviceorientation`,Mt,!0),V.active=!1,V.status=`idle`}function Ft(e){kt=Dt(kt,V.quat,e),At=!0}var It=.05,U=L.degToRad(88),Lt=L.degToRad(.12),Rt=.12,zt=L.degToRad(2),Bt=.45,Vt=.08,Ht=.0015,Ut=e=>L.clamp(e,-U,U),Wt=e=>Math.atan2(Math.sin(e),Math.cos(e));function Gt(){let e=k(e=>e.camera),t=k(e=>e.gl),n=b(e=>e.setSurfaceZoom),r=(0,B.useRef)(b.getState().surfaceZoom),i=b(e=>e.surfaceFollow),a=b(e=>e.setSurfaceFollow),o=(0,B.useRef)(i);(0,B.useEffect)(()=>{o.current=i},[i]);let s=b(e=>e.surfaceUseSensors),c=(0,B.useRef)(s);(0,B.useEffect)(()=>{c.current=s},[s]);let l=(0,B.useRef)(new R),d=(0,B.useRef)({yaw:0,pitch:0,yawVel:0,pitchVel:0,dragging:!1,pointerId:-1,lastX:0,lastY:0,lastT:0}),f=(0,B.useRef)(null),p=(0,B.useRef)(new F(0,0,0,`YXZ`)),h=(0,B.useRef)(ht(0)),g=(t,n)=>{let r=ht(n,h.current),i=r.eyeAhead-st;e.position.set(-Math.sin(t)*i,r.eyeUp,-Math.cos(t)*i).add(M.eyeOffset)};return(0,B.useEffect)(()=>{e.position.set(0,Ie,0)},[e]),(0,B.useEffect)(()=>{let r=t.domElement,i=d.current,s=new Map,c=null,l=()=>{let[e,t]=[...s.values()];return Math.max(1,Math.hypot(e.x-t.x,e.y-t.y))},u=(e,t,n)=>{i.dragging=!0,i.pointerId=e,i.lastX=t,i.lastY=n,i.lastT=performance.now(),i.yawVel=0,i.pitchVel=0},f=e=>{s.set(e.pointerId,{x:e.clientX,y:e.clientY}),e.preventDefault();try{r.setPointerCapture(e.pointerId)}catch{}if(s.size===2){i.dragging=!1,i.pointerId=-1,i.yawVel=0,i.pitchVel=0,c={dist:l(),zoom:b.getState().surfaceZoom};return}s.size===1&&u(e.pointerId,e.clientX,e.clientY)},p=t=>{let r=s.get(t.pointerId);if(!r)return;if(r.x=t.clientX,r.y=t.clientY,c){s.size>=2&&n(c.zoom*(l()/c.dist));return}if(!i.dragging||t.pointerId!==i.pointerId)return;let u=t.clientX-i.lastX,d=t.clientY-i.lastY;if(u===0&&d===0)return;o.current&&(o.current=!1,a(!1));let f=performance.now(),p=Math.max(1,f-i.lastT)/1e3;i.lastX=t.clientX,i.lastY=t.clientY,i.lastT=f;let m=Lt*(e.fov/E(e.aspect));i.yaw+=u*m,i.pitch=Ut(i.pitch+d*m),i.yawVel=L.lerp(i.yawVel,u*m/p,.4),i.pitchVel=L.lerp(i.pitchVel,d*m/p,.4)},m=e=>{if(s.delete(e.pointerId)){if(c){if(s.size<2){c=null;let[e]=[...s.entries()];e&&u(e[0],e[1].x,e[1].y)}return}e.pointerId===i.pointerId&&(i.dragging=!1,i.pointerId=-1,(i.pitch>=U||i.pitch<=-U)&&(i.pitchVel=0))}},h=e=>{e.preventDefault();let t=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?400:1),r=b.getState().surfaceZoom;n(r*Math.exp(-t*Ht*(e.ctrlKey?4:1)))};return r.style.touchAction=`none`,r.addEventListener(`pointerdown`,f),r.addEventListener(`pointermove`,p),r.addEventListener(`pointerup`,m),r.addEventListener(`pointercancel`,m),r.addEventListener(`wheel`,h,{passive:!1}),()=>{r.removeEventListener(`pointerdown`,f),r.removeEventListener(`pointermove`,p),r.removeEventListener(`pointerup`,m),r.removeEventListener(`pointercancel`,m),r.removeEventListener(`wheel`,h)}},[t,e,a,n]),O((t,n)=>{let i=d.current,a=Math.min(n,.05),s=Ee();s&&(i.yaw=-s.az*_,i.pitch=Ut(s.alt*_),i.yawVel=0,i.pitchVel=0);let h=u(b.getState().surfaceZoom),v=r.current;r.current=Math.abs(h/v-1)<1e-4?h:v*(h/v)**(1-Math.exp(-a/Vt));let y=m(e.aspect,r.current),x=It*Math.min(1,r.current)**2;if((Math.abs(e.fov-y)>1e-4||e.near!==x)&&(e.fov=y,e.near=x,e.updateProjectionMatrix()),c.current&&V.active){f.current=null;let t=l.current.copy(V.quat);e.quaternion.dot(t)<0&&t.set(-t.x,-t.y,-t.z,-t.w),e.quaternion.slerp(t,1-Math.exp(-a/.08)),p.current.setFromQuaternion(e.quaternion,`YXZ`),i.yaw=p.current.y,i.pitch=p.current.x,M.facingAzDeg=(-i.yaw/_%360+360)%360,M.facingAltDeg=i.pitch/_,g(i.yaw,i.pitch);return}if(o.current&&!i.dragging){let e=M;if(e.ready){let t=-e.sunAzDeg*_,n=L.clamp(e.sunAltDeg,-3,88)*_,r=f.current;r&&(i.yaw+=Wt(t-r.yaw),i.pitch+=n-r.pitch);let o=1-Math.exp(-a/Bt);i.yaw+=Wt(t-i.yaw)*o,i.pitch=Ut(i.pitch+(n-i.pitch)*o),f.current={yaw:t,pitch:n}}i.yawVel=0,i.pitchVel=0}else if(!i.dragging)if(f.current=null,Math.abs(i.yawVel)<zt&&Math.abs(i.pitchVel)<zt)i.yawVel=0,i.pitchVel=0;else{i.yaw+=i.yawVel*a,i.pitch=Ut(i.pitch+i.pitchVel*a),(i.pitch>=U||i.pitch<=-U)&&(i.pitchVel=0);let e=Math.exp(-a/Rt);i.yawVel*=e,i.pitchVel*=e}p.current.set(i.pitch,i.yaw,0,`YXZ`),e.quaternion.setFromEuler(p.current),M.facingAzDeg=(-i.yaw/_%360+360)%360,M.facingAltDeg=i.pitch/_,g(i.yaw,i.pitch)}),null}var W=ee(),Kt={field:[90,540],sea:[160,1500],ice:[120,950]};function qt(){let e=k(e=>e.scene),t=b(e=>e.surfaceTerrain),n=(0,B.useRef)(null),r=(0,B.useRef)(null),i=(0,B.useRef)(null),a=(0,B.useRef)(null);return(0,B.useEffect)(()=>{let[n,r]=Kt[t],i=e.fog instanceof Ne?e.fog:new Ne(658714,n,r);return i.near=n,i.far=r,e.fog=i,()=>{e.fog=null}},[e,t]),O(()=>{let t=M;t.ready&&(e.fog instanceof Ne&&e.fog.color.copy(t.fog),n.current&&(n.current.position.copy(t.sunDir).multiplyScalar(1e3),n.current.color.copy(t.sunLightColor),n.current.intensity=t.sunIntensity),r.current&&(r.current.color.copy(t.hemiSky),r.current.groundColor.copy(t.hemiGround),r.current.intensity=t.hemiIntensity),i.current&&(i.current.intensity=t.ambientIntensity),a.current&&(a.current.position.copy(t.moonDir).multiplyScalar(1e3),a.current.intensity=t.moonGroundIntensity))}),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`directionalLight`,{ref:n,castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-camera-near":1,"shadow-camera-far":2e3,"shadow-camera-left":-70,"shadow-camera-right":70,"shadow-camera-top":70,"shadow-camera-bottom":-70,"shadow-bias":-4e-4,"shadow-normalBias":.02}),(0,W.jsx)(`hemisphereLight`,{ref:r}),(0,W.jsx)(`ambientLight`,{ref:i}),(0,W.jsx)(`directionalLight`,{ref:a,color:`#cdd9f7`,intensity:0})]})}var Jt=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Yt=`
  varying vec3 vDir;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uGlow;
  uniform float uGlowStrength;
  uniform float uHaloSharpness;
  uniform vec3 uSunDir;

  float ign(vec2 p) {
    return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y));
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = clamp(dir.y, 0.0, 1.0);
    vec3 col = mix(uHorizon, uZenith, pow(h, 0.42));

    // Halo around the Sun's direction.
    float halo = pow(max(dot(dir, uSunDir), 0.0), uHaloSharpness);
    // Warm band hugging the horizon, concentrated toward the Sun's azimuth.
    vec3 sunHoriz = normalize(vec3(uSunDir.x, 0.0001, uSunDir.z));
    vec3 dirHoriz = normalize(vec3(dir.x, 0.0001, dir.z));
    float azAlign = max(dot(dirHoriz, sunHoriz), 0.0);
    float band = pow(1.0 - abs(dir.y), 4.0) * pow(azAlign, 2.0);
    col += uGlow * uGlowStrength * (halo + 0.6 * band);

    gl_FragColor = vec4(col, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>

    // Dither in output space to hide gradient banding on 8-bit displays.
    gl_FragColor.rgb += (ign(gl_FragCoord.xy) - 0.5) / 255.0;
  }
`;function Xt(){let e=(0,B.useRef)(null),t=(0,B.useMemo)(()=>({uZenith:{value:new A(`#0a0d1a`)},uHorizon:{value:new A(`#12141f`)},uGlow:{value:new A(`#1a1c2e`)},uGlowStrength:{value:0},uHaloSharpness:{value:40},uSunDir:{value:new d(0,1,0)}}),[]);return O(()=>{let t=M,n=e.current?.uniforms;!t.ready||!n||(n.uZenith.value.copy(t.zenith),n.uHorizon.value.copy(t.horizon),n.uGlow.value.copy(t.glow),n.uGlowStrength.value=t.glowStrength,n.uHaloSharpness.value=t.haloSharpness,n.uSunDir.value.copy(t.sunDir))}),(0,W.jsxs)(`mesh`,{frustumCulled:!1,renderOrder:-1,children:[(0,W.jsx)(`sphereGeometry`,{args:[P,32,16]}),(0,W.jsx)(`shaderMaterial`,{ref:e,vertexShader:Jt,fragmentShader:Yt,uniforms:t,side:1,depthWrite:!1,fog:!1})]})}var Zt=`
  varying vec3 vWorldNormal;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Qt=`
  uniform sampler2D uMoonMap;
  uniform vec3 uSunDir;    // the Sun's local direction (unit)
  uniform float uMinAlpha; // dark-limb opacity floor (≈0 by day, higher at night)
  uniform float uDaySky;   // 0 night → 1 bright daytime sky
  uniform float uEclipseDark; // a solar eclipse's totality: the dark disc opaque
  uniform vec3 uUmbraGlow;    // the umbra's reddened light
  uniform vec3 uEclSunDir;    // the Sun's geometric direction (the shadow's geometry)
  varying vec3 vWorldNormal;
  varying vec2 vUv;
  ${Ae}

  void main() {
    // The texture is tagged SRGBColorSpace, so the sampler already returns LINEAR
    // values — decoding again in-shader (pow 2.2) double-darkened the surface.
    vec3 texLin = texture2D(uMoonMap, vUv).rgb;
    float lit = dot(normalize(vWorldNormal), normalize(uSunDir));
    float day = smoothstep(-0.09, 0.09, lit); // soft terminator: 0 dark side → 1 lit
    // Lit face pushed toward the near-white a real moon reads as (the material is
    // toneMapped:false, so this is not re-darkened by the ACES pass); the dark limb
    // keeps a faint earthshine.
    // A lunar eclipse: this point's depth in the Earth's shadow (the Moon's centre
    // from the Earth's, plus this point's offset on the true-radius Moon).
    vec3 eclPoint = uEclipseMoon + normalize(vWorldNormal) * ECL_MOON_R;
    float eclShadow = earthShadowDepth(eclPoint, uEclSunDir);
    float bright = day * 2.3 * pow(1.0 - eclShadow, 0.45) + 0.08;
    vec3 col = min(texLin * bright, vec3(1.0));
    col += texLin * uUmbraGlow * day * smoothstep(0.5, 1.0, eclShadow)
      * (1.0 - 0.55 * earthUmbraCore(eclPoint, uEclSunDir));

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
    // Like the real daytime moon: the dark limb is completely invisible against a
    // bright sky (no ghost disc) and even the lit face is faint — the sky's own
    // light washes it out. At night the lit face is fully opaque and the dark limb
    // keeps the uMinAlpha floor (a visible disc against the stars).
    gl_FragColor.a = clamp(max(max(day * mix(1.0, 0.42, uDaySky), uMinAlpha), uEclipseDark), 0.0, 1.0);
  }
`;function $t(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(e,`rgba(255,255,255,1)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,128,128);let i=new He(t);return i.colorSpace=s,i}function en(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=256/hn,r=t.createRadialGradient(256,256,n*.9,256,256,256);r.addColorStop(0,`rgba(255,250,240,0.95)`),r.addColorStop(.12,`rgba(240,238,235,0.5)`),r.addColorStop(.35,`rgba(220,225,235,0.16)`),r.addColorStop(1,`rgba(200,210,230,0)`),t.fillStyle=r,t.fillRect(0,0,512,512),t.globalCompositeOperation=`lighter`;let i=7,a=()=>(i=i*16807%2147483647)/2147483647;for(let e=0;e<26;e++){let r=e<8,i=r?(e<4?0:Math.PI)+(a()-.5)*.7:a()*Math.PI*2,o=n+(256-n)*(r?.75+.25*a():.25+.35*a()),s=(r?.16:.07)*(.6+.8*a()),c=t.createRadialGradient(256,256,n*.9,256,256,o);c.addColorStop(0,`rgba(255,252,245,${r?.28:.18})`),c.addColorStop(1,`rgba(255,252,245,0)`),t.fillStyle=c,t.beginPath(),t.moveTo(256,256),t.arc(256,256,o,i-s,i+s),t.closePath(),t.fill()}let o=new He(e);return o.colorSpace=s,o}var tn=.8,nn=1.8/2,rn=.55,an=1.55/2,on=64,sn=130,cn=P*.92,ln=P*.9,un=695700,dn=1737.4,fn=L.degToRad(.9),pn=L.degToRad(6),mn=L.degToRad(2),hn=4,gn=new A(.62,.24,.1).multiplyScalar(.55),_n=`
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,vn=`
  uniform sampler2D uDisc;
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform vec3 uMoonCentre;
  uniform float uMoonRadius;
  uniform float uMask;
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    float a = texture2D(uDisc, vUv).a;
    if (uMask > 0.5) {
      vec3 toMoon = uMoonCentre - cameraPosition;
      float moonAngle = asin(clamp(uMoonRadius / length(toMoon), 0.0, 1.0));
      float angle = 2.0 * asin(clamp(0.5 * length(normalize(vWorld - cameraPosition) - normalize(toMoon)), 0.0, 1.0));
      float edge = fwidth(angle);
      a *= smoothstep(moonAngle - edge, moonAngle + edge, angle);
    }
    gl_FragColor = vec4(uColor, a * uOpacity);
    #include <colorspace_fragment>
  }
`,G=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function yn(){let e=b(e=>e.bodyScale===`real`),n=(0,B.useMemo)(()=>$t(tn),[]),r=(0,B.useMemo)(()=>$t(rn),[]),i=(0,B.useMemo)(()=>$t(0),[]),a=(0,B.useMemo)(en,[]),o=w(ce(`textures/moon.jpg`)),c=(0,B.useRef)(null),l=(0,B.useRef)(null),u=(0,B.useRef)(null),f=(0,B.useRef)(null),p=(0,B.useRef)(null),m=(0,B.useRef)(null),h=(0,B.useRef)(null),g=(0,B.useRef)(null),_=(0,B.useRef)(null),y=k(e=>e.camera),x=(0,B.useMemo)(()=>new T({vertexShader:_n,fragmentShader:vn,uniforms:{uDisc:{value:null},uColor:{value:new A(`#fff6e6`)},uOpacity:{value:1},uMoonCentre:{value:new d},uMoonRadius:{value:1},uMask:{value:0}},transparent:!0,depthWrite:!1,blending:2,toneMapped:!1,fog:!1}),[]),S=(0,B.useMemo)(()=>new T({vertexShader:Zt,fragmentShader:Qt,uniforms:{uMoonMap:{value:null},uSunDir:{value:new d(0,1,0)},uMinAlpha:{value:0},uDaySky:{value:0},uEclipseDark:{value:0},uUmbraGlow:{value:gn},uEclSunDir:{value:new d(0,1,0)},...t()},transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}),[]);return(0,B.useEffect)(()=>()=>{x.dispose(),S.dispose()},[x,S]),(0,B.useEffect)(()=>{o.colorSpace=s,o.needsUpdate=!0,S.uniforms.uMoonMap.value=o},[o,S]),(0,B.useEffect)(()=>{x.uniforms.uDisc.value=e?n:r},[e,x,n,r]),O(()=>{let t=M;if(!t.ready)return;let n=y.position,r=e?1:1-G(fn,pn,t.sunMoonSeparation),i=t.solarObscuration,a=G(-1.5,2,t.sunAltDeg),o=1-G(0,18,t.sunAltDeg);c.current&&(c.current.visible=a>.001,c.current.position.copy(t.sunDir).multiplyScalar(cn).add(n));let s=2*cn*un/t.sunDistanceKm;l.current&&(l.current.quaternion.copy(y.quaternion),l.current.scale.setScalar(e?s/nn:L.lerp(on,s/an,r))),x.uniforms.uOpacity.value=a;let d=(1-i)**.35;u.current&&(u.current.opacity=(.7+.2*o)*a*d,u.current.color.copy(t.glow));let b=v(y);f.current&&f.current.scale.setScalar((560+240*o)/b),p.current&&(p.current.opacity=(.2+.14*o)*a*d,p.current.color.copy(t.glow)),m.current&&m.current.scale.setScalar((1150+450*o)/b),h.current&&(h.current.opacity=G(.9985,1,i)*a),g.current&&g.current.scale.setScalar(s*hn);let C=t.moonAltDeg>-1.5,w=e?ln*dn/t.moonDistanceKm:L.lerp(sn,ln*dn/t.moonDistanceKm,r);_.current&&(_.current.visible=C,_.current.position.copy(t.moonDir).multiplyScalar(ln).add(n),_.current.scale.setScalar(w),_.current.lookAt(n),_.current.rotateY(-Math.PI/2),x.uniforms.uMoonCentre.value.copy(_.current.position)),x.uniforms.uMoonRadius.value=w,x.uniforms.uMask.value=C&&t.sunMoonSeparation<mn?1:0;let T=S.uniforms;T.uSunDir.value.copy(t.sunDir),T.uMinAlpha.value=.5*(1-G(-8,0,t.sunAltDeg)),T.uDaySky.value=G(0,8,t.sunAltDeg),T.uEclipseDark.value=G(.5,.9,t.eclipseDark),T.uEclipseMoon.value.copy(t.eclipseMoon),T.uEclSunDir.value.copy(t.eclipseSunDir),T.uEclipseSunDist.value=t.sunDistanceKm/6371,T.uEclipseOn.value=+!!t.lunarEclipse}),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`group`,{ref:c,children:[(0,W.jsx)(`sprite`,{ref:m,scale:[1450,1450,1],renderOrder:2,children:(0,W.jsx)(`spriteMaterial`,{ref:p,map:i,color:`#ffdca0`,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1,fog:!1})}),(0,W.jsx)(`sprite`,{ref:f,scale:[620,620,1],renderOrder:2,children:(0,W.jsx)(`spriteMaterial`,{ref:u,map:i,color:`#ffd9a0`,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1,fog:!1})}),(0,W.jsx)(`sprite`,{ref:g,renderOrder:2,children:(0,W.jsx)(`spriteMaterial`,{ref:h,map:a,transparent:!0,opacity:0,depthWrite:!1,blending:2,toneMapped:!1,fog:!1})}),(0,W.jsx)(`mesh`,{ref:l,material:x,renderOrder:2,children:(0,W.jsx)(`planeGeometry`,{args:[1,1]})})]}),(0,W.jsxs)(`mesh`,{ref:_,renderOrder:2,children:[(0,W.jsx)(`sphereGeometry`,{args:[1,64,64]}),(0,W.jsx)(`primitive`,{object:S,attach:`material`})]})]})}function bn(){let e=(0,B.useRef)(null),t=w(ce(`textures/stars_milky_way.jpg`)),n=k(e=>e.camera);return(0,B.useEffect)(()=>{t.colorSpace=s,t.needsUpdate=!0},[t]),O(()=>{let t=L.smoothstep(v(n),2.5,6);e.current&&(e.current.opacity=M.starOpacity*(1-t))}),(0,W.jsxs)(`mesh`,{scale:[-1,1,1],frustumCulled:!1,renderOrder:1,children:[(0,W.jsx)(`sphereGeometry`,{args:[P*.96,48,48]}),(0,W.jsx)(`meshBasicMaterial`,{ref:e,map:t,color:`#8a8f9c`,side:1,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1})]})}var xn=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Sn=`
  varying vec3 vDir;
  uniform float uTime;
  uniform float uIntensity;  // perceived strength from the model (0..1)
  uniform float uPoleAz;     // bearing (rad, clockwise from north) the curtains lie toward
  uniform float uNearKm;     // ground distance to the curtains' near edge (km)
  uniform float uBandKm;     // depth of the curtain band (km)
  uniform float uRedness;    // share of the red 630 nm light
  uniform float uActivity;   // geomagnetic activity (Kp-like)

  const float R = 6371.0;
  const float SQRT_PI = 1.7724539;

  float hash1(float n) { return fract(sin(n) * 43758.5453); }
  float noise1(float x) {
    float i = floor(x);
    float f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(hash1(i), hash1(i + 1.0), f);
  }
  float fbm1(float x) { return noise1(x) * 0.5 + noise1(x * 2.3 + 7.1) * 0.3 + noise1(x * 5.1 + 3.3) * 0.2; }

  // Farthest ground distance (km) at which any aurora can still be above the horizon
  // (at 650 km up the horizon lies ~2,800 km away). Beyond it tan(g / R) would also
  // wrap round (past a quarter of the Earth) into bogus crossings behind the observer
  // — stray pixels along the line of sight parallel to the curtains.
  const float G_MAX = 3000.0;

  // Where the view ray (elevation sine/cosine sE, cE) is at a ground distance g (km)
  // along the surface: its length t and height h (km). False if it never gets that
  // far (it climbs away first).
  bool rayAtGround(float g, float sE, float cE, out float t, out float h) {
    if (g <= 0.0 || g > G_MAX) return false;
    float T = tan(g / R);
    float den = cE - T * sE;
    if (den <= 1e-4) return false;
    t = R * T / den;
    float up = R + t * sE;
    h = sqrt(t * cE * t * cE + up * up) - R;
    return true;
  }

  // Ground distance covered per km of ray, at ray length t.
  float groundRate(float t, float sE, float cE) {
    float up = R + t * sE;
    float u = t * cE / up;
    return R * (cE * R / (up * up)) / (1.0 + u * u);
  }

  // The vertical emission profile of a sheet at height h (km).
  vec3 profile(float h, float rays, float strong) {
    float hb = 105.0 - 12.0 * strong;          // the lower border sinks in great storms
    float above = h - hb;
    float green = smoothstep(-3.0, 1.5, above) * exp(-max(above, 0.0) / (22.0 + 50.0 * rays));
    // The red crown rises in great storms (as in visibility.ts's redHeightKm).
    float redH = 235.0 + 185.0 * smoothstep(8.0, 12.0, uActivity);
    float red = exp(-pow((h - redH) / (80.0 + 50.0 * strong), 2.0)) * (0.1 + 0.9 * uRedness);
    float purple = exp(-pow((above - 1.0) / 3.5, 2.0)) * smoothstep(2.5, 6.0, uActivity) * 0.7;
    // Great storms: sunlit N2+ glowing violet high above the red crown.
    float violet = exp(-pow((h - redH - 40.0) / 55.0, 2.0)) * strong * 0.45;
    return vec3(0.22, 1.0, 0.38) * green + vec3(1.0, 0.16, 0.22) * red + vec3(0.6, 0.22, 1.0) * purple
      + vec3(0.55, 0.3, 1.0) * violet;
  }

  void main() {
    vec3 dir = normalize(vDir);
    // The angle a pixel spans (rad) — taken here, in uniform control flow, where screen
    // derivatives are defined (inside the arc loop, with its early exits, they aren't).
    float pix = length(fwidth(dir));
    float sE = dir.y;
    if (sE < -0.01 || uIntensity < 0.002) discard;
    float cE = sqrt(max(1.0 - sE * sE, 0.0));
    // Horizontal direction (east, north) and the curtains' frame: 'ax' toward them,
    // 'ex' along them (magnetic east–west).
    vec2 hdir = cE > 1e-4 ? vec2(dir.x, -dir.z) / cE : vec2(0.0, 1.0);
    vec2 ax = vec2(sin(uPoleAz), cos(uPoleAz));
    vec2 ex = vec2(ax.y, -ax.x);
    float a = dot(hdir, ax);   // ground distance toward the curtains, per km of ground
    float b = dot(hdir, ex);   // ...and along them
    // The compass bearing a pixel spans: wider toward the zenith, where every bearing
    // meets within a few pixels.
    float pixAz = pix / max(cE, 0.02);
    // Looking nearly along the sheets (|b| ≫ |a|), the crossing point races along them.
    float along2 = abs(b) / max(abs(a), 1e-3);
    float t = uTime;
    float strong = clamp((uActivity - 5.0) / 5.0, 0.0, 1.0);

    vec3 acc = vec3(0.0);
    // Under the oval (uNearKm < 0) the band may be thousands of km deep in a great
    // storm: spread evenly, its arcs would all lie far off. There the arcs hang around
    // the observer instead — one just overhead, whose rays meet at the magnetic zenith
    // (the corona) — within the band.
    bool inside = uNearKm < 0.0;
    // Four arcs through the band; the equatorward one is the thinnest and brightest.
    for (int k = 0; k < 4; k++) {
      float fk = float(k);
      float q = k == 0 ? 0.03 : 0.12 + 0.27 * fk;
      float local = k == 0 ? -220.0 : k == 1 ? 35.0 : k == 2 ? 380.0 : 850.0;
      float y0 = inside ? clamp(local, uNearKm, uNearKm + uBandKm) : uNearKm + uBandKm * q;
      float w = 1.5 + 2.5 * fk; // sheet half-thickness (km)
      if (abs(a) < 1e-3) continue;
      // How much of the arc (km, along it) a pixel spans, for the flat sheet: the
      // crossing x = y0·b/a slides by g/a per radian of bearing — fast seen nearly
      // edge-on or near the zenith — plus the pixel's width at that range.
      float g = y0 / a;
      float spanX = pixAz * abs(g / a) + pix * abs(g) / max(cE, 0.05);
      // Solve the crossing with the folded sheet y = y0 + fold(x), iterating on x.
      // Each step multiplies an error by ~|b/a|·fold′, so seen nearly edge-on the
      // folds are eased out (keeping the solve well-behaved, the crossing continuous
      // from pixel to pixel), and each fold scale fades once a pixel spans it.
      float foldK = 1.0 / (1.0 + 0.35 * along2 * along2);
      float foldLo = foldK * (1.0 - smoothstep(60.0, 250.0, spanX));
      float foldHi = foldK * (1.0 - smoothstep(6.0, 25.0, spanX));
      float x = 0.0;
      for (int it = 0; it < 3; it++) {
        x = g * b;
        float fold = (fbm1(x * 0.004 + fk * 17.3 + t * 0.012) - 0.5) * 90.0 * foldLo
                   + (noise1(x * 0.035 + fk * 5.0 - t * 0.12) - 0.5) * 14.0 * foldHi;
        g = (y0 + fold) / a;
      }
      float tt;
      float h;
      if (!rayAtGround(g, sE, cE, tt, h)) continue;
      if (h < 80.0 || h > 650.0) continue;
      // Path through the sheet: thickness over the crossing rate (edge-on glows
      // brighter), capped.
      float rate = abs(a * groundRate(tt, sE, cE));
      float path = w * SQRT_PI / max(rate, 0.08);
      // The arc a pixel spans at the actual crossing: along the sheet, and across the
      // ray at its range.
      float footprint = max(pixAz * abs(g / a), pix * tt);
      // Brightness along the arc, flickering rays, and surges — each faded toward its
      // average once a pixel spans it (filtered like a texture, so distant, edge-on and
      // overhead arcs don't alias into speckle, stripes or dashes); far ends fade.
      float surge = smoothstep(0.2, 0.75, fbm1(x * 0.008 + fk * 9.1 - t * 0.03));
      float along = 0.3 + 0.7 * mix(surge, 0.5, smoothstep(30.0, 120.0, footprint));
      // Rays a few km apart.
      float raw = pow(noise1(x * 0.22 + fk * 31.0 + t * 0.3), 1.6) * 0.75 + noise1(x * 0.05 - t * 0.2) * 0.25;
      float rays = mix(0.3, raw, 1.0 - smoothstep(0.8, 3.5, footprint));
      float ends = 1.0 - smoothstep(1300.0, 2600.0, abs(x));
      float amp = along * ends * (0.45 + 0.9 * rays) * (k == 0 ? 1.0 : 0.6 / fk);
      acc += profile(h, rays, strong) * amp * path;
    }
    // A faint diffuse glow across the whole band (mostly the red crown), in slowly
    // drifting patches rather than an even wall.
    if (a > 1e-3) {
      float g = (uNearKm + uBandKm * 0.5) / a;
      float w = max(uBandKm * 0.5, 50.0);
      float tt;
      float h;
      if (rayAtGround(g, sE, cE, tt, h) && h > 80.0 && h < 650.0) {
        float rate = abs(a * groundRate(tt, sE, cE));
        float patches = 0.35 + 1.1 * fbm1(g * b * 0.003 + t * 0.008);
        acc += profile(h, 0.3, strong) * vec3(0.6, 0.4, 0.6) * 0.02 * w * SQRT_PI / max(rate, 0.08) * patches;
      }
    }

    // Under a great storm's oval the whole sky glows too — a diffuse red (and, high
    // up, violet) light around and between the arcs, brighter toward the horizon
    // where the line of sight runs longer through the glowing layer; in slow patches.
    if (inside && sE > 0.0) {
      float slant = 1.0 / max(sE, 0.15);
      float patches = 0.45 + 0.9 * fbm1(b * 2.3 + a * 1.7 + t * 0.006);
      acc += vec3(1.0, 0.16, 0.26) * (0.4 + 0.6 * uRedness) * strong * strong * 3.2 * slant * patches;
    }

    // Dimmed by the long air path toward the horizon (Kasten–Young air mass).
    float e = degrees(asin(clamp(sE, 0.0, 1.0)));
    float airmass = 1.0 / (max(sE, 0.0) + 0.50572 * pow(e + 6.07995, -1.6364));
    acc *= exp(-0.11 * airmass);

    // Exposure: a great storm is far brighter than the display, so take the eye's
    // adaptation into account — less gain the stronger the storm — keeping its
    // structure visible instead of flat, saturated walls near the horizon.
    vec3 col = acc * uIntensity * 0.32 / (1.0 + 2.2 * strong);
    // Rod vision: faint light reads grey-green, not saturated.
    float lum = dot(col, vec3(0.3, 0.59, 0.11));
    col = mix(vec3(lum), col, smoothstep(0.02, 0.18, lum));
    // Soft, hue-keeping saturation (like the old soft clip for faint light), rolling
    // the brightest light toward a pale pink instead of flat pure colour.
    float peak = max(max(col.r, col.g), col.b);
    vec3 mapped = col / (1.0 + peak);
    float hot = smoothstep(1.0, 4.0, peak);
    mapped = mix(mapped, vec3(1.0, 0.72, 0.86) * max(max(mapped.r, mapped.g), mapped.b), hot * 0.35);
    gl_FragColor = vec4(mapped, 1.0);
  }
`,Cn=Math.PI/180;function wn(e,t,n,r){let i=e*Cn,a=n*Cn,o=(r-t)*Cn;return Math.atan2(Math.sin(o)*Math.cos(a),Math.cos(i)*Math.sin(a)-Math.sin(i)*Math.cos(a)*Math.cos(o))}function Tn(){let e=b(e=>e.layers.aurora),t=b(e=>e.surfaceLocation),n=b(e=>e.speed),r=b(e=>e.playing),a=(0,B.useRef)(null),o=(0,B.useRef)(null),s=(0,B.useMemo)(()=>({uTime:{value:0},uIntensity:{value:0},uPoleAz:{value:0},uNearKm:{value:500},uBandKm:{value:400},uRedness:{value:0},uActivity:{value:3}}),[]);return(0,B.useEffect)(()=>{e&&Se()},[e]),O((s,c)=>{let l=o.current?.uniforms;if(!l)return;if(l.uTime.value+=Math.min(c,.05)*Ve(n,r),!e||!t){l.uIntensity.value=0,a.current&&(a.current.visible=!1);return}let u=S.skyDate(),d=we(),f=re(t.lat,t.lon,u,d),m=p(u),h=i(f.lon,re(m.lat,m.lon,u,null).lon),{activity:g}=de(u),_=Ke(f.lat,h,g,M.sunAltDeg,Ye(u)),v=Je(me(u)),y=f.lat>=0,b=wn(t.lat,t.lon,y?v.lat:-v.lat,y?v.lon:v.lon+180);l.uPoleAz.value=_.toward===1?b:b+Math.PI,l.uNearKm.value=_.nearKm,l.uBandKm.value=_.bandKm,l.uActivity.value=g,l.uRedness.value=_.redness,l.uIntensity.value=_.strength,a.current&&(a.current.visible=_.strength>.004)}),(0,W.jsxs)(`mesh`,{ref:a,frustumCulled:!1,visible:!1,renderOrder:3,children:[(0,W.jsx)(`sphereGeometry`,{args:[P*.85,64,48]}),(0,W.jsx)(`shaderMaterial`,{ref:o,vertexShader:xn,fragmentShader:Sn,uniforms:s,transparent:!0,depthWrite:!1,side:1,blending:2,toneMapped:!1,fog:!1})]})}var En=P*.88,Dn=864e5,On=-.4;function kn(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.strokeStyle=`rgba(255,255,255,1)`,t.lineWidth=7,t.beginPath(),t.arc(128/2,128/2,40,0,Math.PI*2),t.stroke(),t.fillStyle=`rgba(255,255,255,0.9)`,t.beginPath(),t.arc(128/2,128/2,9,0,Math.PI*2),t.fill();let n=new He(e);return n.colorSpace=s,n}function An(){let e=b(e=>e.surfaceLocation),t=b(e=>e.layers.skyPath),n=b(e=>e.displayTimeMs),r=Math.floor(n/Dn),i=(0,B.useRef)(null),a=(0,B.useMemo)(()=>{if(!e)return null;let t=r*Dn+(12-e.lon/15)*36e5,n=[];for(let r=-720;r<=720;r+=4){let{altitude:i,azimuth:a}=se(e,new Date(t+r*6e4));n.push({alt:i,v:ge(i,a,En)})}let i=[],a=[],o=(e,t,n)=>e.push(t.x,t.y,t.z,n.x,n.y,n.z),s=new d;for(let e=1;e<n.length;e++){let t=n[e-1],r=n[e],c=t.alt>=On,l=r.alt>=On;c&&l?o(i,t.v,r.v):!c&&!l?o(a,t.v,r.v):(s.lerpVectors(t.v,r.v,(On-t.alt)/(r.alt-t.alt)),o(c?i:a,(c?t:r).v,s),o(c?a:i,s,(c?r:t).v))}let c=e=>{let t=new N;return t.setAttribute(`position`,new j(e,3)),t},l=[];if(i.length>=6){let e=new fe(c(i),new Te({color:`#ffce80`,transparent:!0,opacity:.7,depthWrite:!1,fog:!1,toneMapped:!1}));e.renderOrder=2,e.frustumCulled=!1,l.push(e)}if(a.length>=6){let e=new fe(c(a),new Ce({color:`#8fa0d8`,transparent:!0,opacity:.4,dashSize:45,gapSize:30,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));e.computeLineDistances(),e.renderOrder=4,e.frustumCulled=!1,l.push(e)}return l},[e?.lat,e?.lon,r]),o=(0,B.useMemo)(()=>kn(),[]);return O(()=>{let e=i.current;if(!e)return;let n=M,r=t&&n.ready&&n.sunAltDeg<On;e.visible=r,r&&e.position.copy(n.sunDir).multiplyScalar(En)}),!t||!a?null:(0,W.jsxs)(W.Fragment,{children:[a.map((e,t)=>(0,W.jsx)(`primitive`,{object:e},t)),(0,W.jsx)(`sprite`,{ref:i,visible:!1,scale:[130,130,1],renderOrder:5,children:(0,W.jsx)(`spriteMaterial`,{map:o,color:`#ffb066`,transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})})]})}function jn(e){let t=Math.abs(e);return t>=60?[[`pine`,.65],[`aspen`,.35]]:t>=50?[[`pine`,.4],[`aspen`,.3],[`ash`,.15],[`oak`,.15]]:t>=35?[[`oak`,.4],[`ash`,.35],[`pine`,.15],[`aspen`,.1]]:[[`oak`,.45],[`ash`,.45],[`pine`,.1]]}var Mn=e=>e===`pine`,Nn=365,Pn=16,Fn=24,In=12,Ln=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Rn(e){let t=e-40,n=t>=0?95+2.4*t:95+2*t,r=t>=0?320-3*t:320-1.5*t;return{leafOut:Math.min(170,Math.max(55,n)),leafFall:Math.min(345,Math.max(235,r))}}function zn(e,t){if(Math.abs(e)<23)return{leaves:1,autumn:0};let n=e>=0?t:(t+Nn/2)%Nn,{leafOut:r,leafFall:i}=Rn(Math.abs(e));return n<r-1||n>i+In?{leaves:0,autumn:1}:{leaves:Ln((n-r)/Pn)*(1-Ln((n-i)/In)),autumn:Ln((n-(i-Fn))/Fn)}}var K=`
  float h21(vec2 p){ p=fract(p*vec2(123.34,345.45)); p+=dot(p,p+34.345); return fract(p.x*p.y); }
  float vnoise(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.0-2.0*f);
    float a=h21(i),b=h21(i+vec2(1.0,0.0)),c=h21(i+vec2(0.0,1.0)),d=h21(i+vec2(1.0,1.0));
    return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
`,Bn=e=>Math.round(e*1e4);function Vn(e,t){let n=2166136261;for(let r of[Bn(e),Bn(t)])n^=r>>>0,n=Math.imul(n,16777619);return n>>>0}function Hn(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Un={pine:16,aspen:13,oak:14,ash:15},q=Math.PI/180,Wn=1.7,Gn=5,Kn=4,qn=1.5,Jn=.3,Yn=12,Xn=300,Zn=.6;function Qn(e){let t=360/Gn,n=Array(t).fill(90),r=e*q;for(let e=-23.44;e<=23.44;e+=1){let i=e*q;for(let e=0;e<360;e+=.5){let a=e*q,o=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(a),s=Math.asin(Math.max(-1,Math.min(1,o)))/q;if(s<Kn)continue;let c=Math.atan2(-Math.sin(a)*Math.cos(i),Math.cos(r)*Math.sin(i)-Math.sin(r)*Math.cos(i)*Math.cos(a)),l=Math.floor((c/q%360+360)%360/Gn)%t;n[l]=Math.min(n[l],s)}}return n.map((e,r)=>Math.min(e,n[(r+1)%t],n[(r+t-1)%t]))}function $n(e,t,n){let r=90;for(let i=t-n;i<=t+n+1e-9;i+=Gn/2)r=Math.min(r,e[Math.floor((i%360+360)%360/Gn)%e.length]);return r}function er(e,t,n){let r=Hn(Vn(e,t)),i=jn(e),a=()=>{let e=r();for(let[t,n]of i)if((e-=n)<=0)return t;return i[i.length-1][0]},o=Qn(e),s=6+Math.floor(r()*3),c=Array.from({length:s},(e,t)=>{let n=(t+.15+r()*.7)/s*360*q,i=25+r()*r()*170;return{x:Math.sin(n)*i,z:-Math.cos(n)*i,species:a()}}),l=[];for(let e=0;e<n;e++){let t=c[e%c.length];for(let e=0;e<12;e++){let e=r()*Math.PI*2,n=2+r()*r()*22,i=t.x+Math.cos(e)*n,s=t.z+Math.sin(e)*n,c=Math.hypot(i,s);if(c<Yn)continue;let u=r()<.7?t.species:a(),d=.8+r()*.4,f=(Math.atan2(i,-s)/q%360+360)%360,p=Un[u]*d,m=$n(o,f,Math.atan2(Jn*p,c)/q+1)-qn,h=Math.tan(Math.max(m,0)*q);if(p-Wn>c*h){let e=(c*h+Wn)/Un[u];if(e>=Zn)d=e;else{let e=(Un[u]*Zn-Wn)/Math.max(h,1e-6);if(e>Xn)continue;i*=e/c,s*=e/c,c=e,d=Zn}}if(!l.some(e=>Math.hypot(e.x-i,e.z-s)<5)){l.push({species:u,variant:Math.floor(r()*2),x:i,z:s,yaw:r()*Math.PI*2,scale:d});break}}}return l}var tr=`
  // Grass colour at height t along a blade (0 base … 1 tip), in patch tone patchy,
  // for a blade of random tone rnd; season 1 lush … 0 dull; snow 0..1.
  vec3 meadowColor(float t, float patchy, float rnd, float season, float snow) {
    vec3 base = mix(vec3(0.10, 0.20, 0.04), vec3(0.16, 0.27, 0.06), patchy);
    vec3 tip = mix(vec3(0.36, 0.52, 0.14), vec3(0.50, 0.58, 0.20), rnd);
    vec3 green = mix(base, tip, smoothstep(0.0, 1.0, t));
    vec3 straw = mix(vec3(0.22, 0.20, 0.09), vec3(0.45, 0.40, 0.22), t);
    return mix(mix(straw, green, season), vec3(0.85, 0.89, 0.93), snow * 0.5);
  }
  // Gust strength (0..1) at ground point p: a noise field travelling downwind.
  float meadowGust(vec2 p, float time, vec2 windDir) {
    vec2 gp = p * 0.09 - windDir * time * 0.55;
    return vnoise(gp) * 0.7 + vnoise(gp * 2.7 + 3.1) * 0.3;
  }
  // Patch tone at ground point p (the same patches under blades and beyond them).
  float meadowPatch(vec2 p) {
    return vnoise(p * 0.12 + 17.0);
  }
`;function nr(){let e=b(e=>e.surfaceLocation),t=b(e=>e.speed),n=b(e=>e.playing),r=(0,B.useMemo)(()=>({uTime:{value:0},uWindDir:{value:new D(.85,.5).normalize()},uSnow:{value:0},uSeason:{value:1}}),[]);return O((i,a)=>{r.uTime.value+=Math.min(a,.05)*Ve(t,n),e&&(r.uSnow.value=Ze(e.lat,M.monthFrac),r.uSeason.value=.45+.55*zn(e.lat,M.dayOfYear).leaves)}),r}var rr=2e3;function ir({meadow:e}){let t=(0,B.useMemo)(()=>{let t=new z({color:`#ffffff`});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
          uniform float uTime;
          uniform vec2 uWindDir;
          uniform float uSeason;
          uniform float uSnow;
          varying vec2 vXZ;
          ${K}
          ${tr}`).replace(`#include <color_fragment>`,`
          #include <color_fragment>
          // How much of the blades' upper halves the eye sees: a little more at grazing
          // angles — around the blade field's own mid-height average, so the lawn and
          // the ground beyond it read alike.
          float grazing = 1.0 - abs(dot(normalize(vViewPosition), vec3(viewMatrix * vec4(0.0, 1.0, 0.0, 0.0))));
          float t = mix(0.3, 0.52, grazing);
          // Fine blade streaks, faded out before they alias into shimmer.
          float px = length(fwidth(vXZ));
          float streak = vnoise(vXZ * vec2(11.0, 3.0)) * 0.5 + vnoise(vXZ * vec2(3.0, 12.0) + 5.0) * 0.5;
          float rnd = mix(streak, 0.5, smoothstep(0.02, 0.12, px));
          t += (rnd - 0.5) * 0.35 * (1.0 - smoothstep(0.02, 0.12, px));
          diffuseColor.rgb = meadowColor(clamp(t, 0.0, 1.0), meadowPatch(vXZ), rnd, uSeason, uSnow);
          // The wind's gusts roll across the field as a sheen (bent blades show their
          // lighter sides), matching the gusts bowing the near blades.
          float gust = meadowGust(vXZ, uTime, uWindDir);
          diffuseColor.rgb *= 0.9 + 0.22 * gust;
          `)},t},[e]);return(0,W.jsx)(`mesh`,{"rotation-x":-Math.PI/2,material:t,receiveShadow:!0,children:(0,W.jsx)(`planeGeometry`,{args:[rr,rr,1,1]})})}var ar=class{m_w=123456789;m_z=987654321;mask=4294967295;constructor(e){this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}},or=class{constructor(e=new d,t=new F,n=0,r=0,i=0,a=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=r,this.level=i,this.sectionCount=a,this.segmentCount=o}},sr={Birch:`birch`,Oak:`oak`,Pine:`pine`,Willow:`willow`},cr={Single:`single`,Double:`double`},lr={Ash:`ash`,Aspen:`aspen`,Pine:`pine`,Oak:`oak`},ur={Deciduous:`deciduous`,Evergreen:`evergreen`},dr=class{constructor(){this.seed=0,this.type=ur.Deciduous,this.bark={type:sr.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:lr.Oak,billboard:cr.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]==`object`&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}},fr={"Ash Small":{seed:26867,type:`deciduous`,bark:{type:`oak`,tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{1:48,2:75,3:60},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.11,1:.09,2:.05,3:.09},length:{0:23.87,1:18,2:5.59,3:4.6},radius:{0:.81,1:.56,2:.76,3:.7},sections:{0:12,1:10,2:10,3:10},segments:{0:8,1:6,2:4,3:3},start:{1:.53,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.07,2:0,3:0}},leaves:{type:`ash`,billboard:`double`,angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},trellis:{enabled:!1}},"Ash Medium":{seed:36330,type:`deciduous`,bark:{type:`oak`,tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{1:48,2:75,3:60},children:{0:7,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{0:.03,1:.25,2:.2,3:.09},length:{0:43.47,1:27.14,2:9.51,3:4.6},radius:{0:2,1:.63,2:.76,3:.7},sections:{0:12,1:8,2:6,3:4},segments:{0:12,1:6,2:4,3:3},start:{1:.23,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.09,1:-.07,2:0,3:0}},leaves:{type:`ash`,billboard:`double`,angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}},"Ash Large":{seed:29919,type:`deciduous`,bark:{type:`oak`,tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{1:39,2:39,3:51},children:{0:10,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{0:-.05,1:.2,2:.16,3:.049999999999999996},length:{0:45,1:29.42,2:15.3,3:4.6},radius:{0:3.03,1:.53,2:.79,3:1.11},sections:{0:12,1:8,2:6,3:4},segments:{0:8,1:6,2:4,3:3},start:{1:.32,2:.34,3:0},taper:{0:.7,1:.6199999999999999,2:.7599999999999999,3:0},twist:{0:.09,1:-.07,2:0,3:0}},leaves:{type:`ash`,billboard:`double`,angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}},"Aspen Small":{seed:36330,type:`deciduous`,bark:{type:`birch`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{1:70,2:35,3:7},children:{0:4,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{0:.04,1:-.010000000000000007,2:.12,3:.02},length:{0:23.99,1:3.36,2:7.699999999999999,3:1},radius:{0:.36999999999999994,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.44999999999999996,2:.32999999999999996,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:`aspen`,billboard:`double`,angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}},"Aspen Medium":{seed:18020,type:`deciduous`,bark:{type:`birch`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{1:75,2:32,3:7},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{0:.05,1:.12,2:.12,3:.02},length:{0:50,1:6.07,2:11.19,3:1},radius:{0:.72,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.59,2:.35,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:`aspen`,billboard:`double`,angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}},"Aspen Large":{seed:30631,type:`deciduous`,bark:{type:`birch`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{1:47,2:63,3:7},children:{0:10,1:6,2:0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{0:.05,1:-.030000000000000006,2:.12,3:.02},length:{0:69.60000000000001,1:18.56,2:11.19,3:1},radius:{0:1.11,1:.5800000000000001,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.62,2:.049999999999999975,3:0},taper:{0:.7000000000000001,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:`aspen`,billboard:`double`,angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},trellis:{enabled:!1}},"Bush 1":{seed:45590,type:`deciduous`,bark:{type:`oak`,tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{1:21.521739130434785,2:62.608695652173914,3:60},children:{0:7,1:3,2:2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.11,1:.09,2:.05,3:.09},length:{0:.1,1:15.302173913043479,2:5.59,3:4.6},radius:{0:.5793478260869566,1:.9521739130434783,2:.76,3:.7},sections:{0:6,1:6,2:10,3:10},segments:{0:4,1:4,2:4,3:3},start:{1:.53,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.07,2:0,3:0}},leaves:{type:`ash`,billboard:`double`,angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}},"Bush 2":{seed:45590,type:`deciduous`,bark:{type:`oak`,tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{1:19.565217391304348,2:27.39130434782609,3:60},children:{0:10,1:3,2:2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.021739130434782594,1:.10869565217391308,2:.05,3:.09},length:{0:.1,1:19.645652173913046,2:7.701086956521739,3:4.6},radius:{0:.5793478260869566,1:.9521739130434783,2:.76,3:.7},sections:{0:3,1:4,2:10,3:10},segments:{0:4,1:4,2:4,3:3},start:{1:.6413043478260869,2:.7065217391304348,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3586956521739131,1:-.043478260869565244,2:0,3:0}},leaves:{type:`aspen`,billboard:`double`,angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}},"Bush 3":{seed:31343,type:`evergreen`,bark:{type:`oak`,tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{1:66.52173913043478,2:52.82608695652174,3:0},children:{0:13,1:4,2:4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{0:.05434782608695654,1:.06521739130434778,2:.05,3:.09},length:{0:10.958695652173914,1:21.81739130434783,2:13.130434782608695,3:5.529347826086957},radius:{0:.5793478260869566,1:.9521739130434783,2:.6858695652173914,3:.7391304347826086},sections:{0:4,1:3,2:3,3:10},segments:{0:3,1:3,2:3,3:3},start:{1:.14130434782608695,2:.29347826086956524,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.03260869565217389,2:0,3:0}},leaves:{type:`pine`,billboard:`double`,angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},trellis:{enabled:!1}},"Oak Small":{seed:30895,type:`deciduous`,bark:{type:`oak`,tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{1:54,2:58,3:32},children:{0:4,1:2,2:3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{0:.07,1:-.08,2:.11,3:.09},length:{0:28.08,1:4.55,2:9.78,3:7.16},radius:{0:1,1:1.02,2:.69,3:1.19},sections:{0:16,1:9,2:8,3:1},segments:{0:7,1:5,2:3,3:3},start:{1:.49,2:.06,3:.12},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},leaves:{type:`oak`,billboard:`double`,angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}},"Oak Medium":{seed:35729,type:`deciduous`,bark:{type:`oak`,tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{1:54,2:58,3:32},children:{0:6,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{0:0,1:-.1,2:-.15,3:.09},length:{0:37.24,1:11.08,2:12.39,3:7.16},radius:{0:1.41,1:.9,2:.69,3:1.19},sections:{0:8,1:6,2:3,3:1},segments:{0:7,1:5,2:3,3:3},start:{1:.49,2:.06,3:.12},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},leaves:{type:`oak`,billboard:`double`,angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}},"Oak Large":{seed:23399,type:`deciduous`,bark:{type:`oak`,tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{1:54,2:43,3:32},children:{0:9,1:5,2:3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{0:-.04,1:.16,2:-.06,3:.09},length:{0:47.7,1:29.39,2:17.62,3:7.16},radius:{0:3,1:.69,2:.69,3:1.19},sections:{0:16,1:9,2:8,3:3},segments:{0:12,1:5,2:3,3:3},start:{1:.35,2:.1,3:0},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},leaves:{type:`oak`,billboard:`double`,angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}},"Pine Small":{seed:11744,type:`evergreen`,bark:{type:`pine`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{1:117,2:60,3:60},children:{0:91,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:39.55,1:12.12,2:10,3:1},radius:{0:.55,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.16,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:`pine`,billboard:`double`,angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},trellis:{enabled:!1}},"Pine Medium":{seed:13977,type:`evergreen`,bark:{type:`pine`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{1:110,2:16,3:60},children:{0:82,1:3,2:5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:50,1:23.87,2:14.08,3:1},radius:{0:1.05,1:.36,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.27,2:.14,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:`pine`,billboard:`double`,angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}},"Pine Large":{seed:44166,type:`evergreen`,bark:{type:`pine`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{1:129.1304347826087,2:16,3:60},children:{0:100,1:3,2:0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:65.25217391304348,1:34.84782608695652,2:27.246739130434783,3:1},radius:{0:1.271739130434783,1:.366304347826087,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.29347826086956524,2:.14,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:`pine`,billboard:`double`,angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}},Trellis:{seed:41563,type:`deciduous`,bark:{type:`oak`,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},branch:{levels:3,angle:{1:26,2:79,3:0},children:{0:7,1:5,2:1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{0:0,1:.02,2:-.41,3:.09},length:{0:4.8,1:16.9,2:11.3,3:11.1},radius:{0:.27,1:.71,2:.84,3:.48},sections:{0:6,1:12,2:10,3:4},segments:{0:3,1:3,2:3,3:3},start:{1:.19,2:.1,3:.06},taper:{0:.6,1:.5,2:.5,3:.5},twist:{0:-.02,1:-.01,2:.09,3:0}},leaves:{type:`ash`,billboard:`single`,angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},trellis:{enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173}}};function pr(e){let t=fr[e];return t?structuredClone(t):new dr}var mr=Object.assign({"./assets/bark/birch_ao_1k.jpg":`/earth-simulator/assets/birch_ao_1k-D_QkgyKp.jpg`,"./assets/bark/birch_color_1k.jpg":`/earth-simulator/assets/birch_color_1k-BxIEDKXK.jpg`,"./assets/bark/birch_normal_1k.jpg":`/earth-simulator/assets/birch_normal_1k-CoYvyauc.jpg`,"./assets/bark/birch_roughness_1k.jpg":`/earth-simulator/assets/birch_roughness_1k-nwUM-ujJ.jpg`,"./assets/bark/oak_ao_1k.jpg":`/earth-simulator/assets/oak_ao_1k-DUJgKwMD.jpg`,"./assets/bark/oak_color_1k.jpg":`/earth-simulator/assets/oak_color_1k-Y6fizdck.jpg`,"./assets/bark/oak_normal_1k.jpg":`/earth-simulator/assets/oak_normal_1k-C8kyIEQv.jpg`,"./assets/bark/oak_roughness_1k.jpg":`/earth-simulator/assets/oak_roughness_1k-CDkyKLZe.jpg`,"./assets/bark/pine_ao_1k.jpg":`/earth-simulator/assets/pine_ao_1k-M9zlsXzR.jpg`,"./assets/bark/pine_color_1k.jpg":`/earth-simulator/assets/pine_color_1k-CQnxaxS7.jpg`,"./assets/bark/pine_normal_1k.jpg":`/earth-simulator/assets/pine_normal_1k-CKm2gZQI.jpg`,"./assets/bark/pine_roughness_1k.jpg":`/earth-simulator/assets/pine_roughness_1k-D4KXjOPr.jpg`,"./assets/leaves/ash_color.png":`/earth-simulator/assets/ash_color-CJFpracT.png`,"./assets/leaves/aspen_color.png":`/earth-simulator/assets/aspen_color-Cpgr1Q0w.png`,"./assets/leaves/oak_color.png":`/earth-simulator/assets/oak_color-BAD6jIv3.png`,"./assets/leaves/pine_color.png":`/earth-simulator/assets/pine_color-3BIKvdLP.png`}),hr=new ke,gr=new Map;function _r(e,t){let n=gr.get(e);return n||(n=hr.load(mr[e]),n.premultiplyAlpha=!0,t&&(n.colorSpace=s),gr.set(e,n)),n}function J(e,t,n={x:1,y:1}){let r=_r(`./assets/bark/${e}_${t}_1k.jpg`,t===`color`);return r.wrapS=oe,r.wrapT=oe,r.repeat.x=n.x,r.repeat.y=1/n.y,r}function vr(e){return _r(`./assets/leaves/${e}_color.png`,!0)}var yr=class extends Ge{constructor(e){super(),this.name=`Trellis`,this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){let e=this.options;this.dispose(),this.material=new a({color:e.color,roughness:.8}),this.hCylinderGeo=new Le(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new Le(e.cylinderRadius,e.cylinderRadius,e.height,8);let t=Math.floor(e.height/e.spacing)+1;for(let n=0;n<t;n++){let t=n*e.spacing,r=new he(this.hCylinderGeo,this.material);r.position.set(e.position.x,e.position.y+t,e.position.z),this.add(r)}let n=Math.floor(e.width/e.spacing)+1;for(let t=0;t<n;t++){let n=-e.width/2+t*e.spacing,r=new he(this.vCylinderGeo,this.material);r.position.set(e.position.x+n,e.position.y+e.height/2,e.position.z),this.add(r)}}getNearestPoint(e){let t=this.options,n=t.position.x,r=t.position.y,i=t.position.z,a=n-t.width/2,o=n+t.width/2,s=r,c=r+t.height,l=Math.max(a,Math.min(o,e.x)),u=Math.max(s,Math.min(c,e.y)),f=Math.round((u-s)/t.spacing)*t.spacing+s,p=Math.max(s,Math.min(c,f)),m=Math.round((l-a)/t.spacing)*t.spacing+a,h=Math.max(a,Math.min(o,m)),g=new d(l,p,i),_=new d(h,u,i);return e.distanceTo(g)<e.distanceTo(_)?g:_}dispose(){this.children.forEach(e=>{e.geometry&&=null}),this.clear(),this.hCylinderGeo&&=(this.hCylinderGeo.dispose(),null),this.vCylinderGeo&&=(this.vCylinderGeo.dispose(),null),this.material&&=(this.material.dispose(),null)}},br=class extends Ge{rng;options;branchQueue=[];constructor(e=new dr){super(),this.name=`Tree`,this.branchesMesh=new he,this.leavesMesh=new he,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=e}update(e){let t=this.leavesMesh.material.userData.shader;t&&(t.uniforms.uTime.value=e)}loadPreset(e){let t=pr(e);this.loadFromJson(t)}loadFromJson(e){this.options.copy(e),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new ar(this.options.seed),this.branchQueue.push(new or(new d,new F,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){let e=this.branchQueue.shift();this.generateBranch(e)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(e){let t=this.branches.verts.length/3,n=e.orientation.clone(),r=e.origin.clone(),i=e.length/e.sectionCount/(this.options.type===`Deciduous`?this.options.branch.levels-1:1),a=[];for(let t=0;t<=e.sectionCount;t++){let o=e.radius;t===e.sectionCount&&e.level===this.options.branch.levels?o=.001:this.options.type===ur.Deciduous?o*=1-this.options.branch.taper[e.level]*(t/e.sectionCount):this.options.type===ur.Evergreen&&(o*=1-t/e.sectionCount);let s;for(let i=0;i<e.segmentCount;i++){let a=2*Math.PI*i/e.segmentCount,c=new d(Math.cos(a),0,Math.sin(a)).multiplyScalar(o).applyEuler(n).add(r),l=new d(Math.cos(a),0,Math.sin(a)).applyEuler(n).normalize(),u=new D(i/e.segmentCount,t%2==0?0:1);this.branches.verts.push(...Object.values(c)),this.branches.normals.push(...Object.values(l)),this.branches.uvs.push(...Object.values(u)),i===0&&(s={vertex:c,normal:l,uv:u})}this.branches.verts.push(...Object.values(s.vertex)),this.branches.normals.push(...Object.values(s.normal)),this.branches.uvs.push(1,s.uv.y),a.push({origin:r.clone(),orientation:n.clone(),radius:o}),r.add(new d(0,i,0).applyEuler(n));let c=Math.max(1,1/Math.sqrt(o))*this.options.branch.gnarliness[e.level];n.x+=this.rng.random(c,-c),n.z+=this.rng.random(c,-c);let l=new R().setFromEuler(n),u=new R().setFromAxisAngle(new d(0,1,0),this.options.branch.twist[e.level]),f=new R().setFromUnitVectors(new d(0,1,0),new d().copy(this.options.branch.force.direction));if(l.multiply(u),l.rotateTowards(f,this.options.branch.force.strength/o),this.options.trellis.enabled){let e=this.calculateTrellisForce(r,o);if(e){let t=new R().setFromUnitVectors(new d(0,1,0),e.direction);l.rotateTowards(t,e.strength)}}n.setFromQuaternion(l)}if(this.generateBranchIndices(t,e),this.options.type===`deciduous`){let t=a[a.length-1];e.level<this.options.branch.levels?this.branchQueue.push(new or(t.origin,t.orientation,this.options.branch.length[e.level+1],t.radius,e.level+1,e.sectionCount,e.segmentCount)):this.generateLeaf(t.origin,t.orientation)}e.level===this.options.branch.levels?this.generateLeaves(a):e.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[e.level],e.level+1,a)}generateChildBranches(e,t,n){let r=this.rng.random();for(let i=0;i<e;i++){let a=this.rng.random(1,this.options.branch.start[t]),o=Math.floor(a*(n.length-1)),s,c;s=n[o],c=o===n.length-1?s:n[o+1];let l=(a-o/(n.length-1))/(1/(n.length-1)),u=new d().lerpVectors(s.origin,c.origin,l),f=this.options.branch.radius[t]*((1-l)*s.radius+l*c.radius),p=new R().setFromEuler(s.orientation),m=new R().setFromEuler(c.orientation),h=new F().setFromQuaternion(m.slerp(p,l)),g=2*Math.PI*(r+i/e),_=new R().setFromAxisAngle(new d(1,0,0),this.options.branch.angle[t]/(180/Math.PI)),v=new R().setFromAxisAngle(new d(0,1,0),g),y=new R().setFromEuler(h),b=new F().setFromQuaternion(y.multiply(v.multiply(_))),x=this.options.branch.length[t]*(this.options.type===ur.Evergreen?1-a:1);this.branchQueue.push(new or(u,b,x,f,t,this.options.branch.sections[t],this.options.branch.segments[t]))}}generateLeaves(e){let t=this.rng.random();for(let n=0;n<this.options.leaves.count;n++){let r=this.rng.random(1,this.options.leaves.start),i=Math.floor(r*(e.length-1)),a,o;a=e[i],o=i===e.length-1?a:e[i+1];let s=(r-i/(e.length-1))/(1/(e.length-1)),c=new d().lerpVectors(a.origin,o.origin,s),l=new R().setFromEuler(a.orientation),u=new R().setFromEuler(o.orientation),f=new F().setFromQuaternion(u.slerp(l,s)),p=2*Math.PI*(t+n/this.options.leaves.count),m=new R().setFromAxisAngle(new d(1,0,0),this.options.leaves.angle/(180/Math.PI)),h=new R().setFromAxisAngle(new d(0,1,0),p),g=new R().setFromEuler(f),_=new F().setFromQuaternion(g.multiply(h.multiply(m)));this.generateLeaf(c,_)}}generateLeaf(e,t){let n=this.leaves.verts.length/3,r=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance)),i=r,a=r,o=r=>{let o=[new d(-i/2,a,0),new d(-i/2,0,0),new d(i/2,0,0),new d(i/2,a,0)].map(n=>n.applyEuler(new F(0,r,0)).applyEuler(t).add(e));this.leaves.verts.push(o[0].x,o[0].y,o[0].z,o[1].x,o[1].y,o[1].z,o[2].x,o[2].y,o[2].z,o[3].x,o[3].y,o[3].z);let s=new d(0,0,1).applyEuler(t);this.leaves.normals.push(s.x,s.y,s.z,s.x,s.y,s.z,s.x,s.y,s.z,s.x,s.y,s.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(n,n+1,n+2,n,n+2,n+3),n+=4};o(0),this.options.leaves.billboard===cr.Double&&o(Math.PI/2)}generateBranchIndices(e,t){let n,r,i,a,o=t.segmentCount+1;for(let s=0;s<t.sectionCount;s++)for(let c=0;c<t.segmentCount;c++)n=e+s*o+c,r=e+s*o+(c+1),i=n+o,a=r+o,this.branches.indices.push(n,i,r,r,i,a)}createBranchesGeometry(){let e=new N;e.setAttribute(`position`,new I(new Float32Array(this.branches.verts),3)),e.setAttribute(`normal`,new I(new Float32Array(this.branches.normals),3)),e.setAttribute(`uv`,new I(new Float32Array(this.branches.uvs),2)),e.setIndex(new I(new Uint16Array(this.branches.indices),1)),e.computeBoundingSphere();let t=new ie({name:`branches`,flatShading:this.options.bark.flatShading,color:new A(this.options.bark.tint)});this.options.bark.textured&&(t.aoMap=J(this.options.bark.type,`ao`,this.options.bark.textureScale),t.map=J(this.options.bark.type,`color`,this.options.bark.textureScale),t.normalMap=J(this.options.bark.type,`normal`,this.options.bark.textureScale),t.roughnessMap=J(this.options.bark.type,`roughness`,this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=e,this.branchesMesh.material.dispose(),this.branchesMesh.material=t,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){let e=new N;e.setAttribute(`position`,new I(new Float32Array(this.leaves.verts),3)),e.setAttribute(`uv`,new I(new Float32Array(this.leaves.uvs),2)),e.setIndex(new I(new Uint16Array(this.leaves.indices),1)),e.computeVertexNormals(),e.computeBoundingSphere();let t=new ie({name:`leaves`,map:vr(this.options.leaves.type),color:new A(this.options.leaves.tint),side:2,alphaTest:this.options.leaves.alphaTest,dithering:!0});t.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.uniforms.uWindStrength={value:new d(.5,0,.5)},e.uniforms.uWindFrequency={value:.5},e.uniforms.uWindScale={value:70},e.vertexShader=`
        uniform float uTime;
        uniform vec3 uWindStrength;
        uniform float uWindFrequency;
        uniform float uWindScale;
        `+e.vertexShader,e.vertexShader=e.vertexShader.replace(`void main() {`,`
        // GLSL Simplex Noise 3D
        // Source: https://github.com/ashima/webgl-noise

        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }

        vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
        }

        vec3 fade(vec3 t) {
            return t*t*t*(t*(t*6.0-15.0)+10.0);
        }

        // Classic Simplex Noise 3D
        float simplex3(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0);
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx);

            // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //  x0 = x0 - 0. + 0.0 * C 
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy; // 2.0 * C.x = 1/3 = C.y
            vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5

            // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute( 
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            // Gradients: 7x7 points over a square, mapped onto an octahedron.
            // The ring size 17*17 = 289 is close to the mapping's singularity.
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 g0 = vec3(a0.xy,h.x);
            vec3 g1 = vec3(a0.zw,h.y);
            vec3 g2 = vec3(a1.xy,h.z);
            vec3 g3 = vec3(a1.zw,h.w);

            // Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
            g0 *= norm.x;
            g1 *= norm.y;
            g2 *= norm.z;
            g3 *= norm.w;

            // Mix contributions from the four corners
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(g0,x0), dot(g1,x1), 
                                          dot(g2,x2), dot(g3,x3) ) );
        }
          
        void main() {`),e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`
        vec4 mvPosition = vec4(transformed, 1.0);

        float windOffset = 2.0 * 3.14 * simplex3(mvPosition.xyz / uWindScale);
        vec3 windSway = uv.y * uWindStrength * (
          0.5 * sin(uTime * uWindFrequency + windOffset) +
          0.3 * sin(2.0 * uTime * uWindFrequency + 1.3 * windOffset) +
          0.2 * sin(5.0 * uTime * uWindFrequency + 1.5 * windOffset)
        );
        mvPosition.xyz += windSway;

        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        `),t.userData.shader=e},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=e,this.leavesMesh.material.dispose(),this.leavesMesh.material=t,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&=(this.remove(this.trellisMesh),this.trellisMesh.dispose(),null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new yr(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(e){let t=this.options.trellis,n=t.position.x,r=t.position.y,i=t.position.z,a=n-t.width/2,o=n+t.width/2,s=r,c=r+t.height,l=Math.max(a,Math.min(o,e.x)),u=Math.max(s,Math.min(c,e.y)),f=Math.round((u-s)/t.spacing)*t.spacing+s,p=Math.max(s,Math.min(c,f)),m=Math.round((l-a)/t.spacing)*t.spacing+a,h=Math.max(a,Math.min(o,m)),g=new d(l,p,i),_=new d(h,u,i);return e.distanceTo(g)<e.distanceTo(_)?g:_}calculateTrellisForce(e,t){let n=this.options.trellis,r=this.getNearestTrellisPoint(e),i=e.distanceTo(r);if(i>n.force.maxDistance||i<.001)return null;let a=new d().subVectors(r,e).normalize(),o=1-(i/n.force.maxDistance)**+n.force.falloff;return{direction:a,strength:n.force.strength*o/t}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}},xr={grassBlades:11e4,grassRadius:40,grassFarBlades:5e4,grassFarRadius:260,trees:26},Sr={grassBlades:34e3,grassRadius:24,grassFarBlades:16e3,grassFarRadius:160,trees:16};function Cr(){let e=k(e=>e.gl.capabilities.maxTextureSize),t=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches,n=Math.min(window.innerWidth,window.innerHeight)<700;return t||n||e<8192?Sr:xr}var wr={pine:{presets:[`Pine Medium`,`Pine Large`],bark:`pine`,leaf:`pine`,autumn:`#5b6b33`},aspen:{presets:[`Aspen Medium`,`Aspen Large`],bark:`birch`,leaf:`aspen`,autumn:`#e3b227`,summer:`#6a9a38`},oak:{presets:[`Oak Medium`,`Oak Large`],bark:`oak`,leaf:`oak`,autumn:`#a9541d`},ash:{presets:[`Ash Medium`,`Ash Large`],bark:`oak`,leaf:`ash`,autumn:`#c7ad3c`}},Tr=new Map;function Er(e,t){let n=`${e}/${t}`,r=Tr.get(n);if(r)return r;let i=wr[e],a=new br,o=fr[i.presets[t%i.presets.length]];a.options.copy(o),a.options.seed=1e3+t*7919,a.generate();let s=a.branchesMesh.geometry,c=a.leavesMesh.geometry;a.branchesMesh.material.dispose(),a.leavesMesh.material.dispose();let l=a.options.leaves.billboard===`double`?8:4,u=c.getAttribute(`position`).count,d=new Float32Array(u);for(let e=0;e<u;e++){let t=Math.floor(e/l);d[e]=(Math.imul(t+1,2654435761)>>>0)%10007/10007}c.setAttribute(`aLeaf`,new I(d,1)),s.computeBoundingBox(),c.computeBoundingBox();let f=Math.max(s.boundingBox.max.y,c.boundingBox.max.y),p={branches:s,leaves:c,unit:Un[e]/Math.max(1,f)};return Tr.set(n,p),p}function Dr(){return(0,B.useMemo)(()=>({uWindTime:{value:0},uWindDir:{value:new D(.85,.5).normalize()},uSnow:{value:0}}),[])}var Or=`
  vec3 iPos = instanceMatrix[3].xyz;
  float phase = iPos.x * 0.37 + iPos.z * 0.53;
  float gust = sin(uWindTime * 1.3 + phase) * 0.6 + sin(uWindTime * 2.9 + phase * 1.7 + position.y * 0.05) * 0.4;
  float flex = clamp(position.y / 60.0, 0.0, 1.0);
`;function kr(e,t){let n=wr[e],r=new z({map:J(n.bark,`color`),normalMap:J(n.bark,`normal`),aoMap:J(n.bark,`ao`)});return r.onBeforeCompile=e=>{e.uniforms.uWindTime=t.uWindTime,e.uniforms.uWindDir=t.uWindDir,e.uniforms.uSnow=t.uSnow,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uWindTime;
uniform vec2 uWindDir;
varying float vUp;`).replace(`#include <begin_vertex>`,`
        #include <begin_vertex>
        ${Or}
        transformed.xz += uWindDir * gust * 0.35 * flex * flex;
        vUp = objectNormal.y;
        `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uSnow;
varying float vUp;`).replace(`#include <color_fragment>`,`
        #include <color_fragment>
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uSnow * smoothstep(0.35, 0.8, vUp));
        `)},r}function Ar(e){return(0,B.useMemo)(()=>({uLeafCover:{value:1},uAutumn:{value:0},uAutumnColor:{value:new A(wr[e].autumn)},uSummerColor:{value:new A(wr[e].summer??`#ffffff`)},uRecolor:{value:+!!wr[e].summer}}),[e])}function jr(e,t,n){let r=new z({map:vr(wr[e].leaf),alphaTest:.5,side:2,emissive:new A(`#3f5f22`),emissiveIntensity:0});return r.onBeforeCompile=e=>{e.uniforms.uWindTime=t.uWindTime,e.uniforms.uWindDir=t.uWindDir,e.uniforms.uSnow=t.uSnow,e.uniforms.uLeafCover=n.uLeafCover,e.uniforms.uAutumn=n.uAutumn,e.uniforms.uAutumnColor=n.uAutumnColor,e.uniforms.uSummerColor=n.uSummerColor,e.uniforms.uRecolor=n.uRecolor,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aLeaf;
uniform float uWindTime;
uniform vec2 uWindDir;
varying float vLeaf;
varying float vUp;`).replace(`#include <begin_vertex>`,`
        #include <begin_vertex>
        ${Or}
        // Leaves flutter at their tips (uv.y runs stem → tip) on top of the sway.
        float flutter = sin(uWindTime * 7.0 + aLeaf * 40.0) * 0.25;
        transformed.xz += uWindDir * (gust * 0.35 * flex * flex + flutter * uv.y);
        vLeaf = aLeaf;
        vUp = objectNormal.y;
        `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uSnow;
uniform float uLeafCover;
uniform float uAutumn;
uniform vec3 uAutumnColor;
uniform vec3 uSummerColor;
uniform float uRecolor;
varying float vLeaf;
varying float vUp;`).replace(`#include <alphatest_fragment>`,`
        // Far away the leaf texture's smaller mip levels average its alpha below the
        // cut-off and whole crowns would vanish: boost alpha with distance so distant
        // trees keep their foliage.
        diffuseColor.a *= 1.0 + 1.2 * smoothstep(10.0, 160.0, length(vViewPosition));
        #include <alphatest_fragment>
        // Fallen leaves are simply gone — one by one, as the crown thins.
        if (vLeaf > uLeafCover) discard;
        `).replace(`#include <color_fragment>`,`
        #include <color_fragment>
        // Autumn: each leaf turns in its own time, keeping the texture's shading.
        float turn = smoothstep(vLeaf * 0.7, vLeaf * 0.7 + 0.3, uAutumn);
        float shade = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11)) * 2.2;
        vec3 summer = mix(diffuseColor.rgb, uSummerColor * shade, uRecolor);
        diffuseColor.rgb = mix(summer, uAutumnColor * shade, turn);
        // Snow on the upward-facing parts of the crown.
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), uSnow * (0.2 + 0.6 * clamp(vUp, 0.0, 1.0)));
        `)},r}function Mr({species:e,placements:t,shared:n}){let r=b(e=>e.surfaceLocation),i=Ar(e),a=(0,B.useMemo)(()=>kr(e,n),[e,n]),o=(0,B.useMemo)(()=>jr(e,n,i),[e,n,i]),s=(0,B.useMemo)(()=>{let n=[],r=new Xe,i=new R,s=new d(0,1,0);for(let c=0;c<2;c++){let l=t.filter(e=>e.variant===c);if(!l.length)continue;let u=Er(e,c),f=new ze(u.branches,a,l.length),p=new ze(u.leaves,o,l.length);l.forEach((e,t)=>{let n=u.unit*e.scale;r.compose(new d(e.x,0,e.z),i.setFromAxisAngle(s,e.yaw),new d(n,n,n)),f.setMatrixAt(t,r),p.setMatrixAt(t,r)});for(let e of[f,p])e.instanceMatrix.needsUpdate=!0,e.frustumCulled=!1,e.castShadow=!0;f.receiveShadow=!0,n.push(f,p)}return n},[e,t,a,o]);return(0,B.useEffect)(()=>()=>{a.dispose(),o.dispose()},[a,o]),O(()=>{if(!r)return;if(Mn(e))i.uLeafCover.value=1,i.uAutumn.value=0;else{let e=zn(r.lat,M.dayOfYear);i.uLeafCover.value=e.leaves,i.uAutumn.value=e.autumn}let t=L.clamp((M.sunAltDeg+2)/12,0,1);o.emissiveIntensity=.45*t*t*(3-2*t)*(1-.6*n.uSnow.value)}),(0,W.jsx)(W.Fragment,{children:s.map(e=>(0,W.jsx)(`primitive`,{object:e},e.uuid))})}function Nr(){let e=b(e=>e.layers.trees),t=b(e=>e.surfaceLocation),n=b(e=>e.speed),r=b(e=>e.playing),i=Cr(),a=Dr(),o=(0,B.useMemo)(()=>{if(!t)return[];let e=er(t.lat,t.lon,i.trees),n=new Map;for(let t of e)n.set(t.species,[...n.get(t.species)??[],t]);return[...n.entries()]},[t?.lat,t?.lon,i.trees]);return O((e,i)=>{a.uWindTime.value+=Math.min(i,.05)*Ve(n,r),a.uSnow.value=t?Ze(t.lat,M.monthFrac):0}),e?(0,W.jsx)(W.Fragment,{children:o.map(([e,t])=>(0,W.jsx)(Mr,{species:e,placements:t,shared:a},e))}):null}function Pr(){let e=[];for(let t=0;t<4;t++){let n=t/4,r=.5*(1-n)**.8;e.push(-r,n,0,r,n,0)}e.push(0,1,0);let t=[];for(let e=0;e<3;e++){let n=e*2;t.push(n,n+1,n+2,n+1,n+3,n+2)}t.push(6,7,8);let n=new N;return n.setAttribute(`position`,new j(e,3)),n.setAttribute(`normal`,new j(Array(e.length).fill(0),3)),n.setIndex(t),n}function Fr(e,t,n,r,i){let a=Hn(i),o=new Float32Array(e*2),s=new Float32Array(e*4);for(let i=0;i<e;i++){let e=t+(n-t)*a()**r,c=a()*Math.PI*2;o[i*2]=Math.cos(c)*e,o[i*2+1]=Math.sin(c)*e,s[i*4]=.22+a()*a()*.45,s[i*4+1]=(.012+a()*.014)*(1+e/7),s[i*4+2]=a()*Math.PI*2,s[i*4+3]=a()}let c=new xe().copy(Pr());return c.instanceCount=e,c.setAttribute(`aOffset`,new ve(o,2)),c.setAttribute(`aParams`,new ve(s,4)),c.boundingSphere=new je(new d,n+1),c}function Ir({meadow:e,count:t,rMin:n,rMax:r,bias:i,fade:a,seed:o}){let s=(0,B.useMemo)(()=>({...e,uFade:{value:new h(...a)}}),[e,a]),c=(0,B.useMemo)(()=>Fr(t,n,r,i,o),[t,n,r,i,o]);return(0,B.useEffect)(()=>()=>c.dispose(),[c]),(0,W.jsx)(`mesh`,{geometry:c,material:(0,B.useMemo)(()=>{let e=new z({side:2});return e.onBeforeCompile=e=>{Object.assign(e.uniforms,s),e.vertexShader=e.vertexShader.replace(`#include <common>`,`
          #include <common>
          attribute vec2 aOffset;
          attribute vec4 aParams;
          uniform float uTime;
          uniform vec2 uWindDir;
          uniform vec4 uFade;
          uniform float uSnow;
          varying vec3 vGrass;
          ${K}
          ${tr}
          `).replace(`#include <beginnormal_vertex>`,`
          float h = aParams.x;
          float w = aParams.y;
          float yaw = aParams.z;
          float rnd = aParams.w;
          float r = length(aOffset);
          // Grow in / shrink away at this ring's edges (layers cross-fade; the last one
          // melts into the ground), and sink under snow.
          h *= smoothstep(uFade.x, uFade.y, r) * (1.0 - smoothstep(uFade.z, uFade.w, r)) * (1.0 - 0.95 * uSnow);
          // Trodden down where you stand: pressed low and splayed outward around the feet.
          float trod = 1.0 - smoothstep(0.2, 0.6, r);
          h *= 1.0 - 0.72 * trod;
          vec2 face = vec2(cos(yaw), sin(yaw));          // the blade's flat side faces this way
          vec2 side = vec2(-face.y, face.x);
          // Wind: gusts from a noise field travelling downwind, plus a flutter.
          float gust = meadowGust(aOffset, uTime, uWindDir);
          float bend = 0.18 + 0.55 * gust * gust + 0.06 * sin(uTime * 3.1 + rnd * 40.0);
          float t = position.y;
          // Curved blade: lean grows with height squared (natural droop + wind).
          vec2 lean = (uWindDir * bend + face * (0.12 + 0.2 * rnd) + aOffset / max(r, 0.01) * 1.4 * trod) * t * t * h;
          float y = t * h * (1.0 - 0.35 * bend * t * t);
          vec3 bladePos = vec3(aOffset.x + side.x * position.x * w + lean.x, y, aOffset.y + side.y * position.x * w + lean.y);
          // Soft, rounded normals: the face normal tilted toward the sky.
          vec3 objectNormal = normalize(vec3(face.x, 0.9 + 0.6 * t, face.y));
          // Colour: dark base → light tip, patchy, per-blade variety.
          float patchy = meadowPatch(aOffset);
          vGrass = vec3(t, patchy, rnd);
          `).replace(`#include <begin_vertex>`,`vec3 transformed = bladePos;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uSeason;\nuniform float uSnow;\nvarying vec3 vGrass;\n${K}\n${tr}`).replace(`#include <color_fragment>`,`
          #include <color_fragment>
          diffuseColor.rgb = meadowColor(vGrass.x, vGrass.y, vGrass.z, uSeason, uSnow);
          `)},e},[s]),frustumCulled:!1,receiveShadow:!0})}function Lr({meadow:e}){let t=b(e=>e.surfaceLocation),n=Cr(),r=(0,B.useMemo)(()=>[-1,0,n.grassRadius*.75,n.grassRadius],[n.grassRadius]),i=(0,B.useMemo)(()=>[n.grassRadius*.7,n.grassRadius*.95,n.grassFarRadius*.6,n.grassFarRadius],[n.grassRadius,n.grassFarRadius]);if(!t)return null;let a=Vn(t.lat,t.lon);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Ir,{meadow:e,count:n.grassBlades,rMin:.02,rMax:n.grassRadius,bias:1.7,fade:r,seed:a^24301}),(0,W.jsx)(Ir,{meadow:e,count:n.grassFarBlades,rMin:n.grassRadius*.7,rMax:n.grassFarRadius,bias:1.5,fade:i,seed:a^4004})]})}var Rr=2400;function zr(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#eef4f8`,t.fillRect(0,0,256,256);let n=[`#dfe9f1`,`#e6eef5`,`#d6e3ee`,`#f4f8fb`];for(let e=0;e<240;e++){t.strokeStyle=n[Math.random()*n.length|0],t.globalAlpha=.25+Math.random()*.35,t.lineWidth=1+Math.random()*2.5;let e=Math.random()*256,r=Math.random()*256,i=14+Math.random()*30,a=-.3+(Math.random()-.5)*.5;t.beginPath(),t.moveTo(e,r),t.lineTo(e+Math.cos(a)*i,r+Math.sin(a)*i),t.stroke()}let r=new He(e);return r.colorSpace=s,r.wrapS=r.wrapT=oe,r.repeat.set(Rr/4,Rr/4),r.anisotropy=8,r}var Br=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Vr(){let e=b(e=>e.surfaceLocation)?.lat,t=(0,B.useRef)(null),n=(0,B.useMemo)(()=>new z({map:zr(),color:`#eef4f8`,transparent:!0,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),[]);return O(()=>{n.opacity=Br(e==null?0:Ze(e,M.monthFrac)),t.current&&(t.current.visible=n.opacity>.02)}),(0,W.jsx)(`mesh`,{ref:t,"rotation-x":-Math.PI/2,"position-y":.04,material:n,receiveShadow:!0,children:(0,W.jsx)(`planeGeometry`,{args:[2e3,2e3,1,1]})})}function Hr(){let e=nr();return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(ir,{meadow:e}),(0,W.jsx)(Vr,{}),(0,W.jsx)(Lr,{meadow:e}),(0,W.jsx)(Nr,{})]})}var Ur=1400;function Wr(e,t,n){let r=[0,0,0],i=[];for(let i=1;i<=t;i++){let a=e*(i/t)**2;for(let e=0;e<n;e++){let t=e/n*Math.PI*2;r.push(Math.cos(t)*a,0,Math.sin(t)*a)}}let a=(e,t)=>e===0?0:1+(e-1)*n+t%n;for(let e=0;e<n;e++)i.push(0,a(1,e+1),a(1,e));for(let e=1;e<t;e++)for(let t=0;t<n;t++)i.push(a(e,t),a(e,t+1),a(e+1,t),a(e,t+1),a(e+1,t+1),a(e+1,t));let o=new N;return o.setAttribute(`position`,new j(r,3)),o.setAttribute(`normal`,new j(Array(r.length).fill(0),3)),o.setIndex(i),o.boundingSphere=new je(new d,e),o}var Gr=`
  uniform vec2 uWind;
  float snowHeight(vec2 p) {
    vec2 q = vec2(dot(p, uWind), dot(p, vec2(-uWind.y, uWind.x)));
    float r = length(p);
    // Drifts: long low dunes along the wind.
    float drift = (vnoise(q * vec2(0.012, 0.05)) - 0.5) * 1.6;
    // Sastrugi: sharp crests (ridged noise), elongated with the wind.
    float s = 1.0 - abs(vnoise(q * vec2(0.22, 1.1) + 7.0) * 2.0 - 1.0);
    float sastrugi = s * s * s * 0.35 * (vnoise(q * 0.07 + 3.0) * 0.7 + 0.3);
    // Broad undulations far out.
    float swell = (vnoise(p * 0.004 + 11.0) - 0.5) * 6.0;
    float nearFlat = smoothstep(1.5, 12.0, r);      // level ground underfoot
    float farFade = 1.0 - smoothstep(250.0, 700.0, r); // detail melts into haze
    return (drift + sastrugi * farFade) * nearFlat + swell * smoothstep(60.0, 400.0, r);
  }
`;function Kr({baseY:e=0,relief:t=1,hull:n,opacity:r}){let i=(0,B.useMemo)(()=>({uWind:{value:new D(.8,.6).normalize()},uGlint:{value:0},uBase:{value:e},uRelief:{value:t},uHull:{value:n?n.clone():new D(0,0)}}),[e,t,n]),a=(0,B.useMemo)(()=>Wr(Ur,170,256),[]),o=(0,B.useMemo)(()=>{let e=new z({color:`#f4f8fb`,transparent:r!=null});return e.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nuniform float uBase;\nuniform float uRelief;\nvarying vec2 vXZ;\nvarying float vHeight;\n${K}\n${Gr}`).replace(`#include <beginnormal_vertex>`,`
          vec2 gp = position.xz;
          float e = 0.25 + length(gp) * 0.004;
          float h0 = snowHeight(gp) * uRelief;
          float hx = snowHeight(gp + vec2(e, 0.0)) * uRelief;
          float hz = snowHeight(gp + vec2(0.0, e)) * uRelief;
          vec3 objectNormal = normalize(vec3(h0 - hx, e, h0 - hz));
          vHeight = h0;
          vXZ = gp;
          `).replace(`#include <begin_vertex>`,`vec3 transformed = vec3(position.x, uBase + h0, position.z);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uGlint;\nuniform vec2 uHull;\nvarying vec2 vXZ;\nvarying float vHeight;\n${K}`).replace(`#include <color_fragment>`,`
          #include <color_fragment>
          // No snow inside a frozen-in boat.
          if (uHull.x > 0.0) { vec2 hp = vXZ / uHull; if (dot(hp, hp) < 1.0) discard; }
          float d = length(vXZ);
          // Fine grain up close; faint blue in the hollows (light scattered in snow).
          float grain = vnoise(vXZ * 3.1) * 0.6 + vnoise(vXZ * 11.0) * 0.4;
          diffuseColor.rgb *= mix(0.94, 1.03, mix(grain, 0.5, smoothstep(20.0, 90.0, d)));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.80, 0.88, 0.97), smoothstep(0.15, -0.5, vHeight) * 0.35);
          `).replace(`#include <lights_fragment_end>`,`
          #include <lights_fragment_end>
          // Shadowed snow is lit by the blue sky: tint the unlit share toward blue.
          float lit = clamp(dot(reflectedLight.directDiffuse, vec3(0.33)) * 1.5, 0.0, 1.0);
          reflectedLight.indirectDiffuse *= mix(vec3(0.82, 0.9, 1.08), vec3(1.0), lit);
          // Sparkle: scattered sunlit facets in the near field.
          // Tiny (~2 cm) glints, rarer and softer with distance.
          float tw = h21(floor(vXZ * 45.0));
          float spark = step(0.9992, tw) * uGlint * (1.0 - smoothstep(6.0, 30.0, length(vXZ)));
          reflectedLight.directDiffuse += vec3(spark * 2.5);
          `),r&&(e.fragmentShader=e.fragmentShader.replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
gl_FragColor.a *= uOpacity;`),e.uniforms.uOpacity=r,e.fragmentShader=`uniform float uOpacity;
`+e.fragmentShader)},e},[i,r]);return O(()=>{let e=M;if(!e.ready)return;let t=Math.min(1,Math.max(0,(e.sunAltDeg-1)/7));i.uGlint.value=t*t*(3-2*t)}),(0,W.jsx)(`mesh`,{geometry:a,material:o,receiveShadow:!0,frustumCulled:!1})}var qr=Math.tan(2.2*Math.PI/180);function Jr(e){let t=Hn(e),n=new ye(1,1,1,2,2,2),r=n.getAttribute(`position`),i=Array.from({length:6},()=>[t()*6,t()*6,t()*6,.08+t()*.12]),a=new d;for(let e=0;e<r.count;e++){a.fromBufferAttribute(r,e);let t=0;for(let[e,n,r,o]of i)t+=Math.sin(a.x*e+a.y*n+a.z*r)*o;a.multiplyScalar(1+t),a.x+a.y*.6+a.z>.9&&a.multiplyScalar(.85),r.setXYZ(e,a.x,a.y,a.z)}let o=n.toNonIndexed();return o.computeVertexNormals(),o.setAttribute(`color`,new I(new Float32Array(o.getAttribute(`position`).count*3).fill(1),3)),o}function Yr(e,t){let n=new z({vertexColors:!0,transparent:e!=null});return n.onBeforeCompile=e=>{t&&(e.uniforms.uCoverage=t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nvarying float vUp;\n${t?`attribute float aId;
uniform float uCoverage;`:``}`).replace(`#include <begin_vertex>`,`
        #include <begin_vertex>
        ${t?`// Floes beyond the current coverage collapse away.
transformed *= step(aId, uCoverage);`:``}
        vUp = normalize((instanceMatrix * vec4(objectNormal, 0.0)).xyz).y;
        `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vUp;`).replace(`#include <color_fragment>`,`
        #include <color_fragment>
        vec3 ice = vec3(0.50, 0.74, 0.84);
        vec3 snow = vec3(0.95, 0.97, 0.99);
        diffuseColor.rgb *= mix(ice, snow, smoothstep(0.35, 0.8, vUp));
        `)},n}var Xr=1.7;function Zr({fade:e}){let t=b(e=>e.surfaceLocation),n=(0,B.useMemo)(()=>{if(!t)return[];let n=Hn(Vn(t.lat,t.lon)^30298574),r=[0,1,2,3].map(e=>Jr(24235+e*977)),i=r.map(()=>[]),a=r.map(()=>[]),o=new Xe,s=new R,c=new F,l=(e,t,l,u,f)=>{let p=Math.hypot(e,t),m=Math.min(l*u,Math.max(.15,Xr+p*qr-.2));c.set((n()-.5)*f,n()*Math.PI*2,(n()-.5)*f),o.compose(new d(e,m*.3,t),s.setFromEuler(c),new d(l,m,l*(.7+n()*.6)));let h=Math.floor(n()*r.length);i[h].push(o.clone()),a[h].push(.9+n()*.1)},u=2+Math.floor(n()*2);for(let e=0;e<u;e++){let e=n()*Math.PI*2,t=25+n()*90,r=Math.cos(e)*t,i=Math.sin(e)*t,a=e+Math.PI/2+(n()-.5)*.9,o=60+n()*140;for(let e=-o;e<=o;e+=1.1+n()*1.8){let t=(n()-.5)*3,o=r+Math.cos(a)*e+Math.cos(a+Math.PI/2)*t,s=i+Math.sin(a)*e+Math.sin(a+Math.PI/2)*t;Math.hypot(o,s)<6||l(o,s,.7+n()*1.6,.5+n()*.7,1.2)}}for(let e=0;e<28;e++){let e=n()*Math.PI*2,t=4+n()*30;l(Math.cos(e)*t,Math.sin(e)*t,.2+n()*.45,.4+n()*.5,1.5)}for(let e=0;e<4;e++){let e=n()*Math.PI*2,t=450+n()*500;l(Math.cos(e)*t,Math.sin(e)*t,25+n()*45,.6,.1)}let f=Yr(e);return r.map((e,t)=>{let n=new ze(e,f,Math.max(1,i[t].length));return n.count=i[t].length,i[t].forEach((e,r)=>{n.setMatrixAt(r,e),n.setColorAt(r,new A().setScalar(a[t][r]))}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n})},[t?.lat,t?.lon,e!=null]);return O(()=>{if(e)for(let t of n)t.material.opacity=e.value,t.visible=e.value>.02}),(0,W.jsx)(W.Fragment,{children:n.map(e=>(0,W.jsx)(`primitive`,{object:e},e.uuid))})}function Qr({coverage:e}){let t=b(e=>e.surfaceLocation),n=(0,B.useMemo)(()=>{if(!t)return null;let n=Hn(Vn(t.lat,t.lon)^61710),r=new Le(1,1,1,11,1),i=r.getAttribute(`position`);for(let e=0;e<i.count;e++){let t=Math.atan2(i.getZ(e),i.getX(e)),n=1+.18*Math.sin(t*3+1.3)+.1*Math.sin(t*7);i.setXYZ(e,i.getX(e)*n,i.getY(e),i.getZ(e)*n)}let a=r.toNonIndexed();a.computeVertexNormals(),a.setAttribute(`color`,new I(new Float32Array(a.getAttribute(`position`).count*3).fill(1),3));let o=new Float32Array(420),s=new ze(a,Yr(void 0,e),420),c=new Xe,l=new R;for(let e=0;e<420;e++){let t=n()*Math.PI*2,r=3.2+240*n()**1.6,i=.5+n()*n()*7;l.setFromAxisAngle(new d(0,1,0),n()*Math.PI*2),c.compose(new d(Math.cos(t)*r,.04,Math.sin(t)*r),l,new d(i,.16+n()*.2,i*(.6+n()*.5))),s.setMatrixAt(e,c),s.setColorAt(e,new A().setScalar(.92+n()*.08)),o[e]=n()}return a.setAttribute(`aId`,new ve(o,1)),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.receiveShadow=!0,s.frustumCulled=!1,s},[t?.lat,t?.lon,e]);return O(()=>{n&&(n.visible=e.value>.01)}),n?(0,W.jsx)(`primitive`,{object:n}):null}function $r(){return(0,W.jsx)(Kr,{})}var ei=9.81,ti=[{len:2.3,amp:.55,dir:62},{len:1,amp:1,dir:0},{len:.81,amp:.8,dir:17},{len:.66,amp:.66,dir:-23},{len:.49,amp:.5,dir:38},{len:.39,amp:.41,dir:-44},{len:.29,amp:.32,dir:9},{len:.22,amp:.25,dir:-67},{len:.16,amp:.19,dir:73},{len:.11,amp:.14,dir:-12}];function ni(e,t){let n=.73*e,r=ei*n*n/(2*Math.PI),i=.021*e*e*.55,a=Math.sqrt(ti.reduce((e,t)=>e+t.amp*t.amp/2,0)),o=i/4/a;return{wind:e,windDir:t,hs:i,waves:ti.map((e,n)=>{let i=2*Math.PI/Math.max(1.5,r*e.len),a=t+e.dir*Math.PI/180,s=e.amp*o;return{dirX:Math.sin(a),dirZ:-Math.cos(a),k:i,omega:Math.sqrt(ei*i),amp:s,steep:Math.min(.85,.3+.05*n)/Math.max(1e-6,i*s*10),phase:n*1.7}})}}function ri(e,t){let n=e=>{let n=Math.imul(e^t,668265261);return n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,(n>>>0)/4294967296},r=Math.floor(e),i=e-r,a=i*i*(3-2*i);return n(r)+(n(r+1)-n(r))*a}function ii(e,t,n){let r=n.getTime()/864e5,i=Math.round(e*10)*73856093^Math.round(t*10)*19349663,a=.6*ri(r/2.5,i)+.4*ri(r/.7,i^81),o=(n.getTime()-le(n.getUTCFullYear(),0,1))/864e5,s=Math.cos((o-(e>=0?15:196))/365.25*2*Math.PI)*.5+.5,c=Math.min(1,Math.max(0,(Math.abs(e)-35)/25))*s;return ni(2.5+9*a+3*c,ri(r/4,i^119)*4*Math.PI)}function ai(e,t,n,r,i=1){let a=0;for(let o of e.waves)a+=o.amp*i*Math.sin(o.k*(o.dirX*t+o.dirZ*n)-o.omega*r+o.phase);return a}var oi=`
  uniform vec4 uWaveA[10]; // dir.x, dir.z, k, omega
  uniform vec4 uWaveB[10]; // amp, steep, phase, -
  // Gerstner displacement of ground point p at time t (waves scaled by s); returns
  // the offset and writes the surface normal and a crest (fold) measure.
  vec3 gerstner(vec2 p, float t, float s, out vec3 n, out float fold) {
    vec3 d = vec3(0.0);
    vec3 nn = vec3(0.0, 1.0, 0.0);
    float j = 1.0;
    for (int i = 0; i < 10; i++) {
      vec2 dir = uWaveA[i].xy;
      float k = uWaveA[i].z;
      float a = uWaveB[i].x * s;
      float q = uWaveB[i].y;
      float th = k * dot(dir, p) - uWaveA[i].w * t + uWaveB[i].z;
      float c = cos(th);
      float sn = sin(th);
      d.x += q * a * dir.x * c;
      d.z += q * a * dir.y * c;
      d.y += a * sn;
      float wa = k * a;
      nn.x -= dir.x * wa * c;
      nn.z -= dir.y * wa * c;
      nn.y -= q * wa * sn;
      j -= q * wa * sn;
    }
    n = normalize(nn);
    fold = j;
    return d;
  }
`,Y=4.2,si=1.36,ci=.36,li=.04,ui=e=>si/2*Math.max(0,1-Math.abs(e)**2.2)**.55,di=e=>ci+.3*Math.abs(e)**2.6,fi=e=>-.34*Math.max(0,1-Math.abs(e)**3)**.45+.08*Math.abs(e)**4,pi=new Xe,mi=e=>e.toFixed(4),hi=`
  bool insideHull(vec3 p) {
    float s = p.z / ${mi(Y/2)};
    if (abs(s) >= 1.0) return false;
    float hb = ${mi(si/2)} * pow(max(0.0, 1.0 - pow(abs(s), 2.2)), 0.55) * ${mi(1.04)};
    float gunwale = ${mi(ci)} + 0.3 * pow(abs(s), 2.6);
    return abs(p.x) < hb && p.y < gunwale;
  }
`,gi=260,_i=4500;function vi(e,t,n){let r=[],i=[];r.push(0,0,0);for(let i=1;i<=t;i++){let a=e*(i/t)**1.8;for(let e=0;e<n;e++){let t=e/n*Math.PI*2;r.push(Math.cos(t)*a,0,Math.sin(t)*a)}}let a=(e,t)=>e===0?0:1+(e-1)*n+t%n;for(let e=0;e<n;e++)i.push(0,a(1,e+1),a(1,e));for(let e=1;e<t;e++)for(let t=0;t<n;t++)i.push(a(e,t),a(e,t+1),a(e+1,t),a(e,t+1),a(e+1,t+1),a(e+1,t));let o=new N;return o.setAttribute(`position`,new j(r,3)),o.setIndex(i),o.boundingSphere=new je(new d,e+10),o}var yi=`
  #include <common>
  #include <fog_pars_vertex>
  ${oi}
  uniform float uT;
  uniform float uSwell;      // 0 still … 1 full swell (freezing damps it)
  uniform float uWaves;      // 0 on the flat far ring
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying float vFold;
  varying float vCrest;
  void main() {
    vec2 p = position.xz;
    // Fade the swell out toward the grid's edge so it meets the flat far ring.
    float s = uSwell * uWaves * (1.0 - smoothstep(${(gi*.55).toFixed(1)}, ${gi.toFixed(1)}, length(p)));
    vec3 n;
    float fold;
    vec3 d = gerstner(p, uT, s, n, fold);
    vec3 world = vec3(p.x + d.x, d.y, p.y + d.z);
    vWorld = world;
    vNormalW = n;
    vFold = fold;
    vCrest = d.y;
    vec4 mvPosition = viewMatrix * vec4(world, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,bi=`
  #include <common>
  #include <fog_pars_fragment>
  ${K}
  uniform float uT;
  uniform float uWind;       // 0 calm … 1 gale (ripples, foam)
  uniform vec2 uWindDir;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;    // key-light colour × intensity
  uniform vec3 uMoonDir;
  uniform float uMoon;       // moonlight on the water
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uGlow;        // glow colour around a low Sun
  uniform float uGlowStrength;
  uniform vec3 uAmbient;     // sky light falling on the sea
  uniform mat4 uBoatInv;     // world → the boat's frame (see boatHull)
  uniform float uHs;         // significant wave height (m)
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying float vFold;
  varying float vCrest;

  // Gradient noise (quintic fade) — smooth slopes with no lattice creases, unlike
  // value noise, whose finite-difference normals show the grid.
  vec2 gHash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
  }
  float gNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    return mix(mix(dot(gHash(i), f), dot(gHash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
               mix(dot(gHash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), dot(gHash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
  }
  // Fine wind ripples: three octaves drifting downwind (the smaller ones faster),
  // stretched across the wind, each turned so no two lattices line up; returns
  // their slope by finite differences.
  float rippleHeight(vec2 p, float t) {
    vec2 w = uWindDir;
    vec2 q = vec2(dot(p, w), dot(p, vec2(-w.y, w.x)) * 0.6);
    mat2 r1 = mat2(0.80, 0.60, -0.60, 0.80);
    mat2 r2 = mat2(0.28, 0.96, -0.96, 0.28);
    return gNoise(q * 1.1 - vec2(t * 0.9, 0.0)) * 0.5
         + gNoise(r1 * q * 2.7 + vec2(-t * 1.5, t * 0.3)) * 0.3
         + gNoise(r2 * q * 6.3 + vec2(-t * 2.3, -t * 0.7)) * 0.2;
  }
  vec2 ripples(vec2 p, float t) {
    float e = 0.04;
    float h = rippleHeight(p, t);
    return vec2(rippleHeight(p + vec2(e, 0.0), t) - h, rippleHeight(p + vec2(0.0, e), t) - h) / e * 0.16;
  }

  vec3 skyAt(vec3 r) {
    float e = max(r.y, 0.0);
    vec3 c = mix(uHorizon, uZenith, pow(e, 0.45));
    float sd = max(dot(r, uSunDir), 0.0);
    return c + uGlow * uGlowStrength * pow(sd, 6.0) * 0.6;
  }

  ${hi}

  void main() {
    // Keep the bilge dry: no water inside the hull, wherever the waves carry it.
    if (insideHull((uBoatInv * vec4(vWorld, 1.0)).xyz)) discard;

    vec3 V = normalize(cameraPosition - vWorld);
    float dist = length(cameraPosition - vWorld);
    // Ripples fade out with distance (before they alias into shimmer noise).
    float near = 1.0 - smoothstep(15.0, 140.0, dist);
    vec2 rg = ripples(vWorld.xz, uT) * (0.35 + 0.65 * uWind) * near;
    vec3 N = normalize(vNormalW + vec3(-rg.x, 0.0, -rg.y));
    // Seen from above, back faces of tilted facets would mirror the sea itself.
    if (dot(N, V) < 0.0) N = normalize(N + V * (0.01 - dot(N, V)));

    float cosT = clamp(dot(N, V), 0.0, 1.0);
    float fresnel = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
    vec3 R = reflect(-V, N);
    R.y = abs(R.y);
    vec3 reflection = skyAt(R);

    // The water body: deep blue-green, lit by the sky; light through backlit crests.
    vec3 deep = vec3(0.004, 0.022, 0.045);
    vec3 body = deep + uAmbient * vec3(0.012, 0.05, 0.075);
    float crest = clamp(vCrest / max(uHs * 0.5, 0.05), 0.0, 1.0);
    float back = pow(max(dot(V, -uSunDir), 0.0), 3.0);
    body += uSunColor * vec3(0.05, 0.22, 0.2) * back * crest * (0.4 + 0.6 * max(uSunDir.y, 0.0));

    vec3 color = mix(body, reflection, fresnel);

    // The glitter path: the Sun / Moon mirrored in the rippled facets.
    float sunSpec = pow(max(dot(R, uSunDir), 0.0), 1400.0) * 22.0 + pow(max(dot(R, uSunDir), 0.0), 90.0) * 0.1;
    color += uSunColor * sunSpec * fresnel * step(0.0, uSunDir.y);
    float moonSpec = pow(max(dot(R, uMoonDir), 0.0), 700.0) * 6.0;
    color += vec3(0.75, 0.8, 0.9) * uMoon * moonSpec * step(0.0, uMoonDir.y);

    // Whitecaps: foam where the surface folds at the crests, streaked downwind.
    float foamNoise = vnoise(vWorld.xz * 0.9 + uWindDir * uT * 0.3) * 0.6 + vnoise(vWorld.xz * 3.1) * 0.4;
    float foam = smoothstep(0.62, 0.25, vFold) * smoothstep(0.35, 0.75, foamNoise) * smoothstep(0.25, 0.7, uWind);
    vec3 lit = uAmbient * 0.9 + uSunColor * max(dot(N, uSunDir), 0.0) * 0.8;
    color = mix(color, lit * 0.95, foam * 0.85);

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;function xi(e,t){return new T({vertexShader:yi,fragmentShader:bi,uniforms:{...e,uWaves:{value:+!!t}},fog:!0})}function Si({uniforms:e}){let t=(0,B.useMemo)(()=>vi(gi,150,288),[]),n=(0,B.useMemo)(()=>{let e=new l(gi-.5,_i,96,2);return e.rotateX(-Math.PI/2),e},[]),r=(0,B.useMemo)(()=>xi(e,!0),[e]),i=(0,B.useMemo)(()=>xi(e,!1),[e]);return(0,B.useEffect)(()=>()=>{r.dispose(),i.dispose(),t.dispose(),n.dispose()},[r,i,t,n]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`mesh`,{geometry:t,material:r,frustumCulled:!1}),(0,W.jsx)(`mesh`,{geometry:n,material:i})]})}function Ci(){return(0,B.useMemo)(()=>({...C.clone(e.fog),uWaveA:{value:Array.from({length:10},()=>new h)},uWaveB:{value:Array.from({length:10},()=>new h)},uT:{value:0},uSwell:{value:1},uWind:{value:.4},uWindDir:{value:new D(0,-1)},uSunDir:{value:new d(0,1,0)},uSunColor:{value:new A},uMoonDir:{value:new d(0,1,0)},uMoon:{value:0},uZenith:{value:new A},uHorizon:{value:new A},uGlow:{value:new A},uGlowStrength:{value:0},uAmbient:{value:new A},uBoatInv:{value:pi},uHs:{value:.5}}),[])}function wi(e,t,n,r){let i=M;e.uT.value=n,e.uSwell.value=r,e.uWind.value=L.clamp((t.wind-2)/12,0,1)*r,e.uHs.value=t.hs,e.uWindDir.value.set(Math.sin(t.windDir),-Math.cos(t.windDir)),t.waves.forEach((t,n)=>{e.uWaveA.value[n].set(t.dirX,t.dirZ,t.k,t.omega),e.uWaveB.value[n].set(t.amp,t.steep,t.phase,0)}),i.ready&&(e.uSunDir.value.copy(i.sunDir),e.uSunColor.value.copy(i.sunLightColor).multiplyScalar(i.sunIntensity),e.uMoonDir.value.copy(i.moonDir),e.uMoon.value=i.moonGroundIntensity,e.uZenith.value.copy(i.zenith),e.uHorizon.value.copy(i.horizon),e.uGlow.value.copy(i.glow),e.uGlowStrength.value=i.glowStrength,e.uAmbient.value.copy(i.hemiSky).multiplyScalar(i.hemiIntensity+i.ambientIntensity))}var Ti=fi(0)+.1,Ei=.025;function Di(e,t,n,r){let i=t*Math.PI/2,a=ui(e),o=fi(e),s=di(e),c=a*Math.sin(i)**.62*(1+li*t*t),l=o+(s-o)*(1-Math.cos(i)**.7);return r.set(n*c,l,e*Y/2)}function Oi(e=48,t=16){let n=[],r=[],i=[],a=new d;for(let o of[-1,1]){let s=n.length/3;for(let i=0;i<=e;i++){let s=-1+2*i/e;for(let e=0;e<=t;e++)Di(s,e/t,o,a),n.push(a.x,a.y,a.z),r.push((s+1)*2.1,e/t)}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let r=s+n*(t+1)+e,a=r+t+1;o>0?i.push(r,r+1,a,a,r+1,a+1):i.push(r,a,r+1,a,a+1,r+1)}}let o=new N;return o.setAttribute(`position`,new j(n,3)),o.setAttribute(`uv`,new j(r,2)),o.setIndex(i),o.computeVertexNormals(),o}function ki(e,t,n=6){return new x(new De(e),e.length*3,t,n,!1)}function Ai(e,t=0){let n=[];for(let r=0;r<=40;r++){let i=Di(-.985+1.97*r/40,1,e,new d);i.x-=e*t,n.push(i)}return n}function ji(e){let t=[];for(let n=0;n<=16;n++){let r=n<8?-1:1,i=n<8?1-n/8:(n-8)/8,a=Di(e,Math.max(i,.02)*.97,r,new d);a.x*=.95,a.y+=.02,t.push(a)}return t}function Mi(e){let t=document.createElement(`canvas`);t.width=512,t.height=256;let n=t.getContext(`2d`);for(let t=0;t<8;t++){let r=t/8*256,i=e?0:t%2*8;if(n.fillStyle=e?`#f1ede4`:`rgb(${132+i}, ${100+i}, ${68+i/2})`,n.fillRect(0,r,512,256/8),!e)for(let e=0;e<40;e++){n.strokeStyle=`rgba(70, 40, 18, ${.08+Math.random()*.12})`,n.lineWidth=1,n.beginPath();let t=r+256/8*Math.random();n.moveTo(0,t);for(let r=0;r<=512;r+=32)n.lineTo(r,t+Math.sin(r*.02+e)*2);n.stroke()}n.fillStyle=e?`rgba(60,60,60,0.35)`:`rgba(40,22,10,0.7)`,n.fillRect(0,r,512,2),n.fillStyle=`rgba(255,255,255,0.12)`,n.fillRect(0,r+2,512,1)}n.fillStyle=e?`rgba(80,80,80,0.4)`:`rgba(30,20,10,0.8)`;for(let e=1;e<8;e++)for(let t=8;t<512;t+=24)n.fillRect(t,e/8*256+3,2,2);let r=new He(t);return r.colorSpace=s,r.wrapS=r.wrapT=oe,r.anisotropy=8,r}var Ni=new D(ui(0)*.93,Y/2*.86);function Pi({sea:e,time:t,swell:n}){let r=(0,B.useRef)(null),i=(0,B.useRef)({heave:0,pitch:0,roll:0,vHeave:0,vPitch:0,vRoll:0}),a=(0,B.useMemo)(()=>({shell:Oi(),ribs:[-.7,-.5,-.3,-.1,.1,.3,.5,.7].map(e=>ki(ji(e),.018,4)),rails:[-1,1].map(e=>ki(Ai(e,.01),.035,6)),stems:[-1,1].map(e=>ki(Array.from({length:10},(t,n)=>{let r=n/9,i=e*.995;return new d(0,fi(i)+(di(i)+.1-fi(i))*r,e*Y/2+e*.03*r)}),.04,6))}),[]),o=(0,B.useMemo)(()=>{let e=new z({map:Mi(!0),side:0});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vY;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vY = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vY;`).replace(`#include <color_fragment>`,`
          #include <color_fragment>
          vec3 paint = vY < 0.02 ? vec3(0.45, 0.11, 0.08) : vec3(1.0);
          paint = mix(paint, vec3(0.12, 0.32, 0.36), step(0.3, vY));
          diffuseColor.rgb *= paint;
          `)},{outside:e,inside:new z({map:Mi(!1),side:1}),wood:new z({color:`#7a4e2a`}),darkWood:new z({color:`#4d321c`}),oarWood:new z({color:`#b98a55`})}},[]);(0,B.useEffect)(()=>()=>{Object.values(o).forEach(e=>e.dispose()),a.shell.dispose(),[...a.ribs,...a.rails,...a.stems].forEach(e=>e.dispose())},[o,a]),O((a,o)=>{let s=r.current;if(!s)return;let c=e(),l=t(),u=n(),d=Y*.42,f=si*.45,p=ai(c,0,0,l,u),m=ai(c,0,-d,l,u),h=ai(c,0,d,l,u),g=ai(c,-f,0,l,u),_=ai(c,f,0,l,u),v=(p*2+m+h+g+_)/6,y=Math.atan2(m-h,2*d)*.8,b=Math.atan2(g-_,2*f)*.45,x=i.current,S=Math.min(o,.05),C=(e,t,n,r,i)=>{let a=t+(r*r*(n-e)-2*i*r*t)*S;return[e+a*S,a]};[x.heave,x.vHeave]=C(x.heave,x.vHeave,v,3.2,.7),[x.pitch,x.vPitch]=C(x.pitch,x.vPitch,y,2.6,.6),[x.roll,x.vRoll]=C(x.roll,x.vRoll,b,2.2,.35),s.position.y=x.heave,s.rotation.set(x.pitch,0,x.roll),s.updateWorldMatrix(!0,!1),pi.copy(s.matrixWorld).invert(),M.eyeOffset.set(0,x.heave+Ti+Ei/2,0)}),(0,B.useEffect)(()=>()=>{M.eyeOffset.set(0,0,0)},[]);let s=e=>{let t=ui(e)*1.82;return(0,W.jsx)(`mesh`,{position:[0,.02,e*Y/2],material:o.wood,castShadow:!0,receiveShadow:!0,children:(0,W.jsx)(`boxGeometry`,{args:[t,.045,.26]})})};return(0,W.jsxs)(`group`,{ref:r,children:[(0,W.jsx)(`mesh`,{geometry:a.shell,material:o.outside,castShadow:!0,receiveShadow:!0}),(0,W.jsx)(`mesh`,{geometry:a.shell,material:o.inside,receiveShadow:!0}),a.ribs.map((e,t)=>(0,W.jsx)(`mesh`,{geometry:e,material:o.darkWood,receiveShadow:!0},t)),a.rails.map((e,t)=>(0,W.jsx)(`mesh`,{geometry:e,material:o.darkWood,castShadow:!0},t)),a.stems.map((e,t)=>(0,W.jsx)(`mesh`,{geometry:e,material:o.darkWood,castShadow:!0},t)),s(-.42),s(.36),[-.22,0,.22].map(e=>(0,W.jsx)(`mesh`,{position:[e,Ti,0],material:o.wood,receiveShadow:!0,children:(0,W.jsx)(`boxGeometry`,{args:[.17,Ei,Y*.52]})},e)),[-1,1].map(e=>(0,W.jsxs)(`group`,{children:[(0,W.jsx)(`mesh`,{position:[e*ui(-.42)*.98,di(-.42)+.06,-.42*Y/2],material:o.darkWood,children:(0,W.jsx)(`cylinderGeometry`,{args:[.015,.015,.12,6]})}),(0,W.jsxs)(`group`,{position:[e*.42,.09,.1],rotation:[0,e*.04,0],children:[(0,W.jsx)(`mesh`,{rotation:[Math.PI/2,0,0],material:o.oarWood,castShadow:!0,children:(0,W.jsx)(`cylinderGeometry`,{args:[.022,.022,2.3,8]})}),(0,W.jsx)(`mesh`,{position:[0,0,1.22],material:o.oarWood,castShadow:!0,children:(0,W.jsx)(`boxGeometry`,{args:[.13,.014,.55]})})]})]},e))]})}var Fi=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function Ii(){let e=b(e=>e.surfaceLocation),t=e?.lat,n=e?.lon;return(0,B.useMemo)(()=>()=>t!=null&&n!=null?r(t,n,M.dayOfYear):0,[t,n])}function Li(){let e=b(e=>e.surfaceLocation),t=b(e=>e.speed),n=b(e=>e.playing),r=Ii(),i=Ci(),a=(0,B.useMemo)(()=>({value:0}),[]),o=(0,B.useMemo)(()=>({value:0}),[]),s=(0,B.useMemo)(()=>({value:0}),[]),c=(0,B.useRef)(0),l=(0,B.useRef)(ni(6,0)),u=(0,B.useRef)(1),d=(0,B.useMemo)(()=>({sea:()=>l.current,time:()=>c.current,swell:()=>u.current}),[]);return O((d,f)=>{c.current+=Math.min(f,.05)*Ve(t,n),e&&(l.current=ii(e.lat,e.lon,S.skyDate()));let p=r();u.current=1-Fi(p/.55),wi(i,l.current,c.current,u.current),o.value=Fi((p-.55)/.35),a.value=Fi(p/.5)*(1-o.value),s.value=Fi((p-.7)/.25)}),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Si,{uniforms:i}),(0,W.jsx)(Qr,{coverage:a}),(0,W.jsx)(Kr,{baseY:.3,relief:.22,hull:Ni,opacity:o}),(0,W.jsx)(Zr,{fade:s}),(0,W.jsx)(Pi,{sea:d.sea,time:d.time,swell:d.swell})]})}function Ri(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new N,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=zi(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=zi(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function zi(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new I(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Bi=new d(0,1,0),X=(e,t,n)=>new d(e,t,n);function Z(e,t,n,r=1){let i=t.clone().sub(e),a=i.length(),o=new Fe(n.map(([e,t])=>new D(t,e*a)),18);return o.scale(1,1,r),o.applyQuaternion(new R().setFromUnitVectors(Bi,i.normalize())),o.translate(e.x,e.y,e.z),o}function Vi(e,t,r=new R){let i=new n(1,16,12);return i.scale(t.x,t.y,t.z),i.applyQuaternion(r),i.translate(e.x,e.y,e.z),i}function Hi(e,t,n=new R){let r=new ye(t.x,t.y,t.z);return r.applyQuaternion(n),r.translate(e.x,e.y,e.z),r}function Ui(){let e=[],t=[],n=[],r=[],i=[];t.push(Z(X(0,.8,0),X(0,1.07,0),[[0,0],[.02,.12],[.25,.165],[.55,.178],[.85,.17],[1,.165],[1,0]],.7)),e.push(Z(X(0,.98,0),X(0,1.57,0),[[0,0],[0,.19],[.1,.186],[.25,.176],[.5,.185],[.72,.19],[.84,.178],[.93,.125],[1,.07],[1,0]],.68));for(let a of[-1,1]){t.push(Z(X(a*.118,.07,0),X(a*.093,1,0),[[0,0],[0,.056],[.1,.053],[.3,.059],[.48,.057],[.7,.076],[.9,.088],[1,.09],[1,0]]));let o=new R().setFromAxisAngle(Bi,-a*.14),s=X(a*.12,0,-.045);n.push(Vi(s.clone().add(X(0,.05,.02)),X(.052,.052,.12),o)),n.push(Vi(s.clone().add((e=>X(0,0,-e).applyQuaternion(o))(.07)).add(X(0,.035,0)),X(.05,.036,.075),o)),n.push(Z(X(a*.119,.04,0),X(a*.118,.12,0),[[0,0],[0,.055],[1,.052],[1,0]])),r.push(Hi(s.clone().add(X(0,.012,0)),X(.106,.024,.285),o));let c=X(a*.178,1.46,0),l=X(a*.232,1.14,.018),u=X(a*.243,.885,-.03);e.push(Vi(c.clone().add(X(a*.012,.005,0)),X(.066,.068,.062))),e.push(Z(c,l,[[0,0],[0,.06],[.45,.054],[1,.047],[1,0]])),e.push(Vi(l,X(.047,.047,.047))),e.push(Z(l,u,[[0,0],[0,.046],[.4,.044],[.88,.037],[1,.039],[1,0]]));let d=new R().setFromUnitVectors(X(0,-1,0),u.clone().sub(l).normalize()),f=(e,t,n)=>X(a*e,t,n).applyQuaternion(d).add(u),p=new R().setFromAxisAngle(X(0,0,1),-a*.18).premultiply(d);i.push(Z(f(0,.02,0),f(0,-.03,0),[[0,0],[0,.03],[1,.029],[1,0]])),i.push(Vi(f(0,-.06,-.004),X(.019,.052,.043),d)),i.push(Vi(f(-.006,-.128,-.008),X(.015,.047,.039),p)),i.push(Z(f(-.012,-.03,-.034),f(-.018,-.085,-.05),[[0,0],[0,.012],[.8,.011],[1,.006],[1,0]]))}let a=e=>{let t=Ri(e);for(let t of e)t.dispose();return t};return{jacket:a(e),trousers:a(t),shoes:a(n),soles:a(r),hands:a(i)}}var Wi={jacket:[`#56623f`,`#b04034`],trousers:[`#56749c`,`#56606f`],shoes:[`#5b3c27`,`#5a4636`],hands:[`#c4957a`,`#4d5868`]};function Gi(e,t,n){return e===`ice`?1:e===`sea`?r(t,n,M.dayOfYear):Ze(t,M.monthFrac)}function Ki(){let e=b(e=>e.layers.body),t=b(e=>e.surfaceTerrain),n=b(e=>e.surfaceLocation),r=(0,B.useRef)(null),i=(0,B.useRef)(null),o=(0,B.useMemo)(()=>ht(0),[]),s=(0,B.useMemo)(Ui,[]),c=(0,B.useMemo)(()=>({jacket:new a({color:Wi.jacket[0],roughness:.82,side:2}),trousers:new a({color:Wi.trousers[0],roughness:.9,side:2}),shoes:new a({color:Wi.shoes[0],roughness:.55,side:2}),soles:new a({color:`#2b2622`,roughness:.95,side:2}),hands:new a({color:Wi.hands[0],roughness:.62,side:2})}),[]),l=(0,B.useMemo)(()=>Object.fromEntries(Object.entries(Wi).map(([e,[t,n]])=>[e,[new A(t),new A(n)]])),[]);return(0,B.useEffect)(()=>()=>{for(let e of Object.values(s))e.dispose();for(let e of Object.values(c))e.dispose()},[s,c]),O(()=>{let e=r.current;if(!e||!i.current)return;let a=-M.facingAzDeg*_;e.position.set(Math.sin(a)*st,0,Math.cos(a)*st).add(M.eyeOffset),e.rotation.set(0,a,0),i.current.rotation.x=-ht(M.facingAltDeg*_,o).lean;let s=n?L.smoothstep(Gi(t,n.lat,n.lon),.15,.6):0;for(let e of Object.keys(Wi))c[e].color.lerpColors(l[e][0],l[e][1],s)}),e?(0,W.jsxs)(`group`,{ref:r,children:[(0,W.jsx)(`mesh`,{geometry:s.trousers,material:c.trousers,castShadow:!0}),(0,W.jsx)(`mesh`,{geometry:s.shoes,material:c.shoes,castShadow:!0}),(0,W.jsx)(`mesh`,{geometry:s.soles,material:c.soles,castShadow:!0}),(0,W.jsx)(`group`,{ref:i,"position-y":1,children:(0,W.jsxs)(`group`,{"position-y":-1,children:[(0,W.jsx)(`mesh`,{geometry:s.jacket,material:c.jacket,castShadow:!0}),(0,W.jsx)(`mesh`,{geometry:s.hands,material:c.hands,castShadow:!0})]})})]}):null}var qi=[{key:`compass.n`,a:0,cls:`fill-rose-300`},{key:`compass.e`,a:90,cls:`fill-slate-200`},{key:`compass.s`,a:180,cls:`fill-slate-200`},{key:`compass.w`,a:270,cls:`fill-slate-200`}];function Ji(){let{t:e}=y(),t=(0,B.useRef)(null),n=(0,B.useRef)(null),r=(0,B.useRef)(null);return(0,B.useEffect)(()=>{let e=0,i=()=>{let a=M,o=a.facingAzDeg,s=a.facingAltDeg;if(t.current&&t.current.setAttribute(`transform`,`rotate(${-o})`),r.current){let e=Math.round(s);r.current.textContent=be(`${Math.round(o)}° · ${e>=0?`+`:`−`}${Math.abs(e)}°`)}if(n.current){let e=a.sunAltDeg>-1;if(n.current.style.opacity=e?`1`:`0`,e){let e=(a.sunAzDeg-o)*Math.PI/180;n.current.setAttribute(`cx`,(Math.sin(e)*34).toFixed(1)),n.current.setAttribute(`cy`,(-Math.cos(e)*34).toFixed(1))}}e=requestAnimationFrame(i)};return e=requestAnimationFrame(i),()=>cancelAnimationFrame(e)},[]),(0,W.jsxs)(`div`,{className:`glass-panel pointer-events-none flex h-full w-full flex-col items-center justify-center rounded-xl p-2`,children:[(0,W.jsxs)(`svg`,{viewBox:`-50 -50 100 100`,width:70,height:70,className:`overflow-visible`,children:[(0,W.jsx)(`circle`,{r:`44`,className:`fill-slate-900/40 stroke-white/15`,strokeWidth:1.5}),(0,W.jsx)(`polygon`,{points:`0,-44 -5,-52 5,-52`,className:`fill-sky-300`}),(0,W.jsxs)(`g`,{ref:t,children:[Array.from({length:12},(e,t)=>{let n=t*30*Math.PI/180,r=t%3==0?34:38;return(0,W.jsx)(`line`,{x1:Math.sin(n)*44,y1:-Math.cos(n)*44,x2:Math.sin(n)*r,y2:-Math.cos(n)*r,className:`stroke-white/30`,strokeWidth:1},t)}),qi.map(t=>{let n=t.a*Math.PI/180;return(0,W.jsx)(`text`,{x:Math.sin(n)*26,y:-Math.cos(n)*26+3.5,textAnchor:`middle`,className:`${t.cls} text-[10px] font-bold`,style:{fontSize:11},children:e(t.key)},t.key)})]}),(0,W.jsx)(`circle`,{ref:n,r:`3.5`,cx:`0`,cy:`-34`,className:`fill-amber-300`})]}),(0,W.jsx)(`span`,{ref:r,className:`mt-0.5 font-mono text-[10px] text-slate-300 tabular-nums`})]})}var Q=104,Yi=92,$=null,Xi=!1;function Zi(){if($||Xi)return;Xi=!0;let e=new Image;e.onload=()=>{let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n&&(n.drawImage(e,0,0),$=n.getImageData(0,0,e.width,e.height)),Xi=!1},e.onerror=()=>{window.setTimeout(()=>{Xi=!1},2e3)},e.src=ce(`textures/earth_day_2k.jpg`)}function Qi(e,t){if(!$)return[38,66,104];let n=$.width,r=$.height,i=Math.floor((t+180)/360*n)%n;i<0&&(i+=n);let a=(Math.min(r-1,Math.max(0,Math.floor((90-e)/180*r)))*n+i)*4;return[$.data[a],$.data[a+1],$.data[a+2]]}function $i(){let e=b(e=>e.surfaceLocation),t=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(!e)return;Zi();let n=t.current;if(!n)return;let r=n.getContext(`2d`);if(!r)return;n.width=Q,n.height=Q;let i=Math.PI/180,a=e.lon*i,o=e.lat*i,s=g({lat:e.lat,lon:e.lon}),c={x:-Math.sin(a),y:Math.cos(a),z:0},l={x:-Math.sin(o)*Math.cos(a),y:-Math.sin(o)*Math.sin(a),z:Math.cos(o)},u=Q/2-3,d=Q*Q,f=new Float32Array(d),m=new Float32Array(d),h=new Float32Array(d),_=new Float32Array(d),v=new Float32Array(d),y=new Float32Array(d),b=new Uint8Array(d),x=!1,C=!1,w=()=>{for(let e=0;e<Q;e++)for(let t=0;t<Q;t++){let n=e*Q+t,r=(t-Q/2)/u,i=-(e-Q/2)/u,a=r*r+i*i;if(a>1){b[n]=0;continue}b[n]=1;let o=Math.sqrt(1-a),d=r*c.x+i*l.x+o*s.x,p=r*c.y+i*l.y+o*s.y,g=r*c.z+i*l.z+o*s.z;f[n]=d,m[n]=p,h[n]=g;let x=Be({x:d,y:p,z:g}),S=Qi(x.lat,x.lon),C=.55+.45*o;_[n]=S[0]*C,v[n]=S[1]*C,y[n]=S[2]*C}x=!0,C=$!=null},T=r.createImageData(Q,Q),E=T.data,D=()=>{$||Zi(),(!x||!C&&$)&&w();let e=g(p(S.skyDate()));for(let t=0;t<d;t++){let n=t*4;if(!b[t]){E[n+3]=0;continue}f[t]*e.x+m[t]*e.y+h[t]*e.z>-.015?(E[n]=_[t],E[n+1]=v[t],E[n+2]=y[t]):(E[n]=_[t]*.32,E[n+1]=v[t]*.35,E[n+2]=y[t]*.42+9),E[n+3]=255}r.putImageData(T,0,0),r.beginPath(),r.arc(Q/2,Q/2,3.5,0,Math.PI*2),r.fillStyle=`#ff5a5a`,r.fill(),r.lineWidth=1.5,r.strokeStyle=`rgba(255,255,255,0.9)`,r.stroke()},ee=0,te=()=>{D(),ee=requestAnimationFrame(te)};return ee=requestAnimationFrame(te),()=>cancelAnimationFrame(ee)},[e]),(0,W.jsx)(`div`,{className:`glass-panel pointer-events-none flex h-full w-full items-center justify-center rounded-xl p-1.5`,children:(0,W.jsx)(`canvas`,{ref:t,width:Q,height:Q,style:{width:Yi,height:Yi},className:`rounded-full`})})}var ea=`h-[104px] w-[104px]`,ta=e=>Re(e,1,`°`);function na(){let{t:e}=y(),t=b(e=>e.exitSurface),n=b(e=>e.surfaceLocation),r=b(e=>e.topInset),i=b(e=>e.bandInset),a=Pe(),o=b(e=>e.surfaceFollow),s=b(e=>e.setSurfaceFollow),l=b(e=>e.layers.skyPath),u=b(e=>e.toggleLayer),d=b(e=>e.surfaceUseSensors),p=b(e=>e.setSurfaceUseSensors),[m,h]=(0,B.useState)(null),g=b(e=>e.surfaceZoom),_=b(e=>e.setSurfaceZoom),v=async()=>{if(d){Pt(),p(!1);return}await Nt()?(p(!0),s(!1),h(null)):(p(!1),h(e(`surface.sensorDenied`)),window.setTimeout(()=>h(null),3e3))},x=()=>Ft(M.sunAzDeg*Math.PI/180);(0,B.useEffect)(()=>{d||Pt()},[d]),(0,B.useEffect)(()=>()=>Pt(),[]);let S=(0,B.useRef)(null),C=(0,B.useRef)(null),w=(0,B.useRef)(null);(0,B.useEffect)(()=>{let e=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),(0,B.useEffect)(()=>{let t=0,n=()=>{let r=M;r.ready&&(S.current&&(S.current.textContent=`${ta(r.sunAltDeg)} · ${We(r.sunAzDeg)} ${e(`compass.${Me(r.sunAzDeg)}`)}`),C.current&&(C.current.textContent=e(`twilight.${f(r.sunAltDeg)}`)),w.current&&(w.current.textContent=`${ta(r.moonAltDeg)} · ${We(r.moonAzDeg)} ${e(`compass.${Me(r.moonAzDeg)}`)}`)),t=requestAnimationFrame(n)};return t=requestAnimationFrame(n),()=>cancelAnimationFrame(t)},[e]);let T=a?`calc(${i}px + 1rem)`:`6.5rem`,E=e=>`pointer-events-auto flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs transition-colors ${e?`bg-sky-500/25 text-sky-100`:`text-slate-300 hover:bg-white/10`}`;return(0,W.jsxs)(`div`,{className:`pointer-events-none absolute inset-0 z-20`,children:[(0,W.jsxs)(`div`,{className:`absolute start-4 flex max-w-[calc(100vw-2rem)] flex-col gap-2`,style:{top:`calc(${r}px + 1rem)`},children:[(0,W.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,W.jsxs)(`button`,{type:`button`,onClick:t,"aria-label":e(`surface.exit`),className:`glass-panel pointer-events-auto flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-sky-100 transition-colors hover:text-sky-50 active:bg-white/10`,children:[(0,W.jsx)(qe,{size:16}),e(`surface.exit`)]}),n&&(0,W.jsxs)(`div`,{className:`glass-panel flex min-w-0 flex-col rounded-lg px-3 py-1.5`,children:[(0,W.jsx)(`span`,{className:`text-sm break-words text-slate-200`,children:n.name}),(0,W.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,W.jsx)(`span`,{dir:`ltr`,className:`font-mono text-[11px] text-slate-400 tabular-nums`,children:_e(n.lat,n.lon)}),(0,W.jsx)(Ue,{text:_e(n.lat,n.lon)})]})]})]}),(0,W.jsxs)(`div`,{className:`glass-panel flex flex-col gap-1.5 self-start rounded-xl px-3 py-2.5 text-slate-200`,children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs tabular-nums`,children:[(0,W.jsx)(ae,{size:14,className:`text-amber-300`}),(0,W.jsx)(`span`,{ref:S,className:`text-sky-50`}),(0,W.jsx)(`span`,{ref:C,className:`text-slate-400`})]}),(0,W.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs tabular-nums`,children:[(0,W.jsx)(et,{size:14,className:`text-slate-300`}),(0,W.jsx)(`span`,{ref:w,className:`text-sky-50`})]}),(0,W.jsxs)(`div`,{className:`mt-0.5 flex flex-wrap items-center gap-1.5`,children:[(0,W.jsxs)(`button`,{type:`button`,onClick:()=>s(!o),className:E(o),children:[(0,W.jsx)(c,{size:14}),e(`surface.follow`)]}),(0,W.jsxs)(`button`,{type:`button`,onClick:()=>u(`skyPath`),className:E(l),children:[(0,W.jsx)(nt,{size:14}),e(`surface.orbitPath`)]}),(0,W.jsxs)(`button`,{type:`button`,onClick:v,className:E(d),children:[(0,W.jsx)(tt,{size:14}),e(`surface.sensors`)]}),d&&(0,W.jsxs)(`button`,{type:`button`,onClick:x,className:E(!1),children:[(0,W.jsx)($e,{size:14}),e(`surface.alignSun`)]})]}),m&&(0,W.jsx)(`div`,{className:`text-[11px] text-rose-300`,children:m})]})]}),(0,W.jsx)(`div`,{className:`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`,children:(0,W.jsx)(`div`,{className:`h-1.5 w-1.5 rounded-full bg-white/70 ring-1 ring-black/40`})}),(0,W.jsx)(`div`,{className:`absolute end-4 ${ea}`,style:{bottom:T},children:(0,W.jsx)(Ji,{})}),Math.abs(g-1)>.02&&(0,W.jsxs)(`button`,{type:`button`,onClick:()=>_(1),title:e(`surface.resetZoom`),"aria-label":e(`surface.resetZoom`),className:`glass-panel pointer-events-auto absolute end-4 flex items-center gap-1 px-2.5 py-1 text-xs text-sky-50 tabular-nums transition-colors hover:bg-white/10`,style:{bottom:`calc(${T} + 104px + 0.5rem)`},children:[g>1?(0,W.jsx)(rt,{size:14}):(0,W.jsx)(it,{size:14}),(0,W.jsxs)(`span`,{dir:`ltr`,children:[g.toFixed(1),`×`]})]}),(0,W.jsx)(`div`,{className:`absolute start-4 ${ea}`,style:{bottom:T},children:(0,W.jsx)($i,{})})]})}var ra=3,ia=2500;function aa({entry:e,settled:t,onReady:n}){let r=(0,B.useRef)({entry:-1,frames:0});return O(()=>{if(r.current.entry!==e&&(r.current={entry:e,frames:0}),!t){r.current.frames=0;return}++r.current.frames===ra&&n(e)}),null}function oa(){let e=b(e=>e.viewMode),t=b(e=>e.surfaceLocation!=null),n=b(e=>e.surfaceTerrain),r=b(e=>e.surfaceEntry),i=b(e=>e.surfaceTerrainSettled),a=Oe(e=>e.open),o=e===`surface`&&t,s=o&&!a,[c,l]=(0,B.useState)(-1),u=o&&c!==r;return(0,B.useEffect)(()=>{if(!u)return;let e=setTimeout(()=>l(r),ia);return()=>clearTimeout(e)},[u,r]),(0,B.useEffect)(()=>{te()},[]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(ue,{shadows:`soft`,frameloop:s?`always`:o?`demand`:`never`,camera:{position:[0,Ie,0],fov:70,near:.05,far:8e3},gl:{antialias:!0},dpr:[1,2],children:[(0,W.jsx)(`color`,{attach:`background`,args:[`#0a0d1a`]}),(0,W.jsx)(ot,{}),(0,W.jsx)(qt,{}),(0,W.jsx)(Xt,{}),(0,W.jsxs)(B.Suspense,{fallback:null,children:[(0,W.jsx)(bn,{}),(0,W.jsx)(yn,{})]}),(0,W.jsx)(Tn,{}),(0,W.jsx)(An,{}),n===`sea`?(0,W.jsx)(Li,{}):n===`ice`?(0,W.jsx)($r,{}):(0,W.jsx)(Hr,{}),(0,W.jsx)(Gt,{}),(0,W.jsx)(Ki,{}),(0,W.jsx)(aa,{entry:r,settled:i,onReady:l})]}),(0,W.jsx)(`div`,{className:`pointer-events-none absolute inset-0 z-10 bg-[#0a0d1a] ${u?`opacity-100`:`opacity-0 transition-opacity duration-300`}`}),o&&(0,W.jsx)(na,{})]})}export{oa as SurfaceView};