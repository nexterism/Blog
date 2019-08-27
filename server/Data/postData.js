 const postData = [
  {
    id: 1,
    catagory: "Technology",
    author: {
      username: "Adil",
      img: "",
      userId: 2
    },
    post: {
      img: "/img/spacex.jpg",
      title: "Pakistan’s space programme",
      desc:
        "Highlights from the hearing, 'Keeping our Sights on Mars: A Review of NASA's Deep Space Plans' held on May 8th in the House of Representatives.",
      
      likes: 13,
      comments: [
        {
          author: {
            username: "Ali",
            img: "",
            userId: 2
          },

          comment: "this post is awsome"
        },
        {
          author: {
            username: "Aleem",
            img: "",
            userId: 3
          },
          comment: "this post is Good"
        }
      ]
    },
    createdAt: "Aug 7, 2019",
    updatedAt: "12 june 2020",
    tags: ["js", "html", "css", "css3"],
    postDetails:{
      img:"/img/123.jpg",
      para1:"A surprise as it may be, one of the satellites launched the PakTES-1A, which was indigenously designed and developed by Pakistani engineers. Primarily aimed at remote sensing, the satellite is providing promising results, meeting or even exceeding expectations, a senior official of Suparco says. Talking about the development phase of the satellite, the official says that it was a tough task to complete it on time because the launch date had already been fixed and a delay of not even a day could be afforded.“The other satellite, PRSS-1, developed by China and Pakistan in collaboration, was due to launch on July 9, and PakTES-1A had to be co-launched, thus the Pakistani engineers worked day and night to have it ready by then,” he says.",
      span1:"Big players China and India",
      para2:"Every year, developed and emerging nations such as the United States, European Union, Japan, China and India cumulatively spend trillions of dollars on technologies to send humans into the space, deploy sophisticated satellites for a variety of purposes, and to find new worlds through space and ground-based telescopes.In recent times, China and India have emerged as next big players in the space industry.",
      img2:"/img/suparco.jpg",
      para3:`These countries provide logistical support and launching facilities to many nations who do not possess the necessary infrastructure to do that on their own.

      Pakistan, too, has historically relied on China to get its satellites launched into space. Yet to come on par with India in space sciences, Pakistan also lags behind in research related to astronomy with no major astronomical breakthrough coming from indigenous institutions, however, Pakistanis associated with NASA and European Space Agency (ESA) are performing with excellence in their respective fields.
      
      The official says that the non-availability of an indigenous launching facility was not an immediate area of concern. “Currently, we are focusing on developing satellites because we can nevertheless get them launched from another country. This satellite that we have developed is manufactured completely in Pakistan and is providing promising results. Once we are adept in development of satellite technology, we can venture out in other arenas as well,`

    }
  },
  {
    id: 2,
    catagory: "Travel",
    author: {
      username: "Ali",
      img: "",
      userId: 2
    },
    post: {
      img: "/img/33.jpg",
      title: "The Scottish Highlands",
      desc:
        "These Travel Blogs that have consistently been leaders in the industry for years on end. Award winners who are tops in their fields and mentors to up and coming blogs.",
      details: `Once you’ve installed it, the app will open in its own independent window outside of the browser, create desktop shortcuts, and offer a full feature set — like the ability to use your computer’s media keys to skip tracks or pause music — as if it were a “real,” native app.`,
      likes: 113,
      comments: [
        {
          author: {
            username: "Ali",
            img: "",
            userId: 2
          },

          comment: "this post is from pakistan"
        },
        {
          author: {
            username: "Aleem",
            img: "",
            userId: 3
          },
          comment: "this post is Good"
        }
      ]
    },
    createdAt: "23 Sep 2019",
    updatedAt: "12 june 2020",
    tags: ["js", "html", "css", "css3"],
    postDetails:{
      img:"/img/333.jpg",
      para1:"A surprise as it may be, one of the satellites launched the PakTES-1A, which was indigenously designed and developed by Pakistani engineers. Primarily aimed at remote sensing, the satellite is providing promising results, meeting or even exceeding expectations, a senior official of Suparco says. Talking about the development phase of the satellite, the official says that it was a tough task to complete it on time because the launch date had already been fixed and a delay of not even a day could be afforded.“The other satellite, PRSS-1, developed by China and Pakistan in collaboration, was due to launch on July 9, and PakTES-1A had to be co-launched, thus the Pakistani engineers worked day and night to have it ready by then,” he says.",
      span1:"Big players China and India",
      para2:"Every year, developed and emerging nations such as the United States, European Union, Japan, China and India cumulatively spend trillions of dollars on technologies to send humans into the space, deploy sophisticated satellites for a variety of purposes, and to find new worlds through space and ground-based telescopes.In recent times, China and India have emerged as next big players in the space industry.",
      img2:"/img/suparco.jpg",
      para3:`These countries provide logistical support and launching facilities to many nations who do not possess the necessary infrastructure to do that on their own.

      Pakistan, too, has historically relied on China to get its satellites launched into space. Yet to come on par with India in space sciences, Pakistan also lags behind in research related to astronomy with no major astronomical breakthrough coming from indigenous institutions, however, Pakistanis associated with NASA and European Space Agency (ESA) are performing with excellence in their respective fields.
      
      The official says that the non-availability of an indigenous launching facility was not an immediate area of concern. “Currently, we are focusing on developing satellites because we can nevertheless get them launched from another country. This satellite that we have developed is manufactured completely in Pakistan and is providing promising results. Once we are adept in development of satellite technology, we can venture out in other arenas as well,`

    }
  },
  {
    id: 3,
    catagory: "Politics",
    author: {
      username: "Imran",
      img: "",
      userId: 2
    },
    post: {
      img: "/img/44.jpg",
      title: "A chance to break a vicious pattern",
      desc:
        "These Travel Blogs that have consistently been leaders in the industry for years on end. Award winners who are tops in their fields and mentors to up and coming blogs.",
      details: `Once you’ve installed it, the app will open in its own independent window outside of the browser, create desktop shortcuts, and offer a full feature set — like the ability to use your computer’s media keys to skip tracks or pause music — as if it were a “real,” native app.`,
      likes: 113,
      comments: [
        {
          author: {
            username: "Ali",
            img: "",
            userId: 2
          },

          comment: "this post is from pakistan"
        },
        {
          author: {
            username: "Aleem",
            img: "",
            userId: 3
          },
          comment: "this post is Good"
        }
      ]
    },
    createdAt: "23 Sep 2019",
    updatedAt: "12 june 2020",
    tags: ["js", "html", "css", "css3"],
    postDetails:{
      img:"/img/444.jpg",
      para1:"A surprise as it may be, one of the satellites launched the PakTES-1A, which was indigenously designed and developed by Pakistani engineers. Primarily aimed at remote sensing, the satellite is providing promising results, meeting or even exceeding expectations, a senior official of Suparco says. Talking about the development phase of the satellite, the official says that it was a tough task to complete it on time because the launch date had already been fixed and a delay of not even a day could be afforded.“The other satellite, PRSS-1, developed by China and Pakistan in collaboration, was due to launch on July 9, and PakTES-1A had to be co-launched, thus the Pakistani engineers worked day and night to have it ready by then,” he says.",
      span1:"Big players China and India",
      para2:"Every year, developed and emerging nations such as the United States, European Union, Japan, China and India cumulatively spend trillions of dollars on technologies to send humans into the space, deploy sophisticated satellites for a variety of purposes, and to find new worlds through space and ground-based telescopes.In recent times, China and India have emerged as next big players in the space industry.",
      img2:"/img/666.jpg",
      para3:`These countries provide logistical support and launching facilities to many nations who do not possess the necessary infrastructure to do that on their own.

      Pakistan, too, has historically relied on China to get its satellites launched into space. Yet to come on par with India in space sciences, Pakistan also lags behind in research related to astronomy with no major astronomical breakthrough coming from indigenous institutions, however, Pakistanis associated with NASA and European Space Agency (ESA) are performing with excellence in their respective fields.
      
      The official says that the non-availability of an indigenous launching facility was not an immediate area of concern. “Currently, we are focusing on developing satellites because we can nevertheless get them launched from another country. This satellite that we have developed is manufactured completely in Pakistan and is providing promising results. Once we are adept in development of satellite technology, we can venture out in other arenas as well,`

    }
  },
  
];

