
import { Movie } from '../types';

export const rawMoviesData: Movie[] = [
  {
    "id": "1",
    "title": "The Grand Budapest Hotel",
    "poster": "https://picsum.photos/400/600?random=1",
    "releaseDate": "2014-03-07",
    "averageRating": 4.8,
    "description": "The adventures of Gustave H, a legendary concierge at a famous hotel from the interwar period, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    "reviews": [
      { "id": "r1", "user": "WesFan", "rating": 5, "comment": "A visually stunning masterpiece! Witty dialogue and charming characters." },
      { "id": "r2", "user": "FilmBuff88", "rating": 4, "comment": "Fantastic art direction and a unique story, though a bit quirky for some." },
      { "id": "r3", "user": "MovieLover", "rating": 5, "comment": "Absolutely loved every minute. A must-watch for any cinema enthusiast." }
    ]
  },
  {
    "id": "2",
    "title": "Interstellar",
    "poster": "https://picsum.photos/400/600?random=2",
    "releaseDate": "2014-11-07",
    "averageRating": 4.7,
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "reviews": [
      { "id": "r4", "user": "SpaceNerd", "rating": 5, "comment": "Mind-blowing visuals and a captivating story about space and time." },
      { "id": "r5", "user": "SciFiGeek", "rating": 4, "comment": "A bit long, but the science and performances are incredible." }
    ]
  },
  {
    "id": "3",
    "title": "Parasite",
    "poster": "https://picsum.photos/400/600?random=3",
    "releaseDate": "2019-10-11",
    "averageRating": 4.9,
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "reviews": [
      { "id": "r6", "user": "IndieCritic", "rating": 5, "comment": "A brilliant, unsettling film that explores class dynamics with sharp wit." },
      { "id": "r7", "user": "CinemaWatcher", "rating": 5, "comment": "Unpredictable and masterfully directed. A truly unique cinematic experience." }
    ]
  },
  {
    "id": "4",
    "title": "La La Land",
    "poster": "https://picsum.photos/400/600?random=4",
    "releaseDate": "2016-12-09",
    "averageRating": 4.6,
    "description": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    "reviews": [
      { "id": "r8", "user": "MusicalFan", "rating": 5, "comment": "Enchanting music, stunning visuals, and a bittersweet story. Loved it!" },
      { "id": "r9", "user": "HollywoodDreamer", "rating": 4, "comment": "A beautiful tribute to classic Hollywood, though the ending hit hard." }
    ]
  },
  {
    "id": "5",
    "title": "Spider-Man: Into the Spider-Verse",
    "poster": "https://picsum.photos/400/600?random=5",
    "releaseDate": "2018-12-14",
    "averageRating": 4.8,
    "description": "Teen Miles Morales becomes Spider-Man of his reality, crossing paths with five counterparts from other dimensions to stop a threat to all realities.",
    "reviews": [
      { "id": "r10", "user": "ComicBookGuy", "rating": 5, "comment": "Groundbreaking animation and a fantastic story. Best Spider-Man movie ever!" },
      { "id": "r11", "user": "Animator", "rating": 5, "comment": "The visual style is revolutionary. A true cinematic achievement." }
    ]
  },
  {
    "id": "6",
    "title": "Dune: Part Two",
    "poster": "https://picsum.photos/400/600?random=6",
    "releaseDate": "2024-03-01",
    "averageRating": 4.9,
    "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
    "reviews": [
      { "id": "r12", "user": "ArrakisFan", "rating": 5, "comment": "A masterclass in sci-fi filmmaking. Epic and immersive!" },
      { "id": "r13", "user": "Newbie", "rating": 4, "comment": "Great visuals, but definitely need to see the first one to understand." }
    ]
  },
  {
    "id": "7",
    "title": "Oppenheimer",
    "poster": "https://picsum.photos/400/600?random=7",
    "releaseDate": "2023-07-21",
    "averageRating": 4.7,
    "description": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "reviews": [
      { "id": "r14", "user": "HistoryBuff", "rating": 5, "comment": "A powerful and intense historical drama. Cillian Murphy is phenomenal." },
      { "id": "r15", "user": "NolanFan", "rating": 4, "comment": "Long, but worth every minute. A true cinematic experience." }
    ]
  },
  {
    "id": "8",
    "title": "Past Lives",
    "poster": "https://picsum.photos/400/600?random=8",
    "releaseDate": "2023-06-02",
    "averageRating": 4.6,
    "description": "Nora and Hae Sung, two deeply connected childhood friends, are separated after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of destiny and love.",
    "reviews": [
      { "id": "r16", "user": "Romantic", "rating": 5, "comment": "A tender, beautiful, and heartbreaking story about connection and 'in-yeon'." },
      { "id": "r17", "user": "DramaLover", "rating": 4, "comment": "Quietly powerful and deeply resonant. A truly unique love story." }
    ]
  },
  {
    "id": "9",
    "title": "Pulp Fiction",
    "poster": "https://picsum.photos/400/600?random=9",
    "releaseDate": "1994-10-14",
    "averageRating": 4.9,
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "reviews": [
      { "id": "r18", "user": "TarantinoFan", "rating": 5, "comment": "Iconic dialogue, unforgettable characters, and a non-linear narrative that still holds up." },
      { "id": "r19", "user": "ClassicFilm", "rating": 5, "comment": "A true cinematic game-changer. Influential and endlessly rewatchable." }
    ]
  },
  {
    "id": "10",
    "title": "Spirited Away",
    "poster": "https://picsum.photos/400/600?random=10",
    "releaseDate": "2002-09-20",
    "averageRating": 4.8,
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "reviews": [
      { "id": "r20", "user": "GhibliLover", "rating": 5, "comment": "Magical, beautiful, and deeply imaginative. A timeless animated masterpiece." },
      { "id": "r21", "user": "AnimationFan", "rating": 5, "comment": "Stunning visuals and a heartwarming story. Miyazaki at his best." }
    ]
  }
];
