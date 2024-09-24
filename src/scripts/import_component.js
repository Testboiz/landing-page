// componentLoader.js

function loadComponent(url, elementId, targetElementId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            const component = tempDiv.querySelector(`#${elementId}`);

            if (component) {
                document.getElementById(targetElementId).appendChild(component);

                // Optional: Handle inline <style> tags
                const inlineStyles = component.querySelectorAll('style');
                inlineStyles.forEach(style => {
                    document.head.appendChild(style);
                });

            } else {
                console.error(`Element with ID '${elementId}' not found in ${url}`);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}
