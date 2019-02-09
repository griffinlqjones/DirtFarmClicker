'use strict'

var express = require('express');

let cors = require('cors');

var dirtFarmRoutes = express.Router();

var Player = require('./Player');

// get all players
dirtFarmRoutes.route('/').get(function (req, res, next) {
  Player.find(function (err, players) {
    if (err) {
      return next(new Error(err));
    }
    res.json(players); // return all players
  });
});

// get all players
dirtFarmRoutes.route('/all').get(function (req, res, next) {
  Player.find(function (err, players) {
    if (err) {
      return next(new Error(err));
    }
    res.json(players); // return all players
  });
});

// create a player
dirtFarmRoutes.route('/add').post(function (req, res) {
  Player.create(
    {
      id: req.body.id,
      money: req.body.money,
      goodDirt: req.body.goodDirt,
      upgrades: req.body.upgrades
    },
    function (error, player) {
      if (error) {
        res.status(400).send('Unable to create player');
      }
      res.status(200).json(player);
    }
  );
});

// delete a player item

dirtFarmRoutes.route('/delete/:id').get(function (req, res, next) {
  var id = req.params.id;
  Player.findByIdAndRemove(id, function (err, player) {
    if (err) {
      return next(new Error('Player was not found'));
    }
    res.json('Successfully removed');
  });
});

// perform update on player item
dirtFarmRoutes.route('/update/:id').post(function (req, res, next) {
  var id = req.params.id;
  Player.findById(id, function (error, player) {
    if (error) {
      return next(new Error('Player was not found'));
    } else {
      player.id = req.body.id;
      player.money = req.body.money;
      player.goodDirt = req.body.goodDirt;
      player.upgrades = req.body.upgrades;

      player.save({
        function (error, player) {
          if (error) {
            res.status(400).send('Unable to update player data');
          } else {
            res.status(200).json(player);
          }
        }
      });
    }
  });
});

module.exports = dirtFarmRoutes;
