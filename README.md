# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`


# Old Code

<% for(var j=0; j < columns.cards.length; j++) {%>
                        <div class="card" data-cardid="<%= columns[i].card[j]._id %>">
                            <div class="card-body">
                                <h5 class="card-title"><%= columns[i].card[j].title %></h5>
                                <h6 class="card-subtitle mb-2 text-muted">Type: <%= columns[i].card[j].type %></h6>
                                <p class="card-text">Description: <%= columns[i].cards[j].description %></p>
                                <h6 class="card-subtitle mb-2 text-muted">Todos</h6>
                                <ul class="row list-unstyled">
                                <% for(var k=0; k < columns.cards.todos.length; k++) {%>
                                    <li class="todo btn btn-light <% columns[i].cards[j].todos[k].active ? "" : "text-muted" %>  mt-2" data-todoid="<%= columns[i].cards[j].todos[k]._id %>">
                                        <%= columns[i].cards[j].todos[k].title %>
                                    </li>
                                <% } %>
                                </ul>
                              </div>
                        </div>                        
                    <% } %>



                    <h6 class="card-subtitle mb-2 text-muted">Todos</h6>
                                <ul class="row list-unstyled">
                                <% for(var k=0; k < columns[i].cards[j].todos.length; k++) {%>
                                    <li class="todo btn btn-light <% columns[i].cards[j].todos[k].active ? "" : "text-muted" %>  mt-2" data-todoid="<%= columns[i].cards[j].todos[k]._id %>">
                                        <%= columns[i].cards[j].todos[k].title %>
                                    </li>
                                <% } %>
                                </ul>