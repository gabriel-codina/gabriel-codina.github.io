// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption


var gimg1 = document.getElementById('gdImg1');
var gimg2 = document.getElementById('gdImg2');
var gimg3 = document.getElementById('gdImg3');
var gimg4 = document.getElementById('gdImg4');
var gimg5 = document.getElementById('gdImg5');
var gimg6 = document.getElementById('gdImg6');
var gimg7 = document.getElementById('gdImg7');
var gimg8 = document.getElementById('gdImg8');
var gimg9 = document.getElementById('gdImg9');
var gimg10 = document.getElementById('gdImg10');
var gimg11 = document.getElementById('gdImg11');
var gimg12 = document.getElementById('gdImg12');
var gimg13 = document.getElementById('gdImg13');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



gimg1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg9.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg12.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}
gimg13.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.firstChild.src;
    captionText.innerHTML = this.firstChild.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}