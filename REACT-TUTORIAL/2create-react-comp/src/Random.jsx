function Random(){
  let number=Math.random()*100;

  return <p style={{'background-color':'#26e446'}}>Random number is: {number}</p>
}

export default Random;