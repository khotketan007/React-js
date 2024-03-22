function customRender(rElement, container){

    // const domElement = document.createElement(rElement.type)
    // domElement.innerHTML = rElement.children
    // domElement.setAttribute('href', rElement.props.href)
    // domElement.setAttribute('target', rElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(rElement.type)
    domElement.innerHTML = rElement.children
    for (const prop in rElement.props) {
        domElement.setAttribute(prop, rElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)