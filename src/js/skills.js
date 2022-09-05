function getSkillDescription(evt, id) {
    var tablinks = document.getElementsByClassName("skills__block__box--active");
    var description = document.getElementsByClassName("skills__description")[0];

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = " skills__block__box";
    }
    evt.currentTarget.className = "skills__block__box--active";

    const xmlhttp = new XMLHttpRequest();

    try {
      xmlhttp.onload = function() {
        description.innerHTML = this.responseText;
      }
  
      xmlhttp.open("GET", "./shared/skillsData.php?q=" + id);
      xmlhttp.send();
    } catch(error) {
      console.error(error);
    };
}

