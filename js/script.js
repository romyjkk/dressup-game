console.log("hoihoi")

// variables aanmaken

// skintone

var skinTone = document.querySelector(".body")

var skinToneBttn1 = document.querySelector(".skintonebttn1")
var skinToneBttn2 = document.querySelector(".skintonebttn2")
var skinToneBttn3 = document.querySelector(".skintonebttn3")
var skinToneBttn4 = document.querySelector(".skintonebttn4")
var skinToneBttn5 = document.querySelector(".skintonebttn5")

// hair

var defaultHair = document.querySelector(".hair")

var hairBttn1 = document.querySelector(".hairbttn1")
var hairBttn2 = document.querySelector(".hairbttn2")
var hairBttn3 = document.querySelector(".hairbttn3")

// shirt

var defaultTop = document.querySelector(".tops")

var topBttn1 = document.querySelector(".shirtbttn1")
var topBttn2 = document.querySelector(".shirtbttn2")
var topBttn3 = document.querySelector(".shirtbttn3")

// pants

var defaultPants = document.querySelector(".pants")

var pantsBttn1 = document.querySelector(".pantsbttn1")
var pantsBttn2 = document.querySelector(".pantsbttn2")
var pantsBttn3 = document.querySelector(".pantsbttn3")

// shoes

var defaultShoes = document.querySelector(".shoes")

var shoesBttn1 = document.querySelector(".shoesbttn1")
var shoesBttn2 = document.querySelector(".shoesbttn2")
var shoesBttn3 = document.querySelector(".shoesbttn3")

// background

var backgroundElement = document.querySelector(".background")

// parameter

var parameterElement = document.querySelector("#parameter")

// audio

var minecraftSound = new Audio("soundeffect/sound.ogg")

// variables aanmaken done

// eventlisteners toevoegen + functies aanmaken voor buttons + (else) if

// body

    skinToneBttn1.addEventListener("click", function(){
        changeSkin("skintone1")
    })
    
    skinToneBttn2.addEventListener("click", function(){
        changeSkin("skintone2")
    })
    
    skinToneBttn3.addEventListener("click", function(){
        changeSkin("skintone3")
    })
    
    skinToneBttn4.addEventListener("click", function(){
        changeSkin("skintone4")
    })
    
    skinToneBttn5.addEventListener("click", function(){
        changeSkin("skintone5")
    })
    
    function changeSkin(skintone){
    
        if (skintone == "skintone1"){
            skinTone.src = "images/body/skintone1.png"
        }
    
        else if (skintone == "skintone2"){
            skinTone.src = "images/body/skintone2.png"
        }
    
        else if (skintone == "skintone3"){
            skinTone.src = "images/body/skintone3.png"
        }
    
        else if (skintone == "skintone4"){
            skinTone.src = "images/body/skintone4.png"
        }
    
        else if (skintone == "skintone5"){
            skinTone.src = "images/body/skintone5.png"
        }
    }

// hair

    hairBttn1.addEventListener("click", function(){
        changeHair("hair1")
    })
    
    hairBttn2.addEventListener("click", function(){
        changeHair("hair2")
    })
    
    hairBttn3.addEventListener("click", function(){
        changeHair("hair3")
    })
    
    function changeHair(hair){
    
        if (hair == "hair1"){
            defaultHair.src = "images/hair/hair3.png"
            outfit3()
        }
    
        else if (hair == "hair2"){
            defaultHair.src = "images/hair/hair2.png"
            outfit2()
        }
    
        else if (hair == "hair3"){
            defaultHair.src = "images/hair/hair1.png"
            outfit1()
        }
    }

// tops

// bronvermelding shirt 1: https://shoutwageningen.nl/en/product/rainbow-flag/


    topBttn1.addEventListener("click", function(){
        changeTop("top1")
    })
    
    topBttn2.addEventListener("click", function(){
        changeTop("top2")
    })
    
    topBttn3.addEventListener("click", function(){
        changeTop("top3")
    })
    
    function changeTop(tops){
    
        if (tops == "top1"){
            defaultTop.src = "images/tops/shirt1.png"
            outfit2()
        }
    
        else if (tops == "top2"){
            defaultTop.src = "images/tops/shirt2.png"
            outfit3()
        }
    
        else if (tops == "top3"){
            defaultTop.src = "images/tops/shirt3.png"
            outfit1()
        }
    }

// pants

    pantsBttn1.addEventListener("click", function(){
        changePants("pant1")
    })
    
    pantsBttn2.addEventListener("click", function(){
        changePants("pant2")
    })
    
    pantsBttn3.addEventListener("click", function(){
        changePants("pant3")
    })
    
    function changePants(pants){
    
        if (pants == "pant1"){
            defaultPants.src = "images/pants/pant1.png"
            outfit2()
        }
    
        else if (pants == "pant2"){
            defaultPants.src = "images/pants/pant2.png"
            outfit3()
        }
    
        else if (pants == "pant3"){
            defaultPants.src = "images/pants/pant3.png"
            outfit1()
        }
    }

// shoes

    shoesBttn1.addEventListener("click", function(){
        changeShoes("shoe1")
    })
    
    shoesBttn2.addEventListener("click", function(){
        changeShoes("shoe2")
    })
    
    shoesBttn3.addEventListener("click", function(){
        changeShoes("shoe3")
    })
    
    function changeShoes(shoes){
    
        if (shoes == "shoe1"){
            defaultShoes.src = "images/shoes/shoes1.png"
            outfit2()
        }
    
        else if (shoes == "shoe2"){
            defaultShoes.src = "images/shoes/shoes2.png"
            outfit3()
        }
    
        else if (shoes == "shoe3"){
            defaultShoes.src = "images/shoes/shoes3.png"
            outfit1()
        }
    }

// if else (wanneer de gebruiker specifieke outfits heeft gemaakt, verandert de achtergrond + komt er een geluidje in)

// soundeffect bronvermelding: Minecraft

function keepBackground(){
    backgroundElement.src = "images/backgrounds/background1.png"
}

function blueBackground(){
    backgroundElement.src = "images/backgrounds/background2.png"
}

function greenBackground(){
    backgroundElement.src = "images/backgrounds/background3.png"
}

function yellowBackground(){
    backgroundElement.src = "images/backgrounds/background4.png"
}

function outfit1(){
    if (defaultHair.getAttribute("src") == "images/hair/hair1.png"
        && defaultTop.getAttribute("src") == "images/tops/shirt3.png"
        && defaultPants.getAttribute("src") == "images/pants/pant3.png"
        && defaultShoes.getAttribute("src") == "images/shoes/shoes3.png") {
            greenBackground()
            minecraftSound.play()
        }
        else {
            keepBackground()
        }
    }

function outfit2(){
    if (defaultHair.getAttribute("src") == "images/hair/hair2.png"
        && defaultTop.getAttribute("src") == "images/tops/shirt1.png"
        && defaultPants.getAttribute("src") == "images/pants/pant1.png"
        && defaultShoes.getAttribute("src") == "images/shoes/shoes1.png") {
            yellowBackground()
            minecraftSound.play()
        }
        else {
            keepBackground()
        }
    }

function outfit3(){
    if (defaultHair.getAttribute("src") == "images/hair/hair3.png"
        && defaultTop.getAttribute("src") == "images/tops/shirt2.png"
        && defaultPants.getAttribute("src") == "images/pants/pant2.png"
        && defaultShoes.getAttribute("src") == "images/shoes/shoes2.png") {
            blueBackground()
            minecraftSound.play()
        }
        else {
            keepBackground()
        }
    }