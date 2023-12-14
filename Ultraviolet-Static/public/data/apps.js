var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'addicon.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "geforce",
      "title": "GeForce NOW",
      "url": "https://play.geforcenow.com",
      'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.png'
    },
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      'image': 'https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYtI_MIrVq4WfN7M.qN7gV3ayNiQeJK6Uxg366DH3bnRmVWMFBWWyXonVyp6x0RYE1elb_jkQQQH7FwsNBBqQO4iFrOIwXtaGkMjmrISfBfgMsCEGwIBPArmzCSVWYx1zA--&format=source'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      'id': 'nowgg',
      'title': 'now.gg',
      'url': 'https://now.gg',
      'image': 'https://uploads-ssl.webflow.com/60f008ba9757da0940af288e/6232d610e4172bed260d4cfd_9Dw5vXGi_400x400.jpeg',
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png'
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'movieweb',
      'title': 'movie-web',
      'url': 'https://movie-web.app/search/movie',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vSkig-KYmo2_05aFXQFMgnfVqL5SLi-CJu-BeK-pLZpyU73LNduuKE4N5uW4QcyjQbFGiZR3lA7BfsB/pub?w=960&h=720'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
    {
      'id': 'win11',
      'title': 'Windows 11 in React',
      'url': 'https://win11.blueedge.me/',
      "image": "https://cdn.upload.systems/uploads/lnysPmIS.png",
      "description": "A remake of the Windows 11 UI in React.js"
    },
    {
      'id': 'gbaemulator',
      'title': 'Game Boy Emulator',
      'url': 'https://cattn.github.io/gba',
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dyd39CxufwgGFd_xRMfw-FKFUWpJNimH0QVziZ_EFRGyWxeL",
      "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
    },
    {
      'id': 'snapchat',
      'title': 'Snapchat',
      'url': 'https://nowgg.nl/play/Aptoide/1440/aptoide',
      "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQB1vggZ9ykno5lmGbt2NrNFh2Lkn66W5yOAQU3a1QnzQX3JBLx",
    },
    {
      'id': 'twitch',
      'title': 'Twitch',
      'url': 'https://twitch.tv',
      "image": "https://cdn.pixabay.com/photo/2021/12/10/16/38/twitch-6860918_1280.png",
    }
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  console.log("Loaded " + customapps.length + " custom apps")
