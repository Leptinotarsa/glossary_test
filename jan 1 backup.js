// script.js

// Magnify on click. The large and small versions of files are created here. 
/* the java that worked as of Dec 28 at midnight.


    function openOverlay(imageSrc) {
        console.log('Opening overlay for image: ', imageSrc);
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlay-image');

        // Set z-index to a higher value dynamically
        overlay.style.zIndex = 100;

        overlayImage.src = imageSrc;
        overlay.style.display = 'flex';
    }

    function closeOverlay() {
        console.log('Closing overlay');
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }
    */  /*Below, new java with class instead of id*/
    
 function openOverlay(imageSrc) {
    const overlay = document.querySelector('.overlay-container');
    const overlayImage = overlay.querySelector('.overlay-image');
    overlayImage.src = imageSrc;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay-container');
    overlay.style.display = 'none';
}   
// Create small and large versions. On Dec 28, I generated this list like this:
/*
Open the Finder and navigate to the folder containing your JPG files.
Hold down the "Command" key and click on the JPG files you want to include in the list to select multiple files.
Right-click (or Control-click) on one of the selected files.
In the context menu, choose "Copy [number] items."

Paste into excel. Use:
="createImageContainer('" & A3 & "', 'large/" & A3 & "');"

*/
// New images added at bottom of this list.
createImageContainer('acarinarial fan.jpg', 'large/acarinarial fan.jpg');
createImageContainer('acarinarial fan2.jpg', 'large/acarinarial fan2.jpg');
createImageContainer('acarinarium, wikipedia.jpg', 'large/acarinarium, wikipedia.jpg');
createImageContainer('acarinarium.jpg', 'large/acarinarium.jpg');
createImageContainer('Andrena corbic.jpg', 'large/Andrena corbic.jpg');
createImageContainer('Andrena morph overview.jpg', 'large/Andrena morph overview.jpg');
createImageContainer('Andrena morphology dorsal.jpg', 'large/Andrena morphology dorsal.jpg');
createImageContainer('Andrena morphology head.jpg', 'large/Andrena morphology head.jpg');
createImageContainer('Andrena morphology overview black.jpg', 'large/Andrena morphology overview black.jpg');
createImageContainer('Andrena morphology2.jpg', 'large/Andrena morphology2.jpg');
createImageContainer('Andrena nigrocaerulea,female,head,dimensionsDC060223_1 copy.jpg', 'large/Andrena nigrocaerulea,female,head,dimensionsDC060223_1 copy.jpg');
createImageContainer('Andrena nigrocaerulea,metallic.jpg', 'large/Andrena nigrocaerulea,metallic.jpg');
createImageContainer('Andrena pensilis,legs,tibia cuneate copy.jpg', 'large/Andrena pensilis,legs,tibia cuneate copy.jpg');
createImageContainer('Andrena salicifloris,T2 depressed copy.jpg', 'large/Andrena salicifloris,T2 depressed copy.jpg');
createImageContainer('Andrena,abdomen,pygidial plate hemileuca.jpg', 'large/Andrena,abdomen,pygidial plate hemileuca.jpg');
createImageContainer('Andrena,head,fovea to clypeus copy.jpg', 'large/Andrena,head,fovea to clypeus copy.jpg');
createImageContainer('Andrena,head,labral process bidentate,evoluta copy.jpg', 'large/Andrena,head,labral process bidentate,evoluta copy.jpg');
createImageContainer('Andrena,head,max palp v galea,pensilis.jpg', 'large/Andrena,head,max palp v galea,pensilis.jpg');
createImageContainer('Andrena,head,palps copy.jpg', 'large/Andrena,head,palps copy.jpg');
createImageContainer('Andrena,head,vertex height 1ocd copy.jpg', 'large/Andrena,head,vertex height 1ocd copy.jpg');
createImageContainer('Andrena,scutum tessalate,1to3 widths.jpg', 'large/Andrena,scutum tessalate,1to3 widths.jpg');
createImageContainer('Andrena,scutum,hippotes.jpg', 'large/Andrena,scutum,hippotes.jpg');
createImageContainer('Andrena,thorax,propodeal triangle nivalis.jpg', 'large/Andrena,thorax,propodeal triangle nivalis.jpg');
createImageContainer('Andrena,wing,r vein long.jpg', 'large/Andrena,wing,r vein long.jpg');
createImageContainer('Andrena,wing,r vein short.jpg', 'large/Andrena,wing,r vein short.jpg');
createImageContainer('anisochlora mandible.jpg', 'large/anisochlora mandible.jpg');
createImageContainer('Anoetus_on_Halictus_parallelus_BMOC_15-0606-038.jpg', 'large/Anoetus_on_Halictus_parallelus_BMOC_15-0606-038.jpg');
createImageContainer('ant1.jpg', 'large/ant1.jpg');
createImageContainer('ant2.jpg', 'large/ant2.jpg');
createImageContainer('antenna codey.jpg', 'large/antenna codey.jpg');
createImageContainer('antenna male female.jpg', 'large/antenna male female.jpg');
createImageContainer('Anthidium male,T2 depresdsed copy.jpg', 'large/Anthidium male,T2 depresdsed copy.jpg');
createImageContainer('arolium with and without copy 2.jpg', 'large/arolium with and without copy 2.jpg');
createImageContainer('arolium with and without copy.jpg', 'large/arolium with and without copy.jpg');
createImageContainer('Augorchlora pura,female,basitibial plate copy.jpg', 'large/Augorchlora pura,female,basitibial plate copy.jpg');
createImageContainer('Augorchloropsis basitibial plate copy.jpg', 'large/Augorchloropsis basitibial plate copy.jpg');
createImageContainer('Augorochlora pura,metallic.jpg', 'large/Augorochlora pura,metallic.jpg');
createImageContainer('basal vein vert.jpg', 'large/basal vein vert.jpg');
createImageContainer('basal vein.jpg', 'large/basal vein.jpg');
createImageContainer('Basitibial plate drawing copy.jpg', 'large/Basitibial plate drawing copy.jpg');
createImageContainer('BB corbicula.jpg', 'large/BB corbicula.jpg');
createImageContainer('Bee color gallery original copy.jpg', 'large/Bee color gallery original copy.jpg');
createImageContainer('bifid glossa.jpg', 'large/bifid glossa.jpg');
createImageContainer('Bombus samples.jpg', 'large/Bombus samples.jpg');
createImageContainer('branchy.jpg', 'large/branchy.jpg');
createImageContainer('Ceratina arizonensis,male,head.2116280 copy.jpg', 'large/Ceratina arizonensis,male,head.2116280 copy.jpg');
createImageContainer('Ceratina color gallery original copy.jpg', 'large/Ceratina color gallery original copy.jpg');
createImageContainer('Ceratina femur gallery - M copy.jpg', 'large/Ceratina femur gallery - M copy.jpg');
createImageContainer('Ceratina parapsidal copy.jpg', 'large/Ceratina parapsidal copy.jpg');
createImageContainer('Ceratina strenua,female,lateral copy.jpg', 'large/Ceratina strenua,female,lateral copy.jpg');
createImageContainer('clypeus dull.jpg', 'large/clypeus dull.jpg');
createImageContainer('clypeus dull2.jpg', 'large/clypeus dull2.jpg');
createImageContainer('clypeus hemileuca.jpg', 'large/clypeus hemileuca.jpg');
createImageContainer('clypeus shiny.jpg', 'large/clypeus shiny.jpg');
createImageContainer('clypeus shiny2.jpg', 'large/clypeus shiny2.jpg');
createImageContainer('clypeus shinydull.jpg', 'large/clypeus shinydull.jpg');
createImageContainer('color anthophora.jpg', 'large/color anthophora.jpg');
createImageContainer('color ochraceous.jpg', 'large/color ochraceous.jpg');
createImageContainer('confusus vs tripartitus.jpg', 'large/confusus vs tripartitus.jpg');
createImageContainer('corb 5.jpg', 'large/corb 5.jpg');
createImageContainer('corb internal.jpg', 'large/corb internal.jpg');
createImageContainer('corb1.jpg', 'large/corb1.jpg');
createImageContainer('corb2.jpg', 'large/corb2.jpg');
createImageContainer('corb3.jpg', 'large/corb3.jpg');
createImageContainer('corb4.jpg', 'large/corb4.jpg');
createImageContainer('DIadasia genitalia dorsal copy.jpg', 'large/DIadasia genitalia dorsal copy.jpg');
createImageContainer('DIadasia genitalia ventral copy.jpg', 'large/DIadasia genitalia ventral copy.jpg');
createImageContainer('Dialictus fan.jpg', 'large/Dialictus fan.jpg');
createImageContainer('Epeolus_interruptus,_Axillae_mesoscutellum_female,I_SD18367.jpg', 'large/Epeolus_interruptus,_Axillae_mesoscutellum_female,I_SD18367.jpg');
createImageContainer('Eucera pygidial plate copy.jpg', 'large/Eucera pygidial plate copy.jpg');
createImageContainer('Eucera vs Melissodes,thorax,tegula.jpg', 'large/Eucera vs Melissodes,thorax,tegula.jpg');
createImageContainer('flagellar.Lasioglossum pectorale,antenna copy.jpg', 'large/flagellar.Lasioglossum pectorale,antenna copy.jpg');
createImageContainer('flocc comp.jpg', 'large/flocc comp.jpg');
createImageContainer('flocc incomp.jpg', 'large/flocc incomp.jpg');
createImageContainer('Forewing cells and veins Nomada copy.jpg', 'large/Forewing cells and veins Nomada copy.jpg');
createImageContainer('fovea dark.jpg', 'large/fovea dark.jpg');
createImageContainer('fovea deep.jpg', 'large/fovea deep.jpg');
createImageContainer('fovea light.jpg', 'large/fovea light.jpg');
createImageContainer('fovea narrow.jpg', 'large/fovea narrow.jpg');
createImageContainer('fovea narrow2.jpg', 'large/fovea narrow2.jpg');
createImageContainer('fovea shallow.jpg', 'large/fovea shallow.jpg');
createImageContainer('genitalia diagram Diadasia copy.jpg', 'large/genitalia diagram Diadasia copy.jpg');
createImageContainer('Glabrous Ceratina.jpg', 'large/Glabrous Ceratina.jpg');
createImageContainer('gynandro agapo.jpg', 'large/gynandro agapo.jpg');
createImageContainer('gynandro lasio.jpg', 'large/gynandro lasio.jpg');
createImageContainer('Halictus leg copy.jpg', 'large/Halictus leg copy.jpg');
createImageContainer('HB corbicula.jpg', 'large/HB corbicula.jpg');
createImageContainer('head back drawing.jpg', 'large/head back drawing.jpg');
createImageContainer('Head dimensions.jpg', 'large/Head dimensions.jpg');
createImageContainer('head front drawing.jpg', 'large/head front drawing.jpg');
createImageContainer('head side drawing.jpg', 'large/head side drawing.jpg');
createImageContainer('head,dimensions.jpg', 'large/head,dimensions.jpg');
createImageContainer('header green bee copyPS.jpg', 'large/header green bee copyPS.jpg');
createImageContainer('header green bee.jpg', 'large/header green bee.jpg');
createImageContainer('Hoplitis parapsidal copy.jpg', 'large/Hoplitis parapsidal copy.jpg');
createImageContainer('HR.jpg', 'large/HR.jpg');
createImageContainer('hypostimal carina codey.jpg', 'large/hypostimal carina codey.jpg');
createImageContainer('hypostomal carina dc.jpg', 'large/hypostomal carina dc.jpg');
createImageContainer('incomplete corb.jpg', 'large/incomplete corb.jpg');
createImageContainer('labral barbi.jpg', 'large/labral barbi.jpg');
createImageContainer('labral biden.jpg', 'large/labral biden.jpg');
createImageContainer('labral emarg.jpg', 'large/labral emarg.jpg');
createImageContainer('labral entire.jpg', 'large/labral entire.jpg');
createImageContainer('labral subm.jpg', 'large/labral subm.jpg');
createImageContainer('Lacinia michener.jpg', 'large/Lacinia michener.jpg');
createImageContainer('Lasioglossum dialictus.Herbert.24OCT.head copy.jpg', 'large/Lasioglossum dialictus.Herbert.24OCT.head copy.jpg');
createImageContainer('Lasioglossum pectorale,gena lineolate copy.jpg', 'large/Lasioglossum pectorale,gena lineolate copy.jpg');
createImageContainer('Lasioglossum versatum,abdomen,T1 fan copy.jpg', 'large/Lasioglossum versatum,abdomen,T1 fan copy.jpg');
createImageContainer('Lasioglossum zonulum,lateral abdomen copy.jpg', 'large/Lasioglossum zonulum,lateral abdomen copy.jpg');
createImageContainer('Lasioglossum,abdomen,T1 complete fan,108203 copy.jpg', 'large/Lasioglossum,abdomen,T1 complete fan,108203 copy.jpg');
createImageContainer('Lasioglossum,head,gena 1.2xeye,103977 copy.jpg', 'large/Lasioglossum,head,gena 1.2xeye,103977 copy.jpg');
createImageContainer('Lasioglossum,head,head, supraclypeus 36 pits,pilosum copy.jpg', 'large/Lasioglossum,head,head, supraclypeus 36 pits,pilosum copy.jpg');
createImageContainer('Lasioglossum,head,head, supraclypeus 36 pits,pilosum.jpg', 'large/Lasioglossum,head,head, supraclypeus 36 pits,pilosum.jpg');
createImageContainer('Lasioglossum,thorax,carinate.jpg', 'large/Lasioglossum,thorax,carinate.jpg');
createImageContainer('Lasioglossum,thorax,propodeum carinate.jpg', 'large/Lasioglossum,thorax,propodeum carinate.jpg');
createImageContainer('Lateral diagram OSU.jpg', 'large/Lateral diagram OSU.jpg');
createImageContainer('leather.jpg', 'large/leather.jpg');
createImageContainer('malar long.jpg', 'large/malar long.jpg');
createImageContainer('malar longish.jpg', 'large/malar longish.jpg');
createImageContainer('malar short short.jpg', 'large/malar short short.jpg');
createImageContainer('malar shortjpg.jpg', 'large/malar shortjpg.jpg');
createImageContainer('mandible anthidium.jpg', 'large/mandible anthidium.jpg');
createImageContainer('mandible osmia.jpg', 'large/mandible osmia.jpg');
createImageContainer('Megachile fidelis,female,head,BBSL1086781 copy.jpg', 'large/Megachile fidelis,female,head,BBSL1086781 copy.jpg');
createImageContainer('Megachile male foerleg modified comp2 copy.jpg', 'large/Megachile male foerleg modified comp2 copy.jpg');
createImageContainer('Megachile,abdomen,fovea.jpg', 'large/Megachile,abdomen,fovea.jpg');
createImageContainer('Megachile,male,legs,coxa red hairs copy.jpg', 'large/Megachile,male,legs,coxa red hairs copy.jpg');
createImageContainer('Melissodes.ant.jpg', 'large/Melissodes.ant.jpg');
createImageContainer('mesepi glabrous.jpg', 'large/mesepi glabrous.jpg');
createImageContainer('mesepi light.jpg', 'large/mesepi light.jpg');
createImageContainer('mesepi rugose, no pits.jpg', 'large/mesepi rugose, no pits.jpg');
createImageContainer('mesepi rugose, no pits2.jpg', 'large/mesepi rugose, no pits2.jpg');
createImageContainer('mesepi uniform, no pits.jpg', 'large/mesepi uniform, no pits.jpg');
createImageContainer('Mginly acarinarium.jpg', 'large/Mginly acarinarium.jpg');
createImageContainer('Mginly acarinarium2.jpg', 'large/Mginly acarinarium2.jpg');
createImageContainer('miichener mandible.jpg', 'large/miichener mandible.jpg');
createImageContainer('Morphology head,ceratina.jpg', 'large/Morphology head,ceratina.jpg');
createImageContainer('Mouthpart HB male.jpg', 'large/Mouthpart HB male.jpg');
createImageContainer('Mouthparts drawing copy.jpg', 'large/Mouthparts drawing copy.jpg');
createImageContainer('Mouthparts drawing gray.jpg', 'large/Mouthparts drawing gray.jpg');
createImageContainer('no branch.jpg', 'large/no branch.jpg');
createImageContainer('nomia fimbria.jpg', 'large/nomia fimbria.jpg');
createImageContainer('Osmia bruneri,metallic.jpg', 'large/Osmia bruneri,metallic.jpg');
createImageContainer('Osmia cara,metalic.jpg', 'large/Osmia cara,metalic.jpg');
createImageContainer('osmia leg.jpg', 'large/osmia leg.jpg');
createImageContainer('Osmia lignaria,clypeus.jpg', 'large/Osmia lignaria,clypeus.jpg');
createImageContainer('Osmia MS22.1,Ankeny,head,IAE 1124945 copy.jpg', 'large/Osmia MS22.1,Ankeny,head,IAE 1124945 copy.jpg');
createImageContainer('Osmia nemoris,female,legs,spatulate hairs.jpg', 'large/Osmia nemoris,female,legs,spatulate hairs.jpg');
createImageContainer('Osmia parapsidal copy.jpg', 'large/Osmia parapsidal copy.jpg');
createImageContainer('Osmia,arolium copy.jpg', 'large/Osmia,arolium copy.jpg');
createImageContainer('Osmia,carina.jpg', 'large/Osmia,carina.jpg');
createImageContainer('Osmia,head,cheek width short copy.jpg', 'large/Osmia,head,cheek width short copy.jpg');
createImageContainer('Osmia,head,mandible.parallel ridges copy.jpg', 'large/Osmia,head,mandible.parallel ridges copy.jpg');
createImageContainer('Osmia,head,vertex  copy.jpg', 'large/Osmia,head,vertex  copy.jpg');
createImageContainer('Osmia,leg,strigilis,blunt.jpg', 'large/Osmia,leg,strigilis,blunt.jpg');
createImageContainer('Osmia,legs,strigilis,gabrielis.jpg', 'large/Osmia,legs,strigilis,gabrielis.jpg');
createImageContainer('Overview morph.jpg', 'large/Overview morph.jpg');
createImageContainer('Overview sculp.jpg', 'large/Overview sculp.jpg');
createImageContainer('Panurginus,fovea copy.jpg', 'large/Panurginus,fovea copy.jpg');
createImageContainer('Panurginus,subantennal sutures copy.jpg', 'large/Panurginus,subantennal sutures copy.jpg');
createImageContainer('perplexa decussate.jpg', 'large/perplexa decussate.jpg');
createImageContainer('pronotal lobe drawing.jpg', 'large/pronotal lobe drawing.jpg');
createImageContainer('pronotum angle small.jpg', 'large/pronotum angle small.jpg');
createImageContainer('pronotum angle.jpg', 'large/pronotum angle.jpg');
createImageContainer('pronotum big.jpg', 'large/pronotum big.jpg');
createImageContainer('pronotum.noridge.jpg', 'large/pronotum.noridge.jpg');
createImageContainer('pronotum.ridge.jpg', 'large/pronotum.ridge.jpg');
createImageContainer('pronotum.suture.jpg', 'large/pronotum.suture.jpg');
createImageContainer('propodeum1.jpg', 'large/propodeum1.jpg');
createImageContainer('propodeum2.jpg', 'large/propodeum2.jpg');
createImageContainer('propodeum3.jpg', 'large/propodeum3.jpg');
createImageContainer('propodeum4.jpg', 'large/propodeum4.jpg');
createImageContainer('propodeum5.jpg', 'large/propodeum5.jpg');
createImageContainer('propodeum6.jpg', 'large/propodeum6.jpg');
createImageContainer('Protosmia rubifloris,female,head,herbert,DC042823_2.jpg', 'large/Protosmia rubifloris,female,head,herbert,DC042823_2.jpg');
createImageContainer('Pyg hemi.jpg', 'large/Pyg hemi.jpg');
createImageContainer('pyg.2.jpg', 'large/pyg.2.jpg');
createImageContainer('pyg.3.jpg', 'large/pyg.3.jpg');
createImageContainer('salmon red.jpg', 'large/salmon red.jpg');
createImageContainer('salmon.jpg', 'large/salmon.jpg');
createImageContainer('Screenshot 2023-10-24 at 13.47.07.jpg', 'large/Screenshot 2023-10-24 at 13.47.07.jpg');
createImageContainer('sculpture diagram placeholder.jpg', 'large/sculpture diagram placeholder.jpg');
createImageContainer('scutum codey.jpg', 'large/scutum codey.jpg');
createImageContainer('scutum dc.jpg', 'large/scutum dc.jpg');
createImageContainer('scutum,angustitarsata copy.jpg', 'large/scutum,angustitarsata copy.jpg');
createImageContainer('scutumsparse ,nuda.copy.jpg', 'large/scutumsparse ,nuda.copy.jpg');
createImageContainer('shape1.jpg', 'large/shape1.jpg');
createImageContainer('shape2.jpg', 'large/shape2.jpg');
createImageContainer('shape3.jpg', 'large/shape3.jpg');
createImageContainer('SMC (andrena ms1) copy.jpg', 'large/SMC (andrena ms1) copy.jpg');
createImageContainer('SMC coelioxys copy.jpg', 'large/SMC coelioxys copy.jpg');
createImageContainer('SMC diadasia copy.jpg', 'large/SMC diadasia copy.jpg');
createImageContainer('spatulate setae.jpg', 'large/spatulate setae.jpg');
createImageContainer('spur arg.jpg', 'large/spur arg.jpg');
createImageContainer('spur crat.jpg', 'large/spur crat.jpg');
createImageContainer('spur hook.jpg', 'large/spur hook.jpg');
createImageContainer('spur normal.jpg', 'large/spur normal.jpg');
createImageContainer('spur prun.jpg', 'large/spur prun.jpg');
createImageContainer('stigma and prestigma copy.jpg', 'large/stigma and prestigma copy.jpg');
createImageContainer('strigilis drawing.jpg', 'large/strigilis drawing.jpg');
createImageContainer('Subantennal drawing.jpg', 'large/Subantennal drawing.jpg');
createImageContainer('Surface sculpture 3D comparisons.jpg', 'large/Surface sculpture 3D comparisons.jpg');
createImageContainer('Surface sculpture comparisons copy.jpg', 'large/Surface sculpture comparisons copy.jpg');
createImageContainer('Surface sculpture comparisons.jpg', 'large/Surface sculpture comparisons.jpg');
createImageContainer('T5 fimbria crataegi.jpg', 'large/T5 fimbria crataegi.jpg');
createImageContainer('Tegula, Osmia.jpg', 'large/Tegula, Osmia.jpg');
createImageContainer('tesselate andrena.jpg', 'large/tesselate andrena.jpg');
createImageContainer('tesselate lasio.jpg', 'large/tesselate lasio.jpg');
createImageContainer('Thorax diagram OSU.jpg', 'large/Thorax diagram OSU.jpg');
createImageContainer('tringulin.andrena.jpg', 'large/tringulin.andrena.jpg');
createImageContainer('Triungulin on nomada,Tenalquot 2017.jpg', 'large/Triungulin on nomada,Tenalquot 2017.jpg');
createImageContainer('truncate cell copy.jpg', 'large/truncate cell copy.jpg');
createImageContainer('vertex.jpg', 'large/vertex.jpg');
createImageContainer('vertex2.jpg', 'large/vertex2.jpg');
createImageContainer('vertex3.jpg', 'large/vertex3.jpg');
createImageContainer('weak branch.jpg', 'large/weak branch.jpg');
createImageContainer('wing Diadasia copy.jpg', 'large/wing Diadasia copy.jpg');
createImageContainer('wing Diadasias.jpg', 'large/wing Diadasias.jpg');
createImageContainer('Wing drawing OSU.jpg', 'large/Wing drawing OSU.jpg');
createImageContainer('Wing gallery1.jpg', 'large/Wing gallery1.jpg');
createImageContainer('Wing gallery2.jpg', 'large/Wing gallery2.jpg');
createImageContainer('Wing gallery3.jpg', 'large/Wing gallery3.jpg');
createImageContainer('wing1.jpg', 'large/wing1.jpg');
createImageContainer('wing2.jpg', 'large/wing2.jpg');
createImageContainer('wing3.jpg', 'large/wing3.jpg');
createImageContainer('wing4.jpg', 'large/wing4.jpg');
createImageContainer('tetraglossula bifid galea.png', 'large/tetraglossula bifid galea.png');
createImageContainer('salmon.jpg', 'large/salmon.jpg');
createImageContainer('Wing drawing OSU.jpg', 'large/Wing drawing OSU.jpg');
createImageContainer('wing Diadasia copy.jpg', 'large/wing Diadasia copy.jpg');
createImageContainer('Wing drawing OSU.jpg', 'large/Wing drawing OSU.jpg');
createImageContainer('Anoetus_on_Halictus_parallelus_BMOC_15-0606-038.jpg', 'large/Anoetus_on_Halictus_parallelus_BMOC_15-0606-038.jpg');
createImageContainer('acarinarium.jpg', 'large/acarinarium.jpg');
createImageContainer('acarinarium, wikipedia.jpg', 'large/acarinarium, wikipedia.jpg');
createImageContainer('Megachile perihirta,basitarsus.jpg', 'large/Megachile perihirta,basitarsus.jpg');
createImageContainer('Hylaeus abd v metasoma copy.jpg', 'large/Hylaeus abd v metasoma copy.jpg');
createImageContainer('arched basal vein copy.jpg', 'large/arched basal vein copy.jpg');
createImageContainer('arolium megachile.jpg', 'large/arolium megachile.jpg');
createImageContainer('M. sculpturalis,USGS,piceous copy.jpg', 'large/M. sculpturalis,USGS,piceous copy.jpg');
createImageContainer('amegilla,anthophorini,ochraceous copy.jpg', 'large/amegilla,anthophorini,ochraceous copy.jpg');
createImageContainer('appressed amegilla.jpg', 'large/appressed amegilla.jpg');
createImageContainer('Euglossa tibia copy.jpg', 'large/Euglossa tibia copy.jpg');
createImageContainer('drawing palp,galea,glossa copy.jpg', 'drawing palp,galea,glossa copy.jpg');
createImageContainer('clypeus gallery copy.jpg', 'clypeus gallery copy.jpg');
createImageContainer('Megachile subexilis,clypeus copy.jpg', 'large/Megachile subexilis,clypeus copy.jpg');
/* Below, trying this for an remote url*/
createImageContainer('https://content.eol.org/data/media/ed/2d/b1/509.01a924dbd0bd5cd8e5660435ac092ec4.jpg', 'large/https://content.eol.org/data/media/ed/2d/b1/509.01a924dbd0bd5cd8e5660435ac092ec4.jpg');



