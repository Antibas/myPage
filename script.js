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
        expertiseDescription.style.display = 'flex';
    } else if (selected !== id){
        document.getElementById(selected).style.display = 'none'
        selected = id;
        expertiseDescription.style.display = 'flex';
    } else if (selected !== id){
    } else {
        
        selected = null;
        expertiseDescription.style.display = 'none';
    }
}

