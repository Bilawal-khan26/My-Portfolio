var tablinks = document.getElementsByClassName("tab-links");
       var tabcontainers = document.getElementsByClassName("tab-containers");
       function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontainer of tabcontainers){
            tabcontainer.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
       }
    

    
        
       var sidemenu = document.getElementById("sidemenu");

       function openmenu(){
        sidemenu.style.right = "0";
       }
       function closemenu(){
        sidemenu.style.right = "-200px";
       }

    

  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyzI-87TCJpbJqWAsLkNiDRjro5e8V2eOUXnnYE1AM2Nc2-n4FSOT2rvdSjQjbQdSHnXQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg .innerHTML = "Message sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })