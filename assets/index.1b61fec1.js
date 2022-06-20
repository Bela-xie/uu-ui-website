import{i as z,r as i,o as p,c as f,a as r,b as e,w as o,d as S,e as l,p as P,f as O,F as $,g as R,K as g,h as C,j as wt,t as j,k as v,l as Tt,Y as Dt,m as q,n as kt,q as D,s as w,M as L,O as V,u as Et,v as Ft,x as k,y as E,z as F,A,B as M,C as I,D as U,E as y,G as b,H as At,I as Mt,J as It,L as St}from"./vendor.508754a1.js";const Lt=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const a of d)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function _(d){const a={};return d.integrity&&(a.integrity=d.integrity),d.referrerpolicy&&(a.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?a.credentials="include":d.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(d){if(d.ep)return;d.ep=!0;const a=_(d);fetch(d.href,a)}};Lt();var Vt="./assets/logo.69447c2d.png";var m=(t,s)=>{for(const[_,u]of s)t[_]=u;return t};const Ht={props:{toggleMenuVisible:{type:Boolean,default:!1}},setup(){const t=z("asideVisible");return{toggleAside:()=>{t.value=!t.value},logoImg:Vt}}},W=t=>(P("data-v-55348d82"),t=t(),O(),t),Nt={class:"topnav"},zt={class:"logo"},Pt=["src"],Ot={class:"menu"},Rt=l("\u4E3B\u9875"),jt=l("\u6587\u6863"),qt=W(()=>r("li",null,[r("a",{href:"https://github.com/BelaXie/uu-ui-lib",target:"__blank"},"Github")],-1)),Wt=W(()=>r("use",{"xlink:href":"#icon-menu"},null,-1)),Gt=[Wt];function Kt(t,s,_,u,d,a){const n=i("router-link");return p(),f("div",Nt,[r("div",zt,[e(n,{to:"/"},{default:o(()=>[r("img",{src:u.logoImg,alt:"",class:"logoImg"},null,8,Pt)]),_:1})]),r("ul",Ot,[r("li",null,[e(n,{to:"/"},{default:o(()=>[Rt]),_:1})]),r("li",null,[e(n,{to:"/doc"},{default:o(()=>[jt]),_:1})]),qt]),_.toggleMenuVisible?(p(),f("svg",{key:0,class:"icon toggleAside",onClick:s[0]||(s[0]=(...c)=>u.toggleAside&&u.toggleAside(...c))},Gt)):S("",!0)])}var G=m(Ht,[["render",Kt],["__scopeId","data-v-55348d82"]]);const Xt={components:{Topnav:G}},Jt={class:"topnavAndBanner"},Qt={class:"banner"},Yt=r("h1",null,"UU \u6846\u67B6",-1),Zt=r("h2",null,"\u4E00\u4E2A\u57FA\u4E8E Vue 3 \u7684 UI \u6846\u67B6",-1),ne={class:"actions"},te=r("a",{href:"https://github.com/BelaXie/uu-ui-lib"},"Github",-1),ee=l("\u5F00\u59CB"),oe=R('<div class="features"><ul><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-vue"></use></svg><h3>\u57FA\u4E8E Vue 3</h3><p>\u4F7F\u7528\u4E86 Vue 3 Composition API</p></li><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-ts"></use></svg><h3>\u57FA\u4E8E TypeScript</h3><p>\u6E90\u4EE3\u7801\u91C7\u7528 TypeScript \u4E66\u5199</p></li><li><svg class="icon" aria-hidden="true"><use xlink:href="#icon-light"></use></svg><h3>\u4EE3\u7801\u6613\u8BFB</h3><p>\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u6781\u5176\u7B80\u6D01</p></li></ul></div>',1);function ue(t,s,_,u,d,a){const n=i("Topnav"),c=i("router-link");return p(),f($,null,[r("div",Jt,[e(n),r("div",Qt,[Yt,Zt,r("p",ne,[te,e(c,{to:"/doc"},{default:o(()=>[ee]),_:1})])])]),oe],64)}var re=m(Xt,[["render",ue]]);const se={components:{Topnav:G},setup(){return{asideVisible:z("asideVisible")}}},K=t=>(P("data-v-733f2858"),t=t(),O(),t),le={class:"layout"},ce={class:"content"},ae={key:0},ie=K(()=>r("h2",null,"\u6587\u6863",-1)),de=l("\u4ECB\u7ECD"),_e=l("\u5B89\u88C5"),pe=l("\u5F00\u59CB\u4F7F\u7528"),me=K(()=>r("h2",null,"\u7EC4\u4EF6\u5217\u8868",-1)),fe=l("button \u7EC4\u4EF6"),he=l("dialog \u7EC4\u4EF6"),ve=l("tabs \u7EC4\u4EF6"),ge=l("container \u7EC4\u4EF6"),be=l("layout \u7EC4\u4EF6"),$e=l("input \u7EC4\u4EF6"),Ce=l("switch \u7EC4\u4EF6"),xe=l("message \u7EC4\u4EF6");function Ue(t,s,_,u,d,a){const n=i("Topnav"),c=i("router-link"),h=i("router-view");return p(),f("div",le,[e(n,{toggleMenuVisible:!0,class:"nav"}),r("div",ce,[u.asideVisible?(p(),f("aside",ae,[ie,r("ol",null,[r("li",null,[e(c,{to:"/doc/intro"},{default:o(()=>[de]),_:1})]),r("li",null,[e(c,{to:"/doc/install"},{default:o(()=>[_e]),_:1})]),r("li",null,[e(c,{to:"/doc/get-started"},{default:o(()=>[pe]),_:1})])]),me,r("ol",null,[r("li",null,[e(c,{to:"/doc/button"},{default:o(()=>[fe]),_:1})]),r("li",null,[e(c,{to:"/doc/dialog"},{default:o(()=>[he]),_:1})]),r("li",null,[e(c,{to:"/doc/tabs"},{default:o(()=>[ve]),_:1})]),r("li",null,[e(c,{to:"/doc/container"},{default:o(()=>[ge]),_:1})]),r("li",null,[e(c,{to:"/doc/layout"},{default:o(()=>[be]),_:1})]),r("li",null,[e(c,{to:"/doc/input"},{default:o(()=>[$e]),_:1})]),r("li",null,[e(c,{to:"/doc/switch"},{default:o(()=>[Ce]),_:1})]),r("li",null,[e(c,{to:"/doc/message"},{default:o(()=>[xe]),_:1})])])])):S("",!0),r("main",null,[e(h)])])])}var ye=m(se,[["render",Ue],["__scopeId","data-v-733f2858"]]);const H=window.Prism,Be={components:{UuButton:g},props:{component:{type:Object,required:!0}},setup(t){const s=C(!1),_=()=>{s.value=!0},u=()=>{s.value=!1},d=wt(()=>H.highlight(t.component.__sourceCode,H.languages.html,"html"));return{Prism:H,codeVisible:s,showCode:_,hideCode:u,html:d}}},we={class:"demo"},Te={class:"demo-component"},De={class:"demo-actions"},ke=l("\u9690\u85CF\u4EE3\u7801"),Ee=l("\u663E\u793A\u4EE3\u7801"),Fe={key:0,class:"demo-code"},Ae=["innerHTML"];function Me(t,s,_,u,d,a){const n=i("uu-button");return p(),f("div",we,[r("h2",null,j(_.component.__sourceTitle),1),r("div",Te,[(p(),v(Tt(_.component)))]),r("div",De,[u.codeVisible?(p(),v(n,{key:0,onClick:u.hideCode},{default:o(()=>[ke]),_:1},8,["onClick"])):(p(),v(n,{key:1,onClick:u.showCode},{default:o(()=>[Ee]),_:1},8,["onClick"]))]),u.codeVisible?(p(),f("div",Fe,[r("pre",{class:"language-html",innerHTML:u.html},null,8,Ae)])):S("",!0)])}var x=m(Be,[["render",Me],["__scopeId","data-v-64f25b5a"]]),X=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <uu-button>\u4F60\u597D</uu-button>\r
    <uu-button theme="link">\u4F60\u597D</uu-button>\r
    <uu-button theme="text">\u4F60\u597D</uu-button>\r
\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuButton,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u5E38\u89C4\u4F7F\u7528\uFF1A\u652F\u6301\u4E09\u79CD\u6309\u94AE\u5F62\u5F0F "};const J={components:{UuButton:g}},Ie=l("\u4F60\u597D"),Se=l("\u4F60\u597D"),Le=l("\u4F60\u597D");function Ve(t,s,_,u,d,a){const n=i("uu-button");return p(),f("div",null,[e(n,null,{default:o(()=>[Ie]),_:1}),e(n,{theme:"link"},{default:o(()=>[Se]),_:1}),e(n,{theme:"text"},{default:o(()=>[Le]),_:1})])}typeof X=="function"&&X(J);var He=m(J,[["render",Ve]]),Q=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <uu-button size="large">large</uu-button>\r
      <uu-button>normal</uu-button>\r
      <uu-button size="small">small</uu-button>\r
    </div>\r
    <div>\r
      <uu-button theme="link" size="large">large</uu-button>\r
      <uu-button theme="link">normal</uu-button>\r
      <uu-button size="small" theme="link">small</uu-button>\r
    </div>\r
    <div>\r
      <uu-button size="large" theme="text">large</uu-button>\r
      <uu-button theme="text">normal</uu-button>\r
      <uu-button size="small" theme="text">small</uu-button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton } from 'uu-ui-vue3'\r
