export const chats = {
  data: {
    conversations: [
      {
        id: 62,
        queryTypeId: 2,
        queryStatusId: 1,
        userId: 112,
        user: {
          firstName: "Samyak",
          lastName: "C",
          profilePic:
            "https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"
        },
        chats: [],
        updatedAt: "2020-11-12T07:07:18.523099+00:00"
      },
      {
        id: 61,
        queryTypeId: 4,
        queryStatusId: 1,
        userId: 112,
        user: {
          firstName: "Samyak",
          lastName: "C",
          profilePic:
            "https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"
        },
        chats: [
          {
            chatTypeId: 1,
            message: "Hello",
            createdAt: "2020-11-12T06:31:54.8459+00:00"
          }
        ],
        updatedAt: "2020-11-12T06:31:54.8459+00:00"
      },
      {
        id: 60,
        queryTypeId: 1,
        queryStatusId: 1,
        userId: 112,
        user: {
          firstName: "Samyak",
          lastName: "C",
          profilePic:
            "https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"
        },
        chats: [
          {
            chatTypeId: 1,
            message: "I'll explain",
            createdAt: "2020-11-12T06:32:27.783936+00:00"
          }
        ],
        updatedAt: "2020-11-12T06:30:42.573062+00:00"
      },
      {
        id: 59,
        queryTypeId: 2,
        queryStatusId: 1,
        userId: 112,
        user: {
          firstName: "Samyak",
          lastName: "C",
          profilePic:
            "https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"
        },
        chats: [],
        updatedAt: "2020-11-12T06:29:57.475008+00:00"
      },
      {
        id: 58,
        queryTypeId: 2,
        queryStatusId: 1,
        userId: 114,
        user: {
          firstName: "Hemant",
          lastName: "S",
          profilePic:
            "https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"
        },
        chats: [
          {
            chatTypeId: 1,
            message: "Oh yes, please tell me",
            createdAt: "2020-11-12T06:28:44.633933+00:00"
          }
        ],
        updatedAt: "2020-11-12T06:28:44.685281+00:00"
      }
    ]
  }
};

export const chatMessages = {
  data: {
    chats: [
      {
        chatTypeId: 1,
        message: "I have a question",
        userType: "user",
        createdAt: "2020-11-12T06:28:05.397151+00:00",
        conversationId: 58
      },
      {
        chatTypeId: 1,
        message: "Oh yes, please tell me",
        userType: "admin",
        createdAt: "2020-11-12T06:28:44.633933+00:00",
        conversationId: 58
      },
      {
        chatTypeId: 1,
        message: "Help me",
        userType: "user",
        createdAt: "2020-11-12T06:30:16.446574+00:00",
        conversationId: 60
      },
      {
        chatTypeId: 1,
        message: "How but, I don't know?",
        userType: "admin",
        createdAt: "2020-11-12T06:30:42.539175+00:00",
        conversationId: 60
      },
      {
        chatTypeId: 1,
        message: "Hello",
        userType: "user",
        createdAt: "2020-11-12T06:31:54.8459+00:00",
        conversationId: 61
      },
      {
        chatTypeId: 1,
        message: "I'll explain",
        userType: "user",
        createdAt: "2020-11-12T06:32:27.783936+00:00",
        conversationId: 60
      }
    ]
  }
};
