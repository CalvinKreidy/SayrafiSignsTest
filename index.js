//Functioning Scroll Bar For Gallery: Moving Scroll Bar
    let DivisionGallery = document.getElementById("DivisionGallery");
    let ScrollBarIndex = document.getElementById("ScrollBarIndex");
    let DivisionGalleryTotalWidth = DivisionGallery.scrollWidth;
    let DivisionGalleryScreenWidth = DivisionGallery.getBoundingClientRect().width - 5;
    let DivisionGalleryScrollableWidth = DivisionGalleryTotalWidth - DivisionGalleryScreenWidth;
    let DivisionGallery_VisibleToFull_Ratio = DivisionGalleryScreenWidth / DivisionGalleryTotalWidth; 
    let ScrollBarHousing = document.getElementById("ScrollBarHousing").getBoundingClientRect().width - 13.5;
    let ScrollBarIndexSize = ScrollBarIndex.style.width = (ScrollBarHousing * DivisionGallery_VisibleToFull_Ratio) + "px";
    let ScrollBarIndexSizeRaw = ScrollBarIndex.style.width = ScrollBarHousing * DivisionGallery_VisibleToFull_Ratio;
    let ScrollBarScrollableWidth = ScrollBarHousing - ScrollBarIndexSizeRaw;

    DivisionGallery.addEventListener("scroll", () => {
        let DivisionGalleryScrolledWidth = DivisionGallery.scrollLeft;
        let DivisionGallery_LeftScrolledToScrollableWidth_Ratio = DivisionGalleryScrolledWidth / DivisionGalleryScrollableWidth; 
       
        let ScrollBarIndexPosition = ScrollBarScrollableWidth * DivisionGallery_LeftScrolledToScrollableWidth_Ratio;
        ScrollBarIndex.style.transform = "translatex(" + ScrollBarIndexPosition + "px)";
    });


//Sectioned Scrolling System
let x = 1;
let z = 1;
let DivisionGalleryScrolledWidth = DivisionGallery.scrollLeft;

{
    DivisionGallery.addEventListener("touchend",() => {
    let DivisionGalleryScrolledWidthTwin = DivisionGallery.scrollLeft;

        if (DivisionGalleryScrolledWidthTwin > DivisionGalleryScrolledWidth) {
        x += 1;
        }
    else if (DivisionGalleryScrolledWidthTwin <  DivisionGalleryScrolledWidth) {
        x -= 1;}

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
    DivisionGalleryScrolledWidth = DivisionGalleryScrolledWidthTwin;
    })
    }
