const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다",
        author : "키케로"
    },
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
        author : "파울로 코엘료"
    },
    {
        quote : "산다는것 그것은 치열한 전투이다.",
        author : "로망로랑"
    },
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ",
        author : "사무엘존슨"
    },
    {
        quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        author : "찰리 채플린"
    },
    {
        quote : "피할수 없으면 즐겨라.",
        author : "로버트 엘리엇"
    },
    {
        quote : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다. ",
        author : "앙드레 말로"
    },
    {
        quote : "행복은 습관이다,그것을 몸에 지니라. ",
        author : "허버드"
    },
    {
        quote : "자신감 있는 표정을 지으면 자신감이 생긴다. ",
        author : "찰스다윈"
    },
]

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

let randomNumber = Math.floor(Math.random()*quotes.length);

quote.innerHTML = quotes[randomNumber].quote;
author.innerHTML = quotes[randomNumber].author;