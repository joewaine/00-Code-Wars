function formatWords(words){ //eslint-disable-line
 if (!words){
   return '';
 }
 for (let i = 0; i < words.length; i++){
   if (!words[i]){
     words.splice(i, 1);
     i--;
   }
 }
 if (words.length > 2){
   for (let i = 0; i < words.length - 2; i++){
     words[i] = `${words[i]}, `;
   }
 }
 if (words.length > 1){
   words[words.length - 2] = `${words[words.length - 2]} and `;
 }
 return words.join('');
}
