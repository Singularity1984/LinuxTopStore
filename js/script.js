function createCommetn() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const comments = document.getElementById('comments');
  
    const commentHTML = `
      <div class="comment">
        <h2>${name}:</h2>
        <p class="margin10px">
         ${comment}
        </p>
       </div>
    `;
  
if(name!='' && comment!=``){
    comments.innerHTML += commentHTML;
}
}
