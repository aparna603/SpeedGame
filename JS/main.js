let levels={
	easy:5,
	medium:3,
	hard:2
}

let currentLevel='';
let timeleft='';
let score=0;
let isPlaying;

const wordInput= document.querySelector('#word-input');
const currentWord= document.querySelector('#current-word');
const scoreDisplay= document.querySelector('#score');
const timeDisplay= document.querySelector('#time');
const message= document.querySelector('#message');
const seconds=document.querySelector('#seconds');
const selectedLevel=document.querySelector('#selectedLevel');
const words=[
'Hat','River','Lucky','Statue','Generate','Stubborn','Cocktail','Runaway','Joke','Hero','Developer','Javascript','Echo','Siblings','laughter','magic'
,'Space','Master','Definition','Symptom','Investigate']
    
    window.addEventListener('load',init());

    function init(){

     seconds.innerHTML= currentLevel;
     showWord(words);// load word from array
     setInterval(countdown,1000);// timer for display
     setInterval(checkStatus,50);//to check  status
     wordInput.addEventListener('input',startMatch);//start matching words
     selectedLevel1.addEventListener('click',easy);
     selectedLevel2.addEventListener('click',medium); 
     selectedLevel3.addEventListener('click',hard);




    }
    function showWord(words){
    	const randIndex= Math.floor(Math.random()* words.length);
    	currentWord.innerHTML= words[randIndex];
    }
    function countdown(){
    	if(timeleft>0){
    		timeleft--;
    	}
    	else if(timeleft===0){
          checkStatus();
    	}

    	
    	timeDisplay.innerHTML= "Time Left: "+ timeleft   +"   sec";
    }
    function checkStatus(){
    	if(timeleft===0){
    		message.innerHTML="GAME OVER!!!";
    		score=-1;
    	}
    }

    
    function startMatch(){
    	
    	if (timeleft!=0 &&  matchWords()){
           isPlaying=true;
           timeleft=currentLevel +1;
           
           showWord(words);

           wordInput.value="";
           score++;
           
}
           	
    
    if(score===-1){
    	scoreDisplay.innerHTML=0;
    }else{
    	scoreDisplay.innerHTML=score;
    }
    scoreDisplay.innerHTML= "Total Score:"+score;
}

       function matchWords(){
         if(wordInput.value===currentWord.innerHTML){
         	message.innerHTML='Correct!!!';

           	return true;

           } else{
           	message.innerHTML='';
           	return false;
           
         }
       }
    
       
       	function easy(){
         button.innerHTML="Easy";
         document.getElementById('word-input').focus();
         currentLevel=levels.easy;
         seconds.innerHTML=currentLevel;
         timeleft=currentLevel;
         }

       
   
       	function medium(){
       		button.innerHTML="Medium";
       		document.getElementById('word-input').focus();
         currentLevel=levels.medium;
         seconds.innerHTML=currentLevel;
         timeleft=currentLevel;
       }


       	function hard(){
       		button.innerHTML="Hard";
       		document.getElementById('word-input').focus();
           currentLevel=levels.hard;
         seconds.innerHTML=currentLevel;
         timeleft=currentLevel;
    }
  
       

   
  
    
    
  
    	
    	


     
         
      
  




