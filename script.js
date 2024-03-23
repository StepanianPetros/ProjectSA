let toggle = false
const Unis = {
    UFAR_IMA:{
        EducationLevel:10,
        Price:1000000,
        convenience:8,
        Degree:"Armenian and  European diplomas"
    },
    NPUA_IT:{
        EducationLevel:7,
        Price:750000,
        convenience:4,
        Degree:"Armenian diplomas"
    },
    AUA_DS:{
        EducationLevel:9,
        Price:1200000,
        convenience:10,
        Degree:"Armenian and American diplomas"
    },
    RAU_IT:{
        EducationLevel:5,
        Price:600000,
        convenience:6,
        Degree:"Russian and Armenian diplomas"
    },
    YSU_IKM:{
        EducationLevel:7,
        Price:800000,
        convenience:5,
        Degree:"Armenian diplomas"
    }
}
const MainInfo = {
    FirstPageUni:{
        Ufar: {
            Photo: "./Images//UFAR.png",
            Name: "UFAR",
            title: "Université française en Arménie",
            goto: "'https://www.ufar.am'"
        },
        NPUA: {
            Photo: "./Images//Polytech.png",
            Name: "NPUA",
            title: "National Polytech University of Armenia",
            goto:"'https://polytech.am/entrant-2022/'"
        },
        YSU: {
            Photo: "./Images//YSU.png",
            Name: "YSU",
            title: "Yerevan State University",
            goto:"'https://www.ysu.am'"
        },
        RAU: {
            Photo: "./Images//RAU.png",
            Name: "RAU",
            title: "Russian-Armenian University",
            goto:"'https://rau.am/am'"
        }
    },
    SecondPageUni: {
        AUA: {
            Photo: "./Images/AUA.png",
            Name: "AUA",
            title: "American University of Armenia",
            goto:"'https://aua.am/'"
        },
        EUA:{
            Photo:"./Images/EUA.png",
            Name:"EUA",
            title:"European University of Armenia",
            goto:"https://eua.am/"
        },
        Ufar: {
            Photo: "./Images//UFAR.png",
            Name: "UFAR",
            title: "Université française en Arménie",
            goto: "'https://www.ufar.am'"
        },
        NPUA: {
            Photo: "./Images//Polytech.png",
            Name: "NPUA",
            title: "National Polytech University of Armenia",
            goto:"'https://polytech.am/entrant-2022/'"
        },

    }


}

let BooksObj = {
    Hayoc:{
        title:"Hayoc Lezu 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://online.fliphtml5.com/vinew/riqy/#p=1'"
    },
    Matem:{
        title:"Matematika 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://online.fliphtml5.com/rwkgm/vzhw/#p=1'"
    },
    English:{
        title:"english 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://fliphtml5.com/kzga/sfvv/basic#google_vignette'"
    },
    Patmutyun:{
        title:"patmutyun 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://fliphtml5.com/wgtje/jfob/basic'"
    },
    Hayoc2:{
        title:"Hayoc Lezu 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://online.fliphtml5.com/vinew/riqy/#p=1'"
    },
    Matem2:{
        title:"Matematika 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://online.fliphtml5.com/rwkgm/vzhw/#p=1'"
    },
    English2:{
        title:"english 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://fliphtml5.com/kzga/sfvv/basic#google_vignette'"
    },
    Patmutyun2:{
        title:"patmutyun 2020",
        image:"./Images/book/Hayoc.jpg" ,
        link:"'https://fliphtml5.com/wgtje/jfob/basic'"
    },
}




Users = [
    {
        Name:"Petros Stepanyan",
        Login:"Admin",
        Password:"vasp"
    }, 
]

localStorage.setItem("Users", JSON.stringify(Users));

function check(){
    let Menu = document.querySelector(".MenuCart")
    let Premium = document.querySelector(".Premium")
    let Logo = document.querySelector(".MenuLogo")

    toggle ^= true

    if (toggle){
        Menu.style.display = "flex"
        Logo.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"/></svg>"
        Premium.style.display = "flex"
    } else {
        Menu.style.display = "none"
        Logo.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"54\" viewBox=\"0 -960 960 960\" width=\"63\"><path d=\"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z\"/></svg>\n"
        Premium.style.display = "none"
    }
}



function resizeElement() {
    let screenSize = window.innerWidth
    let divPart = document.querySelector("#inv")

    if(screenSize <= 900){
        divPart.classList.remove("col-3")
    } else {
        divPart.classList.add("col-3")
    }

}

window.addEventListener("resize", resizeElement);


