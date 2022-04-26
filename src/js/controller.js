// let test = document.querySelector('.test p');

// setInterval(thunghiem,1000);

// function thunghiem(){
//     let date = new Date();
//     test.innerHTML = date.toLocaleTimeString();
// }

// window.addEventListener('load',()=>{
//     console.log('success')
// })

let screen_desk = document.querySelector('.home .home_container_1 .screen_desk');
let container_person_info = document.querySelector('.home .container_personal_info');
let butt_close_per_inf = document.querySelector('.home .container_personal_info .close_person_inf');
let header = document.querySelector('.container_header');

screen_desk.addEventListener('click', show_container_person_info);

function show_container_person_info() {
    container_person_info.classList.toggle('active');
//    var timeout= setTimeout(()=>{
//         container_person_info.classList.remove('active');
//     },5000);
}

butt_close_per_inf.addEventListener('click', close_per_inf);

function close_per_inf() {
    container_person_info.classList.remove('active');
}

window.addEventListener('scroll', header_nav);
let status_scroll = 0;

function header_nav() {
    let y = scrollY;

    if (y > 80 && y > status_scroll) {
        header.style.display = 'none';
        status_scroll = scrollY;


    } else if (y < status_scroll) {
        header.style.display = 'flex';
        status_scroll = scrollY;
    }
}