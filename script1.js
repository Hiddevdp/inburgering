const sentences = [
  "Bij wie gaat u wonen in Nederland?",
  "Wie helpt u met Nederlands leren?",
  "Wie wonen bij u in huis?",
  "Waarom leert u Nederlands?",
  "Waar heeft u Nederlands geleerd?",
  "Waarom wilt u naar Nederland?",
  "Hoe laat begint u met werken?",
  "Hoe laat gaat u 's avonds naar bed?",
  "Hoe laat is het nu?",
  "Hoe laat stopt u met werken?",
  "Hoe laat wordt u 's ochtends wakker?",
  "In welk land bent u geboren?",
  "In welke plaats gaat u wonen in Nederland?",
  "Waar bent u geboren?",
  "Waar woont u?",
  "Waar woont uw familie?",
  "Hoe gaat u naar uw werk?",
  "Hoe reist u meestal?",
  "Hoe bent u hier gekomen?",
  "Wat drinkt u graag?",
  "Wat eet u op een feest?",
  "Wat eet u 's avonds?",
  "Wat eet u 's ochtends?",
  "Wat hebt u gisteren gegeten?",
  "Wat kookt u graag?",
  "Welk eten koopt u vaak?",
  "Welk fruit eet u graag?",
  "Wat gaat u vandaag eten?",
  "Welke groente eet u vaak?",
  "Wat vindt u van de Nederlandse taal?",
  "Wat vindt u van Nederland?",
  "Wat vindt u van uw huis?",
  "Naar welke muziek luistert u graag?",
  "Van welke muziek houdt u?",
  "Welke maand is het nu?",
  "Welke dag is het vandaag?",
  "Welk cadeau geeft u graag aan iemand?",
  "Welk feest vindt u leuk?",
  "Welke dieren vindt u leuk?",
  "Welke kleur vindt u mooi?",
  "Welke sport doet u?",
  "Hoeveel dagen in de week werkt u?",
  "Met hoeveel mensen werkt u?",
  "Wat voor werk wilt u doen?",
  "Op welke dagen werkt u?",
  "Hoe vaak bent u al in Nederland geweest?",
  "Hoe vaak eet u op een dag?",
  "Hoe vaak kijkt u tv?",
  "Hoe vaak luistert u naar de radio?",
  "Hoeveel broers en zussen hebt u?",
  "Hoeveel jaar school hebt u gehad?",
  "Hoeveel kinderen hebt u?",
  "Hoeveel talen spreekt u?",
  "Welke talen spreekt u?",
  "Wat hebt u geleerd op school?",
  "In wat voor huis gaat u wonen in Nederland?",
  "Waar doet u boodschappen?",
  "Wanneer bent u blij?",
  "Wanneer bent u geboren?",
  "Wanneer doet u boodschappen?",
  "Wanneer geeft u een feest?",
  "Wanneer wilt u naar Nederland gaan?",
  "Wat doet u graag buiten?",
  "Wat doet u graag met uw familie?",
  "Wat doet u graag met uw vrienden?",
  "Wat doet u in het weekend?",
  "Wat doet u in uw vrije tijd?",
  "Wat doet u op een feestdag?",
  "Wat gaat u morgen doen?",
  "Wat hebt u gisteren gedaan?",
  "Wat is uw adres?",
  "Wat is uw telefoonnummer?",
  "Wat vindt u van Nederlandse mensen?",
  "Wat voor kleren draagt u vaak?",
  "Wat voor kleren vindt u mooi?",
  "Wat voor weer is het vandaag?",
  "Wat wilt u graag leren in Nederland?",
  "Hoe gaat het met u?",
];

const answers = [
  "Bij mijn partner",
  "Mijn partner",
  "Mijn partner en mijn kat",
  "praten met mijn partner",
  "Van mijn partner",
  "Voor mijn Partner",
  "Om acht uur",
  "Om tien uur",
  "Het is nu twaalf uur",
  "Om half zes",
  "Om acht uur",
  "In Peru",
  "In Amsterdam",
  "In Lima",
  "In Madrid",
  "In Peru",
  "Met de bus",
  "Met de bus",
  "Met de taxi",
  "Amstel Bier",
  "Taart",
  "Pasta",
  "Een broodje kaas",
  "Kroket en patatjes",
  "Kip en pasta",
  "Patatje met satésaus",
  "Aardbei",
  "Ik ga lasagne eten",
  "Tomaat en mais",
  "Heel moeilijk",
  "Heel mooi",
  "Heel mooi",
  "Naar popmuziek",
  "Van popmuziek",
  "Mei",
  "Dinsdag",
  "Een Chocoladeletter",
  "Koningsdag",
  "Katten en konijnen",
  "Blauw",
  "Volleybal",
  "Ik werk vijf dagen in de week",
  "Ik heb drie collega's",
  "Corporate communicatie",
  "Van maandag tot vrijdag",
  "Meer dan tien keer",
  "Drie keer per dag",
  "Ik kijk nooit tv",
  "Alleen in de auto",
  "Ik heb één broer",
  "Zeventien jaar",
  "Ik heb geen kinderen",
  "Ik spreek twee talen",
  "Ik spreek spaans en engels",
  "Engels",
  "In een appartement",
  "In de jumbo",
  "Met mooi weer",
  "In zevenennegentig (1997)",
  "Elke dag",
  "Op mijn verjaardag",
  "In juli",
  "Lopen",
  "Eten",
  "Praten/ Koken",
  "sporten",
  "Sporten",
  "Reizen naar Nederland",
  "werken",
  "Studeren",
  "Cornelis Lelylaan 3",
  "Zes drie een acht zes twee zeven drie zeven",
  "Leuke mensen",
  "Nike schoenen /sjunen/",
  "Mijn kleren",
  "Zonnig",
  "Fietsen in Amsterdam",
  "Goed, met jou?",
];

