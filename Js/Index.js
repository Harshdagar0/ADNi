 // Get current page url
 const currentPage = window.location.pathname.split("/").pop();

 // Get all <a> links
 const links = document.querySelectorAll("nav a");

 // Loop through links and add active class 
 links.forEach(link => {
     if (link.getAttribute("href") === currentPage) {
         link.classList.add("active");
     }
 });

 