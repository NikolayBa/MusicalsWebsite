function GetLinkURLs(day)
{
  if(day=="tuesday")
  {
      return "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7520/#halls";
  }else if(day=="wednesday")
  {
      return "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7521/#halls";
  }else if(day=="thursday")
  {
      return "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7522/#halls";
  }else if(day=="friday")
  {
      return "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7523/#halls"
  }
  else if(day=="earlySofia")
  {
      return "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7524/#halls";
  }
  else if(day=="lateSofia")
  {
      return "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7525/#halls";
  }
}

function ReplaceLinkBlago()
{ 
    var radios = document.getElementsByName('blago');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById("BlagoButton").onclick = function(){ window.location = GetLinkURLs(radios[i].value); };
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

function ReplaceLinkSofia()
{
    var radios = document.getElementsByName('sofia');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById("sofiaButton").onclick = function(){ window.location = GetLinkURLs(radios[i].value); };
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

function Ruse()
{
    window.location = "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7542/#halls";
}

function Varna()
{
    window.location = "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7541/#halls";
}

function Plovdiv()
{  
    window.location = "http://boxoffice.bg/tickets/%D0%A0%D0%9E%D0%9A+%D0%97%D0%90%D0%92%D0%98%D0%9D%D0%90%D0%93%D0%98+-+Rock+of+Ages/7526/#halls";
}