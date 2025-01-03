/*Setting the scroll bar index width.
Note: When changing the amount of photos present in the gallery, minor changes in some equations have to be changed to appropriately adapt to the change.*/
    let DivisionGallery = document.getElementById("DivisionGallery");
    let DivisionGalleryWidth = DivisionGallery.offsetWidth - 5;
    let PhotoWidth = DivisionGalleryWidth * 0.35;
    let TotalPhotoWidth = PhotoWidth * 6;

    let WindowHeight = window.innerHeight;
    let GapWidth = WindowHeight * 0.03;
    let TotalGapWidth = GapWidth * 5;

    let TotalGalleryWidth = TotalGapWidth + TotalPhotoWidth;
    let ScreenGalleryWidth = document.getElementById("DivisionGallery").offsetWidth;
    let GallerySeenToFullRatio = ScreenGalleryWidth / TotalGalleryWidth;

    let ScrollBarHousing = document.getElementById("ScrollBarHousing").offsetWidth;
    let ScrollBarIndexSize = ScrollBarHousing * GallerySeenToFullRatio;
    document.getElementById("ScrollBarIndex").style.width = ScrollBarIndexSize + "px";
   

//Setting the scroll bar index's position with respect to the content.

     let ScrollableWidth = (TotalGalleryWidth - ScreenGalleryWidth) + 5;
     setInterval(() => {
        var ScrollBarIndexPosition = (DivisionGallery.scrollLeft / ScrollableWidth) * (ScrollBarHousing - ScrollBarIndexSize);
        var ScrollBarIndex = document.getElementById("ScrollBarIndex");
        ScrollBarIndex.style.transform = "translatex(" + ScrollBarIndexPosition + "px)";
     }, 0);
   
