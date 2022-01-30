// SELECTORS

//the span element that holds de totalItem value
let newSpan = document.createElement('span');

  // Slide SELECTORS
  const imgContainer = document.querySelectorAll('.img-container .images');
  const firstCircle = document.getElementById('first-circle');
  const secondCircle = document.getElementById('second-circle');
  const thirdCircle = document.getElementById('third-circle');
  const circles = document.getElementsByClassName('circle');

  
 
// TRIGGER EVENTS 
  firstCircle.addEventListener('click',displayF);
  secondCircle.addEventListener('click',displayS);
  thirdCircle.addEventListener('click',displayT);

// using ARRAY to store the path of img 
//loop trought each position and creat an img tag with the path
  let imgsVetor = ['./images/second-To-Do-List.png','./images/To-Do-List-Printable-Cover.jpg','./images/to-do-list.png'];
  for(let i = 0 ; i < imgsVetor.length; i++){

        let imgPath = imgsVetor[i];
        let imgTag = document.createElement('img');
        imgTag.src = imgPath;
        imgContainer[i].append(imgTag);
    
  }
  const imgCont = document.querySelectorAll('.img-container img');
  
  let img = imgCont[0];
  img.setAttribute('name','blabla');
  console.log(img);
  
  function displayF(){
    let a = document.querySelector('#colum-one img');
    a.style.display = 'unset';
    
    let b = document.querySelector('#colum-two img');
    b.style.display = 'none';
    let c = document.querySelector('#colum-three img');
    c.style.display = 'none';
    
  }

  function displayS(){
    
    let a = document.querySelector('#colum-one img');
    a.style.display = 'none';
    let b = document.querySelector('#colum-two img');
    b.style.display  = 'unset';
    let c= document.querySelector('#colum-three img');
    c.style.display  = 'none';
    
  }
  function displayT(){
    let a = document.querySelector('#colum-one img');
    a.style.display = 'none';
    let b = document.querySelector('#colum-two img');
    b.style.display = 'none';
    let c= document.querySelector('#colum-three img');
    c.style.display = 'unset';
    
  }

  firstCircle.addEventListener('mousedown',insert);
  secondCircle.addEventListener('mousedown',insertSecond);
  thirdCircle.addEventListener('mousedown',insertThird);

  const prevArrow = document.querySelector('.prev');
  const nextArrow = document.querySelector('.next');

  prevArrow.addEventListener('click',moveBack);
  nextArrow.addEventListener('click',moveNext);
 
 //let inicial = 0
  //Funcition will give a background color 
  // and store the inicial position 
  function insert(e){
      let clickedElement = e.target;
      clickedElement.style = 'background-color: red';
      console.log(clickedElement);
      clickedElement.setAttribute('value','1');
      inicial = clickedElement.getAttribute('value');
    }

  function insertSecond(e){
    let clickedElement = e.target;
    clickedElement.style = 'background-color: red';
    console.log(clickedElement);
    clickedElement.setAttribute('value','2');
    inicial = clickedElement.getAttribute('value');
    
  }
  function insertThird(e){
    let clickedElement = e.target;
    clickedElement.style = 'background-color: red';
    console.log(clickedElement);
    clickedElement.setAttribute('value','3');
    inicial = clickedElement.getAttribute('value');
    
  }
 /// porque que a inicial esta recebendo o valor das funcoes sem zerar?
 // como permanecer com o valor da variavel fora dos seu campo de manipulacao?
// o valores que estao sendo criados para referenciar a posicao sao de tipo string! porque!!!!

      function moveNext(){
      
        if(inicial == 1){
          circles[1].style= 'background-color: red';
          circles[0].style = 'background-color: ';
          let b = document.querySelector('#colum-two img');
          b.style.display  = 'block';
          let c = document.querySelector('#colum-one img');
          c.style.display = 'none';
          inicial = '2'; 
        }
        
        else if(inicial == 2){
          circles[2].style= 'background-color: red';
          circles[1].style = 'background-color: ';
          let b = document.querySelector('#colum-two img');
          b.style.display  = 'none';
          let a = document.querySelector('#colum-three img');
          a.style.display = 'block';
          //let c = document.querySelector('#colum-three img');
          //c.style.display = 'block';
          //inicial = inicial + 1;
        }
    }


    function moveBack(){
      
      if(inicial == 2){
        
        circles[0].style= 'background-color: red';
        circles[1].style = 'background-color: ';
        let b = document.querySelector('#colum-two img');
        b.style.display  = 'none';
        let c = document.querySelector('#colum-one img');
        c.style.display = 'block';
        inicial = '1'; 
      }
      else if(inicial == 3){
        debugger
        circles[1].style= 'background-color: red';
        circles[2].style = 'background-color: ';
        let b = document.querySelector('#colum-two img');
        b.style.display  = 'block';
        let a = document.querySelector('#colum-three img');
        a.style.display = 'none';
        inicial = '2'; 

        //let c = document.querySelector('#colum-three img');
        //c.style.display = 'block';
        //inicial = inicial + 1;
      }
    }
  

  
  

