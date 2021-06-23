/* ---------------VARIABLES--------------- */
const gameData = {
  languages: ['russian', 'english' /* , 'ukraininan' */],
  currentLanguageId: 0,
  categories: ['animals', 'geography', 'cars', 'football'],
  currentCategorieId: 0,
  modes: ['normal', 'survive'],
  currentModeId: 0,
  words: {
    russian: {
      animals: [
        'лев',
        'зебра',
        'коала',
        'панда',
        'змея',
        'носорог',
        'слон',
        'антилопа',
        'гиена',
        'жираф',
        'сурикат',
        'кабан',
        'тигр',
        'бегемот',
        'лемур',
        'волк',
        'овца',
        'крокодил',
        'хомяк',
        'хамелеон',
        'буйвол',
        'лошадь',
        'олень',
        'ягуар',
        'зубр',
        'медведь',
        'кенгуру',
        'ленивец',
        'гепард',
        'рысь',
        'бизон',
        'горилла',
        'баран',
        'верблюд',
        'муравьед',
        'кашелот',
        'выдра',
        'корова',
        'лисица',
        'крыса',
        'бобер',
        'собака',
        'кошка',
        'бабак',
      ],
      geography: [
        'австрия',
        'вена',
        'албания',
        'тирана',
        'белоруссия',
        'минск',
        'бельгия',
        'брюссель',
        'болгария',
        'софия',
        'великобритания',
        'лондон',
        'венгрия',
        'будапешт',
        'германия',
        'берлин',
        'греция',
        'афины',
        'дания',
        'копенгаген',
        'исландия',
        'рейкьявик',
        'испания',
        'мадрид',
        'италия',
        'рим',
        'латвия',
        'рига',
        'литва',
        'вильнюс',
        'лихтенштейн',
        'вадуц',
        'люксембург',
        'македония',
        'скопье',
        'мальта',
        'валлетта',
        'молдавия',
        'кишинев',
        'монако',
        'осло',
        'нидерланды',
        'амстердам',
        'норвегия',
        'польша',
        'мадрид',
        'варшава',
        'португалия',
        'лиссабон',
        'россия',
        'москва',
        'румыния',
        'бухарест',
        'сербия',
        'белград',
        'словакия',
        'братислава',
        'словения',
        'любляна',
        'украина',
        'киев',
        'финляндия',
        'хельсинки',
        'франция',
        'париж',
        'хорватия',
        'загреб',
        'черногория',
        'подгорица',
        'чехия',
        'прага',
        'швейцария',
        'берн',
        'швеция',
        'стокгольм',
        'эстония',
        'таллин',
        'ирландия',
        'дублин',
        'рим',
        'латвия',
        'рига',
        'литва',
        'вильнюс',
      ],
      cars: [
        'акура',
        'ауди',
        'бентли',
        'бугатти',
        'кадиллак',
        'чери',
        'шевроле',
        'крайслер',
        'ситроен',
        'дачия',
        'вольво',
        'додж',
        'феррари',
        'фиат',
        'форд',
        'джили',
        'генезис',
        'хонда',
        'хаммер',
        'хюндай',
        'инфинити',
        'ивеко',
        'ягуар',
        'ламборджини',
        'лянча',
        'лексус',
        'линкольн',
        'мазерати',
        'мазда',
        'митсубиси',
        'ниссан',
        'опель',
        'пежо',
        'понтиак',
        'порше',
        'равон',
        'рено',
        'ровер',
        'скания',
        'сеат',
        'шкода',
        'смарт',
        'субару',
        'сузуки',
        'тесла',
        'тойота',
        'фольксваген',
      ],
      football: [
        'милан',
        'сассуоло',
        'интер',
        'наполи',
        'аталанта',
        'сампдория',
        'ювентус',
        'верона',
        'рома',
        'кальяри',
        'лацио',
        'специя',
        'фиорентина',
        'дженоа',
        'парма',
        'удинезе',
        'болонья',
        'торино',
        'кротоне',
        'эмполи',
        'лейпциг',
        'бавария',
        'боруссия',
        'штутгарт',
        'айнтрахт',
        'аугсбург',
        'вердер',
        'хоффенхайм',
        'унион',
        'байер',
        'фрайбург',
        'вольфсбург',
        'арминия',
        'герта',
        'кельн',
        'шальке',
        'майнц',
      ],
    },
    english: {
      animals: [
        'lion',
        'zebra',
        'koala',
        'panda',
        'snake',
        'rhinoceros',
        'elephant',
        'antelope',
        'hyena',
        'giraffe',
        'meerkat',
        'boar',
        'tiger',
        'hippo',
        'lemur',
        'wolf',
        'sheep',
        'crocodile',
        'hamster',
        'chameleon',
        'buffalo',
        'horse',
        'deer',
        'jaguar',
        'bison',
        'bear',
        'kangaroo',
        'sloth',
        'cheetah',
        'lynx',
        'bison',
        'gorilla',
        'ram',
        'camel',
        'anteater',
        'kashelot',
        'otter',
        'cow',
        'fox',
        'rat',
        'beaver',
        'dog',
        'cat',
        'babak',
      ],
      geography: [
        'austria',
        'vienna',
        'albania',
        'tirana',
        'belarus',
        'minsk',
        'belgium',
        'brussels',
        'bulgaria',
        'sofia',
        'london',
        'hungary',
        'budapest',
        'germany',
        'berlin',
        'greece',
        'athens',
        'denmark',
        'copenhagen',
        'iceland',
        'reykjavik',
        'spain',
        'madrid',
        'italy',
        'rome',
        'latvia',
        'riga',
        'lithuania',
        'vilnius',
        'liechtenstein',
        'vaduz',
        'luxembourg',
        'macedonia',
        'skopje',
        'malta',
        'valletta',
        'moldova',
        'chisinau',
        'monaco',
        'oslo',
        'netherlands',
        'amsterdam',
        'norway',
        'poland',
        'madrid',
        'warsaw',
        'portugal',
        'lisbon',
        'russia',
        'moscow',
        'romania',
        'bucharest',
        'serbia',
        'belgrade',
        'slovakia',
        'bratislava',
        'slovenia',
        'ljubljana',
        'ukraine',
        'kiev',
        'finland',
        'helsinki',
        'france',
        'paris',
        'croatia',
        'zagreb',
        'montenegro',
        'podgorica',
        'prague',
        'switzerland',
        'bern',
        'sweden',
        'stockholm',
        'estonia',
        'tallinn',
        'ireland',
        'dublin',
        'rome',
        'latvia',
        'riga',
        'lithuania',
        'vilnius',
      ],
      cars: [
        'acura',
        'audi',
        'bugatti',
        'buick',
        'cadillac',
        'chery',
        'citroen',
        'dacia',
        'daewoo',
        'ferrari',
        'fiat',
        'genesis',
        'honda',
        'hummer',
        'isuzu',
        'iveco',
        'jaguar',
        'jeep',
        'lamborghini',
        'lancia',
        'lexus',
        'maserati',
        'mazda',
        'mercury',
        'mitsubishi',
        'nissan',
        'opel',
        'peugeot',
        'porsche',
        'proton',
        'ravon',
        'renault',
        'rover',
        'saab',
        'saturn',
        'scania',
        'skoda',
        'smart',
        'ssangyong',
        'tesla',
        'toyota',
        'bentley',
        'chevrolet',
        'chrysler',
        'datsun',
        'dodge',
        'ford',
        'geely',
        'hyndai',
        'infiniti',
        'koenigsegg',
        'lincoln',
        'lotus',
        'mini',
        'piaggio',
        'pontiac',
        'roewe',
        'scion',
        'seat',
        'subaru',
        'suzuki',
        'volkswagen',
        'volvo',
      ],
      football: [
        'milan',
        'sassuolo',
        'inter',
        'napoli',
        'atalanta',
        'sampdoria',
        'juventus',
        'verona',
        'roma',
        'cagliari',
        'lazio',
        'spice',
        'fiorentina',
        'genoa',
        'parma',
        'udinese',
        'bologna',
        'torino',
        'crotone',
        'empoli',
        'leipzig',
        'bavaria',
        'borussia',
        'stuttgart',
        'eintracht',
        'augsburg',
        'werder',
        'hoffenheim',
        'union',
        'bayer',
        'freiburg',
        'wolfsburg',
        'arminia',
        'hertha',
        'cologne',
        'schalke',
        'mainz',
      ],
    },
  },
}
/* Functions */
function updateLabels(array, name, label) {
  let index = gameData[name]
  if (index < 0) {
    gameData[name] = array.length - 1
  } else if (index > array.length - 1) {
    gameData[name] = 0
  }
  index = gameData[name]
  label.innerHTML = array[index][0].toUpperCase() + array[index].slice(1)
}
/* ----------KEYBOARDS---------- */
const keyboards = {
  englishKeys: [
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
  ],
  russianKeys: [
    1072, 1073, 1074, 1075, 1076, 1077, 1105, 1078, 1079, 1080, 1081, 1082,
    1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094,
    1095, 1096, 1097, 1099, 1100, 1101, 1102, 1103,
  ],
}

