function createDOMElem(parent = 'empty', elem, text = 'empty', className = 'empty', HTML = 'empty'){
    // createDOMElem()
    let element = document.createElement(`${elem}`)
    if (text !== 'empty') element.textContent = text
    if (className !== 'empty') element.classList.add(`${className}`)
    if (HTML !== 'empty') element.innerHTML = HTML
    if (parent !== 'empty') parent.appendChild(element)
    return element
}


let request = new XMLHttpRequest();
let params = {
    title: "title",
    done: "done",
    category: "cat"
};
params = JSON.stringify(params);
request.onload = function(){ 
    let resp = JSON.parse(request.responseText);
    let table = createDOMElem(document.body, 'div', 'empty', className = 'outerDiv')
    for (key in resp){
        let row = createDOMElem(table, 'div', 'empty', 'titleValue')
        createDOMElem(row, 'div', key + ':', 'title')
        createDOMElem(row, 'div', resp[key], 'value')
    }
};

request.open("POST", "https://todoappexamplejs.herokuapp.com/items");
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.send(params);