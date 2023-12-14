const headerMenu = document.querySelector('.header-menu')
const headerAll = document.querySelector('.header_all')
const headerLeft = document.querySelector('.header-menu-left')
const headerRight = document.querySelector('.header-menu-right')
const dropMenu = document.querySelector('.drop_menu')
const dropMenuList = document.querySelector('.drop_menu-list')
const dropMenuItem = document.querySelector('.drop_menu-item')
const menuRigth = document.querySelector('.menu-rigth')
const Svernyt = document.querySelector('.svernyt')
const cp = document.querySelector('.cp')
const menuItems = document.querySelectorAll('.menu-left-item')
const menuTextNone = document.querySelectorAll('.menu_text-none')
const menuRightLinks = document.querySelectorAll('.menu-right-link')
const dash = document.querySelector('.dash')
const vector = document.querySelector('.vector')

headerMenu.addEventListener('click', () => {
    dropMenu.classList.toggle('none')
    headerMenu.classList.toggle('header-menu--active')
    headerAll.classList.toggle('header_all--active')
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log();
        if (item.dataset.fer == 'one') {
            dash.classList.toggle('dash--active')
            vector.classList.toggle('vector-white')
            menuRigth.classList.toggle('menu-rigth--active')
            menuTextNone.forEach(text => {
                    text.classList.toggle('text-none')
                
            })
            menuRightLinks.forEach(link => {
                link.classList.toggle('menu-right-link--active')
            })
        }
    })
    
})

Svernyt.addEventListener('click', () => {
    menuRightLinks.forEach(link => {
        link.classList.remove('menu-right-link--active')
    })
    menuTextNone.forEach(text => {
        text.classList.add('text-none')
    
})
    menuRigth.classList.add('menu-rigth-none')
    dash.classList.remove('dash--active')
    vector.classList.remove('vector-white')

})



cp.addEventListener('click', () => {
    menuRightLinks.forEach(link => {
        link.classList.remove('menu-right-link--active')
    })
    menuTextNone.forEach(text => {
        text.classList.remove('text-none')
    
})
    menuRigth.classList.remove('menu-rigth-none')
    menuRigth.classList.remove('menu-rigth--active')
    dash.classList.remove('dash--active')
    vector.classList.remove('vector-white')
})


function izi(item) {
    item.innerHTML += ` <tr class="tr-one-bot tr-one-bot-all tr-one-bot--active">
    <td class="td-one td-inps"><input type="checkbox" name="" id="check" class="check-v"><div><p class="one-hover" data-atrubyt="sel"><input type="text" class="inputTextCont"><img src="img/edit\ 1.svg" alt="" class="edit-1"><img src="img/Vector.svg" alt="" class="galka"><span class="hidden-text-l">Название комплекса</span></p>
    <div class="kira"><img src="img/edit\ 1.svg" alt="" class="edit-2"><img src="img/Vector.svg" alt="" class="galka-2"><input type="text" class="inputTextCont2"><span class="span-one-hover">(Часть тела)</span></div></div>
    </td>
    <td class="td-one td-inps-gas"><div class="price-flex"><p class="baza-price">0</p> <span class="span-price ">₽</span></div></td>
    <td class="td-one"><div class="price-flex"><p class="baza-price-two">0 / 0</p><span class="span-price">₽</span></div></td>
</tr>`

//     item.insertAdjacentHTML('beforeend',  ` <tr class="tr-one-bot">
//     <td class="td-one td-inps"><input type="checkbox" name="" id="check" class="check-v"><div><p class="one-hover">Название комплекса</p>
//     <span class="span-one-hover">(Часть тела)</span></div>
//     </td>
//     <td class="td-one td-inps-gas"><div class="price-flex">0 <span class="span-price ">₽</span></div></td>
//     <td class="td-one"><div class="price-flex">0 / 0<span class="span-price">₽</span></div></td>
// </tr>`)
}


