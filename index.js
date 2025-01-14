{
    let DivisionGallery = document.getElementById("DivisionGallery");
    let DivisionGalleryScrolledWidth = DivisionGallery.scrollLeft;
    DivisionGallery.addEventListener("touchstart", () => {DivisionGalleryScrolledWidth = DivisionGallery.scrollLeft;});
    let ScrollBarIndex = document.getElementById("ScrollBarIndex");
    let DivisionGalleryTotalWidth = DivisionGallery.scrollWidth;
    let DivisionGalleryScreenWidth = DivisionGallery.getBoundingClientRect().width - 5;
    let DivisionGalleryScrollableWidth = DivisionGalleryTotalWidth - DivisionGalleryScreenWidth;
    let DivisionGallery_VisibleToFull_Ratio = DivisionGalleryScreenWidth / DivisionGalleryTotalWidth; 
    let ScrollBarHousing = document.getElementById("ScrollBarHousing").getBoundingClientRect().width - 13.5;
    let ScrollBarIndexSize = ScrollBarIndex.style.width = (ScrollBarHousing * DivisionGallery_VisibleToFull_Ratio) + "px";
    let ScrollBarIndexSizeRaw = ScrollBarIndex.style.width = ScrollBarHousing * DivisionGallery_VisibleToFull_Ratio;
    let ScrollBarScrollableWidth = ScrollBarHousing - ScrollBarIndexSizeRaw;
    let DivisionGalleryPhotoWidth = document.getElementById("Image1").getBoundingClientRect().width;
    let VerticalHeight = window.innerHeight;
    let DivisionGalleryGapWidth = VerticalHeight * 0.03;
    let DivisionGallerySection = DivisionGalleryGapWidth + DivisionGalleryPhotoWidth;

    let TouchPoint = 0;

    ScrollBarIndex.addEventListener("touchstart", (event) => {
            navigator.vibrate(100);
            ScrollBarIndex.style.backgroundColor = "#6086D4";
            ScrollBarIndex.addEventListener("touchend", () => {
                ScrollBarIndex.style.backgroundColor = "#2B65DA";
            })
        })

    DivisionGallery.addEventListener("scroll", () => {
        let DivisionGalleryScrolledWidth = DivisionGallery.scrollLeft;
        let DivisionGallery_LeftScrolledToScrollableWidth_Ratio = DivisionGalleryScrolledWidth / DivisionGalleryScrollableWidth; 
       
        let ScrollBarIndexPosition = ScrollBarScrollableWidth * DivisionGallery_LeftScrolledToScrollableWidth_Ratio;
        ScrollBarIndex.style.transform = "translatex(" + ScrollBarIndexPosition + "px)";
    });

let x = 1;
let z = 1;

{
    DivisionGallery.addEventListener("touchend",() => {
        let DivisionGalleryScrolledWidthTwin = DivisionGallery.scrollLeft;
        let DivisionGallery_ScrolledPositiveWidth_SectionToScrolled = DivisionGalleryScrolledWidthTwin - DivisionGalleryScrolledWidth;
        let DivisionGallery_PositiveSectionsPassed = Math.ceil(DivisionGallery_ScrolledPositiveWidth_SectionToScrolled / DivisionGallerySection);
        let DivisionGallery_ScrolledNegativeWidth_SectionToScrolled = DivisionGalleryScrolledWidth - DivisionGalleryScrolledWidthTwin;
        let DivisionGallery_NegativeSectionsPassed = Math.ceil(DivisionGallery_ScrolledNegativeWidth_SectionToScrolled / DivisionGallerySection);
        
        if (DivisionGalleryScrolledWidthTwin > DivisionGalleryScrolledWidth) {
        x += DivisionGallery_PositiveSectionsPassed;
        }
    else if (DivisionGalleryScrolledWidthTwin <  DivisionGalleryScrolledWidth) {
        x -= DivisionGallery_NegativeSectionsPassed;}
    switch (x) {
        
        case 1:
            let image1 = document.getElementById("Image1");
            image1.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
            x = 0;
            z = 1;
            break;

        case 2:
            let image2 = document.getElementById("Image2");
            image2.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
            x = 0;
            z = 2;
            break;

        case 3:
            let image3 = document.getElementById("Image3");
            image3.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
            x = 0;
            z = 3;
            break;

        case 4:
            let image4 = document.getElementById("Image4");
            image4.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
            x = 0;
            z = 4;
            break;

        case 5:
            let image5 = document.getElementById("Image5");
            image5.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"});
            x = 0;
            z = 5;
            break;
    
        default:
            break; 
    }
        x = z;
        if (x > 5) {x = 5};
    })
    }
}

