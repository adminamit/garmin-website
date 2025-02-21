import React from "react";
import "./index.css";

const stores = [
  {
    image: "https://cmsprod.garmin-india.com/media/Athelin.webp",
    name: "Garmin Brand Store - Gurgaon",
    address:
      "Athelin - Shop Number 6A Sector 42 - 43 Metro Station Golf Course Road Gurgaon 122002",
    phone: "9811981110 and 9810149738",
    operatingTime: "All 7 days from 11 am to 8 pm",
  },
  {
    image: "https://cmsprod.garmin-india.com/media/Bangalore.webp",
    name: "Garmin Brand Store - Bangalore",
    address:
      "777/D, 100 Ft Road, opposite to New Horizon Public School, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka 560038",
    phone: "92802 33001",
    operatingTime: "All 7 days 10:30 AM to 9 PM",
  },
  {
    image: "https://cmsprod.garmin-india.com/media/Jaipur.webp",
    name: "Garmin Brand Store - Jaipur",
    address:
      "The Runners Hub, G-20, Ground Floor, Near Decathlon Jaipur Centre, Tonk Road & B2 Bypass Junction, Durgapura, Jaipur, Rajasthan 302018",
    phone: "+91 9324688691",
    operatingTime: "Mon-Sat: 11:00 AM - 09:00 PM",
  },

  {
    image: "https://cmsprod.garmin-india.com/media/Hyderabad.webp",
    name: "Garmin Brand Store - Hyderabad",
    address:
      "Shop No.8-2-626/3/A/G5, MS Towers, Road, No: 1, Banjara Hills Rd Number 1, Hyderabad, Telangana 500034",
    phone: "9280233003",
    operatingTime: "All 7 days 10:30 AM to 9 PM",
  },
];

const BrandStores = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="copy h2 text-center">Brand Stores</h2>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store, index) => (
          <div key={index} className="card">
            <img
              src={store.image}
              alt={`Store ${index + 1}`}
              className="store-image"
            />
            <div className="store-details">
              <p className="store-name">{store.name}</p>
              <p className="store-address">{store.address}</p>
              <p className="store-phone">Phone: {store.phone}</p>
              <p className="store-operating-time">
                Operating time: {store.operatingTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandStores;