const AllBtn = document.querySelectorAll('.all-item-btn')
const spanHidden = document.querySelector('.span-all-hidden')
const spanVb = document.querySelector('.span-vb')
const btnOne = document.querySelector('.all-item-table-bot-btn-one')
const btnTwo = document.querySelector('.all-item-table-bot-btn-two')
const btnThree = document.querySelector('.all-item-table-bot-btn-three')
const tbodyOne = document.querySelector('.tbody-one')
const spanPrice = document.querySelectorAll('.span-price')
let counter = 0
const face = document.querySelector('.face')
const faceSpan1 = face.querySelector('.span-all-hidden')
const faceSpan2 = face.querySelector('.span-vb')
const faceBtnOne = face.querySelector('.all-item-table-bot-btn-one')
const faceBtnTwo = face.querySelector('.all-item-table-bot-btn-two')
const faceBtnThree = face.querySelector('.all-item-table-bot-btn-three')
const facetbodyOne = face.querySelector('.tbody-one')
let counter2 = 0
const bodys = document.querySelector('.bodys')
const bodysSpan1 = bodys.querySelector('.span-all-hidden')
const bodysSpan2 = bodys.querySelector('.span-vb')
const bodysBtnOne = bodys.querySelector('.all-item-table-bot-btn-one')
const bodysBtnTwo = bodys.querySelector('.all-item-table-bot-btn-two')
const bodysBtnThree = bodys.querySelector('.all-item-table-bot-btn-three')
const bodystbodyOne = bodys.querySelector('.tbody-one')
let counter3 = 0
const hands = document.querySelector('.hands')
const handsSpan1 = hands.querySelector('.span-all-hidden')
const handsSpan2 = hands.querySelector('.span-vb')
const handsBtnOne = hands.querySelector('.all-item-table-bot-btn-one')
const handsBtnTwo = hands.querySelector('.all-item-table-bot-btn-two')
const handsBtnThree = hands.querySelector('.all-item-table-bot-btn-three')
const handstbodyOne = hands.querySelector('.tbody-one')
let counter4 = 0
const legs = document.querySelector('.legs')
const legsSpan1 = legs.querySelector('.span-all-hidden')
const legsSpan2 = legs.querySelector('.span-vb')
const legsBtnOne = legs.querySelector('.all-item-table-bot-btn-one')
const legsBtnTwo = legs.querySelector('.all-item-table-bot-btn-two')
const legsBtnThree = legs.querySelector('.all-item-table-bot-btn-three')
const legstbodyOne = legs.querySelector('.tbody-one')

let counter5 = 0
AllBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.dataset.zet == 'one') {
            spanHidden.classList.remove('span-all-hidden-hid')
            spanVb.classList.remove('span-all-hidden-hid')

            counter += 1
            spanHidden.innerHTML = `Добавлено ${counter}`
            btnOne.classList.remove('btn-none')
            btnTwo.classList.remove('btn-none')
            btnThree.classList.remove('btn-none')
            checkboxNone1.classList.add('chekBox-none--active')
            imgNone1.classList.add('img-none--active')
            
            izi(tbodyOne)
            hoverZamt ()   
            hoverKira ()
            
        }
        if (btn.dataset.zet == 'two') {
            faceSpan1.classList.remove('span-all-hidden-hid')
            faceSpan2.classList.remove('span-all-hidden-hid')
            faceBtnOne.classList.remove('btn-none')
            faceBtnTwo.classList.remove('btn-none')
            faceBtnThree.classList.remove('btn-none')
            counter2 += 1
            faceSpan1.innerHTML = `Добавлено ${counter2}`
            checkboxNone2.classList.add('chekBox-none--active')
            imgNone2.classList.add('img-none--active')
            izi(facetbodyOne)
            hoverZamt ()   
            hoverKira ()
        }
        if (btn.dataset.zet == 'three') {
            bodysSpan1.classList.remove('span-all-hidden-hid')
            bodysSpan2.classList.remove('span-all-hidden-hid')
            bodysBtnOne.classList.remove('btn-none')
            bodysBtnTwo.classList.remove('btn-none')
            bodysBtnThree.classList.remove('btn-none')
            counter3 += 1
            bodysSpan1.innerHTML = `Добавлено ${counter3}`
            checkboxNone3.classList.add('chekBox-none--active')
            imgNone3.classList.add('img-none--active')
            izi(bodystbodyOne)
            hoverZamt ()   
            hoverKira ()
        }
        if (btn.dataset.zet == 'four') {
            handsSpan1.classList.remove('span-all-hidden-hid')
            handsSpan2.classList.remove('span-all-hidden-hid')
            handsBtnOne.classList.remove('btn-none')
            handsBtnTwo.classList.remove('btn-none')
            handsBtnThree.classList.remove('btn-none')
            counter4 += 1
            checkboxNone4.classList.add('chekBox-none--active')
            imgNone4.classList.add('img-none--active')
            handsSpan1.innerHTML = `Добавлено ${counter4}`
            izi(handstbodyOne)
            hoverZamt ()   
            hoverKira ()
        }
        if (btn.dataset.zet == 'five') {
            legsSpan1.classList.remove('span-all-hidden-hid')
            legsSpan2.classList.remove('span-all-hidden-hid')
            legsBtnOne.classList.remove('btn-none')
            legsBtnTwo.classList.remove('btn-none')
            legsBtnThree.classList.remove('btn-none')
            counter5 += 1
            checkboxNone5.classList.add('chekBox-none--active')
            imgNone5.classList.add('img-none--active')
            legsSpan1.innerHTML = `Добавлено ${counter5}`
            izi(legstbodyOne)
            hoverZamt ()   
            hoverKira ()    
        }
        function hoverZamt () {
            const OneHover = document.querySelector('.one-hover')
            const hiddenText = document.querySelector('.hidden-text-l')
            const edit1 = document.querySelector('.edit-1')
            const galka = document.querySelector('.galka')
            OneHover.addEventListener('click', function() {
                const inputTextCont = document.querySelector('.inputTextCont')
                hiddenText.style.display = 'none'
                edit1.style.display = 'none'
                inputTextCont.style.display = 'block'
                galka.style.display = 'block'
          
        })
        
        }        
        function hoverKira () {
            const spanOneHover = document.querySelector('.span-one-hover')
            const kira = document.querySelector('.kira')
            kira.addEventListener('click', function() {
                const inputTextCont2 = document.querySelector('.inputTextCont2')
                spanOneHover.style.display = 'none'
                inputTextCont2.style.display = 'block'
                const edit2 = document.querySelector('.edit-2')
                const galka2 = document.querySelector('.galka-2')
                edit2.style.display = 'none'
                galka2.style.display = 'block'
        })
        }      
        
    })
    
})


