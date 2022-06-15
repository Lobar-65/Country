const input=document.querySelector('#input');
const names=document.querySelector('.isName');
const capital=document.querySelector('.isCapital');
const region=document.querySelector('.isRegion');
const lang=document.querySelector('.isLang');
const population=document.querySelector('.isPop');
const currance=document.querySelector('.isCurrance');
const domain=document.querySelector('.isDomain');
const flag=document.querySelector('.flag');

input.addEventListener('change',(e)=>setValue(e.target.value))

function setValue(value){
fetch(`https://restcountries.com/v2/name/${value}`)
.then((res)=>res.json())
.then((data)=>setData(data))    
.catch((err)=>alert("Bunaqa davlat topilmadi. Iltimos qayta ko'rib chiqing !!!"))
}
function setData(item){
    names.innerHTML=`${item[0].name}`;
    capital.innerHTML=`${item[0].capital}`;
    region.innerHTML=`${item[0].region}`;
    lang.innerHTML=`${item[0].languages[0].nativeName}`;
    population.innerHTML=`${item[0].population}`;
    currance.innerHTML=`${item[0].currencies[0].symbol}`;
    domain.innerHTML=`${item[0].topLevelDomain}`;
    flag.src=`${item[0].flag}`;
}
