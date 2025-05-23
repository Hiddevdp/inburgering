const CACHE_NAME = "inburgering-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./aanvul.html",
  "./style.css",
  "./script1.js",
  "./script2.js",
  // List all your audio files here:
  "./audio/Booyah.m4a",
  "./audio/howcouldthishappentome.mp3",
  "./audio/Recording.m4a",
  "./audio/Recording (2).m4a",
  "./audio/Recording (3).m4a",
  "./audio/Recording (4).m4a",
  "./audio/Recording (5).m4a",
  "./audio/Recording (6).m4a",
  "./audio/Recording (7).m4a",
  "./audio/Recording (8).m4a",
  "./audio/Recording (9).m4a",
  "./audio/Recording (10).m4a",
  "./audio/Recording (11).m4a",
  "./audio/Recording (12).m4a",
  "./audio/Recording (13).m4a",
  "./audio/Recording (14).m4a",
  "./audio/Recording (15).m4a",
  "./audio/Recording (16).m4a",
  "./audio/Recording (17).m4a",
  "./audio/Recording (18).m4a",
  "./audio/Recording (19).m4a",
  "./audio/Recording (20).m4a",
  "./audio/Recording (21).m4a",
  "./audio/Recording (22).m4a",
  "./audio/Recording (23).m4a",
  "./audio/Recording (24).m4a",
  "./audio/Recording (25).m4a",
  "./audio/Recording (26).m4a",
  "./audio/Recording (27).m4a",
  "./audio/Recording (28).m4a",
  "./audio/Recording (29).m4a",
  "./audio/Recording (30).m4a",
  "./audio/Recording (31).m4a",
  "./audio/Recording (32).m4a",
  "./audio/Recording (33).m4a",
  "./audio/Recording (34).m4a",
  "./audio/Recording (35).m4a",
  "./audio/Recording (36).m4a",
  "./audio/Recording (37).m4a",
  "./audio/Recording (38).m4a",
  "./audio/Recording (39).m4a",
  "./audio/Recording (40).m4a",
  "./audio/Recording (41).m4a",
  "./audio/Recording (42).m4a",
  "./audio/Recording (43).m4a",
  "./audio/Recording (44).m4a",
  "./audio/Recording (45).m4a",
  "./audio/Recording (46).m4a",
  "./audio/Recording (47).m4a",
  "./audio/Recording (48).m4a",
  "./audio/Recording (49).m4a",
  "./audio/Recording (50).m4a",
  "./audio/Recording (51).m4a",
  "./audio/Recording (52).m4a",
  "./audio/Recording (53).m4a",
  "./audio/Recording (54).m4a",
  "./audio/Recording (55).m4a",
  "./audio/Recording (56).m4a",
  "./audio/Recording (57).m4a",
  "./audio/Recording (58).m4a",
  "./audio/Recording (59).m4a",
  "./audio/Recording (60).m4a",
  "./audio/Recording (61).m4a",
  "./audio/Recording (62).m4a",
  "./audio/Recording (63).m4a",
  "./audio/Recording (64).m4a",
  "./audio/Recording (65).m4a",
  "./audio/Recording (66).m4a",
  "./audio/Recording (67).m4a",
  "./audio/Recording (68).m4a",
  "./audio/Recording (69).m4a",
  "./audio/Recording (70).m4a",
  "./audio/Recording (71).m4a",
  "./audio/Recording (72).m4a",
  "./audio/Recording (73).m4a",
  "./audio/Recording (74).m4a",
  "./audio/Recording (75).m4a",
  "./audio/Recording (76).m4a",
  "./audio/Recording (77).m4a",
  "./audio/Recording (78).m4a",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
