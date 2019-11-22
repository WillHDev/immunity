//short way

export default (req, res) => {
    //tells which kind of response this is
  console.log('helloo')
  const name = 'Scott'
  
    res.status(200).json({ 
      test: "Hello Level Up"
  })

} 


// Long Way

//export default (req, res) => {
//     //tells which kind of response this is
//    res.setHeader('Content-Type', 'application.json')
//    res.statusCode = 200
//    res.end(JSON.stringify({
//        test: "Hello Level Up"
//    }))
// } 