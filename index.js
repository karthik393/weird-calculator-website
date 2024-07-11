let display = document.querySelector(".cal-display");

function calButons(){
   const numbers = [
    {no: ".seven", value: '7'},
    {no: ".eight", value: '8'},
    {no: ".nine", value: '9'},
    {no: ".four", value: '4'},
    {no: ".five", value: '5'},
    {no: ".six", value: '6'},
    {no: ".one", value: '1'},
    {no: ".two", value: '2'},
    {no: ".three", value: '3'},
    {no: ".zero", value: '0'},
    {no: ".dot", value: '.'},
    {no: ".plus", value: '+'},
    {no: ".minus", value: '-'},
    {no: ".multiply", value: '*'},
    {no: ".divide", value: '/'},
    {no: ".percent", value: '%'}
   ];

   numbers.forEach(number =>{
    document.querySelector(number.no).addEventListener("click", function() {
      display.value += number.value;
      console.log(number.value);
    });
   });

   document.querySelector(".equal-btn").addEventListener("click", function() {
     try{
      display.value = eval(display.value)
     }catch(e) {
      display.value = 'error';
      console.error('invalid expression');
     }
   });
}

calButons();
