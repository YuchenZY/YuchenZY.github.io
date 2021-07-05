window.onload = function(){
    //更新时间的注释
    console.log('updated 01/07/2021, 02:07am')

    //店内产品
    var case1={name:"Soft jelly case",price:"15",image:"images/case1.png"};
    var case2={name:"Mercury soft",price:"20",image:"images/case2.png"};
    var case3={name:"Mercury SF(soft feeling)",price:"25",image:"images/case3.png"};
    var case4={name:"Soft premium",price:"20",image:"images/case4.png"};
    var case5={name:"Soft premium+",price:"25",image:"images/case5.png"};
    var case6={name:"Stand armor case",price:"25",image:"images/case6.png"};
    var case7={name:"Armor case 钢甲",price:"25",image:"images/case7.png"};
    var case8={name:"Armor case 拉丝",price:"25",image:"images/case8.png"};
    var case9={name:"Armor case 大黄蜂",price:"25",image:"images/case9.png"};
    var case10={name:"Ring armor case",price:"25",image:"images/case10.png"};
    var case11={name:"Bumper armor case",price:"25",image:"images/case11.png"};
    var case12={name:"One piece armor case",price:"25",image:"images/case12.png"};
    var case14={name:"Tech case 菱格",price:"25",image:"images/case14.png"};
    var case15={name:"Tech pattern case",price:"25",image:"images/case15.png"};
    var case16={name:"Liquid silicon case",price:"25",image:"images/case16.png"};
    var case17={name:"Diamond case",price:"30",image:"images/case17.png"};
    var case18={name:"Card case 圆角",price:"30",image:"images/case18.png"};
    var case19={name:"Fancy diary",price:"25",image:"images/case19.png"};
    var case20={name:"Pattern wallet",price:"30",image:"images/case20.png"};
    var case21={name:"Hanman diary(clip/no clip/slim)",price:"30",image:"images/case21.png"};
    var case23={name:"Rich diary",price:"40",image:"images/case23.png"};
    var case24={name:"IPAD Soft jelly back",price:"20",image:"images/case24.png"};
    var case25={name:"Soft jelly back with pen slot",price:"25",image:"images/case25.png"};
    var case26={name:"Rotation case",price:"30",image:"images/case26.png"};
    var case27={name:"Triple fold flip(hard/soft)",price:"35",image:"images/case27.png"};
    var case28={name:"IPAD Fancy diary",price:"35",image:"images/case28.png"};
    var case29={name:"Pattern flip case",price:"35",image:"images/case29.png"};
    var case30={name:"IPAD Heavy duty case",price:"40",image:"images/case30.png"};
    var case31={name:"B Bird car holder",price:"25",image:"images/case31.png"};
    var case32={name:"Magnetic holder(air vent or wind",price:"25",image:"images/case32.png"};
    var case33={name:"Auto clamp crab holde",price:"30",image:"images/case33.png"};
    var case34={name:"Auto clamp extension holder",price:"30",image:"images/case34.png"};
    var case35={name:"Vonk fast charging cable(lighting/micro USB/TYPE-C)",price:"20",image:"images/case35.png"};
    var case36={name:"Vonk fast cable with auto power cut-off(lighting/micro USB/TYPE-C)",price:"30",image:"images/case36.png"};
    var case37={name:"Hoco M35 earphone",price:"25",image:"images/case37.png"};
    var case38={name:"Armor case with belt clip",price:"25",image:"images/case38.png"};
    var case39={name:"Card case 圆角",price:"30",image:"images/case39.png"};
    var case40={name:"Back Card case",price:"35",image:"images/case40.png"};
    var case41={name:"Heavy duty case",price:"35(5 extra for clip)",image:"images/case41.png"};
    var case42={name:"Heavy duty slim",price:"35",image:"images/case42.png"};
    var case43={name:"Magnetic wallet with zip",price:"50",image:"images/case43.png"};
    var case44={name:"Slim soft",price:"10",image:"images/case44.png"};
    var case45={name:"Bling armor case",price:"25",image:"images/case45.png"};
    var case46={name:"Matt armor case",price:"25",image:"images/case46.png"};
    var case47={name:"Roar rico armor case",price:"25",image:"images/case47.png"};
    var case48={name:"Roar mirror armor case",price:"25",image:"images/case48.png"};
    var case49={name:"Tech case (Dot)",price:"25",image:"images/case49.png"};
    var case50={name:"Flower Case",price:"25",image:"images/case50.png"};
    var case51={name:"Silicon cartoon case",price:"25",image:"images/case51.png"};
    var case52={name:"Roar card case with mirror",price:"30",image:"images/case52.png"};
    var case53={name:"Roar card case with stand",price:"30",image:"images/case53.png"};
    var case54={name:"Hanman back flip card case",price:"35",image:"images/case54.png"};
    var case55={name:"Puloka card case",price:"35",image:"images/case55.png"};
    var case56={name:"EFM aspen armor case",price:"35",image:"images/case56.png"};
    var case57={name:"Metal 360 armor case",price:"40",image:"images/case57.png"};
    var case58={name:"Hanman slim",price:"30",image:"images/case58.png"};
    var case59={name:"Sonata diary",price:"35",image:"images/case59.png"};
    var case60={name:"Mansoor diary",price:"40",image:"images/case60.png"};
    var case61={name:"Hanman magnetic case (old)",price:"40",image:"images/case61.png"};
    var case62={name:"Hanman magnetic case (new) ",price:"40",image:"images/case62.png"};
    var case63={name:"Molan Cano wallet case",price:"40",image:"images/case63.png"};
    var case64={name:"BRG magnetic big wallet",price:"50",image:"images/case64.png"};
    var case65={name:"Caseme magnetic wallet",price:"50",image:"images/case65.png"};
    var case66={name:"EFM Monaco wallet case",price:"50",image:"images/case66.png"};
    var case67={name:"Universal tablet case",price:"20",image:"images/case67.png"};
    var case68={name:"Tablet Tech case",price:"25",image:"images/case68.png"};
    var case69={name:"Tablet Hanman diary case",price:"35",image:"images/case69.png"};
    var case70={name:"Kids cover - one handle",price:"35",image:"images/case70.png"};
    var case71={name:"Kids cover - two handles",price:"35",image:"images/case71.png"};
    var case72={name:"Kids cover - butterfly",price:"35",image:"images/case72.png"};
    var case73={name:"Kids cover 10.2/10.5”",price:"35",image:"images/case73.png"};
    var case74={name:"Bluetooth Keyboard Case",price:"60(mini) or 70(big)",image:"images/case74.png"};
    var case75={name:"Mini car holder",price:"10",image:"images/case75.png"};
    var case76={name:"Car hook",price:"20",image:"images/case76.png"};
    var case77={name:"Tablet Car holder",price:"35",image:"images/case77.png"};
    var case78={name:"Hoco lightning to type-c fast cable",price:"25",image:"images/case78.png"};
    var case79={name:"Hoco 3 metres cable",price:"25",image:"images/case79.png"};
    var case80={name:"Magnetic",price:"5",image:"images/case80.png"};
    var case81={name:"Popsocket (White package)",price:"5",image:"images/case81.png"};
    var case82={name:"Sim card adapter",price:"10",image:"images/case82.png"};
    var case83={name:"Popsocket (Yellow & Blue package)/ I-ring",price:"10",image:"images/case83.png"};
    var case84={name:"Popsocket (airbag)",price:"15",image:"images/case84.png"};
    var case85={name:"Medium/ long stylus",price:"10",image:"images/case85.png"};
    var case86={name:"Card holder with ring sticker",price:"15",image:"images/case86.png"};
    var case87={name:"Selfie light",price:"15",image:"images/case87.png"};
    var case88={name:"Waterproof pouch",price:"15",image:"images/case88.png"};
    var case89={name:"Arm band",price:"15",image:"images/case89.png"};
    var case90={name:"Portable tablet stand",price:"15",image:"images/case90.png"};
    var case91={name:"Universal belt clip",price:"20",image:"images/case91.png"};
    var case92={name:"EFM dual wall charger",price:"30",image:"images/case92.png"};
    var case93={name:"4 in 1 camera lens",price:"35",image:"images/case93.png"};
    var case94={name:"Bluetooth selfie stick with stand",price:"35",image:"images/case94.png"};
    var case95={name:"Mini selfie stick",price:"35",image:"images/case95.png"};
    var case96={name:"Cord car charger",price:"20",image:"images/case96.png"};
    var case97={name:"3sixt 3.4A car charger set (with cable)",price:"30",image:"images/case97.png"};
    var case98={name:"3sixt 5.4A quick car charger",price:"35",image:"images/case98.png"};
    var case99={name:"3sixt 5.4A quick car charger set (with cable)",price:"40",image:"images/case99.png"};
    var case100={name:"Airpods / Airpods pro rubber cover",price:"20",image:"images/case100.png"};
    var case101={name:"Airpods pro leather looking cover",price:"25",image:"images/case101.png"};
    var case102={name:"Nylon watch bands",price:"30",image:"images/case102.png"};
    var case103={name:"Milane watch bands",price:"40",image:"images/case103.png"};
    var case104={name:"Stainless steel watch bands",price:"60",image:"images/case104.png"};
    var case105={name:"Stainless steel premium watch bands",price:"70",image:"images/case105.png"};
    var case106={name:"Soft 拉丝",price:"20",image:"images/case106.png"}; 

    //Iphone
    var iphone1 = {name:"Iphone11 Pro Max", desc:"[6.5 inches, triple rear cameras，rounded edge]", images:"images/iphone1.png"};
    var iphone2 = {name:"Iphone11 Pro", desc:"[5.8 inches, triple rear cameras，rounded edge]", images:"images/iphone2.png"};
    var iphone3 = {name:"Iphone11", desc:"[6.1 inches, two rear cameras and one flash light，rounded edge]", images:"images/iphone3.png"};
    var iphone4 = {name:"Iphone XS MAX", desc:"[6.5 inches, two cameras and one flash light，rounded edge]", images:"images/iphone4.png"};
    var iphone5 = {name:"Iphone X/XS", desc:"[5.8 inches,Two rear cameras，rounded edge]", images:"images/iphone5.png"};
    var iphone6 = {name:"Iphone XR ", desc:"[6.1 inches, one camera，rounded edge]", images:"images/iphone6.png"};
    var iphone8 = {name:"Iphone 7/8 plus", desc:"[5.5 inches, bottom Speaker equal to each other, no earphone plug]", images:"images/iphone8.png"};
    var iphone9 = {name:"Iphone 7/8", desc:"[4.7 inches, bottom speaker equal to each other, no earphone plug]", images:"images/iphone9.png"};
    var iphone10 = {name:"Iphone 6/6s/6 Plus/6s Plus", desc:"[4.7/5.5 inches, have earphone plug]", images:"images/iphone10.png"};
    var iphone11 = {name:"Iphone 5c", desc:"[bright color]", images:"images/iphone11.png"};
    var iphone12 = {name:"Iphone 12 Pro Max", desc:"[6.7 inches, triple rear cameras，verticle edge]", images:"images/iphone12.jpg"};
    var iphone13 = {name:"Iphone 12 Pro", desc:"[6.1 inches, triple rear cameras，verticle edge]", images:"images/iphone13.jpg"};
    var iphone14 = {name:"Iphone 12", desc:"[6.1 inches, two rear cameras，verticle edge]", images:"images/iphone14.jpg"};
    var iphone15 = {name:"Iphone 12 mini", desc:"[5.4 inches, two rear cameras，verticle edge]", images:"images/iphone15.jpg"};

    //Ipad
    var ipad1 = {name:"IPAD mini 3", desc:"[Microphone hole in the middle, touch ID unlock, single camera, slient button]", images:"images/ipad1.png"};
    var ipad2 = {name:"IPAD mini/mini 2", desc:"[Microphone hole in the middle, no Touch ID unlock, single camera, slient button]", images:"images/ipad2.png"};
    var ipad3 = {name:"IPAD mini 4", desc:"[Touch ID unlock, no silence button, microphone hole on the right of camera]", images:"images/ipad3.png"};
    var ipad4 = {name:"IPAD mini5(2019)", desc:"[Touch ID unlock, no silence button, one microphone hole on the back middle]", images:"images/ipad4.png"};
    var ipad5 = {name:"IPAD 2/3/4", desc:"[Wide bezel on the front，large charge port, 9.7 inches]", images:"images/ipad5.png"};
    var ipad6 = {name:"IPAD Air1", desc:"[No finger print access，single camera, microphone in the middle, 9.7 inches]", images:"images/ipad6.png"};
    var ipad7 = {name:"IPAD Air2", desc:"[Finger print access，no silent button, tiny microphone on the right of rear camera, 9.7 inches]", images:"images/ipad7.png"};
    var ipad8 = {name:"IPAD 9.7(2017/2018)", desc:"[Camera only, no flash light，touch ID home button, no silent button, microphone at the middle, 9.7 inches]", images:"images/ipad8.png"};
    var ipad9 = {name:"IPAD Pro 11(2018)", desc:"[Many pin holes on top, no home button]", images:"images/ipad9.png"};
    var ipad10 = {name:"IPAD Pro 12.9inch(2015)", desc:"[12.9 inches, camera and flash light beside each other, has home button]", images:"images/ipad10.png"};
    var ipad11 = {name:"IPAD Pro 12.9inch(2017)", desc:"[12.9 inches, vertical shape, camera on top and flash light under, has home button]", images:"images/ipad11.png"};
    var ipad12 = {name:"IPAD Pro 10.5inch", desc:"[Vertical shape, camera on top and flash light under, has home button]", images:"images/ipad12.png"};
    var ipad13 = {name:"IPAD Pro 9.7inch(2016)", desc:"[Camera above the flash light]", images:"images/ipad13.png"};
    var ipad14 = {name:"IPAD Air 4", desc:"[Touch ID, no silent button & no home button, no flash light, microphone on the middle, square edge]", images:"images/ipad14.jpg"};
    var ipad15 = {name:"IPAD Pro 12.9(2020)", desc:"[12.9 inches, back island camera, no home button, square edge]", images:"images/ipad15.png"};
    var ipad16 = {name:"iPad Pro 11 (2020)", desc:"[11 inches, back island camera, no home button, square edge]", images:"images/ipad16.png"};
    var ipad17 = {name:"iPad Pro 12.9 (2018)", desc:"[12.9 inches, no home button, no framing on the rear camera, flash light right under, top and bottom both having speakers]", images:"images/ipad17.png"};

    //三星手机
    var samsung1 = {name:"Samsung S10/S10+", desc:"[6.4/6.7 inches, three camera lens with flash light]", images:"images/samsung1.png"};
    var samsung2 = {name:"Samsung S8/S8+", desc:"[5.8/6.2 inches, three objects on the back, flash light, square camera, fingerprint unlock]", images:"images/samsung2.png"};
    var samsung3 = {name:"Samsung S9/S9+", desc:"[5.8/6.2 inches, camera above fingerprint, fingerprint recognition on the back, small rectangle glass lense beside]", images:"images/samsung3.png"};
    var samsung4 = {name:"Samsung S7", desc:"[5.1 inches, home button, square framed camera, flash light on the right, single hole at the top]", images:"images/samsung4.png"};
    var samsung5 = {name:"Samsung S7 Edge", desc:"[5.5 inches, edge curved screen, home button, square framed camera on back, flash light on the right]", images:"images/samsung5.png"};
    var samsung7 = {name:"Samsung Note 10/10Plus", desc:"[6.3/6.8 inches, long thin cameras frame]", images:"images/samsung7.png"};
    var samsung8 = {name:"Samsung Note9", desc:"[6.4 inches, back is the shape of “丅”]", images:"images/samsung8.png"};
    var samsung9 = {name:"Samsung Note8", desc:"[6.3 inches]", images:"images/samsung9.png"};
    var samsung10 = {name:"Samsung S3", desc:"[4.8 inches, round corner, 3 objects at the back in the layout of 'left, middle, and right']", images:"images/samsung10.png"};
    var samsung11 = {name:"Samsung S4", desc:"[5 inches, ertically laid camera and flash light, linear speaker on the bottom left up]", images:"images/samsung11.png"};
    var samsung12 = {name:"Samsung S6", desc:"[5.1 inches, camera is at the left, two holes at the top]", images:"images/samsung12.png"};
    var samsung13 = {name:"Samsung S6 Edge", desc:"[5.1 inches, curved screen, two holes at the top]", images:"images/samsung13.png"};
    var samsung14 = {name:"Samsung Note3", desc:"[5.7 inches, has home button, pen hole at bottom left]", images:"images/samsung14.png"};
    var samsung15 = {name:"Samsung Note4", desc:"[5.7 inches, pen hole and linear speaker on the bottom left part]", images:"images/samsung15.png"};
    var samsung16 = {name:"Samsung Note5", desc:"[5.7 inches, has home button, camera and flash light from left to right, pen hole on the bottom left]", images:"images/samsung16.png"};
    var samsung17 = {name:"Samsung J2 Pro(2018)", desc:"[5 inches, round corners all around, thin linear shape beside the camera island]", images:"images/samsung17.png"};
    var samsung19 = {name:"Samsung J8", desc:"[6 inches, two cameras, fingerprint unlock, no home button]", images:"images/samsung19.png"};
    var samsung20 = {name:"Samsung A8", desc:"[5.7 inches]", images:"images/samsung20.png"};
    var samsung21 = {name:"Samsung A10", desc:"[6.2 inches, no home button, one dot camera front, top left corner camera and flash light]", images:"images/samsung21.png"};
    var samsung22 = {name:"Samsung A20/30", desc:"[6.4 inches, one dot camera front, fingerprint access at the back, two camers on back, one singled out flash light below]", images:"images/samsung22.png"};
    var samsung23 = {name:"Samsung A50", desc:"[One dot camera front, three cameras + one singled out flash light, no fingerprint access on back]", images:"images/samsung23.png"};
    var samsung24 = {name:"Samsung Galaxy S21", desc:"[6.2 inches, three outstanding eyes recessed into metal module, stand alone flash light beside Matte Glass front and glass back]", images:"images/samsung24.jpg"};
    var samsung25 = {name:"Samsung Galaxy S21 plus", desc:"[6.7 inches, three cameras lined up vertically and one flash light set alone.]", images:"images/samsung25.jpg"};
    var samsung26 = {name:"Samsung Galaxy S21 Ultra", desc:"[6.8 inches, glass front and glass back with S PEN A slightly wide island module on the back 4 cameras]", images:"images/samsung26.jpg"};
    var samsung27 = {name:"Samsung Galaxy S20 FE", desc:"[6.5 inches, phone body is bigger than s20. Plastic back. S20  flagship is with glass back. S20 FE front screen flat, s20 curved screen.]", images:"images/samsung27.jpg"};
    var samsung28 = {name:"Samsung Galaxy S20 ultra", desc:"[6.9 inches, 4 cameras One stand out telephoto camera below]", images:"images/samsung28.jpg"};
    var samsung29 = {name:"Samsung Galaxy Note 20", desc:"[6.7 inches, glass front / plastic back]", images:"images/samsung29.jpg"};
    var samsung30 = {name:"Samsung Galaxy Note 20 ultra", desc:"[6.9 inches, glass front / glass back, laser auto focus sensor under flash]", images:"images/samsung30.jpg"};
    var samsung31 = {name:"Samsung J7 Pro 2017", desc:"[5.5 inches, camera and flashlight cover by straight black outline]", images:"images/samsung31.png"};
    var samsung32 = {name:"Samsung J5 Pro 2017", desc:"[5.2 inches, camera and flashlight cover by straight black outline]", images:"images/samsung32.png"};
    var samsung33 = {name:"Samsung J7 Prime (2016)", desc:"[5.5 inches, Single Camera in the middle with flash on the right]", images:"images/samsung33.png"};
    var samsung34 = {name:"Samsung J5 Prime (2016)", desc:"[5 inches, Single Camera in the middle with flash on the right]", images:"images/samsung34.png"};
    var samsung35 = {name:"Samsung A51 (2019)", desc:"[6.5 inches, 4 Camera with flash light]", images:"images/samsung35.png"};
    var samsung36 = {name:"Samsung A70 (2019)", desc:"[6.7 inches, Three cameras + one singled out flash light, no fingerprint access at the back]", images:"images/samsung36.png"};
    
    //其它小型号手机
    var otherPhone1 = {name:"HUAWEI P30", desc:"[6.15 inches，one dot camera front, oval round shape of fingerprint access on back, three cameras and one singled out  flash light, log at the left bottom corner]", images:"images/otherPhone1.png"};
    var otherPhone2 = {name:"HUAWEI P30 Pro", desc:"[6.47 inches，one dot camera front, three cameras framed on one island, bottom left logo]", images:"images/otherPhone2.png"};
    var otherPhone3 = {name:"HUAWEI Mate20", desc:"[6.53 inches，square island on the back with 3 cameras and one flash light, fingerprint access on the back]", images:"images/otherPhone3.png"};
    var otherPhone4 = {name:"HUAWEI Mate20 Pro", desc:"[6.39 inches，square framed rear cameras, left top is flash light, no fingerprint access]", images:"images/otherPhone4.png"};
    var otherPhone5 = {name:"HUAWEI Mate30 Pro", desc:"[6.53 inches，three cameras front, four cameras back on round swirl shape]", images:"images/otherPhone5.png"};
    var otherPhone6 = {name:"HUAWEI P20", desc:"[5.8 inches]", images:"images/otherPhone6.png"};
    var otherPhone7 = {name:"HUAWEI Nova 3i", desc:"[6.3 inches，a straight recessed line front ( camera and other stuff ); two cameras, flash light and touch ID at the back side]", images:"images/otherPhone7.png"};
    var otherPhone8 = {name:"Google Pixel 4", desc:"[5.7 inches，square island top left on back, flash light on the bottom of the island, Front one single line black]", images:"images/otherPhone8.png"};
    var otherPhone9 = {name:"Google Pixel 3/3 XL", desc:"[5.5/6.3 inches]", images:"images/otherPhone9.png"};
    var otherPhone10 = {name:"Google Pixel 3a/ 3a XL", desc:"[5.6/6 inches]", images:"images/otherPhone10.png"};
    var otherPhone11 = {name:"Google Pixel 2", desc:"[5 inches，top and bottom linear speaker on front, flash light before camera, two pin holes microphone below]", images:"images/otherPhone11.png"};
    var otherPhone12 = {name:"OPPO A57", desc:"[One camera, microphone in between, flash light]", images:"images/otherPhone12.png"};
    var otherPhone13 = {name:"OPPO R17 Pro", desc:"[6.4 inches, three cameras on the middle top]", images:"images/otherPhone13.png"};
    var otherPhone14 = {name:"OPPO Ax5", desc:"[6.2 inches, two camera lens and flash light on the back]", images:"images/otherPhone14.png"};
    var otherPhone15 = {name:"HUAWEI P20 Pro (2018)", desc:"[6.1 inches, home button in the front side, three cameras and flash light at the back]", images:"images/otherPhone15.png"};
    var otherPhone16 = {name:"HUAWEI P20 Lite / Nova 3e", desc:"[5.84 inches, no home button, has fingerprint access on the back, two cameras with flash, no speaking on the back]", images:"images/otherPhone16.png"};
    var otherPhone17 = {name:"HUAWEI Mate 10 (2017)", desc:"[5.9 inches, Have Home Button]", images:"images/otherPhone17.png"};
    var otherPhone18 = {name:"HUAWEI Mate 10 Lite/ Nova 2i (2017)", desc:"[5.9 inches, two camera in one slot, flash on top of the camera, fingerprint access on the back, no home button]", images:"images/otherPhone18.png"};
    var otherPhone19 = {name:"HUAWEI Mate 9 (2016)", desc:"[5.9 inches]", images:"images/otherPhone19.png"};
    var otherPhone20 = {name:"Pixel 2 XL (2017)", desc:"[6 inches, front speaker on the very top of the screen]", images:"images/otherPhone20.png"};
    var otherPhone21 = {name:"Pixel  (2016)", desc:"[5 inches, fingerprint access on the back, Flash -> Camera -> Speaker on the top]", images:"images/otherPhone21.png"};
    var otherPhone22 = {name:"Pixel  XL (2016)", desc:"[5.5 inches, Fingerprint access on the back, Flash -> Camera -> Speaker on the top, Cases normally (Camera Part) have a long hole]", images:"images/otherPhone22.png"};
    var otherPhone23 = {name:"R17 (2018)", desc:"[6.4 inches, two camera lens with flash light, only one front camera]", images:"images/otherPhone23.png"};
    var otherPhone24 = {name:"R15 (2018)", desc:"[6.28 inches, two camera lens with flash light located on the right (similar to ip8 plus), fingerprint access on the back]", images:"images/otherPhone24.png"};
    var otherPhone25 = {name:"R11(2017)", desc:"[5.5 inches, two camera lens with flash light located on the right (similar to ip8 plus), has Home button, no fingerprint access]", images:"images/otherPhone25.png"};
    var otherPhone26 = {name:"R11 Plus (2017)", desc:"[6 inches, two camera lens with flash light located on the right (similar to ip8 plus), has Home button, no fingerprint access]", images:"images/otherPhone26.png"};
    var otherPhone27 = {name:"R11s (2017)", desc:"[6.01 inches, two camera lens with flash light located on the right (similar to ip8 plus), no home button, fingerprint access on the back]", images:"images/otherPhone27.png"};
    var otherPhone28 = {name:"R11s Plus (2017)", desc:"[6.43 inches, two camera lens with flash light located on the right (similar to ip8 plus), no home button, fingerprint access on the back]", images:"images/otherPhone28.png"};

    //小型号平板，三星平板
    var otherTablet1 = {name:"OTab A 10.1” T510 (2019)", desc:"[Camera on the left corner in square shape]", images:"images/otherTab1.png"};
    var otherTablet2 = {name:"Tab A 8” T290 (2019)", desc:"[Camera on the left corner in square shape Same as Tab A 10.1” T510, just in smaller size]", images:"images/otherTab2.png"};
    var otherTablet3 = {name:"Tab A 10.5” T590 (2018)", desc:"[Camera located in the top middle part Flash light just under the camera]", images:"images/otherTab3.png"};
    var otherTablet4 = {name:"Tab A 8” T380 (2017)", desc:"[Camera located in the top middle part Flash light just under the camera]", images:"images/otherTab4.png"};
    var otherTablet5 = {name:"Tab A 7” T280 (2016)", desc:"[Speaker on the left, Camera in the top middle part, *Only this tablet has the speaker on the left]", images:"images/otherTab5.png"};
    var otherTablet6 = {name:"Tab A 10.1” P580 (2016)", desc:"[*Tablet with a pen, *Case have a extra pen space for it]", images:"images/otherTab6.png"};
    var otherTablet7 = {name:"Tab A 10.1” T580 (2016)", desc:"[Camera located in the top middle part Flash, light located on the right size, no pen]", images:"images/otherTab7.png"};
    var otherTablet8 = {name:"Tab A 8” T350 (2015)", desc:"[Single square camera]", images:"images/otherTab8.png"};
    var otherTablet9 = {name:"S6 10.5” T860 (2019)", desc:"[The only one table which has two camera lens in one slot, Pen located on the back below camera]", images:"images/otherTab9.png"};
    var otherTablet10 = {name:"S5e 10.5” T720 (2019)", desc:"[Square camera on the top left]", images:"images/otherTab10.png"};
    var otherTablet11 = {name:"S4 10.5” T830 (2018)", desc:"[Square camera on the middle top, Flash light just under the camera]", images:"images/otherTab11.png"};
    var otherTablet12 = {name:"S3 9.7” T820 (2017)", desc:"[Square camera on the middle top Flash light just under the camera]", images:"images/otherTab12.png"};
    var otherTablet13 = {name:"S2 8” T710 (2015)", desc:"[One single camera on the back]", images:"images/otherTab13.png"};
    
    //day1 多选题题库(day1默认包含所有iPhone型号，即iphoneList的内容)； 可加入型号
    var day1List = new Array(samsung1, samsung24, samsung25, samsung26, samsung27, samsung28, samsung29, samsung30, samsung7);
    //day2 默认为ipad题库
    //day3 多选题题库；可加入产品
    var day3List = new Array(case75, case76, case77, case78, case79, case80, case81, case82, case83, case84, case85, case86, case87, case88, case89, case90,
        case91, case92, case93, case94, case95, case96, case97, case98, case99, case100, case101, case102, case103, case104, case105);
    //iphone 题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var iphoneList = new this.Array(iphone1,iphone2,iphone3,iphone4,iphone5,iphone6,iphone8,iphone9,iphone10,iphone11,iphone12,
        iphone13,iphone14,iphone15);
    //ipad 题库，同时也是day2 题库； 此外， iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var ipadList = new this.Array(ipad1, ipad2,ipad3, ipad4,ipad5,ipad6,ipad7, ipad8, ipad9, ipad10, ipad11, ipad12, ipad13, ipad14,
        ipad15, ipad16, ipad17);
    //三星主流手机型号题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var samsungList = new this.Array(samsung1, samsung2, samsung3, samsung4, samsung5, samsung7, samsung8, samsung9, samsung10,
        samsung11, samsung12, samsung13, samsung14, samsung15, samsung16, samsung17, samsung19, samsung20, samsung21, samsung22,
        samsung23, samsung24, samsung25, samsung26, samsung27, samsung28, samsung29, samsung30, samsung31, samsung32, samsung33, samsung34,
        samsung35, samsung36);
    //小型号手机题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var otherPhoneList = new this.Array(otherPhone1, otherPhone2, otherPhone3, otherPhone4, otherPhone5, otherPhone6, otherPhone7, otherPhone8,
        otherPhone9, otherPhone10, otherPhone11, otherPhone12, otherPhone13, otherPhone14, otherPhone15, otherPhone16, otherPhone17, otherPhone18, otherPhone19, otherPhone20,
        otherPhone21, otherPhone22, otherPhone23, otherPhone24, otherPhone25, otherPhone26, otherPhone27, otherPhone28);
    //店内产品题库， 也就是主页上的"case and accessaries identification" ；可加入产品
    var caseList=new Array(case1, case2, case3, case4, case5, case6, case7, case8, case9, case10,case11, case12, case14, case15, 
        case16, case17, case18, case19, case20, case21, case23, case24, case25, case26, case27, case28, case29, case30, case31, 
        case32, case33, case34, case35, case36, case37, case38, case39, case40, case41, case42, case43, case44, case45, case46, case47, case48, case49, case50, case51,
        case52, case53, case54, case55, case56, case57, case58, case59, case60, case61, case62, case63, case64, case65, case66, case67, case68, case69, case70, case71, case72, case73,
        case74, case75, case76, case77, case78, case79, case80, case81, case82, case83, case84, case85, case86, case87, case88, case89, case90, case91, case92, case93, case94, case95,
        case96, case97, case98, case99, case100, case101, case102, case103, case104, case105, case106);
    //三星平板题库，也就是主页上的 “samsung tablet model identification”；可加入型号
    var otherTabList=new Array(otherTablet1, otherTablet2, otherTablet3, otherTablet4, otherTablet5, otherTablet6, otherTablet7, otherTablet8, otherTablet9, otherTablet10, otherTablet11,
        otherTablet12, otherTablet13);
    
    //以下18行不建议修改
    var caseI = 1;
    var modelI = 1;
    var stabI = 1;
    var day1I = 1;
    var day2I = 1;
    var day3I = 1;
    var caseScore = 0;
    var phoneScore = 0;
    var stabScore = 0;
    var day1MultiScore = 0;
    var day2MultiScore = 0;
    var day3MultiScore = 0;
    var caseQuestionList = [];
    var phoneQuestionList = [];
    var stabQuestionList = [];
    var day1QuestionList = [];
    var day2QuestionList = [];
    var day3QuestionList = [];

    //hide all page for showing the right page
    var resetDisplay = function(){
        document.getElementById("learnDiv").style.display = "none";
        document.getElementById("caseDiv").style.display = "none";
        document.getElementById("phoneDiv").style.display = "none";
        document.getElementById("generalDiv").style.display = "none";
        document.getElementById("stabDiv").style.display = "none";
        document.getElementById("day1MultiDiv").style.display = "none";
        document.getElementById("day2MultiDiv").style.display = "none";
        document.getElementById("day3MultiDiv").style.display = "none";
        document.getElementById("day1FillDiv").style.display = "none";
        document.getElementById("day2FillDiv").style.display = "none";
        document.getElementById("day3FillDiv").style.display = "none";
    }

    //所有...Gen 函数的功能和实现逻辑都类似，设置一个list arr以及一个list arr2, arr和arr2在初始状态下相等，即出题范围；每生成一个正确答案为i的题目，则i从arr中被剔除（即可避免重复出题）；
    //生成每个单一题目的过程中，每生成一个错误答案m,则m从arr2中被剔除（避免正确答案被混入错误答案），并在生成下一道题目时重置
    var otherPhoneQuestionGen = function(){
        var arr = otherPhoneList.slice();
        var loopNum = Math.min(10, otherPhoneList.length); //生成题目的数量
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length)); //随机生成正确答案的index
            var rightAnswerPlace = Math.floor((Math.random()*4)); //正确答案在题目中的位置
            rightAnswer = arr[randomNumber]; //从出题范围中获取正确答案的具体信息
            arr.splice(randomNumber,1); //从arr1中剔除正确答案避免重复出题
            arr2.splice(randomNumber,1); //从arr2中剔除正确答案避免正确答案的选项重复出现

            //生成错误答案
            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length)); //随机生成错误答案1 的index
            var wrongAnswer1 = arr2[wrongAnswer1Place]; //根据上一行随机生成的index获取错误答案1 的具体信息
            arr2.splice(wrongAnswer1Place,1); //将错误答案从arr2中剔除，避免错误答案重复出现，下同

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            arr2.splice(wrongAnswer3Place,1);
           
            //一道选择题有四个选项，正确答案的位置由变量rightAnswerPlace决定，根据正确答案在题目中位置的不同生成不同的html； 
            //！！复用代码时注意修改class name "answer-?" ！！
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>"
                + rightAnswer.name + "</button>";
            }

            //将刚才生成的（关于题目选项）html和下列（关于题目说明的）html一起加入...QuestionList，每当需要在页面上显示一道新题目时，就从这个list中抛出一道；具体详见文件底部的一系列click function 
            //题目是关于手机型号时，题目说明的内容是 “what is this model”，选项是型号名称
            //题目时关于店内产品时，题目说明的内容是 “what is this and how much is it?”, 选项是产品名称和价格；复用代码时需注意
            //！！复用代码时注意修改id "..Contiunue" ！！
            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; what is this mode? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='modelContinue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            phoneQuestionList.push(newQuestion);
        }
    }

    var day1Gen = function(){
        var arr = day1List.slice();
        var loopNum = Math.min(5, samsungList.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; What is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='day1Continue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            day1QuestionList.push(newQuestion);
        }
    }

    var day1bGen = function(){
        var arr = iphoneList.slice();
        var loopNum = Math.min(5, samsungList.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day1 right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; What is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='day1Continue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            day1QuestionList.push(newQuestion);
        }
    }

    var day2Gen = function(){
        var arr = ipadList.slice();
        var loopNum = Math.min(5, ipadList.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day2 right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; What is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='day2Continue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            day2QuestionList.push(newQuestion);
        }
    }

    var day3Gen = function(){
        var arr = day3List.slice();
        var loopNum = Math.min(10, day3List.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 right-answer'>" +
                rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" + wrongAnswer1.name + " , $" + wrongAnswer1.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 wrong-answer'>" + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-day3 right-answer'>"
                + rightAnswer.name + " , $" + rightAnswer.price + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'> what is this and how much is it?</h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.image + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='day3Continue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            day3QuestionList.push(newQuestion);
        }
    }

    var samsungQuestionGen = function(){
        var arr = samsungList.slice();
        var loopNum = Math.min(10, samsungList.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; What is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='modelContinue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            phoneQuestionList.push(newQuestion);
        }
    }

    var samsungTabQuestionGen = function(){
        var arr = otherTabList.slice();
        var loopNum = Math.min(10, otherTabList.length);
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-stab right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; what is this model?</h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='stabContinue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            stabQuestionList.push(newQuestion);
        }
    }

    var ipadQuestionGen = function(){
        var arr = ipadList.slice();
        var loopNum = Math.min(10, ipadList.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; what is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='modelContinue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            phoneQuestionList.push(newQuestion);
        }
    }

    var phoneQuestionGen = function(){
        var arr = iphoneList.slice();
        var loopNum = Math.min(10, iphoneList.length);
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];
            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            // arr2.remove(wrongAnswer1Place);
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            // arr2.remove(wrongAnswer2Place);
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            // arr2.remove(wrongAnswer3Place);
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" +
                rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer1.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>" + rightAnswer.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>"
                + wrongAnswer3.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" +
                wrongAnswer1.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer2.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone wrong-answer'>" + wrongAnswer3.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-phone right-answer'>"
                + rightAnswer.name + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'>" + rightAnswer.desc + "; what is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.images + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='modelContinue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            phoneQuestionList.push(newQuestion);
        }
    }

    var caseQuestionGen = function(){
        var arr = caseList.slice();
        var loopNum = 10;
        
        for(var i = 1; i <= loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            rightAnswer = arr[randomNumber];

            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" +
                rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer1.name + " , $" + wrongAnswer1.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>"
                + rightAnswer.name + " , $" + rightAnswer.price + "</button>";
            }

            newQuestion = "<h3 style='text-align: center;'> what is this and how much is it?</h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.image + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='caseContinue' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            caseQuestionList.push(newQuestion);
        }
    }

    //下列50行均为导航栏点击函数，每当一个导航栏按键被点击，触发resetDisplay函数隐藏页面上所有内容，然后让特定内容重新显示；复用代码时注意id要与html文件中的id相匹配
    this.document.getElementById("learnButton").onclick = function(){
        resetDisplay();
        document.getElementById("learnDiv").style.display = "block";
    }

    this.document.getElementById("caseTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("caseDiv").style.display = "block";
    }

    this.document.getElementById("modelTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("phoneDiv").style.display = "block";
    }

    this.document.getElementById("stabTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("stabDiv").style.display = "block";
    }

    this.document.getElementById("day1Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day1MultiDiv").style.display = "block";
    }

    this.document.getElementById("day2Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day2MultiDiv").style.display = "block";
    }

    this.document.getElementById("day3Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day3MultiDiv").style.display = "block";
    }

    this.document.getElementById("day1Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day1FillDiv").style.display = "block";
    }

    this.document.getElementById("day2Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day2FillDiv").style.display = "block";
    }

    this.document.getElementById("day3Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day3FillDiv").style.display = "block";
    }

    //点击选择题选项时触发的函数
    $(document).on('click','.answer-case',function(){ //触发索引使用的class name需与生成题目选项（之前的..Gen系列函数）时的class name匹配
        $(".answer-case").removeClass("btn-success"); //使用Bootstrap框架改颜色
        $(".answer-case").removeClass("btn-danger");
        $(".answer-case").addClass("btn-secondary");
        $(".right-answer.answer-case").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-case right-answer"); //正确答案变绿
        $(".wrong-answer.answer-case").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-case wrong-answer"); //错误答案变红
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            caseScore++; //如果点击的选项时正确答案，分数加1
        } 
    });

    $(document).on('click','.answer-phone',function(){
        $(".answer-phone").removeClass("btn-success");
        $(".answer-phone").removeClass("btn-danger");
        $(".answer-phone").addClass("btn-secondary");
        $(".right-answer.answer-phone").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-phone right-answer");
        $(".wrong-answer.answer-phone").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-phone wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            phoneScore++;
        }    
    });

    $(document).on('click','.answer-stab',function(){
        $(".answer-stab").removeClass("btn-success");
        $(".answer-stab").removeClass("btn-danger");
        $(".answer-stab").addClass("btn-secondary");
        $(".right-answer.answer-stab").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-stab right-answer");
        $(".wrong-answer.answer-stab").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-stab wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            stabScore++;
        }    
    });

    $(document).on('click','.answer-day1',function(){
        $(".answer-day1").removeClass("btn-success");
        $(".answer-day1").removeClass("btn-danger");
        $(".answer-day1").addClass("btn-secondary");
        $(".right-answer.answer-day1").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day1 right-answer");
        $(".wrong-answer.answer-day1").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day1 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day1MultiScore++;
        }    
    });

    $(document).on('click','.answer-day2',function(){
        $(".answer-day2").removeClass("btn-success");
        $(".answer-day2").removeClass("btn-danger");
        $(".answer-day2").addClass("btn-secondary");
        $(".right-answer.answer-day2").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day2 right-answer");
        $(".wrong-answer.answer-day2").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day2 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day2MultiScore++;
        }    
    });

    $(document).on('click','.answer-day3',function(){
        $(".answer-day3").removeClass("btn-success");
        $(".answer-day3").removeClass("btn-danger");
        $(".answer-day3").addClass("btn-secondary");
        $(".right-answer.answer-day3").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day3 right-answer");
        $(".wrong-answer.answer-day3").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day3 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day3MultiScore++;
        }    
    });

    //填空题的验证函数，点击页面上的submit按钮时触发， 此处的索引id也要与生成时的匹配
    $(document).on('click','#day1Submit',function(){
        $("#day1Submit").addClass('disabled'); //submit按钮点击一次后便不能再点
        $("#day1Submit").prop('disabled', true);
        if($("#day1Fill_1").val() == 30){
            document.getElementById("day1Fill_1_right").style.display = "block";
        }
        if($("#day1Fill_1").val() != 30){
            document.getElementById("day1Fill_1_wrong").style.display = "block";
        };
        if($("#day1Fill_2").val() == 10){
            document.getElementById("day1Fill_2_right").style.display = "block";
        }
        if($("#day1Fill_2").val() != 10){
            document.getElementById("day1Fill_2_wrong").style.display = "block";
        };
        if($("#day1Fill_3").val() == 40){
            document.getElementById("day1Fill_3_right").style.display = "block";
        }
        if($("#day1Fill_3").val() != 40){
            document.getElementById("day1Fill_3_wrong").style.display = "block";
        };
        if($("#day1Fill_4").val() == 'No'){
            document.getElementById("day1Fill_4_right").style.display = "block";
        }
        if($("#day1Fill_4").val() == 'no'){
            document.getElementById("day1Fill_4_right").style.display = "block";
        }
        if($("#day1Fill_4").val() != 'No' && $("#day1Fill_4").val() != 'no'){
            document.getElementById("day1Fill_4_wrong").style.display = "block";
        }
        if($("#day1Fill_5").val() == 'No'){
            document.getElementById("day1Fill_5_right").style.display = "block";
        }
        if($("#day1Fill_5").val() == 'no'){
            document.getElementById("day1Fill_5_right").style.display = "block";
        }
        if($("#day1Fill_5").val() != 'No' && $("#day1Fill_5").val() != 'no'){
            document.getElementById("day1Fill_5_wrong").style.display = "block";
        }
    })

    $(document).on('click','#day2Submit',function(){
        $("#day2Submit").addClass('disabled');
        $("#day2Submit").prop('disabled', true);
        if($("#day2Fill_1").val() == 25){
            document.getElementById("day2Fill_1_right").style.display = "block";
        }
        if($("#day2Fill_1").val() != 25){
            document.getElementById("day2Fill_1_wrong").style.display = "block";
        };
        if($("#day2Fill_2").val() == 35){
            document.getElementById("day2Fill_2_right").style.display = "block";
        }
        if($("#day2Fill_2").val() != 35){
            document.getElementById("day2Fill_2_wrong").style.display = "block";
        };
        if($("#day2Fill_3").val() == 25){
            document.getElementById("day2Fill_3_right").style.display = "block";
        }
        if($("#day2Fill_3").val() != 25){
            document.getElementById("day2Fill_3_wrong").style.display = "block";
        };
        if($("#day2Fill_4").val() == 40){
            document.getElementById("day2Fill_4_right").style.display = "block";
        }
        if($("#day2Fill_4").val() != 40){
            document.getElementById("day2Fill_4_wrong").style.display = "block";
        }
        if($("#day2Fill_5").val() == 40){
            document.getElementById("day2Fill_5_right").style.display = "block";
        }
        if($("#day2Fill_5").val() != 40){
            document.getElementById("day2Fill_5_wrong").style.display = "block";
        }
    })

    $(document).on('click','#day3Submit',function(){
        $("#day3Submit").addClass('disabled');
        $("#day3Submit").prop('disabled', true);
        if($("#day3Fill_1").val() == 20){
            document.getElementById("day3Fill_1_right").style.display = "block";
        }
        if($("#day3Fill_1").val() != 20){
            document.getElementById("day3Fill_1_wrong").style.display = "block";
        };
        if($("#day3Fill_2").val() == 30){
            document.getElementById("day3Fill_2_right").style.display = "block";
        }
        if($("#day3Fill_2").val() != 30){
            document.getElementById("day3Fill_2_wrong").style.display = "block";
        };
        if($("#day3Fill_3").val() == 25){
            document.getElementById("day3Fill_3_right").style.display = "block";
        }
        if($("#day3Fill_3").val() != 25){
            document.getElementById("day3Fill_3_wrong").style.display = "block";
        };
        if($("#day3Fill_4").val() == 25){
            document.getElementById("day3Fill_4_right").style.display = "block";
        }
        if($("#day3Fill_4").val() != 25){
            document.getElementById("day3Fill_4_wrong").style.display = "block";
        }
        if($("#day3Fill_5").val() == 'No'){
            document.getElementById("day3Fill_5_right").style.display = "block";
        }
        if($("#day3Fill_5").val() == 'no'){
            document.getElementById("day3Fill_5_right").style.display = "block";
        }
        if($("#day3Fill_5").val() != 'No' && $("#day1Fill_5").val() != 'no'){
            document.getElementById("day3Fill_5_wrong").style.display = "block";
        }
    })
    
    //call 题目生成函数
    caseQuestionGen();
    phoneQuestionGen();
    ipadQuestionGen();
    samsungQuestionGen();
    otherPhoneQuestionGen();
    samsungTabQuestionGen();
    day1Gen();
    day1bGen();
    day2Gen();
    day3Gen();

    //点击多选题页面的continue按键时触发的函数，索引id要与生成时的匹配
    var totalday1QueNum = day1QuestionList.length; //题目数量，用于核对此题是否是最后一题并告诉用户现在做的是第几题
    $("#day1Mul_question_num").html(day1I + "/" + totalday1QueNum);
    $("#day1Question").html(day1QuestionList[0]); //初始题目
        day1QuestionList.splice(0,1); //将初始题目从列表中删除
    $(document).on('click','#day1Continue',function(){ 
        if(day1I < totalday1QueNum){ //不是最后一题：
            $("#day1Question").html(day1QuestionList[0]); //那么我们从列表抛出一题来显示
            day1QuestionList.splice(0,1); //把刚刚抛出的题删掉
            day1I++;
            $("#day1Mul_question_num").html(day1I + "/" + totalday1QueNum); 
        }
        else{ //是最后一题，那么我们显示分数
            $("#day1Question").html("<h2>Your score for 'Day 1 multiple choices question (popular models)' test is " + day1MultiScore + "/" + totalday1QueNum + "</h2>");
        }     
    });

    var totalday2QueNum = day2QuestionList.length;
    $("#day2Mul_question_num").html(day2I + "/" + totalday2QueNum);
    $("#day2Question").html(day2QuestionList[0]);
        day2QuestionList.splice(0,1);
    $(document).on('click','#day2Continue',function(){
        if(day2I < totalday2QueNum){
            $("#day2Question").html(day2QuestionList[0]);
            day2QuestionList.splice(0,1);
            day2I++;
            $("#day2Mul_question_num").html(day2I + "/" + totalday2QueNum);
        }
        else{
            $("#day2Question").html("<h2>Your score for 'Day 2 multiple choices question (iPad models)' test is " + day2MultiScore + "/" + totalday2QueNum + "</h2>");
        }     
    });

    var totalday3QueNum = day3QuestionList.length;
    $("#day3Mul_question_num").html(day3I + "/" + totalday3QueNum);
    $("#day3Question").html(day3QuestionList[0]);
        day3QuestionList.splice(0,1);
    $(document).on('click','#day3Continue',function(){
        if(day3I < totalday3QueNum){
            $("#day3Question").html(day3QuestionList[0]);
            day3QuestionList.splice(0,1);
            day3I++;
            $("#day3Mul_question_num").html(day3I + "/" + totalday3QueNum);
        }
        else{
            $("#day3Question").html("<h2>Your score for 'Day 3 multiple choices question (Accessaries)' test is " + day3MultiScore + "/" + totalday3QueNum + "</h2>");
        }     
    });

    var totalCaseQueNum = caseQuestionList.length;
    $("#case_question_num").html(caseI + "/" + totalCaseQueNum);
    $("#caseQuestion").html(caseQuestionList[0]);
        caseQuestionList.splice(0,1);
    $(document).on('click','#caseContinue',function(){
        if(caseI < totalCaseQueNum){
            $("#caseQuestion").html(caseQuestionList[0]);
            caseQuestionList.splice(0,1);
            caseI++;
            $("#case_question_num").html(caseI + "/" + totalCaseQueNum);
        }
        else{
            $("#caseQuestion").html("<h2>Your score for '(Mixed) case and accessaries test' is " + caseScore + "/" + totalCaseQueNum + "</h2>");
        }
        
    });

    var totalModelQueNum = phoneQuestionList.length;
    $("#model_question_num").html(modelI + "/" + totalModelQueNum);
    $("#phoneQuestion").html(phoneQuestionList[0]);
        phoneQuestionList.splice(0,1);
        $(document).on('click','#modelContinue',function(){
        if(modelI < totalModelQueNum){
            $("#phoneQuestion").html(phoneQuestionList[0]);
            phoneQuestionList.splice(0,1);
            modelI++;
            $("#model_question_num").html(modelI + "/" + totalModelQueNum);
        }
        else{
            $("#phoneQuestion").html("<h2>Your score for '(Mixed) model test' is " + phoneScore + "/" + totalModelQueNum + "</h2>");
        }
    });
    
    var totalStabQueNum = stabQuestionList.length;
    $("#stab_question_num").html(stabI + "/" + totalStabQueNum);
    $("#stabQuestion").html(stabQuestionList[0]);
        stabQuestionList.splice(0,1);
        $(document).on('click','#stabContinue',function(){
        if(stabI < totalStabQueNum){
            $("#stabQuestion").html(stabQuestionList[0]);
            stabQuestionList.splice(0,1);
            stabI++;
            $("#stab_question_num").html(stabI + "/" + totalStabQueNum);
        }
        else{
            $("#stabQuestion").html("<h2>Your score for 'Samsung tablet test' is " + stabScore + "/" + totalStabQueNum + "</h2>");
        }
    });

}