btnOne.addEventListener('click', () => {
    const trOneBotAll = document.querySelectorAll('.tr-one-bot-all')
    const edit1 = document.querySelector('.edit-1')
    const galka = document.querySelector('.galka')
    const edit2 = document.querySelector('.edit-2')
    const galka2 = document.querySelector('.galka-2')
    
    trOneBotAll.forEach(bot => {
        bot.classList.remove('tr-one-bot--active')
    })
    spanHidden.classList.add('span-all-hidden-hid')
    spanVb.classList.add('span-all-hidden-hid')
    btnOne.classList.add('btn-none')
    btnTwo.classList.add('btn-none')
    btnThree.classList.add('btn-none')
    checkboxNone1.classList.remove('chekBox-none--active')
    imgNone1.classList.remove('img-none--active')
    galka.style.display = 'none'
    galka2.style.display = 'none'
    edit1.style.display = ''
    edit2.style.display = ''
})
faceBtnOne.addEventListener('click', () => {
    faceSpan1.classList.add('span-all-hidden-hid')
    faceSpan2.classList.add('span-all-hidden-hid')
    faceBtnOne.classList.add('btn-none')
    faceBtnTwo.classList.add('btn-none')
    faceBtnThree.classList.add('btn-none')
    checkboxNone2.classList.remove('chekBox-none--active')
    imgNone2.classList.remove('img-none--active')
    const trOneBotAll = document.querySelectorAll('.tr-one-bot-all')
    
    trOneBotAll.forEach(bot => {
        bot.classList.remove('tr-one-bot--active')
    })
    const edit1 = document.querySelector('.edit-1')
    const galka = document.querySelector('.galka')
    const edit2 = document.querySelector('.edit-2')
    const galka2 = document.querySelector('.galka-2')
    edit1.style.display = ''
    edit2.style.display = ''
    galka.style.display = 'none'
    galka2.style.display = 'none'
    
})
bodysBtnOne.addEventListener('click', () => {
    bodysSpan1.classList.add('span-all-hidden-hid')
    bodysSpan2.classList.add('span-all-hidden-hid')
    bodysBtnOne.classList.add('btn-none')
    bodysBtnTwo.classList.add('btn-none')
    bodysBtnThree.classList.add('btn-none')
    checkboxNone3.classList.remove('chekBox-none--active')
    imgNone3.classList.remove('img-none--active')
    const trOneBotAll = document.querySelectorAll('.tr-one-bot-all')
    
    trOneBotAll.forEach(bot => {
        bot.classList.remove('tr-one-bot--active')
    })
    const edit1 = document.querySelector('.edit-1')
    const galka = document.querySelector('.galka')
    const edit2 = document.querySelector('.edit-2')
    const galka2 = document.querySelector('.galka-2')
    edit1.style.display = ''
    edit2.style.display = ''
    galka.style.display = 'none'
    galka2.style.display = 'none'
})
handsBtnOne.addEventListener('click', () => {
    handsSpan1.classList.add('span-all-hidden-hid')
    handsSpan2.classList.add('span-all-hidden-hid')
    handsBtnOne.classList.add('btn-none')
    handsBtnTwo.classList.add('btn-none')
    handsBtnThree.classList.add('btn-none')
    checkboxNone4.classList.remove('chekBox-none--active')
    imgNone4.classList.remove('img-none--active')
    const trOneBotAll = document.querySelectorAll('.tr-one-bot-all')
    
    trOneBotAll.forEach(bot => {
        bot.classList.remove('tr-one-bot--active')
    })
    const edit1 = document.querySelector('.edit-1')
    const galka = document.querySelector('.galka')
    const edit2 = document.querySelector('.edit-2')
    const galka2 = document.querySelector('.galka-2')
    edit1.style.display = ''
    edit2.style.display = ''
    galka.style.display = 'none'
    galka2.style.display = 'none'
})
legsBtnOne.addEventListener('click', () => {
    legsSpan1.classList.add('span-all-hidden-hid')
    legsSpan2.classList.add('span-all-hidden-hid')
    legsBtnOne.classList.add('btn-none')
    legsBtnTwo.classList.add('btn-none')
    legsBtnThree.classList.add('btn-none')
    checkboxNone5.classList.remove('chekBox-none--active')
    imgNone5.classList.remove('img-none--active')
    const trOneBotAll = document.querySelectorAll('.tr-one-bot-all')
    
    trOneBotAll.forEach(bot => {
        bot.classList.remove('tr-one-bot--active')
    })
    const edit1 = document.querySelector('.edit-1')
    const galka = document.querySelector('.galka')
    const edit2 = document.querySelector('.edit-2')
    const galka2 = document.querySelector('.galka-2')
    edit1.style.display = ''
    edit2.style.display = ''
    galka.style.display = 'none'
    galka2.style.display = 'none'
})




