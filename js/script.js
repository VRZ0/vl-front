var statusValue = 0
function statusDefine(){
  const stts = document.querySelector(".meter");
  const valuetxt = document.getElementById('valuetxt');
  statusValue = statusValue + 25
  stts.style.setProperty("--metervalue", statusValue+'%')
  valuetxt.innerText = statusValue+'%'
}

function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("filePreview");
      preview.src = src;
      preview.style.display = "block";
      statusDefine()
    }
  }

function change(){
  var inpt = document.getElementById('meuArquivo');
  inpt.click()
}