function logoCreator(arg,val,first = ''){
    let UniBlock = document.querySelector(".BlockChain")

    UniBlock.innerHTML += `<div class="carousel-item ${first}" >
                               <div class="container">
                                    <div class="row ${arg}">
                                    </div>
                                </div>
                           </div>`

    let UniLogo = document.querySelector(`.${arg}`)

    Object.entries(val).forEach(([key, arg]) => {
        UniLogo.innerHTML += `<div class="col-6  col-sm-6 col-md-3 fixed">
                                <div class=\"Helper\">
                                    <div class=\"universitiesLogo\">
                                        <img src=${arg.Photo} alt="${arg.Name}">
                                    </div>
                                    <div class=\"universitiesTitle\">
                                        <p><b>${arg.Name}</b></p>
                                        <p>${arg.title}</p>
                                    </div>
                                    <div class=\"UniBtn\">
                                        <button type=\"reset\" onclick=\"location.href=${arg.goto}\" class=\"btn-53\">
                                            <div class=\"original\">View Page</div>
                                            <div class=\"letters\"> 
                                                <span>G</span>
                                                <span>O</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                           </div>`
    });


}

logoCreator("FirstPage",MainInfo.FirstPageUni,"active")
logoCreator("SecondPage",MainInfo.SecondPageUni)


function register(arg=false){
    let clearing = document.querySelector(".MainMenu")
    clearing.innerHTML = `
    <div class="regPage">
<form data-multi-step class="multi-step-form">
    <div class="cards" data-step>
    <h3 class="step-title">Log In</h3>
      <div class="form-group">
        <input type="email" class="LoginInp" name="email" id="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" name="password" class="PasswordInp" id="password" placeholder="password">
      </div>
      <button type="button"   class="fromBtn" onclick="Login()">Next</button>
      <p class="message">Not registered? <a href="#" data-next>Create an account</a href="#"></p>
        </div>
        
        
    <div class="cards" data-step>
        <button type="button" style=" background: none;
            color: inherit;
            border: none;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            padding-right: 100%" 
            data-previous>
               <i style="color: #56a69c" class="fas fa-arrow-alt-circle-left fa-2x" data-previous></i>
        </button>
    
    
      <h3 class="step-title">This is step 1</h3>
      
      <div class="form-group">
        <input type="email" name="email" id="email" class="newLogin" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" name="password" class="newPassword" id="password" placeholder="password">
      </div>
      <button type="button" data-next onclick="Reg()" class="fromBtn">Next</button>
    </div>
    <div class="cards" data-step>
        <button type="button" style=" background: none;
            color: inherit;
            border: none;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            padding-right: 100%" 
            data-previous>
               <i style="color: #56a69c" class="fas fa-arrow-alt-circle-left fa-2x" data-previous></i>
        </button>
       
      <h3 class="step-title">This is step 2</h3>
        
      <div class="form-group">
        <input type="text" name="address" id="address" placeholder="Address">
      </div>
      <div class="form-group">
        <input type="text" name="city" id="city" placeholder="City">
      </div>
      <div class="form-group">
        <input type="text" name="zipcode" id="zipcode" placeholder="Zip Code">
      </div>
      <button type="button" data-next class="fromBtn">Next</button>
    </div>
    <div class="cards" data-step>
      <button type="button" style=" background: none;
            color: inherit;
            border: none;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            padding-right: 100%" 
            data-previous>
               <i style="color: #56a69c" class="fas fa-arrow-alt-circle-left fa-2x" data-previous></i>
        </button>
              <h3 class="step-title">This is step 3</h3>

      <div class="form-group">
        <input type="text" name="firstName" id="firstName" placeholder="fistName">
      </div>
      <div class="form-group">
        <input type="text" name="lastName" id="lastName" placeholder="Last Name">
      </div>

      <button type="submit" class="fromBtn">Submit</button>
    </div>
  </form>
    </div>`





    const multiStepForm = document.querySelector("[data-multi-step]")
    const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
    let currentStep = formSteps.findIndex(step => {
        return step.classList.contains("active")
    })

    if (currentStep < 0) {
        currentStep = 0
        showCurrentStep()
    }

    multiStepForm.addEventListener("click", e => {
        let incrementor
        if (e.target.matches("[data-next]")) {
            incrementor = 1
        } else if (e.target.matches("[data-previous]")) {
            incrementor = -1
        }

        if (incrementor == null) return

        const inputs = [...formSteps[currentStep].querySelectorAll("input")]
        const allValid = inputs.every(input => input.reportValidity())
        if (allValid) {
            currentStep += incrementor
            showCurrentStep()
        }
    })

    formSteps.forEach(step => {
        step.addEventListener("animationend", e => {
            formSteps[currentStep].classList.remove("hide")
            e.target.classList.toggle("hide", !e.target.classList.contains("active"))
        })
    })

    function showCurrentStep() {
        formSteps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep)
        })
    }

}

