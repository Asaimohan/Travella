const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
 console.log(genAI)
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Goa, India, for 6 Days and 5 Night for Friends with a Moderate budget with a Flight details, Flight Price w\nith Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby wi\nth placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 6 days and 5 night with each day plan wi\nth best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"Goa, India\",\n    \"duration\": \"6 Days, 5 Nights\",\n    \"budget\": \"Moderate\",\n    \"travelers\": \"Friends\"\n  },\n  \"flights\": {\n    \"flight_details\": [\n\t\t{\n\t\t\t\"flight_name\": \"Air India (Example)\",\n\t\t\t\"origin\": \"Your City\",\n\t\t\t\"destination\": \"Goa (GOI)\",\n\t\t\t\"departure_date\": \"2024-10-26\",\n\t\t\t\"arrival_date\": \"2024-10-26\",\n\t\t\t\"departure_time\": \"10:00\",\n\t\t\t\"arrival_time\": \"12:00\",\n\t\t\t\"price\": \"₹12,000\",\n\t\t\t\"booking_url\": \"https://www.airindia.in/ (Replace with actual booking link)\",\n\t\t},\n\t\t{\n\t\t\t\"flight_name\": \"SpiceJet (Example)\",\n\t\t\t\"origin\": \"Your City\",\n\t\t\t\"destination\": \"Goa (GOI)\",\n\t\t\t\"departure_date\": \"2024-10-26\",\n\t\t\t\"arrival_date\": \"2024-10-26\",\n\t\t\t\"departure_time\": \"14:00\",\n\t\t\t\"arrival_time\": \"16:00\",\n\t\t\t\"price\": \"₹10,000\",\n\t\t\t\"booking_url\": \"https://www.spicejet.com/ (Replace with actual booking link)\",\n\t\t}\n\t],\n\t\"note\": \"Flight prices and availability vary.  Check multiple airlines and dates for the best deals.\"\n  },\n  \"hotels\": [\n    {\n      \"HotelName\": \"The Zuri White Sands Goa\",\n      \"HotelAddress\": \"Candolim, Goa, India\",\n      \"Price\": \"₹8,000\",\n      \"hotel_image_url\": \"https://example.com/zuri_white_sands.jpg\",\n\t  \"geo_coordinates\": \"15.5425° N, 73.8745° E\",\n      \"rating\": \"4.5\",\n      \"description\": \"Luxury hotel with beautiful beach views and excellent amenities.\",\n      \"nearby_places\": []\n    },\n\t{\n      \"HotelName\": \"The Grand Hyatt\",\n      \"HotelAddress\": \"Panaji, Goa, India\",\n      \"Price\": \"₹6,000\",\n      \"hotel_image_url\": \"https://example.com/grand_hyatt.jpg\",\n      \"geo_coordinates\": \"15.4511° N, 73.8342° E\",\n      \"rating\": \"4.2\",\n      \"description\": \"Comfortable hotel with good location in the city.\",\n      \"nearby_places\": []\n    }\n  ],\n\t\"places_to_visit\":[\n\t\t{\n\t\t\t\"placeName\":\"Baga Beach\",\n\t\t\t\"placeDetails\":\"One of Goa's most popular beaches, known for its lively atmosphere, restaurants, and shops.\",\n\t\t\t\"placeImageUrl\":\"https://example.com/baga_beach.jpg\",\n\t\t\t\"geoCoordinates\": \"15.5561° N, 73.8655° E\",\n\t\t\t\"ticketPricing\":\"Free (Beach access)\",\n\t\t\t\"timeToTravel\": \"15 minutes (from South Goa)\"\n\t\t}\t\n\t],\n\n  \"day_plans\": [\n    {\n      \"day\": 1,\n      \"date\": \"2024-10-27\",\n      \"plan\": \"Arrive in Goa, check into hotel, relax at the beach, and dinner at a local restaurant.\",\n      \"best_time_to_visit\": \"Afternoon\"\n    },\n    {\n      \"day\": 2,\n      \"date\": \"2024-10-28\",\n      \"plan\": \"Visit Old Goa, explore churches and historical sites. Evening: enjoy a delicious seafood dinner and drinks on the beach.\",\n      \"best_time_to_visit\": \"Morning\"\n    },\n\t{\n      \"day\": 3,\n      \"date\": \"2024-10-29\",\n      \"plan\": \"Water sports activities (parasailing, jet skiing etc), relax on the beach, and explore local markets. Evening: Enjoy dinner with live music.\",\n      \"best_time_to_visit\": \"Morning\"\n    },\n    {\n      \"day\": 4,\n      \"date\": \"2024-10-30\",\n      \"plan\": \"Day trip to Dudhsagar Falls and explore the scenic beauty. Evening: Relax and Enjoy sunset view from a cafe.\",\n      \"best_time_to_visit\": \"Early Morning\"\n    },\n    {\n      \"day\": 5,\n      \"date\": \"2024-10-31\",\n      \"plan\": \"Explore the nightlife of North Goa with clubs, bars, and pubs. Evening: try out a local Goan Thali for dinner.\",\n      \"best_time_to_visit\": \"Evening\"\n    },\n    {\n      \"day\": 6,\n      \"date\": \"2024-11-01\",\n      \"plan\": \"Shopping for souvenirs, enjoy one last beach visit, and depart from Goa.\",\n      \"best_time_to_visit\": \"Morning\"\n    }\n  ],\n\"note\": \"This is a sample plan. Customize it based on your group's interests and preferences.  Use online resources to find specific details (addresses, prices, etc.) for places to visit.\"\n}\n```\n\n**Explanation and Important Considerations:**\n\n* **Replace Placeholders:**  Crucially, replace placeholders like example flight names, URLs, hotel image URLs, and actual booking links with correct information.\n* **Flight Search:** Use flight comparison websites (Skyscanner, Google Flights, etc.) to find the best prices and times for your specific dates and origin.\n* **Hotel Search:** Use booking sites (Booking.com, Hotels.com, etc.) to find hotels matching your budget and preferences.  **Verify pricing and availability** on these sites for accuracy.\n* **Place Details:** Research specific attractions you want to visit.  Include their opening hours, ticket prices, and travel times between locations.\n* **Geocoordinates:**  Use online mapping tools (Google Maps, Maps.me) to find precise coordinates and for creating travel directions.\n* **Budget:** Adjust hotel choices and dining options to fit your moderate budget.\n* **Flexibility:** This is a sample plan; feel free to customize it based on your group's interests.\n* **Transportation:**  Consider how you will get around Goa (taxis, buses, pre-booked transportation services).\n* **Activities:** This plan includes some suggestions.  If you want to do more specific activities (water sports, cooking classes, etc.), research those in advance.\n* **Visa Requirements:** Ensure your travel group has the correct travel documents and visas, especially if coming from outside India.\n\n\nThis JSON format allows for easy expansion and modification to fit your exact needs and preferences for your Goa trip. Remember to verify all information and details before booking your trip. Remember to adjust the JSON based on specific requirements, travel style, and most importantly, verify the information (hotel prices, flight details, place pricing) from official sources before relying on it for your travel plans."},
        ],
      },
    ],
  });

  //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  //console.log(result.response.text());
