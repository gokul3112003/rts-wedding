// =================================================================
// EDIT YOUR WEDDING DETAILS HERE
// This file acts as a simple "Content Management System".
// Change the values below to update the website.
// =================================================================

export const config = {
  // The couple's names
  groomName: "Tamil Selvan",
  brideName: "Shanthini",
  
  // Wedding date and time
  date: "Friday, February 6, 2026",
  time: "6:00 AM to 7:30 AM",
  
  // Venue details
  venueName: "Usha Saravana Mahal",
  venueAddress: "Singarapettai - Tirupattur Road",
  venueCity: "Tirupattur, Tamil Nadu",
  // Get this from Google Maps: click "Share" -> "Embed a map" -> copy the src URL
  venueMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.946197170134!2d78.583359!3d12.428989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac53460699a22f%3A0x6b490f055964f4f3!2sUsha%20Saravana%20Mahal!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin",
  
  // Reception details (optional)
  receptionDate: "Sunday, February 8, 2026",
  receptionTime: "6:00 PM onwards",
  receptionVenue: "Sathiyam Mahal, Erode",

  // Link for guests to upload photos
  // This should be the "Get link" URL from your Google Drive folder, with permissions set to "Anyone with the link can add and edit"
  googleDriveUploadUrl: "https://drive.google.com/drive/folders/1drvothbMrm8RujMARwxZIuUKkiGvovOW?usp=sharing",

  // Link for the YouTube live stream
  // This is the "embed" URL from your YouTube Live video
  youtubeLiveUrl: "https://www.youtube.com/embed/RZcJVIcPqcg",

  // Optional: A contact email for photo submission issues
  contactEmail: "couple@example.com",

  // =================================================================
  // PHOTO GALLERY
  // Instructions:
  // 1. Go to your shared Google Photos album.
  // 2. Click on a photo to open it in the full-screen viewer.
  // 3. Right-click on the photo and select "Copy Image Address".
  // 4. Paste the URL into the list below, wrapped in quotes ''.
  // 5. Add a comma after each URL except the last one.
  // NOTE: This method is the simplest for a static site but may
  // occasionally require updating links if they change.
  // =================================================================
  galleryPhotoUrls: [
    'https://picsum.photos/id/10/800/1200',
    'https://picsum.photos/id/20/800/600',
    'https://picsum.photos/id/30/1200/800',
    'https://picsum.photos/id/45/800/1000',
    'https://picsum.photos/id/55/800/600',
    'https://picsum.photos/id/65/1000/800',
    'https://picsum.photos/id/75/800/1200',
    'https://picsum.photos/id/85/800/600',
    'https://picsum.photos/id/95/1200/800',
  ],
};