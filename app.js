const cmd_command = "python manage.py runserver ⚙️";

let cursor_blink_1 = gsap.to('.cursor1', {opacity:0, repeat:-1, duration:0.8})

let cmd_name = gsap.timeline()

cmd_name.to('.terminal_cmd', {duration:1.5, text: cmd_command, onComplete:() => output_tl.play()})
  .to('.cursor1', {duration:2, opacity:0, repeat:-1})

var today = new Date();


var month_name = today.toLocaleString('default', { month: 'long' });

let day = today.getDate();

let hours = today.getHours();

let minutes = today.getMinutes();

let seconds = today.getSeconds();

let time = hours + ':' + minutes + ':' + seconds;

if (day < 10) {
    day = '0' + day;
}

if (minutes < 10) {
  minutea = '0' + minutes
}

if (seconds < 10) {
  seconds = '0' + seconds
}

const date = month_name + ' ' + day + ', ' + today.getFullYear() + ' - ' + time;


let date_string = date.toString()


const cmd_output = ['Watching for file changes with StatReloader 👀','Performing system checks...','System check identified no issues (0 silenced). ✅', date_string, "Django version 4.1, using settings 'my_portfolio.settings'", 'Starting development server at http://127.0.0.1:8000/ ⚙️', 'Quit the server with CTRL-BREAK.'];


const final_message = '🚀 website ready for action...'

let master_output_tl = gsap.timeline()

let output_tl = gsap.timeline().pause()

let cmd_output_1 = cmd_output[0]
let cmd_output_2 = cmd_output[1]
let cmd_output_3 = cmd_output[2]
let cmd_output_4 = cmd_output[3]
let cmd_output_5 = cmd_output[4]
let cmd_output_6 = cmd_output[5]


let delay_time = 1

output_tl.to('.text1', {duration:0.5, delay:2, text: cmd_output_1});
output_tl.to('.text2', {duration:0.25, delay:1, text: cmd_output_2});
output_tl.to('.text3', {duration:0.5, text: cmd_output_3});
output_tl.to('.text4', {duration:0.25, delay:1, text: cmd_output_4});
output_tl.to('.text5', {duration:0.5, text: cmd_output_5});
output_tl.to('.text6', {duration:1, text: cmd_output_6, onComplete:() => action_cursor_tl.play()});

let action_icon = gsap.from('.go_icon', {opacity:0}).pause()

let action_cursor_tl = gsap.timeline().pause()

action_cursor_tl.from('.cursor2', {opacity:0, repeat:-1, duration:0.8})
  action_cursor_tl.to('.go_icon', {opacity:1})
  action_cursor_tl.to('.text7', {delay: delay_time, duration: 0.5, text: final_message})

 

window.addEventListener("load", () => {
    document.querySelector(".loader_screen").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".loader_screen").style.display = "none";
    }, 13000)
})  
