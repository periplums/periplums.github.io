const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "test-site/images/theophile-gautier.jpg") {
    myImage.setAttribute("src", "test-site/images/de-balzac.jpg");
  } else {
    myImage.setAttribute("src", "test-site/images/theophile-gautier.jpg");
  }
};

// let myButton = document.querySelector("button"); //
let myHeading = document.querySelector("h1");

function setUserName() {
    const mySite = prompt("What would you name this site?");
    if (!mySite) {
        setUserName();
    } else {
    localStorage.setItem("name", mySite);
    myHeading.textContent = `${mySite}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}`;
}

/* myButton.onclick = () => {
    setUserName();
}
*/
