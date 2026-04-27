function showSection(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("details").style.display = "none";

  document.getElementById(id).style.display = "block";
}

function goExplore() {
    document.getElementById("explore").scrollIntoView({
        behavior: "smooth"
    });
}