{
    let x = 50;
    let ScreenWidth = window.innerWidth;
    let Ratio = (x / ScreenWidth) * 100;
    let ElementWidth = 100 - Ratio;
    let S2Image1 = document.getElementById("S2Image1").style.width = ElementWidth + "%";
    let S2SubDivision3 = document.getElementById("S2SubDivision3").style.width = ElementWidth + "%";
    let BlueBox = document.getElementById("S2SubDivision2_BlueBox").style.width = ElementWidth + 1.7 + "%";
    let S2SubDivision4 = document.getElementById("S2SubDivision4").style.width = ElementWidth + "%";

    let WidthOfPhotoToDot_BothEnds = 0.14;
    let ScreenWidthSpecial = ScreenWidth * WidthOfPhotoToDot_BothEnds;
    let Margin = ScreenWidthSpecial + 40;
    let spcr = ScreenWidth - Margin;
    document.getElementsByClassName("S2SubDivision5")[0].style.width = spcr + "px";


    let WidthOfTypes = document.getElementsByClassName("S2SubDivision5")[0].getBoundingClientRect().width;
    let WidthSpecial = 14.75;
    let WidthSpecial2 = 32.5;
    let WidthSpecial3 = 22.5;

    let HeightOfMother = document.getElementById("S2Mother1").getBoundingClientRect().height;
    document.getElementById("S2BlackCurtain1").style.height = HeightOfMother + "px";
}

{
//Declaration And Initialization of Variables.
    let boxtext2 = document.getElementById("boxtext2");
    let S2HiddenText1 = document.getElementsByClassName("S2HiddenText1")[0];
    let S2HiddenImage1 = document.getElementById("S2HiddenImage1");
    let S2BlackCurtain1 = document.getElementById("S2BlackCurtain1");
    let S2SubDivision4 = document.getElementById("S2SubDivision4");
    let S2SubSubDivision1 = document.getElementById("S2SubSubDivision1");
    let S2Text3 = document.getElementById("S2Text3");
//Extracting Secondary Elements From Appearing on Landing page.
    boxtext2.style.display = "none";
    S2HiddenText1.style.display = "none";
    S2HiddenImage1.style.display = "none";
    S2BlackCurtain1.style.display = "none";
    S2SubDivision4.classList.remove("S2SubDivision4");
    S2SubSubDivision1.classList.remove("S2SubSubDivision1");
    S2Text3.classList.remove("S2Text3");

    S2BlackCurtain1.addEventListener("click", () => {
        S2SubDivision4.id = "S2SubDivision4";
        S2SubSubDivision1.id = "S2SubSubDivision1";
        S2Text3.id = "S2Text3";

        boxtext2.style.display = "none";
        S2HiddenText1.style.display = "none";
        S2HiddenImage1.style.display = "none";
        S2BlackCurtain1.style.display = "none";
        S2SubDivision4.classList.remove("S2SubDivision4");
        S2SubSubDivision1.classList.remove("S2SubSubDivision1");
        S2Text3.classList.remove("S2Text3");
        let x = 0;
    })

    S2SubDivision4.addEventListener("click", () => {
        S2SubDivision4.id = "";
        S2SubSubDivision1.id = "";
        S2Text3.id = "";

        boxtext2.style.display = "block";
        S2HiddenText1.style.display = "inline";
        S2HiddenImage1.style.display = "inline";
        S2BlackCurtain1.style.display = "block";
        S2SubDivision4.classList.add("S2SubDivision4");
        S2SubSubDivision1.classList.add("S2SubSubDivision1");
        S2Text3.classList.add("S2Text3");
    })

    window.addEventListener("scroll", () => {
        S2SubDivision4.id = "S2SubDivision4";
        S2SubSubDivision1.id = "S2SubSubDivision1";
        S2Text3.id = "S2Text3";

        boxtext2.style.display = "none";
        S2HiddenText1.style.display = "none";
        S2HiddenImage1.style.display = "none";
        S2BlackCurtain1.style.display = "none";
        S2SubDivision4.classList.remove("S2SubDivision4");
        S2SubSubDivision1.classList.remove("S2SubSubDivision1");
        S2Text3.classList.remove("S2Text3");
    })

    S2HiddenImage1.addEventListener("click", (event) => {
        
        event.stopPropagation();
setTimeout(() => {
        S2SubDivision4.id = "S2SubDivision4";
        S2SubSubDivision1.id = "S2SubSubDivision1";
        S2Text3.id = "S2Text3";
        boxtext2.style.display = "none";
        S2HiddenText1.style.display = "none";
        S2HiddenImage1.style.display = "none";
        S2BlackCurtain1.style.display = "none";
        S2SubDivision4.classList.remove("S2SubDivision4");
        S2SubSubDivision1.classList.remove("S2SubSubDivision1");
        S2Text3.classList.remove("S2Text3");
}, 100);
        
    })
}



