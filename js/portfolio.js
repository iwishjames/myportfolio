console.log("It's Alive! MUAHAHAHAHA!!");
console.log("Please tell me that at least someone got the bg-image puns!");
console.log("...The 'Dawn' of my career...the future looks 'Bright'...");

function projectReveal0() {
  document.getElementById("project1").classList.remove("projectReveal");
  document.getElementById("project2").classList.remove("projectReveal");
  document.getElementById("project3").classList.remove("projectReveal");
  document.getElementById("project4").classList.remove("projectReveal");
  document.getElementById("project5").classList.remove("projectReveal");

  if (document.getElementById("project0").classList.contains("projectReveal")) {
    document.getElementById("project0").classList.remove("projectReveal");
  } else
  document.getElementById("project0").classList.add("projectReveal");
}

function projectReveal1() {
  document.getElementById("project0").classList.remove("projectReveal");
  document.getElementById("project2").classList.remove("projectReveal");
  document.getElementById("project3").classList.remove("projectReveal");
  document.getElementById("project4").classList.remove("projectReveal");
  document.getElementById("project5").classList.remove("projectReveal");

  if (document.getElementById("project1").classList.contains("projectReveal")) {
    document.getElementById("project1").classList.remove("projectReveal");
  } else
  document.getElementById("project1").classList.add("projectReveal");
}

function projectReveal2() {
  document.getElementById("project1").classList.remove("projectReveal");
  document.getElementById("project0").classList.remove("projectReveal");
  document.getElementById("project3").classList.remove("projectReveal");
  document.getElementById("project4").classList.remove("projectReveal");
  document.getElementById("project5").classList.remove("projectReveal");

  if (document.getElementById("project2").classList.contains("projectReveal")) {
    document.getElementById("project2").classList.remove("projectReveal");
  } else
  document.getElementById("project2").classList.add("projectReveal");
}

function projectReveal3() {
  document.getElementById("project1").classList.remove("projectReveal");
  document.getElementById("project2").classList.remove("projectReveal");
  document.getElementById("project0").classList.remove("projectReveal");
  document.getElementById("project4").classList.remove("projectReveal");
  document.getElementById("project5").classList.remove("projectReveal");

  if (document.getElementById("project3").classList.contains("projectReveal")) {
    document.getElementById("project3").classList.remove("projectReveal");
  } else
  document.getElementById("project3").classList.add("projectReveal");
}

function projectReveal4() {
  document.getElementById("project1").classList.remove("projectReveal");
  document.getElementById("project2").classList.remove("projectReveal");
  document.getElementById("project3").classList.remove("projectReveal");
  document.getElementById("project0").classList.remove("projectReveal");
  document.getElementById("project5").classList.remove("projectReveal");

  if (document.getElementById("project4").classList.contains("projectReveal")) {
    document.getElementById("project4").classList.remove("projectReveal");
  } else
  document.getElementById("project4").classList.add("projectReveal");
}

function projectReveal5() {
  document.getElementById("project1").classList.remove("projectReveal");
  document.getElementById("project2").classList.remove("projectReveal");
  document.getElementById("project3").classList.remove("projectReveal");
  document.getElementById("project4").classList.remove("projectReveal");
  document.getElementById("project0").classList.remove("projectReveal");

  if (document.getElementById("project5").classList.contains("projectReveal")) {
    document.getElementById("project5").classList.remove("projectReveal");
  } else
  document.getElementById("project5").classList.add("projectReveal");
}
