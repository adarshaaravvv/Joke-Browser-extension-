document.addEventListener("DOMContentLoaded", () => {
  const jokeBtn = document.getElementById("joke-btn");
  const jokeText = document.getElementById("joke-text");

  // Your own custom "API" of localized jokes
  const biharNitJokes = [
    {
      setup: "What's the toughest engineering challenge at NIT?",
      punchline: "Not doing TIS-TISSSSSS"
    },
    {
      setup: "Why do Patna engineers love Litti Chokha?",
      punchline: "Because it's a perfectly encapsulated, zero-dependency energy module for late-night studying."
    },
    {
      setup: "Where do I fetch joke?",
      punchline: "ofcourse Vaibhav's mind"
    },
    {
      setup: "Why did the engineering student refuse to leave Ganga Ghat?",
      punchline: "Because the 'flow' there was much more stable than the hostel Wi-Fi."
    },
    {
      setup: "What is the most popular engineering design pattern used in Patna?",
      punchline: "The 'Jugaad' pattern. It compiles every single time."
    },
    {
      setup: "How do you know someone is studying in Patna?",
      punchline: "They measure distance not in kilometers, but in 'Traffic clear raha toh 15 minute'."
    }
  ];

  let lastJokeIndex = -1;

  jokeBtn.addEventListener("click", tellJoke);

  function tellJoke() {
    // Add a tiny delay to make it feel like it's "thinking"
    jokeText.textContent = "Loading some local wisdom...";
    jokeBtn.disabled = true;
    jokeBtn.style.opacity = "0.7";

    setTimeout(() => {
      // Pick a random joke, making sure it's not the same as the last one
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * biharNitJokes.length);
      } while (randomIndex === lastJokeIndex && biharNitJokes.length > 1);
      
      lastJokeIndex = randomIndex;
      const selectedJoke = biharNitJokes[randomIndex];

      // Display the joke
      jokeText.innerHTML = `<strong>${selectedJoke.setup}</strong><br><br>${selectedJoke.punchline}`;
      
      // Re-enable the button
      jokeBtn.disabled = false;
      jokeBtn.style.opacity = "1";
    }, 400); // 400ms delay for a smooth UI feel
  }
});