const slider=document.querySelector(".circular-slider");
const image= document.querySelector(".slider .img");
const indicator=document.querySelector('.indicator');
const menuItems=document.querySelectorAll('.menu span');
const descriptions=document.querySelectorAll('.text');

const rotationValues = [-58,-32,0,32,58];

const colors=[
    'radial-gradient(#a74255,#440412)',
    'radial-gradient(#ff4b5f,#a40b16)',
    'radial-gradient(#fdb76d,#f08a00)',
    'radial-gradient(#849ade,#42395f)',
    'radial-gradient(#e7ad59,#883e2a)',
];
const images=[
    "https://i.pinimg.com/originals/e6/60/1b/e6601b4df08f6114006481d381d1fe88.jpg",
    "https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg",
    "https://images.fineartamerica.com/images-medium-large-5/golconda-fort-rama-balakrishnan.jpg",
    "https://newportbrushstrokes.com/wp-content/uploads/2019/11/taj-mahal-1024x853.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/654/278/desktop-wallpaper-tirupati-temple.jpg"
]

let itemIndex=2;
function rotate(rotationValue){
    image.style.transform=`rotate(${rotationValue}deg)`;
    indicator.style.transform=`translate(-50%,-50%) rotate(${rotationValue}deg)`;
}
menuItems.forEach((menuItem,i)=>{
    menuItem.addEventListener("click",()=>{
        image.style.backgroundImage=`url(${images[i]})`;
        slider.style.background=colors[i];
        if (i>itemIndex){
            rotate(rotationValues[itemIndex]-10)
        }else if(i<itemIndex){
            rotate(rotationValues[itemIndex]+10);
        }else{
            return ""
        }
        setTimeout(()=>{
            rotate(rotationValues[i])
        },300);
        descriptions.forEach(text=>{
            text.style.display="none"
        });
        descriptions[i].style.display='block';
        itemIndex=i;
    })
})