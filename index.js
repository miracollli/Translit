const input = document.querySelector('.input')
let btn1 = document.querySelector('#btn1')

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let rus = document.createElement('div')
    rus.className = 'ruText'
    for (let i = 0; i < input.value.length; i += 1) {
      if (input.value.length > 7) {
        rus.innerText = input.value.slice(0, 7) + '...'
      } else {
        rus.innerText = input.value
      }
    }
    /*alert1 (input.value)*/

    let eng = document.createElement('div')
    eng.className = 'enText'

    for (let i = 0; i < input.value.length; i += 1) {
      if (input.value.length > 7) {
        eng.innerText = translit(input.value).slice(0, 7) + '...'
      } else {
        eng.innerText = translit(input.value)
      }
    }
    const leftC = document.querySelector('.leftC')
    const rightC = document.querySelector('.rightC')

    let newLeftDiv = document.createElement('div')
    newLeftDiv.className = 'leftMid'
    newLeftDiv.append(rus)

    let newRightDiv = document.createElement('div')
    newRightDiv.className = 'rightMid'
    newRightDiv.append(eng)

    leftC.append(newLeftDiv)
    rightC.append(newRightDiv)

    let delBtn = document.createElement('div')
    delBtn.className = 'delBtn'
    newRightDiv.appendChild(delBtn)
    let btn2 = document.createElement('img')
    btn2.src = './icons/icon_small.png';
    btn2.alt = 'clean-icon';
    btn2.className = "btn2"
    delBtn.appendChild(btn2)

    btn2.addEventListener('click', function () {
      newRightDiv.remove()
      newLeftDiv.remove()
      numList()
    })

    function numList() {
      let num = document.querySelectorAll('.num');
      for (let i = 1; i < num.length; i++) {
        num[i].innerText = i + 1;
      }
    }

    let num = document.createElement('div')
    num.className = 'num'
    let num1 = document.querySelectorAll('.num')
    num1 = num1.length + 1
    num.innerText = num1
    newLeftDiv.append(num)

    if (input.value.length > 7) {
      let popupLeft = document.createElement('div')
      popupLeft.className = 'popupLeft'
      popupLeft.innerText = input.value
      newLeftDiv.append(popupLeft)
      
      let popupRight = document.createElement('div')
      popupRight.className = 'popupRight'
      popupRight.innerText = translit(input.value)
      newRightDiv.append(popupRight)
    }  
    
  }
})


btn1.addEventListener('click', function () {
  let rus = document.createElement('div')
  rus.className = 'ruText'
  for (let i = 0; i < input.value.length; i += 1) {
    if (input.value.length > 7) {
      rus.innerText = input.value.slice(0, 7) + '...'
    } else {
      rus.innerText = input.value
    }
  }
  /*alert1 (input.value)*/

  let eng = document.createElement('div')
  eng.className = 'enText'

  for (let i = 0; i < input.value.length; i += 1) {
    if (input.value.length > 7) {
      eng.innerText = translit(input.value).slice(0, 7) + '...'
    } else {
      eng.innerText = translit(input.value)
    }
  }

  const leftC = document.querySelector('.leftC')
  const rightC = document.querySelector('.rightC')

  let newLeftDiv = document.createElement('div')
  newLeftDiv.className = 'leftMid'
  newLeftDiv.append(rus)

  let newRightDiv = document.createElement('div')
  newRightDiv.className = 'rightMid'
  newRightDiv.append(eng)
  console.log(newRightDiv)

  leftC.append(newLeftDiv)
  rightC.append(newRightDiv)

  let delBtn = document.createElement('div')
  delBtn.className = 'delBtn'
  newRightDiv.appendChild(delBtn)
  let btn2 = document.createElement('img')
  btn2.src = './icons/icon_small.png';
  btn2.alt = 'Удалить строку';
  btn2.className = "btn2"
  delBtn.appendChild(btn2)

  btn2.addEventListener('click', function () {
    newRightDiv.remove()
    newLeftDiv.remove()
    numList()
  })

  function numList() {
    let num = document.querySelectorAll('.num');
    for (let i = 1; i < num.length; i++) {
      num[i].innerText = `${i + 1}`;
    }
  }

  let num = document.createElement('div')
  num.className = 'num'
  let num1 = document.querySelectorAll('.num')
  num1 = num1.length + 1
  num.innerText = num1
  newLeftDiv.append(num)

  if (input.value.length > 7) {
    let popupLeft = document.createElement('div')
    popupLeft.className = 'popupLeft'
    popupLeft.innerText = input.value
    newLeftDiv.append(popupLeft)
    
    let popupRight = document.createElement('div')
    popupRight.className = 'popupRight'
    popupRight.innerText = translit(input.value)
    newRightDiv.append(popupRight)
  }

})

let dictionary = {

  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',

  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',

  'у': 'u',
  'ф': 'f',
  'х': 'h',
  'ц': 'c',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sch',
  'ь': '\'',
  'ы': 'y',
  'ъ': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',


  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'Yo',
  'Ж': 'Zh',
  'З': 'Z',
  'И': 'I',

  'Й': 'Y',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',

  'У': 'U',
  'Ф': 'F',
  'Х': 'H',
  'Ц': 'C',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Sch',
  'Ь': '\'',
  'Ы': 'Y',
  'Ъ': '',
  'Э': 'E',
  'Ю': 'Yu',
  'Я': 'Ya',

};

function translit(str) {

  let newArr = []

  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]] !== undefined) {
      newArr.push(dictionary[str[i]])
    } else {
      newArr.push(str[i])
    }
  }
  return newArr.join('')
}

let mainDelBtn = document.querySelector('.mainDelBtn')

mainDelBtn.addEventListener('click', function () {

  let leftList = document.querySelectorAll('.leftMid')
  let rightList = document.querySelectorAll('.rightMid')

  for (let i = 0; i < leftList.length; i++) {
    leftList[i].remove()
    rightList[i].remove()
  }
})
