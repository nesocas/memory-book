// Array of photo details (title, date, description)
console.log("timeline.js loaded");

const photoDetails = [
    {
      title: "Italy Trip",
      date: "February 2, 2024",
      description: "Verona, Italy. Our second stop <3"
    },
    {
      title: "Our favorite place",
      date: "April 6, 2024",
      description: "Florence, Italy. Coming back after a month."
    },
    {
      title: "Florence <3",
      date: "April 6, 2024",
      description: "Best view of Florence!!"
    },
    {
      title: "Best 2 Nights",
      date: "May 24, 2024",
      description: "So much fun with my friends :)"
    },
    {
      title: "My Princess",
      date: "May 30, 2024",
      description: "First trip to see me, really nice sunset <3"
    },
    {
      title: "Painting in Madrid",
      date: "July 5, 2024",
      description: "Perfect summer trip!"
    },
    {
      title: "Bairro <3",
      date: "July 23, 2024",
      description: "Bairro with my best friends, as always"
    },
    {
      title: "2 Weeks in Madrid",
      date: "August 8, 2024",
      description: "Such a vibe, summer and very happy"
    },
    {
      title: "Ericeira Days",
      date: "August 25, 2024",
      description: "Few days in Ericeira, beach all the time <3"
    },
    {
      title: "Pretty sunsets",
      date: "August 25, 2024",
      description: "Pretty and aesthetic :p"
    },
    {
      title: "Our First Flight",
      date: "September 19, 2024",
      description: "Paris and flying with Cyp for the first time"
    },
    {
      title: "Views Coming Back Home",
      date: "January 1, 2025",
      description: "Sunset on my flight home <3"
    }
  ];
  
  // Function to open the photo modal and display details
  function openPhoto(index) {
    const modal = document.getElementById('photoModal');
    const photo = document.querySelectorAll('.photo img')[index];
    const details = photoDetails[index];
  
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('photoTitle').textContent = details.title;
    document.getElementById('photoDate').textContent = details.date;
    document.getElementById('photoDescription').textContent = details.description;
  
    modal.style.display = "block";
  }
  
  // Function to close the photo modal
  function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = "none";
  }
  
  // Close modal if clicked outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('photoModal');
    if (event.target == modal) {
      closeModal();
    }
  }
