import{o as t,c as o,m as s,k as r,l as $,r as _,a as d,w as u,j as v,t as U}from"./vendor-9b0cf635.js";import{_ as c,b as h}from"./index-abfa6c99.js";import{U as y}from"./useLayout-7717c0e7.js";const b={name:"UiForm",emits:["submit"]},g={key:0,class:"form__buttons"},C={key:1,class:"form__append"};function k(e,n,i,l,p,m){return t(),o("form",{class:"form",onSubmit:n[0]||(n[0]=$(a=>e.$emit("submit",a),["prevent"]))},[s(e.$slots,"default",{},void 0,!0),e.$slots.buttons?(t(),o("div",g,[s(e.$slots,"buttons",{},void 0,!0)])):r("",!0),e.$slots.append?(t(),o("div",C,[s(e.$slots,"append",{},void 0,!0)])):r("",!0)],32)}const N=c(b,[["render",k],["__scopeId","data-v-4d31d5d8"],["__file","UiForm.vue"]]);const L={name:"LayoutAuth",components:{UiPageTitle:y,UiContainer:h},props:{title:String}},A={class:"page-auth"};function F(e,n,i,l,p,m){const a=_("UiPageTitle"),f=_("UiContainer");return t(),o("div",A,[d(f,null,{default:u(()=>[d(a,{class:"page-auth__title"},{default:u(()=>[v(U(i.title),1)]),_:1}),s(e.$slots,"default",{},void 0,!0)]),_:3})])}const P=c(L,[["render",F],["__scopeId","data-v-7c5ceab3"],["__file","LayoutAuth.vue"]]);export{P as L,N as U};