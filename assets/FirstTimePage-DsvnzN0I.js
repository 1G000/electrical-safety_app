import{f as _,r as n,w as g,B as h,N as w,E as i,c as u,Q as l,R as p,U as N,F as q,T as v,A as o,G as B}from"./index-BjIKEqiH.js";import{c as T}from"./categories-DH3DW9Od.js";import{_ as c}from"./MainSelect-DnudRE6y.js";import{_ as U}from"./TextInput-DOdbCMPI.js";import{L as k}from"./LargeButton-B99SLnUj.js";import"./VTextField-QYsDKkgX.js";import"./transition-D3RRR1gk.js";import"./VInput-B-AyeEKI.js";import"./elevation-ClR-Unkx.js";import"./index-BKArx8Ql.js";import"./VImg-DBVXlPJu.js";import"./VSelectionControl-Bb5i-ipU.js";const D={class:"wrapper"},P=i("h2",null,"Введите ваше ФИО",-1),x=i("h2",null,"Укажите Ваше подразделение",-1),E=i("h2",null,"Укажите Вашу должность",-1),C=i("h2",null,"Укажите категорию персонала",-1),K={__name:"FirstTimePage",setup(F){const b=_(()=>o.state.authToken);let a=n(""),s=n(""),r=n(""),m=n("");const y=()=>{o.commit("updateEmployeeName",a),o.commit("updateDepartament",s),o.commit("updateProfession",r),o.commit("updateCategory",m),B.push("/test")},f=_(()=>o.getters.getDepartaments);g(f);let V=[];return g(()=>s.value,d=>{V=o.getters.getProfessions(d)}),(d,t)=>(h(),w("div",D,[i("form",{onSubmit:v(y,["prevent"])},[P,u(U,{required:!0,modelValue:l(a),"onUpdate:modelValue":t[0]||(t[0]=e=>p(a)?a.value=e:a=e),label:"Фамилия, Имя, Отчество"},null,8,["modelValue"]),x,u(c,{class:"select",modelValue:l(s),"onUpdate:modelValue":t[1]||(t[1]=e=>p(s)?s.value=e:s=e),options:f.value,label:"Подразделение",required:!0},null,8,["modelValue","options"]),E,u(c,{class:"select",modelValue:l(r),"onUpdate:modelValue":t[2]||(t[2]=e=>p(r)?r.value=e:r=e),options:l(V),label:"Должность",required:!0},null,8,["modelValue","options"]),C,u(c,{class:"select",modelValue:l(m),"onUpdate:modelValue":t[3]||(t[3]=e=>p(m)?m.value=e:m=e),options:l(T),label:"Категория персонала",required:!0},null,8,["modelValue","options"]),u(k,{type:d.submit,buttonText:"Начать проверку!",required:!0},null,8,["type"]),N(" "+q(b.value),1)],32)]))}};export{K as default};
