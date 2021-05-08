const screenPhone = document.querySelector('.container__screen');
const buttonPhone = document.querySelector('.container__button___square')
const icon = document.querySelectorAll('.container__screen___icon');
const textLoding = document.querySelector('[textLoading]')
const playerMusic = document.querySelector('.container__audioMusic');




let on = false;


function setItensInScreen(){
    icon.forEach(e  => e.style.display = 'block');
    playerMusic.style.display = 'block';
}
function removeItensScreen(){
    icon.forEach(e  => e.style.display = 'none');
    textLoding.innerHTML = '';
   
}

function pauseMusic(){
    playerMusic.pause();
    playerMusic.style.display = 'none';
}

function textMusic(){
    const arraySource = document.querySelector('[sourceMusic]').src.split('/')
    textLoding.innerHTML = arraySource[arraySource.length -1];
}


function onScreen(){
    
    if(!on){
        screenPhone.style.boxShadow = '0 0 2px 0 rgb(204, 235, 228) inset';
        screenPhone.style.background = 'rgb(37, 39, 39)';
        removeItensScreen();
        pauseMusic();
    }else{
        screenPhone.style.background = 'linear-gradient(40deg, #4C5270, #F652A0, #36EEE0, #BCECE0)'
        screenPhone.style.boxShadow = '0 0 5px 0 rgb(37, 39, 39) inset';
        setItensInScreen();
        textMusic();
    }

}

buttonPhone.addEventListener('click', ()=>{
   on = !on;
   onScreen();

});