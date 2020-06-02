
let questions = [
  {
    id: 1,
    question: "How much distance do you need to observe ?",
    answer: "1.5m",
    options: [
      "1.5km",
      "1.5m",
      "1.5mm",
      "None of these"
    ]
  },
  {
  id: 2,
    question: "Do you have to hand anything to your teacher ?",
    answer: "No, unless asked to do so",
    options: [
      "No, unless asked to do so",
      "Yes, hand over anything to your teacher",
      "Never hand anything to your teacher",
      "None of these"
    ]
  },
   {
  id: 3,
    question: "On the playground and when lining up,what distance should you maintain ?",
    answer: "2m",
    options: [
      "2m",
      "1.5m",
      "1m",
      "1km"
    ]
  },
  {
    id: 4,
      question: "Which types of games should you avoid playing at school?",
      answer: "Physical games where you touch friends or share items such as balls",
      options: [
        "All games",
        "All physical games",
        "All video games",
        "Physical games where you touch friends or share items such as balls"
      ]
    },
    {
      id: 5,
        question: "Are you allowed to share food?",
        answer: "No",
        options: [
          "Yes",
          "No",
          "Maybe",
          "None of these"
        ]
      },
      {
        id: 6,
          question: "What should you do before and after handing food items?",
          answer: "Wash or sanitise your hands before and after  handling food items",
          options: [
            "Sanitise your hands, do not wash them",
            "Do not sanitise your hands,just wash them",
            "Nothing",
            "Wash or sanitise your hands before and after  handling food items"
          ]
        },
        {
          id: 7,
            question: "What is the main thing you should do after using restrooms (toilets)?",
            answer: "Wash or sanitise your hands after using the restrooms (toilets) and after you have touched the doors",
            options: [
              "Sanitise your hands, do not wash them",
            "Do not sanitise your hands,just wash them",
            "Nothing",
            "Wash or sanitise your hands after using the restrooms (toilets) and after you have touched the doors"
            ]
          },
          {
            id: 8,
              question: "If your friend seems to have many positive signs of COVID-19, what should you do ?",
              answer: "All",
              options: [
                "Tell him/her to contact his/her parent or teacher.",
                "Stay with him/her until he/she has told parent or teacher. ",
                "Do no change a friend and get a new one, without COVID-19.",
                "All"
              ]
            },
            {
              id: 9,
                question: "On your way to school, which ones below should you do ?",
                answer: "All",
                options: [
                  "Wear a face mask in public",
                  "Do not touch your face or mask",
                  "If you use public transport only join if it has the reduced capacity (not more than half full). Sanitise your hands before and after use",
                  "All"
                ]
              },
              {
                id: 10,
                  question: "Which Motor vehicles should not have more than 2-3 persons?",
                  answer: "Sedan",
                  options: [
                    "Sedan",
                    "Taxi's",
                    "Coupe",
                    "Hatchback"
                  ]
                },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
