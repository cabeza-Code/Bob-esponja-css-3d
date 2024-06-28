let pie1 = document.querySelector(".pie1")
      let pie2 = document.querySelector(".pie2") 
      let manga1 = document.querySelector(".manga1")
      let manga2 = document.querySelector(".manga2") 
      let frente = document.querySelector(".frente") 
      let nariz = document.querySelector(".nariz") 
      
      let ancho = frente.getBoundingClientRect().width;
      let alto = frente.getBoundingClientRect().height;
      
      function crear() {
          for(let i = 0;i < 10;i++){
              let crear = document.createElement("div")
              pie1.appendChild(crear);
              crear.classList.add("muchos")
              crear.style.transform += `rotatey(${i*20}deg)`
          }          
          for(let i = 0;i < 10;i++){
              let crear = document.createElement("div")
              pie2.appendChild(crear);
              crear.classList.add("muchos")
              crear.style.transform += `rotatey(${i*20}deg)`
          }          
          for(let i = 0;i < 10;i++){
              let crear = document.createElement("div")
              manga1.appendChild(crear);
              crear.classList.add("mangas1")
              crear.style.transform += `rotatey(${i*20}deg)`
          }          
          for(let i = 0;i < 10;i++){
              let crear = document.createElement("div")
              manga2.appendChild(crear);
              crear.classList.add("mangas1")
              crear.style.transform += `rotatey(${i*20}deg)`
          }                              
      }
      crear()