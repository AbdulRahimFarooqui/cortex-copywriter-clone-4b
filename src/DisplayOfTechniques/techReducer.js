const techReducer = ((state, action) => {

    switch (action.topicName) {
        default:
            return {
                t: "Rhyme",
                tSentence: "People perceive rhyming phrases as more truthful.",
                sent: "At last, interactive AR experiences that <b>feel real</b>."
            }
        case "Rhyme":
            return {
                t: "Rhyme",
                tSentence: "People perceive rhyming phrases as more truthful.",
                sent: "At last, interactive AR experiences that <b>feel real</b>."
            }
        case "Bizzare":
            return {
                t: "Bizzare",
                tSentence: "Bizarre nouns and unusual material are easier to remember than common material and phrasing.",
                sent: "<b>Sheeeeeit!</b> This is the <b>ma-fuggin'</b> grail of AR."
            }
        case "Because":
            return {
                t: "Justify With 'beacause'",
                tSentence: "‘because’ is a trigger word that assigns credit and reinforces a valid reason for a request.",
                sent: "Our AR glasses are revolutionary <b>because they make everything</b> from shopping to social media <b>easier and more enjoyable</b>."
            }
        case "Approach":
            return {
                t: "Approach Motivation",
                tSentence: "Positive desire makes you want to experience or discover more of something.",
                sent: "<b>Bespoke, photorealistic</b> AR digital creations can enhance the way you engage with your customers."
            }
        case "Avoid":
            return {
                t: "Avoid Motivation",
                tSentence: "Convince people your product eliminates annoyances and inconveniences.",
                sent: "AR lenses with overlaid information let you read texts <b>without taking your phone out</b>."
            }
        case "Attack":
            return {
                t: "Attack Motivation",
                tSentence: "Emotionally motivate people to devalue, criticize or destroy something rather than simply avoid it.",
                sent: "User-centered AR experiences <b>hit business goals</b> and <b>kill pain points</b>."
            }
        case "Approach & Attack":
            return {
                t: "Approach & Attack",
                tSentence: "Comparative advertising = approach motivation (express benefits) + attack competitors.",
                sent: "Our AR glasses actually <b>look like a real pair</b> of glasses. <b>Sorry Google Glass</b>."
            }
    }
})
export default techReducer;