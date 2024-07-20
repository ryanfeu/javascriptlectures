let output;

//document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

//everything in the html tags
output = document.documentElement;

//head and body tags
output = document.head;
output = document.body;

//random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

//get all images
output = document.images;

console.log(output);
