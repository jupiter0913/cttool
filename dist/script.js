new Vue({
  el: '#app',
  data() {
    return {
      images: [],
      image: '',
      noun1: '',
      noun2: '',
      verb1: '',
      verb2: '',
      cta: '',
      ctaLink: '',
      cta2: '',
      formscreen: true,
      activeClass: 'active'
    };
  },

  methods: {
    submitForm() {
      this.formscreen = false;
      this.imageUpload();
    },

    onDrop: function (e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
    },

    onChange(e) {
      var files = e.target.files;
      this.createFile(files[0]);
    },

    createFile(file) {
      if (!file.type.match('image.*')) {
        alert('Select an image');
        return;
      }
      var img = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = function (e) {
        vm.image = e.target.result;
        vm.images.push(e.target.result);
      }
      reader.readAsDataURL(file);
    },

    imageUpload() {
      var myloc = window.location.href;
      var locarray = myloc.split("/");
      delete locarray[(locarray.length - 1)];
      var arraytext = locarray.join("/");
      arraytext += 'upload';
      console.log(arraytext);
    }
  },

  computed: {
    fullStatement() {
      return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<title></title>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&amp;display=swap" rel="stylesheet" />
	<style type="text/css">body {
    display: block;
    margin: 0px; 
}

a { 
  color: #001C6E;
  text-decoration: none;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.none {
  display: none;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.uppercase {
  text-transform: uppercase;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.align-center {
  text-align: center;
}
.align-left {
  text-align: left;
}
.align-right {
  text-align: right;
}
.width {
  width: 100%;
}
.valign-top {
  vertical-align: top;
}
.pointer {
  cursor: pointer;
}
.vvisible {
  visibility: visible;
}
.vhidden {
  visibility: hidden;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
#container{
  height:100%;
width:100%;
}

.container {
  padding: 0px;
  padding-top:2vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  font-family: proxima-nova, Arial, sans-serif;

}
.container .card {
    background: #ffffff;
    width: 100%;
    border-radius: 20px;
    max-width: 90%;
    min-height:80%;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1vw;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    overflow: hidden;
    max-width:450px;
}
.container .card .__icon {
  width: 100%;
}
  img {
    width: 100%;
    max-width: 140px;
    margin-bottom: 5px;
    display: inline-block;
    margin-left: auto;
    margin-top: 20px;
    margin-right: auto;
}
.container .card .__title {
    margin: 10px;
    font-size: 16px;
    font-family: montserrat;
    font-weight: 700;
    color: #69D2AA;
    line-height: 24px;
}
.container .card .__sub-text {
margin-top: 3px;
    color: #001C6E;
    font-size: 14px;
    line-height: 24px;
    font-family: montserrat;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 10px;
}
.container .card .dropdown-container {
  position: relative;
}
.container .card .dropdown-container .dropdown {
    margin-top: 3px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    color: #001C6E;
    font-size: 14px;
    line-height: 24px;
    font-family: montserrat;
    font-weight: 400;
}

.container .card .button {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    padding: 0 20px;
    border-radius: 24px;
    color: #001C6E;
    font-size: 14px;
    font-family: montserrat;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
    text-decoration: none;
    background-color: #69D2AA;
    width: 90%;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
}

    .button2 {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    padding: 0 20px;
    border-radius: 24px;
    color: #001C6E;
    font-size: 14px;
    font-family: montserrat;
    font-weight: 400;
    line-height: 38px;
    text-align: center;
    text-decoration: none;
    width: 90%;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    border: 1px solid #69d2aa;
    background: #69d2aa00;
    margin-bottom: 10px;
    margin-top: 5px;
}
	</style>
</head>
<body id="container">
<div class="container">
<div class="card"><span class="__icon"><img alt="" src="${this.noun1}" /></span>
<h2 class="__title"> ${this.noun2} </h2>

<p class="__sub-text"> ${this.verb2} </p>


<div class="doubleCTA">
<div class="btn" onclick="location.href='${this.ctaLink}';">
<div class="button"><strong>${this.cta}</strong></div>
</div>

<div class="btn" onclick="location.href='wzrk://thisleadstonowhere';">
<div class="button2"><strong>${this.cta2}</strong></div>
</div>
</div>

</div>
</div>
</body>
</html>
`;
    }
  }
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");

  $temp.remove();

}