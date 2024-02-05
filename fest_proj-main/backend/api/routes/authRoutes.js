const express = require("express");
const auth_Football = require('../controllers/auth_Football');
const auth_Vollyball = require("../controllers/auth_Vollyball");
const auth_Cricket =require('../controllers/auth_Cricket');
const auth_Basketball =require('../controllers/auth_Basketball');
const auth_Badminton=require("../controllers/auth_Badminton")
const auth_Kabbadi=require('../controllers/auth_Kabbadi');
const auth_Carroms=require('../controllers/auth_Carrom');
const auth_Chess=require('../controllers/auth_Chess');
const auth_tt =require('../controllers/auth_Tabletennis');

const authStatistics=require('../controllers/authStatistics')
const router = express.Router();

router.post("/admin_login", auth_Football.adminLogin);

// Define routes
router.post("/addMatch", auth_Football.addMatch);
router.get("/getMatches", auth_Football.getMatches);
router.put("/updateMatch/:id", auth_Football.updateMatch);
router.delete("/deleteMatch/:id", auth_Football.deleteMatch);

router.post("/addScores/:id", auth_Football.addScoredetails);
router.get("/getScores/:id", auth_Football.getScoredetails); // New route to get scores
router.put("/updateScoredetails/:scoreId", auth_Football.updateScoredetails);
router.delete("/deleteScoredetails/:scoreId", auth_Football.deleteScoredetails);

router.post("/addPlayers/:matchId", auth_Football.addPlayers);
router.get("/getPlayers/:matchId", auth_Football.getPlayers);
router.put(
  "/updatePlayerDetails/:playerId",
  auth_Football.updatePlayerDetails
);
router.delete(
  "/deletePlayerDetails/:playerId",
  auth_Football.deletePlayerDetails
);



// Define routes
router.post("/addMatch_volly", auth_Vollyball.addMatch);
router.get("/getMatches_volly", auth_Vollyball.getMatches);
router.put("/updateMatch_volly/:id", auth_Vollyball.updateMatch);
router.delete("/deleteMatch_volly/:id", auth_Vollyball.deleteMatch);

router.post("/addScores_volly/:id", auth_Vollyball.addScoredetails);
router.get("/getScores_volly/:id", auth_Vollyball.getScoredetails); // New route to get scores
router.put("/updateScoredetails_volly/:scoreId", auth_Vollyball.updateScoredetails);
router.delete("/deleteScoredetails_volly/:scoreId", auth_Vollyball.deleteScoredetails);

router.post("/addPlayers_volly/:matchId", auth_Vollyball.addPlayers);
router.get("/getPlayers_volly/:matchId", auth_Vollyball.getPlayers);
router.put(
  "/updatePlayerDetails_volly/:playerId",
  auth_Vollyball.updatePlayerDetails
);
router.delete(
  "/deletePlayerDetails_volly/:playerId",
  auth_Vollyball.deletePlayerDetails
);



// Define routes
router.post("/addMatch_crick", auth_Cricket.addMatch);
router.get("/getMatches_crick", auth_Cricket.getMatches);
router.put("/updateMatch_crick/:id", auth_Cricket.updateMatch);
router.delete("/deleteMatch_crick/:id", auth_Cricket.deleteMatch);

router.post("/addScores_crick/:id", auth_Cricket.addScoredetails);
router.get("/getScores_crick/:id", auth_Cricket.getScoredetails); // New route to get scores
router.put("/updateScoredetails_crick/:scoreId", auth_Cricket.updateScoredetails);
router.delete("/deleteScoredetails_crick/:scoreId", auth_Cricket.deleteScoredetails);

router.post("/addPlayers_crick/:matchId", auth_Cricket.addPlayers);
router.get("/getPlayers_crick/:matchId", auth_Cricket.getPlayers);
router.put("/updatePlayerDetails_crick/:playerId", auth_Cricket.updatePlayerDetails);
router.delete("/deletePlayerDetails_crick/:playerId", auth_Cricket.deletePlayerDetails);



// Define routes
router.post("/addMatch_bask", auth_Basketball.addMatch);
router.get("/getMatches_bask", auth_Basketball.getMatches);
router.put("/updateMatch_bask/:id", auth_Basketball.updateMatch);
router.delete("/deleteMatch_bask/:id", auth_Basketball.deleteMatch);

router.post("/addScores_bask/:id", auth_Basketball.addScoredetails);
router.get("/getScores_bask/:id", auth_Basketball.getScoredetails); // New route to get scores
router.put("/updateScoredetails_bask/:scoreId", auth_Basketball.updateScoredetails);
router.delete("/deleteScoredetails_bask/:scoreId", auth_Basketball.deleteScoredetails);

router.post("/addPlayers_bask/:matchId", auth_Basketball.addPlayers);
router.get("/getPlayers_bask/:matchId", auth_Basketball.getPlayers);
router.put("/updatePlayerDetails_bask/:playerId", auth_Basketball.updatePlayerDetails);
router.delete("/deletePlayerDetails_bask/:playerId", auth_Basketball.deletePlayerDetails);



// Define routes
router.post("/addMatch_bad", auth_Badminton.addMatch);
router.get("/getMatches_bad", auth_Badminton.getMatches);
router.put("/updateMatch_bad/:id", auth_Badminton.updateMatch);
router.delete("/deleteMatch_bad/:id", auth_Badminton.deleteMatch);

