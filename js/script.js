function createCommetn() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const comments = document.getElementById('comments');
    let stars = parseInt(document.getElementById('stars').value);
    let star =`<div class="star"></div>`
    if (stars > 5) {stars = 5;} 
    else if (stars < 0) {stars = 0;}
    for(let i=0; i<stars-1; i++){
        star+=`<div class="star"></div>`;
    }
    const commentHTML = `
      <div class="comment">
        <h2>${name}:</h2>
        <p class="margin10px">
         ${comment}
        </p>
        <div class="center_row_alt">${star}</div>
       </div>
    `;
  
if(name!='' && comment!=``){
    comments.innerHTML += commentHTML;
}
}
