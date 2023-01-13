import{r as d,o as c,c as f,a as u,w as i,p as Y,b as j,d as I,e as J,f as W,g as U,h as b,s as X,i as $,j as h,k as B,F as A,t as k,l as Q,m as T,n as P,q as M,u as Z,v as ee,x as te,T as se,y as G,z as ne,A as oe,B as w,C as F,D as ae,K as re,E as ce,G as ie,H as L,I as ue,J as _e,L as le}from"./vendor-9b0cf635.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const de="/meetups/assets/logo-5583e3eb.svg";const _=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},pe={name:"MeetupsLogo"},fe=e=>(Y("data-v-c63ec014"),e=e(),j(),e),me={class:"logo"},ve=fe(()=>I("img",{src:de,alt:"Meetups",class:"logo__image",width:"174",height:"30"},null,-1));function he(e,t,o,n,s,a){const r=d("RouterLink");return c(),f("h1",me,[u(r,{to:{name:"index"},class:"logo__link"},{default:i(()=>[ve]),_:1})])}const ge=_(pe,[["render",he],["__scopeId","data-v-c63ec014"],["__file","MeetupsLogo.vue"]]),H=(e,t,o)=>({success:!t,error:t,data:e,response:o}),ye=(e,t)=>H(e,null,t),$e=(e,t)=>H(null,e,t),l=J.create({baseURL:"https://course-vue.javascript.ru/api",withCredentials:!0,validateStatus(e){return![401,405,408,429].includes(e)&&e<500}});l.interceptors.response.use(e=>e.status>=400?$e({statusCode:e.status,message:e.data.message??e.data??e.statusText},e):ye(e.data,e),e=>{if((!e.response||e.code==="ECONNABORTED")&&l._onNetworkError)l._onNetworkError();else if(e.response.status===401&&l._onAuthenticatedHandler)l._onAuthenticatedHandler();else return Promise.reject(e)});l.onUnauthenticated=e=>{l._onAuthenticatedHandler=e};l.onNetworkError=e=>{l._onNetworkError=e};function Te(){return l.get("/auth/user")}function os(e,t){return l.post("/auth/login",{email:e,password:t})}function as(e){return l.post("/auth/register",e)}function Ue(){return l.post("/auth/logout")}const x="user";function ke(e){localStorage.setItem(x,JSON.stringify(e))}function V(){localStorage.removeItem(x)}function Ee(){const e=localStorage.getItem(x);return e?JSON.parse(e):null}async function Se(){const{success:e}=await Ue();e&&(V(),location.reload())}const S=W("auth",()=>{const e=U(Ee()),t=b(()=>!!e.value),o=s=>{e.value=s,ke(e.value)};return{user:e,isAuthenticated:t,setUser:o,refreshUser:async()=>{const s=await Te();s.success&&o(s.data)}}});const Ie={name:"MeetupsNav",setup(){const{user:e,isAuthenticated:t}=X(S());return{user:e,isAuthenticated:t,logout:Se}}},Le={class:"nav"};function Ae(e,t,o,n,s,a){const r=d("RouterLink");return c(),f("nav",Le,[e.$route.meta.showReturnToMeetups?(c(),$(r,{key:0,to:{name:"meetups"},class:"nav__link"},{default:i(()=>[h(" ← Вернуться к списку ")]),_:1})):B("",!0),n.isAuthenticated?(c(),f(A,{key:2},[u(r,{to:{name:"meetups",query:{participation:"attending"}},class:"nav__link"},{default:i(()=>[h(" Мои митапы ")]),_:1}),u(r,{to:{name:"meetups",query:{participation:"organizing"}},class:"nav__link"},{default:i(()=>[h(" Организуемые митапы ")]),_:1}),u(r,{to:{name:"meetup-create"},class:"nav__link"},{default:i(()=>[h("Создать митап")]),_:1}),I("a",{href:"#",class:"nav__link",onClick:t[0]||(t[0]=Q((...p)=>n.logout&&n.logout(...p),["prevent"]))},k(n.user.fullname)+" (выйти)",1)],64)):(c(),f(A,{key:1},[u(r,{to:{name:"login"},class:"nav__link"},{default:i(()=>[h("Вход")]),_:1}),u(r,{to:{name:"register"},class:"nav__link"},{default:i(()=>[h("Регистрация")]),_:1})],64))])}const Re=_(Ie,[["render",Ae],["__scopeId","data-v-b9d30c21"],["__file","MeetupsNav.vue"]]);const be={name:"MeetupsHeader",components:{MeetupsNav:Re,MeetupsLogo:ge}},Pe={class:"header"};function we(e,t,o,n,s,a){const r=d("MeetupsLogo"),p=d("MeetupsNav");return c(),f("header",Pe,[u(r),u(p)])}const xe=_(be,[["render",we],["__scopeId","data-v-2d1eee27"],["__file","MeetupsHeader.vue"]]);const Me={name:"UiContainer"},Ce={class:"container"};function Oe(e,t,o,n,s,a){return c(),f("div",Ce,[T(e.$slots,"default",{},void 0,!0)])}const Ne=_(Me,[["render",Oe],["__scopeId","data-v-1ce75930"],["__file","UiContainer.vue"]]);const De={name:"UiLink",props:{tag:{type:[String,Object,Function],default:"router-link"}}};function Be(e,t,o,n,s,a){return c(),$(P(o.tag),{class:"link"},{default:i(()=>[T(e.$slots,"default",{},void 0,!0)]),_:3})}const Ge=_(De,[["render",Be],["__scopeId","data-v-c88d18ab"],["__file","UiLink.vue"]]);const Fe={name:"MeetupsFooter",components:{UiLink:Ge,UiContainer:Ne}},He={class:"footer"};function Ve(e,t,o,n,s,a){const r=d("UiContainer");return c(),f("footer",He,[u(r,null,{default:i(()=>[h(" 2022-"+k(new Date().getFullYear()),1)]),_:1})])}const qe=_(Fe,[["render",Ve],["__scopeId","data-v-b8b80ac1"],["__file","MeetupsFooter.vue"]]);const Ke={name:"LayoutBase",components:{MeetupsHeader:xe,MeetupsFooter:qe}},ze={class:"wrapper"},Ye={class:"main"};function je(e,t,o,n,s,a){const r=d("MeetupsHeader"),p=d("MeetupsFooter");return c(),f("div",ze,[u(r),I("main",Ye,[T(e.$slots,"default",{},void 0,!0)]),u(p)])}const Je=_(Ke,[["render",je],["__scopeId","data-v-02a82370"],["__file","LayoutBase.vue"]]);const We={name:"UiAlert",props:{text:{type:String,default:"Error..."}}},Xe={class:"alert"};function Qe(e,t,o,n,s,a){return c(),f("div",Xe,[T(e.$slots,"default",{},()=>[h(k(o.text),1)],!0)])}const Ze=_(We,[["render",Qe],["__scopeId","data-v-11684263"],["__file","UiAlert.vue"]]),et={name:"LayoutProvider",setup(){const e=U(null),t=U(null);return M("layout:set",(o,n=null)=>{e.value=te(o),t.value=n}),M("layout:reset",()=>{e.value=null,t.value=null}),{layout:b(()=>e.value??"div"),layoutProps:t}}};function tt(e,t,o,n,s,a){return c(),$(P(n.layout),Z(ee(n.layoutProps)),{default:i(()=>[T(e.$slots,"default")]),_:3},16)}const st=_(et,[["render",tt],["__file","LayoutProvider.vue"]]);const nt={name:"UiTransitionGroupFade"};function ot(e,t,o,n,s,a){return c(),$(se,{tag:"div",name:"fade-list",class:"fade-list"},{default:i(()=>[T(e.$slots,"default",{},void 0,!0)]),_:3})}const at=_(nt,[["render",ot],["__scopeId","data-v-5b503d18"],["__file","UiTransitionGroupFade.vue"]]);const rt={name:"UiToaster",components:{UiTransitionGroupFade:at}},ct={class:"toasts"};function it(e,t,o,n,s,a){const r=d("UiTransitionGroupFade");return c(),f("div",ct,[u(r,null,{default:i(()=>[T(e.$slots,"default",{},void 0,!0)]),_:3})])}const ut=_(rt,[["render",it],["__scopeId","data-v-de905c8c"],["__file","UiToaster.vue"]]),_t="/meetups/assets/icon-alert-circle-89d82ee3.svg",lt="/meetups/assets/icon-cal-sm-65eea2b0.svg",dt="/meetups/assets/icon-cal-lg-70192a7d.svg",pt="/meetups/assets/icon-check-2173ef59.svg",ft="/meetups/assets/icon-check-circle-27f4897e.svg",mt="/meetups/assets/icon-chevron-down-7a3c6bb7.svg",vt="/meetups/assets/icon-clock-37e0c4f9.svg",ht="/meetups/assets/icon-coffee-8db4c97f.svg",gt="/meetups/assets/icon-key-1194c161.svg",yt="/meetups/assets/icon-list-1236dfbc.svg",$t="/meetups/assets/icon-map-c9198c63.svg",Tt="/meetups/assets/icon-pen-tool-875c5817.svg",Ut="/meetups/assets/icon-pill-active-cf58a054.svg",kt="/meetups/assets/icon-search-f990726f.svg",Et="/meetups/assets/icon-trash-8a24966c.svg",St="/meetups/assets/icon-tv-f10f7739.svg",It="/meetups/assets/icon-user-d930aeb0.svg";const C={"alert-circle":_t,"cal-sm":lt,"cal-lg":dt,check:pt,"check-circle":ft,"chevron-down":mt,clock:vt,coffee:ht,key:gt,list:yt,map:$t,"pen-tool":Tt,"pill-active":Ut,search:kt,trash:Et,tv:St,user:It},Lt={name:"UiIcon",props:{icon:{type:String,required:!0,validator:e=>Object.keys(C).includes(e)}},computed:{iconSrc(){return C[this.icon]}}},At=["alt","src"];function Rt(e,t,o,n,s,a){return c(),f("img",{class:"icon",alt:o.icon,src:a.iconSrc},null,8,At)}const bt=_(Lt,[["render",Rt],["__scopeId","data-v-7519ca4f"],["__file","UiIcon.vue"]]);const Pt={name:"UiToast",components:{UiIcon:bt},props:{type:{type:String,default:"success",validator:e=>["success","error"].includes(e)},message:{type:String}},computed:{markup(){return{success:{class:"toast_success",icon:"check-circle"},error:{class:"toast_error",icon:"alert-circle"}}[this.type]}}};function wt(e,t,o,n,s,a){const r=d("UiIcon");return c(),f("div",{class:G(["toast",a.markup.class])},[u(r,{class:"toast__icon",icon:a.markup.icon},null,8,["icon"]),I("span",null,[T(e.$slots,"default",{},()=>[h(k(o.message),1)],!0)])],2)}const xt=_(Pt,[["render",wt],["__scopeId","data-v-8489a5ce"],["__file","UiToast.vue"]]);const Mt=5e3;let Ct=1;const Ot={name:"TheToaster",components:{UiToaster:ut,UiToast:xt},expose:["success","error"],setup(){const e=U(new Set),t=s=>{n("success",s)},o=s=>{n("error",s)},n=(s,a,r=Mt)=>{const m={id:Ct++,type:s,message:a};m.timeoutId=setTimeout(()=>{e.value.delete(m)},r),e.value.add(m)};return ne(()=>{for(const s of e.value)clearTimeout(s.timeoutId)}),{toasts:e,success:t,error:o}}};function Nt(e,t,o,n,s,a){const r=d("UiToast"),p=d("UiToaster");return c(),$(p,null,{default:i(()=>[(c(!0),f(A,null,oe(n.toasts,m=>(c(),$(r,{key:m.id,type:m.type},{default:i(()=>[h(k(m.message),1)]),_:2},1032,["type"]))),128))]),_:1})}const Dt=_(Ot,[["render",Nt],["__scopeId","data-v-2b7229b8"],["__file","TheToaster.vue"]]),q=Symbol("TOASTER_KEY");function Bt(){return F(q)}function Gt({container:e}={}){const t=()=>document.body.appendChild(document.createElement("div")),o=w(Dt).mount(e??t()),n={success:o.success,error:o.error,install(s){s.provide(q,n)}};return n}const Ft={name:"App",components:{LayoutProvider:st,UiAlert:Ze,LayoutBase:Je},setup(){ae({titleTemplate:n=>n?`${n} | Meetups`:"Meetups"});const e=Bt(),t=S();l.onUnauthenticated(()=>{V(),location.reload()}),l.onNetworkError(()=>{e.error("Проблема с интернет соединением")});const o=n=>{console.error(n),e.error(n.message)};window.addEventListener("error",n=>o(n)),window.addEventListener("unhandledrejection",({reason:n})=>o(n)),t.isAuthenticated&&t.refreshUser()}};function Ht(e,t,o,n,s,a){const r=d("UiAlert"),p=d("RouterView"),m=d("LayoutProvider"),g=d("LayoutBase");return c(),$(g,null,{default:i(()=>[u(m,null,{default:i(()=>[u(p,null,{default:i(({Component:v})=>[v?(c(),$(re,{key:0,max:3},[(c(),$(P(v)))],1024)):B("",!0)]),fallback:i(()=>[u(r,null,{default:i(()=>[h("Загрузка...")]),_:1})]),_:1})]),_:1})]),_:1})}const Vt=_(Ft,[["render",Ht],["__file","App.vue"]]),qt="modulepreload",Kt=function(e){return"/meetups/"+e},O={},y=function(t,o,n){if(!o||o.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(o.map(a=>{if(a=Kt(a),a in O)return;O[a]=!0;const r=a.endsWith(".css"),p=r?'[rel="stylesheet"]':"";if(!!n)for(let v=s.length-1;v>=0;v--){const E=s[v];if(E.href===a&&(!r||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const g=document.createElement("link");if(g.rel=r?"stylesheet":qt,r||(g.as="script",g.crossOrigin=""),g.href=a,document.head.appendChild(g),r)return new Promise((v,E)=>{g.addEventListener("load",v),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};function zt(e,t,o){return e.hash?{el:e.hash}:o||(e.meta.saveScrollPosition&&t.meta.saveScrollPosition?!1:{left:0,top:0})}function Yt(e){return e.meta.requireAuth&&!S().isAuthenticated?{name:"login",query:{from:e.fullPath}}:e.meta.requireGuest&&S().isAuthenticated?{name:"index"}:!0}const jt=[{path:"/",name:"index",component:()=>y(()=>import("./PageMeetups-d991feef.js"),["assets/PageMeetups-d991feef.js","assets/vendor-9b0cf635.js","assets/MeetupInfo-3c879960.js","assets/MeetupInfo-b8150545.css","assets/UiInput-35031c5c.js","assets/UiInput-dbb8177c.css","assets/meetupsApi-100c656f.js","assets/useApi-f4bc375e.js","assets/PageMeetups-e10e3891.css"])},{path:"/meetups",name:"meetups",redirect:{name:"index"}},{path:"/meetups/:meetupId(\\d+)",name:"meetup",meta:{showReturnToMeetups:!0,saveScrollPosition:!0},props:e=>({meetupId:+e.params.meetupId}),redirect:e=>({name:"meetup.description",params:e.params}),component:()=>y(()=>import("./PageMeetup-50ccd3f8.js"),["assets/PageMeetup-50ccd3f8.js","assets/vendor-9b0cf635.js","assets/MeetupInfo-3c879960.js","assets/MeetupInfo-b8150545.css","assets/UiButton-e852b53f.js","assets/UiButton-7bcd0189.css","assets/useApi-f4bc375e.js","assets/meetupsApi-100c656f.js","assets/PageMeetup-df46ff54.css"]),children:[{path:"",alias:"description",name:"meetup.description",component:()=>y(()=>import("./PageMeetupDescription-1abff2a2.js"),["assets/PageMeetupDescription-1abff2a2.js","assets/vendor-9b0cf635.js","assets/PageMeetupDescription-5155a2cb.css"])},{path:"agenda",name:"meetup.agenda",component:()=>y(()=>import("./PageMeetupAgenda-136299b1.js"),["assets/PageMeetupAgenda-136299b1.js","assets/meetupService-6ba15c28.js","assets/vendor-9b0cf635.js","assets/PageMeetupAgenda-7489ae37.css"])}]},{path:"/login",name:"login",meta:{requireGuest:!0},props:e=>({from:e.query.from}),component:()=>y(()=>import("./PageLogin-d5fa175c.js"),["assets/PageLogin-d5fa175c.js","assets/vendor-9b0cf635.js","assets/UiInput-35031c5c.js","assets/UiInput-dbb8177c.css","assets/UiButton-e852b53f.js","assets/UiButton-7bcd0189.css","assets/LayoutAuth-fca612a7.js","assets/useLayout-7717c0e7.js","assets/useLayout-b4f9360e.css","assets/LayoutAuth-a3476b40.css","assets/useApi-f4bc375e.js"])},{path:"/register",name:"register",meta:{requireGuest:!0},component:()=>y(()=>import("./PageRegister-5bf28601.js"),["assets/PageRegister-5bf28601.js","assets/vendor-9b0cf635.js","assets/UiInput-35031c5c.js","assets/UiInput-dbb8177c.css","assets/LayoutAuth-fca612a7.js","assets/useLayout-7717c0e7.js","assets/useLayout-b4f9360e.css","assets/LayoutAuth-a3476b40.css","assets/UiButton-e852b53f.js","assets/UiButton-7bcd0189.css","assets/useApi-f4bc375e.js","assets/PageRegister-43459610.css"])},{path:"/meetups/create",name:"meetup-create",meta:{requireAuth:!0},component:()=>y(()=>import("./PageCreateMeetup-eac224f4.js"),["assets/PageCreateMeetup-eac224f4.js","assets/useMeetupFormSubmit-824087c3.js","assets/useLayout-7717c0e7.js","assets/vendor-9b0cf635.js","assets/useLayout-b4f9360e.css","assets/UiButton-e852b53f.js","assets/UiButton-7bcd0189.css","assets/UiInput-35031c5c.js","assets/UiInput-dbb8177c.css","assets/meetupService-6ba15c28.js","assets/useApi-f4bc375e.js","assets/meetupsApi-100c656f.js","assets/useMeetupFormSubmit-add6be75.css"])},{path:"/meetups/:meetupId(\\d+)/edit",name:"meetup-edit",meta:{requireAuth:!0},props:e=>({meetupId:+e.params.meetupId}),component:()=>y(()=>import("./PageEditMeetup-d5f48925.js"),["assets/PageEditMeetup-d5f48925.js","assets/useMeetupFormSubmit-824087c3.js","assets/useLayout-7717c0e7.js","assets/vendor-9b0cf635.js","assets/useLayout-b4f9360e.css","assets/UiButton-e852b53f.js","assets/UiButton-7bcd0189.css","assets/UiInput-35031c5c.js","assets/UiInput-dbb8177c.css","assets/meetupService-6ba15c28.js","assets/useApi-f4bc375e.js","assets/meetupsApi-100c656f.js","assets/useMeetupFormSubmit-add6be75.css"])},{path:"/:unknownPath(.*)",component:()=>y(()=>import("./PageNotFound-189aed1c.js"),["assets/PageNotFound-189aed1c.js","assets/vendor-9b0cf635.js","assets/PageNotFound-6d26d24e.css"])}],R=ce({history:ie("/meetups/"),routes:jt,scrollBehavior:zt});R.beforeEach(Yt);function N(e,t){let o;return{start({from:n,to:s}){return o&&o.kill(),s!==void 0&&n!==void 0?o=L.fromTo(e,{value:n},{value:s,...t}):s!==void 0?o=L.to(e,{value:s,...t}):n!==void 0&&(o=L.from(e,{value:n,...t})),o},getTween:()=>o}}const Jt=.2,Wt=95,Xt=30,Qt=.5,Zt={name:"TheTopProgressBar",expose:["start","finish","fail"],setup(){const e=U(0),t=U(!1),o=b(()=>e.value>0),n=N(e,{duration:Xt,delay:Jt,ease:"expo.out"}),s=N(e,{duration:Qt});let a=new Set;const r=()=>{t.value=!1,e.value=0},p=v=>{a.size===0&&n.start({to:Wt}),a.add(v)},m=v=>{a.size!==0&&(v!==void 0?a.delete(v):a.clear(),a.size===0&&(n.getTween().kill(),o.value&&(n.getTween().kill(),s.start({to:100}).then(r))))};return{currentProgress:e,failed:t,show:o,start:p,finish:m,fail:()=>{t.value=!0,m()}}}};function es(e,t,o,n,s,a){return c(),f("div",{class:G(["progress",{show:n.show,failed:n.failed}]),style:ue({width:n.currentProgress+"%"})},null,6)}const ts=_(Zt,[["render",es],["__scopeId","data-v-104c1ba5"],["__file","TheTopProgressBar.vue"]]),K=Symbol("PROGRESS_KEY"),D=Symbol("PROGRESS_ROUTER_ID");function rs(){return F(K)}function ss({container:e,router:t}={}){const o=()=>document.body.appendChild(document.createElement("div")),n=w(ts).mount(e??o()),s={start:n.start,finish:n.finish,fail:n.fail,install(a){s.isInstalled=!0,a.provide(K,s),t&&(t.beforeEach(()=>{s.start(D)}),t.afterEach(()=>{s.finish(D)}),t.onError(()=>{s.fail()}))}};return s}const z=w(Vt).use(_e()).use(R).use(le()).use(ss({router:R})).use(Gt());z.config.globalProperties.$console=console;z.mount("#app");export{at as U,_,bt as a,Ne as b,Ze as c,rs as d,S as e,Ge as f,l as h,os as l,as as r,Bt as u};
