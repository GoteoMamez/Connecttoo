curl -X POST http://localhost:9090/posts/host -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmNlZjM1OWE0NzkzOTM2ZjM3NGViNDkiLCJpYXQiOjE3MjUyOTIxODQsImV4cCI6MTcyNTMwNjU4NH0.sB89fH1fVSNmYO3tVolK8gSnumrHfoAbNuk3IB90Yxo" -H "Content-Type: application/json" -d '{"image":"https://upload.wikimedia.org/wikipedia/commons/1/1d/Blah_Blah_Blah.jpg","fromLocation":"blah blah", "toLocation":"Sevilla", "date":"16 de agosto", "description":"klklklklk"}' -v