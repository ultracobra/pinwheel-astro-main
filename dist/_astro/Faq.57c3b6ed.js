import{m as i}from"./marked.esm.cdc2cd67.js";import{r as o}from"./index.26f5e802.js";import{j as e}from"./jsx-runtime.47a19089.js";const m=({data:c})=>{const[r,t]=o.useState([]),a=l=>{r.includes(l)?t(r.filter(s=>s!==l)):t(s=>[...s,l])};return e.jsx("section",{className:"faqs section",children:e.jsx("div",{className:"container max-w-[1230px]",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"text-center lg:col-4 lg:text-start",children:[e.jsx("h2",{children:c.faq.title}),e.jsx("p",{className:"mt-6 lg:max-w-[404px]",children:c.faq.description})]}),e.jsx("div",{className:"mt-8 lg:col-8 lg:mt-0",children:e.jsx("div",{className:"rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8",children:c.faq.faq_list.map((l,s)=>e.jsxs("div",{className:`accordion border-b border-border ${r.includes(s)?"active":void 0}`,onClick:()=>a(s),children:[e.jsxs("div",{className:"accordion-header relative pl-6 text-lg font-semibold text-dark",children:[l.title,e.jsx("svg",{className:"accordion-icon absolute left-0 top-[22px]",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:e.jsx("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),e.jsx("div",{className:"accordion-content pl-6",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:i.parseInline(l.content)}})})]},`item-${s}`))})})]})})})};export{m as default};