let word /* СЛОВО ВЫБРАННОЕ ДЛЯ ИГРЫ */
let remainingLetters /* ДЛИННА ВЫБРАННОГО СЛОВА(КОЛИЧЕСТВО ПОПЫТОК) */
let remainingAttempts /* КОЛИЧЕСТВО ПОПЫТОК */
let guessedLetters = []
let blankSquares /* МАССИВ ПУСТЫХ КЛЕТОК */
let isHintActive = false
/* ----------Buttons---------- */
const startBtn = document.getElementById('start-btn')
const randomLanguageBtn = document.getElementById('language-random')
const randomCategorieBtn = document.getElementById('categories-random')
/* ----------Labels---------- */
const categLabel = document.getElementById('current-categorie-label')
const langLabel = document.getElementById('current-language-label')
const modeLabel = document.getElementById('current-mode-label')
/* ----------Arrows---------- */
const categoriesRight = document.getElementById('categories-right')
const categoriesLeft = document.getElementById('categories-left')
const langRight = document.getElementById('lang-right')
const langLeft = document.getElementById('lang-left')
const modesRight = document.getElementById('mode-right')
const modesLeft = document.getElementById('mode-left')

/* ---------------FUNCTIONAL--------------- */
/* -----Categories arrows----- */
categoriesRight.addEventListener('click', function () {
  gameData.currentCategorieId++
  updateLabels(gameData.categories, 'currentCategorieId', categLabel)
})

