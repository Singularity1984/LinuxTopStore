function createCommetn() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const comments = document.getElementById('comments');
    const stars = document.getElementById('stars').value;
    let star =`<div class="star"></div>`

    for(let i=0; i<stars-1; i++){
        star+=`<div class="star"></div>`;
    }
    const commentHTML = `
      <div class="comment">
        <h2>${name}:</h2>
        <p class="margin10px">
         ${comment}
        </p>
        <div class="stars">${star}</div>
       </div>
    `;
  
if(name!='' && comment!=``){
    comments.innerHTML += commentHTML;
}
}
