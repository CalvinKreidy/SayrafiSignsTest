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
    document.getElementById("S2SubDivision5").style.width = spcr + "px";
    document.getElementById("S2SubDivision7").style.width = spcr + "px";

    let WidthOfTypes = document.getElementById("S2SubDivision5").getBoundingClientRect().width;
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
}, 250);
        
    })

    let windowsheightsize = window.innerHeight;
    S2BlackCurtain1.style.height = windowsheightsize + "px";
}

{
    let S2Division2 = document.getElementById("S2Division2");
    let S2SubDivision5 = document.getElementById("S2SubDivision5");
    
    S2Division2.id = "";
    S2SubDivision5.id = "";
}
