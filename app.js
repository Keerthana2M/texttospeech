const express=require('express');
const app=express();
const speechToText=require("./speak");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDEr10Eo1CdfYHzb6a4tNmG3zXm9wNEUlE");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "hi gemini how are you";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  speechToText(text);
}

run();