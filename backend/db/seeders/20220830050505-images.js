'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://static.onecms.io/wp-content/uploads/sites/6/2019/05/96610_d18737-2000.jpg',
        title: "Black Widows",
        caption: 'All of the black widows laughing after having convinced Eric to give up individual immunity to Natalie and then seeing him voted out shortly thereafter'
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://cdn.vox-cdn.com/thumbor/QICqwHy6sXsar4z4Lk-CGFDWonc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19957599/JESSICA_ROCKS.jpg',
        title: "Rock Draw",
        caption: 'Poor Jessica. She put her game on the line and was brave enough to go to rocks, but the Survivor Gods were not on her side'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://thecinemaholic.com/wp-content/uploads/2021/11/Screenshot_7-6.jpg',
        title: "Man Eater Parvati",
        caption: 'No one could manipulate the men of Survivor better than Parvati. She had all the boys wrapped around her finger at all times and could get them to do anything she wanted.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://i.redd.it/7p851qysape31.jpg',
        title: "The Queen Stays Queen",
        caption: 'Sandra was the first player to ever win the game of Survivor twice. She will always be the Queen of Survivor.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fsurvivingtribal.com%2Ffiles%2F2017%2F07%2FTroyzan-Robertson-108343_D03324b.jpg',
        title: "Cirie Fields",
        caption: 'Cirie is a legend in the way she plays the game. Her social game is so strong, she always has every single player wanting to work with her and trust her.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://www.realityblurred.com/realitytv/images/2015/12/kelley-wentworth-hidden-immunity-idol-survivor-cambodia-second-chance.jpg',
        title: "Relentless Wentworth",
        caption: 'Kelly Wentworth was great in challenges and notorious for finding idols. She was always a huge threat in the game.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'http://content.kgw.com/photo/2017/03/08/ciera%20eastin%20survivor_1488997590413_8930752_ver1.0.JPG',
        title: "Ciera Eastin",
        caption: 'Ciera will always go down in Survivor history as being the one to vote out their own mother. Was such a brazen move, but she was always willing to do whatever it took to win the game.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://www.cheatsheet.com/wp-content/uploads/2020/04/Survivor-Sarah-Lacina.jpg',
        title: "Sarah Lacina",
        caption: 'Sarah is a bad ass in her own right. A hard-nosed cop who knows how to deceive and discern information from other players.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://pbs.twimg.com/media/EXYJYMWUEAQgGu9.jpg',
        title: "Michele Fitzgerald",
        caption: 'Michele has played the game twice and reached final tribal council both times. Her resume and tenacity speak for themselves.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://www.realityblurred.com/realitytv/images/2020/05/natalie-anderson-survivor-winners-at-war-episode-5.jpg',
        title: "Natalie Anderson",
        caption: 'Natalie played the game her first time with her twin sister Nadiya. She is a challenge beast and one of the most physical players to ever play the game.'
      },
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://images.saymedia-content.com/.image/t_share/MTc1MTEwNzA5Njk5NDg3NTU2/sexiest-women-of-survivor.jpg',
        title: "Amanda Kimmel",
        caption: 'Amanda was a cunning strategist and phenomenal social player. She may forever be known as the player to crumble at final tribal council, where she has failed to finish strong.'
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://s.yimg.com/os/creatr-uploaded-images/2019-04/bba21390-56a3-11e9-bd7f-71fa6d9f0229',
        title: "Lauren Faints",
        caption: "Contestant Lauren O'Connell pushes herself to the brink in an immunity challenge and ends up fainting from exhaustion and dehydration."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://www.goldderby.com/wp-content/uploads/2020/03/Survivor-jaw-dropping-twists-the-outcasts-Pearl-islands.jpg?w=620',
        title: "The Outcasts",
        caption: "In Survivor Pearl Islands, everyone was floored to learn that the first six contestants to be voted out would return for a chance to return to the game."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://sm-img.instaimgs.com/wp-content/uploads/2017/11/SurvivorShocking_PeanutButterStrip.jpg?tr=dpr-1,fo-auto,ar-,w-1000',
        title: "Highly Revealing",
        caption: "Jenna Morasca and Heidi Strobel were willing to bare all if it meant getting rewarded with chocolate and peanut butter after days of barely eating."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://wwwimage-tve.cbsstatic.com/base/files/johnnygrandma_0.jpg',
        title: "Fairplay's Grandma Lie",
        caption: "Johnny Fairplay will forever be infamous in the game of Survivor for planning to have a friend come to the loved-ones visit and lie saying that his grandmother had passed away."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://i0.wp.com/www.purplerockpodcast.com/wp-content/uploads/2015/08/survivor-china-jamesoutwithtwoidols.png',
        title: "James Blindsided with Souvenirs",
        caption: "James Clement of Survivor China got too comfortable in the game and was blindsided by his tribe while he was in possession of TWO hidden immunity idols."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://i0.wp.com/www.purplerockpodcast.com/wp-content/uploads/2015/04/cdpyfrxwyai9zif.png?fit=599%2C335&ssl=1',
        title: "Shirin Votes No",
        caption: "Contestant Will Sims asked host Jeff Probst if he could get his loved-ones letter. Jeff said he could as long as no one objected. But Shirin Oskooi, who had been subject to nasty bullying from Will, was the lone vote to say no."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://i.etsystatic.com/29267135/r/il/0f6b5c/3268068571/il_fullxfull.3268068571_oyvd.jpg',
        title: "JT Does a Deal with the Devil",
        caption: "James 'JT' Thomas believes supervillain Russell Hantz who is on the opposing tribe is on the outs with his tribemates. To try and sway him, JT gifted Russell a hidden immunity idol along with this hand-written note. JT was later voted out by Russell."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://inside-survivor.ams3.digitaloceanspaces.com/wp-content/uploads/2017/12/S35_Ep14_SG_121b.jpg',
        title: "Fire Making Challenge",
        caption: "Ben Driebergen & Devon Pinto duel in a fire making challenge. This wasn't the first ever fire making challenge, but it was the first time it was introduced as a mandatory part of the game at final four. Ben would win the challenge & go on to win the game."
      },
      {
        userId: 2,
        albumId: 2,
        imageURL: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/caleb-1-Cropped.jpg?q=50&fit=crop&w=1920&dpr=1.5',
        title: "Beastmode Cowboy's Medevac",
        caption: "Caleb 'Beastmode Cowboy' Reynolds had to be medically evacuated out of the game after suffering extreme heat exhaustion. He was removed from the game and flown in a helicopter to the nearest hospital where he would make a full recovery."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://i.ytimg.com/vi/hh7SlnmFa0o/maxresdefault.jpg',
        title: "Man-bun Joe",
        caption: "Joe Anglim is a yogi and one of the premiere challenge threats. Joe has won four individual immunities in a single season."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://wwwimage-us.pplusstatic.com/base/files/s30_ep13_sg_d012.jpg',
        title: "Mike Holloway",
        caption: "After Mike learned that his tribe had turned on him and was eager to vote him out, he went on to win 5 of the last 6 immunity challenges which helped him win the game."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://survivorglobe.weebly.com/uploads/1/2/5/8/12585159/1_377_orig.jpg',
        title: "Kelly Wiglesworth",
        caption: "Kelly played all the way back in season one. And she set the bar high for individual immunity wins by winning four in a single season."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1059,w_1884/https%3A%2F%2Fsurvivingtribal.com%2Ffiles%2F2017%2F05%2FBrad-SGC.jpg',
        title: "Brad Culpepper",
        caption: "It was no shock to anyone that Brad would be a challenge beast having been a professional quarterback in the NFL. He tied the record for most individual immunity wins in a single season with five wins."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://images.squarespace-cdn.com/content/v1/5dd863f5e7b0381e75533eb3/1574815373734-8HRYETUZ8P5VB1X654PC/chrissy+jeff.jpg',
        title: "Chrissy Hofbeck",
        caption: "Stay-at-home mom Chrissy really surprised everyone when she would string together a run of four individual immuntity wins which helped propel her to final tribal council."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://wwwimage-us.pplusstatic.com/base/files/636f8a7f53cbbee5_terry.jpg',
        title: "Terry Deitz",
        caption: "Terry was an oldschool player and one of the original challenge beasts. He is tied for the record for most idividual immunity wins with five in a single season."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://i.ytimg.com/vi/2cRCD_UsWGc/maxresdefault.jpg',
        title: "Ozzy",
        caption: "Oscar 'Ozzy' Lusth was a phenomenal athlete and amazing swimmer. He too is tied for the most individual immunity wins in a single season with five."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/07-89510-04235-0-e1604361679412.jpg?q=50&fit=crop&w=3000&dpr=1.5',
        title: "Cowboy Colby",
        caption: "Texan Colby Donaldson is currently tied with five other players for most individual immunity wins in a single season with five. He was the first to set the record in Survivor's third season, Survivor: The Australian Outback"
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2021/06/survivor-tompalau.jpg',
        title: "Fireman Tom",
        caption: "Fireman Tom Westman is considered one of the heroes of Survivor and is tied for most individual immunity wins in a single season with five."
      },
      {
        userId: 3,
        albumId: 3,
        imageURL: 'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1067,w_1600/https%3A%2F%2Fsurvivingtribal.com%2Ffiles%2Fimage-exchange%2F2017%2F07%2Fie_45702.jpeg',
        title: "Kim Spradlin-Wolfe",
        caption: "Kim helped her women's alliance dominate the game by shining in the immunity challenges. She was able to put up four wins in a single season."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2F114749_1979b-2000.jpg',
        title: "Island of the Idols",
        caption: "Boston Rob made a return in season thirty-nine Island of the Idols and a mentor and coach to the players in the game."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/09/Boston-Rob.jpg',
        title: "Idol Rob",
        caption: "This was Rob bragging about finding clues to an idol that he already had found and no one else knew about it. So he throws the clue to the idol into the volcano lol."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2011/05/boston_rob_mariano.jpg',
        title: "All-Stars",
        caption: "Boston Rob showed a dominating performance in All-Stars by winning four individual immunities."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://inside-survivor.ams3.digitaloceanspaces.com/wp-content/uploads/2016/02/12Cover.png',
        title: "Backstabbing Lex",
        caption: "During All-Stars, Rob asked friend Lex Van Den Berghe that if he could save his love interest Amber Brkich, he would return the favor. Once Lex saved Amber, Rob turned his back on Lex and proceeded to vote him out."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1070,w_1600/https%3A%2F%2Fsurvivingtribal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F05%2F50837537.jpeg',
        title: "Love is in the Air",
        caption: "At the finale of All-Stars, Rob proposed to his now wife Amber Brkich."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'http://media.nj.com/entertainment_impact_tv/photo/survivor-22-russell-hantz-boston-rob-njcomjpg-ed47907a4d9995a7.jpg',
        title: "Redemption Island Battle",
        caption: "After playing together on the season Heroes v Villains, enemies Boston Rob and Russell Hantz were brought back to compete against each other on separate tribes. Obviously Rob had the last laugh."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://pbs.twimg.com/media/DoDdtIyXUAAE-OV.jpg',
        title: "Family Affair",
        caption: "Boston Rob and Amber have their own little tribe of survivor fans in their four daughters."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://i.redd.it/xyzjqnd3y8e31.jpg',
        title: "Playing the Game",
        caption: "Boston Rob has played more times than anyone. These are four of the seasons he has played on, but he ended up returning to play for a fifth time afterwards."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://d1qxviojg2h5lt.cloudfront.net/images/01E4AKCHG8V82CC30FD723461A/survivorelders570.webp',
        title: "Rob and Ethan",
        caption: "Boston Rob sharing a laugh with good friend and cancer survivor Ethan Zohn."
      },
      {
        userId: 4,
        albumId: 4,
        imageURL: 'https://pnimg.net/w/articles/0/574/5a86edb89b.jpg',
        title: "A Gambling Man",
        caption: "Boston Rob is an avid poker player. Here he is winning a poker tournament in Reno, NV."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
