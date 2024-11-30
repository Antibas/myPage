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
    const expertiseDescription = document.getElementById(id);
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

function acceptCookies(cookies){
    if(cookies){
        // TODO code that holds cookies
    }
    document.getElementById('cookies-popup').style.display = 'none';
}