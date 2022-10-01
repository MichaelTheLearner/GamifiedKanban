const Card = require("../models/Card");
const Column = require('../models/Column');
const Todo = require("../models/Todo");

// router.put("/createTodo/:id", kanbanController.createTodo);

// router.put("/toggleTodo/:id", kanbanController.toggleTodo);

// router.delete("/deleteTodo/:id", kanbanController.deleteTodo);


module.exports = {
  getProfile: async (req, res) => {
    try {
      // const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getBoard: async (req, res) => {
    try {
      let columns = await Column.find({ user: req.user.id })
      for (const column of columns) {
        const cards = await Card.find({ columnID: column._id }).populate('cards').sort({ createdDate: "desc" }).lean();
        column._doc.cards = cards

        for (const card of cards) {
          const todos = await Todo.find({ cardID: card._id }).populate('todos').sort({ createdDate: "desc" }).lean();
          column.cards.todos = todos;
        }
      }


      console.log("get board")
      console.log(columns)
      res.render("kanban.ejs", { columns: columns });
    } catch (err) {
      console.log(err);
    }
  },
  createColumn: async (req, res) => {
    try {
      await Column.create({
        title: req.body.title,
        user: req.user.id,
      })
      console.log("Column has been added!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err);
    }
  },
  deleteColumn: async (req, res) => {
    try {
      //delete column
      await Column.findOneAndDelete({ _id: req.params.id })

      console.log("Column has been removed!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err)
    }
  },
  createCard: async (req, res) => {
    try {
      await Card.create({
        title: req.body.title,
        type: req.body.type,
        dueDate: req.body.dueDate,
        description: req.body.description,
        difficulty: req.body.difficulty,
        notes: req.body.notes,
        columnID: req.body.columnID
      })

      console.log("Card has been added!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err);
    }
  },
  // createCard: async (req, res) => {
  //   try {
  //     await Column.findOneAndUpdate(
  //       { _id: req.body.columnID,  },
  //       {
  //         $push:
  //         {
  //           cards:
  //           {
  //             title: req.body.title,
  //             priority: req.body.priority,
  //             todos: [],
  //             dueDate: req.body.dueDate,
  //             difficulty: req.body.difficulty,
  //             notes: req.body.notes,
  //             columnID: req.body.columnID
  //           }
  //         }
  //       }
  //     )

  //     console.log("Card has been added!");
  //     res.redirect("/kanban");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  deleteCard: async (req, res) => {
    try {
      //delete card
      await Card.findOneAndDelete({ _id: req.params.id })

      console.log("Card has been removed!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err)
    }
  },
  createTodo: async (req, res) => {
    try {
      await Todo.create({
        title: req.body.title,
      })

      console.log("Todo has been added!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err);
    }
  },
  toggleTodo: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.params.id },
        [
          { $set: { active: { $not: "$active" } } }
        ]
      )

      console.log("Todo has been toggled!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.remove({ _id: req.params.id })

      console.log("Todo has been removed!");
      res.redirect("/kanban");
    } catch (err) {
      console.log(err)
    }
  },
  moveCard: async (req, res) => {
    try {
      const cardID = req.body.cardID;
      const newColumnID = req.body.columnID;

      await Card.findOneAndUpdate(
        { _id: req.body.cardID },
        {
          $set: { "columnID": req.body.columnID },
        }
      );

      console.log(`card (${cardID}) has been moved to column (${newColumnID})`)
      res.redirect('/kanban');
    } catch (err) {
      console.log(err);
    }
  }


};