router.post("/addScores_bad/:id", auth_Badminton.addScoredetails);
router.get("/getScores_bad/:id", auth_Badminton.getScoredetails); // New route to get scores
router.put("/updateScoredetails_bad/:scoreId", auth_Badminton.updateScoredetails);
router.delete("/deleteScoredetails_bad/:scoreId", auth_Badminton.deleteScoredetails);

router.post("/addPlayers_bad/:matchId", auth_Badminton.addPlayers);
router.get("/getPlayers_bad/:matchId", auth_Badminton.getPlayers);
router.put("/updatePlayerDetails_bad/:playerId", auth_Badminton.updatePlayerDetails);
router.delete("/deletePlayerDetails_bad/:playerId", auth_Badminton.deletePlayerDetails);

// Define routes
router.post("/addMatch_kab", auth_Kabbadi.addMatch);
router.get("/getMatches_kab", auth_Kabbadi.getMatches);
router.put("/updateMatch_kab/:id", auth_Kabbadi.updateMatch);
router.delete("/deleteMatch_kab/:id", auth_Kabbadi.deleteMatch);

router.post("/addScores_kab/:id", auth_Kabbadi.addScoredetails);
router.get("/getScores_kab/:id", auth_Kabbadi.getScoredetails); // New route to get scores
router.put("/updateScoredetails_kab/:scoreId", auth_Kabbadi.updateScoredetails);
router.delete("/deleteScoredetails_kab/:scoreId", auth_Kabbadi.deleteScoredetails);

router.post("/addPlayers_kab/:matchId", auth_Kabbadi.addPlayers);
router.get("/getPlayers_kab/:matchId", auth_Kabbadi.getPlayers);
router.put("/updatePlayerDetails_kab/:playerId", auth_Kabbadi.updatePlayerDetails);
router.delete("/deletePlayerDetails_kab/:playerId", auth_Kabbadi.deletePlayerDetails);


// Define routes
router.post("/addMatch_car", auth_Carroms.addMatch);
router.get("/getMatches_car", auth_Carroms.getMatches);
router.put("/updateMatch_car/:id", auth_Carroms.updateMatch);
router.delete("/deleteMatch_car/:id", auth_Carroms.deleteMatch);

router.post("/addScores_car/:id", auth_Carroms.addScoredetails);
router.get("/getScores_car/:id", auth_Carroms.getScoredetails); // New route to get scores
router.put("/updateScoredetails_car/:scoreId", auth_Carroms.updateScoredetails);
router.delete("/deleteScoredetails_car/:scoreId", auth_Carroms.deleteScoredetails);

router.post("/addPlayers_car/:matchId", auth_Carroms.addPlayers);
router.get("/getPlayers_car/:matchId", auth_Carroms.getPlayers);
router.put("/updatePlayerDetails_car/:playerId", auth_Carroms.updatePlayerDetails);
router.delete("/deletePlayerDetails_car/:playerId", auth_Carroms.deletePlayerDetails);

// Define routes
router.post("/addMatch_chess", auth_Chess.addMatch);
router.get("/getMatches_chess", auth_Chess.getMatches);
router.put("/updateMatch_chess/:id", auth_Chess.updateMatch);
router.delete("/deleteMatch_chess/:id", auth_Chess.deleteMatch);

router.post("/addScores_chess/:id", auth_Chess.addScoredetails);
router.get("/getScores_chess/:id", auth_Chess.getScoredetails); // New route to get scores
router.put("/updateScoredetails_chess/:scoreId", auth_Chess.updateScoredetails);
router.delete("/deleteScoredetails_chess/:scoreId", auth_Chess.deleteScoredetails);

router.post("/addPlayers_chess/:matchId", auth_Chess.addPlayers);
router.get("/getPlayers_chess/:matchId", auth_Chess.getPlayers);
router.put("/updatePlayerDetails_chess/:playerId", auth_Chess.updatePlayerDetails);
router.delete("/deletePlayerDetails_chess/:playerId", auth_Chess.deletePlayerDetails);


// Define routes
router.post("/addMatch_tt", auth_tt.addMatch);
router.get("/getMatches_tt", auth_tt.getMatches);
router.put("/updateMatch_tt/:id", auth_tt.updateMatch);
router.delete("/deleteMatch_tt/:id", auth_tt.deleteMatch);

router.post("/addScores_tt/:id", auth_tt.addScoredetails);
router.get("/getScores_tt/:id", auth_tt.getScoredetails); // New route to get scores
router.put("/updateScoredetails_tt/:scoreId", auth_tt.updateScoredetails);
router.delete("/deleteScoredetails_tt/:scoreId", auth_tt.deleteScoredetails);

router.post("/addPlayers_tt/:matchId", auth_tt.addPlayers);
router.get("/getPlayers_tt/:matchId", auth_tt.getPlayers);
router.put("/updatePlayerDetails_tt/:playerId", auth_tt.updatePlayerDetails);
router.delete("/deletePlayerDetails_tt/:playerId", auth_tt.deletePlayerDetails);


// ----------------------------

router.get("/getAllStatistics", authStatistics.getAllStatistics);
router.post("/addStatistic", authStatistics.addStatistic);
router.put("/updateStatistic/:id", authStatistics.updateStatistic);
router.delete("/deleteStatistic/:id", authStatistics.deleteStatistic);




module.exports = router;