categoriesLeft.addEventListener('click', function () {
  gameData.currentCategorieId--
  updateLabels(gameData.categories, 'currentCategorieId', categLabel)
})
/* -----Language arrows----- */
langRight.addEventListener('click', function () {
  gameData.currentLanguageId++
  updateLabels(gameData.languages, 'currentLanguageId', langLabel)
})

langLeft.addEventListener('click', function () {
  gameData.currentLanguageId--
  updateLabels(gameData.languages, 'currentLanguageId', langLabel)
})
/* -----Modes arrows----- */
modesRight.addEventListener('click', function () {
  gameData.currentModeId++
  updateLabels(gameData.modes, 'currentModeId', modeLabel)
})

modesLeft.addEventListener('click', function () {
  gameData.currentModeId--
  updateLabels(gameData.modes, 'currentModeId', modeLabel)
})

function getRandomWord(lang, categorie) {
  let { isLanguageRandom, isCategorieRandom, languages, categories, words } =
    gameData
  if (isLanguageRandom) {
    //Если выбран рандомный язык,то выбираем его случайно
    gameData.currentLanguageId = Math.floor(Math.random() * languages.length)
    // lang = languages[Math.floor(Math.random() * languages.length)]
    lang = languages[gameData.currentLanguageId]
  }
  if (isCategorieRandom) {
    //Если выбрана рандомная категория,то выбираем ее случайно
    categorie = categories[Math.floor(Math.random() * categories.length)]
  }
  word = //Получаем итоговое слово
    words[lang][categorie][
      Math.floor(Math.random() * words[lang][categorie].length)
    ]
  remainingLetters = word.length
  remainingAttempts = 10
  console.log(word)
}
/* ----------START GAME---------- */
startBtn.onclick = () => {
  gameLoop()

  let restartBtn = document.getElementById('btn-restart') /* РЕСТАРТ СЕССИИ */
  restartBtn.onclick = () => {
    restart()
    gameLoop()
  }

  let homeBtn = document.getElementById('btn-home') /* НА ГЛАВНЫЙ ЭКРАН */
  homeBtn.onclick = () => {
    restart()
    document.querySelector('.mainscreen').style.display = 'flex'
    document.querySelector('.gamescreen').style.display = 'none'
  }

  let rHint = document.getElementById('r-hint') /* СЛУЧАЙНАЯ ПОДСКАЗКА */
  rHint.onclick = () => getRandomHint()

  let tHint = document.getElementById('t-hint')
  tHint.onclick = () => {
    isHintActive = !isHintActive
    tHint.classList.toggle('t-hint--active')
    getTargetHint()
  }
}
/* -----GAME LOOP----- */
function gameLoop() {
  document.querySelector('.mainscreen').style.display = 'none'
  document.querySelector('.gamescreen').style.display = 'block'

  let { languages, categories, currentCategorieId, currentLanguageId } =
    gameData

  console.log(currentLanguageId)

  getRandomWord(languages[currentLanguageId], categories[currentCategorieId])
  renderKeyboard(keyboards[`${languages[currentLanguageId]}Keys`])
  console.log(keyboards[`${languages[currentLanguageId]}Keys`])
  renderBlankSq()
}

