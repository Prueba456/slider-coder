var user = document.getElementById('user');
var texto = document.getElementById('texto');
var enviar = document.getElementById('enviar');
var posts = document.getElementById('posts');
enviar.addEventListener('click',function(e) {
  e.preventDefault();
  var frame = document.createDocumentFragment();
  var post = document.createElement("div");
  post.setAttribute("class","diseño-post");
  var textArea = document.createElement("p");
  textArea.innerHTML = texto.value;
  var usuario = document.createElement("p");
  usuario.innerHTML = user.value;
  post.appendChild(textArea);
  post.appendChild(usuario);
  frame.appendChild(post);
  posts.appendChild(frame);
  posts.insertBefore(post,posts.firstElementChild);
});