{
    let x = 1;
    let y = 1;
    let z = 1;
    let i = 0;
    let S2SubDivision5 = document.getElementsByClassName("S2SubDivision5")[0];
    let S2SubSubDivision7L2 = document.querySelectorAll(".S2SubSubDivision7L2");
    let S2Image1 = document.getElementById("S2Image1");
    let S2Text3 = document.getElementById("S2Text3");
    let S2SubSubDivision1 = document.getElementById("S2SubSubDivision1");
    let Type1 = document.getElementById("Type1");
    let Type2 = document.getElementById("Type2");
    let Type3 = document.getElementById("Type3");
    let Type4 = document.getElementById("Type4");
    let Type5 = document.getElementById("Type5");
    let Type6 = document.getElementById("Type6");
    let Type7 = document.getElementById("Type7");
    let Type8 = document.getElementById("Type8");
    let Type9 = document.getElementById("Type9");
    let Type10 = document.getElementById("Type10");
    let Type11 = document.getElementById("Type11");
    let CounterText = document.getElementById("CounterText");
    let TypeHeight = Type1.getBoundingClientRect().height;
    Type11.style.borderBottom = "none";
    S2SubDivision5.addEventListener("touchstart", () => {
        y = 0;
    })
    S2SubSubDivision7L2.forEach((Elements) => {
        Elements.addEventListener("click", () => {
            z = 0;
        })})
    setInterval(() => {
        switch (z) {
            case 1:
                S2Image1.src = "./Apple 1.png";
                S2Text3.textContent = "INTERIOR SIGNS";
                S2SubSubDivision1.style.width = "77%";
                Type11.style.backgroundColor = "transparent";
                Type1.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "1/11";
                z++
                break;

                case 2:
                S2Image1.src = "./NeonLight.jpeg";
                S2Text3.textContent = "NEON SIGNS";
                S2SubSubDivision1.style.width = "60%";
                Type1.style.backgroundColor = "transparent";
                Type2.style.backgroundColor = 'rgba(244, 244, 244, 0.15)';
                CounterText.textContent = "2/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 3:
                S2Image1.src = "./Apple 1.png";
                S2Text3.textContent = "LED SCREEN";
                S2SubSubDivision1.style.width = "62%";
                Type2.style.backgroundColor = "transparent";
                Type3.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "3/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 4:
                S2Image1.src = "./WayFinding.jpeg";
                S2Text3.textContent = "WAY FINDING";
                S2SubSubDivision1.style.width = "65%";
                Type3.style.backgroundColor = "transparent";
                Type4.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "4/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 5:
                S2Image1.src = "./Apple 1.png";
                S2Text3.textContent = "DIRECT LIGHT";
                S2SubSubDivision1.style.width = "66%";
                Type4.style.backgroundColor = "transparent";
                Type5.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "5/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 6:
                S2Image1.src = "./LightBox.jpg";
                S2Text3.textContent = "LIGHTBOX";
                S2SubSubDivision1.style.width = "53%";
                Type5.style.backgroundColor = "transparent";
                Type6.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "6/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 7:
                S2Image1.src = "./IMG-20250108-WA0036.jpg";
                S2Text3.textContent = "ALUCOBOND";
                S2SubSubDivision1.style.width = "63%";
                Type6.style.backgroundColor = "transparent";
                Type7.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "7/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 8:
                S2Image1.src = "./Alucobond Perforated.jpeg";
                S2Text3.textContent = "Alu-Perforated";
                S2SubSubDivision1.style.width = "75%";
                Type7.style.backgroundColor = "transparent";
                Type8.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "8/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 9:
                S2Image1.src = "./ParkingSignage.jpeg";
                S2Text3.textContent = "TRAFFIC SIGNAGE";
                S2SubSubDivision1.style.width = "83%";
                Type8.style.backgroundColor = "transparent";
                Type9.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "9/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 10:
                S2Image1.src = "./One Way Vision.jpeg";
                S2Text3.textContent = "ONE WAY VISION";
                S2SubSubDivision1.style.width = "85%";
                Type9.style.backgroundColor = "transparent";
                Type10.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "10/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                break;

                case 11:
                S2Image1.src = "./IndirectLight1.jpeg";
                S2Text3.textContent = "INDIRECT LIGHT";
                S2SubSubDivision1.style.width = "78%";
                Type10.style.backgroundColor = "transparent";
                Type11.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
                CounterText.textContent = "11/11";
                if(y == 1) {
                    S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
                }
                z++
                z=1;
                break;
        
            default:
                break;
        }
    }, 2200);


    Type1.addEventListener("click", () => {x = 1})
    Type2.addEventListener("click", () => {x = 2})
    Type3.addEventListener("click", () => {x = 3})
    Type4.addEventListener("click", () => {x = 4})
    Type5.addEventListener("click", () => {x = 5})
    Type6.addEventListener("click", () => {x = 6})
    Type7.addEventListener("click", () => {x = 7})
    Type8.addEventListener("click", () => {x = 8})
    Type9.addEventListener("click", () => {x = 9})
    Type10.addEventListener("click", () => {x = 10})
    Type11.addEventListener("click", () => {x = 11})
    S2SubDivision5.addEventListener("click", () =>{
    switch (x) {
    case 1:
        S2Image1.src = "./Apple 1.png";
        S2Text3.textContent = "INTERIOR SIGNS";
        S2SubSubDivision1.style.width = "77%";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type2.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "1/11";
        x++
        break;

        case 2:
        S2Image1.src = "./NeonLight.jpeg";
        S2Text3.textContent = "NEON SIGNS";
        S2SubSubDivision1.style.width = "60%";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type2.style.backgroundColor = 'rgba(244, 244, 244, 0.15)';
        CounterText.textContent = "2/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 3:
        S2Image1.src = "./Apple 1.png";
        S2Text3.textContent = "LED SCREEN";
        S2SubSubDivision1.style.width = "62%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "3/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 4:
        S2Image1.src = "./WayFinding.jpeg";
        S2Text3.textContent = "WAY FINDING";
        S2SubSubDivision1.style.width = "65%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "4/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 5:
        S2Image1.src = "./Apple 1.png";
        S2Text3.textContent = "DIRECT LIGHT";
        S2SubSubDivision1.style.width = "66%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "5/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 6:
        S2Image1.src = "./LightBox.jpg";
        S2Text3.textContent = "LIGHTBOX";
        S2SubSubDivision1.style.width = "53%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "6/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 7:
        S2Image1.src = "./IMG-20250108-WA0036.jpg";
        S2Text3.textContent = "ALUCOBOND";
        S2SubSubDivision1.style.width = "63%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "7/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 8:
        S2Image1.src = "./Alucobond Perforated.jpeg";
        S2Text3.textContent = "Alu-Perforated";
        S2SubSubDivision1.style.width = "75%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "8/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 9:
        S2Image1.src = "./ParkingSignage.jpeg";
        S2Text3.textContent = "TRAFFIC SIGNAGE";
        S2SubSubDivision1.style.width = "83%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "9/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 10:
        S2Image1.src = "./One Way Vision.jpeg";
        S2Text3.textContent = "ONE WAY VISION";
        S2SubSubDivision1.style.width = "85%";
        Type2.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "10/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        break;

        case 11:
        S2Image1.src = "./IndirectLight1.jpeg";
        S2Text3.textContent = "INDIRECT LIGHT";
        S2SubSubDivision1.style.width = "78%";
        Type2.style.backgroundColor = "transparent";
        Type1.style.backgroundColor = "transparent";
        Type3.style.backgroundColor = "transparent";
        Type4.style.backgroundColor = "transparent";
        Type5.style.backgroundColor = "transparent";
        Type6.style.backgroundColor = "transparent";
        Type7.style.backgroundColor = "transparent";
        Type8.style.backgroundColor = "transparent";
        Type9.style.backgroundColor = "transparent";
        Type10.style.backgroundColor = "transparent";
        Type11.style.backgroundColor = "rgba(244, 244, 244, 0.15)";
        CounterText.textContent = "11/11";
        if(y == 1) {
            S2SubDivision5.scrollBy({top: TypeHeight, behavior: "smooth"});
        }
        x++
        x=1;
        break;

    default:
        break;
    }
})
}


