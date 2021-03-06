// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTalk(options) {
  const name = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  const phrase = ['很簡單','很容易','很快','很正常']

  // start generating talk
  let talk = `身為一個${name[options.role]}，${sample(task[options.role])}，${sample(phrase)}吧!`
  return talk
} 
// export generatePassword function for other files to use
module.exports = generateTalk

