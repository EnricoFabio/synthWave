//BURGER MENU SCRIPT

function togglebar() {
    let sidebar = document.getElementById("asidebar");
    let buttonbars = document.getElementById("buttcon");

    if (sidebar.style.left < 0 + '%') {
        sidebar.style.left = 0 + '%';
        sidebar.style.borderRight = 1 + 'px' + ' ' + 'solid' + ' ' + 'rgba(255, 255, 255, 0.5)';
    } else {
        sidebar.style.left = -15 + 'vw';
        sidebar.style.borderRight = 1 + 'px' + ' ' + 'solid' + ' ' + 'rgba(255, 255, 255, 0.0)';
    }
    buttonbars.classList.toggle("change");
}

//BURGER MENU SCRIPT MOBILE

function togglebar2() {
    let mobilemenu = document.getElementById("mobilemenu");
    let mobilebutt = document.getElementById("mobilebutt");
    let state = false;

    if (state === false) {
        console.log('dit is de if');
        state = true;
    } else {
        console.log('dit is the else');
        mobilemenu.style.zIndex = '49';
        mobilemenu.style.opacity = '1';
        state = false;
    }
    mobilebutt.classList.toggle("change2");
}

// QUALITY MODE

function mode() {

    let canvas = document.getElementById("canvas");
    let text = document.getElementById("gpubutton");

    if (text.style.color !== "green"){
        canvas.style.filter = "blur(2px)";
        text.innerText = "Low Quality";
        text.style.color = "green";
    }else{
        canvas.style.filter = "blur(0px)";
        text.innerText = "High Quality";
        text.style.color = "#ff475b";
    }
}