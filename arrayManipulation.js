function reverseWords(message) {

    // Decode the message by reversing the words
   // the function to reverse a word 
   
   function reverseWord(array,leftIndex,rightIndex){
     let x =''; 
     while(leftIndex<rightIndex){
       x = array[leftIndex]; 
       array[leftIndex]=array[rightIndex]; 
       array[rightIndex]=x; 
       leftIndex ++; 
       rightIndex--; 
     }
   }; 
   
   // reverse the array 
    reverseWord(message,0,message.length-1); 
    let current = 0; 
    for(let i = 0; i<=message.length; i++ ){
      if( message[i]==' '|| i ===message.length){
        reverseWord(message,current,i-1); 
        current = i+1;
      }
    }
   
   
   return message 
   
   
     
     
     
     // The easy way : return message.join('').split(' ').reverse(); 
   
   }