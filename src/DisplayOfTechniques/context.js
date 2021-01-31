import React, {createContext} from 'react';
import {useReducer} from 'react';
import techReducer from "./techReducer.js";

const initialTech=
    {t:"Rhyme",
    tSentence:"People perceive rhyming phrases as more truthful.",
    sent:" At last, interactive AR experiences that feel real."};
export const listTopics=["Rhyme","Bizzare","Because","Approach","Avoid","Attack",
"Approach & Attack"]

export const techContext = createContext(initialTech);


export const TransProvider=({children})=>{
    let [state, dispatch]= useReducer(techReducer,initialTech);
    function find(tNameInput){
        dispatch({
            topicName:tNameInput
        })
        
    }
    return(
        <techContext.Provider value={
            {
                topicDetails: state,
                find
            }

        }>
        {children}

        </techContext.Provider>
    );
}