### API Routes

**`/api/users`**

- [x] 18.1 `GET` all users //**SECTION DONE**

- [x] 18.2 `GET` a single user by its `_id` and populated thought and friend data //**SECTION DONE**

- [x] 18.3 `POST` a new user: //**SECTION DONE**

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

- [x] 18.4 `PUT` to update a user by its `_id` //**SECTION DONE**

- [x] 18.5 `DELETE` to remove user by its `_id` //**SECTION DONE**

- [x] 18.6 **BONUS**: Remove a user's associated thoughts when deleted. //**SECTION DONE**

---

**`/api/users/:userId/friends/:friendId`**

- [x] 18.7 `POST` to add a new friend to a user's friend list //**SECTION DONE**

- [x] 18.8 `DELETE` to remove a friend from a user's friend list //**SECTION DONE**

---

**`/api/thoughts`**

- [x] 18.9 `GET` to get all thoughts //**SECTION DONE**

- [x] 18.10 `GET` to get a single thought by its `_id` //**SECTION DONE**

- [x] 18.11 `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)  //**SECTION parially done; check if thought exists, shouldn't exist since it's new**

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

- [x] 18.12 `PUT` to update a thought by its `_id` //**SECTION DONE **

- [x] 18.13 `DELETE` to remove a thought by its `_id` //**SECTION DONE **INCLUDING PULLING THOUGHT FROM USER DOCUMENT**

---

**`/api/thoughts/:thoughtId/reactions`**

- [x] 18.14 `POST` to create a reaction stored in a single thought's `reactions` array field //**SECTION DONE **

- [x] 18.15 `DELETE` to pull and remove a reaction by the reaction's `reactionId` value //**TODO **