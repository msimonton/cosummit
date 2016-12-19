
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resort_details').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
knex('resort_details').insert({image:'http://www.tellurideskiresort.com/content/uploaded/images/home%20promos/main-street-sunset.jpg',about:"Telluride is a large full scale ski resort in southwestern Colorado. As opposed to some other resorts in Colorado, Telluride is far from any major cities, which makes it an uncrowded resort with few lift lines. It has terrain for all levels as well as terrain parks. Telluride has a ski village feel but is linked to the adjacent town of Telluride via a free gondola. Various transportation options make getting around the village and town easy. The town of Telluride is a historic mountain town with shopping and dining available. Telluride is a good choice for those seeking an uncrowded full scale resort.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        location:'Telluride Ski Resort is located in southwestern Colorado. It is 364 miles from Denver and 108 miles from Durango.',                                         airports:'Telluride Regional Airport- 6 miles, Montrose Regional Airport- 68 miles',                                                                 hours:'9:00 a.m. - 4:00 p.m.',                       acres:2000,     num_trails:125,     num_lifts:18,     base_elevation:8725,        summit_elevation:12570,     verticle_rise:3845,       annual_snowfall:309,      num_terrain_parks:3,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'23% Beginner 36% Intermediate 41%',                                                              resort_id:1}),
knex('resort_details').insert({image:'http://integral-performance.com/wp-content/uploads/2016/03/Beaver-Creek-Featured.jpg',about:"Beaver Creek is a large ski resort operated by same the owners of Vail and several other ski resorts. There is great skiing and that's only part of a stay here. Beaver Creek has everything you would expect from an upscale ski resort. Fine dining, boutiques and lots of activities. There are three separate villages as well as two small towns nearby. There is lodging and free shuttles in all the villages. The towns of Avon and Edwards have some economical lodging options and their own restaurants and shops. Beaver Creek is a popular chose for those wanting a resort with all the amenities",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             location:'Beaver Creek is located in central Colorado near the town of Avon. It is 109 miles from Denver.',                                                           airports:'Vail/Eagle Airport- 28 miles, Denver International Airport- 132 miles',                                                                    hours:'8:30 am - 4:00 pm',                           acres:1815,     num_trails:149,     num_lifts:25,     base_elevation:8100,        summit_elevation:11440,     verticle_rise:3340,       annual_snowfall:325,      num_terrain_parks:3,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'Beginner Terrain 19% Intermediate Terrain 43% Advanced/Expert Terrain 38%',                      resort_id:2}),
knex('resort_details').insert({image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx0z9Q7oyklMU9BpjcPjDYWyXfn11Lx0MiMZnyzJd4BO-m7b1B',about:"Aspen/Snowmass is really four interconnected ski areas, which are Aspen Mountain, Aspen Highlands, Buttermilk and Snowmass. Each mountain has its own feel. They make it fairly easy to check out the different mountains, with shuttles available. And of course there is the town of Aspen itself. Famous for its glitz and glamour and for its rich history. The ski resorts of Aspen and the town of Aspen are largely intertwined and the town is usually part of a ski vacation here, especially Aspen Mountain, Aspen Highlands and Buttermilk. Snowmass is a bit farther away and has more of a ski village feel. Great skiing and great nightlife make Aspen one of the most famous ski resorts in the world. Snowmass is a little distance away from the town of Aspen and the other resorts and has more of a ski village feel. At 3132 acres, it is one of the largest ski areas in Colorado. It has varied terrain for all levels and lots of great intermediate runs. There are terrain parks as well. It has the most vertical rise in the country and there are great views from the mountain. With Aspen a little distance away, the focus is on the skiing here and there are plenty of options for it.",               location:'Snowmass Village is located in western Colorado. It is 8 miles from the town of Aspen. It is 196 miles from Denver via I-70 through Glenwood Springs.',     airports:'Aspen/Pitkin County Airport- 6 miles, Denver International Airport- 219 miles',                                                            hours:'9 a.m. - 4 p.m.',                             acres:3132,     num_trails:91,      num_lifts:21,     base_elevation:8104,        summit_elevation:12510,     verticle_rise:4406,       annual_snowfall:300,      num_terrain_parks:3,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'Easiest: 6%, More Difficult: 50%, Most Difficult: 12%, Expert: 32%',                             resort_id:3}),
knex('resort_details').insert({image:'http://alterra.cc/media/turobj/images/Vail-10.jpg',about:"Vail is a world famous ski resort and it is the largest in Colorado as well as the United States. Its 5289 acres include miles of groomed terrain, bowl skiing, three base areas and three terrain parks. Vail is a full scale resort with high class hotels and dining, as well as many lodging and dining options to choose from in different price ranges. There are many boutiques and shops to explore. Lots of sunshine, snow, amenities off the slopes and varied terrain make Vail a major ski resort destination.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              location:'Vail is located in central Colorado and is 97 miles from Denver.',                                                                                          airports:'Vail/Eagle Airport- 35 miles, Denver International Airport- 120 miles',                                                                    hours:'9 a.m. - 3:30 p.m.',                          acres:5289,     num_trails:193,     num_lifts:31,     base_elevation:8120,        summit_elevation:11570,     verticle_rise:3450,       annual_snowfall:366,      num_terrain_parks:3,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'18% Beginner, 29% Intermediate, 53% Expert/Advanced',                                            resort_id:4}),
knex('resort_details').insert({image:'https://media-cdn.tripadvisor.com/media/photo-s/06/bb/78/d1/village-at-breckenridge.jpg',about:"Breckenridge is one of the most popular ski resorts in Colorado and with good reason. It has four peaks and 2358 acres of varied terrain and 5 terrain parks. It has alpine bowls, groomed tree lined runs, beginners runs and more. There's lots of great skiing to be had with full scale resort amenities. Breckenridge offers ski in and out lodging, fine dining, boutiques and plenty of other activities to enjoy. The town of Breckenridge is adjacent to the ski resort and has a Colorado ski town feel. Great skiing and amenities keep skiers coming back to Breckenridge.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  location:'Breckenridge is located in Summit County in central Colorado. It is 81 miles from Denver.',                                                                 airports:'Denver International Airport- 104 miles, Vail/Eagle Airport- 72 miles',                                                                    hours:'8:30 AM - 4:00 PM',                         acres:2358,     num_trails:155,     num_lifts:23,     base_elevation:9600,        summit_elevation:12998,     verticle_rise:3398,       annual_snowfall:300,      num_terrain_parks:5,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'	Beginner 14%, More Difficult 31%, Most Difficult 19%, Expert 36%',                              resort_id:5}),
knex('resort_details').insert({image:'https://media-cdn.tripadvisor.com/media/photo-s/06/bb/78/d1/village-at-breckenridge.jpg',about:"Aspen/Snowmass is really four interconnected ski areas, which are Aspen Mountain, Aspen Highlands, Buttermilk and Snowmass. Each mountain has its own feel. They make it fairly easy to check out the different mountains, with shuttles available. And of course there is the town of Aspen itself. Famous for its glitz and glamour and for its rich history. The ski resorts of Aspen and the town of Aspen are largely intertwined and the town is usually part of a ski vacation here, especially Aspen Mountain, Aspen Highlands and Buttermilk. Snowmass is a bit farther away and has more of a ski village feel. Great skiing and great nightlife make Aspen one of the most famous ski resorts in the world. Buttermilk is generally known as the beginner ski area of the Aspen/Snowmass group of resorts. In addition to its gentle rolling trails, it has a famous terrain park and has hosted the ESPN Winter X Games. Buttermilk is just a few miles from downtown Aspen and is serviced by shuttle.",                                                                                                                                                                                                                     location:'The town of Aspen is located in western Colorado. It is 198 miles from Denver via I-70 through Glenwood Springs.',                                          airports:'Aspen/Pitkin County Airport- 3 Miles to Aspen, Denver International Airport- 221 Miles to Aspen',                                          hours:'9 a.m. - 4 p.m.',                             acres:470,      num_trails:44,      num_lifts:8,      base_elevation:7870,        summit_elevation:9900,      verticle_rise:2030,       annual_snowfall:300,      num_terrain_parks:2,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'Easiest: 35%, More Difficult: 39%, Most Difficult: 26%, Expert: 0%',                             resort_id:6}),
knex('resort_details').insert({image:'http://www.airphotona.com/stockimg/images/06452.jpg',about:"Copper Mountain is a large 4 season resort in Summit County. It is one of the larger resorts in Colorado and has everything you would expect from a resort of its size; lots of varied terrain for different skier levels, backcountry type terrain, terrain parks and high speed lifts. There is a tubing hill to enjoy and plenty of other activities. The three close together ski villages have all the resort amenities. Copper Mountain is popular with locals and visitors alike.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                location:'Copper Mountain is located in central Colorado 77 miles west of Denver.',                                                                                   airports:'Denver International Airport- 102 miles, Vail/Eagle Airport- 55 miles',                                                                    hours:'9 a.m. - 4 p.m',                              acres:2465,     num_trails:126,     num_lifts:22,     base_elevation:9712,        summit_elevation:12313,     verticle_rise:2601,       annual_snowfall:282,      num_terrain_parks:4,      cat_ski:'yes',        night_ski:'No',             cross_ski:'Yes',          terrain:'21% Beginner, 25% Intermediate, 36% Advanced, 18% Expert',                                       resort_id:7}),
knex('resort_details').insert({image:'http://www.rmrm.net/wp-content/uploads/2011/12/copper-68-436x23.jpg',about:"Keystone is a major 4 season resort. It is one of the largest in Colorado. With over 3000 acres of skiing, it has terrain to suit everyone, from beginner terrain to backcountry expert skiing. Keystone has a terrain park and snowcat skiing available. It also offers night skiing on certain dates, one of the few Colorado resorts to do so. In addition to skiing, there is an extensive list of other activities. There are lots of lodging and dining options in the village. Keystone is a good choice for those looking for a complete ski village resort experience.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         location:'Keystone Resort is located in Summit County in central Colorado. It is 74 miles from Denver.',                                                              airports:'Denver International Airport- 97 miles, Vail/Eagle Airport- 72 miles',                                                                     hours:'8:30 a.m. - 4 p.m.',                          acres:3148,     num_trails:135,     num_lifts:20,     base_elevation:9280,        summit_elevation:12408,     verticle_rise:3128,       annual_snowfall:235,      num_terrain_parks:2,      cat_ski:'Yes',        night_ski:'Yes',            cross_ski:'Yes',          terrain:'Easiest: 19%, More Difficult: 32%, Most Difficult: 49%',                                         resort_id:8}),
knex('resort_details').insert({image:'http://www.coloradomtnproperties.com/wp-content/uploads/2015/06/Copper-Mountain-Ski-Real-Estate-near-Frisco-Colorado.jpg',about:"Aspen/Snowmass is really four interconnected ski areas, which are Aspen Mountain, Aspen Highlands, Buttermilk and Snowmass. Each mountain has its own feel. They make it fairly easy to check out the different mountains, with shuttles available. And of course there is the town of Aspen itself. Famous for its glitz and glamour and for its rich history. The ski resorts of Aspen and the town of Aspen are largely intertwined and the town is usually part of a ski vacation here, especially Aspen Mountain, Aspen Highlands and Buttermilk. Snowmass is a bit farther away and has more of a ski village feel. Great skiing and great nightlife make Aspen one of the most famous ski resorts in the world. Aspen Highlands is just a few miles from downtown Aspen and is serviced by shuttle. It is the largest of the 3 ski areas near downtown Aspen. It is famous for its expert only Highland Bowl, but it has the most varied terrain of the three resorts near downtown Aspen, with beginning through expert terrain. The famous Maroon Bells are visible from some parts of the mountain. Aspen Highlands is a varied ski area for different skier levels and terrain options.",                                      location:'The town of Aspen is located in western Colorado. It is 198 miles from Denver via I-70 through Glenwood Springs.',                                          airports:'Aspen/Pitkin County Airport- 3 Miles to Aspen, Denver International Airport- 221 Miles to Aspen',                                          hours:'9 a.m. - 4 p.m.',                             acres:1028,     num_trails:118,     num_lifts:5,      base_elevation:8040,        summit_elevation:11675,     verticle_rise:3635,       annual_snowfall:300,      num_terrain_parks:0,      cat_ski:'No',         night_ski:'No',             cross_ski:'Yes',          terrain:'Easiest: 18%, More Difficult: 30%, Most Difficult: 16%, Expert: 36%',                            resort_id:9}),
knex('resort_details').insert({image:'http://www.coloradomtnproperties.com/wp-content/uploads/2015/06/Copper-Mountain-Ski-Real-Estate-near-Frisco-Colorado.jpg',about:"Aspen/Snowmass is really four interconnected ski areas, which are Aspen Mountain, Aspen Highlands, Buttermilk and Snowmass. Each mountain has its own feel. They make it fairly easy to check out the different mountains, with shuttles available. And of course there is the town of Aspen itself. Famous for its glitz and glamour and for its rich history. The ski resorts of Aspen and the town of Aspen are largely intertwined and the town is usually part of a ski vacation here, especially Aspen Mountain, Aspen Highlands and Buttermilk. Snowmass is a bit farther away and has more of a ski village feel. Great skiing and great nightlife make Aspen one of the most famous ski resorts in the world. Aspen Mountain is right off downtown Aspen. It is famous for for its expert terrain. There are no beginner runs here. In addition to the lift served trails, there is snowcat skiing at Aspen Mountain that provides access to the backcountry area on the back of the mountain. At 675 acres, Aspen Mountain is not one of the larger ski areas, but is a popular choice for those wanting to experience the expert terrain and to ski right off downtown.",                                                      location:'The town of Aspen is located in western Colorado. It is 198 miles from Denver via I-70 through Glenwood Springs.',                                          airports:'Aspen/Pitkin County Airport- 3 Miles to Aspen, Denver International Airport- 221 Miles to Aspen',                                          hours:'9 a.m. - 4 p.m.',                             acres:675,      num_trails:76,      num_lifts:8,      base_elevation:7945,        summit_elevation:11212,     verticle_rise:3267,       annual_snowfall:300,      num_terrain_parks:0,      cat_ski:'Yes',        night_ski:'No',             cross_ski:'Yes',          terrain:'Easiest: 0%, More Difficult: 48%, Most Difficult 26%, Expert: 26%',                              resort_id:10}),
knex('resort_details').insert({image:'http://www.airphotona.com/stockimg/images/06452.jpg',about:"Crested Butte Mountain Resort sits at Mount Crested Butte and is a full scale ski resort. There is lots of groomed beginner and intermediate runs as well as some famous expert terrain. There is everything you would expect from a ski town here, from slope side lodging to the historic downtown. Besides skiing, there are tons of activities to enjoy. The Adventure Park offers a climbing wall, mini golf, bungee trampolines and a tubing hill. Crested Butte has a unique snowcat driving experience where you can actually drive a snowcat! There are cross country skiing and other winter activities nearby. There is a free shuttle to get around. It goes to and from the historic town. Crested Butte has lots going on to suit many different interests.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                location:'Crested Butte Mountain Resort is located in Crested Butte in western Colorado. It is 230 miles from Denver.',                                               airports:'Gunnison/Crested Butte Regional Airport- 30 miles, Montrose Regional Airport- 96 miles, Denver International Airport- 254 Miles',          hours:'9 a.m. - 4 p.m.',                             acres:1167,     num_trails:121,     num_lifts:15,     base_elevation:9375,        summit_elevation:12162,     verticle_rise:2787,       annual_snowfall:300,      num_terrain_parks:1,      cat_ski:'No',         night_ski:'No',             cross_ski:'No',           terrain:'23% Beginner, 57% Intermediate, 20% Advanced',                                                   resort_id:11}),
knex('resort_details').insert({image:'http://s3.amazonaws.com/medias.photodeck.com/150ecf9a-0b50-4c2c-b667-fe19e8b5aa87/431_Red_Lodge_Mountain_Aerial_xgaplus.jpg',about:"Steamboat is one of the largest ski resorts in Colorado. It is farther away from Denver than some of the other major resorts and has a more laid back feel. It is known for its great snow and powder skiing. Throughout its 2965 acres there is lots of different terrain, with many tree lined runs. The town of Steamboat Springs, with many amenities and events, is adjacent to the resort and is connected by a shuttle. There are lots of other activities to enjoy in the town, resort and surrounding areas.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   location:'Steamboat is located in northwest Colorado. It is 154 miles from Denver.',                                                                                  airports:'Steamboat/Hayden/Yampa Valley Airport- 27 miles, Denver International Airport- 177 miles',                                                 hours:'8:30 a.m. - 4:00 p.m.',                       acres:2965,     num_trails:165,     num_lifts:16,     base_elevation:6900,        summit_elevation:10568,     verticle_rise:3668,       annual_snowfall:349,      num_terrain_parks:4,      cat_ski:'No',         night_ski:'No',             cross_ski:'No',           terrain:'14% Beginner, 42% Intermediate, 44% Advanced',                                                   resort_id:12}),
knex('resort_details').insert({image:'http://www.airphotona.com/stockimg/images/06452.jpg',about:"Winter Park Resort is one of the closest resorts to Denver. It is a popular resort for Denver Metro residents because of its location and great skiing. It is one of the larger ski resorts in Colorado and is composed of a few interconnected areas. The Winter Park section has most of the beginner runs and Vasquez Ridge has plenty of intermediate runs. Mary Jane is famous for its moguls and is connected to Parsenn Bowl and the expert only Vasquez Cirque. There's lots of great terrain for various skier levels whether you're looking for a quick getaway from Denver or a full resort experience.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      location:'Winter Park Resort is located in central Colorado and is 65 miles from Denver.',                                                                            airports:'Denver International Airport- 89 miles',                                                                                                   hours:'9 a.m. - 4 p.m.',                   acres:3081,     num_trails:143,     num_lifts:25,     base_elevation:9000,        summit_elevation:12060,     verticle_rise:3060,       annual_snowfall:348,      num_terrain_parks:6,      cat_ski:'No',         night_ski:'No',             cross_ski:'No',           terrain:'	Beginner 8%, Intermediate 17%, Advanced 19%, Most Difficult 53%, Expert Only 3%',               resort_id:13}),
knex('resort_details').insert({image:'http://imagewerx.us/wp-content/uploads/2016/03/Copper-Mountain-logo.jpg',about:"Loveland Ski Area is one of the closest ski resorts to Denver. It is located by Loveland Pass on the Continental Divide. It gets lots of snow and has one of the longest ski seasons in Colorado. It is popular with locals because of its proximity to Denver, its long season and its relatively inexpensive lift tickets. There's lots of terrain here, with a beginners area for those just starting out. Loveland is not a full scale resort with lots of lodging and a ski town attached to it, but there is plenty of great skiing to be had and can be a quick ski getaway for locals and visitors to Denver.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   location:'Loveland Ski Area is located in central Colorado. It is 53 miles west of Denver and 12 miles from Silverthorne.',                                           airports:'Denver International Airport- 80 miles',                                                                                                   hours:'9:00 a.m. - 4:00 p.m.',                       acres:1570,     num_trails:93,      num_lifts:10,     base_elevation:13010,       summit_elevation:10800,     verticle_rise:2210,       annual_snowfall:422,      num_terrain_parks:1,      cat_ski:'Yes',        night_ski:'No',             cross_ski:'No',           terrain:'	13% Beginner, 41% Intermediate, 46% Advanced',                                                  resort_id:14}),
knex('resort_details').insert({image:'http://s3.amazonaws.com/medias.photodeck.com/150ecf9a-0b50-4c2c-b667-fe19e8b5aa87/431_Red_Lodge_Mountain_Aerial_xgaplus.jpg',about:"Arapahoe Basin, or A-Basin as it is often known, offers the highest skiable terrain in North America. This means that in Colorado, it is often the first resort to open and the last to close. Some years skiing lasts until June! The mountain, nicknamed 'The Legend', has plenty of open bowl skiing above timberline as well as tree lined runs. The relatively recent addition of the Montezuma Bowl on the back of Arapahoe Basin added an additional 400 acres and 36 runs, from intermediate to expert. There is no lodging at the resort, although there is a free shuttle from various nearby points in Summit County. Arapahoe Basin is popular with locals for its long season and homespun feel. There is a cafe, retail store and various restaurants at the resort.",                                                                                                                                                                                                                                                                                                                                                                                                                                                      location:'Arapahoe Basin is located in Summit County in central Colorado and is 63 miles from Denver.',                                                               airports:'Denver International Airport- 87 miles, Vail/Eagle Airport- 77 miles',                                                                     hours:'9 a.m. - 4 p.m.',                             acres:900,      num_trails:105,     num_lifts:7,      base_elevation:10780,       summit_elevation:13050,     verticle_rise:2270,       annual_snowfall:350,      num_terrain_parks:2,      cat_ski:'No',         night_ski:'No',             cross_ski:'No',           terrain:'Beginner: 10%. Intermediate: 30%, Advanced: 37%, Expert: 23%',                                   resort_id:15}),
knex('resort_details').insert({image:'http://imagewerx.us/wp-content/uploads/2016/03/Copper-Mountain-logo.jpg',about:"Monarch Mountain sits at Monarch Pass in south central Colorado. It receives abundant snow for great powder skiing. The varied terrain includes bowls, tree skiing and expert terrain. Although not one of the largest resorts in Colorado, with great snow, plenty of sun, reasonable lift tickets, less crowds and laid back feel, Monarch Mountain is often considered a hidden gem. There are easier runs and learn to ski packages as well as plenty of expert terrain. With the recent addition of Mirkwood Basin, there is now 130 more acres of extreme skiing terrain available. Monarch Mountain is nice choice for skiers of any ability looking for a relaxed resort experience.",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            location:'Monarch Mountain is in south central Colorado, 157 miles from Denver, 123 miles from Colorado Springs and 43 miles from Gunnison.',                         airports:'Denver International Airport- 180 miles, Gunnison-Crested Butte Regional Airport- 47 miles, Colorado Springs Airport- 126 miles',          hours:'9 a.m. - 4 p.m.',                             acres:800,      num_trails:63,      num_lifts:7,      base_elevation:10790,       summit_elevation:11952,     verticle_rise:1162,       annual_snowfall:350,      num_terrain_parks:2,      cat_ski:'Yes',        night_ski:'No',             cross_ski:'No',           terrain:'Beginner 14%, Intermediate 28%, Advanced 27%, Expert 31%',                                       resort_id:16})
      ]);
    });
};
