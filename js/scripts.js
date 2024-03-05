function removeTemplate() {
  var template = document.getElementById("imageTemplate");
  var content = template.content.cloneNode(true); // Clone the content of the template
  var parent = template.parentElement;

  // Append the cloned content to the parent
  parent.appendChild(content);

  // Remove the template itself
  template.remove();
}
