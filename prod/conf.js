var authorization = {
domainKey:'eyJ0eXBlIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJwcm9qZWN0Ijoic2d1bmlzZXR0aV9jaGF0Ym90X2VuIiwiZG9tYWluX2tleV9pZCI6IkJXcWdoX2R1bFZhU3loXzFnZEpqM0E6OiJ9.BAxvqnua44LxIivkYtd4iaLzSkTlSYEEHS1PpE3RQv5VDu5agVcoDhZS5RAmRiAftfiSz0j-oWyH7jYoQFmJrQ',
inbentaKey:'NyVCtCzG0CN3mxjw3Qd6Tm6HdPVFMN4dGblH/+S/stA=',
            };
hyperchatAppId = 'HyAsfXp5z';
hyperchatRegion = 'us';
hyperchatRoomId = 1;
var rejectedEscalation = {
    action: 'displayChatbotMessage',
    value: 'What else can I do for you?'
    };
var noAgentsAvailable = {
    action: 'intentMatch',
    value: 'NoAgentsAvailable'
    };
function customMessageBasedOnLength(){
    return function(chatBot){
        chatBot.subscriptions.onSendMessage(function(messageData, next) {
            const chatBotmessageData = {
                type:'answer',
                message:'Question is too long, try to cut the string',
                };
            if (messageData.message.length > 30) {
                chatBot.actions.displayChatbotMessage(chatBotmessageData);
            }
            else{
                next(messageData);
            }
        })
    }
}
config = {
    chatbotId:'mainBot', //default InbentaBot
    lang:'en',
    conversationWindow: {
        position: {
            top: null,
            left: null,
            bottom: 15,
            right: 15,
            },
        },
    proactiveWelcome: true,
    answers:{
        answerAttributes: ['ANSWER_TEXT'],
        sideBubbleAttributes: ['SIDEBUBBLE_TEXT'],
        maxRelatedContents: 5, //default-3
        maxOptions:5, //default-3
        skipLastCheckQuestion:true //default 'false'
        },
    delayOnAnswer: 500, // default 700
    sanitizerOptions : {
        allowedTags: ['h1','h2','h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
        'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
        'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre','img','iframe'],
        allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
            iframe:['src'],
            img: [ 'src' ]
            },
        allowedClasses: {
            'p': [ 'test']
            }
        },    
    delayOnAnswer: 700,
    userType: 0,
    environment:'production',
    showDateTime: true,
    launcher: {
        title:"Need Any Help?"
        },
    labels: {
        en: {
            'yes' : 'Yes',
            'no' : 'No',
            'generic-error-message' : 'The format of your answer is not valid',
            'enter-question' : 'Ask me!!',
            'interface-title' : 'Jarvis',
            'guest-name' : 'You',
            'help-question' : 'Do you need help?',
            'thanks' : 'Thanks!',
            'rate-content' : 'Was this answer helpful?',
            'form-message' : 'Please tell us why',
            'submit' : 'Submit',
            'alert-title' : 'OOOOPS...!',
            'alert-message' : 'Something went wrong, please click the button to reload.',
            'alert-button' : 'Try again',
            'agent-joined' : '{agentName} has joined the chat',
            'agent-left' : '{agentName} has left the chat',
            'wait-for-agent' : 'Waiting for an agent...',
            'no-agents' : 'No agent available',
            'close-chat' : 'Do you want to close this chat?<p>You will lose the entire conversation.</p>',
            'close-agent' : 'Do you want to leave the conversation with this agent?',
            'chat-closed' : 'Chat closed',
            'download' : 'Download',
            'escalate-chat' : 'Do you want to start a chat with a human agent?',
            'agent-typing': '{agentName} is typing',
            'agents-typing': '{agentName} and {agentName2}  are typing',
            'several-typing': 'Several people are typing'
            }
        },
    ratingOptions: [
        {
            id: 1,
            label: 'yes',
            comment: false,
            response: "Thank you!"
        },
        {
            id: 2,
            label: 'no',
            comment: true,
            response: "We are sorry about that."
        }
        ],
    showRatingWithinMessages: true,
    //skin: true,
    closeButton: {
        visible:true, //default-false
        },
    forms: {
            errorRetries: 3,
            allowUserToAbandonForm: true
        },
    inputCharacterCounter: true,
    avatar : {
        name : 'Chiru',
        //displayImage : 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/b/b7/Epic_Iron_Man.png/revision/latest/scale-to-width-down/574?cb=20150404070629', // If an url is inserted in displayImage attribute, the avatar videos will not be displayed, instead, the image will be displayed, a minimum size of 250x380 is recommended.
        displayImage : 'https://static-or01.inbenta.com/d8a2cc3acbe9cc2dc4f9d1563a180ff3b2366859f9f9be0759ae7c1be95a3e58/SDK-test/images/Epic_Iron_Man.png',
        shouldUse : true, // only set to true if you have avatar videos or image to show
        videos : {
        // video link played when avatar appears for the first time
        enter : [],
        // video link played when avatar is leaving
        exit  : [],
        // video link played when avatar is waiting a user action
        idle : [],
        // video link played when avatar say something
        speak : [],
        },
        // Image to be shown for incompatible browsers
        fallbackImage : 'https://static-or01.inbenta.com/d8a2cc3acbe9cc2dc4f9d1563a180ff3b2366859f9f9be0759ae7c1be95a3e58/SDK-test/images/Epic_Iron_Man.png'
        },
    adapters: [
        SDKlaunchNLEsclationForm(SDKHCAdapter.checkEscalationConditions,'ChatWithLiveAgentContactForm',rejectedEscalation, noAgentsAvailable, 3),
        SDKHCAdapter.build(),
        customMessageBasedOnLength(),
        //SDKcreateHtmlEscalationForm(checkAgents, questions, rejectedEscalation, noAgentsAvailable, true),
        ],
};
SDKHCAdapter.configure({
    appId: hyperchatAppId,
    region: hyperchatRegion,
    room: function () {
        return hyperchatRoomId;
        },
    importBotHistory:true,
    setCookieOnDomain:true,
    //source: function (){

    //},
    lang: function () {
        return SDKHCAdapter.helpers.getUserBrowserLanguage(); 
        },
    fileUploadsActive:true,
    extraInfo: function () { //would be helpful in getting additional information from the Page.
        return {
            url: SDKHCAdapter.helpers.getCurrentUrl(), property: SDKHCAdapter.helpers.getHTMLTagValueById('test'), geoLocation: SDKHCAdapter.helpers.getHTMLTagValueById('loc') //Can retrieve any infomtation. 
            } },
    port:8000,
    surveys:{
        //id: 2,
        //url: 'https://www.external-url.com/aSurvey'
    },
    transcript: {
        download: true
        },
    showCloseButton:true,
    });
InbentaAuth = InbentaChatbotSDK.buildWithDomainCredentials(authorization, config);