module.exports  = postData;

// {
// id: 1,
//     catagory: "development",
//     author: {
//       username: "Ali",
//       img: "",
//       userId: 2
//     },
//     post: {
//       img: "",
//       title: "The End of App Stores Is Rapidly Approaching",
//       desc:
//         "Progressive web apps may soon free you from Google Play and the iOS App Store",
//       details: `Once you’ve installed it, the app will open in its own independent window outside of the browser, create desktop shortcuts, and offer a full feature set — like the ability to use your computer’s media keys to skip tracks or pause music — as if it were a “real,” native app.`,
//       likes: 13,
//       comments: [
//         {
//           author: {
//             username: "Ali",
//             img: "",
//             userId: 2
//           },

//           comment: "this post is awsome"
//         },
//         {
//           author: {
//             username: "Aleem",
//             img: "",
//             userId: 3
//           },
//           comment: "this post is Good"
//         }
//       ]
//     },
//     createdAt: "23 july 2019",
//     updatedAt: "12 june 2020",
//     tags: ["js", "html", "css", "css3"]
//   },
  // {
  //   id: 4,
  //   catagory: "react",
  //   author: {
  //     username: "Ali",
  //     img: "",
  //     userId: 2
  //   },
  //   post: {
  //     img: "",
  //     title: "Development of App Stores Is Rapidly Approaching",
  //     desc:
  //       "Progressive web apps may soon free you from Google Play and the iOS App Store",
  //     details: `Once you’ve installed it, the app will open in its own independent window outside of the browser, create desktop shortcuts, and offer a full feature set — like the ability to use your computer’s media keys to skip tracks or pause music — as if it were a “real,” native app.`,
  //     likes: 113,
  //     comments: [
  //       {
  //         author: {
  //           username: "Ali",
  //           img: "",
  //           userId: 2
  //         },

  //         comment: "this post is from pakistan"
  //       },
  //       {
  //         author: {
  //           username: "Aleem",
  //           img: "",
  //           userId: 3
  //         },
  //         comment: "this post is Good"
  //       }
  //     ]
  //   },
  //   createdAt: "23 july 2019",
  //   updatedAt: "12 june 2020",
  //   tags: ["js", "html", "css", "css3"]
  // },
