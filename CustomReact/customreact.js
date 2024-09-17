// Function to render a custom React-like element into a specified container
function customRender(reactElement, container) {
    // Create a new DOM element of the type specified in reactElement.type
    const domElement = document.createElement(reactElement.type);
    
    // Set the inner HTML of the created element to the value specified in reactElement.children
    domElement.innerHTML = reactElement.children;

    // Set attributes on the element if they are provided in reactElement.props
    // For anchor tags, we set href and target attributes
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    // Append the newly created and configured element to the container element
    container.appendChild(domElement);
}

// Define a simple React-like element
const reactElement = {
    type: 'a', // Type of the element (anchor tag)
    props: {
        href: 'https://google.com', // Attribute for the hyperlink
        target: '_blank' // Attribute to open the link in a new tab
    },
    children: 'click me to visit google ' // Inner content of the element
}

// Get the DOM element with the id 'root' where we will render our custom element
const mainContainer = document.getElementById('root');

// Call customRender to render reactElement into the mainContainer
customRender(reactElement, mainContainer);
