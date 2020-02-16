let form=document.querySelector("form");
     let email=document.querySelector("#email");
     let f_in=document.querySelector("#before")
     let l_out=document.querySelector("#after")
     form.addEventListener("submit",getInputText);
     function getInputText(event){
         event.preventDefault();
         let Evalue=email.value;
          let mailLegth=email.value.length;
          let sign=email.value.indexOf('@');
          let before=Evalue.slice(0,sign);
          let after=Evalue.slice(sign,mailLegth);
          f_in.value= before;
           l_out.value=after;
     }