const container = document.getElementById("sentence-container");
const checkedAnswers = JSON.parse(
  localStorage.getItem("checkedAnswers") || "[]"
);

sentences.forEach((sentence, index) => {
  const row = document.createElement("div");
  row.className = "row";

  // Sentence wrapper for overlay
  const sentenceWrapper = document.createElement("div");
  sentenceWrapper.className = "sentence-wrapper";
  sentenceWrapper.style.position = "relative";
  sentenceWrapper.style.display = "inline-block";
  sentenceWrapper.style.cursor = "pointer";

  const sentenceElement = document.createElement("p");
  sentenceElement.className = "sentence";
  sentenceElement.textContent = `${index + 1}. ${sentence}`;

  const overlay = document.createElement("div");
  overlay.className = "sentence-overlay";

  // Toggle overlay on click
  function toggleOverlay() {
    overlay.style.opacity = overlay.style.opacity === "0" ? "1" : "0";
    overlay.style.pointerEvents =
      overlay.style.opacity === "0" ? "none" : "auto";
  }

  sentenceElement.addEventListener("click", toggleOverlay);
  overlay.addEventListener("click", toggleOverlay);

  sentenceWrapper.appendChild(sentenceElement);
  sentenceWrapper.appendChild(overlay);

  const button = document.createElement("button");
  button.className = "play-button";
  button.textContent = "Play";
  button.onclick = () => playAudio(`audio${index + 1}`);

  const audio = document.createElement("audio");
  audio.id = `audio${index + 1}`;
  audio.src =
    index === 0 ? `audio/Recording.m4a` : `audio/Recording (${index + 1}).m4a`;

  // Checkbox to show/hide answer
  const label = document.createElement("label");
  label.className = "answerlabel";
  label.style.display = "block";
  label.style.marginTop = "5px";
  label.innerHTML = `<input type="checkbox" class="toggle-answer">`;

  const answer = document.createElement("div");
  answer.className = "answer";
  answer.textContent = answers[index] || "";
  answer.style.visibility = "hidden";

  const checkbox = label.querySelector(".toggle-answer");
  // Restore state
  checkbox.checked = checkedAnswers[index] || false;
  answer.style.visibility = checkbox.checked ? "visible" : "hidden";
  overlay.style.opacity = checkbox.checked ? "0" : "1";
  overlay.style.pointerEvents = checkbox.checked ? "none" : "auto";

  label.querySelector(".toggle-answer").addEventListener("change", function () {
    answer.style.visibility = this.checked ? "visible" : "hidden";
    overlay.style.opacity = this.checked ? "0" : "1";
    overlay.style.pointerEvents = this.checked ? "none" : "auto";
    // Save state to localStorage
    let checkedAnswers = JSON.parse(
      localStorage.getItem("checkedAnswers") || "[]"
    );
    checkedAnswers[index] = this.checked;
    localStorage.setItem("checkedAnswers", JSON.stringify(checkedAnswers));

    // Check if all are checked
    const allChecked = Array.from(
      document.querySelectorAll(".toggle-answer")
    ).every((cb) => cb.checked);
    if (allChecked) {
      // Play your finished audio (make sure this audio element exists in your HTML)
      let finishedAudio = document.getElementById("finished-audio");
      if (!finishedAudio) {
        finishedAudio = document.createElement("audio");
        finishedAudio.id = "finished-audio";
        finishedAudio.src = "audio/Booyah.m4a";
        document.body.appendChild(finishedAudio);
      }
      finishedAudio.play();
    }
  });

  row.appendChild(button);
  row.appendChild(sentenceWrapper);
  row.appendChild(audio);
  row.appendChild(label);
  row.appendChild(answer);

  container.appendChild(row);
});

function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  audio.play();
}

const resetBtn = document.querySelector(".resetbtn");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    // Uncheck all checkboxes and reset UI
    document.querySelectorAll(".toggle-answer").forEach((cb, idx) => {
      cb.checked = false;
      // Hide answer
      const answer = cb.closest("label").nextElementSibling;
      if (answer && answer.classList.contains("answer")) {
        answer.style.visibility = "hidden";
      }
      // Show overlay
      const row = cb.closest(".row");
      if (row) {
        const overlay = row.querySelector(".sentence-overlay");
        if (overlay) {
          overlay.style.opacity = "1";
          overlay.style.pointerEvents = "auto";
        }
      }
    });
    // Clear localStorage
    localStorage.removeItem("checkedAnswers");

    // Play reset audio
    let resetAudio = document.getElementById("reset-audio");
    if (!resetAudio) {
      resetAudio = document.createElement("audio");
      resetAudio.id = "reset-audio";
      resetAudio.src = "audio/howcouldthishappentome.mp3"; // Change to your reset audio file path
      document.body.appendChild(resetAudio);
    }
    resetAudio.play();
  });
}