export default {\r
  components: {\r
    UuButton,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 size\uFF1Anormal\uFF08\u9ED8\u8BA4\u503C\uFF09\u3001large\u3001small "};const Y={components:{UuButton:g}},Ne=l("large"),ze=l("normal"),Pe=l("small"),Oe=l("large"),Re=l("normal"),je=l("small"),qe=l("large"),We=l("normal"),Ge=l("small");function Ke(t,s,_,u,d,a){const n=i("uu-button");return p(),f("div",null,[r("div",null,[e(n,{size:"large"},{default:o(()=>[Ne]),_:1}),e(n,null,{default:o(()=>[ze]),_:1}),e(n,{size:"small"},{default:o(()=>[Pe]),_:1})]),r("div",null,[e(n,{theme:"link",size:"large"},{default:o(()=>[Oe]),_:1}),e(n,{theme:"link"},{default:o(()=>[Re]),_:1}),e(n,{size:"small",theme:"link"},{default:o(()=>[je]),_:1})]),r("div",null,[e(n,{size:"large",theme:"text"},{default:o(()=>[qe]),_:1}),e(n,{theme:"text"},{default:o(()=>[We]),_:1}),e(n,{size:"small",theme:"text"},{default:o(()=>[Ge]),_:1})])])}typeof Q=="function"&&Q(Y);var Xe=m(Y,[["render",Ke]]),Z=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <uu-button>default</uu-button>\r
      <uu-button level="primary">primary</uu-button>\r
      <uu-button level="success">success</uu-button>\r
      <uu-button level="info">info</uu-button>\r
      <uu-button level="warn">warn</uu-button>\r
      <uu-button level="danger">danger</uu-button>\r
    </div><br />\r
    <div>\r
      <uu-button theme="link">default</uu-button>\r
      <uu-button theme="link" level="primary">primary</uu-button>\r
      <uu-button theme="link" level="success">success</uu-button>\r
      <uu-button theme="link" level="info">info</uu-button>\r
      <uu-button theme="link" level="warn">warn</uu-button>\r
      <uu-button theme="link" level="danger">danger</uu-button>\r
    </div><br />\r
    <div>\r
      <uu-button theme="text">default</uu-button>\r
      <uu-button theme="text" level="primary">primary</uu-button>\r
      <uu-button theme="text" level="success">success</uu-button>\r
      <uu-button theme="text" level="info">info</uu-button>\r
      <uu-button theme="text" level="warn">warn</uu-button>\r
      <uu-button theme="text" level="danger">danger</uu-button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton } from 'uu-ui-vue3'\r
export default {\r
  components: {\r
    UuButton,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 level\uFF1Aprimary\u3001success\u3001info\u3001warn\u3001danger "};const nn={components:{UuButton:g}},Je=l("default"),Qe=l("primary"),Ye=l("success"),Ze=l("info"),no=l("warn"),to=l("danger"),eo=r("br",null,null,-1),oo=l("default"),uo=l("primary"),ro=l("success"),so=l("info"),lo=l("warn"),co=l("danger"),ao=r("br",null,null,-1),io=l("default"),_o=l("primary"),po=l("success"),mo=l("info"),fo=l("warn"),ho=l("danger");function vo(t,s,_,u,d,a){const n=i("uu-button");return p(),f("div",null,[r("div",null,[e(n,null,{default:o(()=>[Je]),_:1}),e(n,{level:"primary"},{default:o(()=>[Qe]),_:1}),e(n,{level:"success"},{default:o(()=>[Ye]),_:1}),e(n,{level:"info"},{default:o(()=>[Ze]),_:1}),e(n,{level:"warn"},{default:o(()=>[no]),_:1}),e(n,{level:"danger"},{default:o(()=>[to]),_:1})]),eo,r("div",null,[e(n,{theme:"link"},{default:o(()=>[oo]),_:1}),e(n,{theme:"link",level:"primary"},{default:o(()=>[uo]),_:1}),e(n,{theme:"link",level:"success"},{default:o(()=>[ro]),_:1}),e(n,{theme:"link",level:"info"},{default:o(()=>[so]),_:1}),e(n,{theme:"link",level:"warn"},{default:o(()=>[lo]),_:1}),e(n,{theme:"link",level:"danger"},{default:o(()=>[co]),_:1})]),ao,r("div",null,[e(n,{theme:"text"},{default:o(()=>[io]),_:1}),e(n,{theme:"text",level:"primary"},{default:o(()=>[_o]),_:1}),e(n,{theme:"text",level:"success"},{default:o(()=>[po]),_:1}),e(n,{theme:"text",level:"info"},{default:o(()=>[mo]),_:1}),e(n,{theme:"text",level:"warn"},{default:o(()=>[fo]),_:1}),e(n,{theme:"text",level:"danger"},{default:o(()=>[ho]),_:1})])])}typeof Z=="function"&&Z(nn);var go=m(nn,[["render",vo]]),tn=t=>{t.__sourceCode=`<template>\r
  <uu-button disabled>\u7981\u7528\u6309\u94AE</uu-button>\r
  <uu-button theme="link" disabled>\u7981\u7528\u94FE\u63A5\u6309\u94AE</uu-button>\r
  <uu-button theme="text" disabled>\u7981\u7528\u6587\u672C\u6309\u94AE</uu-button>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton } from 'uu-ui-vue3'\r
export default {\r
  components: {\r
    UuButton,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 disabled "};const en={components:{UuButton:g}},bo=l("\u7981\u7528\u6309\u94AE"),$o=l("\u7981\u7528\u94FE\u63A5\u6309\u94AE"),Co=l("\u7981\u7528\u6587\u672C\u6309\u94AE");function xo(t,s,_,u,d,a){const n=i("uu-button");return p(),f($,null,[e(n,{disabled:""},{default:o(()=>[bo]),_:1}),e(n,{theme:"link",disabled:""},{default:o(()=>[$o]),_:1}),e(n,{theme:"text",disabled:""},{default:o(()=>[Co]),_:1})],64)}typeof tn=="function"&&tn(en);var Uo=m(en,[["render",xo]]),on=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <uu-button loading>\u52A0\u8F7D\u4E2D</uu-button>\r
    <uu-button>\u52A0\u8F7D\u5B8C\u6BD5</uu-button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton } from 'uu-ui-vue3'\r
export default {\r
  components: {\r
    UuButton,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301\u663E\u793A\u52A0\u8F7D\u4E2D "};const un={components:{UuButton:g}},yo=l("\u52A0\u8F7D\u4E2D"),Bo=l("\u52A0\u8F7D\u5B8C\u6BD5");function wo(t,s,_,u,d,a){const n=i("uu-button");return p(),f("div",null,[e(n,{loading:""},{default:o(()=>[yo]),_:1}),e(n,null,{default:o(()=>[Bo]),_:1})])}typeof on=="function"&&on(un);var To=m(un,[["render",wo]]),rn=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <uu-button-group>\r
      <uu-button>\u4E0A\u4E00\u9875</uu-button>\r
      <uu-button>\u66F4\u591A</uu-button>\r
      <uu-button>\u4E0B\u4E00\u9875</uu-button>\r
    </uu-button-group>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton, UuButtonGroup } from 'uu-ui-vue3'\r
export default {\r
  components: {\r
    UuButton,\r
    UuButtonGroup\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301\u6309\u94AE\u7EC4 "};const sn={components:{UuButton:g,UuButtonGroup:Dt}},Do=l("\u4E0A\u4E00\u9875"),ko=l("\u66F4\u591A"),Eo=l("\u4E0B\u4E00\u9875");function Fo(t,s,_,u,d,a){const n=i("uu-button"),c=i("uu-button-group");return p(),f("div",null,[e(c,null,{default:o(()=>[e(n,null,{default:o(()=>[Do]),_:1}),e(n,null,{default:o(()=>[ko]),_:1}),e(n,null,{default:o(()=>[Eo]),_:1})]),_:1})])}typeof rn=="function"&&rn(sn);var Ao=m(sn,[["render",Fo]]);const Mo={components:{Demo:x},setup(){return{Button1Demo:He,Button2Demo:Xe,Button3Demo:go,Button4Demo:Uo,Button5Demo:To,Button6Demo:Ao}}},Io=r("h1",null,"Button \u7EC4\u4EF6\u793A\u4F8B",-1);function So(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[Io,e(n,{component:u.Button1Demo},null,8,["component"]),e(n,{component:u.Button2Demo},null,8,["component"]),e(n,{component:u.Button3Demo},null,8,["component"]),e(n,{component:u.Button4Demo},null,8,["component"]),e(n,{component:u.Button5Demo},null,8,["component"]),e(n,{component:u.Button6Demo},null,8,["component"])])}var Lo=m(Mo,[["render",So]]),ln=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <uu-button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</uu-button>\r
    <uu-dialog v-model:visible="x" :ok="f1" :cancel="f2">\r
      <template v-slot:content>\r
        <strong>\u8FD9\u662F\u5185\u5BB9</strong>\r
      </template>\r
      <template v-slot:title>\r
        <strong>\u8FD9\u662F\u6807\u9898</strong>\r
      </template>\r
    </uu-dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuDialog, UuButton } from "uu-ui-vue3";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    UuDialog,\r
    UuButton,\r
  },\r
  setup() {\r
    const x = ref(false);\r
    const toggle = () => {\r
      x.value = !x.value;\r
    };\r
    const f1 = () => {\r
      return false;\r
    };\r
    const f2 = () => { };\r
    return {\r
      x,\r
      toggle,\r
      f1,\r
      f2,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u5E38\u89C4\u4F7F\u7528 "};const cn={components:{UuDialog:q,UuButton:g},setup(){const t=C(!1);return{x:t,toggle:()=>{t.value=!t.value},f1:()=>!1,f2:()=>{}}}},Vo=l("\u6253\u5F00\u5BF9\u8BDD\u6846"),Ho=r("strong",null,"\u8FD9\u662F\u5185\u5BB9",-1),No=r("strong",null,"\u8FD9\u662F\u6807\u9898",-1);function zo(t,s,_,u,d,a){const n=i("uu-button"),c=i("uu-dialog");return p(),f("div",null,[e(n,{onClick:u.toggle},{default:o(()=>[Vo]),_:1},8,["onClick"]),e(c,{visible:u.x,"onUpdate:visible":s[0]||(s[0]=h=>u.x=h),ok:u.f1,cancel:u.f2},{content:o(()=>[Ho]),title:o(()=>[No]),_:1},8,["visible","ok","cancel"])])}typeof ln=="function"&&ln(cn);var Po=m(cn,[["render",zo]]),an=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <uu-button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</uu-button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuButton, openUuDialog } from "uu-ui-vue3";\r
import { h } from "vue";\r
export default {\r
  components: {\r
    UuButton,\r
  },\r
  setup() {\r
    const showDialog = () => {\r
      openUuDialog({\r
        title: h("strong", {}, "\u6807\u9898"),\r
        content: "\u4F60\u597D",\r
        ok() {\r
          console.log("ok");\r
        },\r
        cancel() {\r
          console.log("cancel");\r
        },\r
      });\r
    };\r
    return {\r
      showDialog,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u51FD\u6570\u5F0F\u8C03\u7528 "};const dn={components:{UuButton:g},setup(){return{showDialog:()=>{kt({title:D("strong",{},"\u6807\u9898"),content:"\u4F60\u597D",ok(){console.log("ok")},cancel(){console.log("cancel")}})}}}},Oo=l("\u6253\u5F00\u5BF9\u8BDD\u6846");function Ro(t,s,_,u,d,a){const n=i("uu-button");return p(),f("div",null,[e(n,{onClick:u.showDialog},{default:o(()=>[Oo]),_:1},8,["onClick"])])}typeof an=="function"&&an(dn);var jo=m(dn,[["render",Ro]]),_n=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <uu-button @click="toggle">\u70B9\u51FB\u8499\u5C42\u4E0D\u5173\u95ED\u5BF9\u8BDD\u6846</uu-button>\r
    <uu-dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">\r
      <template v-slot:content> \u5185\u5BB9 </template>\r
      <template v-slot:title> \u6807\u9898 </template>\r
    </uu-dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { UuDialog, UuButton } from "uu-ui-vue3";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    UuDialog,\r
    UuButton,\r
  },\r
  setup() {\r
    const x = ref(false);\r
    const toggle = () => {\r
      x.value = !x.value;\r
    };\r
    const f1 = () => {\r
      return false;\r
    };\r
    const f2 = () => { };\r
    return {\r
      x,\r
      toggle,\r
      f1,\r
      f2,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301closeOnClickOverlay "};const pn={components:{UuDialog:q,UuButton:g},setup(){const t=C(!1);return{x:t,toggle:()=>{t.value=!t.value},f1:()=>!1,f2:()=>{}}}},qo=l("\u70B9\u51FB\u8499\u5C42\u4E0D\u5173\u95ED\u5BF9\u8BDD\u6846"),Wo=l(" \u5185\u5BB9 "),Go=l(" \u6807\u9898 ");function Ko(t,s,_,u,d,a){const n=i("uu-button"),c=i("uu-dialog");return p(),f("div",null,[e(n,{onClick:u.toggle},{default:o(()=>[qo]),_:1},8,["onClick"]),e(c,{visible:u.x,"onUpdate:visible":s[0]||(s[0]=h=>u.x=h),closeOnClickOverlay:!1,ok:u.f1,cancel:u.f2},{content:o(()=>[Wo]),title:o(()=>[Go]),_:1},8,["visible","ok","cancel"])])}typeof _n=="function"&&_n(pn);var Xo=m(pn,[["render",Ko]]);const Jo={components:{Demo:x},setup(){return{Dialog1Demo:Po,Dialog2Demo:jo,Dialog3Demo:Xo}}},Qo=r("h1",null,"Dialog \u7EC4\u4EF6\u793A\u4F8B",-1);function Yo(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[Qo,e(n,{component:u.Dialog1Demo},null,8,["component"]),e(n,{component:u.Dialog2Demo},null,8,["component"]),e(n,{component:u.Dialog3Demo},null,8,["component"])])}var Zo=m(Jo,[["render",Yo]]),mn=t=>{t.__sourceCode=`<template>\r
  <uu-input placeholder="Please input"></uu-input>\r
</template>\r
\r
<script lang="ts">\r
import { UuInput } from "uu-ui-vue3";\r
export default {\r
  components: { UuInput },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u5E38\u89C4\u4F7F\u7528 "};const fn={components:{UuInput:w}};function nu(t,s,_,u,d,a){const n=i("uu-input");return p(),v(n,{placeholder:"Please input"})}typeof mn=="function"&&mn(fn);var tu=m(fn,[["render",nu]]),hn=t=>{t.__sourceCode=`<template>\r
  <uu-input disabled placeholder="Please input"></uu-input>\r
</template>\r
\r
<script lang="ts">\r
import { UuInput } from "uu-ui-vue3";\r
export default {\r
  components: { UuInput },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301 disabled "};const vn={components:{UuInput:w}};function eu(t,s,_,u,d,a){const n=i("uu-input");return p(),v(n,{disabled:"",placeholder:"Please input"})}typeof hn=="function"&&hn(vn);var ou=m(vn,[["render",eu]]),gn=t=>{t.__sourceCode=`<template>\r
  <uu-input placeholder="Please input" v-model="input" size="small"></uu-input><br />\r
  <uu-input placeholder="Please input" v-model="input" size="middle"></uu-input><br />\r
  <uu-input placeholder="Please input" v-model="input" size="large"></uu-input>\r
</template>\r
\r
<script lang="ts">\r
import { UuInput } from "uu-ui-vue3";\r
export default {\r
  components: { UuInput },\r
  data: () => {\r
    return { input: "" };\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301\u4E09\u79CD size\uFF08small\u3001middle\u3001large\uFF09 "};const bn={components:{UuInput:w},data:()=>({input:""})},uu=r("br",null,null,-1),ru=r("br",null,null,-1);function su(t,s,_,u,d,a){const n=i("uu-input");return p(),f($,null,[e(n,{placeholder:"Please input",modelValue:t.input,"onUpdate:modelValue":s[0]||(s[0]=c=>t.input=c),size:"small"},null,8,["modelValue"]),uu,e(n,{placeholder:"Please input",modelValue:t.input,"onUpdate:modelValue":s[1]||(s[1]=c=>t.input=c),size:"middle"},null,8,["modelValue"]),ru,e(n,{placeholder:"Please input",modelValue:t.input,"onUpdate:modelValue":s[2]||(s[2]=c=>t.input=c),size:"large"},null,8,["modelValue"])],64)}typeof gn=="function"&&gn(bn);var lu=m(bn,[["render",su]]),$n=t=>{t.__sourceCode=`<template>\r
  <uu-input placeholder="Please input" v-model="input" type="password" showPassword></uu-input>\r
</template>\r
\r
<script lang="ts">\r
import { UuInput } from "uu-ui-vue3";\r
export default {\r
  components: { UuInput },\r
  data: () => {\r
    return { input: "" };\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301\u5BC6\u7801\u6846 type \u53CA\u5207\u6362 showPassword "};const Cn={components:{UuInput:w},data:()=>({input:""})};function cu(t,s,_,u,d,a){const n=i("uu-input");return p(),v(n,{placeholder:"Please input",modelValue:t.input,"onUpdate:modelValue":s[0]||(s[0]=c=>t.input=c),type:"password",showPassword:""},null,8,["modelValue"])}typeof $n=="function"&&$n(Cn);var au=m(Cn,[["render",cu]]),xn=t=>{t.__sourceCode=`<template>\r
  <uu-input placeholder="Please input" v-model="input" type="textarea"></uu-input>\r
</template>\r
\r
<script lang="ts">\r
import { UuInput } from "uu-ui-vue3";\r
export default {\r
  components: { UuInput },\r
  data: () => {\r
    return { input: "" };\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301\u6587\u672C\u57DF textarea\uFF08\u4E5F\u53EF\u76F4\u63A5\u4F20\u5165 rows\u3001cols\uFF09 "};const Un={components:{UuInput:w},data:()=>({input:""})};function iu(t,s,_,u,d,a){const n=i("uu-input");return p(),v(n,{placeholder:"Please input",modelValue:t.input,"onUpdate:modelValue":s[0]||(s[0]=c=>t.input=c),type:"textarea"},null,8,["modelValue"])}typeof xn=="function"&&xn(Un);var du=m(Un,[["render",iu]]),yn=t=>{t.__sourceCode=`<template>\r
  <uu-input v-model="input" clearable placeholder="Please input"></uu-input>\r
</template>\r
\r
<script lang="ts">\r
import { UuInput } from "uu-ui-vue3";\r
export default {\r
  components: { UuInput },\r
  data: () => {\r
    return { input: "" };\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301 clearable \u4E00\u952E\u6E05\u7A7A "};const Bn={components:{UuInput:w},data:()=>({input:""})};function _u(t,s,_,u,d,a){const n=i("uu-input");return p(),v(n,{modelValue:t.input,"onUpdate:modelValue":s[0]||(s[0]=c=>t.input=c),clearable:"",placeholder:"Please input"},null,8,["modelValue"])}typeof yn=="function"&&yn(Bn);var pu=m(Bn,[["render",_u]]);const mu={components:{Demo:x},setup(){return{Input1Demo:tu,Input2Demo:ou,Input3Demo:lu,Input4Demo:au,Input5Demo:du,Input6Demo:pu}}},fu=r("h1",null,"Input \u7EC4\u4EF6\u793A\u4F8B",-1);function hu(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[fu,e(n,{component:u.Input1Demo},null,8,["component"]),e(n,{component:u.Input2Demo},null,8,["component"]),e(n,{component:u.Input3Demo},null,8,["component"]),e(n,{component:u.Input4Demo},null,8,["component"]),e(n,{component:u.Input5Demo},null,8,["component"]),e(n,{component:u.Input6Demo},null,8,["component"])])}var vu=m(mu,[["render",hu]]),wn=t=>{t.__sourceCode=`<template>\r
  <uu-tabs v-model:selected="currentTab">\r
    <uu-tab title="\u5BFC\u822A1">\u5185\u5BB91</uu-tab>\r
    <uu-tab title="\u5BFC\u822A2">\u5185\u5BB92</uu-tab>\r
    <uu-tab title="\u5BFC\u822A3">\u5185\u5BB93</uu-tab>\r
  </uu-tabs>\r
</template>\r
\r
<script lang="ts">\r
import { UuTabs, UuTab } from "uu-ui-vue3";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    UuTabs,\r
    UuTab,\r
  },\r
  setup() {\r
    const currentTab = ref("\u5BFC\u822A1");\r
    return {\r
      currentTab,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u5E38\u89C4\u4F7F\u7528 "};const Tn={components:{UuTabs:L,UuTab:V},setup(){return{currentTab:C("\u5BFC\u822A1")}}},gu=l("\u5185\u5BB91"),bu=l("\u5185\u5BB92"),$u=l("\u5185\u5BB93");function Cu(t,s,_,u,d,a){const n=i("uu-tab"),c=i("uu-tabs");return p(),v(c,{selected:u.currentTab,"onUpdate:selected":s[0]||(s[0]=h=>u.currentTab=h)},{default:o(()=>[e(n,{title:"\u5BFC\u822A1"},{default:o(()=>[gu]),_:1}),e(n,{title:"\u5BFC\u822A2"},{default:o(()=>[bu]),_:1}),e(n,{title:"\u5BFC\u822A3"},{default:o(()=>[$u]),_:1})]),_:1},8,["selected"])}typeof wn=="function"&&wn(Tn);var xu=m(Tn,[["render",Cu]]),Dn=t=>{t.__sourceCode=`<template>\r
  <uu-tabs v-model:selected="currentTab">\r
    <uu-tab title="\u5BFC\u822A1">\u5185\u5BB91</uu-tab>\r
    <uu-tab title="\u5BFC\u822A2">\u5185\u5BB92</uu-tab>\r
    <uu-tab title="\u5BFC\u822A3" disabled>\u5185\u5BB93</uu-tab>\r
  </uu-tabs>\r
</template>\r
\r
<script lang="ts">\r
import { UuTabs, UuTab } from "uu-ui-vue3";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    UuTabs,\r
    UuTab,\r
  },\r
  setup() {\r
    const currentTab = ref("\u5BFC\u822A1");\r
    return {\r
      currentTab,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 disabled "};const kn={components:{UuTabs:L,UuTab:V},setup(){return{currentTab:C("\u5BFC\u822A1")}}},Uu=l("\u5185\u5BB91"),yu=l("\u5185\u5BB92"),Bu=l("\u5185\u5BB93");function wu(t,s,_,u,d,a){const n=i("uu-tab"),c=i("uu-tabs");return p(),v(c,{selected:u.currentTab,"onUpdate:selected":s[0]||(s[0]=h=>u.currentTab=h)},{default:o(()=>[e(n,{title:"\u5BFC\u822A1"},{default:o(()=>[Uu]),_:1}),e(n,{title:"\u5BFC\u822A2"},{default:o(()=>[yu]),_:1}),e(n,{title:"\u5BFC\u822A3",disabled:""},{default:o(()=>[Bu]),_:1})]),_:1},8,["selected"])}typeof Dn=="function"&&Dn(kn);var Tu=m(kn,[["render",wu]]),En=t=>{t.__sourceCode=`<template>\r
  <uu-tabs v-model:selected="currentTab" :editable="true" @edit="editHandle">\r
    <uu-tab v-for="item in tabList" :idName="item.idName" :key="item.idName" :title="item.title">{{ item.content }}\r
    </uu-tab>\r
  </uu-tabs>\r
</template>\r
\r
<script lang="ts">\r
import { UuTabs, UuTab } from "uu-ui-vue3";\r
import { reactive, ref } from "vue";\r
export default {\r
  components: {\r
    UuTabs,\r
    UuTab,\r
  },\r
  setup() {\r
    const tabList = reactive([\r
      { idName: 1, title: '\u5BFC\u822A1', content: "\u5185\u5BB91" },\r
      { idName: 2, title: "\u5BFC\u822A2", content: "\u5185\u5BB92" },\r
      { idName: 3, title: "\u5BFC\u822A3", content: "\u5185\u5BB93" },\r
    ])\r
    let tabIndex = 3\r
    const currentTab = ref(1);\r
    const editHandle = (action: 'add' | 'delete', targetIdName?) => {\r
      if (action === 'add') {\r
        const newTab = {\r
          idName: ++tabIndex,\r
          title: '\u65B0\u6807\u7B7E' + tabIndex,\r
          content: '\u65B0\u6807\u7B7E\u5185\u5BB9' + tabIndex\r
        }\r
        tabList.push(newTab)\r
        currentTab.value = newTab.idName\r
      } else if (action === 'delete') {\r
        let index = -1\r
        tabList.forEach((item, i) => {\r
          if (item.idName === targetIdName) { index = i }\r
        })\r
        if (currentTab.value === targetIdName) {\r
          const nextTab = tabList[index + 1] || tabList[index - 1]\r
          if (nextTab) {\r
            currentTab.value = nextTab.idName\r
          }\r
        }\r
        index !== -1 && tabList.splice(index, 1)\r
      }\r
    }\r
    return {\r
      currentTab,\r
      tabList,\r
      editHandle\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u52A8\u6001\u589E\u52A0\u6807\u7B7E\u9875 "};const Fn={components:{UuTabs:L,UuTab:V},setup(){const t=Et([{idName:1,title:"\u5BFC\u822A1",content:"\u5185\u5BB91"},{idName:2,title:"\u5BFC\u822A2",content:"\u5185\u5BB92"},{idName:3,title:"\u5BFC\u822A3",content:"\u5185\u5BB93"}]);let s=3;const _=C(1);return{currentTab:_,tabList:t,editHandle:(d,a)=>{if(d==="add"){const n={idName:++s,title:"\u65B0\u6807\u7B7E"+s,content:"\u65B0\u6807\u7B7E\u5185\u5BB9"+s};t.push(n),_.value=n.idName}else if(d==="delete"){let n=-1;if(t.forEach((c,h)=>{c.idName===a&&(n=h)}),_.value===a){const c=t[n+1]||t[n-1];c&&(_.value=c.idName)}n!==-1&&t.splice(n,1)}}}}};function Du(t,s,_,u,d,a){const n=i("uu-tab"),c=i("uu-tabs");return p(),v(c,{selected:u.currentTab,"onUpdate:selected":s[0]||(s[0]=h=>u.currentTab=h),editable:!0,onEdit:u.editHandle},{default:o(()=>[(p(!0),f($,null,Ft(u.tabList,h=>(p(),v(n,{idName:h.idName,key:h.idName,title:h.title},{default:o(()=>[l(j(h.content),1)]),_:2},1032,["idName","title"]))),128))]),_:1},8,["selected","onEdit"])}typeof En=="function"&&En(Fn);var ku=m(Fn,[["render",Du]]);const Eu={components:{Demo:x},setup(){return{Tabs1Demo:xu,Tabs2Demo:Tu,Tabs3Demo:ku}}},Fu=r("h1",null,"Tabs \u7EC4\u4EF6\u793A\u4F8B",-1);function Au(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[Fu,e(n,{component:u.Tabs1Demo},null,8,["component"]),e(n,{component:u.Tabs2Demo},null,8,["component"]),e(n,{component:u.Tabs3Demo},null,8,["component"])])}var Mu=m(Eu,[["render",Au]]),An=t=>{t.__sourceCode=`<template>\r
  <uu-switch v-model:value="bool" />\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "vue";\r
import { UuSwitch } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false);\r
    return {\r
      bool,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u5E38\u89C4\u7528\u6CD5 "};const Mn={components:{UuSwitch:k},setup(){return{bool:C(!1)}}};function Iu(t,s,_,u,d,a){const n=i("uu-switch");return p(),v(n,{value:u.bool,"onUpdate:value":s[0]||(s[0]=c=>u.bool=c)},null,8,["value"])}typeof An=="function"&&An(Mn);var Su=m(Mn,[["render",Iu]]),In=t=>{t.__sourceCode=`<template>\r
  <uu-switch v-model:value="bool" disabled />\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "vue";\r
import { UuSwitch } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false);\r
    return {\r
      bool,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 disabled "};const Sn={components:{UuSwitch:k},setup(){return{bool:C(!1)}}};function Lu(t,s,_,u,d,a){const n=i("uu-switch");return p(),v(n,{value:u.bool,"onUpdate:value":s[0]||(s[0]=c=>u.bool=c),disabled:""},null,8,["value"])}typeof In=="function"&&In(Sn);var Vu=m(Sn,[["render",Lu]]),Ln=t=>{t.__sourceCode=`<template>\r
  <uu-switch v-model:value="bool" inActiveColor="#878787" activeColor="blue" />\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "vue";\r
import { UuSwitch } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false);\r
    return {\r
      bool,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 inActiveColor \u548C activeColor "};const Vn={components:{UuSwitch:k},setup(){return{bool:C(!1)}}};function Hu(t,s,_,u,d,a){const n=i("uu-switch");return p(),v(n,{value:u.bool,"onUpdate:value":s[0]||(s[0]=c=>u.bool=c),inActiveColor:"#878787",activeColor:"blue"},null,8,["value"])}typeof Ln=="function"&&Ln(Vn);var Nu=m(Vn,[["render",Hu]]),Hn=t=>{t.__sourceCode=`<template>\r
  <uu-switch v-model:value="bool" size="large" /><br />\r
  <uu-switch v-model:value="bool" /><br />\r
  <uu-switch v-model:value="bool" size="small" />\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "vue";\r
import { UuSwitch } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false);\r
    return {\r
      bool,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301 size\uFF0C\u4F20\u503C\u53EA\u63A5\u53D7 large \u548C small "};const Nn={components:{UuSwitch:k},setup(){return{bool:C(!1)}}},zu=r("br",null,null,-1),Pu=r("br",null,null,-1);function Ou(t,s,_,u,d,a){const n=i("uu-switch");return p(),f($,null,[e(n,{value:u.bool,"onUpdate:value":s[0]||(s[0]=c=>u.bool=c),size:"large"},null,8,["value"]),zu,e(n,{value:u.bool,"onUpdate:value":s[1]||(s[1]=c=>u.bool=c)},null,8,["value"]),Pu,e(n,{value:u.bool,"onUpdate:value":s[2]||(s[2]=c=>u.bool=c),size:"small"},null,8,["value"])],64)}typeof Hn=="function"&&Hn(Nn);var Ru=m(Nn,[["render",Ou]]),zn=t=>{t.__sourceCode=`<template>\r
  <uu-switch v-model:value="bool" activeText="\u662F" inActiveText="\u5426" />\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "vue";\r
import { UuSwitch } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuSwitch,\r
  },\r
  setup() {\r
    const bool = ref(false);\r
    return {\r
      bool,\r
    };\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u652F\u6301\u6DFB\u52A0\u6587\u5B57\u63CF\u8FF0 "};const Pn={components:{UuSwitch:k},setup(){return{bool:C(!1)}}};function ju(t,s,_,u,d,a){const n=i("uu-switch");return p(),v(n,{value:u.bool,"onUpdate:value":s[0]||(s[0]=c=>u.bool=c),activeText:"\u662F",inActiveText:"\u5426"},null,8,["value"])}typeof zn=="function"&&zn(Pn);var qu=m(Pn,[["render",ju]]);const Wu={components:{Demo:x},setup(){return{Switch1Demo:Su,Switch2Demo:Vu,Switch3Demo:Nu,Switch4Demo:Ru,Switch5Demo:qu}}},Gu=r("h1",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1);function Ku(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[Gu,e(n,{component:u.Switch1Demo},null,8,["component"]),e(n,{component:u.Switch2Demo},null,8,["component"]),e(n,{component:u.Switch3Demo},null,8,["component"]),e(n,{component:u.Switch4Demo},null,8,["component"]),e(n,{component:u.Switch5Demo},null,8,["component"])])}var Xu=m(Wu,[["render",Ku]]),On=t=>{t.__sourceCode=`<template>\r
  <uu-container>\r
    <uu-header>header</uu-header>\r
    <uu-main>main</uu-main>\r
    <uu-footer>footer</uu-footer>\r
  </uu-container>\r
</template>\r
\r
<script lang="ts">\r
import { UuContainer, UuAside, UuMain, UuHeader, UuFooter } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuContainer,\r
    UuAside,\r
    UuMain,\r
    UuHeader,\r
    UuFooter,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u793A\u4F8B\u4E00 "};const Rn={components:{UuContainer:E,UuAside:F,UuMain:A,UuHeader:M,UuFooter:I}},Ju=l("header"),Qu=l("main"),Yu=l("footer");function Zu(t,s,_,u,d,a){const n=i("uu-header"),c=i("uu-main"),h=i("uu-footer"),T=i("uu-container");return p(),v(T,null,{default:o(()=>[e(n,null,{default:o(()=>[Ju]),_:1}),e(c,null,{default:o(()=>[Qu]),_:1}),e(h,null,{default:o(()=>[Yu]),_:1})]),_:1})}typeof On=="function"&&On(Rn);var nr=m(Rn,[["render",Zu]]),jn=t=>{t.__sourceCode=`<template>\r
  <uu-container>\r
    <uu-header>header</uu-header>\r
    <uu-main>main</uu-main>\r
  </uu-container>\r
</template>\r
\r
<script lang="ts">\r
import { UuContainer, UuAside, UuMain, UuHeader, UuFooter } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuContainer,\r
    UuAside,\r
    UuMain,\r
    UuHeader,\r
    UuFooter,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u793A\u4F8B\u4E8C "};const qn={components:{UuContainer:E,UuAside:F,UuMain:A,UuHeader:M,UuFooter:I}},tr=l("header"),er=l("main");function or(t,s,_,u,d,a){const n=i("uu-header"),c=i("uu-main"),h=i("uu-container");return p(),v(h,null,{default:o(()=>[e(n,null,{default:o(()=>[tr]),_:1}),e(c,null,{default:o(()=>[er]),_:1})]),_:1})}typeof jn=="function"&&jn(qn);var ur=m(qn,[["render",or]]),Wn=t=>{t.__sourceCode=`<template>\r
  <uu-container>\r
    <uu-header>header</uu-header>\r
    <uu-container>\r
      <uu-aside>aside</uu-aside>\r
      <uu-container>\r
        <uu-main>main</uu-main>\r
        <uu-footer>footer</uu-footer>\r
      </uu-container>\r
    </uu-container>\r
  </uu-container>\r
</template>\r
\r
<script lang="ts">\r
import { UuContainer, UuAside, UuMain, UuHeader, UuFooter } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuContainer,\r
    UuAside,\r
    UuMain,\r
    UuHeader,\r
    UuFooter,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u793A\u4F8B\u4E09 "};const Gn={components:{UuContainer:E,UuAside:F,UuMain:A,UuHeader:M,UuFooter:I}},rr=l("header"),sr=l("aside"),lr=l("main"),cr=l("footer");function ar(t,s,_,u,d,a){const n=i("uu-header"),c=i("uu-aside"),h=i("uu-main"),T=i("uu-footer"),B=i("uu-container");return p(),v(B,null,{default:o(()=>[e(n,null,{default:o(()=>[rr]),_:1}),e(B,null,{default:o(()=>[e(c,null,{default:o(()=>[sr]),_:1}),e(B,null,{default:o(()=>[e(h,null,{default:o(()=>[lr]),_:1}),e(T,null,{default:o(()=>[cr]),_:1})]),_:1})]),_:1})]),_:1})}typeof Wn=="function"&&Wn(Gn);var ir=m(Gn,[["render",ar]]),Kn=t=>{t.__sourceCode=`<template>\r
  <uu-container>\r
    <uu-aside>aside</uu-aside>\r
    <uu-main>main</uu-main>\r
  </uu-container>\r
</template>\r
\r
<script lang="ts">\r
import { UuContainer, UuAside, UuMain, UuHeader, UuFooter } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuContainer,\r
    UuAside,\r
    UuMain,\r
    UuHeader,\r
    UuFooter,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u793A\u4F8B\u56DB "};const Xn={components:{UuContainer:E,UuAside:F,UuMain:A,UuHeader:M,UuFooter:I}},dr=l("aside"),_r=l("main");function pr(t,s,_,u,d,a){const n=i("uu-aside"),c=i("uu-main"),h=i("uu-container");return p(),v(h,null,{default:o(()=>[e(n,null,{default:o(()=>[dr]),_:1}),e(c,null,{default:o(()=>[_r]),_:1})]),_:1})}typeof Kn=="function"&&Kn(Xn);var mr=m(Xn,[["render",pr]]),Jn=t=>{t.__sourceCode=`<template>\r
  <uu-container>\r
    <uu-aside>aside</uu-aside>\r
    <uu-container>\r
      <uu-header>header</uu-header>\r
      <uu-main>main</uu-main>\r
      <uu-footer>footer</uu-footer>\r
    </uu-container>\r
  </uu-container>\r
</template>\r
\r
<script lang="ts">\r
import { UuContainer, UuAside, UuMain, UuHeader, UuFooter } from "uu-ui-vue3";\r
export default {\r
  components: {\r
    UuContainer,\r
    UuAside,\r
    UuMain,\r
    UuHeader,\r
    UuFooter,\r
  },\r
};\r
<\/script>`,t.__sourceTitle=" \u793A\u4F8B\u4E94 "};const Qn={components:{UuContainer:E,UuAside:F,UuMain:A,UuHeader:M,UuFooter:I}},fr=l("aside"),hr=l("header"),vr=l("main"),gr=l("footer");function br(t,s,_,u,d,a){const n=i("uu-aside"),c=i("uu-header"),h=i("uu-main"),T=i("uu-footer"),B=i("uu-container");return p(),v(B,null,{default:o(()=>[e(n,null,{default:o(()=>[fr]),_:1}),e(B,null,{default:o(()=>[e(c,null,{default:o(()=>[hr]),_:1}),e(h,null,{default:o(()=>[vr]),_:1}),e(T,null,{default:o(()=>[gr]),_:1})]),_:1})]),_:1})}typeof Jn=="function"&&Jn(Qn);var $r=m(Qn,[["render",br]]);const Cr={components:{Demo:x},setup(){return{ContainerDemo1:nr,ContainerDemo2:ur,ContainerDemo3:ir,ContainerDemo4:mr,ContainerDemo5:$r}}},xr={class:"container-demo"},Ur=r("h1",null,"Container \u7EC4\u4EF6\u793A\u4F8B",-1),yr=r("p",null,"\u7528\u4E8E\u5E03\u5C40\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u5FEB\u901F\u642D\u5EFA\u9875\u9762\u7684\u57FA\u672C\u7ED3\u6784\uFF1A",-1),Br=r("p",null," <uu-container>\uFF1A\u5916\u5C42\u5BB9\u5668\u3002 \u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B <uu-header> \u6216 <uu-footer> \u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u5782\u76F4\u4E0A\u4E0B\u6392\u5217\uFF0C \u5426\u5219\u4F1A\u6C34\u5E73\u5DE6\u53F3\u6392\u5217\u3002 ",-1),wr=r("p",null,"<uu-header>\uFF1A\u9876\u680F\u5BB9\u5668\u3002",-1),Tr=r("p",null,"<uu-aside>\uFF1A\u4FA7\u8FB9\u680F\u5BB9\u5668\u3002",-1),Dr=r("p",null,"<uu-main>\uFF1A\u4E3B\u8981\u533A\u57DF\u5BB9\u5668\u3002",-1),kr=r("p",null,"<uu-footer>\uFF1A\u5E95\u680F\u5BB9\u5668\u3002",-1),Er=r("p",{class:"tip"},[r("strong",null,"\u6CE8\u610F\uFF1A"),l("\u4EE5\u4E0A\u7EC4\u4EF6\u91C7\u7528\u4E86 flex \u5E03\u5C40\uFF0C\u4F7F\u7528\u524D\u8BF7\u786E\u5B9A\u76EE\u6807\u6D4F\u89C8\u5668\u662F\u5426\u517C\u5BB9\u3002 \u6B64\u5916\uFF0C <uu-container>\u7684\u76F4\u63A5\u5B50\u5143\u7D20\u5FC5\u987B\u662F\u540E\u56DB\u4E2A\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u3002 \u540E\u56DB\u4E2A\u7EC4\u4EF6\u7684\u4EB2\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A <uu-container> ")],-1),Fr=R("<h2>\u76F8\u5173\u5C5E\u6027\u8BF4\u660E</h2><table><thead><tr><td>\u7EC4\u4EF6\u540D\u79F0</td><td>\u5C5E\u6027</td><td>\u8BF4\u660E</td><td>\u7C7B\u578B</td><td>\u9ED8\u8BA4\u503C</td></tr></thead><tbody><tr><td>Header \u7EC4\u4EF6</td><td>height</td><td>\u9876\u680F\u9AD8\u5EA6</td><td>string/number</td><td>50</td></tr><tr><td>Main \u7EC4\u4EF6</td><td>height</td><td>\u4E3B\u680F\u9AD8\u5EA6</td><td>string/number</td><td>100</td></tr><tr><td>Footer \u7EC4\u4EF6</td><td>height</td><td>\u5E95\u680F\u9AD8\u5EA6</td><td>string/number</td><td>50</td></tr><tr><td>Aside \u7EC4\u4EF6</td><td>width</td><td>\u4FA7\u680F\u5BBD\u5EA6</td><td>string/number</td><td>50</td></tr></tbody></table>",2);function Ar(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",xr,[Ur,yr,Br,wr,Tr,Dr,kr,Er,e(n,{component:u.ContainerDemo1},null,8,["component"]),e(n,{component:u.ContainerDemo2},null,8,["component"]),e(n,{component:u.ContainerDemo3},null,8,["component"]),e(n,{component:u.ContainerDemo4},null,8,["component"]),e(n,{component:u.ContainerDemo5},null,8,["component"]),Fr])}var Mr=m(Cr,[["render",Ar]]);var Yn=t=>{t.__sourceCode=`<template>\r
  <uu-row>\r
    <uu-col>\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :span="6">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="6">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :span="4">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="4">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="4">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
</template>\r
\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u57FA\u7840\u5E03\u5C40--span "};const Zn={components:{UuCol:U,UuRow:y}},Ir=r("div",{class:"colContent lightBlue"},null,-1),Sr=r("div",{class:"colContent lightBlue"},null,-1),Lr=r("div",{class:"colContent grayColor"},null,-1),Vr=r("div",{class:"colContent lightBlue"},null,-1),Hr=r("div",{class:"colContent grayColor"},null,-1),Nr=r("div",{class:"colContent lightBlue"},null,-1),zr=r("div",{class:"colContent lightBlue"},null,-1),Pr=r("div",{class:"colContent grayColor"},null,-1),Or=r("div",{class:"colContent lightBlue"},null,-1),Rr=r("div",{class:"colContent grayColor"},null,-1);function jr(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),f($,null,[e(c,null,{default:o(()=>[e(n,null,{default:o(()=>[Ir]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{span:6},{default:o(()=>[Sr]),_:1}),e(n,{span:6},{default:o(()=>[Lr]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{span:4},{default:o(()=>[Vr]),_:1}),e(n,{span:4},{default:o(()=>[Hr]),_:1}),e(n,{span:4},{default:o(()=>[Nr]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{span:3},{default:o(()=>[zr]),_:1}),e(n,{span:3},{default:o(()=>[Pr]),_:1}),e(n,{span:3},{default:o(()=>[Or]),_:1}),e(n,{span:3},{default:o(()=>[Rr]),_:1})]),_:1})],64)}typeof Yn=="function"&&Yn(Zn);var qr=m(Zn,[["render",jr]]);var nt=t=>{t.__sourceCode=`<template>\r
  <uu-row :gutter="20">\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
</template>\r
\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u5206\u680F\u95F4\u9694--gutter "};const tt={components:{UuCol:U,UuRow:y}},Wr=r("div",{class:"colContent lightBlue"},null,-1),Gr=r("div",{class:"colContent grayColor"},null,-1),Kr=r("div",{class:"colContent lightBlue"},null,-1),Xr=r("div",{class:"colContent grayColor"},null,-1);function Jr(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),v(c,{gutter:20},{default:o(()=>[e(n,{span:3},{default:o(()=>[Wr]),_:1}),e(n,{span:3},{default:o(()=>[Gr]),_:1}),e(n,{span:3},{default:o(()=>[Kr]),_:1}),e(n,{span:3},{default:o(()=>[Xr]),_:1})]),_:1})}typeof nt=="function"&&nt(tt);var Qr=m(tt,[["render",Jr]]);var et=t=>{t.__sourceCode=`<template>\r
  <uu-row>\r
    <uu-col :span="8">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="4">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :span="4">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="4">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="2">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="2">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :span="2">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="8">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="2">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
</template>\r
\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u6DF7\u5408\u5E03\u5C40 "};const ot={components:{UuCol:U,UuRow:y}},Yr=r("div",{class:"colContent lightBlue"},null,-1),Zr=r("div",{class:"colContent grayColor"},null,-1),ns=r("div",{class:"colContent lightBlue"},null,-1),ts=r("div",{class:"colContent grayColor"},null,-1),es=r("div",{class:"colContent lightBlue"},null,-1),os=r("div",{class:"colContent grayColor"},null,-1),us=r("div",{class:"colContent lightBlue"},null,-1),rs=r("div",{class:"colContent grayColor"},null,-1),ss=r("div",{class:"colContent lightBlue"},null,-1);function ls(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),f($,null,[e(c,null,{default:o(()=>[e(n,{span:8},{default:o(()=>[Yr]),_:1}),e(n,{span:4},{default:o(()=>[Zr]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{span:4},{default:o(()=>[ns]),_:1}),e(n,{span:4},{default:o(()=>[ts]),_:1}),e(n,{span:2},{default:o(()=>[es]),_:1}),e(n,{span:2},{default:o(()=>[os]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{span:2},{default:o(()=>[us]),_:1}),e(n,{span:8},{default:o(()=>[rs]),_:1}),e(n,{span:2},{default:o(()=>[ss]),_:1})]),_:1})],64)}typeof et=="function"&&et(ot);var cs=m(ot,[["render",ls]]);var ut=t=>{t.__sourceCode=`<template>\r
  <uu-row>\r
    <uu-col :span="8">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="2" :offset="2">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :span="3" :offset="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3" :offset="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row>\r
    <uu-col :offset="4" :span="4">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
</template>\r
\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u5217\u504F\u79FB--offset "};const rt={components:{UuCol:U,UuRow:y}},as=r("div",{class:"colContent lightBlue"},null,-1),is=r("div",{class:"colContent grayColor"},null,-1),ds=r("div",{class:"colContent lightBlue"},null,-1),_s=r("div",{class:"colContent grayColor"},null,-1),ps=r("div",{class:"colContent lightBlue"},null,-1);function ms(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),f($,null,[e(c,null,{default:o(()=>[e(n,{span:8},{default:o(()=>[as]),_:1}),e(n,{span:2,offset:2},{default:o(()=>[is]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{span:3,offset:3},{default:o(()=>[ds]),_:1}),e(n,{span:3,offset:3},{default:o(()=>[_s]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(n,{offset:4,span:4},{default:o(()=>[ps]),_:1})]),_:1})],64)}typeof ut=="function"&&ut(rt);var fs=m(rt,[["render",ms]]);var st=t=>{t.__sourceCode=`<template>\r
  <uu-row>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row justify="center">\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row justify="end">\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row justify="space-between">\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row justify="space-around">\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
  <uu-row justify="space-evenly">\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent grayColor"></div>\r
    </uu-col>\r
    <uu-col :span="3">\r
      <div class="colContent lightBlue"></div>\r
    </uu-col>\r
  </uu-row>\r
</template>\r
\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u5BF9\u9F50\u65B9\u5F0F--justify "};const lt={components:{UuCol:U,UuRow:y}},hs=r("div",{class:"colContent lightBlue"},null,-1),vs=r("div",{class:"colContent grayColor"},null,-1),gs=r("div",{class:"colContent lightBlue"},null,-1),bs=r("div",{class:"colContent lightBlue"},null,-1),$s=r("div",{class:"colContent grayColor"},null,-1),Cs=r("div",{class:"colContent lightBlue"},null,-1),xs=r("div",{class:"colContent lightBlue"},null,-1),Us=r("div",{class:"colContent grayColor"},null,-1),ys=r("div",{class:"colContent lightBlue"},null,-1),Bs=r("div",{class:"colContent lightBlue"},null,-1),ws=r("div",{class:"colContent grayColor"},null,-1),Ts=r("div",{class:"colContent lightBlue"},null,-1),Ds=r("div",{class:"colContent lightBlue"},null,-1),ks=r("div",{class:"colContent grayColor"},null,-1),Es=r("div",{class:"colContent lightBlue"},null,-1),Fs=r("div",{class:"colContent lightBlue"},null,-1),As=r("div",{class:"colContent grayColor"},null,-1),Ms=r("div",{class:"colContent lightBlue"},null,-1);function Is(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),f($,null,[e(c,null,{default:o(()=>[e(n,{span:3},{default:o(()=>[hs]),_:1}),e(n,{span:3},{default:o(()=>[vs]),_:1}),e(n,{span:3},{default:o(()=>[gs]),_:1})]),_:1}),e(c,{justify:"center"},{default:o(()=>[e(n,{span:3},{default:o(()=>[bs]),_:1}),e(n,{span:3},{default:o(()=>[$s]),_:1}),e(n,{span:3},{default:o(()=>[Cs]),_:1})]),_:1}),e(c,{justify:"end"},{default:o(()=>[e(n,{span:3},{default:o(()=>[xs]),_:1}),e(n,{span:3},{default:o(()=>[Us]),_:1}),e(n,{span:3},{default:o(()=>[ys]),_:1})]),_:1}),e(c,{justify:"space-between"},{default:o(()=>[e(n,{span:3},{default:o(()=>[Bs]),_:1}),e(n,{span:3},{default:o(()=>[ws]),_:1}),e(n,{span:3},{default:o(()=>[Ts]),_:1})]),_:1}),e(c,{justify:"space-around"},{default:o(()=>[e(n,{span:3},{default:o(()=>[Ds]),_:1}),e(n,{span:3},{default:o(()=>[ks]),_:1}),e(n,{span:3},{default:o(()=>[Es]),_:1})]),_:1}),e(c,{justify:"space-evenly"},{default:o(()=>[e(n,{span:3},{default:o(()=>[Fs]),_:1}),e(n,{span:3},{default:o(()=>[As]),_:1}),e(n,{span:3},{default:o(()=>[Ms]),_:1})]),_:1})],64)}typeof st=="function"&&st(lt);var Ss=m(lt,[["render",Is]]);var ct=t=>{t.__sourceCode=`<template>\r
  <uu-row :gutter="10">\r
    <uu-col :xs="4" :sm="3" :md="2" :lg="5" :xl="1">\r
      <div class="colContent lightBlue" />\r
    </uu-col>\r
    <uu-col :xs="2" :sm="3" :md="4" :lg="1" :xl="5">\r
      <div class="colContent grayColor" />\r
    </uu-col>\r
    <uu-col :xs="2" :sm="3" :md="4" :lg="1" :xl="5">\r
      <div class="colContent lightBlue" />\r
    </uu-col>\r
    <uu-col :xs="4" :sm="3" :md="2" :lg="5" :xl="1">\r
      <div class="colContent grayColor" />\r
    </uu-col>\r
  </uu-row>\r
</template>\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u54CD\u5E94\u5F0F\u5E03\u5C40\uFF0C\u652F\u6301\u4E94\u79CD\u5C3A\u5BF8\uFF1Axs\u3001sm\u3001md\u3001lg\u3001xl "};const at={components:{UuCol:U,UuRow:y}},Ls=r("div",{class:"colContent lightBlue"},null,-1),Vs=r("div",{class:"colContent grayColor"},null,-1),Hs=r("div",{class:"colContent lightBlue"},null,-1),Ns=r("div",{class:"colContent grayColor"},null,-1);function zs(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),v(c,{gutter:10},{default:o(()=>[e(n,{xs:4,sm:3,md:2,lg:5,xl:1},{default:o(()=>[Ls]),_:1}),e(n,{xs:2,sm:3,md:4,lg:1,xl:5},{default:o(()=>[Vs]),_:1}),e(n,{xs:2,sm:3,md:4,lg:1,xl:5},{default:o(()=>[Hs]),_:1}),e(n,{xs:4,sm:3,md:2,lg:5,xl:1},{default:o(()=>[Ns]),_:1})]),_:1})}typeof ct=="function"&&ct(at);var Ps=m(at,[["render",zs]]);var it=t=>{t.__sourceCode=`<template>\r
  <uu-row :gutter="10">\r
    <uu-col :xs="3" :sm="3" :md="2" :lg="5" :xl="1" :xlOffset="2" :xsOffset="1">\r
      <div class="colContent lightBlue" />\r
    </uu-col>\r
    <uu-col :xs="2" :sm="3" :md="4" :lg="1" :xl="4">\r
      <div class="colContent grayColor" />\r
    </uu-col>\r
    <uu-col :xs="2" :sm="3" :md="4" :lg="1" :xl="4">\r
      <div class="colContent lightBlue" />\r
    </uu-col>\r
    <uu-col :xs="4" :sm="3" :md="2" :lg="5" :xl="1">\r
      <div class="colContent grayColor" />\r
    </uu-col>\r
  </uu-row>\r
</template>\r
<script lang="ts">\r
import { UuCol, UuRow } from "uu-ui-vue3";\r
export default {\r
  components: { UuCol, UuRow },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
.uu-row {\r
  margin-bottom: 10px;\r
}\r
\r
.uu-row:last-child {\r
  margin-bottom: 0px;\r
}\r
\r
.colContent {\r
  min-height: 36px;\r
}\r
\r
.lightBlue {\r
  background-color: rgba(173, 216, 230, 1);\r
}\r
\r
.grayColor {\r
  background-color: #d9d9d9;\r
}\r
</style>`,t.__sourceTitle=" \u54CD\u5E94\u5F0F\u5E03\u5C40\uFF0C\u652F\u6301\u4E94\u79CD offset\uFF1AxsOffset\u3001smOffset\u3001mdOffset\u3001lgOffset\u3001xlOffset "};const dt={components:{UuCol:U,UuRow:y}},Os=r("div",{class:"colContent lightBlue"},null,-1),Rs=r("div",{class:"colContent grayColor"},null,-1),js=r("div",{class:"colContent lightBlue"},null,-1),qs=r("div",{class:"colContent grayColor"},null,-1);function Ws(t,s,_,u,d,a){const n=i("uu-col"),c=i("uu-row");return p(),v(c,{gutter:10},{default:o(()=>[e(n,{xs:3,sm:3,md:2,lg:5,xl:1,xlOffset:2,xsOffset:1},{default:o(()=>[Os]),_:1}),e(n,{xs:2,sm:3,md:4,lg:1,xl:4},{default:o(()=>[Rs]),_:1}),e(n,{xs:2,sm:3,md:4,lg:1,xl:4},{default:o(()=>[js]),_:1}),e(n,{xs:4,sm:3,md:2,lg:5,xl:1},{default:o(()=>[qs]),_:1})]),_:1})}typeof it=="function"&&it(dt);var Gs=m(dt,[["render",Ws]]);const Ks={components:{Demo:x},setup(){return{Layout1Demo:qr,Layout2Demo:Qr,Layout3Demo:cs,Layout4Demo:fs,Layout5Demo:Ss,Layout6Demo:Ps,Layout7Demo:Gs}}},Xs=r("h1",null,"Layout \u7EC4\u4EF6\u793A\u4F8B",-1);function Js(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[Xs,e(n,{component:u.Layout1Demo},null,8,["component"]),e(n,{component:u.Layout2Demo},null,8,["component"]),e(n,{component:u.Layout3Demo},null,8,["component"]),e(n,{component:u.Layout4Demo},null,8,["component"]),e(n,{component:u.Layout5Demo},null,8,["component"]),e(n,{component:u.Layout6Demo},null,8,["component"]),e(n,{component:u.Layout7Demo},null,8,["component"])])}var Qs=m(Ks,[["render",Js]]),_t=t=>{t.__sourceCode=`<template>\r
  <uu-button @click="openText">show text</uu-button>\r
  <uu-button @click="openVnode">show vnode</uu-button>\r
</template>\r
    \r
<script lang="ts">\r
import { h } from "vue";\r
import { UuButton, openUuMessage } from "uu-ui-vue3";\r
export default {\r
  components: { UuButton },\r
  methods: {\r
    openText() {\r
      openUuMessage("This is a message.");\r
    },\r
    openVnode() {\r
      openUuMessage({\r
        message: h("p", null, [\r
          h("span", null, "Message can be "),\r
          h("i", { style: "color: lightBlue" }, "VNode."),\r
        ]),\r
      });\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u5E38\u89C4\u7528\u6CD5\uFF0C\u65E2\u53EF\u4EE5\u6E32\u67D3\u666E\u901A\u6587\u672C\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u7EC4\u4EF6 "};const pt={components:{UuButton:g},methods:{openText(){b("This is a message.")},openVnode(){b({message:D("p",null,[D("span",null,"Message can be "),D("i",{style:"color: lightBlue"},"VNode.")])})}}},Ys=l("show text"),Zs=l("show vnode");function nl(t,s,_,u,d,a){const n=i("uu-button");return p(),f($,null,[e(n,{onClick:a.openText},{default:o(()=>[Ys]),_:1},8,["onClick"]),e(n,{onClick:a.openVnode},{default:o(()=>[Zs]),_:1},8,["onClick"])],64)}typeof _t=="function"&&_t(pt);var tl=m(pt,[["render",nl]]),mt=t=>{t.__sourceCode=`<template>\r
  <uu-button @click="openText">show text</uu-button>\r
  <uu-button @click="openSuccessText">show success text</uu-button>\r
  <uu-button @click="openWarnText">show warn text</uu-button>\r
  <uu-button @click="openErrorText">show error text</uu-button>\r
</template>\r
    \r
<script lang="ts">\r
import { UuButton, openUuMessage } from "uu-ui-vue3";\r
export default {\r
  components: { UuButton },\r
  methods: {\r
    openText() {\r
      openUuMessage("This is a message.");\r
    },\r
    openSuccessText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        type: "success",\r
      });\r
    },\r
    openWarnText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        type: "warn",\r
      });\r
    },\r
    openErrorText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        type: "error",\r
      });\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301\u56DB\u79CD\u7C7B\u578B\uFF1Ainfo\uFF08\u9ED8\u8BA4\uFF09\u3001success\u3001warn\u3001error "};const ft={components:{UuButton:g},methods:{openText(){b("This is a message.")},openSuccessText(){b({message:"This is a message.",type:"success"})},openWarnText(){b({message:"This is a message.",type:"warn"})},openErrorText(){b({message:"This is a message.",type:"error"})}}},el=l("show text"),ol=l("show success text"),ul=l("show warn text"),rl=l("show error text");function sl(t,s,_,u,d,a){const n=i("uu-button");return p(),f($,null,[e(n,{onClick:a.openText},{default:o(()=>[el]),_:1},8,["onClick"]),e(n,{onClick:a.openSuccessText},{default:o(()=>[ol]),_:1},8,["onClick"]),e(n,{onClick:a.openWarnText},{default:o(()=>[ul]),_:1},8,["onClick"]),e(n,{onClick:a.openErrorText},{default:o(()=>[rl]),_:1},8,["onClick"])],64)}typeof mt=="function"&&mt(ft);var ll=m(ft,[["render",sl]]),ht=t=>{t.__sourceCode=`<template>\r
  <uu-button @click="openText">show text</uu-button>\r
  <uu-button @click="openSuccessText">show success text</uu-button>\r
  <uu-button @click="openWarnText">show warn text</uu-button>\r
  <uu-button @click="openErrorText">show error text</uu-button>\r
</template>\r
    \r
<script lang="ts">\r
import { UuButton, openUuMessage } from "uu-ui-vue3";\r
export default {\r
  components: { UuButton },\r
  methods: {\r
    openText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        showClose: true,\r
      });\r
    },\r
    openSuccessText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        type: "success",\r
        showClose: true,\r
      });\r
    },\r
    openWarnText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        type: "warn",\r
        showClose: true,\r
      });\r
    },\r
    openErrorText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        type: "error",\r
        showClose: true,\r
      });\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301 showClose\uFF1A\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A\u5173\u95ED\u6D88\u606F\u6846\u56FE\u6807 "};const vt={components:{UuButton:g},methods:{openText(){b({message:"This is a message.",showClose:!0})},openSuccessText(){b({message:"This is a message.",type:"success",showClose:!0})},openWarnText(){b({message:"This is a message.",type:"warn",showClose:!0})},openErrorText(){b({message:"This is a message.",type:"error",showClose:!0})}}},cl=l("show text"),al=l("show success text"),il=l("show warn text"),dl=l("show error text");function _l(t,s,_,u,d,a){const n=i("uu-button");return p(),f($,null,[e(n,{onClick:a.openText},{default:o(()=>[cl]),_:1},8,["onClick"]),e(n,{onClick:a.openSuccessText},{default:o(()=>[al]),_:1},8,["onClick"]),e(n,{onClick:a.openWarnText},{default:o(()=>[il]),_:1},8,["onClick"]),e(n,{onClick:a.openErrorText},{default:o(()=>[dl]),_:1},8,["onClick"])],64)}typeof ht=="function"&&ht(vt);var pl=m(vt,[["render",_l]]),gt=t=>{t.__sourceCode=`<template>\r
  <uu-button @click="defaultDuration">\u9ED8\u8BA4 duration</uu-button>\r
  <uu-button @click="setDuration1">duration \u8BBE\u4E3A 1</uu-button>\r
  <uu-button @click="setDuration0">duration \u8BBE\u4E3A 0</uu-button>\r
</template>\r
    \r
<script lang="ts">\r
import { h } from "@vue/runtime-core";\r
import { UuButton, openUuMessage } from "uu-ui-vue3";\r
export default {\r
  components: { UuButton },\r
  methods: {\r
    defaultDuration() {\r
      openUuMessage("This is a message.");\r
    },\r
    setDuration1() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        duration: 1,\r
      });\r
    },\r
    setDuration0() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        duration: 0,\r
        showClose: true,\r
      });\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301 duration\uFF0C\u8868\u793A\u6D88\u606F\u6846\u5728 duration \u79D2\u540E\u81EA\u52A8\u5173\u95ED\uFF0C\u9ED8\u8BA4\u503C\u4E3A 3\uFF0C\u5982\u679C\u8BE5\u503C\u8BBE\u4E3A 0 \uFF0C\u8868\u793A\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u3002 "};const bt={components:{UuButton:g},methods:{defaultDuration(){b("This is a message.")},setDuration1(){b({message:"This is a message.",duration:1})},setDuration0(){b({message:"This is a message.",duration:0,showClose:!0})}}},ml=l("\u9ED8\u8BA4 duration"),fl=l("duration \u8BBE\u4E3A 1"),hl=l("duration \u8BBE\u4E3A 0");function vl(t,s,_,u,d,a){const n=i("uu-button");return p(),f($,null,[e(n,{onClick:a.defaultDuration},{default:o(()=>[ml]),_:1},8,["onClick"]),e(n,{onClick:a.setDuration1},{default:o(()=>[fl]),_:1},8,["onClick"]),e(n,{onClick:a.setDuration0},{default:o(()=>[hl]),_:1},8,["onClick"])],64)}typeof gt=="function"&&gt(bt);var gl=m(bt,[["render",vl]]),$t=t=>{t.__sourceCode=`<template>\r
  <uu-button @click="openText">show text</uu-button>\r
</template>\r
    \r
<script lang="ts">\r
import { UuButton, openUuMessage } from "uu-ui-vue3";\r
export default {\r
  components: { UuButton },\r
  methods: {\r
    openText() {\r
      openUuMessage({\r
        message: "This is a message.",\r
        center: true,\r
      });\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301 center\uFF1A\u8BA9\u6587\u5B57\u5C45\u4E2D "};const Ct={components:{UuButton:g},methods:{openText(){b({message:"This is a message.",center:!0})}}},bl=l("show text");function $l(t,s,_,u,d,a){const n=i("uu-button");return p(),v(n,{onClick:a.openText},{default:o(()=>[bl]),_:1},8,["onClick"])}typeof $t=="function"&&$t(Ct);var Cl=m(Ct,[["render",$l]]),xt=t=>{t.__sourceCode=`<template>\r
  <uu-button @click="openText">show html content</uu-button>\r
</template>\r
    \r
<script lang="ts">\r
import { UuButton, openUuMessage } from "uu-ui-vue3";\r
export default {\r
  components: { UuButton },\r
  methods: {\r
    openText() {\r
      openUuMessage({\r
        message: "<p>This is a <i>message</i>.</p>",\r
        dangerouslyUseHTMLString: true,\r
      });\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss">\r
</style>`,t.__sourceTitle=" \u652F\u6301\u4F7F\u7528 HTML \u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9\uFF0C\u9700\u8981\u8BBE\u7F6E dangerouslyUseHTMLString \u4E3A true "};const Ut={components:{UuButton:g},methods:{openText(){b({message:"<p>This is a <i>message</i>.</p>",dangerouslyUseHTMLString:!0})}}},xl=l("show html content");function Ul(t,s,_,u,d,a){const n=i("uu-button");return p(),v(n,{onClick:a.openText},{default:o(()=>[xl]),_:1},8,["onClick"])}typeof xt=="function"&&xt(Ut);var yl=m(Ut,[["render",Ul]]);const Bl={components:{Demo:x},setup(){return{Message1Demo:tl,Message2Demo:ll,Message3Demo:pl,Message4Demo:gl,Message5Demo:Cl,Message6Demo:yl}}},wl=r("h1",null,"Message \u7EC4\u4EF6\u793A\u4F8B",-1);function Tl(t,s,_,u,d,a){const n=i("Demo");return p(),f("div",null,[wl,e(n,{component:u.Message1Demo},null,8,["component"]),e(n,{component:u.Message2Demo},null,8,["component"]),e(n,{component:u.Message3Demo},null,8,["component"]),e(n,{component:u.Message4Demo},null,8,["component"]),e(n,{component:u.Message5Demo},null,8,["component"]),e(n,{component:u.Message6Demo},null,8,["component"])])}var Dl=m(Bl,[["render",Tl]]);const kl={props:{content:{type:String,required:!0}}},El=["innerHTML"];function Fl(t,s,_,u,d,a){return p(),f("article",{class:"markdown-body",innerHTML:_.content},null,8,El)}var Al=m(kl,[["render",Fl]]),Ml=`<h1 id="\u5B89\u88C5">\u5B89\u88C5</h1>
<p>\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A</p>
<pre><code>npm install uu-ui-vue3
</code></pre>
<p>\u6216</p>
<pre><code>yarn add uu-ui-vue3
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/get-started">\u5F00\u59CB\u4F7F\u7528</a></p>
`,Il=`<h1 id="\u4ECB\u7ECD">\u4ECB\u7ECD</h1>
<p>UU UI \u662F\u4E00\u6B3E\u57FA\u4E8E Vue 3 \u548C TypeScript \u7684 UI \u7EC4\u4EF6\u5E93\u3002</p>
<p>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u5176\u5B9E\u662F\u6211\u4E3A\u4E86\u5B66\u4E60 Vue 3 \u800C\u5199\u7684\uFF0C\u7F16\u5199\u7684\u8FC7\u7A0B\u4E2D\u5C3D\u91CF\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u4E5F\u662F\u6211\u81EA\u5DF1\u5199\u7684\uFF0C\u7EC4\u4EF6\u5E93\u76EE\u524D\u8FD8\u4E0D\u5B8C\u5584\uFF0C\u53EA\u5305\u62EC\u4E86 switch \u7EC4\u4EF6\u3001button \u7EC4\u4EF6\u3001dialog \u7EC4\u4EF6\u3001tabs \u7EC4\u4EF6\uFF0C\u540E\u7EED\u5C06\u4F1A\u6301\u7EED\u5B8C\u5584\u4E0B\u53BB\uFF0C\u611F\u8C22\u5173\u6CE8\u3002</p>
<p>\u6240\u4EE5\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\u4F60\u5C06\u6B64 UI \u5E93\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u5982\u679C\u4F60\u662F\u62B1\u7740\u770B\u6E90\u4EE3\u7801\u7684\u76EE\u7684\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E93\u8FD8\u662F\u503C\u5F97\u4E00\u770B\u7684\u3002\u6E90\u4EE3\u7801\u653E\u5728\u4E86  <a href="https://github.com/BelaXie/uu-ui-lib%EF%BC%8C">https://github.com/BelaXie/uu-ui-lib\uFF0C</a> \u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u4EE5\u4E0B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a></p>
`,Sl=`<h1 id="\u5F00\u59CB\u4F7F\u7528">\u5F00\u59CB\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<p>\u7136\u540E\u5728\u4F60\u7684\u4EE3\u7801\u4E2D\u5199\u5165\u4E0B\u9762\u7684\u4EE3\u7801</p>
<pre><code>import {Button, Tabs, Switch, Dialog} from &quot;uu-ui-vue3&quot;
import &quot;uu-ui-vue3/dist/lib/uu.css&quot;;
</code></pre>
<p>\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4E86\u3002</p>
<h2 id="vue-\u5355\u6587\u4EF6\u7EC4\u4EF6">Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h2>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;uu-button&gt;\u6309\u94AE&lt;/uu-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {Button, Tabs, Switch, Dialog} from &quot;uu-ui-vue3&quot;
export default {
  components: {Button}
}
&lt;/script&gt;
</code></pre>
`;const Ll=At(),N=t=>D(Al,{content:t,key:t}),yt=Mt({history:Ll,routes:[{path:"/",component:re},{path:"/doc",component:ye,children:[{path:"",redirect:"/doc/intro"},{path:"intro",component:N(Il)},{path:"install",component:N(Ml)},{path:"get-started",component:N(Sl)},{path:"switch",component:Xu},{path:"button",component:Lo},{path:"dialog",component:Zo},{path:"tabs",component:Mu},{path:"container",component:Mr},{path:"input",component:vu},{path:"layout",component:Qs},{path:"message",component:Dl}]}]}),Vl={setup(){const t=document.documentElement.clientWidth,s=C(!(t<=500));It("asideVisible",s),t<=500&&yt.afterEach(()=>{s.value=!1})}};function Hl(t,s,_,u,d,a){const n=i("router-view");return p(),v(n)}var Nl=m(Vl,[["render",Hl]]);const zl={props:{content:{type:String,required:!0}}},Pl=["innerHTML"];function Ol(t,s,_,u,d,a){return p(),f("article",{class:"markdown-body",innerHTML:_.content},null,8,Pl)}var Rl=m(zl,[["render",Ol]]);const Bt=St(Nl);Bt.component("markdown",Rl);Bt.use(yt).mount("#app");
