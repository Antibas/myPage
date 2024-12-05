const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam corporis obcaecati architecto reiciendis sit nesciunt labore, velit at, magnam tenetur esse fugiat, laudantium optio quas sapiente distinctio. Quaerat, quos accusantium."

// const expetises = {
//     Python: lorem,
//     Docker: lorem,
//     HTMLCSS: lorem,
//     Javascript: lorem,
//     Vuejs: lorem,
//     VSCode: lorem,
//     Git: lorem,
//     Java: lorem,
//     C: lorem,
//     Cpp: lorem,
//     Linux: lorem,
//     BDrivingLicense: lorem
// }

// const expertiseDescription = document.getElementById("expertise-description");

var selected = null;

function loadDesc(id){
    id = id.split(" ")[0];
    console.log(id);
    const expertiseDescription = document.getElementById(id);
    console.log(expertiseDescription);
    if(!selected){
        selected = id;
        expertiseDescription.classList.toggle('active');//.style.display = 'flex';
    } else if (selected !== id){
        document.getElementById(selected).classList.toggle('active');//.style.display = 'none'
        selected = id;
        expertiseDescription.classList.toggle('active');
    } else {
        
        selected = null;
        expertiseDescription.classList.toggle('active');
    }
}

function checkForCookies(){
    console.log(document.cookie)
    if(!document.cookie){
        document.getElementById('cookies-popup').classList.toggle('active')
    }
}

function acceptCookies(cookies){
    fetch(`/accept_cookies?accept='${cookies}'`)
    .then(response => {
        console.log(response);
    });
    document.getElementById('cookies-popup').style.display = 'none';
}

// function toggleLang(){
//     const html = document.getElementsByTagName("html")[0];
//     const langImg = document.getElementById("lang-img");

//     if(html.lang === "en"){
//         // html.lang = "gr";
//         langImg.src = "images/uk-flag.png";
//     } else {
//         // html.lang = "en";
//         langImg.src = "images/greek-flag.png";
//     }
// }