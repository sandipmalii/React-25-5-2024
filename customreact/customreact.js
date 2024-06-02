function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    
    // Set inner HTML or text content
    domElement.textContent = reactElement.children;
    
    // Set attributes if they exist
    if (reactElement.props) {
      if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
      }
      if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
      }
    }
    
    // Append to container
    container.appendChild(domElement);
    */ 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
  }
  
  
  /* const anotherUser = "chai is ready" */


  const reactElement = {
    type: 'a',
    props: {
      href: 'https://reactjs.org',
      target: '_blank'
    },
    children: 'Click me to visit React'
  };
  
  const mainContainer = document.querySelector('#root');
  
  customRender(reactElement, mainContainer);
  