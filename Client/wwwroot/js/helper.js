export function showAlert(message) {
    alert(message);
};

export function SetFocusToElement(element) {
    element.focus();
};

export function SetBusinessDropDownIndex(index) {
    document.getElementById("SelectBusiness").selectedIndex = index;
};

export function SetLanguageDropDownIndex(index) {
    document.getElementById("SelectLanguage").selectedIndex = index;
};


export function ScrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export function onDivScroll2(interval) {
    let selectHeader = document.getElementById('header');
    let selectBackToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', function (e) {       
       
        if (selectHeader) {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled');
                selectBackToTop.classList.add('active');
            } else {
                selectHeader.classList.remove('header-scrolled');
                selectBackToTop.classList.remove('active');
            }
        }
    }, interval);
}

export function ToggleShow() {
    var x = document.getElementById('week4-additional-notes');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

export function saveFile(file, Content) {
    var link = document.createElement('a');
    link.download = name;
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(Content)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


//// Get the button:
//let mybutton = document.getElementById("myBtn");

//// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function () { scrollFunction() };

//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//        mybutton.style.display = "block";
//    } else {
//        mybutton.style.display = "none";
//    }
//}

//// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//    document.body.scrollTop = 0; // For Safari
//    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//}
