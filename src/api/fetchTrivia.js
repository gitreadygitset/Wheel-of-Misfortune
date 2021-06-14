export const fetchTrivia = async() => {
  try {
    const response = await fetch('http://numbersapi.com/random/trivia?min=0&max=10000000000&json')
    if(response.ok){
      const parsedResponse = await response.json();
      return parsedResponse;
    }
    else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  } catch(error){
    console.log(error)
  }
}
