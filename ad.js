const headerMenu = document.querySelector('.header-menu')
const headerAll = document.querySelector('.header_all')
const dropMenu = document.querySelector('.drop_menu')
const menuRigth = document.querySelector('.menu-rigth')
const Svernyt = document.querySelector('.svernyt')
const cp = document.querySelector('.cp')
const menuItems = document.querySelectorAll('.menu-left-item')
const menuTextNone = document.querySelectorAll('.menu_text-none')
const menuRightLinks = document.querySelectorAll('.menu-right-link')
const dash = document.querySelector('.dash')
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
})


function izi(item) {
    item.innerHTML += ` <tr class="tr-one-bot">
    <td class="td-one td-inps"><input type="checkbox" name="" id="check" class="check-v"><p>Название комплекса <br>
    (Часть тела)</p>
    </td>
    <td class="td-one td-inps-gas"><div class="price-flex">0 <span class="span-price ">₽</span></div></td>
    <td class="td-one"><div class="price-flex">0 / 0<span class="span-price">₽</span></div></td>
</tr>`
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
            izi(tbodyOne)
        }
        if (btn.dataset.zet == 'two') {
            faceSpan1.classList.remove('span-all-hidden-hid')
            faceSpan2.classList.remove('span-all-hidden-hid')
            faceBtnOne.classList.remove('btn-none')
            faceBtnTwo.classList.remove('btn-none')
            faceBtnThree.classList.remove('btn-none')
            counter2 += 1
            faceSpan1.innerHTML = `Добавлено ${counter2}`
            izi(facetbodyOne)
        }
        if (btn.dataset.zet == 'three') {
            bodysSpan1.classList.remove('span-all-hidden-hid')
            bodysSpan2.classList.remove('span-all-hidden-hid')
            bodysBtnOne.classList.remove('btn-none')
            bodysBtnTwo.classList.remove('btn-none')
            bodysBtnThree.classList.remove('btn-none')
            counter3 += 1
            bodysSpan1.innerHTML = `Добавлено ${counter3}`
            izi(bodystbodyOne)
        }
        if (btn.dataset.zet == 'four') {
            handsSpan1.classList.remove('span-all-hidden-hid')
            handsSpan2.classList.remove('span-all-hidden-hid')
            handsBtnOne.classList.remove('btn-none')
            handsBtnTwo.classList.remove('btn-none')
            handsBtnThree.classList.remove('btn-none')
            counter4 += 1
            handsSpan1.innerHTML = `Добавлено ${counter4}`
            izi(handstbodyOne)
        }
        if (btn.dataset.zet == 'five') {
            legsSpan1.classList.remove('span-all-hidden-hid')
            legsSpan2.classList.remove('span-all-hidden-hid')
            legsBtnOne.classList.remove('btn-none')
            legsBtnTwo.classList.remove('btn-none')
            legsBtnThree.classList.remove('btn-none')
            counter5 += 1
            legsSpan1.innerHTML = `Добавлено ${counter5}`
            izi(legstbodyOne)
        }
    })
    
})


btnOne.addEventListener('click', () => {
    spanHidden.classList.add('span-all-hidden-hid')
    spanVb.classList.add('span-all-hidden-hid')
    btnOne.classList.add('btn-none')
    btnTwo.classList.add('btn-none')
    btnThree.classList.add('btn-none')
        
})
faceBtnOne.addEventListener('click', () => {
    faceSpan1.classList.add('span-all-hidden-hid')
    faceSpan2.classList.add('span-all-hidden-hid')
    faceBtnOne.classList.add('btn-none')
    faceBtnTwo.classList.add('btn-none')
    faceBtnThree.classList.add('btn-none')
        
})
bodysBtnOne.addEventListener('click', () => {
    bodysSpan1.classList.add('span-all-hidden-hid')
    bodysSpan2.classList.add('span-all-hidden-hid')
    bodysBtnOne.classList.add('btn-none')
    bodysBtnTwo.classList.add('btn-none')
    bodysBtnThree.classList.add('btn-none')
        
})
handsBtnOne.addEventListener('click', () => {
    handsSpan1.classList.add('span-all-hidden-hid')
    handsSpan2.classList.add('span-all-hidden-hid')
    handsBtnOne.classList.add('btn-none')
    handsBtnTwo.classList.add('btn-none')
    handsBtnThree.classList.add('btn-none')
        
})
legsBtnOne.addEventListener('click', () => {
    legsSpan1.classList.add('span-all-hidden-hid')
    legsSpan2.classList.add('span-all-hidden-hid')
    legsBtnOne.classList.add('btn-none')
    legsBtnTwo.classList.add('btn-none')
    legsBtnThree.classList.add('btn-none')
        
})


















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



