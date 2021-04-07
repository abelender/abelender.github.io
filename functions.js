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
        spanPoints.textContent = '0';

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
            img.className = 'talent-img'
            div.appendChild(img);

            span.textContent = `${specobject[prop].pointSpent}/${specobject[prop].pointLimit}`;
            div.appendChild(span);

            div.addEventListener('click', function(ev) { 
                addTalentPoint(ev, span, specobject, prop);}, false);

            div.addEventListener('contextmenu', function(ev) { 
                subTalentPoint(ev, span, specobject, prop);}, false);

        }
    
        divTalentLine.appendChild(div);
        divTalentTree.appendChild(divTalentLine);
    }

    
    divTalentTreeBG.style.backgroundImage = `url('${backgroundImage}')`;
    divTalentTree.appendChild(divTalentTreeBG);
    divTalentTreeWrapper.appendChild(divTalentTree);

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

function addTalentPoint(ev, span, specobject, prop) {

        
    if(specobject[prop].pointSpent < specobject[prop].pointLimit) {
            span.textContent = `${specobject[prop].pointSpent += 1}/${specobject[prop].pointLimit}`;
    }
    
    ev.preventDefault();


    return false;

}

function subTalentPoint(ev, span, specobject, prop) {

    
    if(specobject[prop].pointSpent > 0) {
            span.textContent = `${specobject[prop].pointSpent -= 1}/${specobject[prop].pointLimit}`;
    }
    
    ev.preventDefault();


    return false;

}