function restart() {
  blankSquares.forEach((el) => {
    el.remove()
  })
  let keys = document.querySelectorAll('.key')
  keys.forEach((el) => {
    el.remove()
  })
  guessedLetters = []
}

function getRandomHint() {
  let n = Math.floor(Math.random() * word.length)
  if (guessedLetters.includes(word[n])) {
    console.log('includes')
    do {
      n = Math.floor(Math.random() * word.length)
      console.log('includes again')
    } while (guessedLetters.includes(word[n]))
  }

  checkLetter(word[n])
  checkKey(word[n])
}

function getTargetHint() {
  let squares = document.querySelectorAll('.blank-square')
  let tHint = document.getElementById('t-hint')
  squares.forEach(
    (el) =>
      (el.onclick = () => {
        if (isHintActive) {
          el.classList.add('blank-square--guessed')
          isHintActive = false
          tHint.classList.remove('t-hint--active')
          checkKey(el.innerHTML)
          checkLetter(el.innerHTML)
        }
      })
  )
}

function checkKey(letter) {
  let keys = document.querySelectorAll('.key')
  let keysArr = Array.from(keys)
  let el = keysArr.filter((el) => el.id === letter.toLowerCase())
  el[0].classList.add('key--right')
}

randomLanguageBtn.onclick = () => {
  gameData.isLanguageRandom = !gameData.isLanguageRandom
  randomLanguageBtn.classList.toggle('random-mode-btn_active')
}
randomCategorieBtn.onclick = () => {
  gameData.isCategorieRandom = !gameData.isCategorieRandom
  randomCategorieBtn.classList.toggle('random-mode-btn_active')
}

function renderKeyboard(arr) {
  let fRow = document.querySelector('.keyboard__first-row')
  let sRow = document.querySelector('.keyboard__second-row')
  for (let i = 0; i < arr.length; i++) {
    ;(i < arr.length / 2 ? fRow : sRow).insertAdjacentHTML(
      'beforeend',
      `
      <div class='key' id='${String.fromCharCode(
        arr[i]
      )}'>${String.fromCharCode(arr[i]).toUpperCase()}</div>
    `
    )
  }
  addOnclickOnKeys()
}
function addOnclickOnKeys() {
  let keys = document.querySelectorAll('.key')
  for (const key of keys) {
    key.addEventListener('click', function () {
      this.classList.add('key--pressed')
      if (word.includes(this.id)) {
        this.classList.add('key--right')
      } else {
        this.classList.add('key--wrong')
      }
      checkLetter(this.id)
    })
  }
}

function checkLetter(id) {
  let letter = id.toLowerCase()
  if (word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        guessedLetters.push(letter)
        remainingLetters--
        blankSquares[i].classList.add('blank-square--guessed')
      }
    }
  } else {
    remainingAttempts--
  }
}

function renderBlankSq() {
  let topBar = document.querySelector('.top-bar')
  let arr = word.split('')
  arr.forEach((el) => {
    topBar.insertAdjacentHTML(
      'beforeend',
      `<div class = 'blank-square'>${el.toUpperCase()}</div>`
    )
  })
  blankSquares = document.querySelectorAll('.blank-square')
}
