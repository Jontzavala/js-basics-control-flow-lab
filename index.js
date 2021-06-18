function scuberGreetingForFeet(feet){
  if (feet > 400) {
    return "This one is on me!"
  }
  else if (feet >= 2000 && feet <=2500) {
    return "I will gladly take your thirty bucks."
  }
  else (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  const zoom = city === "NYC" ? ("Ok, sounds good.") : ("No go.");
  return zoom;
}

function switchOnCharmFromTip(response){
  let responseType;
  switch (response) {
    case 'generous':
      responseType = "Thank you so much."
      break;
    case 'not as generous':
      responseType = "Thank you."
      break;
    default:
      responseType = "Bye."
      break;
  }
  return responseType
}