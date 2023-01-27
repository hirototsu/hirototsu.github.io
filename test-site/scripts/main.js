let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    const myName=prompt('あなたの名前を入力してください');
    localStorage.setItem('name',myName);
    myHeading.textContent=`Mozillaはかっこいいよ、${myName}`;
}

if (!localStorage.getItem('name')){
    setUserName();
} else{
    const storedName=localStorage.geItem('name');
    myHeading.textContent=`Mozillaはかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}
