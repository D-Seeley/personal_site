const floatingName = $('#floatingName');

//Capture Characters and convert to Character Span
const spanArr = floatingName.text().split('').map(ch => ({ tag: 'span', char: ch }));
//Replace existing HTML text with new collection of character spans
floatingName.html(spanArr.reduce((acc, el) => { return acc + `<${el.tag}>${el.char}</${el.tag}>`}, '')); 
//Regather span elements as array of jQuery objects
const children = $('#floatingName span');

const speed = () => (Math.random() * 1000);
let colors = ["red", "blue", "green", "white"];
let rand = () => colors[Math.floor(Math.random() * colors.length)];

let height = window.innerHeight;
let width = window.innerWidth;

let toggle = true;

const getUpdate = (toggle) => ({
    // opacity: toggle ? '1' : '0',
    color: rand(),
    top: toggle ? `${height-80}` : '0px'
});

const changeCss = (toggle) => {
    const update = getUpdate(toggle);
    for (let i = 0; i < children.length; i++) {
        $(children[i]).animate(update, speed());
    }

    // Log each tick
}

const reportSize = () => {
    height = window.innerHeight;
    width = window.innerWidth;
};
window.onresize = reportSize;

const intervalTick = () => changeCss(toggle = toggle ? false : true);

setInterval(intervalTick, 2000);
$("#demo").css({"color": "blue", "font-size": "20px"}); // sets multiple CSS properties



// Determine View Boundries
// Determine Text Size
// Create UI Updater