# README

Dissonance is a Discord clone built using several technologies.
1. react-redux for rendering pages based on a local store.
2. PostgreSQL as the database system.
3. Jquery and Ruby on rails to manipulate or access the database.
4. and... with a responsive design in mind ;]

In its core, Dissonance supports live messaging through different servers and text channels. There is a demo login where users can explore the various features.

# Main Features

1. Live Messaging/Direct Messaging

![live-message](./screenshots/direct-message-demo.gif)
![live-chat-demo](./screenshots/live-chat-demo.gif)

Live messaging is implemented using Ruby on Rails ActionCable. Users are subscribed whenever they are presented a message input field.

```javascript

  createSocket() {
    let cable = ActionCable.createConsumer();
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (message) => {
        this.props.receiveMessage(message);
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent
        });
      }
    });
  }

  ```

2. Servers/channels

![server-demo](./screenshots/server-demo.gif)

Users can create servers and join existing servers. Users are subscribed to servers they are in, and are listening to a server deletion via actioncable. If a server is destroyed users on the server are redirected properly. All users belonging to a server can create channels and edit channel names

3. Friends

![friend_demo](./screenshots/friend_demo.gif)

Users add friends which allow for easier direct messaging, users can also remove friends.


The Dissonance app's responsiveness mirrors that of Discord.

-By Sunny Wong
