const textChange = function(){
  document.querySelector('h1').innerHTML = "Good Night & Sweet Dreams"
}

const stopChange = setTimeout(textChange, 5000)

document.getElementById('stop').addEventListener('click', function(){
     clearTimeout(stopChange)
})

const addText = function  (){
  console.log(`Jay Shree Ram`)
}

document.querySelector('#continue').addEventListener('click', function(){
  const setTime = setInterval(addText, 1000)
  document.querySelector('#pause').addEventListener('click', function(){
    clearInterval(setTime) 
  })
})
