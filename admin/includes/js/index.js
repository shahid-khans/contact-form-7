(()=>{"use strict";const e=e=>{var l;const t=e.dataset.id,r=e.querySelector('[name="name"]');let n=null!==(l=r?.value.trim())&&void 0!==l?l:"";r&&(n||(n=`${t}-${Math.floor(1e3*Math.random())}`),r.value=n),e.querySelectorAll(".tag").forEach((l=>{const t=e.querySelector('[name="tagtype"]')?.value||l.name;t&&(l.value=a(t,e))})),e.querySelectorAll("span.mail-tag").forEach((e=>{e.innerText=`[${n}]`})),e.querySelectorAll("input.mail-tag").forEach((e=>{e.value=`[${n}]`}))},a=(e,a)=>{var l,t,r;const n=null!==(l=a.querySelector(`.scope.${e}`))&&void 0!==l?l:a,c=e+(a.querySelector('[name="required"]:checked')?"*":""),o=null!==(t=a.querySelector('[name="name"]')?.value)&&void 0!==t?t:"",s=[];n.querySelectorAll(".option").forEach((e=>{"checkbox"===e.type?e.checked&&s.push(e.name):"radio"===e.type?e.checked&&!e.classList.contains("default")&&s.push(`${e.name}:${e.value}`):""!==e.value&&(e.classList.contains("filetype")?s.push(`${e.name}:${e.value.split(/[,|\s]+/).join("|")}`):e.classList.contains("color")?s.push(`${e.name}:#${e.value}`):"class"===e.name?e.value.split(" ").forEach((e=>{s.push(`class:${e}`)})):s.push(`${e.name}:${e.value}`))})),"radio"===e&&s.push("default:1");const u=null!==(r=n.querySelector('[name="values"]')?.value.split("\n").map((e=>e.trim())).filter((e=>""!==e)).map((e=>`"${e.replace(/["]/g,"&quot;")}"`)))&&void 0!==r?r:[],i=[c,o,s.join(" "),u.join(" ")].map((e=>e.trim())).filter((e=>""!==e)),v=n.querySelector('[name="content"]')?.value.trim();return v?`[${i.join(" ")}] ${v} [/${c}]`:`[${i.join(" ")}]`};document.querySelectorAll("#tag-generator-list button").forEach((a=>{a.addEventListener("click",(l=>{const t=document.querySelector(`#${a.dataset.target}`);if(t){const a=t.querySelector("form.tag-generator-panel");a&&"1"===a.dataset.version&&(a=>{e(a),a.querySelectorAll(".control-box").forEach((l=>{l.addEventListener("change",(l=>{var t;"name"===(t=l.target).name&&(t.value=t.value.replace(/[^0-9a-zA-Z:._-]/g,"").replace(/^[^a-zA-Z]+/,"")),t.classList.contains("numeric")&&(t.value=t.value.replace(/[^0-9.-]/g,"")),t.classList.contains("idvalue")&&(t.value=t.value.replace(/[^-0-9a-zA-Z_]/g,"")),t.classList.contains("classvalue")&&(t.value=t.value.split(" ").map((e=>e.replace(/[^-0-9a-zA-Z_]/g,""))).join(" ").replace(/\s+/g," ").trim()),t.classList.contains("color")&&(t.value=t.value.replace(/[^0-9a-fA-F]/g,"")),t.classList.contains("filesize")&&(t.value=t.value.replace(/[^0-9kKmMbB]/g,"")),t.classList.contains("filetype")&&(t.value=t.value.replace(/[^0-9a-zA-Z.,|\s]/g,"")),t.classList.contains("date")&&(t.value.match(/^\d{4}-\d{2}-\d{2}$/)||(t.value="")),"values"===t.name&&(t.value=t.value.trim()),e(a)}))}))})(a),t.showModal()}}))})),document.querySelectorAll("dialog.tag-generator-dialog").forEach((e=>{e.querySelectorAll(".close-modal").forEach((a=>{a.addEventListener("click",(a=>e.close("")))})),e.querySelectorAll(".insert-tag").forEach((a=>{a.addEventListener("click",(a=>{const l=e.querySelector(".tag");e.close(l?.value)}))})),e.addEventListener("close",(a=>{var l;const t=document.querySelector("textarea#wpcf7-form");if(null===t)return;if(""===e.returnValue)return;const r=null!==(l=t.selectionEnd)&&void 0!==l?l:0;0===r&&(e.returnValue+="\n\n"),t.value=t.value.substring(0,r)+e.returnValue+t.value.substring(r),t.selectionStart=r,t.selectionEnd=r+e.returnValue.length,t.focus()}))}))})();