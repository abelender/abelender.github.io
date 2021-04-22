let globalTalentLimit = 0;

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

        let divDisplay = document.createElement('div');
            divDisplay.className = 'info-div-to-display';
    
        
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

            div.appendChild(divDisplay);

            let spanName = document.createElement('span');
                spanName.className = 'span-talent-name';

            let spanRank = document.createElement('span');
                spanRank.className = 'span-talent-rank';

            let spanText1 = document.createElement('span');
                spanText1.className = 'span-talent-text';

            let nextRank = document.createElement('span');
                nextRank.className = 'span-next-rank';

            let spanText2 = document.createElement('span');
                spanText2.className = 'span-talent-text';

            let spanBottom = document.createElement('span');
                spanBottom.className = 'span-talent-bottom';

            let spanBottomAdd = document.createElement('span');
                spanBottomAdd.className = 'span-talent-bottom-add';

          

            div.addEventListener('click', function(ev) { 
                addTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree);}, false);

            div.addEventListener('click', function(ev) { 
                divTalentInfo(spec, specobject, prop, spanName, spanRank, spanText1, nextRank, spanText2, spanBottom, spanBottomAdd);}, false);

            div.addEventListener('contextmenu', function(ev) { 
                subTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree);}, false);

            div.addEventListener('contextmenu', function(ev) { 
                divTalentInfo(spec, specobject, prop, spanName, spanRank, spanText1, nextRank, spanText2, spanBottom, spanBottomAdd);}, false);

            div.addEventListener("mouseover", function() {
                divDisplay.style.display = "block";
                div.style.transform = "none";
                img.style.borderColor = 'rgb(228, 252, 13)';
                divTalentInfo(spec, specobject, prop, spanName, spanRank, spanText1, nextRank, spanText2, spanBottom, spanBottomAdd);
            });

            div.addEventListener("mouseout", function() {
                divDisplay.style.display = "none";
                div.style.transform = 'perspective(40px) rotateX(5deg)';
                img.style.borderColor = 'black';
            });

            divDisplay.appendChild(spanName);
            divDisplay.appendChild(spanRank);
            divDisplay.appendChild(spanText1);
            divDisplay.appendChild(nextRank);
            divDisplay.appendChild(spanText2);
            divDisplay.appendChild(spanBottom);
            divDisplay.appendChild(spanBottomAdd);

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


            div.addEventListener('click', function(ev) { 
                createPaladin();}, false);

                divClassIconWrapper.appendChild(div);

        }
    
        document.body.appendChild(divClassIconWrapper);
}

function globalSpanPoints() {

    let divGlobalSpanPointsWrapper = document.createElement('div');
        divGlobalSpanPointsWrapper.className = 'global-span-points-wrapper';

    let labelGlobalSpanPoints = document.createElement('label');
        labelGlobalSpanPoints.className = 'label-global-span-points';
        labelGlobalSpanPoints.innerHTML = "Points Left: ";
        divGlobalSpanPointsWrapper.appendChild(labelGlobalSpanPoints);
    
    let spanGlobalSpanPoints = document.createElement('span');
        spanGlobalSpanPoints.className = 'span-global-span-points';
        spanGlobalSpanPoints.id = 'spanglobalpoints';
        spanGlobalSpanPoints.textContent = `${61 - globalTalentLimit}`;
        divGlobalSpanPointsWrapper.appendChild(spanGlobalSpanPoints);
  

        document.body.appendChild(divGlobalSpanPointsWrapper);

}


function updateGlobalSpanPoints () {

    document.getElementById('spanglobalpoints').textContent = `${61 - globalTalentLimit}`;

}

function addTalentPoint(ev, span, specobject, prop, spanPoints, divTalentTree) {    
        
    if(specobject[prop].pointSpent < specobject[prop].pointLimit && specobject[prop].isEnable == true && globalTalentLimit <= 60) {

            span.textContent = `${specobject[prop].pointSpent += 1}/${specobject[prop].pointLimit}`;
            spanPoints.textContent = `${parseInt(spanPoints.textContent) + 1}`;

            checkForEnable(specobject, spanPoints, divTalentTree);
            globalTalentLimit++;
            updateGlobalSpanPoints();


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
            updateGlobalSpanPoints();

            
    }
    
    ev.preventDefault(-1);

    return false;  

}

