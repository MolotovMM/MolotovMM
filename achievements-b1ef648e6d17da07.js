(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5961],{93754:function(e,n,t){var i=t(40554);e.exports=function(e){return"number"==typeof e&&e==i(e)}},17585:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/achievements",function(){return t(31974)}])},46318:function(e,n,t){"use strict";t.d(n,{Z:function(){return f},c:function(){return h}});var i=t(85893),s=t(67294),r=t(62943),o=t(69898),c=t(34269),a=t(58491),d=t(97256),l=t(6932),u=t(81869);let h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=(0,u.GA)(n);return e>=t},x=(0,r.zo)(d.xv,{defaultVariants:{size:"xxs",fontWeight:"book"},transition:"transform 0.2s, opacity 0.1s"});function f(e){let{progressValue:n=0,achievement:t,isHighlighted:r,isFirst:f,isUnlocked:v}=e,{loggedIn:g}=(0,l.ZP)(),{name:m,description:p,category:j}=t,[y,b]=(0,s.useState)(!1),w=(0,u.GA)(t),k=n/w,S=v||h(n,t),_="SPECIAL"!==j&&f,C=_||S,$=g&&"SPECIAL"!==j;return(0,i.jsxs)(d.Zb,{flex:!0,onMouseOver:()=>b(!0),css:{gap:"$md",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",padding:"$md",overflow:"hidden",["&:hover ".concat(x.toString())]:{transform:"translateY(-".concat(12,"px)")},["&:hover ".concat(x.toString(),":first-of-type")]:{opacity:0},["&:hover ".concat(x.toString(),":last-of-type")]:{opacity:1}},children:[(0,i.jsx)(o.Z,{achievement:t,size:60,css:{filter:C?"none":"grayscale(100%)",opacity:C?1:.4}}),(0,i.jsxs)(d.xu,{grow:!0,children:[(0,i.jsx)(d.X6,{size:"xs",fontWeight:"medium",children:m}),(0,i.jsxs)(d.xu,{css:{position:"relative",marginTop:"2px"},children:[(0,i.jsx)(x,{as:"div",css:{ellipsis:"SPECIAL"!==j||2},children:p||(0,u.Tu)(j,w)}),(0,i.jsx)(x,{as:"div",css:{position:"absolute",ellipsis:!0,opacity:0,top:12},children:y&&(0,i.jsx)(c.Z,{achievementId:t.id})})]}),$&&(0,i.jsxs)(d.kC,{gap:"xs",mt:"xxs",alignItems:"center",children:[(0,i.jsx)(a.k,{progress:v?1:k,progressCss:{background:S?"$green400":r?"$brand400":"$slate700"}}),(0,i.jsxs)(d.xv,{size:"xxxs",children:[Math.min(n,w),"/",w]})]})]})]})}},34269:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(85893),s=t(97256),r=t(81869),o=t(38057);function c(e){let{achievementId:n}=e,{data:t}=o.S.achievement.getAchievementRarity.useQuery({achievementId:n});return void 0===t?(0,i.jsx)(s.kC,{alignItems:"center",css:{height:20},children:(0,i.jsx)(s.N2,{css:{width:100}})}):(0,i.jsxs)(i.Fragment,{children:[(0,r.Vh)(t)," • ",t.toFixed(1),"% of users earned"]})}},58491:function(e,n,t){"use strict";t.d(n,{k:function(){return a}});var i=t(85893),s=t(62943),r=t(97256);let o=(0,s.zo)(r.xu,{backgroundColor:"$slate700",width:"100%",minWidth:"100px",borderRadius:"$rounded",display:"flex"}),c=(0,s.zo)(r.xu,{position:"relative",background:"$green400",borderRadius:"$rounded",height:"100%",width:"0%",transition:"width 0.2s ease-in-out","&::after":{content:'""',position:"absolute",inset:0,boxShadow:"none",borderRadius:"$rounded",transition:"all 0.5s",opacity:0},variants:{isIncreasing:{true:{"&::after":{opacity:1,boxShadow:"0 0 10px $colors$green400"}}}}}),a=e=>{let{css:n,height:t=4,isIncreasing:s,progress:r,progressCss:a,children:d}=e;return(0,i.jsx)(o,{css:{height:t,...n},children:(0,i.jsx)(c,{isIncreasing:s,css:{width:"".concat(100*r,"%"),...a},children:d})})}},31974:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x},default:function(){return f}});var i=t(85893),s=t(80878),r=t(46318),o=t(96873),c=t(51905),a=t(97256),d=t(6932),l=t(81869),u=t(7876),h=t(38057),x=!0;function f(){let{loggedIn:e,user:n}=(0,d.ZP)(),{data:t}=h.S.achievement.allAchievements.useQuery(void 0,{enabled:!1}),{data:x}=h.S.achievement.userAchievementCategoryProgress.useQuery(void 0,{enabled:e}),{data:f}=h.S.achievement.achievementsByUser.useQuery({userId:(null==n?void 0:n.id)||0},{enabled:e}),v=null==f?void 0:f.map(e=>e.id);return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(s.p,{title:"Achievements - Layer3",image:(0,u.X)()+"/images/og-achievements.png"}),(0,i.jsx)(c.Z,{width:"medium",children:(0,i.jsx)(a.kC,{flexDirection:"column",gap:"xxxl",mt:"xl",children:l.im.map(e=>{let n=(0,l.oM)(null==t?void 0:t.filter(n=>n.category===e));if(!n.length)return null;let s=null==x?void 0:x[e],o=n.find(e=>!(v||[]).includes(e.id)&&!(0,r.c)(s,e));return(0,i.jsxs)(a.xu,{children:[(0,i.jsx)(a.X6,{size:"sm",mb:"xxs",children:(0,l.N5)(e)}),(0,i.jsx)(a.xv,{fontWeight:"book",children:(0,l.ZC)(e)}),(0,i.jsx)(a.rj,{cols:3,mt:"md",children:n.map((n,t)=>{let s=null==v?void 0:v.includes(n.id);return(0,i.jsx)(r.Z,{achievement:n,progressValue:null==x?void 0:x[e],isFirst:0===t,isHighlighted:(null==o?void 0:o.id)===n.id,isUnlocked:s},n.id)})})]},e)})})})]})}}},function(e){e.O(0,[4824,6873,9774,2888,179],function(){return e(e.s=17585)}),_N_E=e.O()}]);