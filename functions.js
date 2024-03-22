/*
const mainBtn = document.getElementById('main-btn'); //button
const divImg = document.getElementById('main-img');  //image

//alis notes//
function changeImage(img){
    divImg.src = img.src.replace(divImg,  )
}


const action = document.addEventListener("click", mainBtn); //when button is clicked

console.log(action)

function changeImage() {
       if (divImg.src == "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg"){
        divImg.src = "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    } else {
        divImg.src = "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg";
    }
}



document.getElementById("mainBtn").addEventListener(click, changeImage());

*/

const boxList = document.getElementById("myList");//calling mylist
const node = document.createElement('li'); //create new item in list
const textNode = document.createTextNode('value'); //Gathering inputs

boxList.appendChild(node);// adding li to mylist

boxList.appendChild(newListItem).addEventListener(submit);//add new item to list when submit