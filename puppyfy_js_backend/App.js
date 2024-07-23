const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetchStories = require('./homePage/stories_db');
const fetchFeedDetails = require('./homePage/feeds_home_db');
const insertUser =require('./Login_Signup/signup');
const fetchProducts=require("./EssentialsPage/products_db")
const fetchConsults = require ("./ConsultPage/Consult_db")
const loginUser = require ("./Login_Signup/Login")
const fetchFeedbackDetails = require("./homePage/petfeedbacks_db")
const likeFeedback = require("./homePage/petfeedbacks_likes");
const insertFeedback=require("./homePage/feedback_insert")
const addStory = require ("./homePage/stories_upload")
const addPost = require ("./homePage/posts_upload")
const fetchHelp = require ("./PuppyFyMap/help_db")
const insertHelp = require("./PuppyFyMap/help_post")
const GenerateSasTokenStories = require("./homePage/GenerateSasTokenStory")
const GenerateSasTokenPosts = require("./homePage/GeneretaeSasTokenPost")
const GenerateSasTokenHelp= require("./PuppyFyMap/GenerateSasTokenHelp")
const  insertFeed = require ("./homePage/feedsLike")
const deleteFeed = require ("./homePage/deletePost")
const fetchSuggestions = require ("./ExploreUsersPage/Suggestions")
const addFriend =require ("./ExploreUsersPage/AddingFriend")
const sendTempPassword = require ("./Login_Signup/sendTemporaryPassword")
const updatePassword = require ("./Login_Signup/PasswordReset")
const fetchComments = require ("./homePage/Comments")
const addPostComment = require ("./homePage/AddComments")
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route to fetch stories
app.get('/stories_db', fetchStories);

// Route to fetch feed details
app.get('/feeds_home_db', fetchFeedDetails);

// Route to fetch item details for Essential Page
app.get('/products_db', fetchProducts);

// Route to fetch item details for Essential Page
app.get('/feedbacks_db', fetchFeedbackDetails);

// Route to fetch item details for Essential Page
app.get('/suggestions', fetchSuggestions);

app.get('/help_db', fetchHelp);



// Route to fetch vet details for Consult Page
app.get('/consult_db', fetchConsults);

app.post('/login', loginUser);
app.post('/story_upload', addStory);
app.post('/posts_upload', addPost);
app.post('/feeds_like', insertFeed);

app.post('/addFriend', addFriend);
// Route to like a feedback
app.post('/feedbacks_db/like', likeFeedback); 

// Route to insert feedback
app.post('/feedbacks_db/feedback', insertFeedback);

app.post('/help_db/help', insertHelp);
app.get('/generateSasTokenStory', GenerateSasTokenStories);
app.get('/generateSasTokenPosts', GenerateSasTokenPosts);
app.get('/generateSasTokenHelp', GenerateSasTokenHelp);

// Add routes for sending temporary password and updating password
app.post('/sendTempPassword', sendTempPassword);
app.post('/updatePassword', updatePassword);

app.get('/comments/:postId', fetchComments);

// Route to delete a feed
app.delete('/feeds/:post_id', deleteFeed);
app.post('/commentsAdd', addPostComment);



//Routr to insert userdetails while signing up
app.post('/Signup', insertUser);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

