const express = require('express');
const pool = require('../connectionPool.js');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {

    try {
      const [results] = await pool.query(
        'SELECT * FROM recipes'
      );
      res.send(results);
    } catch (err) {
      return next(err);
    }
  })
  .post(async (req, res, next) => {

    const { RecipeName, description, ingrediant1, ingrediant2 } = req.body;
    try {
      const [results] = await pool.execute(
        'INSERT INTO recipes( RecipeName, description, ingrediant1, ingrediant2) VALUES(?,?,?,?)', [RecipeName, description, ingrediant1, ingrediant2]
      );

      res.status(201)
        .location(`/recipe-api/${req.body.id}`)
        .send(req.body);
    } catch (err) {
      return next(err);
    }
  });

router.route('/:id')
  .get(async (req, res, next) => {

    try {
      const [results] = await pool.query(
        'SELECT * FROM recipes WHERE id = ?', [req.params.id]
      );

      if (!results.length) {
        return res.status(404)
          .send(`Unable to find recipe ${req.params.id}`);
      }

      res.send(results[0]);
    } catch (err) {
      return next(err);
    }
  })
  .put(async (req, res, next) => {

    const { RecipeName, description, ingrediant1, ingrediant2 } = req.body;

    try {
      const [results] = await pool.query(
        `UPDATE recipes
        SET RecipeName = ?, description = ?, ingrediant1 = ?, ingrediant2 = ?
        WHERE id = ?`, [RecipeName, description, ingrediant1, ingrediant2, req.params.id]
      );

      console.log(results);
      if (!results.affectedRows) {
        return res.status(404)
          .end(`Unable to find recipe ${req.params.id}`);
      }

      res.sendStatus(204);
    } catch (err) {
      return next(err);
    }
  })
  .delete(async (req, res, next) => {

    try {
      const [results] = await pool.query(
        'DELETE FROM recipes WHERE id = ?', [req.params.id]
      );

      console.log(results);
      if (!results.affectedRows) {
        return res.status(404)
          .end(`Unable to find recipes ${req.params.id}`);
      }

      res.sendStatus(204);

    } catch (err) {
      return next(err);
    }
  });

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.end(err.message || 'Internal server error...');
});

module.exports = router;