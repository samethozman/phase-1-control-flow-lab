function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(expression){
  switch(expression) {
    case 'generous':
      return "Thank you so much."
        break;
    case 'not as generous':
      return "Thank you."
       break;
    default:
      return "Bye."
        break;
}
}