//   {
//     id: 2,
//     catagory: "javascript",
//     author: {
//       username: "Abid",
//       img: "",
//       userId: 3
//     },
//     post: {
//       img: "",
//       title: "The Start of Google Stores Is Rapidly Approaching",
//       desc:
//         "Progressive web apps may soon free you from Google Play and the iOS App Store",
//       details: `Once you’ve installed it, the app will open in its own independent window outside of the browser, create desktop shortcuts, and offer a full feature set — like the ability to use your computer’s media keys to skip tracks or pause music — as if it were a “real,” native app.`,
//       likes: 14,
//       comments: [
//         {
//           author: {
//             username: "hasan",
//             img: "",
//             userId: 14
//           },

//           comment: "i like this post"
//         },
//         {
//           author: {
//             username: "farhan",
//             img: "",
//             userId: 17
//           },
//           comment: "post is fine"
//         }
//       ]
//     },
//     createdAt: "3 july 2019",
//     updatedAt: "2 june 2020",
//     tags: ["js", "html", "css", "css3"]
//   },
//   {
//     id: 3,
//     catagory: "python",
//     author: {
//       username: "Adil",
//       img: "",
//       userId: 23
//     },
//     post: {
//       img: "",
//       title: "Javascript is the assebly lang for web",
//       desc:
//         "javascript web apps may soon free you from Google Play and the iOS App Store",
//       details: `Once you’ve installed it, the app will open in its own independent window outside of the browser, create desktop shortcuts, and offer a full feature set — like the ability to use your computer’s media keys to skip tracks or pause music — as if it were a “real,” native app.`,
//       likes: 3,
//       comments: [
//         {
//           author: {
//             username: "usama",
//             img: "",
//             userId: 20
//           },

//           comment: "i commented on this post"
//         },
//         {
//           author: {
//             username: "azeem",
//             img: "",
//             userId: 11
//           },
//           comment: "this post is nice"
//         }
//       ]
//     },
//     createdAt: "43 july 2019",
//     updatedAt: "112 june 2020",
//     tags: ["js", "html", "css", "css3"]
//   }