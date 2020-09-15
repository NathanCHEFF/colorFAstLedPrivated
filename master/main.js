window.onload = function(){
  main();
}

function main(){
  /* add style */
  var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", "https://nathancheff.github.io/colorFAstLedPrivated/master/style.css")
  document.getElementsByTagName("head")[0].appendChild(fileref)
  /*      */


  document.getElementById("selectColor").onchange = function() {
    alert(this.value);
    changeColor(this.value);
  }
}

function changeColor(value){
  alert(hexToHSL1(value))
}

function hexToHSL1(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if(max == min){
      h = s = 0; // achromatic
    }else{
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  var HSL = new Object();
  HSL['h']=h;
  HSL['s']=s;
  HSL['l']=l;

  var str = "h="+h+"s"+s+"l"+l;
  return str;
}
