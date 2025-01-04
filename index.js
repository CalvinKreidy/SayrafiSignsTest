//Finding the proportions that will help in setting the scroll bar index's width.
    //Measuring elements and proportions related to 'Division Gallery' and 'Division ScrollBar', and making the scroll bar functional.
    setInterval(() => {
        //DivisionGallery
        let DivisionGallery = document.getElementById("DivisionGallery");
        let DivisionGalleryScrolledWidth = DivisionGallery.scrollLeft;
        let DivisionGalleryTotalWidth = DivisionGallery.scrollWidth;
        let DivisionGalleryScreenWidth = DivisionGallery.getBoundingClientRect().width - 5;
        let DivisionGalleryScrollableWidth = DivisionGalleryTotalWidth - DivisionGalleryScreenWidth;
        let DivisionGallery_VisibleToFull_Ratio = DivisionGalleryScreenWidth / DivisionGalleryTotalWidth; 
        let DivisionGallery_LeftScrolledToScrollableWidth_Ratio = DivisionGalleryScrolledWidth / DivisionGalleryScrollableWidth; 
        //DivisionScrollBar
        let ScrollBarIndex = document.getElementById("ScrollBarIndex");
        let ScrollBarHousing = document.getElementById("ScrollBarHousing").getBoundingClientRect().width - 13.5;
        let ScrollBarIndexSize = ScrollBarIndex.style.width = (ScrollBarHousing * DivisionGallery_VisibleToFull_Ratio) + "px";
        let ScrollBarIndexSizeRaw = ScrollBarIndex.style.width = ScrollBarHousing * DivisionGallery_VisibleToFull_Ratio;
        let ScrollBarScrollableWidth = ScrollBarHousing - ScrollBarIndexSizeRaw;
        let ScrollBarIndexPosition = ScrollBarScrollableWidth * DivisionGallery_LeftScrolledToScrollableWidth_Ratio;
        ScrollBarIndex.style.transform = "translatex(" + ScrollBarIndexPosition + "px)";
     }, );
