(()=>{"use strict";var e="";const t=e+"assets/253f7b15dd6eb9ac37984ada287333f9.jpg";class n{constructor(){this._tooltips=[]}showTooltip(e,t){const n=document.createElement("DIV");n.classList.add("form-error"),n.textContent=e;const o=performance.now();this._tooltips.push({id:o,element:n}),document.body.appendChild(n);const{right:s,top:r}=t.getBoundingClientRect();return n.style.left=`${s+5}px`,n.style.top=r+t.offsetHeight/2-n.offsetHeight/2+"px",o}removeTooltip(e){const t=this._tooltips.find((t=>t.id===e));t&&t.element.remove(),this._tooltips=this._tooltips.filter((t=>t.id!==e))}removeAllTooltip(){this._tooltips.forEach((e=>e.element.remove())),this._tooltips=[]}}function o(e){if(!document.querySelector(".loadingio-spinner-ellipsis-qp9voijkco")){console.log(e);const t=document.createElement("DIV"),n=document.createElement("DIV");t.classList.add("loadingio-spinner-ellipsis-qp9voijkco"),n.classList.add("ldio-spp6rr29era"),e.appendChild(t),t.append(n);for(let e=5;0!==e;e-=1)n.append(document.createElement("DIV"))}}function s(){document.querySelector(".loadingio-spinner-ellipsis-qp9voijkco")&&document.querySelector(".loadingio-spinner-ellipsis-qp9voijkco").remove()}const r=e+"assets/0423e9054bbc9277b0347f38f82b6921.png";class d{constructor(){this.container=null,this.input=document.querySelector(".input_name"),this.textArea=document.querySelector(".textarea_description"),this.update=!1,this.updateTicket=null,this.tooltipFactory=new n}openPopup(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");if(this.container=e,!document.querySelector(".popup_container")){const e=document.createElement("DIV"),t=document.createElement("FORM"),n=document.createElement("DIV"),o=document.createElement("P"),s=document.createElement("INPUT"),r=document.createElement("DIV"),c=document.createElement("P"),a=document.createElement("TEXTAREA"),i=document.createElement("DIV"),l=document.createElement("BUTTON"),p=document.createElement("BUTTON");t.classList.add("form_popup"),t.setAttribute("novalidate",!0),e.classList.add("popup_container"),n.classList.add("popup-control"),r.classList.add("popup-control"),o.classList.add("Input_text"),o.textContent="Краткое описание",c.classList.add("Input_text"),c.textContent="Подробное описание",s.classList.add("input_name"),s.setAttribute("required",!0),s.name="name",a.classList.add("textarea_description"),a.setAttribute("required",!0),a.name="description",i.classList.add("popup-btn"),l.classList.add("btn"),l.classList.add("btn_cancel"),l.textContent="Отмена",p.classList.add("btn"),p.classList.add("btn_save"),p.textContent="Сохранить",document.body.appendChild(e),e.prepend(t),i.prepend(l),i.prepend(p),t.prepend(i),r.prepend(a),r.prepend(c),t.prepend(r),n.prepend(s),n.prepend(o),t.prepend(n),l.addEventListener("click",(e=>{e.preventDefault(),this.updateTicket=null,this.update=!1,d.closePopup()}));let u=[];const m=(e,t)=>{u.push({name:t.name,id:this.tooltipFactory.showTooltip(e,t)})};t.addEventListener("submit",(e=>{if(e.preventDefault(),u.forEach((e=>this.tooltipFactory.removeTooltip(e.id))),u=[],t.checkValidity())this.update||(this.saveInputNote(),d.closePopup()),this.update&&(this.updateNote(),d.closePopup());else{const{elements:e}=t;[...e].forEach((e=>{const t=d.getError(e);t&&m(t,e)}))}}));const h=e=>{const t=e.target,n=d.getError(t);if(n)m(n,t);else{const e=u.find((e=>e.name===t.name));e&&this.tooltipFactory.removeTooltip(e.id)}t.removeEventListener("blur",h)};Array.from(t.elements).forEach((e=>e.addEventListener("focus",(()=>{e.addEventListener("blur",h)}))))}}renderingNote(e){const t=document.querySelector(".list_editor_container"),n=document.createElement("UL"),d=document.createElement("LI"),c=document.createElement("DIV"),a=document.createElement("LI"),i=document.createElement("P"),l=document.createElement("P"),p=document.createElement("LI"),u=document.createElement("P"),m=document.createElement("LI"),h=document.createElement("IMG"),L=document.createElement("DIV");n.classList.add("list_editor"),n.setAttribute("id",e.id),d.classList.add("status"),c.classList.add("ticket_status"),c.setAttribute("status",e.status),"true"===c.getAttribute("status")&&(c.textContent="✓"),a.classList.add("name"),i.classList.add("name_title"),l.classList.add("description"),l.classList.add("display_none"),p.classList.add("created"),u.classList.add("date_of_creation"),m.classList.add("action_edit"),h.classList.add("btn_update_img"),L.classList.add("btn_delete"),i.textContent=e.name,u.textContent=e.created,h.src=r,L.textContent="x",t.appendChild(n),m.prepend(L),m.prepend(h),n.prepend(m),p.prepend(u),n.prepend(p),a.prepend(l),a.prepend(i),n.prepend(a),d.prepend(c),n.prepend(d),h.addEventListener("click",(e=>{console.log(e),this.updateTicket=h.closest(".list_editor"),this.preUpdateNote(this.updateTicket),this.activEvent=e.target})),L.addEventListener("click",(()=>{!function(e){const t=document.createElement("DIV"),n=document.createElement("DIV"),r=document.createElement("H1"),d=document.createElement("P"),c=document.createElement("DIV"),a=document.createElement("BUTTON"),i=document.createElement("BUTTON");t.classList.add("popup_container"),d.classList.add("Input_text"),r.textContent="Удалить тикет",d.textContent="Вы уверены, что хотите удалить тикет? Это действие необратимо.",c.classList.add("popup-btn"),a.classList.add("btn"),a.classList.add("btn_cancel"),a.textContent="Отмена",i.classList.add("btn"),i.textContent="Ok",document.body.appendChild(t),t.prepend(n),c.prepend(i),c.prepend(a),n.prepend(c),n.prepend(d),n.prepend(r),a.addEventListener("click",(()=>document.querySelector(".popup_container").remove())),i.addEventListener("click",(()=>{const t=new XMLHttpRequest,n=e.getAttribute("id");t.open("DELETE",`https://helpdesk-backend-rxb4.onrender.com/deleteTicket/?id=${n}`),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(),o(e.querySelector(".name")),t.addEventListener("load",(()=>{JSON.parse(t.responseText),s()})),e.remove(),document.querySelector(".popup_container").remove()}))}(L.closest(".list_editor"))})),c.addEventListener("click",(()=>{const e=new XMLHttpRequest;e.open("POST","https://helpdesk-backend-rxb4.onrender.com/statusChanged"),e.send(c.closest(".list_editor").getAttribute("id")),""===c.textContent?(c.textContent="✓",c.setAttribute("status","true")):(c.textContent="",c.setAttribute("status","false"))})),a.addEventListener("click",(()=>{if(l.classList.contains("display_none")){const e=new XMLHttpRequest;e.open("POST","https://helpdesk-backend-rxb4.onrender.com/ticketById"),e.send(a.closest(".list_editor").getAttribute("id")),o(a),e.addEventListener("load",(()=>{const t=JSON.parse(e.responseText);l.textContent=t,s()})),l.classList.remove("display_none")}else l.classList.add("display_none")}))}static getError(e){const t=Object.keys(ValidityState.prototype).find((t=>e.name?"valid"===t?null:e.validity[t]:null));return t?{name:{valueMissing:'Заполните, пожалуйста, поле "Краткое описание"'},description:{valueMissing:'Заполните, пожалуйста, поле "Подробное описание"'}}[e.name][t]:null}static getCreationDate(){const e=new Date;let t=e.getHours(),n=e.getMinutes(),o=e.getDate(),s=e.getMonth()+1;return t<10&&(t=`0${t}`),n<10&&(n=`0${n}`),o<10&&(o=`0${o}`),s<10&&(s=`0${s}`),`${o}.${s}.${e.getFullYear()} ${t}:${n}`}static closePopup(){document.querySelectorAll(".form-error").forEach((e=>e.remove())),document.querySelector(".popup_container").remove()}saveInputNote(){const e=document.querySelector(".input_name"),t=document.querySelector(".textarea_description");null===this.data&&(this.data={});const n={name:e.value,description:t.value},r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&console.log(r.responseText)},r.open("PUT","https://helpdesk-backend-rxb4.onrender.com/createNewTicket"),r.send(JSON.stringify(n)),o(document.querySelector(".list_editor_container")),r.addEventListener("load",(()=>{if(r.status>=200&&r.status<300)try{const e=JSON.parse(r.responseText);this.renderingNote(e),s()}catch(e){console.error(e)}}))}preUpdateNote(e){this.openPopup(document.querySelector(".app_container"));const t=e.closest(".list_editor").getAttribute("id"),n=document.querySelector(".input_name"),o=document.querySelector(".textarea_description");n.value=e.querySelector(".name_title").textContent;const s=new XMLHttpRequest;s.onreadystatechange=function(){4===s.readyState&&console.log(s.responseText)},s.open("POST","https://helpdesk-backend-rxb4.onrender.com/ticketById"),s.send(t),s.addEventListener("load",(()=>{o.value=JSON.parse(s.responseText)})),this.update=!0}updateNote(){const e=this.updateTicket.closest(".list_editor").getAttribute("id"),t=document.querySelector(".input_name"),n=document.querySelector(".textarea_description"),r=this.updateTicket.closest(".list_editor").querySelector(".name_title"),d=this.updateTicket.closest(".list_editor").querySelector(".description"),c=new XMLHttpRequest,a={id:e,name:t.value,description:n.value};c.onreadystatechange=function(){4===c.readyState&&console.log(c.responseText)},c.open("PATCH","https://helpdesk-backend-rxb4.onrender.com/updateTicket"),c.send(JSON.stringify(a)),o(r.closest(".name")),c.addEventListener("load",(()=>{r.textContent=JSON.parse(c.responseText).name,d.textContent=JSON.parse(c.responseText).description,s()})),this.update=!1}}document.querySelector("body").style.backgroundImage=`url(${t})`;const c=new d,a=document.querySelector(".app_container"),i=document.querySelector(".list_editor_container"),l=document.querySelector(".btn_add"),p=new XMLHttpRequest;p.open("GET","https://helpdesk-backend-rxb4.onrender.com/allTickets"),p.withCredentials=!1,p.send(),o(i),p.addEventListener("load",(()=>{if(p.status>=200&&p.status<300)try{const e=JSON.parse(p.responseText);if(null!==e)for(const t in e)Object.prototype.hasOwnProperty.call(e,"key")||c.renderingNote(e[t]);s()}catch(e){console.error(e)}})),l.addEventListener("click",(e=>{e.preventDefault(),c.openPopup(a)}))})();
//# sourceMappingURL=main.js.map