function resetTalentTree (ev, specobject, spanPoints, divTalentTree) {

    let talentImages = divTalentTree.getElementsByClassName('talent-img');

    
    spanPoints.textContent = `${0}`;
    let control = 0;
   
    for(let prop in specobject){

        if(specobject[prop].name !== undefined) {

            globalTalentLimit -= specobject[prop].pointSpent;

            specobject[prop].pointSpent = 0;
            divTalentTree.getElementsByClassName('talent-span')[control].textContent = `${specobject[prop].pointSpent}/${specobject[prop].pointLimit}`; 
            
            if(control > 1) {
                talentImages[control].className = "talent-img talent-img-disable";
            }

            control += 1;
        }
        
    }

    updateGlobalSpanPoints();

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

            // if(isLineFive[row] === true || spanPoints.textContent >= (5 * row)) {
            //     isLineEnable[row + 1] = true;
            // } else {
            //     isLineEnable[row + 1] = false;
            // }

            if(sumPointsUntilLine(lineSum, row) >= (5 * row)) {
                    isLineEnable[row + 1] = true;
                } else {
                    isLineEnable[row + 1] = false;
                }


        }


        for(let prop in specobject) {
            if(specobject[prop].lineNumber === row + 1) {
                if(isLineEnable[row + 1] === true && specobject[prop].addRequirement() === "" ) {
                    specobject[prop].isEnable = true;   
                } else {
                    specobject[prop].isEnable = false;

                    if(specobject[prop].name !== undefined) {
                    globalTalentLimit -= specobject[prop].pointSpent;
                    }
                    
                    specobject[prop].pointSpent = 0;
                }              
            }            
        }

        for(i = row; i <= 9; i++) {
            lineSum[0] += lineSum[i];
        }

        row++;
    }

    let control = 0;
    let talentImages = divTalentTree.getElementsByClassName('talent-img');
    let talentSpan = divTalentTree.getElementsByClassName('talent-span');
    
    for(let prop in specobject){

        if(specobject[prop].name !== undefined) {

            if(specobject[prop].isEnable === true) {
                    talentImages[control].className = "talent-img";
            } 

            if(specobject[prop].isEnable === false) {
                    talentImages[control].className = "talent-img talent-img-disable";
                    talentSpan[control].textContent = `${specobject[prop].pointSpent}/${specobject[prop].pointLimit}`;
            }
            control += 1;
        }

    }

    spanPoints.textContent = parseInt(lineSum[0]);

}

function divTalentInfo (spec, specobject, prop, spanName, spanRank, spanText1, nextrank, spanText2, spanBottom, spanBottomAdd) {
           
    if(specobject[prop].name !== undefined) {   
    
        let toRank = specobject[prop].pointSpent;

        if(toRank == 0) {
        
            spanName.textContent = specobject[prop].name;

            if(specobject[prop].isTalent == false) {
                spanRank.textContent = `Rank ${toRank + 1}`
            } else {
                spanRank.textContent = `Talent`;
            }

            spanText1.textContent = specobject[prop].rankText["1"];
            nextrank.textContent = '';
            spanText2.textContent = '';

            if(specobject[prop].isEnable == true) {
            spanBottom.textContent = 'Click to learn';
            spanBottom.style.color = "#33d31e";
            } else {
                spanBottom.style.color = 'red';
                spanBottom.textContent = `Requires ${specobject[prop].lineNumber * 5 - 5} points in ` + spec;
                
            }

            if(specobject[prop].addRequirement !== undefined) {   
                spanBottomAdd.textContent = specobject[prop].addRequirement();
            }

        }

        if(toRank > 0 && toRank < specobject[prop].pointLimit ) { 

            spanName.textContent = specobject[prop].name;
            spanRank.textContent = `Rank ${toRank}`
            spanText1.textContent = specobject[prop].rankText[`${toRank}`];
            nextrank.textContent = 'Next Rank: ';
            spanText2.textContent = specobject[prop].rankText[`${toRank + 1}`];
            spanBottom.textContent = 'Click to learn';

        }

        if(toRank == specobject[prop].pointLimit) {
        
            spanName.textContent = specobject[prop].name;

            if(specobject[prop].isTalent == false) {
                spanRank.textContent = `Rank ${specobject[prop].pointSpent}`;
            } else {
                spanRank.textContent = `Talent`;
            }
        
            spanText1.textContent = specobject[prop].rankText[`${toRank}`];
            nextrank.textContent = '';
            spanText2.textContent = '';
            spanBottom.textContent = 'Right click to unlearn';

        }
    }
}

function sumPointsUntilLine (array, row) {
    let sum = 0;

    for(i = row; i >= 1; i--) {
        sum += array[i];
    }

    return sum;

}
