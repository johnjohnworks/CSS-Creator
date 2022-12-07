let background1 = "#ffffff";
let background2 = "#f2f2f2";
let background3 = "#e6e6e6";
let borderColor = "#828282";
let color1 = "#0095ff";
let color2 = "#6200FF";
let fontColor1 = "#4a4a4a";
let fontColor2 = "#262626";
let fontColor3 = "#000000";
let username = "Test User";
let tempHTML = "";

const userSystemVariables = [
  background1,
  background2,
  background3,
  borderColor,
  color1,
  color2,
  fontColor1,
  fontColor2,
  fontColor3,
];

tempHTML = document.getElementById("idHTML").innerHTML;

function undoAction() {
  document.getElementById("idHTML").innerHTML = tempHTML;
}

function changeBorderColor(userBorderColor) {
  $(".screen").css("outline-color", userBorderColor.value);
  $(".borderColor").css("border-color", userBorderColor.value);
  $(".inputBorderColor").val(userBorderColor.value);
  console.log(
    username + " changed border-color to '" + userBorderColor.value + "'"
  );
}

function changeBackground1(myBackground1) {
  $(".background1").css("background-color", myBackground1.value);
  $(".fillBackground1").css("fill", myBackground1.value);
}

function changeBackground2(myBackground2) {
  $(".background2").css("background-color", myBackground2.value);
  $(".fillBackground2").css("fill", myBackground2.value);
}

function changeBackground3(myBackground3) {
  $(".background3").css("background-color", myBackground3.value);
  $(".inputColorBackground3").val(myBackground3.value);
  $(".fillBackground3").css("fill", myBackground3.value);
}
function changeBorderRadius(myRadius) {
  $(".screen").css("border-radius", myRadius.value + "px");
  $(".borderRadius").css("border-radius", myRadius.value + "px");
  $(".classBorderRadiusInput").val(myRadius.value);
}

function changeColor1(myColor1) {
  $(".color1Input").val(myColor1.value);
  $(".color1").css("color", myColor1.value);
  $(".fillColor1").css("fill", myColor1.value);
  $(".button1").css("background-color", myColor1.value);
}

function changeColor2(myColor2) {
  $(".color2").val(myColor2.value);
  $(".color2").css("color", myColor2.value);
  $(".fillColor2").css("fill", myColor2.value);
  $(".input").css("color", myColor2.value);
}

function changeEnvironment(userEnvironment) {
  $("#idBody").css(
    "background-image",
    "url('src/" + userEnvironment.value + ".jpg'"
  );
  $("#idScreenMainImg").attr("src", "src/" + userEnvironment.value + ".jpg");
  $("#idSection").css("background-color", "transparent");
}

function changeFontColor1(myFontColor1) {
  $("#screen").css("color", myFontColor1.value);
}

function changeFontColor2(myFontColor2) {
  $("#screen").css("color", myFontColor2.value);
}

function changeFontColor2(myFontColor3) {
  $("#screen").css("color", myFontColor3.value);
}

function changeFont1(myFont1) {
  tempHTML = document.getElementById("idHTML").innerHTML;
  $("body").css("font-family", myFont1.value);
  $(".font1").css("font-family", myFont1.value);
}

function changeFont2(myFont2) {
  $(".input").css("font-family", myFont2.value);
  $(".font2").css("font-family", myFont2.value);
}

function changeFontSize(myFontSize) {
  $("#idScreen").css("font-size", myFontSize.value + "px");
  $(".classFontSizeInput").val(myFontSize.value);
}

function changeGap(myGap) {
  $(".gap").css("gap", myGap.value + "px");
  $(".inputGap").val(myGap.value);
}

function changeMargin(userMargin) {
  $("#idBody").css("padding", userMargin.value + "px");
  $("#idScreen").css("margin", userMargin.value + "px");
  $(".inputMargin").val(userMargin.value);
}

function changePadding(myPadding) {
  $(".padding").css("padding", myPadding.value + "px");
  $(".inputPadding").val(myPadding.value);
}

function changeScreenSize(myScreenSize) {
  $("#idScreen").removeClass("mobile tablet desktop");
  $("#idScreen").addClass(myScreenSize.value);
  console.log(
    username + " changed Screen Size to '" + myScreenSize.value + "'"
  );
}

function changeSystemName(userSystemName) {
  $(".classSystemName").val(userSystemName.value);
  console.log(
    username + " changed System Name to '" + userSystemName.value + "'"
  );
}

function changeZoom(myZoom) {
  $("#idScreen").css("zoom", myZoom.value + "%");
}

function toggleCanvas() {
  $("#idSection").toggle({
    duration: 1,
  });
  $("#idCanvasButton").toggleClass("active");
}

function toggleForm(myToggle) {
  $("#idForm").toggle({
    duration: 1,
  });
  $(myToggle).toggleClass("active");
}