window.addEventListener('click', (event) => {
    let user = 1

    user = false
    if (event.target.parentElement == headerAll) {
        user = true
    } else if (event.target.parentElement == headerMenu) {
        user = true
    } else if (event.target.parentElement == headerLeft) {
        user = true
    } else if (event.target.parentElement == headerRight) {
        user = true
    } else if (event.target.parentElement == dropMenuList) {
        user = true
    } 
    else if (event.target == dropMenuItem) {
        user = true
    } 
    if (user == false) {
        dropMenu.classList.add('none')
        headerMenu.classList.remove('header-menu--active')
        headerAll.classList.remove('header_all--active')
    }
    
})

         




const checkAll1 = document.querySelector('.check-all-one')
const checkAll2 = document.querySelector('.check-all-two')
const checkAll3 = document.querySelector('.check-all-three')
const checkAll4 = document.querySelector('.check-all-four')
const checkAll5 = document.querySelector('.check-all-five')
const checkboxNone1 = document.querySelector('.chekBox-none-one')
const checkboxNone2 = document.querySelector('.chekBox-none-two')
const checkboxNone3 = document.querySelector('.chekBox-none-three')
const checkboxNone4 = document.querySelector('.chekBox-none-four')
const checkboxNone5 = document.querySelector('.chekBox-none-five')
const imgNone = document.querySelector('.img-none')
const imgNone1 = document.querySelector('.img-none-one')
const imgNone2 = document.querySelector('.img-none-two')
const imgNone3 = document.querySelector('.img-none-three')
const imgNone4 = document.querySelector('.img-none-four')
const imgNone5 = document.querySelector('.img-none-five')


// console.log(event.target);






// const checkV = document.querySelectorAll('.check-v')


// checkV.forEach(check => {
//     check.addEventListener('click', function() {
//         if(checkV.checked) {
//             console.log('sss');
//         } else {
//             console.log('222');
            
//         }
//     })
// })



