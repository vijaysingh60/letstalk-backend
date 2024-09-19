// server.js (Node.js Backend)
const express = require('express');
const path = require('path')

const { NlpManager } = require('node-nlp');
const cors = require('cors');


const app = express();
const http = require("http")

const manager = new NlpManager({ languages: ['en'] });

// Middleware
app.use(express.json());
app.use(cors())


const {Server} = require("socket.io")
const server = http.createServer(app);

app.use(express.static("public"))

app.use(cors({
    origin: '*', // Allow all origins (specify your frontend URL in production)
    methods: ['GET', 'POST'],
    credentials: true
}));

// ------------ Deployment -----------------

const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1,"/chat/build")))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname1,'chat',"build","index.html"))
})


// ------------- Deployment ----------------


const io = new Server(server,{
    cors: {
        origin: ['http://localhost:3001', 'http://192.168.185.22:3001'], // Your React frontend URL
        methods: ['GET', 'POST'],
        credentials: true
    }
});

io.on("connection",(socket)=>{
    console.log("user Connected");
    socket.on("msgSend",(msg)=>{
        io.emit("msgReceive",msg,socket.id);
    })
})

// Train NLP Model (this can be done asynchronously as needed)
const trainNlp = async () => {
    
    manager.addDocument('en', 'seeking therapy', 'seeking.therapy');
manager.addDocument('en', 'learning about mental health', 'learning.about.mental.health');
manager.addDocument('en', 'looking for resources', 'looking.for.resources');
manager.addDocument('en', 'connecting with support groups', 'connecting.with.support.groups');

manager.addDocument('en', 'seeking therapy support', 'seeking.therapy.support');
manager.addDocument('en', 'live chat messaging', 'live.chat.messaging');
manager.addDocument('en', 'video sessions', 'video.sessions');
manager.addDocument('en', 'phone calls', 'phone.calls');
manager.addDocument('en', 'in person sessions', 'in.person.sessions');
manager.addDocument('en', 'self guided resources', 'self.guided.resources');

manager.addDocument('en', 'interested in anxiety', 'interested.in.anxiety');
manager.addDocument('en', 'interested in depression', 'interested.in.depression');
manager.addDocument('en', 'interested in stress management', 'interested.in.stress.management');
manager.addDocument('en', 'interested in relationships', 'interested.in.relationships');
manager.addDocument('en', 'interested in self esteem', 'interested.in.self.esteem');
manager.addDocument('en', 'interested in grief trauma', 'interested.in.grief.trauma');

manager.addDocument('en', 'used services yes', 'used.services.yes');
manager.addDocument('en', 'used services no', 'used.services.no');

manager.addDocument('en', 'looking for psychologist', 'looking.for.psychologist');
manager.addDocument('en', 'looking for counselor', 'looking.for.counselor');
manager.addDocument('en', 'looking for therapist', 'looking.for.therapist');
manager.addDocument('en', 'looking for psychiatrist', 'looking.for.psychiatrist');
manager.addDocument('en', 'looking for peer support', 'looking.for.peer.support');
manager.addDocument('en', 'looking for no preference', 'looking.for.no.preference');

manager.addDocument('en', 'important factor specialization', 'important.factor.specialization');
manager.addDocument('en', 'important factor gender', 'important.factor.gender');
manager.addDocument('en', 'important factor cultural background', 'important.factor.cultural.background');
manager.addDocument('en', 'important factor experience', 'important.factor.experience');
manager.addDocument('en', 'important factor communication style', 'important.factor.communication.style');
manager.addDocument('en', 'important factor availability', 'important.factor.availability');

manager.addDocument('en', 'interested in forum', 'interested.in.forum');
manager.addDocument('en', 'maybe later forum', 'maybe.later.forum');
manager.addDocument('en', 'not interested forum', 'not.interested.forum');

manager.addDocument('en', 'personalized content yes', 'personalized.content.yes');
manager.addDocument('en', 'personalized content no', 'personalized.content.no');

manager.addDocument('en', 'engagement daily', 'engagement.daily');
manager.addDocument('en', 'engagement weekly', 'engagement.weekly');
manager.addDocument('en', 'engagement occasionally', 'engagement.occasionally');
manager.addDocument('en', 'engagement when needed', 'engagement.when.needed');

manager.addDocument('en', 'barrier cost', 'barrier.cost');
manager.addDocument('en', 'barrier time', 'barrier.time');
manager.addDocument('en', 'barrier stigma', 'barrier.stigma');
manager.addDocument('en', 'barrier privacy', 'barrier.privacy');
manager.addDocument('en', 'barrier finding provider', 'barrier.finding.provider');



manager.addAnswer('en', 'seeking.therapy', 'Great! Let\'s help you find a therapist who suits your needs.');
manager.addAnswer('en', 'learning.about.mental.health', 'We have a wealth of information. Let’s explore some mental health topics.');
manager.addAnswer('en', 'looking.for.resources', 'We can direct you to helpful resources that can guide your mental health journey.');
manager.addAnswer('en', 'connecting.with.support.groups', 'Let’s find a community or support group where you can connect with others.');

manager.addAnswer('en', 'seeking.therapy.support', 'We can help you connect with a therapist for personalized support.');
manager.addAnswer('en', 'live.chat.messaging', 'Live chat and messaging options are available for instant support.');
manager.addAnswer('en', 'video.sessions', 'We can arrange for video sessions with licensed professionals.');
manager.addAnswer('en', 'phone.calls', 'We’ll connect you with someone who can offer support over the phone.');
manager.addAnswer('en', 'in.person.sessions', 'We’ll find in-person services near your location.');
manager.addAnswer('en', 'self.guided.resources', 'We have self-guided tools that you can explore at your own pace.');

manager.addAnswer('en', 'interested.in.anxiety', 'We have resources and professionals to help you manage anxiety.');
manager.addAnswer('en', 'interested.in.depression', 'You can access support and tools for coping with depression.');
manager.addAnswer('en', 'interested.in.stress.management', 'We offer stress management strategies and professional advice.');
manager.addAnswer('en', 'interested.in.relationships', 'Our resources and experts can help improve relationship skills.');
manager.addAnswer('en', 'interested.in.self.esteem', 'Let’s work on boosting your self-esteem with tailored content and support.');
manager.addAnswer('en', 'interested.in.grief.trauma', 'We can provide resources and connect you with professionals experienced in grief and trauma.');

manager.addAnswer('en', 'used.services.yes', 'That’s great. We’ll use your past experiences to tailor better recommendations.');
manager.addAnswer('en', 'used.services.no', 'No problem! We’ll guide you through finding the right support for your needs.');

manager.addAnswer('en', 'looking.for.psychologist', 'We’ll find a psychologist who can provide the therapy you\'re seeking.');
manager.addAnswer('en', 'looking.for.counselor', 'A counselor will be a great fit to offer support and guidance.');
manager.addAnswer('en', 'looking.for.therapist', 'We’ll connect you with a therapist suited to your situation.');
manager.addAnswer('en', 'looking.for.psychiatrist', 'A psychiatrist will help with any medication needs and overall mental health care.');
manager.addAnswer('en', 'looking.for.peer.support', 'We can connect you with peers who’ve been through similar experiences.');
manager.addAnswer('en', 'looking.for.no.preference', 'That’s okay! We’ll match you with a professional who fits your needs.');

manager.addAnswer('en', 'important.factor.specialization', 'We’ll find someone who specializes in the areas most important to you.');
manager.addAnswer('en', 'important.factor.gender', 'We can help you find a therapist of your preferred gender.');
manager.addAnswer('en', 'important.factor.cultural.background', 'We’ll connect you with someone who understands your cultural context.');
manager.addAnswer('en', 'important.factor.experience', 'We’ll prioritize finding a therapist with the experience you\'re looking for.');
manager.addAnswer('en', 'important.factor.communication.style', 'We’ll match you with someone who communicates in the style that resonates with you.');
manager.addAnswer('en', 'important.factor.availability', 'We’ll make sure to connect you with a professional who is available based on your schedule.');

manager.addAnswer('en', 'interested.in.forum', 'That’s great! We’ll help you join a community or support group.');
manager.addAnswer('en', 'maybe.later.forum', 'No problem, you can explore this option anytime you\'re ready.');
manager.addAnswer('en', 'not.interested.forum', 'That’s okay. We’ll focus on finding individual support for you.');

manager.addAnswer('en', 'personalized.content.yes', 'We’ll ask a few more questions to tailor content specifically for you.');
manager.addAnswer('en', 'personalized.content.no', 'Got it! We’ll provide general content and recommendations.');

manager.addAnswer('en', 'engagement.daily', 'We’ll provide regular resources to keep you engaged and supported daily.');
manager.addAnswer('en', 'engagement.weekly', 'We’ll check in with you weekly and share relevant resources.');
manager.addAnswer('en', 'engagement.occasionally', 'We’ll send occasional updates and resources whenever you need them.');
manager.addAnswer('en', 'engagement.when.needed', 'We’ll only reach out or provide resources when you request them.');

manager.addAnswer('en', 'barrier.cost', 'We can find affordable options or financial assistance for your care.');
manager.addAnswer('en', 'barrier.time', 'We’ll work with your schedule to find convenient options for support.');
manager.addAnswer('en', 'barrier.stigma', 'We provide a safe, confidential space free from judgment.');
manager.addAnswer('en', 'barrier.privacy', 'We’ll make sure your care is confidential and respectful of your privacy.');
manager.addAnswer('en', 'barrier.finding.provider', 'We’ll help you navigate finding the right professional who suits your needs.');



  // Add more intents and examples here

    await manager.train();
    manager.save();
};

trainNlp();

// API to handle chatbot responses
app.post('/api/submit-responses', async (req, res) => {
  const {answer}  = req.body;
  
  // Simple NLP response processing (optional)
  const result = await manager.process('en',answer); // Example processing the first answer
    // console.log("nlp data:", result)
  res.status(200).json({ message: 'Responses received successfully', nlpResult: result });
});



server.listen(3000,"0.0.0.0");
