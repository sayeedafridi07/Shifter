import React, { useState, useEffect } from "react";

function Shift() {
  const [currentDay, setCurrentDay] = useState(getCurrentDay());
  const [currentShift, setCurrentShift] = useState("Mukund");

  // Function to get the current day of the week
  function getCurrentDay() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    return daysOfWeek[currentDayIndex];
  }

  useEffect(() => {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 50, 0);
    const timeUntilTargetTime = targetTime - now;
    const interval = setTimeout(() => {
      setCurrentDay(getCurrentDay());
      // Switch to the next shift after each day
      switch (currentShift) {
        case "Mukund":
          setCurrentShift("Gaurav");
          break;
        case "Gaurav":
          setCurrentShift("Afridi");
          break;
        case "Afridi":
          setCurrentShift("Mukund");
          break;
      }
    }, timeUntilTargetTime);
  
    // Clean up the interval on unmount
    return () => clearTimeout(interval);
  }, []); // Add currentShift as a dependency
  

  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    // Function to generate a random emoji
    function generateRandomEmoji() {
      const emojis = [
        "😀",
        "😂",
        "😍",
        "😎",
        "😋",
        "😇",
        "🤩",
        "🥳",
        "😴",
        "🤔",
        "🤪",
        "😷",
        "🤬",
        "👻",
        "🎃",
        "🌞",
        "🌈",
        "🍉",
        "🍕",
        "🍦",
      ];
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      setEmoji(randomEmoji);
    }

    generateRandomEmoji();
  }, []);

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    // Function to get the current time and update the greeting
    function updateGreeting() {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning 🌅");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon 🌞");
      } else {
        setGreeting("Good Evening 🌙");
      }
    }

    updateGreeting();
  }, []);

  return (
    // Your JSX code here
    <div>
      <div
        className="container-fluid text-center my-5"
        style={{ fontSize: "60px" }}
      >
        {currentDay} {emoji}
      </div>
      <div className="container">
        <h1>{greeting}</h1>
      </div>
      <div className="container text-center my-5" style={{ fontSize: "50px" }}>
        {currentShift}
      </div>
      <div className="container my-3">
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <div className="card-body">
            <h5 className="card-title text-center fs-3 mb-4">
              Today's Task 💪
            </h5>
            <ul className="list-group list-group-flush my-2">
              <li className="list-group-item fs-6">
                <span role="img" aria-label="Clean House">
                  🧹
                </span>{" "}
                Clean House
              </li>
              <li className="list-group-item fs-6">
                <span role="img" aria-label="Wash Dishes">
                  🧼
                </span>{" "}
                Wash Dishes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shift;
