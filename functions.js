let globalTalentLimit = 1;


function talentTreeBuilder (specobject, backgroundImage, spec, headericon) {
    
    let divTalentTreeHeader = document.createElement('div');
        divTalentTreeHeader.className = 'talent-tree-header';

    let imgHeaderIcon = document.createElement('img');
        imgHeaderIcon.className = 'img-header-icon';
        imgHeaderIcon.src = `${headericon}`;

    let spanHeader = document.createElement('span');
        spanHeader.className = 'span-header';
        spanHeader.textContent = `${spec}`;

    let divPoints = document.createElement('div');
        divPoints.className = 'div-points';

    let spanPoints = document.createElement('span');
        spanPoints.className = 'span-del-point';
        spanPoints.textContent = `${0}`;

    let imgDelPoints = document.createElement('img');
        imgDelPoints.className = 'img-del-points';
        imgDelPoints.src = 'https://www.warcrafttavern.com/tbc/tools/talent-calculator/img/cancel.c8c41884.svg';

    let divTalentTree = document.createElement('div');
        divTalentTree.className = 'talent-tree';

    let divTalentTreeBG = document.createElement('div');
        divTalentTreeBG.className = 'talent-tree-background';

    let divTalentLine = document.createElement('div');
        divTalentLine.className = 'talent-line';

    divTalentTreeHeader.appendChild(imgHeaderIcon);
    divTalentTreeHeader.appendChild(spanHeader);

    divPoints.appendChild(spanPoints);
    divPoints.appendChild(imgDelPoints);

    divTalentTreeHeader.appendChild(divPoints);

    divTalentTree.appendChild(divTalentTreeHeader);
    


    for(let prop in specobject){
    
        if((parseInt(prop)) % 4 === 0) {
            divTalentLine = document.createElement('div');
            divTalentLine.className = 'talent-line';
        }
        
        
        let div = document.createElement('div');
            div.className = 'talent-div';

        let span = document.createElement('span');
            span.className = 'talent-span';
    
        
        if(specobject[prop].name !== undefined) {
        
            let img = document.createElement('img');
            img.src = specobject[prop].src;

            if(prop < 4) {
                img.className = 'talent-img'
            } else {
                img.className = 'talent-img talent-img-disable'
            }

            div.appendChild(img);

            span.textContent = `${specobject[prop].pointSpent}/${specobject[prop].pointLimit}`;
            div.appendChild(span);

            div.addEventListener('click', function(ev) { 
                addTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree);}, false);

            div.addEventListener('contextmenu', function(ev) { 
                subTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree);}, false);

        }
    
        divTalentLine.appendChild(div);
        divTalentTree.appendChild(divTalentLine);
    }

    
    divTalentTreeBG.style.backgroundImage = `url('${backgroundImage}')`;
    divTalentTree.appendChild(divTalentTreeBG);
    divTalentTreeWrapper.appendChild(divTalentTree);

    imgDelPoints.addEventListener('click', function(ev) { 
        resetTalentTree(ev, specobject, spanPoints, divTalentTree);}, false);

}

function classIconNavBuilder (classicon) {

    let divClassIconWrapper = document.createElement('div');
        divClassIconWrapper.className = 'class-icon-wrapper';

        for(let prop in classicon){
    
            
            let div = document.createElement('div');
                div.className = 'class-icon';
        
            let img = document.createElement('img');
                img.src = classicon[prop].src;
                img.className = 'class-icon-img'
                div.appendChild(img);
        
            let spanHeader = document.createElement('span');
                spanHeader.className = 'span-navbar';
                spanHeader.textContent = classicon[prop].class;
                div.appendChild(spanHeader);


                divClassIconWrapper.appendChild(div);

        }
    
        document.body.appendChild(divClassIconWrapper);
}

function addTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree) {    
        
    if(specobject[prop].pointSpent < specobject[prop].pointLimit && specobject[prop].isEnable == true && globalTalentLimit <= 61) {

            span.textContent = `${specobject[prop].pointSpent += 1}/${specobject[prop].pointLimit}`;
            spanPoints.textContent = `${parseInt(spanPoints.textContent) + 1}`;

            checkForEnable(specobject, spanPoints, divTalentTree);
            globalTalentLimit++;

    }
    
    ev.preventDefault();    

    return false;

}

function subTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree) {
    
    if(specobject[prop].pointSpent > 0) {
            span.textContent = `${specobject[prop].pointSpent -= 1}/${specobject[prop].pointLimit}`;
            spanPoints.textContent = `${parseInt(spanPoints.textContent) - 1}`;

            checkForEnable (specobject, spanPoints, divTalentTree);
            globalTalentLimit--;
            
    }
    
    ev.preventDefault(-1);

    return false;  

}

function resetTalentTree (ev, specobject, spanPoints, divTalentTree) {

    spanPoints.textContent = `${0}`;
    let control = 0;

    for(let prop in specobject){

        if(specobject[prop].name !== undefined) {

            specobject[prop].pointSpent = 0;
            divTalentTree.getElementsByClassName('talent-span')[control].textContent = `${specobject[prop].pointSpent}/${specobject[prop].pointLimit}`; 
            control += 1;

        }
    }

    ev.preventDefault();
    return false;
}

function checkForEnable (specobject, spanPoints, divTalentTree) {

    let isLineFive = [undefined, false, false, false, false, false, false, false, false, false];
    let isLineEnable = [undefined, true, false, false, false, false, false, false, false, false];
    let lineSum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let row = 1;
    
    while(row < 10){
        for(let prop in specobject){

            if(specobject[prop].name !== undefined && specobject[prop].lineNumber === row ){
                lineSum[row] += specobject[prop].pointSpent;
            }
        

            if(lineSum[row] >= 5) {
                isLineFive[row] = true;
            } else {
                isLineFive[row] = false;
            }

            if(isLineFive[row] === true) {
                isLineEnable[row + 1] = true;
            } else {
                isLineEnable[row + 1] = false;
            }

        }

        for(let prop in specobject) {
            if(specobject[prop].lineNumber === row + 1) {
                if(isLineEnable[row + 1] === true) {
                    specobject[prop].isEnable = true;
                } else {
                    specobject[prop].isEnable = false;
                    specobject[prop].pointSpent = 0;
                }              
            }            
        }



        row++;
    }

    let control = 0;
    let talentImages = divTalentTree.getElementsByClassName('talent-img');


    console.clear();
    
    for(let prop in specobject){

        if(specobject[prop].name !== undefined) {

            console.log(control);
        
            // console.log(talentImages[control]);
            // console.log(specobject[prop].name);


            if(specobject[prop].isEnable === true) {
                    talentImages[control].className = "talent-img";
                    // console.log(specobject[prop].isEnable);
                    // console.log(specobject[prop].name);
                   
            } 

            if(specobject[prop].isEnable === false) {
                    talentImages[control].className = "talent-img talent-img-disable";
                    // console.log(specobject[prop].isEnable);
                    // console.log(specobject[prop].name);

                    
            }
            control += 1;
        }
    }

    for(i = 1; i <= 9; i++) {
        lineSum[0] += lineSum[i];
    }


    spanPoints.textContent = parseInt(lineSum[0]);


}

