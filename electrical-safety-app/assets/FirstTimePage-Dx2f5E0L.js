import{r as i,f as b,w as V,B as w,N as y,E as n,c as m,Q as s,R as d,T as h,A as l,G as q}from"./index-BJuf7HZa.js";import{_ as B,c as N}from"./TextInput-B8siiHdB.js";import{_ as c}from"./MainSelect-Ds94X7Ma.js";import{L as v}from"./LargeButton-Dfcd56mj.js";import"./transition-N3qcLbOC.js";import"./VInput-CO3vnKCU.js";import"./elevation-BbTmhuxT.js";import"./VImg-DYybd04w.js";const P={class:"wrapper"},U=n("h2",null,"Введите ваше ФИО",-1),D=n("h2",null,"Укажите Ваше подразделение",-1),E=n("h2",null,"Укажите Вашу должность",-1),T=n("h2",null,"Укажите категорию персонала",-1),M={__name:"FirstTimePage",setup(k){let a=i(""),o=i(""),r=i(""),u=i("");const g=()=>{l.commit("updateEmployeeName",a),l.commit("updateDepartament",o),l.commit("updateProfession",r),l.commit("updateCategory",u),q.push("/test")},f=b(()=>l.getters.getDepartaments);V(f);let _=[];return V(()=>o.value,p=>{_=l.getters.getProfessions(p)}),(p,t)=>(w(),y("div",P,[n("form",{onSubmit:h(g,["prevent"])},[U,m(B,{required:!0,modelValue:s(a),"onUpdate:modelValue":t[0]||(t[0]=e=>d(a)?a.value=e:a=e),label:"Фамилия, Имя, Отчество"},null,8,["modelValue"]),D,m(c,{class:"select",modelValue:s(o),"onUpdate:modelValue":t[1]||(t[1]=e=>d(o)?o.value=e:o=e),options:f.value,label:"Подразделение",required:!0},null,8,["modelValue","options"]),E,m(c,{class:"select",modelValue:s(r),"onUpdate:modelValue":t[2]||(t[2]=e=>d(r)?r.value=e:r=e),options:s(_),label:"Должность",required:!0},null,8,["modelValue","options"]),T,m(c,{class:"select",modelValue:s(u),"onUpdate:modelValue":t[3]||(t[3]=e=>d(u)?u.value=e:u=e),options:s(N),label:"Категория персонала",required:!0},null,8,["modelValue","options"]),m(v,{type:p.submit,buttonText:"Начать проверку!",required:!0},null,8,["type"])],32)]))}};export{M as default};
