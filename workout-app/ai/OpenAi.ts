import { Configuration, ListEnginesResponse, OpenAIApi } from "openai";
import axios, { AxiosResponse } from 'axios';
import { useState } from "react";


export async function OpenAi(){
    const[aiApi,setAiApi]=useState<[]>([]);
    const {Configuration, OpenAIApi}=require("openai");
    const configuration = new Configuration({
        apiKey: OPENAI_KEY,
    });
    const openai = new = OpenAIApi(configuration);
    const getOpenAIResponse = ()=> {
        openai.createCompletion({
            model:"",
            prompt: ,
           
        }).then((Response)) => {
            setAiApi(Response.data.choice.)
        }
    }
}