function Login(){
    const Login = document.querySelector(".LoginInp").value
    const Password  = document.querySelector(".PasswordInp").value
    const done = document.querySelector(".signinBtn")
    let accounts = JSON.parse(localStorage.getItem("Users"))
    let newAccounts = JSON.parse(localStorage.getItem("newUser"))

    accounts.forEach(res => {
        if (res.Login === Login && res.Password === Password){
            done.style.display = "none" 
            alert("your registerd")
        }
    })
    newAccounts.forEach(res => {
        if (res.Login === Login && res.Password === Password){
            done.style.display = "none" 
            alert("your registerd")
        }
    })
    
}

function Reg(){
    let Info = JSON.parse(localStorage.getItem("Users"))
    const newPassword = document.querySelector(".newPassword").value
    const newLogin = document.querySelector(".newLogin").value
    newUser = {
        Name:"user",
        Login:newLogin,
        Password:newPassword
    }
    if(localStorage.getItem("newUser")){
        Info = JSON.parse(localStorage.getItem("newUser"))
    }
    Info.push(newUser)
    localStorage.setItem("newUser",JSON.stringify(Info))
}



function Workbooks(){
    let clearing = document.querySelector(".MainMenu")

    clearing.innerHTML = `
        <div class="container">
            <div class="row BooksBox">

            </div>
        </div>
    `
    const Box = document.querySelector(".BooksBox")

    Object.entries(BooksObj).forEach(([key, res]) => {
        Box.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12" style="display:flex; justify-content:center; margin: 20px 0px">
                <div  class="card" style="width: 18rem;">
                    <img src="${res.image}" class="card-img-top" alt="${res.title}">
                    <div class="card-body">
                        <div style="display: flex; justify-content: center;" >
                            <p style="font-size: 20px">${res.title}</p>
                        </div>
                        <div style="display: flex; justify-content: center;" >
                            <button class="btn-23 signinBtn" onclick="location.href=${res.link}">
                                <span class="text">Open</span>
                                <span aria-hidden="" class="marquee">Log-in</span>
                            </button>
                        </div>
                    </div>
                </div>
            
            </div>
        `
    })
}

function Compare(){
    let clearing = document.querySelector(".MainMenu")
    clearing.innerHTML =  `
        
            <div class="container">
                <div class="row Comp">

                </div>
         </div>
      <div style="display:flex;justify-content:center">
            <button class="btn-23 signinBtn" data-bs-toggle="modal" data-bs-target="#myModal">
                <span class="text">Open</span>
                <span aria-hidden="" class="marquee">Log-in</span>
            </button>
        </div>
    `
    const Box = document.querySelector(".Comp")
    Box.innerHTML +=
        `<div class="card maker" style="width: 18rem;">
            <img src="./Images/Univerity.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title UniName_1">Choose Your University</h5>
                <div class="UniInfo_1">
                    
                </div>
                <select onchange="FirstCounting(event)" class="form-select Comp-1" aria-label="Default select example">
                    <option value="">...</option>
                </select>
            </div>
        </div>
       <div class="card maker" style="width: 18rem;">
            <img src="./Images/Univerity.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title UniName_2">Choose Your University</h5>
                <div class="UniInfo_2">
                    
                </div>
                
                <select onchange="SecondCounting(event)" class="form-select Comp-2" aria-label="Default select example">
                    <option value="">...</option>
                </select>
            </div>
        </div>
        
        
        `


    const CompUni = document.querySelector(".Comp-1")
    const CompUni_2 = document.querySelector(".Comp-2")
    Object.entries(Unis).forEach((key,res) =>{
        CompUni.innerHTML += `<option value="1">${key[0]}</option>`
        CompUni_2.innerHTML += `<option value="1">${key[0]}</option>`

    })

}

let FirstComp = "UFAR"
let SecondComp = "UFAR"

function FirstCounting(event){
    FirstComp = [event.target[event.target.selectedIndex].text]
    FinalResult()
}
function SecondCounting(event){
    SecondComp = [event.target[event.target.selectedIndex].text]
    FinalResult()
}

function FinalResult() {
    const UniOne = document.querySelector(".UniOne")
    const UniTwo = document.querySelector(".UniTwo")
    const UniDegree = document.querySelector(".degree")
    const FirstUni = document.querySelector(".UniName_1")
    const SecondUni = document.querySelector(".UniName_2")
    const UniInfo_1 = document.querySelector(".UniInfo_1")
    const UniInfo_2 = document.querySelector(".UniInfo_2")
    SecondUni.innerHTML = SecondComp
    FirstUni.innerHTML = FirstComp

    UniOne.innerHTML = ""
    UniTwo.innerHTML = ""
    UniInfo_1.innerHTML = ""
    UniInfo_2.innerHTML = ""

    if (Unis[FirstComp].Price < Unis[SecondComp].Price){
        UniOne.innerHTML += `<p>${"Cheaper  is " + FirstComp}</p>`
        UniInfo_1.innerHTML += `<p  style="color: #56a69c;margin: 0 0 0 0;padding: 3px">price: ${Unis[FirstComp].Price}</p>`
        UniInfo_2.innerHTML += `<p style="color: #a02626;margin: 0 0 0 0;padding: 3px">price: ${Unis[SecondComp].Price}</p>`
    } else {
        UniTwo.innerHTML += `<p>${"Cheaper  is " + SecondComp}</p>`
        UniInfo_1.innerHTML += `<p class="card-text" style="color: #a02626;margin: 0 0 0 0;padding: 3px"">price: ${Unis[FirstComp].Price}</p>`
        UniInfo_2.innerHTML += `<p class="card-text" style="color: #56a69c;margin: 0 0 0 0;padding: 3px"">price: ${Unis[SecondComp].Price}</p>`
    }

    if (Unis[FirstComp].EducationLevel > Unis[SecondComp].EducationLevel){
        UniOne.innerHTML += `<p>${"More  Informative  is" + FirstComp}</p>`
        UniInfo_1.innerHTML += `<p class="card-text" style="color: #56a69c;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[FirstComp].EducationLevel}</p>`
        UniInfo_2.innerHTML += `<p class="card-text" style="color: #a02626;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[SecondComp].EducationLevel}</p>`
    } else {
        UniTwo.innerHTML += `<p>${"More  Informative  is" + SecondComp}</p>`
        UniInfo_1.innerHTML += `<p class="card-text" style="color: #a02626;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[FirstComp].EducationLevel}</p>`
        UniInfo_2.innerHTML += `<p class="card-text" style="color: #56a69c;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[SecondComp].EducationLevel}</p>`
    }

    if (Unis[FirstComp].convenience > Unis[SecondComp].convenience){
        UniOne.innerHTML += `<p>${"More  convenience  is " + FirstComp}</p>`
        UniInfo_1.innerHTML += `<p class="card-text" style="color: #56a69c;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[FirstComp].convenience}</p>`
        UniInfo_2.innerHTML += `<p class="card-text" style="color: #a02626;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[SecondComp].convenience}</p>`
    } else {
        UniTwo.innerHTML += `<p>${"More  convenience  is " + SecondComp}</p>`
        UniInfo_1.innerHTML += `<p class="card-text" style="color: #a02626;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[FirstComp].convenience}</p>`
        UniInfo_2.innerHTML += `<p class="card-text" style="color: #56a69c;margin: 0 0 0 0;padding: 3px"">Education Level: ${Unis[SecondComp].convenience}</p>`
    }


    UniDegree.innerHTML = `<p>${FirstComp} = ${Unis[FirstComp].Degree}</p>`
    UniDegree.innerHTML += `<p>${SecondComp} = ${Unis[SecondComp].Degree}</p>`

}























$(function() {
    var INDEX = 0;
    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if(msg.trim() == ''){
            return false;
        }
        generate_message(msg, 'self');
        var buttons = [
            {
                name: 'Existing User',
                value: 'existing'
            },
            {
                name: 'New User',
                value: 'new'
            }
        ];
        setTimeout(function() {
            generate_message(msg, 'user');
        }, 1000)

    })

    function generate_message(msg, type) {
        INDEX++;
        var str="";
        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);
        if(type == 'self'){
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    }

    function generate_button_message(msg, buttons){
        /* Buttons should be object array
          [
            {
              name: 'Existing User',
              value: 'existing'
            },
            {
              name: 'New User',
              value: 'new'
            }
          ]
        */
        INDEX++;
        var btn_obj = buttons.map(function(button) {
            return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
        }).join('');
        var str="";
        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "          <div class=\"cm-msg-button\">";
        str += "            <ul>";
        str += btn_obj;
        str += "            <\/ul>";
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
        $("#chat-input").attr("disabled", true);
    }

    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })

    $("#chat-circle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

    $(".chat-box-toggle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

})